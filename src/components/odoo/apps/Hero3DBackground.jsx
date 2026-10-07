"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const Hero3DBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup - Wide Angle for Vaster Space
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Cosmic Lights Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xa855f7, 8, 50); // Purple Nebula Light
    pointLight1.position.set(8, 8, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 8, 50); // Cyan Star Light
    pointLight2.position.set(-8, -8, 8);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xec4899, 6, 40); // Hot Pink Flare Light
    pointLight3.position.set(0, 6, -4);
    scene.add(pointLight3);

    // 3. Central 3D Model: Cyber Planet + Dual Saturn Rings
    const planetGroup = new THREE.Group();

    // Core Cyber Planet Sphere
    const planetGeo = new THREE.IcosahedronGeometry(2.6, 4);
    const planetMat = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      emissive: 0x312e81,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.8,
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    planetGroup.add(planetMesh);

    // Wireframe Grid Overlay on Planet
    const wireGeo = new THREE.IcosahedronGeometry(2.63, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    planetGroup.add(wireMesh);

    // Primary Saturn Ring 1 (Outer Purple/Pink Glowing Ring)
    const ring1Geo = new THREE.TorusGeometry(5.0, 0.12, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xf472b6,
      emissive: 0x831843,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI * 0.35;
    ring1Mesh.rotation.y = Math.PI * 0.15;
    planetGroup.add(ring1Mesh);

    // Secondary Saturn Ring 2 (Inner Cyan Glowing Ring)
    const ring2Geo = new THREE.TorusGeometry(4.0, 0.08, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0e7490,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.75,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI * 0.25;
    ring2Mesh.rotation.y = -Math.PI * 0.2;
    planetGroup.add(ring2Mesh);

    // 4. Orbiting Satellites & Cyber Nodes (Balanced depth)
    const satellitesGroup = new THREE.Group();
    const satGeos = [
      new THREE.OctahedronGeometry(0.24, 0),
      new THREE.DodecahedronGeometry(0.22, 0),
      new THREE.SphereGeometry(0.2, 8, 8),
      new THREE.BoxGeometry(0.22, 0.22, 0.22),
    ];
    const satMats = [
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2, metalness: 0.85 }),
      new THREE.MeshStandardMaterial({ color: 0xf472b6, roughness: 0.2, metalness: 0.85 }),
      new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.2, metalness: 0.85 }),
    ];

    const satellites = [];
    for (let i = 0; i < 8; i++) {
      const mesh = new THREE.Mesh(satGeos[i % satGeos.length], satMats[i % satMats.length]);
      const orbitRadius = 4.2 + (i % 3) * 0.55;
      const angle = (i / 8) * Math.PI * 2;

      mesh.position.set(
        Math.cos(angle) * orbitRadius,
        (Math.random() - 0.5) * 1.4,
        Math.sin(angle) * orbitRadius
      );

      mesh.userData = {
        orbitRadius,
        angle,
        speed: 0.007 + Math.random() * 0.004,
        rotSpeed: (Math.random() - 0.5) * 0.025,
      };

      satellitesGroup.add(mesh);
      satellites.push(mesh);
    }
    planetGroup.add(satellitesGroup);

    scene.add(planetGroup);

    // 5. Balanced Deep Space Starfield (1,800 Particles)
    const starCount = 1800;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const color1 = new THREE.Color(0xf472b6); // Neon Pink
    const color2 = new THREE.Color(0xa855f7); // Purple
    const color3 = new THREE.Color(0x38bdf8); // Cyan
    const color4 = new THREE.Color(0xffffff); // Bright White Star

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 52;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 31;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 21 - 4;

      let c = color1;
      const rand = Math.random();
      if (rand < 0.28) c = color1;
      else if (rand < 0.55) c = color2;
      else if (rand < 0.8) c = color3;
      else c = color4;

      starColors[i3] = c.r;
      starColors[i3 + 1] = c.g;
      starColors[i3 + 2] = c.b;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.085,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
    });

    const starField = new THREE.Points(starGeo, starMaterial);
    scene.add(starField);

    // 6. Interactive Mouse Parallax Physics
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (e.clientX - windowHalfX) * 0.0012;
      targetMouseY = (e.clientY - windowHalfY) * 0.0012;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 7. GSAP Entrance Scale & Spring Animation
    gsap.fromTo(
      planetGroup.scale,
      { x: 0.2, y: 0.2, z: 0.2 },
      { x: 1, y: 1, z: 1, duration: 2.2, ease: "elastic.out(1, 0.4)" }
    );

    // 8. Animation Render Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Mouse Lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Planet & Rings Rotation
      planetMesh.rotation.y = elapsedTime * 0.2;
      wireMesh.rotation.y = -elapsedTime * 0.25;
      ring1Mesh.rotation.z = elapsedTime * 0.15;
      ring2Mesh.rotation.z = -elapsedTime * 0.18;

      // Entire Planet Group Mouse Response
      planetGroup.rotation.x = currentMouseY * 1.5;
      planetGroup.rotation.y = elapsedTime * 0.1 + currentMouseX * 1.5;

      // Satellites Orbit Motion
      satellites.forEach((sat) => {
        sat.userData.angle += sat.userData.speed;
        sat.position.x = Math.cos(sat.userData.angle) * sat.userData.orbitRadius;
        sat.position.z = Math.sin(sat.userData.angle) * sat.userData.orbitRadius;
        sat.rotation.x += sat.userData.rotSpeed;
        sat.rotation.y += sat.userData.rotSpeed;
      });

      // Starfield Slow Rotation
      starField.rotation.y = elapsedTime * 0.03;
      starField.rotation.x = elapsedTime * 0.015;

      // Camera Position Shift
      camera.position.x = currentMouseX * 3;
      camera.position.y = -currentMouseY * 3;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      planetGeo.dispose();
      planetMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      starGeo.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
    />
  );
};

export default Hero3DBackground;
