"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import * as THREE from "three";
import {
  ArrowRight,
  Award,
  Users,
  Layers,
  Rocket,
  Brain,
  Sparkles,
  TrendingUp,
  Shield,
  CheckCircle,
  FileText,
  UserCheck,
  Zap,
  BarChart,
  MessageSquare,
  Database,
  Cpu,
  Box,
  Code,
  Activity,
  Settings,
  Cloud,
  Globe,
  Star,
  ChevronRight,
  Target,
  Briefcase,
  Clock,
  X,
} from "lucide-react";

const HeroBadge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
    {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />}
    <span className="text-xs sm:text-sm text-[#1e3a8a] font-semibold tracking-wide">
      {text}
    </span>
  </div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="relative group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl hover:border-[#1e40af] transition-all duration-300 hover:-translate-y-2">
    <div className="relative z-10">
      {Icon && (
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-[#1e40af] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
      )}
      <div className="text-4xl sm:text-5xl font-black mb-2 text-[#1e40af]">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide">
        {label}
      </div>
    </div>
  </div>
);

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  hovered,
  onHover,
}) => (
  <div
    onMouseEnter={onHover}
    className={`group relative bg-white border-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
      hovered
        ? "border-[#1e40af] shadow-2xl -translate-y-2"
        : "border-gray-200 shadow-md hover:shadow-xl"
    }`}
  >
    <div className="relative z-10">
      <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-6">
        <div
          className={`p-3 sm:p-4 rounded-xl transition-all duration-300 ${
            hovered ? "scale-110" : ""
          }`}
          style={
            hovered
              ? { backgroundColor: "#1e40af" }
              : { backgroundColor: "#eff6ff" }
          }
        >
          <Icon
            className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${
              hovered ? "text-white" : "text-[#1e40af]"
            }`}
          />
        </div>
        <div className="flex-1">
          <h3
            className={`text-lg sm:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
              hovered ? "text-[#1e40af]" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {features && (
        <div className="space-y-2 sm:space-y-3 pt-4 border-t-2 border-gray-100">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 sm:gap-3 text-gray-700"
            >
              <CheckCircle
                className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-300 ${
                  hovered ? "text-[#1e40af]" : "text-[#3b82f6]"
                }`}
              />
              <span className="text-sm sm:text-base font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const AIAgentCard = ({ icon: Icon, title, description }) => (
  <div className="relative group bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="relative z-10">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:bg-[#1e40af]">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1e40af] group-hover:text-white transition-colors duration-300" />
      </div>
      <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-[#1e40af] transition-colors">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const TechStackCard = ({ name, icon: Icon, cardRef }) => {
  const getIconAnimationClass = (techName) => {
    switch (techName) {
      case "TensorFlow":
        return "group-hover:scale-110 group-hover:rotate-6";
      case "PyTorch":
        return "group-hover:scale-110 group-hover:scale-y-105";
      case "Scikit-learn":
        return "group-hover:scale-110 group-hover:-translate-y-1";
      case "Hugging Face":
        return "group-hover:scale-115 group-hover:rotate-12";
      case "Python":
        return "group-hover:scale-110 group-hover:-rotate-6";
      case "Jupyter":
        return "group-hover:scale-110 group-hover:-translate-y-1";
      case "Pandas":
        return "group-hover:scale-110 group-hover:scale-y-110";
      case "NumPy":
        return "group-hover:scale-110 group-hover:-translate-y-1";
      case "Docker":
        return "group-hover:scale-110 group-hover:rotate-12";
      case "Kubernetes":
        return "group-hover:scale-110 group-hover:rotate-45";
      case "AWS":
      case "Azure":
        return "group-hover:scale-110 group-hover:scale-x-105";
      default:
        return "group-hover:scale-110";
    }
  };

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      className="tech-card-item relative group bg-[#091838] border border-blue-500/20 hover:border-blue-400/80 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.22)] transform hover:-translate-y-1.5 hover:scale-[1.018] focus:-translate-y-1.5 focus:scale-[1.018] focus:outline-none focus:border-blue-400 select-none overflow-hidden"
    >
      {/* Light Scan Beam Overlay (Triggers once on tab switch) */}
      <div className="card-scan-line absolute inset-0 pointer-events-none opacity-0 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent -translate-x-full" />

      {/* Subtle Blue Glow Backdrop on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Blue Icon Container */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2563eb] rounded-xl mx-auto mb-3.5 sm:mb-4 flex items-center justify-center shadow-md shadow-blue-600/30 group-hover:shadow-blue-500/50 group-hover:bg-[#3b82f6] transition-all duration-300">
          <Icon className={`w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 ${getIconAnimationClass(name)}`} />
        </div>
        
        {/* Technology Name */}
        <div className="font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors duration-300 tracking-tight">
          {name}
        </div>
      </div>
    </div>
  );
};

const ClientLogo = ({ name, country, flag }) => (
  <div className="group bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-[#3b82f6] hover:shadow-lg transition-all duration-300 h-28 sm:h-32 hover:-translate-y-1">
    <div className="text-2xl sm:text-3xl transform group-hover:scale-110 transition-transform duration-300">
      {flag}
    </div>
    <div className="text-center">
      
      <div className="text-[10px] sm:text-xs text-gray-500 mt-1">{country}</div>
    </div>
  </div>
);

const parseMetric = (str) => {
  if (!str) return { val: 0, prefix: "", suffix: "", isDecimal: false };
  const match = str.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
  if (match) {
    const prefix = match[1] || "";
    const num = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isDecimal = match[2].includes(".");
    return { val: num, prefix, suffix, isDecimal };
  }
  return { val: 0, prefix: "", suffix: str, isDecimal: false };
};

const TestimonialCard = ({
  author,
  role,
  company,
  country,
  rating,
  impact,
  cardRef,
}) => {
  const localCardRef = useRef(null);
  const targetRef = cardRef || localCardRef;

  return (
    <div
      ref={targetRef}
      tabIndex={0}
      className="relative group bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-2xl hover:border-orange-400/80 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-[1.018] focus:-translate-y-1.5 focus:scale-[1.018] focus:shadow-2xl focus:border-orange-400/80 focus:outline-none h-full flex flex-col justify-between overflow-hidden cursor-pointer select-none"
    >
      {/* Subtle top gradient accent bar (animated via scaleX) */}
      <div
        className="card-accent-line absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-orange-500 to-[#ff6600] group-hover:brightness-125 transition-all duration-300"
        style={{ transformOrigin: "left" }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between pt-0.5">
        <div>
          {/* Company & Location */}
          <div className="flex items-center gap-3 mb-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e40af] flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
              <Briefcase className="w-5 h-5 text-[#1e40af]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-extrabold text-sm sm:text-base text-slate-900 truncate tracking-tight">
                {company}
              </div>
              <div className="text-xs text-slate-500 font-medium truncate">{country}</div>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex gap-1 mb-3.5">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="card-star w-3.5 h-3.5 fill-amber-400 text-amber-400 opacity-100 scale-100"
              />
            ))}
          </div>

          {/* Impact Metric Box */}
          <div className="card-metric-box bg-slate-50/90 rounded-xl p-3 sm:p-4 mb-3.5 border border-slate-200/70 group-hover:bg-orange-50/60 group-hover:border-orange-300/80 group-hover:shadow-sm transition-all duration-300">
            <div className="card-metric text-2xl sm:text-3xl font-black text-[#ff6600] mb-0.5 tracking-tight group-hover:scale-[1.02] transition-transform duration-300">
              {impact.metric}
            </div>
            <div className="text-xs text-slate-700 font-bold">
              {impact.label}
            </div>
          </div>
        </div>

        {/* Author & Role (Person Info) */}
        <div className="card-person flex items-center gap-2.5 pt-3 border-t border-slate-100 opacity-100 transform translate-y-0">
          <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e40af] flex-shrink-0">
            <Users className="w-4 h-4 text-[#1e40af]" />
          </div>
          <div className="min-w-0">
            <div className="font-bold text-xs sm:text-sm text-slate-900 truncate">
              {author}
            </div>
            <div className="text-[11px] text-slate-500 font-medium truncate">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PyramidCanvas = ({
  hoveredCard,
  setHoveredCard,
  setIsCapabilityPaused,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const anchorElsRef = useRef([]);
  const [webGlSupported, setWebGlSupported] = useState(true);

  // References for Three.js scene objects
  const layerMeshesRef = useRef([]);
  const targetYOffsets = useRef([0, 0, 0, 0]);
  const currentYOffsets = useRef([0, 0, 0, 0]);
  const targetScales = useRef([1, 1, 1, 1]);
  const currentScales = useRef([1, 1, 1, 1]);

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current) return;

    let animId;
    let isVisible = true;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch (e) {
      setWebGlSupported(false);
      return;
    }

    // 1. SCENE & CAMERA SETUP
    const scene = new THREE.Scene();

    const container = containerRef.current;
    const width = container?.clientWidth || 450;
    const height = container?.clientHeight || 500;

    // Perspective camera with 3/4 standing view
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);
    camera.lookAt(0, 0.05, 0);

    // 2. RENDERER WITH SHADOWS
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    // 3. ENTERPRISE LIGHTING SYSTEM
    // Warm key light from top-right
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(5, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 20;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Cyan/ice blue rim light from top-left
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    rimLight.position.set(-6, 6, -4);
    scene.add(rimLight);

    // Soft ambient fill light
    const ambientLight = new THREE.AmbientLight(0xf8fafc, 1.1);
    scene.add(ambientLight);

    // Dynamic sweeping point light for active layer illumination
    const activeSweepLight = new THREE.PointLight(0x38bdf8, 3.5, 8);
    activeSweepLight.position.set(0, 0.5, 2.5);
    scene.add(activeSweepLight);

    // 4. MAIN PYRAMID GROUP (Dynamic Responsive Fit-to-Frame)
    const pyramidGroup = new THREE.Group();
    pyramidGroup.position.y = 0.05;
    scene.add(pyramidGroup);

    // Responsive Fit-to-Frame calculation ensuring complete silhouette is visible with 12-16% safe margins
    const updatePyramidFit = () => {
      if (!container || !renderer || !camera || !pyramidGroup) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;

      const aspect = w / h;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      const dist = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const visibleHeight = 2 * Math.tan(vFOV / 2) * dist;
      const visibleWidth = visibleHeight * aspect;

      // Unscaled bounding dimensions: width = 2.70, height = 1.92
      const marginX = 0.32; // ~16% margin on left/right
      const marginY = 0.24; // ~12% margin on top/bottom

      const scaleW = (visibleWidth * (1 - marginX)) / 2.70;
      const scaleH = (visibleHeight * (1 - marginY)) / 1.92;

      let fitScale = Math.min(scaleW, scaleH);
      fitScale = THREE.MathUtils.clamp(fitScale, 0.58, 0.85);

      pyramidGroup.scale.set(fitScale, fitScale, fitScale);
    };

    // Contact shadow plane underneath base layer
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.15;
    shadowPlane.receiveShadow = true;
    pyramidGroup.add(shadowPlane);

    // Subtle Ground Orbital Ring matching reference image
    const ringGeo = new THREE.RingGeometry(1.62, 1.66, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.24,
    });
    const groundRing = new THREE.Mesh(ringGeo, ringMat);
    groundRing.rotation.x = -Math.PI / 2;
    groundRing.position.y = -1.14;
    pyramidGroup.add(groundRing);

    // 5. PROCEDURAL 4-LAYER BEVELLED ARCHITECTURAL PYRAMID
    const createBevelledFrustum = (bottomWidth, topWidth, height, colorHex, emissiveHex) => {
      const halfB = bottomWidth / 2;
      const chamfer = 0.05 * bottomWidth;

      const shape = new THREE.Shape();
      shape.moveTo(-halfB + chamfer, -halfB);
      shape.lineTo(halfB - chamfer, -halfB);
      shape.quadraticCurveTo(halfB, -halfB, halfB, -halfB + chamfer);
      shape.lineTo(halfB, halfB - chamfer);
      shape.quadraticCurveTo(halfB, halfB, halfB - chamfer, halfB);
      shape.lineTo(-halfB + chamfer, halfB);
      shape.quadraticCurveTo(-halfB, halfB, -halfB, halfB - chamfer);
      shape.lineTo(-halfB, -halfB + chamfer);
      shape.quadraticCurveTo(-halfB, -halfB, -halfB + chamfer, -halfB);

      const extrudeSettings = {
        depth: height,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.02,
        bevelThickness: 0.02,
      };

      const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geom.center();

      // Taper top vertices
      const pos = geom.attributes.position;
      const topRatio = topWidth / bottomWidth;
      const halfH = height / 2;

      for (let i = 0; i < pos.count; i++) {
        const z = pos.getZ(i);
        const factor = THREE.MathUtils.clamp((z + halfH) / height, 0, 1);
        const s = 1.0 + (topRatio - 1.0) * factor;
        pos.setX(i, pos.getX(i) * s);
        pos.setY(i, pos.getY(i) * s);
      }

      geom.computeVertexNormals();
      geom.rotateX(-Math.PI / 2);

      const mat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: emissiveHex,
        emissiveIntensity: 0.18,
        roughness: 0.28,
        metalness: 0.45,
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    };

    // Layer Dimensions & Base Y-Positions (Top Cap -> Base)
    const baseYPositions = [0.72, 0.24, -0.24, -0.72];
    const layerConfigs = [
      { bW: 0.72, tW: 0.10, h: 0.48, color: 0x06b6d4, emissive: 0x0891b2 }, // 01 Intelligent Automation (Cyan)
      { bW: 1.38, tW: 0.76, h: 0.44, color: 0x8b5cf6, emissive: 0x6d28d9 }, // 02 Machine Learning (Purple)
      { bW: 2.04, tW: 1.42, h: 0.44, color: 0x2563eb, emissive: 0x1d4ed8 }, // 03 Data Intelligence (Blue)
      { bW: 2.70, tW: 2.08, h: 0.46, color: 0x1e293b, emissive: 0x0f172a }, // 04 Secure AI Infra (Navy)
    ];

    const layerMeshes = [];
    const layerAnchors = [];

    layerConfigs.forEach((cfg, idx) => {
      const mesh = createBevelledFrustum(cfg.bW, cfg.tW, cfg.h, cfg.color, cfg.emissive);
      mesh.position.y = baseYPositions[idx];
      pyramidGroup.add(mesh);
      layerMeshes.push(mesh);

      // Create 3D anchor dummy attached to front-center face of each layer mesh for 3D coordinate projection
      const anchor = new THREE.Group();
      if (idx === 0) anchor.position.set(0, 0.04, 0.28);    // Front face Top Cyan Tier
      else if (idx === 1) anchor.position.set(0, 0.02, 0.54); // Front face Purple Tier
      else if (idx === 2) anchor.position.set(0, 0.02, 0.82); // Front face Blue Tier
      else anchor.position.set(0, 0.02, 1.12);              // Front face Navy Base Tier

      mesh.add(anchor);
      layerAnchors.push(anchor);
    });

    layerMeshesRef.current = layerMeshes;

    // 6. MICRO ENERGY PARTICLES
    const particleCount = 24;
    const particleGeo = new THREE.SphereGeometry(0.018, 6, 6);
    const particleMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.55,
    });
    const particlesGroup = new THREE.Group();
    const particleData = [];

    for (let i = 0; i < particleCount; i++) {
      const pMesh = new THREE.Mesh(particleGeo, particleMat);
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.1 + Math.random() * 0.9;
      const y = -1.0 + Math.random() * 2.2;
      const speed = 0.002 + Math.random() * 0.003;

      pMesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      particlesGroup.add(pMesh);
      particleData.push({ mesh: pMesh, angle, radius, speed, startY: -1.0, endY: 1.2 });
    }
    pyramidGroup.add(particlesGroup);

    // 7. MOUSE PARALLAX & RAYCASTING
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();

    const handlePointerMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width;
      const yNorm = (e.clientY - rect.top) / rect.height;

      // Desktop Parallax
      if (window.innerWidth >= 1024) {
        mouseX = xNorm - 0.5;
        mouseY = yNorm - 0.5;
        targetRotY = mouseX * 0.08;
        targetRotX = -mouseY * 0.06;
      }

      // 3D Raycast Hit Testing
      mouseVec.x = xNorm * 2 - 1;
      mouseVec.y = -yNorm * 2 + 1;
      raycaster.setFromCamera(mouseVec, camera);

      const intersects = raycaster.intersectObjects(layerMeshes, false);
      if (intersects.length > 0) {
        container.style.cursor = "pointer";
        const hitIdx = layerMeshes.indexOf(intersects[0].object);
        if (hitIdx !== -1) {
          setHoveredCard(hitIdx);
          setIsCapabilityPaused(true);
        }
      } else {
        container.style.cursor = "default";
      }
    };

    const handlePointerLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
      setIsCapabilityPaused(false);
    };

    container.addEventListener("mousemove", handlePointerMove, { passive: true });
    container.addEventListener("mouseleave", handlePointerLeave, { passive: true });

    // Initial Fit-to-Frame setup
    updatePyramidFit();

    // Handle Resize
    const handleResize = () => {
      updatePyramidFit();
    };
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 8. RENDER ANIMATION LOOP
    const tempAnchorVec = new THREE.Vector3();
    let clockTime = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible || !renderer || !scene || !camera) return;

      clockTime += 0.016;

      // Idle float (very subtle ~2px breathing around base position)
      if (!isReducedMotion) {
        pyramidGroup.position.y = 0.05 + Math.sin(clockTime * 1.5) * 0.02;
      }

      // Parallax smooth interpolation
      pyramidGroup.rotation.x += (targetRotX - pyramidGroup.rotation.x) * 0.06;
      pyramidGroup.rotation.y += (targetRotY - pyramidGroup.rotation.y) * 0.06;

      // Layer offset & glow interpolation based on active hoveredCard
      const meshes = layerMeshesRef.current;
      const tOffsets = targetYOffsets.current;
      const cOffsets = currentYOffsets.current;
      const tScales = targetScales.current;
      const cScales = currentScales.current;

      for (let i = 0; i < 4; i++) {
        cOffsets[i] += (tOffsets[i] - cOffsets[i]) * 0.1;
        cScales[i] += (tScales[i] - cScales[i]) * 0.1;

        if (meshes[i]) {
          meshes[i].position.y = baseYPositions[i] + cOffsets[i];
          meshes[i].scale.set(cScales[i], 1, cScales[i]);

          const targetEmissive = tOffsets[i] > 0 ? 0.65 : 0.18;
          meshes[i].material.emissiveIntensity +=
            (targetEmissive - meshes[i].material.emissiveIntensity) * 0.1;
        }
      }

      // Active sweep light position
      const activeIdx = tOffsets.findIndex((o) => o > 0);
      if (activeIdx !== -1) {
        activeSweepLight.position.y = baseYPositions[activeIdx] + cOffsets[activeIdx];
        activeSweepLight.position.x = Math.sin(clockTime * 2.5) * 0.6;
      }

      // Update particles
      if (!isReducedMotion) {
        particleData.forEach((p) => {
          p.mesh.position.y += p.speed;
          p.angle += 0.01;
          p.mesh.position.x = Math.cos(p.angle) * p.radius;
          p.mesh.position.z = Math.sin(p.angle) * p.radius;
          if (p.mesh.position.y > p.endY) {
            p.mesh.position.y = p.startY;
          }
        });
      }

      // Compute 3D-to-Screen projection for 4 HTML label anchors directly on pyramid front faces
      const cW = container.clientWidth;
      const cH = container.clientHeight;

      for (let i = 0; i < 4; i++) {
        if (layerAnchors[i] && anchorElsRef.current[i]) {
          layerAnchors[i].getWorldPosition(tempAnchorVec);
          tempAnchorVec.project(camera);
          const px = ((tempAnchorVec.x + 1) / 2) * cW;
          const py = ((-tempAnchorVec.y + 1) / 2) * cH;
          anchorElsRef.current[i].style.left = `${Math.round(px)}px`;
          anchorElsRef.current[i].style.top = `${Math.round(py)}px`;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mouseleave", handlePointerLeave);
      observer.disconnect();

      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, []);

  // Sync active layer offsets when hoveredCard changes
  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      if (hoveredCard === i) {
        targetYOffsets.current[i] = 0.14;
        targetScales.current[i] = 1.04;
      } else {
        targetYOffsets.current[i] = 0;
        targetScales.current[i] = 1.0;
      }
    }
  }, [hoveredCard]);

  // Label UI Metadata
  const labelData = [
    { number: "01", title: "Intelligent Automation", icon: Brain },
    { number: "02", title: "Machine Learning Models", icon: Cpu },
    { number: "03", title: "Data Intelligence", icon: BarChart },
    { number: "04", title: "Secure AI Infrastructure", icon: Shield },
  ];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsCapabilityPaused(true)}
      onMouseLeave={() => setIsCapabilityPaused(false)}
      className="relative w-full h-[500px] sm:h-[560px] lg:h-[640px] flex items-center justify-center select-none overflow-visible"
    >
      {/* Background Soft Ambient Radial Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-cyan-400/15 via-blue-500/15 to-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* 3D Canvas */}
      {webGlSupported ? (
        <canvas ref={canvasRef} className="w-full h-full object-contain relative z-10" />
      ) : (
        /* WebGL Fallback */
        <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-3xl border border-slate-200">
          {labelData.map((lbl, idx) => (
            <button
              key={idx}
              onClick={() => setHoveredCard(idx)}
              className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all ${
                hoveredCard === idx ? "bg-white shadow-md border border-blue-400" : "bg-slate-100"
              }`}
            >
              <lbl.icon className="w-5 h-5 text-blue-600" />
              <div className="text-left">
                <span className="text-xs font-bold text-slate-400">{lbl.number}</span>
                <h4 className="text-sm font-bold text-slate-900">{lbl.title}</h4>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Capability Information Labels Printed Directly onto 3D Pyramid Layer Surfaces matching Reference Image */}
      {webGlSupported && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {labelData.map((label, idx) => {
            const isThisActive = hoveredCard === idx;
            const Icon = label.icon;
            const isTopCap = idx === 0;

            return (
              <div
                key={idx}
                ref={(el) => {
                  anchorElsRef.current[idx] = el;
                }}
                onClick={() => {
                  setHoveredCard(idx);
                  setIsCapabilityPaused(true);
                }}
                onMouseEnter={() => {
                  setHoveredCard(idx);
                  setIsCapabilityPaused(true);
                }}
                onMouseLeave={() => setIsCapabilityPaused(false)}
                tabIndex={0}
                role="button"
                aria-label={`Select ${label.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setHoveredCard(idx);
                    setIsCapabilityPaused(true);
                  }
                }}
                className={`absolute pointer-events-auto cursor-pointer transition-all duration-300 focus:outline-none ${
                  isThisActive
                    ? "scale-105 z-40 opacity-100 blur-none brightness-110"
                    : "opacity-40 blur-[1.5px] scale-95 hover:opacity-100 hover:blur-none hover:scale-100 z-30"
                }`}
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              >
                {isTopCap ? (
                  /* Top Cyan Cap: Centered Vertical Stack Layout (Icon Badge at top, 01, Title below) */
                  <div className="flex flex-col items-center text-center gap-0.5 sm:gap-1">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 ${
                        isThisActive
                          ? "bg-white/40 border-white shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-white scale-110"
                          : "bg-white/20 border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.8)] hover:bg-white/30"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]" />
                    </div>

                    <div className="flex flex-col items-center leading-none">
                      <span className="text-[10px] sm:text-[11px] font-black text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] drop-shadow-[0_0_8px_rgba(0,0,0,0.9)] tracking-wider mb-0.5">
                        {label.number}
                      </span>
                      <span className="text-[11px] sm:text-xs font-black text-white whitespace-nowrap drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)] drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] tracking-tight">
                        {label.title}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Layers 02, 03, 04: Centered Horizontal Row Layout (Icon Badge on left, number + title column on right) */
                  <div className="flex items-center gap-2 sm:gap-2.5 text-left">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full sm:rounded-xl border backdrop-blur-md flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 ${
                        isThisActive
                          ? "bg-white/40 border-white shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-white scale-110"
                          : "bg-white/20 border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.8)] hover:bg-white/30"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]" />
                    </div>

                    <div className="flex flex-col justify-center leading-tight">
                      <span className="text-[10px] sm:text-[11px] font-black text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] drop-shadow-[0_0_8px_rgba(0,0,0,0.9)] tracking-wider">
                        {label.number}
                      </span>
                      <span className="text-xs sm:text-sm font-black text-white whitespace-nowrap drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)] drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] tracking-tight">
                        {label.title}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const ProcessStep = ({ number, title, description, icon: Icon }) => (
  <div className="relative group">
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1e40af] rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl font-black flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-6 h-6 text-[#f97316]" />
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">
              {title}
            </h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function NexCoreLanding() {
  const [hoveredCard, setHoveredCard] = useState(0);
  const [isCapabilityPaused, setIsCapabilityPaused] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isTabSwitching, setIsTabSwitching] = useState(false);

  // Refs for AI Solutions Hero Section Animation
  const heroSectionRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const schedBtnRef = useRef(null);
  const schedArrowRef = useRef(null);
  const caseBtnRef = useRef(null);
  const heroBrainWrapRef = useRef(null);
  const heroBrainParallaxRef = useRef(null);
  const heroBrainFloatRef = useRef(null);
  const desktopCardRef0 = useRef(null);
  const desktopCardRef1 = useRef(null);
  const desktopCardRef2 = useRef(null);
  const desktopCardRef3 = useRef(null);
  const cardIconRef0 = useRef(null);
  const cardIconRef1 = useRef(null);
  const cardIconRef2 = useRef(null);
  const cardIconRef3 = useRef(null);
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);
  const pathRef4 = useRef(null);
  const pulseDotRef1 = useRef(null);
  const pulseDotRef2 = useRef(null);
  const pulseDotRef3 = useRef(null);
  const pulseDotRef4 = useRef(null);
  const nodeDotRef1 = useRef(null);
  const nodeDotRef2 = useRef(null);
  const nodeDotRef3 = useRef(null);
  const nodeDotRef4 = useRef(null);
  const mobileCardsGridRef = useRef(null);

  // Refs for Our Process Section
  const processSectionRef = useRef(null);
  const processHeadingRef = useRef(null);
  const processPathRef = useRef(null);
  const processPulseDotRef = useRef(null);
  const processCardRefs = useRef([]);
  const processIconRefs = useRef([]);
  const processBadgeRefs = useRef([]);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  // Refs for Proven Results GSAP ScrollTrigger Timeline & Continuous Marquee
  const provenResultsRef = useRef(null);
  const headingRef = useRef(null);
  const networkRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef(null);
  const marqueeTrackRef1 = useRef(null);
  const marqueeTrackRef2 = useRef(null);
  const marqueeTweenRef1 = useRef(null);
  const marqueeTweenRef2 = useRef(null);
  const marqueeContainerRef = useRef(null);

  // Refs for Cutting-Edge Tech Stack Section
  const techSectionRef = useRef(null);
  const techHeaderRef = useRef(null);
  const techBgRef = useRef(null);
  const techTabsRef = useRef(null);
  const techGridRef = useRef(null);
  const techCardRefs = useRef([]);
  const techCtaRef = useRef(null);

  // Smooth Tab Switch Animation Handler
  const handleTabChange = (newIdx) => {
    if (newIdx === activeTab || isTabSwitching) return;

    const isReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) {
      setActiveTab(newIdx);
      return;
    }

    setIsTabSwitching(true);
    const validCards = techCardRefs.current.filter(Boolean);

    // 1. Animate current cards out
    gsap.to(validCards, {
      opacity: 0,
      y: -10,
      scale: 0.98,
      duration: 0.2,
      stagger: 0.04,
      ease: "power2.in",
      onComplete: () => {
        // Change tab state
        setActiveTab(newIdx);

        // Allow DOM to re-render new cards
        requestAnimationFrame(() => {
          const newCards = techCardRefs.current.filter(Boolean);

          // 2. Animate new cards in
          gsap.fromTo(
            newCards,
            { opacity: 0, y: 20, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.35,
              stagger: 0.08,
              ease: "back.out(1.4)",
              onComplete: () => {
                setIsTabSwitching(false);
              },
            }
          );

          // 3. Single Technology Light Scan sweep across new cards
          newCards.forEach((card, i) => {
            const scanLine = card?.querySelector(".card-scan-line");
            if (scanLine) {
              gsap.fromTo(
                scanLine,
                { xPercent: -100, opacity: 0.6 },
                { xPercent: 200, opacity: 0, duration: 0.7, delay: i * 0.1, ease: "power1.inOut" }
              );
            }
          });
        });
      },
    });
  };

  // Marquee Row 1 Independent Pause & Resume Handlers
  const handlePauseRow1 = () => {
    if (marqueeTweenRef1.current) {
      gsap.to(marqueeTweenRef1.current, {
        timeScale: 0,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  const handleResumeRow1 = () => {
    if (marqueeTweenRef1.current) {
      gsap.to(marqueeTweenRef1.current, {
        timeScale: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  // Marquee Row 2 Independent Pause & Resume Handlers
  const handlePauseRow2 = () => {
    if (marqueeTweenRef2.current) {
      gsap.to(marqueeTweenRef2.current, {
        timeScale: 0,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  const handleResumeRow2 = () => {
    if (marqueeTweenRef2.current) {
      gsap.to(marqueeTweenRef2.current, {
        timeScale: 1,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  // Refs for Statistics Counting Animation
  const statNumRef1 = useRef(null);
  const statLabelRef1 = useRef(null);
  const statNumRef2 = useRef(null);
  const statLabelRef2 = useRef(null);
  const statNumRef3 = useRef(null);
  const statLabelRef3 = useRef(null);

  // Card & Button Hover Animation Handlers
  const handleCardHover = (index, isEntering) => {
    if (typeof window === "undefined") return;
    const cards = [desktopCardRef0.current, desktopCardRef1.current, desktopCardRef2.current, desktopCardRef3.current];
    const paths = [pathRef1.current, pathRef2.current, pathRef3.current, pathRef4.current];
    const nodes = [nodeDotRef1.current, nodeDotRef2.current, nodeDotRef3.current, nodeDotRef4.current];
    const icons = [cardIconRef0.current, cardIconRef1.current, cardIconRef2.current, cardIconRef3.current];

    const card = cards[index];
    const path = paths[index];
    const node = nodes[index];
    const icon = icons[index];

    if (isEntering) {
      if (card) gsap.to(card, { y: -4, scale: 1.015, duration: 0.25, ease: "power2.out" });
      if (path) gsap.to(path, { strokeWidth: 3.8, opacity: 1, duration: 0.25 });
      if (node) gsap.to(node, { r: 8, opacity: 1, duration: 0.25 });
      if (icon) {
        if (index === 0) gsap.to(icon, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });
        else if (index === 1) gsap.to(icon, { x: 3, y: -3, duration: 0.2, yoyo: true, repeat: 1 });
        else if (index === 2) gsap.to(icon, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });
        else if (index === 3) gsap.to(icon, { y: -3, duration: 0.2, yoyo: true, repeat: 1 });
      }
    } else {
      if (card) gsap.to(card, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" });
      if (path) gsap.to(path, { strokeWidth: 2.5, opacity: 1, duration: 0.25 });
      if (node) gsap.to(node, { r: 3.5, opacity: 1, duration: 0.25 });
      if (icon) gsap.to(icon, { x: 0, y: 0, scale: 1, duration: 0.2 });
    }
  };

  // Process Card Hover Handlers
  const handleProcessCardHover = (index, isEntering) => {
    if (typeof window === "undefined") return;
    const card = processCardRefs.current[index];
    const icon = processIconRefs.current[index];
    const badge = processBadgeRefs.current[index];

    if (isEntering) {
      setActiveProcessStep(index);
      if (card) {
        gsap.to(card, {
          y: -6,
          rotateX: -2,
          scale: 1.015,
          duration: 0.25,
          ease: "power2.out",
        });
      }
      if (badge) {
        gsap.to(badge, { y: -3, scale: 1.1, duration: 0.2, ease: "power2.out" });
      }
      if (icon) {
        if (index === 3) {
          gsap.to(icon, { scale: 1.25, y: -3, duration: 0.25, ease: "back.out(1.7)" });
        } else {
          gsap.to(icon, { scale: 1.15, duration: 0.2, ease: "power2.out" });
        }
      }
    } else {
      if (card) {
        gsap.to(card, {
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      }
      if (badge) {
        gsap.to(badge, { y: 0, scale: 1, duration: 0.2, ease: "power2.out" });
      }
      if (icon) {
        gsap.to(icon, { scale: 1, y: 0, duration: 0.2, ease: "power2.out" });
      }
    }
  };

  const handleBtnHover = (type, isEntering) => {
    if (typeof window === "undefined") return;
    if (type === "sched") {
      const btn = schedBtnRef.current;
      const arrow = schedArrowRef.current;
      if (isEntering) {
        if (btn) gsap.to(btn, { y: -2, duration: 0.2, ease: "power2.out" });
        if (arrow) gsap.to(arrow, { x: 4, duration: 0.2, ease: "power2.out" });
      } else {
        if (btn) gsap.to(btn, { y: 0, duration: 0.2, ease: "power2.out" });
        if (arrow) gsap.to(arrow, { x: 0, duration: 0.2, ease: "power2.out" });
      }
    } else if (type === "case") {
      const btn = caseBtnRef.current;
      if (isEntering) {
        if (btn) gsap.to(btn, { y: -2, duration: 0.2, ease: "power2.out" });
      } else {
        if (btn) gsap.to(btn, { y: 0, duration: 0.2, ease: "power2.out" });
      }
    }
  };

  // GSAP Entrance, Idle Breathing, Neural Pulses & Parallax for Hero Section
  useEffect(() => {
    if (typeof window === "undefined" || !heroSectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const section = heroSectionRef.current;
    const badge = heroBadgeRef.current;
    const heading = heroHeadingRef.current;
    const desc = heroDescRef.current;
    const buttons = heroButtonsRef.current;
    const brainWrap = heroBrainWrapRef.current;
    const brainParallax = heroBrainParallaxRef.current;
    const brainFloat = heroBrainFloatRef.current;
    const mobileGrid = mobileCardsGridRef.current;

    const desktopCards = [
      desktopCardRef0.current,
      desktopCardRef1.current,
      desktopCardRef2.current,
      desktopCardRef3.current,
    ].filter(Boolean);

    const paths = [pathRef1.current, pathRef2.current, pathRef3.current, pathRef4.current];
    const pulseDots = [pulseDotRef1.current, pulseDotRef2.current, pulseDotRef3.current, pulseDotRef4.current];
    const nodeDots = [nodeDotRef1.current, nodeDotRef2.current, nodeDotRef3.current, nodeDotRef4.current];

    if (isReducedMotion) {
      if (badge) gsap.set(badge, { opacity: 1, y: 0 });
      if (heading) {
        const lines = heading.querySelectorAll(".hero-heading-line");
        gsap.set(lines, { opacity: 1, y: 0, filter: "none" });
      }
      if (desc) gsap.set(desc, { opacity: 1, y: 0 });
      if (buttons) gsap.set(buttons, { opacity: 1, y: 0 });
      if (brainWrap) gsap.set(brainWrap, { opacity: 1, scale: 1 });
      desktopCards.forEach((c) => gsap.set(c, { opacity: 1, scale: 1, y: 0 }));
      if (mobileGrid) gsap.set(mobileGrid, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. HERO ENTRANCE TIMELINE
      const entranceTL = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Badge
      if (badge) {
        entranceTL.fromTo(badge, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45 });
      }

      // Heading lines reveal upward with blur removal
      if (heading) {
        const lines = heading.querySelectorAll(".hero-heading-line");
        if (lines.length > 0) {
          entranceTL.fromTo(
            lines,
            { opacity: 0, y: 30, filter: "blur(8px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, stagger: 0.08 },
            "-=0.25"
          );
        }
      }

      // Description
      if (desc) {
        entranceTL.fromTo(desc, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3");
      }

      // CTA Buttons
      if (buttons) {
        entranceTL.fromTo(buttons, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.25");
      }

      // Central Brain Visual Container
      if (brainWrap) {
        entranceTL.fromTo(brainWrap, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.5 }, "-=0.35");
      }

      // Four surrounding capability cards
      if (desktopCards.length > 0) {
        entranceTL.fromTo(
          desktopCards,
          { opacity: 0, scale: 0.94, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.09 },
          "-=0.2"
        );
      }

      // Mobile cards grid
      if (mobileGrid) {
        entranceTL.fromTo(mobileGrid, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3");
      }

      // 2. BRAIN IDLE FLOATING & BREATHING MOTION
      if (brainFloat) {
        gsap.to(brainFloat, {
          y: -8,
          scale: 1.015,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 3. NEURAL ACTIVITY & CONNECTION PULSES
      let pulseCounter = 0;
      const runPulseCycle = () => {
        const idx = pulseCounter % 4;
        const path = paths[idx];
        const dot = pulseDots[idx];
        const node = nodeDots[idx];
        pulseCounter++;

        if (path && dot) {
          const pathLen = path.getTotalLength();
          const reverse = pulseCounter % 2 === 0;
          const animObj = { progress: reverse ? 1 : 0 };

          gsap.set(dot, { opacity: 1 });
          gsap.to(animObj, {
            progress: reverse ? 0 : 1,
            duration: 1.8,
            ease: "power1.inOut",
            onUpdate: () => {
              try {
                const pt = path.getPointAtLength(animObj.progress * pathLen);
                dot.setAttribute("cx", pt.x);
                dot.setAttribute("cy", pt.y);
              } catch (e) {}
            },
            onComplete: () => {
              gsap.to(dot, { opacity: 0, duration: 0.3 });
            },
          });
        }

        if (node) {
          gsap.fromTo(
            node,
            { r: 3.5, opacity: 0.5 },
            { r: 7.5, opacity: 1, duration: 0.45, yoyo: true, repeat: 1, ease: "power2.out" }
          );
        }
      };

      const pulseTimeout = setTimeout(() => {
        runPulseCycle();
      }, 1200);

      const pulseInterval = setInterval(() => {
        runPulseCycle();
      }, 3500);

      // 4. SUBTLE SCROLL PARALLAX AS HERO LEAVES VIEWPORT
      if (brainParallax) {
        gsap.to(brainParallax, {
          y: 35,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      // 5. DESKTOP MOUSE PARALLAX
      const handleMouseMove = (e) => {
        if (typeof window === "undefined" || window.innerWidth < 1024 || !brainParallax) return;
        const rect = section.getBoundingClientRect();
        const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
        const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(brainParallax, {
          rotateY: xRatio * 6,
          rotateX: -yRatio * 6,
          x: xRatio * 14,
          y: yRatio * 14,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        if (typeof window === "undefined" || window.innerWidth < 1024 || !brainParallax) return;
        gsap.to(brainParallax, {
          rotateY: 0,
          rotateX: 0,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      section.addEventListener("mousemove", handleMouseMove, { passive: true });
      section.addEventListener("mouseleave", handleMouseLeave, { passive: true });

      return () => {
        clearTimeout(pulseTimeout);
        clearInterval(pulseInterval);
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  // GSAP ScrollTrigger Sequence for Our Process Section
  useEffect(() => {
    if (typeof window === "undefined" || !processSectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const section = processSectionRef.current;
    const heading = processHeadingRef.current;
    const validCards = processCardRefs.current.filter(Boolean);

    if (isReducedMotion) {
      if (heading) gsap.set(heading, { opacity: 1, y: 0 });
      validCards.forEach((c) => gsap.set(c, { opacity: 1, y: 0, scale: 1, rotateX: 0 }));
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Heading Reveal
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Ascending Step Cards Entrance
      if (validCards.length > 0) {
        validCards.forEach((card, i) => {
          gsap.set(card, {
            opacity: 0,
            y: 40,
            scale: 0.96,
            rotateX: 4,
            transformPerspective: 1000,
          });

          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              once: true,
            },
          });
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // GSAP ScrollTrigger Sequence for Proven Results Section & Continuous Marquee
  useEffect(() => {
    if (typeof window === "undefined" || !provenResultsRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const section = provenResultsRef.current;
    const heading = headingRef.current;
    const network = networkRef.current;
    const marqueeTrack1 = marqueeTrackRef1.current;
    const marqueeTrack2 = marqueeTrackRef2.current;
    const marqueeContainer = marqueeContainerRef.current;
    const validCards = cardsRef.current.filter(Boolean);

    if (!section) return;

    if (isReducedMotion) {
      if (heading) gsap.set(heading, { opacity: 1, y: 0 });
      if (network) gsap.set(network, { opacity: 1 });
      if (marqueeContainer) gsap.set(marqueeContainer, { opacity: 1, y: 0 });
      validCards.forEach((cardEl) => {
        if (!cardEl) return;
        gsap.set(cardEl, { opacity: 1, y: 0, scale: 1 });
        const accent = cardEl.querySelector(".card-accent-line");
        const stars = cardEl.querySelectorAll(".card-star");
        const metricBox = cardEl.querySelector(".card-metric-box");
        const person = cardEl.querySelector(".card-person");
        if (accent) gsap.set(accent, { scaleX: 1 });
        if (stars) gsap.set(stars, { opacity: 1, scale: 1 });
        if (metricBox) gsap.set(metricBox, { opacity: 1, y: 0 });
        if (person) gsap.set(person, { opacity: 1, y: 0 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Heading Reveal (Triggers on viewport entry)
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Ambient Background Glow Reveal
      if (network) {
        gsap.fromTo(
          network,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // 3. Marquee Container Entrance Reveal (opacity 0 -> 1, y 20 -> 0)
      if (marqueeContainer) {
        gsap.fromTo(
          marqueeContainer,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: marqueeContainer,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 4. Ensure sub-elements in all cards are fully visible immediately
      validCards.forEach((cardEl) => {
        if (!cardEl) return;
        const accentLine = cardEl.querySelector(".card-accent-line");
        const stars = cardEl.querySelectorAll(".card-star");
        const metricBox = cardEl.querySelector(".card-metric-box");
        const person = cardEl.querySelector(".card-person");

        if (accentLine) gsap.set(accentLine, { scaleX: 1, transformOrigin: "left" });
        if (stars) gsap.set(stars, { opacity: 1, scale: 1 });
        if (metricBox) gsap.set(metricBox, { opacity: 1, y: 0 });
        if (person) gsap.set(person, { opacity: 1, y: 0 });
      });

      // 5. Continuous Dual-Row Marquee Animations (Independent Control, 45s duration)
      if (marqueeTrack1 && marqueeTrack2) {
        // Row 1: LEFT -> RIGHT
        const tween1 = gsap.fromTo(
          marqueeTrack1,
          { xPercent: -25 },
          {
            xPercent: 0,
            duration: 45,
            ease: "none",
            repeat: -1,
          }
        );
        marqueeTweenRef1.current = tween1;

        // Row 2: RIGHT -> LEFT
        const tween2 = gsap.to(marqueeTrack2, {
          xPercent: -25,
          duration: 45,
          ease: "none",
          repeat: -1,
        });
        marqueeTweenRef2.current = tween2;

        // Viewport liveness: pause marquee when section is far out of view
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom+=200",
          end: "bottom top-=200",
          onLeave: () => {
            marqueeTweenRef1.current?.pause();
            marqueeTweenRef2.current?.pause();
          },
          onEnterBack: () => {
            marqueeTweenRef1.current?.resume();
            marqueeTweenRef2.current?.resume();
          },
          onLeaveBack: () => {
            marqueeTweenRef1.current?.pause();
            marqueeTweenRef2.current?.pause();
          },
          onEnter: () => {
            marqueeTweenRef1.current?.resume();
            marqueeTweenRef2.current?.resume();
          },
        });
      }
    }, section);

    // Desktop Mouse Parallax on Ambient Glow Layer
    const xQuick = gsap.quickTo(network, "x", { duration: 0.8, ease: "power2.out" });
    const yQuick = gsap.quickTo(network, "y", { duration: 0.8, ease: "power2.out" });

    const handleMouseMove = (e) => {
      if (typeof window === "undefined" || window.innerWidth < 1024) return;
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      xQuick(x * 8);
      yQuick(y * 8);
    };

    section.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // GSAP Entrance Sequence for Cutting-Edge Tech Stack Section
  useEffect(() => {
    if (typeof window === "undefined" || !techSectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = techSectionRef.current;
    const header = techHeaderRef.current;
    const bg = techBgRef.current;
    const tabs = techTabsRef.current;
    const grid = techGridRef.current;
    const cards = techCardRefs.current.filter(Boolean);
    const cta = techCtaRef.current;

    if (!section) return;

    if (isReducedMotion) {
      if (header) gsap.set(header, { opacity: 1, y: 0 });
      if (bg) gsap.set(bg, { opacity: 1 });
      if (tabs) gsap.set(tabs, { opacity: 1, y: 0 });
      if (grid) gsap.set(grid, { opacity: 1, y: 0 });
      if (cta) gsap.set(cta, { opacity: 1, y: 0 });
      cards.forEach((c) => gsap.set(c, { opacity: 1, y: 0, scale: 1 }));
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Entrance Reveal Timeline
      const entranceTL = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      if (bg) entranceTL.fromTo(bg, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0);

      if (header) {
        const headingText = header.querySelector(".tech-heading-text");
        entranceTL.fromTo(
          header,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
          0
        );
        if (headingText) {
          entranceTL.fromTo(
            headingText,
            { filter: "blur(8px)" },
            { filter: "blur(0px)", duration: 0.55, ease: "power2.out" },
            0
          );
        }
      }

      if (tabs) {
        entranceTL.fromTo(
          tabs,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          0.15
        );
      }

      if (cards.length > 0) {
        cards.forEach((card, i) => {
          entranceTL.fromTo(
            card,
            { opacity: 0, y: 25, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.2)" },
            0.2 + i * 0.08
          );
        });
      }

      if (cta) {
        entranceTL.fromTo(
          cta,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          0.5
        );
      }

      // Single light sweep across cards on initial load
      if (cards.length > 0) {
        cards.forEach((card, i) => {
          const scanLine = card?.querySelector(".card-scan-line");
          if (scanLine) {
            gsap.fromTo(
              scanLine,
              { xPercent: -100, opacity: 0.6 },
              { xPercent: 200, opacity: 0, duration: 0.7, delay: 0.6 + i * 0.1, ease: "power1.inOut" }
            );
          }
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // Number-Counting Animation Triggered Once for Statistics Panel
  useEffect(() => {
    if (typeof window === "undefined" || !statsRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const statsEl = statsRef.current;
    const num1 = statNumRef1.current;
    const label1 = statLabelRef1.current;
    const num2 = statNumRef2.current;
    const label2 = statLabelRef2.current;
    const num3 = statNumRef3.current;
    const label3 = statLabelRef3.current;

    if (!statsEl || !num1 || !label1 || !num2 || !label2 || !num3 || !label3) return;

    if (isReducedMotion) {
      num1.textContent = "4.9/5";
      label1.style.opacity = "1";
      label1.style.transform = "translateY(0)";
      num2.textContent = "35+";
      label2.style.opacity = "1";
      label2.style.transform = "translateY(0)";
      num3.textContent = "98%";
      label3.style.opacity = "1";
      label3.style.transform = "translateY(0)";
      return;
    }

    // Set initial un-triggered visual state: numbers at 0, labels hidden
    num1.textContent = "0.0/5";
    num2.textContent = "0+";
    num3.textContent = "0%";
    gsap.set([label1, label2, label3], { opacity: 0, y: 12 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: statsEl,
        start: "top 75%",
        once: true,
        onEnter: () => {
          // Metric 1: 4.9/5
          const obj1 = { val: 0 };
          gsap.to(obj1, {
            val: 4.9,
            duration: 0.9,
            ease: "power2.out",
            onUpdate: () => {
              num1.textContent = `${obj1.val.toFixed(1)}/5`;
            },
            onComplete: () => {
              num1.textContent = "4.9/5";
              gsap.to(label1, {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "power2.out",
              });
            },
          });

          // Metric 2: 35+ (Stagger: 0.08s)
          const obj2 = { val: 0 };
          gsap.to(obj2, {
            val: 35,
            duration: 0.9,
            delay: 0.08,
            ease: "power2.out",
            onUpdate: () => {
              num2.textContent = `${Math.floor(obj2.val)}+`;
            },
            onComplete: () => {
              num2.textContent = "35+";
              gsap.to(label2, {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "power2.out",
              });
            },
          });

          // Metric 3: 98% (Stagger: 0.15s)
          const obj3 = { val: 0 };
          gsap.to(obj3, {
            val: 98,
            duration: 0.9,
            delay: 0.15,
            ease: "power2.out",
            onUpdate: () => {
              num3.textContent = `${Math.floor(obj3.val)}%`;
            },
            onComplete: () => {
              num3.textContent = "98%";
              gsap.to(label3, {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "power2.out",
              });
            },
          });
        },
      });
    }, statsEl);

    return () => ctx.revert();
  }, []);

  // Auto-cycle loop for Comprehensive AI Capabilities 4 cards (0 -> 1 -> 2 -> 3 -> 0)
  useEffect(() => {
    if (isCapabilityPaused) return;

    const interval = setInterval(() => {
      setHoveredCard((prev) => ((prev ?? 0) + 1) % 4);
    }, 3500);

    return () => clearInterval(interval);
  }, [isCapabilityPaused]);

  const globalClients = [
    { name: "Al Khaleej Technologies", country: "Qatar", flag: "🇶🇦" },
    { name: "Riyadh Digital Group", country: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Gulf Innovation Partners", country: "UAE", flag: "🇦🇪" },
    // { name: "Northern Tech Solutions", country: "Canada", flag: "🇨🇦" },
    { name: "Muscat Systems Ltd", country: "Oman", flag: "🇴🇲" },
    { name: "Bay Financial Services", country: "Kuwait", flag: "🇰🇼" },
  ];

 
const testimonials = [
  // AI Solutions
  {
    author: "Sarah Mitchell",
    role: "CTO",
    company: "FinTech Global",
    country: "New York, USA",
    rating: 5,
    impact: { metric: "75%", label: "Processing Time Reduced" },
    service: "AI Solutions"
  },
  {
    author: "Dr. James Wong",
    role: "Head of AI",
    company: "MediHealth Plus",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "3 Weeks", label: "Production-Ready Delivery" },
    service: "AI Development"
  },
  
  // Web Development
  {
    author: "Mohammed Al-Rashid",
    role: "CEO",
    company: "Gulf E-Commerce Hub",
    country: "Dubai, UAE",
    rating: 5,
    impact: { metric: "10x", label: "Revenue Growth" },
    service: "Web Development"
  },
  {
    author: "Jennifer Thompson",
    role: "Marketing Director",
    company: "Pacific Solutions",
    country: "Sydney, Australia",
    rating: 5,
    impact: { metric: "350%", label: "Traffic Increase" },
    service: "Web Design"
  },
  
  // App Development
  {
    author: "David Chen",
    role: "Product Manager",
    company: "Northern Mobile Apps",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "500K+", label: "App Downloads" },
    service: "Mobile App Development"
  },
  {
    author: "Fatima Al-Hassan",
    role: "Tech Lead",
    company: "Riyadh Digital Hub",
    country: "Riyadh, Saudi Arabia",
    rating: 5,
    impact: { metric: "4.8★", label: "App Store Rating" },
    service: "iOS & Android Apps"
  },
  
  // Odoo ERP
  {
    author: "Fatima Al-Zaabi",
    role: "IT Director",
    company: "Qatar Retail Group",
    country: "Doha, Qatar",
    rating: 5,
    impact: { metric: "85%", label: "Cost Savings" },
    service: "Odoo ERP Implementation"
  },
  {
    author: "Ahmed Al-Mansouri",
    role: "Operations Head",
    company: "Muscat Manufacturing",
    country: "Muscat, Oman",
    rating: 5,
    impact: { metric: "70%", label: "Process Efficiency" },
    service: "Odoo Customization"
  },
  
  // Cloud Services
  {
    author: "Emma Richardson",
    role: "VP of Operations",
    company: "RetailTech Pro",
    country: "Sydney, Australia",
    rating: 5,
    impact: { metric: "99.9%", label: "Platform Uptime" },
    service: "Cloud Infrastructure"
  },
  {
    author: "Khalid bin Saleh",
    role: "CIO",
    company: "Kuwait Banking Corp",
    country: "Kuwait City, Kuwait",
    rating: 5,
    impact: { metric: "45%", label: "Infrastructure Cost Cut" },
    service: "Cloud Migration"
  },
  
  // E-commerce
  {
    author: "Sophia Martinez",
    role: "E-commerce Head",
    company: "Global Retail Platform",
    country: "Miami, USA",
    rating: 5,
    impact: { metric: "$5M+", label: "Annual Revenue" },
    service: "E-commerce Platform"
  },
  {
    author: "Nasser Al-Kuwari",
    role: "Business Owner",
    company: "Doha Online Store",
    country: "Doha, Qatar",
    rating: 5,
    impact: { metric: "250%", label: "Sales Growth" },
    service: "Online Store Development"
  },
  
  // Digital Marketing
  {
    author: "Nasser Al-Sabah",
    role: "Marketing Head",
    company: "Kuwait Digital Media",
    country: "Kuwait City, Kuwait",
    rating: 5,
    impact: { metric: "320%", label: "Lead Generation" },
    service: "Digital Marketing"
  },
  {
    author: "Rachel Green",
    role: "CMO",
    company: "Toronto Marketing Agency",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "180%", label: "ROI Increase" },
    service: "SEO & Social Media"
  },
  
  // Business Automation
  {
    author: "Aisha Mohammed",
    role: "Operations Manager",
    company: "Muscat Trading Co",
    country: "Muscat, Oman",
    rating: 5,
    impact: { metric: "60%", label: "Process Efficiency" },
    service: "Business Automation"
  },
  {
    author: "Michael Brown",
    role: "CFO",
    company: "Pacific Finance Group",
    country: "Vancouver, Canada",
    rating: 5,
    impact: { metric: "90%", label: "Manual Work Reduced" },
    service: "Workflow Automation"
  },
  
  // MVP Development
  {
    author: "Lisa Anderson",
    role: "Founder",
    company: "Vancouver Startups",
    country: "Vancouver, Canada",
    rating: 5,
    impact: { metric: "6 Weeks", label: "MVP Launch Time" },
    service: "MVP Development"
  },
  {
    author: "Omar Al-Fahad",
    role: "Startup CEO",
    company: "Gulf Innovation Labs",
    country: "Dubai, UAE",
    rating: 5,
    impact: { metric: "$500K", label: "Funding Raised" },
    service: "Startup MVP"
  },
  
  // Custom Software
  {
    author: "Khalid bin Abdullah",
    role: "Finance Director",
    company: "Gulf Financial Services",
    country: "Dubai, UAE",
    rating: 5,
    impact: { metric: "95%", label: "Accuracy Improved" },
    service: "Custom Software"
  },
  {
    author: "Dr. Sarah Johnson",
    role: "Hospital Administrator",
    company: "Northern Healthcare",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "80%", label: "Admin Time Saved" },
    service: "Healthcare Software"
  },
  
  // SaaS Development
  {
    author: "Abdullah Al-Rashid",
    role: "Product Owner",
    company: "Riyadh SaaS Solutions",
    country: "Riyadh, Saudi Arabia",
    rating: 5,
    impact: { metric: "1000+", label: "Active Subscribers" },
    service: "SaaS Platform"
  },
  {
    author: "James Wilson",
    role: "Tech Founder",
    company: "CloudBase Systems",
    country: "San Francisco, USA",
    rating: 5,
    impact: { metric: "99.95%", label: "Service Uptime" },
    service: "SaaS Development"
  },
  
  // DevOps & Infrastructure
  {
    author: "Mohammed bin Hassan",
    role: "Infrastructure Lead",
    company: "Qatar Tech Corporation",
    country: "Doha, Qatar",
    rating: 5,
    impact: { metric: "70%", label: "Deployment Speed" },
    service: "DevOps Services"
  },
  {
    author: "Robert Martinez",
    role: "DevOps Manager",
    company: "Pacific Cloud Services",
    country: "Seattle, USA",
    rating: 5,
    impact: { metric: "50%", label: "Infrastructure Cost Cut" },
    service: "CI/CD Pipeline"
  },
  
  // UI/UX Design
  {
    author: "Noura Al-Sulaiti",
    role: "Design Director",
    company: "Kuwait Creative Agency",
    country: "Kuwait City, Kuwait",
    rating: 5,
    impact: { metric: "85%", label: "User Satisfaction" },
    service: "UI/UX Design"
  },
  {
    author: "Emily Parker",
    role: "Product Designer",
    company: "Toronto Design Studio",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "200%", label: "User Engagement" },
    service: "UX Research"
  }
];


  const aiSolutions = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "AI-powered automation to modernize and scale operations.",
      features: ["Smart Workflows", "Predictive Insights", "Efficiency Boost"],
    },
    {
      icon: Sparkles,
      title: "Machine Learning Models",
      description: "High-performing ML models with real-world accuracy.",
      features: [
        "Custom Training",
        "Real-Time Analytics",
        "Adaptive Intelligence",
      ],
    },
    {
      icon: TrendingUp,
      title: "Data Intelligence",
      description: "Turn raw data into powerful business insights.",
      features: ["Trend Forecasting", "BI Dashboards", "Data Mining"],
    },
    {
      icon: Shield,
      title: "Secure AI Infrastructure",
      description: "Enterprise-grade and fully compliant AI systems.",
      features: ["Encryption", "Governance", "Compliance"],
    },
  ];

  const agentDepartments = [
    {
      name: "Finance",
      themeColor: "text-[#2563eb]",
      cardBg: "bg-[#f0f7ff]",
      borderColor: "border-[#dbeafe] hover:border-blue-300",
      iconBoxBg: "bg-[#dbeafe] text-[#2563eb]",
      innerIconBg: "bg-blue-50 text-[#2563eb]",
      barColor: "bg-[#2563eb]",
      icon: Database,
      description: "Automate finance workflows and unlock efficiency with AI agents.",
      agentCount: "2 AI Agents",
      agents: [
        {
          icon: FileText,
          title: "Invoice Processing AI",
          description: "Automate finance workflows with precision.",
        },
        {
          icon: Database,
          title: "Data Processing AI",
          description: "Extract & analyze data instantly.",
        },
      ],
    },
    {
      name: "People",
      themeColor: "text-[#9333ea]",
      cardBg: "bg-[#faf5ff]",
      borderColor: "border-[#f3e8ff] hover:border-purple-300",
      iconBoxBg: "bg-[#f3e8ff] text-[#9333ea]",
      innerIconBg: "bg-purple-50 text-[#9333ea]",
      barColor: "bg-[#9333ea]",
      icon: Users,
      description: "Streamline HR operations and build stronger teams with AI.",
      agentCount: "2 AI Agents",
      agents: [
        {
          icon: UserCheck,
          title: "HR Onboarding AI",
          description: "Auto-onboard employees flawlessly.",
        },
        {
          icon: Users,
          title: "Recruitment AI Assistant",
          description: "Screen candidates 3x faster.",
        },
      ],
    },
    {
      name: "Operations",
      themeColor: "text-[#16a34a]",
      cardBg: "bg-[#f0fdf4]",
      borderColor: "border-[#dcfce7] hover:border-green-300",
      iconBoxBg: "bg-[#dcfce7] text-[#16a34a]",
      innerIconBg: "bg-green-50 text-[#16a34a]",
      barColor: "bg-[#16a34a]",
      icon: Settings,
      description: "Automate, monitor, and ensure compliance with intelligent agents.",
      agentCount: "3 AI Agents",
      agents: [
        {
          icon: Zap,
          title: "Workflow Automation AI",
          description: "Automate repetitive tasks effortlessly.",
        },
        {
          icon: BarChart,
          title: "Monitoring Agents",
          description: "Real-time system & performance insights.",
        },
        {
          icon: Shield,
          title: "Compliance AI Agent",
          description: "Monitor compliance automatically.",
        },
      ],
    },
    {
      name: "Growth",
      themeColor: "text-[#ea580c]",
      cardBg: "bg-[#fff7ed]",
      borderColor: "border-[#ffedd5] hover:border-orange-300",
      iconBoxBg: "bg-[#ffedd5] text-[#ea580c]",
      innerIconBg: "bg-orange-50 text-[#ea580c]",
      barColor: "bg-[#ea580c]",
      icon: TrendingUp,
      description: "Drive engagement, conversions and revenue with AI agents.",
      agentCount: "2 AI Agents",
      agents: [
        {
          icon: MessageSquare,
          title: "Marketing Automation AI",
          description: "Automate campaigns end-to-end.",
        },
        {
          icon: TrendingUp,
          title: "Sales Assistant AI",
          description: "Boost sales conversions with AI.",
        },
      ],
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Consultation",
      description: "Understand your needs and define AI solution scope",
      icon: MessageSquare,
    },
    {
      number: 2,
      title: "Design",
      description: "Create custom AI architecture and workflow design",
      icon: Target,
    },
    {
      number: 3,
      title: "Development",
      description: "Build and train AI models with your data",
      icon: Code,
    },
    {
      number: 4,
      title: "Deployment",
      description: "Launch AI agents in production environment",
      icon: Rocket,
    },
  ];

  const techTabs = ["AI Frameworks", "Development Tools", "Cloud & Deployment"];

  const techStackData = {
    "AI Frameworks": [
      { name: "TensorFlow", icon: Cpu },
      { name: "PyTorch", icon: Brain },
      { name: "Scikit-learn", icon: Activity },
      { name: "Hugging Face", icon: Sparkles },
    ],
    "Development Tools": [
      { name: "Python", icon: Code },
      { name: "Jupyter", icon: FileText },
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: BarChart },
    ],
    "Cloud & Deployment": [
      { name: "Docker", icon: Box },
      { name: "Kubernetes", icon: Settings },
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
    ],
  };

  const stats = [
    { icon: Award, value: "98.5%", label: "AI Accuracy" },
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: Globe, value: "6", label: "Countries Served" },
    { icon: Rocket, value: "7 Days", label: "AI Agent Delivery" },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "AI agents deployed in just 7 days",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "98.5% accuracy across all implementations",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated AI specialists",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Central AI Brain Hero Section - Fit to Screen */}
      <section ref={heroSectionRef} className="relative bg-white min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between pt-14 sm:pt-16 lg:pt-16 pb-4 sm:pb-6 overflow-hidden">
        {/* Soft atmospheric ambient glow - subtle blue and purple */}
        <div className="absolute top-8 left-1/4 w-[450px] h-[450px] bg-blue-100/35 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-12 right-8 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-16 left-8 w-[350px] h-[350px] bg-cyan-50/35 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle tech background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.12) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(30, 64, 175, 0.12) 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-between">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center my-auto py-2 sm:py-4">
            
            {/* LEFT SIDE CONTENT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
              {/* Category Name / Badge */}
              <div ref={heroBadgeRef} className="text-xs sm:text-sm font-extrabold text-[#1e40af] tracking-widest uppercase">
                AI-POWERED ENTERPRISE SOLUTIONS
              </div>

              {/* Main Heading */}
              <h1 ref={heroHeadingRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-black text-gray-900 mt-4 sm:mt-5 tracking-tight leading-[1.1]">
                <span className="hero-heading-line inline-block">Intelligence</span>{" "}
                <br className="hidden sm:inline" />
                <span className="hero-heading-line inline-block">That Drives</span> <br />
                <span className="hero-heading-line inline-block bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
                  Business Excellence
                </span>
              </h1>

              {/* Description */}
              <p ref={heroDescRef} className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 leading-relaxed max-w-lg">
                Delivering future-ready AI systems that automate operations and
                boost performance across 5 countries worldwide.
              </p>

              {/* CTA Buttons */}
              <div ref={heroButtonsRef} className="flex flex-col sm:flex-row items-center gap-3 mt-5 sm:mt-6 w-full sm:w-auto">
                <Link
                  href="/contactus"
                  ref={schedBtnRef}
                  onMouseEnter={() => handleBtnHover("sched", true)}
                  onMouseLeave={() => handleBtnHover("sched", false)}
                  className="w-full sm:w-auto group bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold shadow-md shadow-blue-700/20 hover:shadow-lg hover:shadow-blue-700/30 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight ref={schedArrowRef} className="w-4 h-4 transition-transform" />
                </Link>

                <Link
                  href="/casestudy"
                  ref={caseBtnRef}
                  onMouseEnter={() => handleBtnHover("case", true)}
                  onMouseLeave={() => handleBtnHover("case", false)}
                  className="w-full sm:w-auto bg-white border-2 border-[#1e40af] hover:bg-blue-50/70 text-[#1e40af] px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold shadow-sm transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: CENTRAL AI BRAIN WITH 4 CAPABILITIES */}
            <div ref={heroBrainWrapRef} className="relative w-full flex flex-col items-center justify-center">
              
              {/* Central AI Brain Visual Container with Floating Capabilities */}
              <div ref={heroBrainParallaxRef} className="relative w-full max-w-[560px] aspect-[560/420] flex items-center justify-center" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
                
                {/* SVG Connecting Lines and Orbital Energy Rings */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 560 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="lineGradCyanPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                    <linearGradient id="lineGradOrangeBlue" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="lineGradBlueCyan" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="lineGradIndigoViolet" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Concentric high-tech orbital rings */}
                  <circle cx="280" cy="210" r="145" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.4" />
                  <circle cx="280" cy="210" r="195" stroke="#e9d5ff" strokeWidth="1.5" strokeDasharray="3 9" opacity="0.35" />
                  <circle cx="280" cy="210" r="240" stroke="#93c5fd" strokeWidth="1" opacity="0.2" />

                  {/* Tiny orbit energy particles */}
                  <circle cx="135" cy="210" r="3" fill="#38bdf8" filter="url(#glow)" />
                  <circle cx="425" cy="210" r="3" fill="#c084fc" filter="url(#glow)" />
                  <circle cx="280" cy="25" r="2.5" fill="#60a5fa" filter="url(#glow)" />

                  {/* Connection Line 1: Top-Left Card -> Brain */}
                  <path
                    ref={pathRef1}
                    d="M 160 75 C 200 75, 205 135, 235 160"
                    stroke="url(#lineGradCyanPurple)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <path
                    d="M 160 75 C 200 75, 205 135, 235 160"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.8"
                    strokeLinecap="round"
                  />
                  <circle cx="160" cy="75" r="3.5" fill="#38bdf8" />
                  <circle cx="160" cy="75" r="7" fill="#38bdf8" opacity="0.3" />
                  <circle ref={nodeDotRef1} cx="235" cy="160" r="3.5" fill="#818cf8" />
                  <circle cx="235" cy="160" r="8" fill="#818cf8" opacity="0.35" />

                  {/* Connection Line 2: Top-Right Card -> Brain */}
                  <path
                    ref={pathRef2}
                    d="M 400 75 C 360 75, 355 135, 325 160"
                    stroke="url(#lineGradOrangeBlue)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <path
                    d="M 400 75 C 360 75, 355 135, 325 160"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.8"
                    strokeLinecap="round"
                  />
                  <circle cx="400" cy="75" r="3.5" fill="#f97316" />
                  <circle cx="400" cy="75" r="7" fill="#f97316" opacity="0.3" />
                  <circle ref={nodeDotRef2} cx="325" cy="160" r="3.5" fill="#3b82f6" />
                  <circle cx="325" cy="160" r="8" fill="#3b82f6" opacity="0.35" />

                  {/* Connection Line 3: Bottom-Left Card -> Brain */}
                  <path
                    ref={pathRef3}
                    d="M 160 345 C 200 345, 205 275, 230 250"
                    stroke="url(#lineGradBlueCyan)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <path
                    d="M 160 345 C 200 345, 205 275, 230 250"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.8"
                    strokeLinecap="round"
                  />
                  <circle cx="160" cy="345" r="3.5" fill="#2563eb" />
                  <circle cx="160" cy="345" r="7" fill="#2563eb" opacity="0.3" />
                  <circle ref={nodeDotRef3} cx="230" cy="250" r="3.5" fill="#06b6d4" />
                  <circle cx="230" cy="250" r="8" fill="#06b6d4" opacity="0.35" />

                  {/* Connection Line 4: Bottom-Right Card -> Brain */}
                  <path
                    ref={pathRef4}
                    d="M 400 345 C 360 345, 355 275, 330 250"
                    stroke="url(#lineGradIndigoViolet)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <path
                    d="M 400 345 C 360 345, 355 275, 330 250"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.8"
                    strokeLinecap="round"
                  />
                  <circle cx="400" cy="345" r="3.5" fill="#6366f1" />
                  <circle cx="400" cy="345" r="7" fill="#6366f1" opacity="0.3" />
                  <circle ref={nodeDotRef4} cx="330" cy="250" r="3.5" fill="#a855f7" />
                  <circle cx="330" cy="250" r="8" fill="#a855f7" opacity="0.35" />

                  {/* Traveling Pulse Dots */}
                  <circle ref={pulseDotRef1} cx="160" cy="75" r="4.5" fill="#38bdf8" filter="url(#glow)" opacity="0" />
                  <circle ref={pulseDotRef2} cx="400" cy="75" r="4.5" fill="#f97316" filter="url(#glow)" opacity="0" />
                  <circle ref={pulseDotRef3} cx="160" cy="345" r="4.5" fill="#06b6d4" filter="url(#glow)" opacity="0" />
                  <circle ref={pulseDotRef4} cx="400" cy="345" r="4.5" fill="#a855f7" filter="url(#glow)" opacity="0" />
                </svg>

                {/* Central AI Brain Image & Core Ambient Glow (Idle Floating & Breathing) */}
                <div ref={heroBrainFloatRef} className="relative z-15 flex items-center justify-center">
                  <div className="absolute w-56 h-56 sm:w-68 sm:h-68 bg-gradient-to-tr from-cyan-400/20 via-blue-500/25 to-purple-500/20 rounded-full blur-2xl pointer-events-none" />
                  <Image
                    src="/images/ai_brain_neural_core.jpg"
                    alt="Central AI Neural Brain"
                    width={360}
                    height={360}
                    priority
                    className="relative z-10 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[330px] xl:h-[330px] object-contain drop-shadow-[0_15px_35px_rgba(59,130,246,0.2)] select-none pointer-events-none mix-blend-multiply transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Desktop Floating Capability Cards */}
                <div className="hidden lg:block">
                  {/* Card 1: AI Intelligence (Top Left) */}
                  <div
                    ref={desktopCardRef0}
                    onMouseEnter={() => handleCardHover(0, true)}
                    onMouseLeave={() => handleCardHover(0, false)}
                    className="absolute top-1 left-0 xl:-left-2 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(30,64,175,0.12)] border border-blue-100/90 flex items-center gap-2.5 transition-all duration-300 z-20 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100/80 transition-colors">
                      <Brain ref={cardIconRef0} className="w-5 h-5 text-[#1e40af] transition-transform duration-300" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight leading-none">
                        AI Intelligence
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-none">
                        Smart Automation
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Fast Deployment (Top Right) */}
                  <div
                    ref={desktopCardRef1}
                    onMouseEnter={() => handleCardHover(1, true)}
                    onMouseLeave={() => handleCardHover(1, false)}
                    className="absolute top-1 right-0 xl:-right-2 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(249,115,22,0.12)] border border-orange-100/90 flex items-center gap-2.5 transition-all duration-300 z-20 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100/80 transition-colors">
                      <Rocket ref={cardIconRef1} className="w-5 h-5 text-[#f97316] transition-transform duration-300" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight leading-none">
                        Fast Deployment
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-none">
                        7 Days Delivery
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Enterprise Security (Bottom Left) */}
                  <div
                    ref={desktopCardRef2}
                    onMouseEnter={() => handleCardHover(2, true)}
                    onMouseLeave={() => handleCardHover(2, false)}
                    className="absolute bottom-2 left-0 xl:-left-2 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.12)] border border-blue-100/90 flex items-center gap-2.5 transition-all duration-300 z-20 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100/80 transition-colors">
                      <Shield ref={cardIconRef2} className="w-5 h-5 text-[#2563eb] transition-transform duration-300" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight leading-none">
                        Enterprise Security
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-none">
                        Bank-Grade Protection
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Growth Analytics (Bottom Right) */}
                  <div
                    ref={desktopCardRef3}
                    onMouseEnter={() => handleCardHover(3, true)}
                    onMouseLeave={() => handleCardHover(3, false)}
                    className="absolute bottom-2 right-0 xl:-right-2 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.12)] border border-indigo-100/90 flex items-center gap-2.5 transition-all duration-300 z-20 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100/80 transition-colors">
                      <TrendingUp ref={cardIconRef3} className="w-5 h-5 text-[#4f46e5] transition-transform duration-300" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight leading-none">
                        Growth Analytics
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-none">
                        Real-time Insights
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Mobile / Tablet Capability Cards Grid */}
              <div ref={mobileCardsGridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 lg:hidden w-full max-w-md">
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-blue-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-[#1e40af]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900 leading-none">AI Intelligence</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-none">Smart Automation</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-orange-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-4 h-4 text-[#f97316]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900 leading-none">Fast Deployment</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-none">7 Days Delivery</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-blue-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900 leading-none">Enterprise Security</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-none">Bank-Grade Protection</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-indigo-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-[#4f46e5]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900 leading-none">Growth Analytics</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-none">Real-time Insights</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>







      {/* Proven Results from Global Partners Section - Dark Navy AI Theme */}
      <section
        ref={provenResultsRef}
        id="proven-results"
        className="relative bg-[#08153A] text-white py-14 sm:py-16 lg:py-20 overflow-hidden select-none border-t border-white/5"
      >
        {/* Futuristic AI Network Background Layer */}
        <div
          ref={networkRef}
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden="true"
        >
          {/* AI Ambient Glow Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px]" />

          {/* SVG Tech Grid & Pulse Network */}
          <svg
            className="w-full h-full opacity-25"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="network-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.12)"
                  strokeWidth="1"
                />
                <circle cx="60" cy="0" r="1.5" fill="rgba(56, 189, 248, 0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-grid)" />

            {/* Network Connecting Lines */}
            <line
              x1="10%"
              y1="25%"
              x2="45%"
              y2="45%"
              stroke="rgba(56, 189, 248, 0.18)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="45%"
              y1="45%"
              x2="88%"
              y2="28%"
              stroke="rgba(56, 189, 248, 0.18)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="20%"
              y1="85%"
              x2="72%"
              y2="48%"
              stroke="rgba(56, 189, 248, 0.18)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />

            <circle cx="10%" cy="25%" r="3" fill="#38bdf8" className="animate-pulse" />
            <circle cx="45%" cy="45%" r="3" fill="#ff6600" />
            <circle cx="88%" cy="28%" r="3" fill="#38bdf8" />
            <circle cx="72%" cy="48%" r="3" fill="#06b6d4" className="animate-pulse" />
          </svg>
        </div>

        {/* Section Header (Centered Content Container) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={headingRef} className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm mb-3 backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-[#ff6600] fill-[#ff6600]" />
              <span className="text-xs font-mono font-bold text-[#ff6600] tracking-wider uppercase">
                CLIENT SUCCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
              Proven Results from Global Partners
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#B4C1C7] max-w-xl mx-auto font-medium">
              Real impact delivered to businesses worldwide
            </p>
          </div>
        </div>

        {/* Continuous Dual-Row Horizontal Marquee Tracks — FULL-WIDTH NAVY CANVAS WITH BALANCED BREATHING ROOM & SIDE BLUR */}
        <div
          ref={marqueeContainerRef}
          className="relative w-full overflow-hidden py-2 select-none touch-pan-y flex flex-col gap-4 sm:gap-5 z-10"
          style={{
            paddingLeft: "clamp(16px, 5.5vw, 100px)",
            paddingRight: "clamp(16px, 5.5vw, 100px)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0px, rgba(0,0,0,0.95) 30px, black 60px, black calc(100% - 60px), rgba(0,0,0,0.95) calc(100% - 30px), rgba(0,0,0,0.85) 100%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0px, rgba(0,0,0,0.95) 30px, black 60px, black calc(100% - 60px), rgba(0,0,0,0.95) calc(100% - 30px), rgba(0,0,0,0.85) 100%)",
          }}
        >
          {/* Left Side Navy Blur Overlay */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 lg:w-32 z-20 pointer-events-none bg-gradient-to-r from-[#08153A] via-[#08153A]/80 to-transparent backdrop-blur-[6px]" />

          {/* Right Side Navy Blur Overlay */}
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 lg:w-32 z-20 pointer-events-none bg-gradient-to-l from-[#08153A] via-[#08153A]/80 to-transparent backdrop-blur-[6px]" />

          {/* Row 1: LEFT -> RIGHT (Independent Pause on Hover) */}
          <div
            className="w-full overflow-hidden py-1"
            onMouseEnter={handlePauseRow1}
            onMouseLeave={handleResumeRow1}
            onFocusCapture={handlePauseRow1}
            onBlurCapture={handleResumeRow1}
          >
            <div
              ref={marqueeTrackRef1}
              className="flex gap-5 sm:gap-6 w-max flex-nowrap items-stretch will-change-transform"
            >
              {[
                ...testimonials,
                ...testimonials,
                ...testimonials,
                ...testimonials,
              ].map((testimonial, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="w-[290px] sm:w-[340px] lg:w-[380px] flex-shrink-0"
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: RIGHT -> LEFT (Independent Pause on Hover) */}
          <div
            className="w-full overflow-hidden py-1"
            onMouseEnter={handlePauseRow2}
            onMouseLeave={handleResumeRow2}
            onFocusCapture={handlePauseRow2}
            onBlurCapture={handleResumeRow2}
          >
            <div
              ref={marqueeTrackRef2}
              className="flex gap-5 sm:gap-6 w-max flex-nowrap items-stretch will-change-transform"
            >
              {[
                ...testimonials.slice().reverse(),
                ...testimonials.slice().reverse(),
                ...testimonials.slice().reverse(),
                ...testimonials.slice().reverse(),
              ].map((testimonial, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="w-[290px] sm:w-[340px] lg:w-[380px] flex-shrink-0"
                  ref={(el) => {
                    cardsRef.current[12 + idx] = el;
                  }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Banner (Centered Content Container) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={statsRef}
            className="mt-10 sm:mt-12 bg-gradient-to-r from-[#08153A] via-[#0e2050] to-[#08153A] border border-white/10 rounded-2xl p-6 sm:p-10 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mb-5 flex-wrap">
                <div className="flex flex-col items-center">
                  <div ref={statNumRef1} className="text-3xl sm:text-4xl font-black text-white">4.9/5</div>
                  <div ref={statLabelRef1} className="text-xs sm:text-sm text-[#B4C1C7] font-medium mt-1">
                    Average Rating
                  </div>
                </div>
                <div className="border-l border-white/15 hidden sm:block h-12 my-auto" />
                <div className="flex flex-col items-center">
                  <div ref={statNumRef2} className="text-3xl sm:text-4xl font-black text-white">35+</div>
                  <div ref={statLabelRef2} className="text-xs sm:text-sm text-[#B4C1C7] font-medium mt-1">
                    Trusted Partners
                  </div>
                </div>
                <div className="border-l border-white/15 hidden sm:block h-12 my-auto" />
                <div className="flex flex-col items-center">
                  <div ref={statNumRef3} className="text-3xl sm:text-4xl font-black text-white">98%</div>
                  <div ref={statLabelRef3} className="text-xs sm:text-sm text-[#B4C1C7] font-medium mt-1">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-[#B4C1C7] max-w-2xl mx-auto font-medium leading-relaxed">
                Join the world's leading enterprises who've transformed their
                operations with our AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Capabilities Section - 3D Layered Pyramid Reference Redesign */}
      <section className="relative bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] py-18 sm:py-22 lg:py-28 overflow-hidden border-t border-gray-100">
        {/* Extremely subtle ambient lighting and glow */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-100/25 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main 3-Column Grid: Left Content (30%), Center 3D Pyramid (35%), Right Pyramid Canvas (45%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* 1. TOP / LEFT CONTENT */}
            <div className="lg:col-span-3 flex flex-col items-start text-left pr-0 lg:pr-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-sm mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
                <span className="text-xs font-bold text-[#1e3a8a] tracking-wider uppercase">
                  COMPREHENSIVE CAPABILITIES
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-4">
                Comprehensive <br />
                <span className="text-[#2563eb]">AI Capabilities</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm mb-7">
                Enterprise-ready AI built for performance and reliability.
              </p>

              {/* 3 Supporting Points with Clean Line Icons */}
              <div className="space-y-4 sm:space-y-5 mb-8 w-full max-w-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center flex-shrink-0 text-[#2563eb] shadow-sm">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">Smarter Operations</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Automate and streamline workflows</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center flex-shrink-0 text-[#2563eb] shadow-sm">
                    <BarChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">Higher Efficiency</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Turn data into actionable insights</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center flex-shrink-0 text-[#2563eb] shadow-sm">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">Trusted & Secure</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Built with enterprise-grade security</p>
                  </div>
                </div>
              </div>

              {/* Existing CTA */}
              <Link
                href="/contactus"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-white bg-[#1e40af] hover:bg-[#1e3a8a] shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 2. CENTER: CONTENT CARD (Justify-Center, auto-loops through 4 cards) */}
            <div className="lg:col-span-4 flex items-center justify-center order-3 lg:order-2 w-full min-h-[300px]">
              {hoveredCard !== null && (() => {
                const popupData = [
                  {
                    number: "01",
                    title: "Intelligent Automation",
                    description: "AI-powered automation to modernize and scale operations.",
                    features: ["Smart Workflows", "Predictive Insights", "Efficiency Boost"],
                    numColor: "#2563eb",
                    checkColor: "#2563eb",
                  },
                  {
                    number: "02",
                    title: "Machine Learning Models",
                    description: "Tailored algorithms delivering accurate, real-time predictions.",
                    features: ["Custom Training", "Real-Time Analytics", "Adaptive Intelligence"],
                    numColor: "#8b5cf6",
                    checkColor: "#8b5cf6",
                  },
                  {
                    number: "03",
                    title: "Data Intelligence",
                    description: "Transform raw enterprise data into actionable strategic insights.",
                    features: ["Trend Forecasting", "BI Dashboards", "Data Mining"],
                    numColor: "#3b82f6",
                    checkColor: "#3b82f6",
                  },
                  {
                    number: "04",
                    title: "Secure AI Infrastructure",
                    description: "Enterprise-grade foundation with end-to-end data protection.",
                    features: ["Enterprise Encryption", "Governance & Control", "Compliance Standards"],
                    numColor: "#0f172a",
                    checkColor: "#334155",
                  },
                ];

                const pointerTops = ["32px", "82px", "140px", "195px"];
                const p = popupData[hoveredCard];

                return (
                  <div
                    key={hoveredCard}
                    onMouseEnter={() => setIsCapabilityPaused(true)}
                    onMouseLeave={() => setIsCapabilityPaused(false)}
                    className="relative w-full max-w-[340px] xl:max-w-[360px] rounded-3xl p-6 sm:p-7 bg-white border border-gray-100"
                    style={{
                      boxShadow: "0 20px 50px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                      animation: "popupFadeIn 0.25s ease-out both",
                    }}
                  >
                    {/* Speech bubble pointer arrow on the right pointing to pyramid on the right */}
                    <div
                      className="hidden lg:block absolute -right-[9px] w-4.5 h-4.5 bg-white border-t border-r border-gray-100 rotate-45 transition-all duration-300 ease-out z-10"
                      style={{ top: pointerTops[hoveredCard] }}
                    />

                    {/* Header row with Number, Divider, Title, and Indicator Pills */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-2xl sm:text-3xl font-black leading-none tracking-tight"
                          style={{ color: p.numColor }}
                        >
                          {p.number}
                        </span>
                        <div className="w-[1.5px] h-6 bg-gray-200" />
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                          {p.title}
                        </h3>
                      </div>
                      
                      {/* 4 Loop Indicator Pills */}
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-full border border-gray-100">
                        {[0, 1, 2, 3].map((idx) => (
                          <button
                            key={idx}
                            onClick={() => setHoveredCard(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              hoveredCard === idx
                                ? "w-4"
                                : "w-1.5 bg-gray-300 hover:bg-gray-400"
                            }`}
                            style={{
                              backgroundColor: hoveredCard === idx ? p.numColor : undefined,
                            }}
                            aria-label={`Go to card ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed mt-2 mb-4 font-normal">
                      {p.description}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-100 mb-4" />

                    {/* Feature Bullet List */}
                    <ul className="space-y-3">
                      {p.features.map((feat, fi) => (
                        <li key={fi} className="flex items-center gap-3 text-xs sm:text-[13px] text-gray-700 font-semibold">
                          <CheckCircle
                            className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0"
                            style={{ color: p.checkColor }}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>

            {/* 3. RIGHT: 3D LAYERED INTERACTIVE PYRAMID (Expanded 5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end order-2 lg:order-3 w-full">
              <PyramidCanvas
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                setIsCapabilityPaused={setIsCapabilityPaused}
              />
            </div>

          </div>

          {/* Popup animation keyframe */}
          <style>{`
            @keyframes popupFadeIn {
              from { opacity: 0; transform: translateY(6px) scale(0.97); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>

        </div>
      </section>

      {/* Process Section - 3D Stepped Staircase Podium */}
      <section ref={processSectionRef} className="bg-[#08153A] py-16 sm:py-20 lg:py-24 relative overflow-hidden select-none border-t border-white/5">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_35%,rgba(20,55,135,0.45),transparent_75%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Section Header */}
          <div ref={processHeadingRef} className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 rounded-full bg-[#091b42]/90 border border-blue-500/40 text-blue-300 backdrop-blur-md shadow-[0_0_15px_rgba(30,64,175,0.3)]">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-[#f97316] flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#f97316]" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-blue-100 uppercase">
                OUR PROCESS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 tracking-tight">
              From Concept to <span className="bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#0284c7] bg-clip-text text-transparent">Deployment</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300/80 mt-1.5 font-medium max-w-xl mx-auto">
              Streamlined AI implementation in 4 simple steps
            </p>
          </div>

          {/* 3D Stepped Staircase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-end pt-5 pb-1 relative z-10">
            {[
              {
                number: 1,
                title: "Consultation",
                description: "Understand your needs and define AI solution scope",
                icon: MessageSquare,
                badgeGradient: "from-[#38bdf8] via-[#2563eb] to-[#1d4ed8]",
                badgeGlow:
                  "shadow-[0_0_20px_rgba(56,189,248,0.9),0_0_35px_rgba(37,99,235,0.5)]",
                badgeBorder: "border-sky-300/60",
                pedestalHeight: "h-6 sm:h-8 lg:h-[20px]",
              },
              {
                number: 2,
                title: "Design",
                description: "Create custom AI architecture and workflow design",
                icon: Target,
                badgeGradient: "from-[#c084fc] via-[#9333ea] to-[#6b21a8]",
                badgeGlow:
                  "shadow-[0_0_20px_rgba(192,132,252,0.9),0_0_35px_rgba(147,51,234,0.5)]",
                badgeBorder: "border-purple-300/60",
                pedestalHeight: "h-6 sm:h-8 lg:h-[48px]",
              },
              {
                number: 3,
                title: "Development",
                description: "Build and train AI models with your data",
                icon: Code,
                badgeGradient: "from-[#60a5fa] via-[#0284c7] to-[#0369a1]",
                badgeGlow:
                  "shadow-[0_0_20px_rgba(96,165,250,0.9),0_0_35px_rgba(2,132,199,0.5)]",
                badgeBorder: "border-cyan-300/60",
                pedestalHeight: "h-6 sm:h-8 lg:h-[76px]",
              },
              {
                number: 4,
                title: "Deployment",
                description: "Launch AI agents in production environment",
                icon: Rocket,
                badgeGradient: "from-[#fbbf24] via-[#f97316] to-[#c2410c]",
                badgeGlow:
                  "shadow-[0_0_20px_rgba(251,191,36,0.9),0_0_35px_rgba(249,115,22,0.5)]",
                badgeBorder: "border-amber-300/60",
                pedestalHeight: "h-6 sm:h-8 lg:h-[104px]",
              },
            ].map((step, idx) => {
              const Icon = step.icon;

              return (
                <div
                  key={idx}
                  className="flex flex-col items-stretch group cursor-pointer relative"
                  onMouseEnter={() => handleProcessCardHover(idx, true)}
                  onMouseLeave={() => handleProcessCardHover(idx, false)}
                >
                  {/* Card Section */}
                  <div className="relative pt-4">
                    {/* Floating Glowing Number Badge (overlapping top edge) */}
                    <div
                      ref={(el) => (processBadgeRefs.current[idx] = el)}
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${step.badgeGradient} ${step.badgeGlow} border ${step.badgeBorder} flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      {step.number}
                    </div>

                    {/* 3D Top Shelf with glowing blue edge */}
                    <div className="absolute top-1 inset-x-2 h-6 rounded-t-xl bg-gradient-to-b from-[#143575] to-[#091b40] border-t-2 border-[#38bdf8] shadow-[0_-2px_12px_rgba(56,189,248,0.6)] z-0 pointer-events-none" />

                    {/* Main Dark Navy Card Slab */}
                    <div
                      ref={(el) => (processCardRefs.current[idx] = el)}
                      className="relative z-20 rounded-2xl bg-gradient-to-b from-[#091838] via-[#05112a] to-[#040c20] border border-blue-500/40 p-4 pt-6 pb-5 text-center shadow-[0_15px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400/80 group-hover:shadow-[0_15px_40px_rgba(14,165,233,0.25)] h-[180px] flex flex-col justify-center"
                    >
                      {/* Orange Icon */}
                      <div className="mb-2 flex justify-center">
                        <div ref={(el) => (processIconRefs.current[idx] = el)}>
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#f97316] stroke-[2.2] transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-[11px] sm:text-xs text-slate-300/85 leading-relaxed max-w-[190px] mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* 3D Pedestal Step beneath each card */}
                  <div className="relative w-full z-0 mt-[-2px]">
                    {/* Cyan Illuminated Rim */}
                    <div className="h-1.5 w-full bg-[#0d2a6a] border-t-2 border-[#00d2ff] shadow-[0_0_12px_rgba(0,210,255,0.7)]" />
                    {/* Front 3D Face */}
                    <div
                      className={`w-full bg-gradient-to-b from-[#08204e] via-[#051536] to-[#08153A] border-x border-b border-blue-900/50 shadow-inner ${step.pedestalHeight}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Agents Section - 4-Column Department Redesign */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Subtle background ambient accent */}
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle decorative dot pattern in bottom right corner */}
        <div className="absolute -bottom-4 right-8 opacity-25 pointer-events-none hidden lg:grid grid-cols-6 gap-2.5">
          {[...Array(18)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <HeroBadge icon={Cpu} text="HUMAN-LIKE AI AGENTS" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-[#1f2937] tracking-tight">
            Build Your AI Agent in{" "}
            <span className="text-[#2563eb]">7 Days</span>
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mt-4 mb-12 sm:mb-14 max-w-2xl mx-auto">
            Deploy intelligent automation agents that work 24/7 to transform
            your operations
          </p>

          {/* 4-Column Department Layout (Desktop: 4 cols, Tablet: 2 cols, Mobile: 1 col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {agentDepartments.map((dept, dIdx) => {
              const DeptIcon = dept.icon;
              return (
                <div
                  key={dIdx}
                  className={`group relative ${dept.cardBg} border ${dept.borderColor} rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    {/* Department Header */}
                    <div className="flex items-start gap-3.5 mb-5 sm:mb-6">
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ${dept.iconBoxBg}`}>
                        <DeptIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${dept.themeColor} leading-tight`}>
                          {dept.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 mt-1 leading-relaxed">
                          {dept.description}
                        </p>
                      </div>
                    </div>

                    {/* Agent Items - Clean White Inner Cards */}
                    <div className="space-y-3">
                      {dept.agents.map((agent, aIdx) => {
                        const AgentIcon = agent.icon;
                        return (
                          <div
                            key={aIdx}
                            className="group/agent bg-white border border-gray-100 hover:border-gray-200/90 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-sm transition-all duration-200 cursor-pointer"
                          >
                            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${dept.innerIconBg}`}>
                              <AgentIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="flex-1 min-w-0 pr-1">
                              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug group-hover/agent:text-slate-950">
                                {agent.title}
                              </h4>
                              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug line-clamp-2">
                                {agent.description}
                              </p>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover/agent:text-gray-700 group-hover/agent:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Line & Agent Count */}
                  <div className="mt-6 pt-3 flex items-center gap-2.5">
                    <span className={`w-7 h-1 rounded-full ${dept.barColor}`} />
                    <span className="text-xs font-semibold text-gray-500 tracking-wide">
                      {dept.agentCount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered CTA */}
          <div className="text-center mt-12 sm:mt-16 flex flex-col items-center">
            <Link
              href="/contactus"
              className="group bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all inline-flex items-center gap-2.5 sm:gap-3"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Get a Free Demo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs sm:text-sm text-gray-500 font-medium text-center mt-4">
              No commitment &nbsp;•&nbsp; See it in action &nbsp;•&nbsp; Built for your business
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Nexcore Deep Navy Theme (#08153A) */}
      <section
        ref={techSectionRef}
        className="relative bg-[#08153A] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden select-none border-t border-white/5 text-white"
      >
        {/* Subtle Tech Network Background Grid & Radial Atmosphere */}
        <div
          ref={techBgRef}
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden="true"
        >
          {/* Soft Cyan/Blue Atmospheric Glow Orbs */}
          <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px]" />

          {/* Subtle Navy Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(56, 189, 248, 0.2) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Minimal Ecosystem Network SVG */}
          <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <line x1="15%" y1="30%" x2="40%" y2="50%" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="60%" y1="50%" x2="85%" y2="30%" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="15%" cy="30%" r="2" fill="#38bdf8" className="animate-pulse" />
            <circle cx="85%" cy="30%" r="2" fill="#38bdf8" className="animate-pulse" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header & Subtitle */}
          <div ref={techHeaderRef} className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm mb-4 backdrop-blur-md">
              <Layers className="w-3.5 h-3.5 text-[#ff6600]" />
              <span className="text-xs font-mono font-bold text-[#ff6600] tracking-wider uppercase">
                INDUSTRY-LEADING TECHNOLOGY
              </span>
            </div>
            <h2 className="tech-heading-text text-3xl sm:text-4xl md:text-5xl font-black text-center text-white tracking-tight mb-3">
              Cutting-Edge Tech Stack
            </h2>
            <p className="text-center text-sm sm:text-base md:text-lg text-[#B4C1C7] max-w-2xl mx-auto font-medium">
              Powered by the most advanced AI frameworks and tools in the industry
            </p>
          </div>

          {/* Category Tabs */}
          <div
            ref={techTabsRef}
            className="flex justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12 flex-wrap"
          >
            {techTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 focus:outline-none ${
                  activeTab === idx
                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-[#091838] text-slate-300 border border-blue-500/20 hover:border-blue-400/60 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div
            ref={techGridRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 min-h-[160px]"
          >
            {techStackData[techTabs[activeTab]].map((tech, i) => (
              <TechStackCard
                key={`${activeTab}-${tech.name}`}
                name={tech.name}
                icon={tech.icon}
                cardRef={(el) => (techCardRefs.current[i] = el)}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div ref={techCtaRef} className="text-center mt-12 sm:mt-14">
            <Link
              href="/contactus"
              className="group bg-[#f97316] hover:bg-[#ea580c] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2.5 sm:gap-3"
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Explore Our Technology</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="relative bg-[#1e3a8a] p-10 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl text-center text-white shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-300/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8 sm:mb-10">
              Partner with Nexcore Alliance LLP to accelerate innovation and
              unlock AI-powered growth.
            </p>
            <Link
              href="/contactus"
              className="group bg-[#f97316] hover:bg-[#ea580c] text-white px-10 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 sm:gap-3"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
