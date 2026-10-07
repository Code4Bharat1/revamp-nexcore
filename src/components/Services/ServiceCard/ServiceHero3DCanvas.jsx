"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import gsap from "gsap";

const ServiceHero3DCanvas = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Check prefers-reduced-motion
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup - Wide FOV & safe distance so no part of model ever clips on 360° rotation
    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(3.2, 2.2, 5.2);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL initialization failed:", e);
      setHasError(true);
      setIsLoading(false);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x08153a, 0); // Transparent to blend seamlessly with #08153A background
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    // LIGHTING SYSTEM - Realistic Studio Setup for Crisp, Bright Display
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Main Key Light facing screen and keyboard (Top-Front-Right)
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    // Front-facing Screen Illuminator
    const screenLight = new THREE.DirectionalLight(0xffffff, 2.2);
    screenLight.position.set(0, 2, 6);
    scene.add(screenLight);

    // Secondary Soft Fill Light
    const fillLight = new THREE.PointLight(0xffffff, 1.6, 12);
    fillLight.position.set(-3, 3, 4);
    scene.add(fillLight);

    // Subtle Orange Accent Detail Light
    const accentLight = new THREE.PointLight(0xff6600, 2.0, 8);
    accentLight.position.set(2, -1, 3);
    scene.add(accentLight);

    // Soft Rim Light (Back-Left)
    const rimLight = new THREE.DirectionalLight(0xffffff, 2.6);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    // FLOATING CONTACT SHADOW BENEATH 3D MODEL
    const createShadowTexture = () => {
      const sCanvas = document.createElement("canvas");
      sCanvas.width = 512;
      sCanvas.height = 512;
      const ctx = sCanvas.getContext("2d");
      const grad = ctx.createRadialGradient(256, 256, 10, 256, 256, 220);
      grad.addColorStop(0, "rgba(0, 0, 0, 0.85)");
      grad.addColorStop(0.3, "rgba(2, 6, 18, 0.65)");
      grad.addColorStop(0.6, "rgba(8, 21, 58, 0.35)");
      grad.addColorStop(0.85, "rgba(8, 21, 58, 0.12)");
      grad.addColorStop(1, "rgba(8, 21, 58, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);
      return new THREE.CanvasTexture(sCanvas);
    };

    const shadowGeo = new THREE.PlaneGeometry(5.0, 4.0);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: createShadowTexture(),
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.35;
    scene.add(shadowMesh);

    // MODEL HOLDER GROUP
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    let modelObject = null;
    let baseScaleFactor = 1;

    // RESPONSIVE FIT FUNCTION (Sized comfortably with safe margin for rotation)
    const updateModelFit = (object) => {
      if (!object) return;
      const box = new THREE.Box3().setFromObject(object);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);

      // Center the model at origin
      object.position.x = -center.x;
      object.position.y = -center.y + 0.05;
      object.position.z = -center.z;

      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim <= 0) return;

      const width = container.clientWidth;
      const height = container.clientHeight;
      const aspect = width / height;

      // Fit with safety margin so it NEVER clips at any rotation angle
      let targetScale = 3.3 / maxDim;
      if (width < 640) {
        targetScale = 2.3 / maxDim; // Mobile fit
      } else if (width < 1024) {
        targetScale = 2.8 / maxDim; // Tablet fit
      }

      baseScaleFactor = targetScale;
      modelGroup.scale.setScalar(targetScale);

      camera.aspect = aspect;
      camera.updateProjectionMatrix();

      if (width < 640) {
        camera.position.set(3.4, 2.5, 5.6);
      } else {
        camera.position.set(3.2, 2.2, 5.2);
      }
      camera.lookAt(0, 0, 0);
    };

    // LOAD GLB MODEL
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    const modelUrl = "/3D_Models/comma_draco.glb";

    loader.load(
      modelUrl,
      (gltf) => {
        modelObject = gltf.scene;

        // Enhance materials with bright, crisp rendering for the screen and keyboard
        modelObject.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.envMapIntensity = 1.3;
            child.material.roughness = Math.min(child.material.roughness, 0.8);
            child.material.needsUpdate = true;
          }
        });

        modelGroup.add(modelObject);
        updateModelFit(modelObject);
        setIsLoading(false);

        // Entrance scale reveal animation
        if (!isReducedMotion) {
          gsap.from(modelGroup.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1.0,
            ease: "back.out(1.5)",
          });
        }
      },
      undefined,
      (error) => {
        console.error("Failed to load 3D GLB model:", error);
        setHasError(true);
        setIsLoading(false);
      }
    );

    // MOUSE INTERACTION & DRAG ROTATION VARS
    let targetRotX = 0;
    let targetRotY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let dragRotX = 0;
    let dragRotY = 0;

    // Window / Container Mouse Movement Handler for Interactive Hover Tilt
    const handleMouseMove = (e) => {
      if (isDragging) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2));
      const y = ((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2));

      targetRotY = x * 0.35;
      targetRotX = -y * 0.22;
    };

    // Pointer Drag Rotation (Interactive Orbit Dragging)
    const handlePointerDown = (e) => {
      isDragging = true;
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
      canvas.style.cursor = "grabbing";
    };

    const handlePointerMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousPointerX;
      const deltaY = e.clientY - previousPointerY;

      dragRotY += deltaX * 0.008;
      dragRotX += deltaY * 0.006;

      dragRotX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, dragRotX));

      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const handlePointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      canvas.style.cursor = "grab";
    };

    const handleMouseEnter = () => {
      gsap.to(keyLight, { intensity: 3.6, duration: 0.4 });
      if (baseScaleFactor > 0) {
        gsap.to(modelGroup.scale, {
          x: baseScaleFactor * 1.02,
          y: baseScaleFactor * 1.02,
          z: baseScaleFactor * 1.02,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (!isDragging) {
        targetRotX = 0;
        targetRotY = 0;
      }
      gsap.to(keyLight, { intensity: 3.2, duration: 0.5 });
      if (baseScaleFactor > 0) {
        gsap.to(modelGroup.scale, {
          x: baseScaleFactor,
          y: baseScaleFactor,
          z: baseScaleFactor,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    // Attach Event Listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      if (modelObject) {
        updateModelFit(modelObject);
      }
    };

    window.addEventListener("resize", handleResize);

    // INTERSECTION OBSERVER - PAUSE WHEN OFF-SCREEN
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // ANIMATION LOOP
    let animId = null;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible || document.hidden) return;

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // 1. IDLE FLOATING + INTERACTIVE MOUSE/DRAG ROTATION
      if (modelGroup) {
        const floatY = isReducedMotion ? 0 : Math.sin(elapsedTime * 1.2) * 0.07;
        const breathRotZ = isReducedMotion ? 0 : Math.sin(elapsedTime * 0.8) * 0.01;

        const currentTargetY = dragRotY + targetRotY;
        const currentTargetX = dragRotX + targetRotX;

        modelGroup.rotation.y += (currentTargetY - modelGroup.rotation.y) * 0.08;
        modelGroup.rotation.x += (currentTargetX - modelGroup.rotation.x) * 0.08;

        modelGroup.position.y = floatY;
        modelGroup.rotation.z = breathRotZ;

        // Dynamically adjust floating contact shadow
        if (shadowMesh && shadowMat) {
          const shadowScale = 1.0 - floatY * 0.5;
          shadowMesh.scale.set(shadowScale, shadowScale, 1.0);
          shadowMat.opacity = Math.max(0.4, 0.75 - floatY * 0.35);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      dracoLoader.dispose();
      renderer.dispose();
    };
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[460px] sm:min-h-[520px] rounded-3xl bg-transparent flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#FF6600]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-white">Interactive 3D Tech Suite</span>
        <span className="text-xs text-white/60 mt-1 max-w-xs">Hardware-Accelerated WebGL Experience</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-transparent">
          <div className="w-10 h-10 border-2 border-[#FF6600]/20 border-t-[#FF6600] rounded-full animate-spin" />
        </div>
      )}

      {/* 3D WebGL Canvas with Grab Cursor */}
      <canvas ref={canvasRef} className="w-full h-full outline-none cursor-grab active:cursor-grabbing block bg-transparent" />
    </div>
  );
};

export default ServiceHero3DCanvas;
