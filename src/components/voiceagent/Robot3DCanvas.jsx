"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Bot, Sparkles as SparklesIcon } from "lucide-react";

const MODEL_PATH = "/3D_Models/robot_draco.glb";

export default function Robot3DCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let scene, camera, renderer, controls;
    let robotPivot, coreLight, innerRing, outerRing, particlePoints;
    const startTime = performance.now();

    // Mouse coordinates in normalized [-1, 1]
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // 1. SCENE & CAMERA
    scene = new THREE.Scene();

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 500;

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 4.2);

    // 2. RENDERER SETUP
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // 3. ORBIT CONTROLS
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.rotateSpeed = 0.6;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.minPolarAngle = Math.PI / 4;

    // 4. LIGHTING SETUP
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainLight.position.set(5, 8, 5);
    scene.add(mainLight);

    const cyanRimLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    cyanRimLight.position.set(-5, 3, -4);
    scene.add(cyanRimLight);

    coreLight = new THREE.PointLight(0x06b6d4, 2.5, 5);
    coreLight.position.set(0, 1.2, 0.8);
    scene.add(coreLight);

    const bottomLight = new THREE.PointLight(0x818cf8, 1.5, 6);
    bottomLight.position.set(0, -2, 2);
    scene.add(bottomLight);

    // 5. HOLOGRAPHIC GROUND RINGS
    const ringGroup = new THREE.Group();
    ringGroup.position.set(0, -1.35, 0);
    ringGroup.rotation.x = -Math.PI / 2;

    const innerGeo = new THREE.RingGeometry(1.2, 1.25, 64);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    innerRing = new THREE.Mesh(innerGeo, innerMat);
    ringGroup.add(innerRing);

    const outerGeo = new THREE.RingGeometry(1.4, 1.42, 64);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    outerRing = new THREE.Mesh(outerGeo, outerMat);
    ringGroup.add(outerRing);

    scene.add(ringGroup);

    // 6. ORBITING SPARKLES / PARTICLES
    const particleCount = 100;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 4;
      particlePositions[i + 2] = (Math.random() - 0.5) * 5;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
    });
    particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // 7. ROBOT PIVOT GROUP
    robotPivot = new THREE.Group();
    scene.add(robotPivot);

    // 8. LOAD 3D GLB MODEL
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      MODEL_PATH,
      (gltf) => {
        const model = gltf.scene;

        // Tweak materials for metallic shine
        model.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.roughness = 0.35;
            child.material.metalness = 0.65;
          }
        });

        // Center model bounds
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        model.position.x = -center.x;
        model.position.y = -box.min.y; // Align bottom to 0
        model.position.z = -center.z;

        // Wrap inside scaled pivot
        const modelGroup = new THREE.Group();
        modelGroup.add(model);

        // Scale to fit cleanly
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.2 / (maxDim || 1);
        modelGroup.scale.set(scale, scale, scale);
        modelGroup.position.y = -1.1; // Place above ground ring

        robotPivot.add(modelGroup);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading GLB model:", error);
        setLoadError(true);
        setLoading(false);
      }
    );

    // 9. MOUSE MOVE LISTENER
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 10. RESIZE OBSERVER
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    visibilityObserver.observe(container);

    // 11. RENDER / ANIMATION LOOP
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden) return;

      const t = (performance.now() - startTime) * 0.001;

      // Smooth mouse lerp for head/body rotation tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (robotPivot) {
        // Head / Body tracking
        robotPivot.rotation.y = mouse.x * 0.55;
        robotPivot.rotation.x = -mouse.y * 0.35;

        // Idle floating breathing motion
        robotPivot.position.y = Math.sin(t * 1.8) * 0.08;
        robotPivot.rotation.z = Math.sin(t * 1.2) * 0.025;
      }

      // AI Core Light Pulsing
      if (coreLight) {
        coreLight.intensity = 2.0 + Math.sin(t * 4) * 0.8;
      }

      // Hologram ring rotation
      if (innerRing) {
        innerRing.rotation.z = t * 0.4;
      }
      if (outerRing) {
        outerRing.rotation.z = -t * 0.25;
      }

      // Sparkles slow rotation
      if (particlePoints) {
        particlePoints.rotation.y = t * 0.05;
        particlePoints.rotation.x = Math.sin(t * 0.03) * 0.1;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP ON UNMOUNT
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      // Dispose Three.js objects
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      dracoLoader.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[500px] md:h-[540px] rounded-3xl bg-gradient-to-b from-slate-950 via-[#0b1329] to-[#040814] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.18)] overflow-hidden group select-none"
    >
      {/* Background Futuristic Grid Lines & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Floating Status Badges */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <SparklesIcon className="w-3.5 h-3.5 text-cyan-400" />
        <span>AI Voice Brain</span>
      </div>



      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md rounded-3xl z-30 text-white">
          <div className="relative w-16 h-16 flex items-center justify-center mb-3">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 border-t-cyan-400 animate-spin" />
            <Bot className="w-7 h-7 text-cyan-400 animate-pulse" />
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
            Initializing 3D Robot AI...
          </span>
          <span className="text-[10px] text-gray-400 mt-1">Rendering high-tech model</span>
        </div>
      )}

      {/* Error Overlay */}
      {loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-30 text-red-400 p-6 text-center">
          <Bot className="w-10 h-10 mb-2 opacity-60" />
          <p className="text-sm font-semibold">Unable to load 3D Robot Model</p>
          <p className="text-xs text-gray-400 mt-1">Check file path or webgl context</p>
        </div>
      )}

      {/* Canvas Element */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />
    </div>
  );
}
