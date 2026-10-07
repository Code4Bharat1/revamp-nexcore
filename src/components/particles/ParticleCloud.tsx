'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { getShapeForService, PARTICLE_COUNT } from './shapes';

function createSoftParticleTexture(gl: THREE.WebGLRenderer | null) {
  if (typeof document === 'undefined') return null;
  const size = 128;
  const half = size / 2;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) return null;
  const gradient = context.createRadialGradient(half, half, 0, half, half, half);
  gradient.addColorStop(0,    'rgba(255, 255, 255, 1.0)');
  gradient.addColorStop(0.08, 'rgba(230, 220, 255, 0.95)');
  gradient.addColorStop(0.20, 'rgba(180, 160, 255, 0.75)');
  gradient.addColorStop(0.40, 'rgba(120, 100, 230, 0.35)');
  gradient.addColorStop(0.70, 'rgba( 60,  40, 180, 0.08)');
  gradient.addColorStop(1.0,  'rgba(  0,   0,   0, 0.0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  // Sharper on high-DPR / Retina displays
  if (gl) tex.anisotropy = Math.min(gl.capabilities.getMaxAnisotropy(), 4);
  return tex;
}

interface ParticleCloudProps {
  activeServiceId: string | null;
}

export const ParticleCloud: React.FC<ParticleCloudProps> = ({ activeServiceId }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse, viewport, gl } = useThree();

  /**
   * Three.js initialises mouse at (0, 0) = canvas center on every page load.
   * If we apply repulsion immediately, ALL particles within 0.8 units of
   * center get blasted outward — creating the hollow-ring / donut glitch.
   * We park the repulsion point far off-screen until the user actually moves.
   */
  const hasMouseMovedRef = useRef(false);

  // Pass gl so we can set anisotropy for sharper textures on high-DPR displays
  const particleTexture = useMemo(() => createSoftParticleTexture(gl), [gl]);
  
  const currentPositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);
  const targetPositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);
  const renderPositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);
  const randomOffsets = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 0.1;
    }
    return arr;
  }, []);
  
  // ── Initialise positions on first mount and keep BufferAttribute in sync ──
  useEffect(() => {
    const initialShape = getShapeForService(activeServiceId);
    for (let i = 0; i < initialShape.length; i++) {
      currentPositions[i] = initialShape[i];
      targetPositions[i]  = initialShape[i];
      renderPositions[i]  = initialShape[i];
    }
    // Sync the BufferAttribute so the GPU sees the initial shape immediately
    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      attr.copyArray(renderPositions);
      attr.needsUpdate = true;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Update target when the active service changes ──────────────────────────
  useEffect(() => {
    const newTarget = getShapeForService(activeServiceId);
    for (let i = 0; i < newTarget.length; i++) {
      targetPositions[i] = newTarget[i];
    }
  }, [activeServiceId, targetPositions]);

  // ── Dispose GPU resources on unmount to prevent memory leaks ───────────────
  useEffect(() => {
    return () => {
      if (pointsRef.current) {
        pointsRef.current.geometry.dispose();
        const mat = pointsRef.current.material as THREE.PointsMaterial;
        mat.dispose();
      }
      particleTexture?.dispose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((state, rawDelta) => {
    if (!pointsRef.current) return;

    // ── Clamp delta: prevents particle explosions after tab switch,
    //    slow server-side cold-start frames, or GC pauses.
    const delta = Math.min(rawDelta, 0.1);

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Mark mouse as active once it leaves the default (0, 0) origin.
    // Until then, park repulsion far off-screen so it never fires at startup.
    if (!hasMouseMovedRef.current && (mouse.x !== 0 || mouse.y !== 0)) {
      hasMouseMovedRef.current = true;
    }
    const mouseX = hasMouseMovedRef.current ? (mouse.x * viewport.width)  / 2 : 99999;
    const mouseY = hasMouseMovedRef.current ? (mouse.y * viewport.height) / 2 : 99999;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;
      const time = state.clock.elapsedTime;

      // Tight jitter — shapes stay crisp and readable
      const jx = Math.sin(time * 0.9 + randomOffsets[idx])     * 0.018;
      const jy = Math.cos(time * 0.9 + randomOffsets[idx + 1]) * 0.018;
      const jz = Math.sin(time * 0.6 + randomOffsets[idx + 2]) * 0.018;

      // Morphing lerp
      currentPositions[idx] += (targetPositions[idx] - currentPositions[idx]) * (delta * 2.5);
      currentPositions[idx + 1] += (targetPositions[idx + 1] - currentPositions[idx + 1]) * (delta * 2.5);
      currentPositions[idx + 2] += (targetPositions[idx + 2] - currentPositions[idx + 2]) * (delta * 2.5);

      let px = currentPositions[idx] + jx;
      let py = currentPositions[idx + 1] + jy;
      let pz = currentPositions[idx + 2] + jz;

      // Mouse repulsion
      const dx = px - mouseX;
      const dy = py - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const repelRadius = 0.8;
      if (dist < repelRadius && dist > 0.01) {
        const force = Math.pow((repelRadius - dist) / repelRadius, 2.0); 
        currentPositions[idx] += (dx / dist) * force * delta * 4.0;
        currentPositions[idx + 1] += (dy / dist) * force * delta * 4.0;
        currentPositions[idx + 2] += force * delta * 1.5;
        
        px = currentPositions[idx] + jx;
        py = currentPositions[idx + 1] + jy;
        pz = currentPositions[idx + 2] + jz;
      }

      positions[idx] = px;
      positions[idx + 1] = py;
      positions[idx + 2] = pz;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} scale={1.2}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[renderPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.10}
        sizeAttenuation={true}
        map={particleTexture || undefined}
        transparent={true}
        alphaTest={0.004}     // Discard near-invisible fragments → cleaner edges
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#a088ff"       // Slightly brighter indigo for better contrast
        opacity={0.98}
      />
    </points>
  );
};
