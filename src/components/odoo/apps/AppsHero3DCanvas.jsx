"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AppsHero3DCanvas() {
  const mountRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let timer;
    if (typeof window !== "undefined") {
      timer = setTimeout(() => {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(() => setMounted(true));
        } else {
          setMounted(true);
        }
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08153a, 0.0015);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Clear existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup for App Matrix
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const cyanPoint = new THREE.PointLight(0x00f0ff, 4, 30);
    cyanPoint.position.set(8, 8, 8);
    scene.add(cyanPoint);

    const orangePoint = new THREE.PointLight(0xff6600, 4, 30);
    orangePoint.position.set(-8, -6, 8);
    scene.add(orangePoint);

    const purplePoint = new THREE.PointLight(0xa855f7, 3, 25);
    purplePoint.position.set(0, 10, -5);
    scene.add(purplePoint);

    // 3. Main 3D Group - Modular App Matrix (Full Screen Centered)
    const mainGroup = new THREE.Group();
    mainGroup.position.set(0, 0, 0);
    scene.add(mainGroup);

    // A) Central Holographic Outer Cage (Full-screen Wireframe Dodecahedron)
    const cageGeo = new THREE.DodecahedronGeometry(6.4, 0);
    const cageMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      metalness: 0.9,
      roughness: 0.1,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    mainGroup.add(cageMesh);

    // B) Inner App Cubes (Representing Odoo CRM, Accounting, Inventory, POS, HR, Sales, etc.)
    const appCubes = [];
    const appColors = [
      0xff6600, // Odoo Orange (CRM / Sales)
      0x00f0ff, // Neon Cyan (Invoicing / Finance)
      0x10b981, // Emerald (Inventory / Supply)
      0xa855f7, // Purple (HR / People)
      0xec4899, // Pink (Ecommerce / POS)
      0x3b82f6, // Blue (Documents / Projects)
      0xf59e0b, // Amber (Marketing)
      0x06b6d4, // Teal (Helpdesk)
    ];

    // Grid of 10 floating modular App Cubes arranged across full 3D space
    const positions = [
      [-3.5, 2.4, 1.8],
      [3.5, 2.4, -1.8],
      [-3.5, -2.4, -1.8],
      [3.5, -2.4, 1.8],
      [0, 3.8, 0],
      [0, -3.8, 0],
      [4.4, 0, 1.0],
      [-4.4, 0, -1.0],
      [-2.2, 0, 3.2],
      [2.2, 0, -3.2],
    ];

    // Shared Geometries for optimal memory and GPU performance
    const cubeGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const edgesGeo = new THREE.EdgesGeometry(cubeGeo);
    const coreGeo = new THREE.IcosahedronGeometry(0.45, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });

    positions.forEach((pos, idx) => {
      const color = appColors[idx % appColors.length];

      // High-performance Standard Material (matches aesthetic without transmission render pass)
      const cubeMat = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.4,
        roughness: 0.2,
        transparent: true,
        opacity: 0.85,
        emissive: color,
        emissiveIntensity: 0.35,
      });
      const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
      cubeMesh.position.set(...pos);

      // Inner Glowing Core Sphere inside each App Cube
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      cubeMesh.add(coreMesh);

      // Laser Wireframe Edge outline for high-tech aesthetic
      const edgesMat = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.7,
      });
      const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
      cubeMesh.add(edgesMesh);

      mainGroup.add(cubeMesh);

      appCubes.push({
        mesh: cubeMesh,
        core: coreMesh,
        initialPos: new THREE.Vector3(...pos),
        color: color,
        speed: 0.8 + idx * 0.15,
      });
    });

    // C) Connecting Dynamic Laser Streams between App Cubes
    const lineGroup = new THREE.Group();
    mainGroup.add(lineGroup);
    const connectingLines = [];

    for (let i = 0; i < appCubes.length; i++) {
      const nextIdx = (i + 1) % appCubes.length;
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        appCubes[i].mesh.position,
        appCubes[nextIdx].mesh.position,
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: appCubes[i].color,
        transparent: true,
        opacity: 0.35,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      lineGroup.add(line);
      connectingLines.push({
        line,
        from: appCubes[i],
        to: appCubes[nextIdx],
      });
    }

    // D) Particle Wave Floor Grid below the matrix
    const particleCount = 600;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 50;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 40 - 5;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const c = new THREE.Color(appColors[i % appColors.length]);
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 4. Mouse Parallax & Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (event.clientX - windowHalfX) * 0.0012;
      targetMouseY = (event.clientY - windowHalfY) * 0.0012;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 5. GSAP Scroll Animation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    scrollTl.to(
      mainGroup.rotation,
      {
        y: Math.PI * 1.5,
        x: Math.PI * 0.3,
        ease: "none",
      },
      0
    );

    // 6. Animation Loop
    let animationFrameId;
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden) return;

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate cage
      cageMesh.rotation.y = elapsedTime * 0.15;
      cageMesh.rotation.x = elapsedTime * 0.1;

      // Float and rotate app cubes
      appCubes.forEach((cube, i) => {
        const floatOffset = Math.sin(elapsedTime * cube.speed + i) * 0.35;
        cube.mesh.position.y = cube.initialPos.y + floatOffset;

        cube.mesh.rotation.x = elapsedTime * 0.3 * (i % 2 === 0 ? 1 : -1);
        cube.mesh.rotation.y = elapsedTime * 0.4;
        cube.core.rotation.z = -elapsedTime * 0.6;
      });

      // Update connecting line geometry
      connectingLines.forEach((conn) => {
        const positions = conn.line.geometry.attributes.position.array;
        positions[0] = conn.from.mesh.position.x;
        positions[1] = conn.from.mesh.position.y;
        positions[2] = conn.from.mesh.position.z;
        positions[3] = conn.to.mesh.position.x;
        positions[4] = conn.to.mesh.position.y;
        positions[5] = conn.to.mesh.position.z;
        conn.line.geometry.attributes.position.needsUpdate = true;
      });

      // Slowly rotate particle field
      particleSystem.rotation.y = elapsedTime * 0.02;

      // Mouse tilt on main group
      mainGroup.rotation.x += (mouseY - mainGroup.rotation.x) * 0.04;
      mainGroup.rotation.y += (mouseX - mainGroup.rotation.y) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      mainGroup.position.set(0, 0, 0);

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (scrollTl.scrollTrigger) scrollTl.scrollTrigger.kill();
      renderer.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
        style={{ minHeight: "100%" }}
      />
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
      style={{ minHeight: "100%" }}
    />
  );
}
