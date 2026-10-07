"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const CaseStudyHero3D = () => {
  const mountRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 10.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 2. Multi-Color Dynamic Lighting tuned for #08153A background
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 12, 70);
    cyanLight.position.set(10, 10, 10);
    scene.add(cyanLight);

    const orangeLight = new THREE.PointLight(0xff7a00, 10, 60);
    orangeLight.position.set(-10, -8, 8);
    scene.add(orangeLight);

    const violetLight = new THREE.PointLight(0xa855f7, 8, 50);
    violetLight.position.set(0, 8, -6);
    scene.add(violetLight);

    // 3. Main 3D Tech Globe Group
    const mainGroup = new THREE.Group();

    // A. Inner Translucent Sapphire Ocean Sphere
    const innerGlobeGeo = new THREE.SphereGeometry(2.7, 48, 48);
    const innerGlobeMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e3a8a,
      emissive: 0x091e4a,
      roughness: 0.1,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.85,
    });
    const innerGlobeMesh = new THREE.Mesh(innerGlobeGeo, innerGlobeMat);
    mainGroup.add(innerGlobeMesh);

    // B. Outer Glowing Lat/Long Wireframe Lattice
    const wireGlobeGeo = new THREE.SphereGeometry(2.75, 24, 24);
    const wireGlobeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireGlobeMesh = new THREE.Mesh(wireGlobeGeo, wireGlobeMat);
    mainGroup.add(wireGlobeMesh);

    // C. World Landmass / Data Dots Cloud on Sphere Surface (2,200 Dots)
    const dotCount = 2200;
    const dotGeo = new THREE.BufferGeometry();
    const dotPositions = new Float32Array(dotCount * 3);
    const dotColors = new Float32Array(dotCount * 3);

    const cCyan = new THREE.Color(0x00f0ff);
    const cOrange = new THREE.Color(0xff7a00);
    const cSky = new THREE.Color(0x38bdf8);

    const radius = 2.78;
    for (let i = 0; i < dotCount; i++) {
      // Fibonacci sphere distribution for uniform distribution on globe
      const phi = Math.acos(1 - 2 * (i + 0.5) / dotCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      dotPositions[i * 3] = x;
      dotPositions[i * 3 + 1] = y;
      dotPositions[i * 3 + 2] = z;

      let c = cSky;
      const r = Math.random();
      if (r < 0.4) c = cCyan;
      else if (r < 0.65) c = cSky;
      else c = cOrange;

      dotColors[i * 3] = c.r;
      dotColors[i * 3 + 1] = c.g;
      dotColors[i * 3 + 2] = c.b;
    }

    dotGeo.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    dotGeo.setAttribute("color", new THREE.BufferAttribute(dotColors, 3));

    const dotMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const globeDots = new THREE.Points(dotGeo, dotMat);
    mainGroup.add(globeDots);

    // D. Connected Glowing Global Arcs & Data Pulse Markers
    const arcGroup = new THREE.Group();
    const keyCoords = [
      { lat: 25.2854, lon: 51.5310 }, // Qatar
      { lat: 24.7136, lon: 46.6753 }, // Saudi Arabia
      { lat: 25.2048, lon: 55.2708 }, // UAE
      { lat: 45.4215, lon: -75.6972 }, // Canada
      { lat: 23.5880, lon: 58.3829 }, // Oman
      { lat: 29.3759, lon: 47.9774 }, // Kuwait
    ];

    // Helper: Lat/Lon to 3D Cartesian Vector
    const latLonToVector3 = (lat, lon, r = 2.8) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    };

    // Add glowing pins at target countries
    keyCoords.forEach((coord) => {
      const pos = latLonToVector3(coord.lat, coord.lon, 2.82);
      const pinGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const pinMat = new THREE.MeshStandardMaterial({
        color: 0xff7a00,
        emissive: 0xff7a00,
        emissiveIntensity: 1.2,
      });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos);
      arcGroup.add(pinMesh);
    });

    // Create 6 glowing curved arcs connecting the key hubs
    const pulseSpheres = [];
    for (let i = 0; i < keyCoords.length; i++) {
      const start = latLonToVector3(keyCoords[i].lat, keyCoords[i].lon, 2.82);
      const end = latLonToVector3(
        keyCoords[(i + 1) % keyCoords.length].lat,
        keyCoords[(i + 1) % keyCoords.length].lon,
        2.82
      );

      const mid = start.clone().add(end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);
      mid.normalize().multiplyScalar(2.82 + dist * 0.35); // Raise arc midpoint high above globe surface

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(50);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

      const curveMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0xff7a00,
        transparent: true,
        opacity: 0.7,
        linewidth: 2,
      });
      const arcLine = new THREE.Line(curveGeo, curveMat);
      arcGroup.add(arcLine);

      // Glowing pulse traveling along each arc
      const pulseGeo = new THREE.SphereGeometry(0.08, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      arcGroup.add(pulseMesh);

      pulseSpheres.push({
        mesh: pulseMesh,
        curve,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.005,
      });
    }
    mainGroup.add(arcGroup);

    // E. Holographic Orbital Rings around Globe
    const ring1Geo = new THREE.TorusGeometry(4.2, 0.06, 16, 140);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x0284c7,
      emissiveIntensity: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI * 0.35;
    ring1Mesh.rotation.y = Math.PI * 0.15;
    mainGroup.add(ring1Mesh);

    const ring2Geo = new THREE.TorusGeometry(3.6, 0.05, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xff7a00,
      emissive: 0xc2410c,
      emissiveIntensity: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI * 0.3;
    ring2Mesh.rotation.y = -Math.PI * 0.2;
    mainGroup.add(ring2Mesh);

    // F. Orbiting Outer Data Polyhedra Satellites (Balanced depth)
    const nodesGroup = new THREE.Group();
    const nodeGeometries = [
      new THREE.OctahedronGeometry(0.24, 0),
      new THREE.DodecahedronGeometry(0.22, 0),
      new THREE.BoxGeometry(0.22, 0.22, 0.22),
      new THREE.IcosahedronGeometry(0.2, 0),
    ];
    const nodeMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x00f0ff, emissive: 0x0284c7, roughness: 0.15, metalness: 0.85 }),
      new THREE.MeshStandardMaterial({ color: 0xff7a00, emissive: 0xc2410c, roughness: 0.15, metalness: 0.85 }),
      new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x6b21a8, roughness: 0.15, metalness: 0.85 }),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0369a1, roughness: 0.15, metalness: 0.85 }),
    ];

    const nodes = [];
    for (let i = 0; i < 8; i++) {
      const mesh = new THREE.Mesh(
        nodeGeometries[i % nodeGeometries.length],
        nodeMaterials[i % nodeMaterials.length]
      );
      const orbitRadius = 4.0 + (i % 3) * 0.55;
      const angle = (i / 8) * Math.PI * 2;

      mesh.position.set(
        Math.cos(angle) * orbitRadius,
        (Math.random() - 0.5) * 1.8,
        Math.sin(angle) * orbitRadius
      );

      mesh.userData = {
        orbitRadius,
        angle,
        speed: 0.006 + Math.random() * 0.005,
        rotSpeed: (Math.random() - 0.5) * 0.025,
      };

      nodesGroup.add(mesh);
      nodes.push(mesh);
    }
    mainGroup.add(nodesGroup);
    scene.add(mainGroup);

    // 4. Balanced Starfield Background (1,800 Particles)
    const particleCount = 1800;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cViolet = new THREE.Color(0xa855f7);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 52;
      positions[i3 + 1] = (Math.random() - 0.5) * 32;
      positions[i3 + 2] = (Math.random() - 0.5) * 22 - 3;

      let c = cCyan;
      const r = Math.random();
      if (r < 0.35) c = cCyan;
      else if (r < 0.55) c = cOrange;
      else if (r < 0.75) c = cViolet;
      else if (r < 0.9) c = cSky;
      else c = cWhite;

      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.085,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
    });

    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // 5. Interactive Mouse Physics
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (e.clientX - windowHalfX) * 0.0012;
      targetY = (e.clientY - windowHalfY) * 0.0012;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. GSAP Entrance Scale & Spin
    gsap.fromTo(
      mainGroup.scale,
      { x: 0.1, y: 0.1, z: 0.1 },
      { x: 1, y: 1, z: 1, duration: 2.2, ease: "elastic.out(1, 0.4)" }
    );

    gsap.fromTo(
      particleField.rotation,
      { y: -Math.PI },
      { y: 0, duration: 2.5, ease: "power2.out" }
    );

    // 7. Render Loop
    let animationId;
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const startTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden) return;
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Mouse Lerp Physics
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Rotate Main Tech Globe
      innerGlobeMesh.rotation.y = elapsedTime * 0.12;
      wireGlobeMesh.rotation.y = elapsedTime * 0.15;
      globeDots.rotation.y = elapsedTime * 0.15;
      arcGroup.rotation.y = elapsedTime * 0.15;

      // Rotate Rings
      ring1Mesh.rotation.z = elapsedTime * 0.14;
      ring2Mesh.rotation.z = -elapsedTime * 0.17;

      // Update Arc Pulse Movements
      pulseSpheres.forEach((item) => {
        item.progress += item.speed;
        if (item.progress > 1) item.progress = 0;
        const p = item.curve.getPoint(item.progress);
        item.mesh.position.copy(p);
      });

      // Mouse Parallax Tilt
      mainGroup.rotation.x = currentY * 1.3;
      mainGroup.rotation.y = elapsedTime * 0.08 + currentX * 1.3;

      // Orbiting Polyhedra Nodes
      nodes.forEach((node) => {
        node.userData.angle += node.userData.speed;
        node.position.x = Math.cos(node.userData.angle) * node.userData.orbitRadius;
        node.position.z = Math.sin(node.userData.angle) * node.userData.orbitRadius;
        node.rotation.x += node.userData.rotSpeed;
        node.rotation.y += node.userData.rotSpeed;
      });

      // Particle Starfield Drift
      particleField.rotation.y = elapsedTime * 0.025;
      particleField.rotation.x = elapsedTime * 0.012;

      // Camera Offset
      camera.position.x = currentX * 2.5;
      camera.position.y = -currentY * 2.5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 9. Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      innerGlobeGeo.dispose();
      innerGlobeMat.dispose();
      wireGlobeGeo.dispose();
      wireGlobeMat.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0" />
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
    />
  );
};

export default CaseStudyHero3D;
