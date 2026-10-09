"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero3DCanvas({ variant = "consulting" }) {
  const mountRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    let idleId;
    let observer;
    let handleMouseMove;
    let handleResize;
    let animationFrameId;
    let scrollTl;
    let renderer, starGeo, starMat, nebulaGeo, nebulaMat;

    const initCanvas = () => {
      gsap.registerPlugin(ScrollTrigger);

      const container = mountRef.current;
      if (!container) return;

      let width = container.clientWidth || window.innerWidth;
      let height = container.clientHeight || window.innerHeight;

      // 1. Scene, Camera, Renderer
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x08153a, 0.0018);

      const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
      camera.position.set(0, 0, 19);

      renderer = new THREE.WebGLRenderer({
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

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x38bdf8, 1.0);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainLight.position.set(12, 18, 12);
    scene.add(mainLight);

    const cyanPoint = new THREE.PointLight(0x38bdf8, 5, 35);
    cyanPoint.position.set(-10, 6, 8);
    scene.add(cyanPoint);

    const orangePoint = new THREE.PointLight(0xf97316, 4, 35);
    orangePoint.position.set(10, -6, 8);
    scene.add(orangePoint);

    const purplePoint = new THREE.PointLight(0xa855f7, 3, 30);
    purplePoint.position.set(0, 10, -5);
    scene.add(purplePoint);

    // 3. Galaxy Deep Space Starfield & Nebula Particles
    const starCount = 1400;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x60a5fa),
      new THREE.Color(0xf97316),
      new THREE.Color(0xa855f7),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 90;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 90;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const starSystem = new THREE.Points(starGeo, starMat);
    scene.add(starSystem);

    // Nebula Dust Cloud
    const nebulaCount = 150;
    const nebulaGeo = new THREE.BufferGeometry();
    const nebulaPos = new Float32Array(nebulaCount * 3);
    for (let i = 0; i < nebulaCount * 3; i += 3) {
      nebulaPos[i] = (Math.random() - 0.5) * 50;
      nebulaPos[i + 1] = (Math.random() - 0.5) * 50;
      nebulaPos[i + 2] = (Math.random() - 0.5) * 30;
    }
    nebulaGeo.setAttribute("position", new THREE.BufferAttribute(nebulaPos, 3));
    const nebulaMat = new THREE.PointsMaterial({
      size: 0.6,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const nebulaSystem = new THREE.Points(nebulaGeo, nebulaMat);
    scene.add(nebulaSystem);

    // 4. Main 3D Object Group (Variant Specific)
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    let primaryMesh, secondaryMesh;
    const orbitingNodes = [];

    // Build scene objects based on variant
    if (variant === "all-services") {
      // --- ALL SERVICES: Futuristic Enterprise Core & 6 Floating Service Sphere Nodes ---
      const outerSphereGeo = new THREE.IcosahedronGeometry(3.6, 1);
      const outerSphereMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        metalness: 0.8,
        roughness: 0.2,
      });
      primaryMesh = new THREE.Mesh(outerSphereGeo, outerSphereMat);
      mainGroup.add(primaryMesh);

      const innerCoreGeo = new THREE.DodecahedronGeometry(2.0, 0);
      const innerCoreMat = new THREE.MeshStandardMaterial({
        color: 0xff6600,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0xcc5500,
        emissiveIntensity: 0.45,
      });
      secondaryMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
      mainGroup.add(secondaryMesh);

      // 6 Floating Service Nodes (Odoo ERP Pillars)
      const serviceColors = [0xff6600, 0x38bdf8, 0x10b981, 0xa855f7, 0x06b6d4, 0xf59e0b];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.2;
        const nodeGeo = new THREE.IcosahedronGeometry(0.75, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: serviceColors[i],
          metalness: 0.7,
          roughness: 0.2,
          emissive: serviceColors[i],
          emissiveIntensity: 0.5,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.4, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: serviceColors[i], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "configuration") {
      // --- CONFIGURATION: Interlocking 3D Gears & Modular Cubes ---
      const gear1Geo = new THREE.TorusGeometry(3.6, 0.5, 16, 32);
      const gear1Mat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        metalness: 0.9,
        roughness: 0.1,
      });
      primaryMesh = new THREE.Mesh(gear1Geo, gear1Mat);
      mainGroup.add(primaryMesh);

      const gear2Geo = new THREE.TorusGeometry(2.4, 0.4, 16, 24);
      const gear2Mat = new THREE.MeshStandardMaterial({
        color: 0xf97316,
        wireframe: false,
        metalness: 0.7,
        roughness: 0.3,
      });
      secondaryMesh = new THREE.Mesh(gear2Geo, gear2Mat);
      secondaryMesh.rotation.x = Math.PI / 2;
      mainGroup.add(secondaryMesh);

      // Orbiting Config Cubes
      const cubeColors = [0x38bdf8, 0xf97316, 0x60a5fa, 0xfbbf24, 0x34d399, 0xa855f7];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.5;
        const nodeGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: cubeColors[i % cubeColors.length],
          metalness: 0.8,
          roughness: 0.2,
          emissive: cubeColors[i % cubeColors.length],
          emissiveIntensity: 0.3,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: cubeColors[i % cubeColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "customization") {
      // --- CUSTOMIZATION: 3D Metallic Torus Knot & Morphing Core ---
      const knotGeo = new THREE.TorusKnotGeometry(2.8, 0.75, 120, 16);
      const knotMat = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0x4c1d95,
        emissiveIntensity: 0.3,
      });
      primaryMesh = new THREE.Mesh(knotGeo, knotMat);
      mainGroup.add(primaryMesh);

      const sphereGeo = new THREE.IcosahedronGeometry(4.2, 1);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      secondaryMesh = new THREE.Mesh(sphereGeo, sphereMat);
      mainGroup.add(secondaryMesh);

      // Orbiting Gem Crystals
      const gemColors = [0xa855f7, 0x38bdf8, 0xf97316, 0xec4899, 0x34d399, 0x60a5fa];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.8;
        const nodeGeo = new THREE.OctahedronGeometry(0.9, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: gemColors[i % gemColors.length],
          metalness: 0.7,
          roughness: 0.2,
          emissive: gemColors[i % gemColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: gemColors[i % gemColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "development") {
      // --- DEVELOPMENT: Cyber Core Matrix Sphere & Hexagon Mesh ---
      const coreGeo = new THREE.IcosahedronGeometry(2.6, 2);
      const coreMat = new THREE.MeshPhongMaterial({
        color: 0x0284c7,
        emissive: 0x0369a1,
        shininess: 90,
        wireframe: false,
      });
      primaryMesh = new THREE.Mesh(coreGeo, coreMat);
      mainGroup.add(primaryMesh);

      const matrixGeo = new THREE.OctahedronGeometry(4.5, 2);
      const matrixMat = new THREE.MeshStandardMaterial({
        color: 0x34d399,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
        metalness: 0.8,
      });
      secondaryMesh = new THREE.Mesh(matrixGeo, matrixMat);
      mainGroup.add(secondaryMesh);

      // Orbiting Cyber Nodes
      const devColors = [0x34d399, 0x38bdf8, 0x60a5fa, 0xf97316, 0xa855f7, 0x10b981];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.5;
        const nodeGeo = new THREE.TetrahedronGeometry(0.8, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: devColors[i % devColors.length],
          metalness: 0.7,
          roughness: 0.2,
          emissive: devColors[i % devColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: devColors[i % devColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "implementation") {
      // --- IMPLEMENTATION: Futuristic Launch Core & Holographic Rings ---
      const pyramidGeo = new THREE.ConeGeometry(3.2, 5.0, 4);
      const pyramidMat = new THREE.MeshStandardMaterial({
        color: 0xf97316,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0xc2410c,
        emissiveIntensity: 0.4,
      });
      primaryMesh = new THREE.Mesh(pyramidGeo, pyramidMat);
      mainGroup.add(primaryMesh);

      const cageGeo = new THREE.OctahedronGeometry(4.4, 1);
      const cageMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      secondaryMesh = new THREE.Mesh(cageGeo, cageMat);
      mainGroup.add(secondaryMesh);

      // Orbiting Holographic Rings
      const implColors = [0xf97316, 0x38bdf8, 0xfbbf24, 0x60a5fa, 0xa855f7, 0x34d399];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.6;
        const nodeGeo = new THREE.DodecahedronGeometry(0.8, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: implColors[i % implColors.length],
          metalness: 0.7,
          roughness: 0.2,
          emissive: implColors[i % implColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: implColors[i % implColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "ecommerce") {
      // --- ECOMMERCE: 3D Shopping Core, Gold/Pink Crystal Orb & Orbiting Transaction Satellites ---
      const outerCageGeo = new THREE.DodecahedronGeometry(3.6, 0);
      const outerCageMat = new THREE.MeshStandardMaterial({
        color: 0xec4899,
        wireframe: true,
        metalness: 0.9,
        roughness: 0.1,
      });
      primaryMesh = new THREE.Mesh(outerCageGeo, outerCageMat);
      mainGroup.add(primaryMesh);

      const innerOrbGeo = new THREE.SphereGeometry(2.0, 32, 32);
      const innerOrbMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0xd97706,
        emissiveIntensity: 0.4,
      });
      secondaryMesh = new THREE.Mesh(innerOrbGeo, innerOrbMat);
      mainGroup.add(secondaryMesh);

      // Orbiting Transaction Satellites
      const ecomColors = [0xec4899, 0xf59e0b, 0x38bdf8, 0x10b981, 0xa855f7, 0xf43f5e];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.6;
        const nodeGeo = new THREE.ConeGeometry(0.7, 1.4, 5);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: ecomColors[i % ecomColors.length],
          metalness: 0.8,
          roughness: 0.2,
          emissive: ecomColors[i % ecomColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: ecomColors[i % ecomColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "integration") {
      // --- INTEGRATION: Counter-Rotating Dual Möbius Rings & Central Neural Bridge ---
      const ring1Geo = new THREE.TorusGeometry(3.5, 0.35, 16, 60);
      const ring1Mat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0x0284c7,
        emissiveIntensity: 0.3,
      });
      primaryMesh = new THREE.Mesh(ring1Geo, ring1Mat);
      primaryMesh.rotation.x = Math.PI / 3;
      mainGroup.add(primaryMesh);

      const ring2Geo = new THREE.TorusGeometry(3.5, 0.35, 16, 60);
      const ring2Mat = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0x7e22ce,
        emissiveIntensity: 0.3,
      });
      secondaryMesh = new THREE.Mesh(ring2Geo, ring2Mat);
      secondaryMesh.rotation.x = -Math.PI / 3;
      mainGroup.add(secondaryMesh);

      const nexusGeo = new THREE.OctahedronGeometry(1.6, 0);
      const nexusMat = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        wireframe: true,
        metalness: 0.7,
      });
      const nexusMesh = new THREE.Mesh(nexusGeo, nexusMat);
      mainGroup.add(nexusMesh);

      // Orbiting API Bridge Nodes
      const integColors = [0x38bdf8, 0xa855f7, 0x06b6d4, 0xf97316, 0xec4899, 0x34d399];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.4;
        const nodeGeo = new THREE.BoxGeometry(1.0, 1.0, 1.0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: integColors[i % integColors.length],
          metalness: 0.8,
          roughness: 0.2,
          emissive: integColors[i % integColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.6, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: integColors[i % integColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "maintenance") {
      // --- MAINTENANCE: Triple Gyroscopic Security Shield & Self-Healing Core ---
      const shieldRing1Geo = new THREE.TorusGeometry(3.8, 0.25, 16, 48);
      const shieldRing1Mat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        metalness: 0.9,
        roughness: 0.1,
      });
      primaryMesh = new THREE.Mesh(shieldRing1Geo, shieldRing1Mat);
      mainGroup.add(primaryMesh);

      const shieldRing2Geo = new THREE.TorusGeometry(3.0, 0.25, 16, 48);
      const shieldRing2Mat = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        metalness: 0.8,
        roughness: 0.2,
      });
      secondaryMesh = new THREE.Mesh(shieldRing2Geo, shieldRing2Mat);
      secondaryMesh.rotation.x = Math.PI / 2;
      mainGroup.add(secondaryMesh);

      const coreShieldGeo = new THREE.IcosahedronGeometry(1.9, 0);
      const coreShieldMat = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.4,
      });
      const coreShieldMesh = new THREE.Mesh(coreShieldGeo, coreShieldMat);
      mainGroup.add(coreShieldMesh);

      // Orbiting Maintenance Telemetry Beacons
      const maintColors = [0x10b981, 0x06b6d4, 0x3b82f6, 0xf59e0b, 0x38bdf8, 0x10b981];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.5;
        const nodeGeo = new THREE.OctahedronGeometry(0.8, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: maintColors[i % maintColors.length],
          metalness: 0.7,
          roughness: 0.2,
          emissive: maintColors[i % maintColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.4, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: maintColors[i % maintColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "migration") {
      // --- MIGRATION: Double-Helix Data Conduit & Dual Portal Vortex ---
      const vortexGeo = new THREE.CylinderGeometry(2.5, 3.8, 5.0, 16, 4, true);
      const vortexMat = new THREE.MeshStandardMaterial({
        color: 0xf97316,
        wireframe: true,
        metalness: 0.9,
        roughness: 0.1,
      });
      primaryMesh = new THREE.Mesh(vortexGeo, vortexMat);
      mainGroup.add(primaryMesh);

      const portalCoreGeo = new THREE.TorusGeometry(2.6, 0.4, 16, 32);
      const portalCoreMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x0284c7,
        emissiveIntensity: 0.4,
      });
      secondaryMesh = new THREE.Mesh(portalCoreGeo, portalCoreMat);
      secondaryMesh.rotation.x = Math.PI / 2;
      mainGroup.add(secondaryMesh);

      // Orbiting Transition Data Packet Crystals
      const migrColors = [0xf97316, 0x38bdf8, 0xfbbf24, 0x60a5fa, 0xa855f7, 0xf43f5e];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.7;
        const nodeGeo = new THREE.TetrahedronGeometry(0.85, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: migrColors[i % migrColors.length],
          metalness: 0.7,
          roughness: 0.2,
          emissive: migrColors[i % migrColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: migrColors[i % migrColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "offshore") {
      // --- OFFSHORE: Geodesic Global Sphere & Multi-Timezone Orbit Rings ---
      const globeGeo = new THREE.IcosahedronGeometry(3.6, 3);
      const globeMat = new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        wireframe: true,
        metalness: 0.9,
        roughness: 0.1,
      });
      primaryMesh = new THREE.Mesh(globeGeo, globeMat);
      mainGroup.add(primaryMesh);

      const orbitGeo = new THREE.TorusGeometry(4.8, 0.15, 16, 64);
      const orbitMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x0284c7,
        emissiveIntensity: 0.3,
      });
      secondaryMesh = new THREE.Mesh(orbitGeo, orbitMat);
      secondaryMesh.rotation.x = Math.PI / 4;
      mainGroup.add(secondaryMesh);

      // Orbiting Global Dev Hub Satellites
      const offColors = [0x6366f1, 0x38bdf8, 0xa855f7, 0x06b6d4, 0x3b82f6, 0xf59e0b];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.6;
        const nodeGeo = new THREE.DodecahedronGeometry(0.8, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: offColors[i % offColors.length],
          metalness: 0.7,
          roughness: 0.2,
          emissive: offColors[i % offColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: offColors[i % offColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else if (variant === "support") {
      // --- SUPPORT: 3D Truncated Beacon Core & Dual Shield Halos ---
      const beaconGeo = new THREE.IcosahedronGeometry(2.8, 1);
      const beaconMat = new THREE.MeshStandardMaterial({
        color: 0xf43f5e,
        metalness: 0.85,
        roughness: 0.15,
        emissive: 0xe11d48,
        emissiveIntensity: 0.4,
      });
      primaryMesh = new THREE.Mesh(beaconGeo, beaconMat);
      mainGroup.add(primaryMesh);

      const haloGeo = new THREE.TorusGeometry(4.2, 0.2, 16, 48);
      const haloMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        metalness: 0.8,
        roughness: 0.2,
      });
      secondaryMesh = new THREE.Mesh(haloGeo, haloMat);
      secondaryMesh.rotation.x = Math.PI / 3;
      mainGroup.add(secondaryMesh);

      // Orbiting 24/7 SLA Response Nodes
      const suppColors = [0xf43f5e, 0x38bdf8, 0xfbbf24, 0x10b981, 0xa855f7, 0x06b6d4];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.5;
        const nodeGeo = new THREE.OctahedronGeometry(0.8, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: suppColors[i % suppColors.length],
          metalness: 0.7,
          roughness: 0.2,
          emissive: suppColors[i % suppColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: suppColors[i % suppColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }

    } else {
      // --- CONSULTING (Default): Geometric Crystal Core & Polyhedron Network ---
      const outerGeo = new THREE.OctahedronGeometry(4.2, 1);
      const outerMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        metalness: 0.8,
        roughness: 0.2,
      });
      primaryMesh = new THREE.Mesh(outerGeo, outerMat);
      mainGroup.add(primaryMesh);

      const innerGeo = new THREE.IcosahedronGeometry(2.4, 0);
      const innerMat = new THREE.MeshPhongMaterial({
        color: 0x2563eb,
        emissive: 0x1d4ed8,
        shininess: 100,
        wireframe: false,
      });
      secondaryMesh = new THREE.Mesh(innerGeo, innerMat);
      mainGroup.add(secondaryMesh);

      // Orbiting Module Nodes
      const nodeColors = [0x38bdf8, 0xf97316, 0x60a5fa, 0xfbbf24, 0x34d399, 0xa855f7];
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 7.5;
        const nodeGeo = new THREE.DodecahedronGeometry(0.75, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: nodeColors[i % nodeColors.length],
          metalness: 0.6,
          roughness: 0.3,
          emissive: nodeColors[i % nodeColors.length],
          emissiveIntensity: 0.4,
        });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius);

        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), nodeMesh.position.clone()]);
        const lineMat = new THREE.LineBasicMaterial({ color: nodeColors[i % nodeColors.length], transparent: true, opacity: 0.35 });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);

        mainGroup.add(nodeMesh);
        orbitingNodes.push({ mesh: nodeMesh, line, angle, radius });
      }
    }

    // 5. Mouse Parallax Interactivity
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (event.clientX - windowHalfX) * 0.0015;
      targetMouseY = (event.clientY - windowHalfY) * 0.0015;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. GSAP ScrollTrigger Integration for 3D Scene
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
        y: Math.PI * 2,
        x: Math.PI * 0.4,
        ease: "none",
      },
      0
    );

    scrollTl.to(
      mainGroup.scale,
      {
        x: 0.65,
        y: 0.65,
        z: 0.65,
        ease: "power1.inOut",
      },
      0
    );

    scrollTl.to(
      camera.position,
      {
        z: 27,
        y: -3,
        ease: "power1.inOut",
      },
      0
    );

    // 7. Animation Loop
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

      // Smooth Mouse Lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate primary & secondary meshes
      if (primaryMesh) {
        primaryMesh.rotation.y = elapsedTime * 0.25;
        primaryMesh.rotation.x = elapsedTime * 0.15;
      }

      if (secondaryMesh) {
        secondaryMesh.rotation.y = -elapsedTime * 0.35;
        secondaryMesh.rotation.z = elapsedTime * 0.2;
      }

      // Orbit module nodes & update line attributes
      orbitingNodes.forEach((node, i) => {
        const currentAngle = node.angle + elapsedTime * 0.3 * (i % 2 === 0 ? 1 : -1);
        node.mesh.position.x = Math.cos(currentAngle) * node.radius;
        node.mesh.position.z = Math.sin(currentAngle) * node.radius;
        node.mesh.position.y = Math.sin(elapsedTime * 1.5 + i) * 1.2;

        node.mesh.rotation.x += 0.02;
        node.mesh.rotation.y += 0.02;

        // Update line end position
        const positions = node.line.geometry.attributes.position.array;
        positions[3] = node.mesh.position.x;
        positions[4] = node.mesh.position.y;
        positions[5] = node.mesh.position.z;
        node.line.geometry.attributes.position.needsUpdate = true;
      });

      // Slowly rotate particle field
      starSystem.rotation.y = elapsedTime * 0.02;
      nebulaSystem.rotation.y = -elapsedTime * 0.015;

      // Apply Mouse tilt to main group
      mainGroup.rotation.x += (mouseY - mainGroup.rotation.x) * 0.05;
      mainGroup.rotation.y += (mouseX - mainGroup.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

      window.addEventListener("resize", handleResize, { passive: true });
    };

    if ("requestIdleCallback" in window) {
      idleId = requestIdleCallback(() => initCanvas(), { timeout: 1000 });
    } else {
      idleId = setTimeout(() => initCanvas(), 100);
    }

    // Cleanup
    return () => {
      if ("cancelIdleCallback" in window && idleId) {
        cancelIdleCallback(idleId);
      } else if (idleId) {
        clearTimeout(idleId);
      }
      if (observer) observer.disconnect();
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (scrollTl && scrollTl.scrollTrigger) scrollTl.scrollTrigger.kill();
      if (renderer) renderer.dispose();
      if (starGeo) starGeo.dispose();
      if (starMat) starMat.dispose();
      if (nebulaGeo) nebulaGeo.dispose();
      if (nebulaMat) nebulaMat.dispose();
    };
  }, [mounted, variant]);

  if (!mounted) {
    return (
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        style={{ minHeight: "100%" }}
      />
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ minHeight: "100%" }}
    />
  );
}
