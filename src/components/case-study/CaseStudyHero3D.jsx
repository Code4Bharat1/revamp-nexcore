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

    let animationId;
    let observer;
    let handleMouseMove;
    let handleResize;
    let scene, camera, renderer, mainGroup, particleField;
    let innerGlobeGeo, innerGlobeMat, wireGlobeGeo, wireGlobeMat, dotGeo, dotMat, ring1Geo, ring1Mat, ring2Geo, ring2Mat, particleGeo, particleMat;
    const disposables = [];

    const initThree = () => {
      if (!container) return;

      // 1. Scene & Camera Setup
      scene = new THREE.Scene();
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || 500;

      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 10.5;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      // 2. Multi-Color Dynamic Lighting
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
      mainGroup = new THREE.Group();

      // A. Inner Translucent Sapphire Ocean Sphere
      innerGlobeGeo = new THREE.SphereGeometry(2.7, 36, 36);
      innerGlobeMat = new THREE.MeshPhysicalMaterial({
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
      wireGlobeGeo = new THREE.SphereGeometry(2.75, 20, 20);
      wireGlobeMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const wireGlobeMesh = new THREE.Mesh(wireGlobeGeo, wireGlobeMat);
      mainGroup.add(wireGlobeMesh);

      // C. World Landmass / Data Dots Cloud on Sphere Surface
      const dotCount = 1800;
      dotGeo = new THREE.BufferGeometry();
      const dotPositions = new Float32Array(dotCount * 3);
      const dotColors = new Float32Array(dotCount * 3);

      const cCyan = new THREE.Color(0x00f0ff);
      const cOrange = new THREE.Color(0xff7a00);
      const cSky = new THREE.Color(0x38bdf8);

      const radius = 2.78;
      for (let i = 0; i < dotCount; i++) {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / dotCount);
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

      dotMat = new THREE.PointsMaterial({
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
        { lat: 25.2854, lon: 51.5310 },
        { lat: 24.7136, lon: 46.6753 },
        { lat: 25.2048, lon: 55.2708 },
        { lat: 45.4215, lon: -75.6972 },
        { lat: 23.5880, lon: 58.3829 },
        { lat: 29.3759, lon: 47.9774 },
      ];

      const latLonToVector3 = (lat, lon, r = 2.8) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        return new THREE.Vector3(
          -r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta)
        );
      };

      const pinGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const pinMat = new THREE.MeshStandardMaterial({
        color: 0xff7a00,
        emissive: 0xff7a00,
        emissiveIntensity: 1.2,
      });
      disposables.push(pinGeo, pinMat);

      keyCoords.forEach((coord) => {
        const pos = latLonToVector3(coord.lat, coord.lon, 2.82);
        const pinMesh = new THREE.Mesh(pinGeo, pinMat);
        pinMesh.position.copy(pos);
        arcGroup.add(pinMesh);
      });

      const pulseSpheres = [];
      const pulseGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const pulseMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      disposables.push(pulseGeo, pulseMat);

      for (let i = 0; i < keyCoords.length; i++) {
        const start = latLonToVector3(keyCoords[i].lat, keyCoords[i].lon, 2.82);
        const end = latLonToVector3(
          keyCoords[(i + 1) % keyCoords.length].lat,
          keyCoords[(i + 1) % keyCoords.length].lon,
          2.82
        );

        const mid = start.clone().add(end).multiplyScalar(0.5);
        const dist = start.distanceTo(end);
        mid.normalize().multiplyScalar(2.82 + dist * 0.35);

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const points = curve.getPoints(100);
        const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

        const curveMat = new THREE.LineBasicMaterial({
          color: i % 2 === 0 ? 0x00f0ff : 0xff7a00,
          transparent: true,
          opacity: 0.7,
        });
        disposables.push(curveGeo, curveMat);

        const arcLine = new THREE.Line(curveGeo, curveMat);
        arcGroup.add(arcLine);

        const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
        arcGroup.add(pulseMesh);

        pulseSpheres.push({
          mesh: pulseMesh,
          points,
          numPoints: points.length,
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.005,
        });
      }
      mainGroup.add(arcGroup);

      // E. Holographic Orbital Rings around Globe
      ring1Geo = new THREE.TorusGeometry(4.2, 0.06, 12, 100);
      ring1Mat = new THREE.MeshStandardMaterial({
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

      ring2Geo = new THREE.TorusGeometry(3.6, 0.05, 12, 90);
      ring2Mat = new THREE.MeshStandardMaterial({
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

      // F. Orbiting Polyhedra Satellites
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
      disposables.push(...nodeGeometries, ...nodeMaterials);

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

      // 4. Starfield Background
      const particleCount = 1400;
      particleGeo = new THREE.BufferGeometry();
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

      particleMat = new THREE.PointsMaterial({
        size: 0.085,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        transparent: true,
        opacity: 0.72,
      });

      particleField = new THREE.Points(particleGeo, particleMat);
      scene.add(particleField);

      // 5. Interactive Mouse Physics
      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;

      handleMouseMove = (e) => {
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        targetX = (e.clientX - windowHalfX) * 0.0012;
        targetY = (e.clientY - windowHalfY) * 0.0012;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      // 6. GSAP Entrance
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

      // 7. Render Loop with Intersection Observer
      let isVisible = true;
      observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
      });
      observer.observe(container);

      const startTime = performance.now();

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        if (!isVisible || document.hidden) return;
        const elapsedTime = (performance.now() - startTime) * 0.001;

        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        innerGlobeMesh.rotation.y = elapsedTime * 0.12;
        wireGlobeMesh.rotation.y = elapsedTime * 0.15;
        globeDots.rotation.y = elapsedTime * 0.15;
        arcGroup.rotation.y = elapsedTime * 0.15;

        ring1Mesh.rotation.z = elapsedTime * 0.14;
        ring2Mesh.rotation.z = -elapsedTime * 0.17;

        for (let idx = 0; idx < pulseSpheres.length; idx++) {
          const item = pulseSpheres[idx];
          item.progress += item.speed;
          if (item.progress > 1) item.progress = 0;
          const ptIdx = Math.min(Math.floor(item.progress * item.numPoints), item.numPoints - 1);
          item.mesh.position.copy(item.points[ptIdx]);
        }

        mainGroup.rotation.x = currentY * 1.3;
        mainGroup.rotation.y = elapsedTime * 0.08 + currentX * 1.3;

        nodes.forEach((node) => {
          node.userData.angle += node.userData.speed;
          node.position.x = Math.cos(node.userData.angle) * node.userData.orbitRadius;
          node.position.z = Math.sin(node.userData.angle) * node.userData.orbitRadius;
          node.rotation.x += node.userData.rotSpeed;
          node.rotation.y += node.userData.rotSpeed;
        });

        particleField.rotation.y = elapsedTime * 0.025;
        particleField.rotation.x = elapsedTime * 0.012;

        camera.position.x = currentX * 2.5;
        camera.position.y = -currentY * 2.5;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };

      animate();

      handleResize = () => {
        if (!container || !renderer || !camera) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize, { passive: true });
    };

    // Defer initialization slightly to allow immediate main thread rendering
    let idleId;
    if ("requestIdleCallback" in window) {
      idleId = requestIdleCallback(() => initThree(), { timeout: 1000 });
    } else {
      idleId = setTimeout(() => initThree(), 100);
    }

    return () => {
      if ("cancelIdleCallback" in window && idleId) {
        cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }

      if (observer) observer.disconnect();
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (animationId) cancelAnimationFrame(animationId);

      if (container && renderer && renderer.domElement) {
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }

      disposables.forEach((item) => item?.dispose?.());
      if (innerGlobeGeo) innerGlobeGeo.dispose();
      if (innerGlobeMat) innerGlobeMat.dispose();
      if (wireGlobeGeo) wireGlobeGeo.dispose();
      if (wireGlobeMat) wireGlobeMat.dispose();
      if (dotGeo) dotGeo.dispose();
      if (dotMat) dotMat.dispose();
      if (ring1Geo) ring1Geo.dispose();
      if (ring1Mat) ring1Mat.dispose();
      if (ring2Geo) ring2Geo.dispose();
      if (ring2Mat) ring2Mat.dispose();
      if (particleGeo) particleGeo.dispose();
      if (particleMat) particleMat.dispose();
      if (renderer) renderer.dispose();
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
