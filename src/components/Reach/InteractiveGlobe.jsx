"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { locations } from "@/data/reach";

function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

function createPhysicalEarthTexture() {
  const loader = new THREE.TextureLoader();
  const texture = loader.load("/textures/earth_physical.jpg");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

function createTeardropPinTexture(isActive = false, isHQ = false) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 160;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.Texture();

  const pinFill = isActive ? "#FF3B30" : "#0284C7";
  const cx = 64,
    cy = 54,
    r = 34,
    tipX = 64,
    tipY = 148;
  const alpha = Math.asin(Math.min(0.99, r / (tipY - cy)));

  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.arc(cx, cy, r, Math.PI - alpha, Math.PI * 2 + alpha, false);
  ctx.lineTo(tipX, tipY);
  ctx.closePath();

  ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 3;
  ctx.fillStyle = pinFill;
  ctx.fill();

  ctx.shadowColor = "transparent";
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 3.5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx, cy, 11, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();

  if (isHQ) {
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fillStyle = pinFill;
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export const InteractiveGlobe = ({ activeLocationId, className = "" }) => {
  const containerRef = useRef(null);
  const activeLocationIdRef = useRef(activeLocationId);

  useEffect(() => {
    activeLocationIdRef.current = activeLocationId;
  }, [activeLocationId]);

  const targetZoom = useRef(15.5);
  const currentZoom = useRef(15.5);
  const targetRotation = useRef({ x: 0.15, y: -1.2 });
  const currentRotation = useRef({ x: 0.15, y: -1.2 });
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const idleResumeTimer = useRef(0);
  const globeRadius = 5.0;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, currentZoom.current);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1.7));
    const sunLight = new THREE.DirectionalLight(0xfff8ee, 2.2);
    sunLight.position.set(12, 16, 12);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0xbae6fd, 1.1);
    fillLight.position.set(-12, -8, -10);
    scene.add(fillLight);

    // Globe
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const earthTexture = createPhysicalEarthTexture();
    const globeMesh = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius, 64, 64),
      new THREE.MeshStandardMaterial({
        map: earthTexture,
        roughness: 0.5,
        metalness: 0.02,
      })
    );
    globeGroup.add(globeMesh);

    // Pins & Arcs
    const defaultBlueTex = createTeardropPinTexture(false, false);
    const defaultHqTex = createTeardropPinTexture(false, true);
    const activeRedTex = createTeardropPinTexture(true, false);
    const activeHqRedTex = createTeardropPinTexture(true, true);

    const pinObjects = [];
    const hqLoc = locations.find((l) => l.kind === "hq") || locations[0];
    const hqPos = latLngToVector3(hqLoc.lat, hqLoc.lng, globeRadius);

    locations.forEach((loc) => {
      const pos = latLngToVector3(loc.lat, loc.lng, globeRadius);
      const isHQ = loc.kind === "hq";

      const spriteMat = new THREE.SpriteMaterial({
        map: isHQ ? defaultHqTex : defaultBlueTex,
        transparent: true,
        depthWrite: false,
        depthTest: true,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.center.set(0.5, 12 / 160);
      sprite.position.copy(pos.clone().multiplyScalar(1.008));
      const scaleX = isHQ ? 0.4 : 0.35;
      sprite.scale.set(scaleX, scaleX * (160 / 128), 1.0);

      const anchorDot = new THREE.Mesh(
        new THREE.CircleGeometry(0.04, 16),
        new THREE.MeshBasicMaterial({
          color: 0x0284c7,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
      anchorDot.position.copy(pos.clone().multiplyScalar(1.002));
      anchorDot.lookAt(pos.clone().multiplyScalar(2));

      const pulseRing = new THREE.Mesh(
        new THREE.RingGeometry(0.06, 0.22, 24),
        new THREE.MeshBasicMaterial({
          color: 0xff3b30,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        })
      );
      pulseRing.position.copy(pos.clone().multiplyScalar(1.004));
      pulseRing.lookAt(pos.clone().multiplyScalar(2));
      pulseRing.visible = false;

      globeGroup.add(anchorDot);
      globeGroup.add(pulseRing);
      globeGroup.add(sprite);

      pinObjects.push({
        id: loc.id,
        sprite,
        baseScale: { x: scaleX, y: scaleX * (160 / 128) },
        anchorDot,
        pulseRing,
        normalTex: isHQ ? defaultHqTex : defaultBlueTex,
        activeTex: isHQ ? activeHqRedTex : activeRedTex,
      });

      // 3D Connected Arcs from Mumbai
      if (!isHQ) {
        const midPoint = hqPos.clone().add(pos).multiplyScalar(0.5);
        midPoint
          .normalize()
          .multiplyScalar(globeRadius + hqPos.distanceTo(pos) * 0.32);
        const curve = new THREE.QuadraticBezierCurve3(hqPos, midPoint, pos);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(
          curve.getPoints(40)
        );
        const arcLine = new THREE.Line(
          arcGeo,
          new THREE.LineBasicMaterial({
            color: 0x38bdf8,
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending,
          })
        );
        globeGroup.add(arcLine);
      }
    });

    // Drag / Wheel Handlers
    const onPointerDown = (e) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
      idleResumeTimer.current = 6.0;
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;
      targetRotation.current.y += deltaX * 0.005;
      targetRotation.current.x = Math.max(
        -0.85,
        Math.min(0.85, targetRotation.current.x + deltaY * 0.005)
      );
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging.current = false;
      idleResumeTimer.current = 0.5;
    };

    const dom = renderer.domElement;
    dom.style.cursor = "grab";
    dom.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Animation Loop
    let animId = null;
    let isGlobeVisible = true;
    const startTime = performance.now();
    let lastTime = performance.now();

    const animate = () => {
      if (!isGlobeVisible) {
        animId = null;
        return;
      }
      animId = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = (now - lastTime) * 0.001;
      lastTime = now;
      const time = (now - startTime) * 0.001;

      // Continuous smooth self-rotation
      if (!isDragging.current) {
        if (idleResumeTimer.current > 0) {
          idleResumeTimer.current -= delta;
        } else {
          targetRotation.current.y += 0.0035;
        }
      }

      currentRotation.current.y +=
        (targetRotation.current.y - currentRotation.current.y) * 0.08;
      currentRotation.current.x +=
        (targetRotation.current.x - currentRotation.current.x) * 0.08;

      globeGroup.rotation.y = currentRotation.current.y;
      globeGroup.rotation.x = currentRotation.current.x;

      // Fixed zoom / scale
      camera.position.z = 15.0;

      const currentActiveId = activeLocationIdRef.current;
      pinObjects.forEach(
        ({
          id,
          sprite,
          baseScale,
          anchorDot,
          pulseRing,
          normalTex,
          activeTex,
        }) => {
          const isActive = id === currentActiveId;
          if (isActive) {
            sprite.material.map = activeTex;
            const pulse = 1.32 + Math.sin(time * 6) * 0.08;
            sprite.scale.set(baseScale.x * pulse, baseScale.y * pulse, 1.0);
            anchorDot.material.color.setHex(0xff3b30);
            const ringPulse = 1.0 + ((time * 2.5) % 1) * 1.6;
            pulseRing.scale.set(ringPulse, ringPulse, 1.0);
            pulseRing.material.opacity = Math.max(
              0,
              0.85 - ((time * 2.5) % 1) * 0.85
            );
            pulseRing.visible = true;
          } else {
            sprite.material.map = normalTex;
            sprite.scale.set(baseScale.x, baseScale.y, 1.0);
            anchorDot.material.color.setHex(0x0284c7);
            pulseRing.visible = false;
          }
        }
      );

      renderer.render(scene, camera);
    };

    // Responsive Resize Handling
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isGlobeVisible = entry.isIntersecting;
        if (isGlobeVisible && !animId) {
          lastTime = performance.now();
          animate();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    animate();

    return () => {
      resizeObserver.disconnect();
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
      dom.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      if (container.contains(dom)) container.removeChild(dom);
      renderer.dispose();
    };
  }, []);

  // Center on pin when location changes
  useEffect(() => {
    if (!activeLocationId) return;
    const loc = locations.find((l) => l.id === activeLocationId);
    if (!loc) return;

    targetRotation.current.y = -(loc.lng + 90) * (Math.PI / 180);
    targetRotation.current.x = (loc.lat - 6) * (Math.PI / 180) * 0.45;
    idleResumeTimer.current = 2.0;
  }, [activeLocationId]);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
    >
      <div ref={containerRef} className="absolute inset-0 w-full h-full flex items-center justify-center" />
    </div>
  );
};

export default InteractiveGlobe;
