export const PARTICLE_COUNT = 5000;

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// Helper to get points on border or volume of a 3D box
function getBoxPoint(
  xMin: number, xMax: number,
  yMin: number, yMax: number,
  zMin: number, zMax: number,
  borderProb = 0.6
) {
  if (Math.random() < borderProb) {
    const face = Math.floor(Math.random() * 3);
    const side = Math.random() > 0.5 ? 1 : 0;
    let x = randomInRange(xMin, xMax);
    let y = randomInRange(yMin, yMax);
    let z = randomInRange(zMin, zMax);
    if (face === 0) x = side ? xMax : xMin;
    else if (face === 1) y = side ? yMax : yMin;
    else z = side ? zMax : zMin;
    return [x, y, z];
  }
  return [randomInRange(xMin, xMax), randomInRange(yMin, yMax), randomInRange(zMin, zMax)];
}

// 0. Idle (Sphere)
export function getIdleShape(): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * 4.0;
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

// 1. ERP & Odoo (3D Cube)
export function getCubeShape(): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const [x, y, z] = getBoxPoint(-1.5, 1.5, -1.5, 1.5, -1.5, 1.5, 0.7);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

// 2. AI & Agentic Systems — Premium Cyber AI Neural Brain (Smooth Curvature, Dense Circuit Gyri, Glowing Synapses & Quantum AI Core)
export function getBrainShape(): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  let pIndex = 0;

  // Ultra-crisp laser stroke placement
  const push = (x: number, y: number, z = 0) => {
    if (pIndex < PARTICLE_COUNT) {
      positions[pIndex * 3]     = x + (Math.random() - 0.5) * 0.010;
      positions[pIndex * 3 + 1] = y + (Math.random() - 0.5) * 0.010;
      positions[pIndex * 3 + 2] = z + (Math.random() - 0.5) * 0.025;
      pIndex++;
    }
  };

  const line = (x1: number, y1: number, x2: number, y2: number, n: number, z = 0) => {
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0.5 : i / (n - 1);
      push(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, z);
    }
  };

  const boldLine = (x1: number, y1: number, x2: number, y2: number, n: number, z = 0) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = (-dy / len) * 0.014;
    const ny = (dx / len) * 0.014;
    line(x1 + nx, y1 + ny, x2 + nx, y2 + ny, Math.floor(n / 2), z);
    line(x1 - nx, y1 - ny, x2 - nx, y2 - ny, Math.floor(n / 2), z);
  };

  const circle = (cx: number, cy: number, r: number, n: number, z = 0) => {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      push(cx + r * Math.cos(a), cy + r * Math.sin(a), z);
    }
  };

  // Spline/Polyline smoother
  const drawSpline = (pts: { x: number; y: number }[], nTotal: number, bold = false) => {
    const segments = pts.length - 1;
    const nPerSeg = Math.max(4, Math.floor(nTotal / segments));
    for (let i = 0; i < segments; i++) {
      const p1 = pts[i];
      const p2 = pts[i + 1];
      if (bold) boldLine(p1.x, p1.y, p2.x, p2.y, nPerSeg);
      else line(p1.x, p1.y, p2.x, p2.y, nPerSeg);
    }
  };

  // ─── 1. SMOOTH HIGH-DEFINITION ANATOMICAL BRAIN SILHOUETTE ───────────────
  const brainPerimeter = [
    { x: -1.46, y:  0.18 }, // Frontal pole anterior
    { x: -1.50, y:  0.48 }, // Brow curve
    { x: -1.42, y:  0.82 }, // Prefrontal upper
    { x: -1.22, y:  1.12 }, // Superior frontal
    { x: -0.92, y:  1.34 }, // Precentral coronal arch
    { x: -0.52, y:  1.48 }, // Coronal apex
    { x:  0.00, y:  1.54 }, // Vertex of brain (top)
    { x:  0.52, y:  1.48 }, // Superior parietal
    { x:  0.95, y:  1.32 }, // Parietal slope
    { x:  1.30, y:  1.02 }, // Parieto-occipital arch
    { x:  1.52, y:  0.65 }, // Occipital upper curve
    { x:  1.60, y:  0.25 }, // Occipital posterior pole
    { x:  1.48, y: -0.15 }, // Inferior occipital notch
    { x:  1.38, y: -0.42 }, // Cerebellum superior groove
    { x:  1.30, y: -0.72 }, // Cerebellum posterior curve
    { x:  1.02, y: -0.96 }, // Cerebellum inferior base
    { x:  0.65, y: -0.92 }, // Cerebellum-stem junction
    { x:  0.45, y: -1.08 }, // Brainstem posterior
    { x:  0.36, y: -1.48 }, // Medulla right
    { x:  0.06, y: -1.48 }, // Medulla left
    { x:  0.14, y: -1.02 }, // Pons anterior curve
    { x:  0.10, y: -0.75 }, // Midbrain junction
    { x: -0.22, y: -0.62 }, // Temporal notch
    { x: -0.65, y: -0.58 }, // Inferior temporal gyrus
    { x: -1.05, y: -0.46 }, // Temporal anterior pole
    { x: -0.92, y: -0.18 }, // Sylvian notch
    { x: -1.24, y: -0.06 }, // Frontal base
    { x: -1.46, y:  0.18 }, // Close perimeter loop
  ];

  drawSpline(brainPerimeter, 700, true);

  // ─── 2. ORGANIC CORTICAL GYRI & NEURAL CIRCUIT CHANNELS ──────────────────
  // Deep Sylvian / Lateral Fissure (Separating Temporal from Cerebral Cortex)
  const sylvianCurve = [
    { x: -0.92, y: -0.18 },
    { x: -0.55, y:  0.02 },
    { x:  0.00, y:  0.08 },
    { x:  0.55, y:  0.06 },
    { x:  1.05, y:  0.22 },
  ];
  drawSpline(sylvianCurve, 120, true);

  // Central Sulcus of Rolando (Top Apex down to AI Core)
  drawSpline([
    { x:  0.00, y:  1.54 },
    { x: -0.04, y:  1.32 },
    { x: -0.02, y:  1.10 },
  ], 70, true);

  // Frontal Lobe Multi-Lane Cyber Gyri (Flowing neural folds)
  drawSpline([
    { x: -1.42, y:  0.82 },
    { x: -1.05, y:  0.88 },
    { x: -0.65, y:  1.10 },
  ], 80);
  drawSpline([
    { x: -1.50, y:  0.48 },
    { x: -1.15, y:  0.52 },
    { x: -0.62, y:  0.72 },
  ], 80);
  drawSpline([
    { x: -1.24, y: -0.06 },
    { x: -0.95, y:  0.18 },
    { x: -0.58, y:  0.35 },
  ], 70);

  // Parietal & Occipital Cyber Gyri
  drawSpline([
    { x:  0.52, y:  1.48 },
    { x:  0.55, y:  1.22 },
    { x:  0.50, y:  1.08 },
  ], 60);
  drawSpline([
    { x:  0.95, y:  1.32 },
    { x:  0.82, y:  0.95 },
    { x:  0.54, y:  0.72 },
  ], 80);
  drawSpline([
    { x:  1.30, y:  1.02 },
    { x:  1.05, y:  0.65 },
    { x:  0.56, y:  0.42 },
  ], 80);
  drawSpline([
    { x:  1.60, y:  0.25 },
    { x:  1.28, y:  0.28 },
    { x:  1.05, y:  0.22 },
  ], 60);

  // Temporal Lobe Dual Data Tracks
  drawSpline([
    { x: -1.05, y: -0.46 },
    { x: -0.35, y: -0.38 },
    { x:  0.35, y: -0.35 },
    { x:  0.75, y: -0.30 },
  ], 110);
  drawSpline([
    { x: -0.85, y: -0.25 },
    { x: -0.20, y: -0.18 },
    { x:  0.45, y: -0.15 },
  ], 80);

  // Cerebellar Layered Folia Ripples (4 dense horizontal micro-laser lines)
  line(0.65, -0.58, 1.34, -0.48, 38);
  line(0.68, -0.70, 1.28, -0.62, 38);
  line(0.72, -0.82, 1.18, -0.76, 32);
  line(0.80, -0.90, 1.02, -0.88, 24);

  // Brainstem Vertical Neural Bus
  boldLine(0.20, -0.75, 0.20, -1.45, 45);

  // ─── 3. CENTRAL GLOWING "AI" QUANTUM PROCESSOR CORE ─────────────────────
  const chipX = -0.02;
  const chipY = 0.58;
  const chipR = 0.48;

  // Quantum Core Triple Concentric Halo (Clean, uncluttered, glowing border)
  circle(chipX, chipY, chipR, 180);
  circle(chipX, chipY, chipR - 0.02, 130);
  circle(chipX, chipY, chipR + 0.035, 90); // outer energy orbit

  // Big Bold "AI" Typography (Centered, High-Visibility, Double-Traced)
  const aiH = 0.23; // Letter height ±0.23 (total height 0.46)

  // ── 'A'
  const aPeakX = chipX - 0.14;
  const aLeftX = chipX - 0.29;
  const aRightX = chipX + 0.01;
  const aTopY = chipY + aiH;
  const aBotY = chipY - aiH;
  const aBarY = chipY - 0.04;

  boldLine(aLeftX, aBotY, aPeakX, aTopY, 44);  // Left angled leg
  boldLine(aRightX, aBotY, aPeakX, aTopY, 44); // Right angled leg
  boldLine(chipX - 0.24, aBarY, chipX - 0.04, aBarY, 26); // Horizontal crossbar

  // ── 'I'
  const iStemX = chipX + 0.19;
  const iTopY = chipY + aiH;
  const iBotY = chipY - aiH;
  const iSerifW = 0.10;

  boldLine(iStemX, iBotY, iStemX, iTopY, 46); // Center upright stem
  boldLine(iStemX - iSerifW, iTopY, iStemX + iSerifW, iTopY, 26); // Top horizontal bar
  boldLine(iStemX - iSerifW, iBotY, iStemX + iSerifW, iBotY, 26); // Bottom horizontal bar

  // ─── 4. SYNAPTIC CONSTELLATION NODES & DATA FILAMENTS ────────────────────
  const synapseNodes = [
    { x: -1.35, y:  0.82 }, // Prefrontal Hub
    { x: -1.42, y:  0.48 }, // Frontal Hub
    { x: -1.15, y: -0.02 }, // Orbital Frontal
    { x: -0.92, y:  1.28 }, // Motor Apex Hub
    { x:  0.88, y:  1.25 }, // Parietal Hub
    { x:  1.45, y:  0.65 }, // Visual Occipital
    { x:  1.15, y: -0.65 }, // Cerebellar Hub
    { x:  0.20, y: -1.35 }, // Brainstem Output
    { x: -0.65, y: -0.42 }, // Temporal Memory
    { x:  0.45, y: -0.22 }, // Audio/Language Hub
  ];

  // Draw double-ring glowing synapse nodes
  synapseNodes.forEach(sn => {
    circle(sn.x, sn.y, 0.055, 18);
    circle(sn.x, sn.y, 0.025, 10);
    push(sn.x, sn.y);
  });

  // High-Speed Data Bus Filaments from AI Core to Synapse Nodes (strictly outside core halo)
  synapseNodes.forEach(sn => {
    const dx = sn.x - chipX;
    const dy = sn.y - chipY;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const startX = chipX + (dx / dist) * (chipR + 0.045);
    const startY = chipY + (dy / dist) * (chipR + 0.045);
    boldLine(startX, startY, sn.x, sn.y, 30);
  });

  // Inter-Synapse Constellation Mesh Filaments
  const meshLinks: [number, number][] = [
    [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 9], [2, 8], [9, 6]
  ];
  meshLinks.forEach(([i1, i2]) => {
    const s1 = synapseNodes[i1];
    const s2 = synapseNodes[i2];
    line(s1.x, s1.y, s2.x, s2.y, 22);
  });

  // ─── 5. REINFORCE HIGH-DENSITY GLOW STROKES ──────────────────────────────
  while (pIndex < PARTICLE_COUNT) {
    const choice = Math.floor(Math.random() * 5);
    if (choice === 0) {
      // Reinforce outer perimeter
      const idx = Math.floor(Math.random() * (brainPerimeter.length - 1));
      const p1 = brainPerimeter[idx];
      const p2 = brainPerimeter[idx + 1];
      const t = Math.random();
      push(p1.x + (p2.x - p1.x) * t, p1.y + (p2.y - p1.y) * t);
    } else if (choice === 1) {
      // Reinforce AI typography
      if (Math.random() < 0.5) {
        boldLine(iStemX, iBotY, iStemX, iTopY, 14);
      } else {
        boldLine(aLeftX, aBotY, aPeakX, aTopY, 14);
      }
    } else if (choice === 2) {
      // Reinforce quantum core halo
      const a = Math.random() * Math.PI * 2;
      push(chipX + chipR * Math.cos(a), chipY + chipR * Math.sin(a));
    } else if (choice === 3) {
      // Reinforce synapse nodes
      const sn = synapseNodes[Math.floor(Math.random() * synapseNodes.length)];
      const a = Math.random() * Math.PI * 2;
      push(sn.x + 0.05 * Math.cos(a), sn.y + 0.05 * Math.sin(a));
    } else {
      // Reinforce Sylvian fissure
      const idx = Math.floor(Math.random() * (sylvianCurve.length - 1));
      const p1 = sylvianCurve[idx];
      const p2 = sylvianCurve[idx + 1];
      const t = Math.random();
      push(p1.x + (p2.x - p1.x) * t, p1.y + (p2.y - p1.y) * t);
    }
  }

  return positions;
}

export const getAgenticShape = getBrainShape;


// 3. Web & Mobile Apps (Laptop + Phone screens)
export function getDevicesShape(): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const rand = Math.random();
    let pt;
    if (rand < 0.6) {
      pt = getBoxPoint(-2.0, 0.4, -0.5, 1.2, -0.1, 0.1, 0.7);
    } else if (rand < 0.7) {
      pt = getBoxPoint(-1.0, -0.6, -1.2, -0.5, -0.1, 0.1, 0.5);
    } else {
      pt = getBoxPoint(0.8, 1.6, -1.0, 0.8, -0.1, 0.1, 0.7);
    }
    positions[i * 3] = pt[0];
    positions[i * 3 + 1] = pt[1];
    positions[i * 3 + 2] = pt[2];
  }
  return positions;
}

// 4. SEO & Social Media (Bar Chart + Growth Arrow shown in Image 1)
export function getArrowShape(): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const rand = Math.random();
    let x, y, z;
    if (rand < 0.15) {
      // Left bar
      [x, y, z] = getBoxPoint(-1.4, -0.6, -1.8, -0.8, -0.1, 0.1, 0.7);
    } else if (rand < 0.35) {
      // Middle bar
      [x, y, z] = getBoxPoint(-0.4, 0.4, -1.8, -0.2, -0.1, 0.1, 0.7);
    } else if (rand < 0.65) {
      // Right tall bar
      [x, y, z] = getBoxPoint(0.6, 1.4, -1.8, 0.8, -0.1, 0.1, 0.7);
    } else {
      // Growth arrow
      z = randomInRange(-0.1, 0.1);
      const t = Math.random();
      const part = Math.random();
      
      if (part < 0.75) {
        // Arrow shaft
        x = -1.4 + 2.8 * t;
        y = 0.6 + 1.2 * t;
      } else if (part < 0.875) {
        // Arrow head top
        x = 1.0 + 0.4 * t;
        y = 1.85 - 0.05 * t;
      } else {
        // Arrow head bottom
        x = 1.15 + 0.25 * t;
        y = 1.45 + 0.35 * t;
      }
      
      x += randomInRange(-0.015, 0.015);
      y += randomInRange(-0.015, 0.015);
    }
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

// 5. Business & Tech Consulting — Clean minimal consultant + board
export function getConsultingShape(): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  let pIndex = 0;

  // Very tight jitter so strokes stay sharp and readable
  const push = (x: number, y: number, z = 0) => {
    if (pIndex < PARTICLE_COUNT) {
      positions[pIndex * 3]     = x + (Math.random() - 0.5) * 0.018;
      positions[pIndex * 3 + 1] = y + (Math.random() - 0.5) * 0.018;
      positions[pIndex * 3 + 2] = z + (Math.random() - 0.5) * 0.04;
      pIndex++;
    }
  };

  // Helper: draw a crisp line segment with n points
  const line = (x1: number, y1: number, x2: number, y2: number, n: number) => {
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      push(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t);
    }
  };

  // Helper: draw circle rim
  const circle = (cx: number, cy: number, r: number, n: number) => {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      push(cx + r * Math.cos(a), cy + r * Math.sin(a));
    }
  };

  // ─── PERSON (left, centered at x = -1.45) ───────────────────────────────
  const px = -1.45;

  // Head circle
  circle(px, 1.08, 0.18, 90);

  // Neck
  line(px, 0.90, px, 0.80, 12);

  // Torso
  line(px - 0.16, 0.80, px + 0.16, 0.80, 18); // shoulders
  line(px - 0.16, 0.80, px - 0.12, 0.25, 42); // left torso side
  line(px + 0.16, 0.80, px + 0.12, 0.25, 42); // right torso side
  line(px - 0.12, 0.25, px + 0.12, 0.25, 18); // hips

  // Left arm (hanging down)
  line(px - 0.16, 0.78, px - 0.22, 0.50, 30);

  // Right arm pointing toward board
  line(px + 0.16, 0.76, px + 0.65, 0.95, 55);

  // Left leg
  line(px - 0.08, 0.25, px - 0.12, -0.55, 60);
  // Right leg
  line(px + 0.08, 0.25, px + 0.12, -0.55, 60);

  // Feet
  line(px - 0.12, -0.55, px - 0.28, -0.55, 18);
  line(px + 0.12, -0.55, px + 0.28, -0.55, 18);

  // ─── PRESENTATION BOARD (right side) ────────────────────────────────────
  // Board frame: top-left (-0.5, 1.35) to bottom-right (1.55, -0.55)
  const bx1 = -0.50, bx2 = 1.55;
  const by1 = -0.55, by2 = 1.35;
  const bw = bx2 - bx1;
  const bh = by2 - by1;

  // 4 board edges — lots of particles so frame is thick & bright
  line(bx1, by2, bx2, by2, 130); // top
  line(bx1, by1, bx2, by1, 130); // bottom
  line(bx1, by1, bx1, by2, 100); // left
  line(bx2, by1, bx2, by2, 100); // right

  // Board stand pole
  const midX = (bx1 + bx2) / 2;
  line(midX, by1, midX, -1.15, 60);
  // Stand base
  line(midX - 0.40, -1.15, midX + 0.40, -1.15, 55);

  // ─── CHART CONTENT inside board ─────────────────────────────────────────
  // Origin of chart axes: (bx1+0.18, by1+0.15)
  const ox = bx1 + 0.18;
  const oy = by1 + 0.15;
  const cw = bw - 0.36;   // chart width
  const ch = bh - 0.55;   // chart height

  // X axis
  line(ox, oy, ox + cw, oy, 70);
  // Y axis
  line(ox, oy, ox, oy + ch, 70);

  // 3 bar columns (outline-style, crisp rectangles)
  const bars = [
    { bxc: ox + cw * 0.18, bh: ch * 0.38 },
    { bxc: ox + cw * 0.50, bh: ch * 0.62 },
    { bxc: ox + cw * 0.82, bh: ch * 0.88 },
  ];
  const barW = cw * 0.14;

  bars.forEach(({ bxc, bh: barH }) => {
    // 4 edges of each bar
    line(bxc - barW / 2, oy, bxc + barW / 2, oy,         14); // base
    line(bxc - barW / 2, oy, bxc - barW / 2, oy + barH,  28); // left
    line(bxc + barW / 2, oy, bxc + barW / 2, oy + barH,  28); // right
    line(bxc - barW / 2, oy + barH, bxc + barW / 2, oy + barH, 16); // top
  });

  // Trend line (smooth upward curve) — sampled as polyline
  const trendPoints = 8;
  let prevTx = ox, prevTy = oy + ch * 0.10;
  for (let i = 1; i <= trendPoints; i++) {
    const t = i / trendPoints;
    const tx = ox + cw * t;
    const ty = oy + ch * (0.10 + 0.82 * Math.pow(t, 1.2));
    line(prevTx, prevTy, tx, ty, 18);
    prevTx = tx; prevTy = ty;
  }
  // Arrow at tip
  const tipX = ox + cw, tipY = oy + ch * 0.92;
  line(tipX - 0.10, tipY + 0.10, tipX, tipY, 10);
  line(tipX - 0.10, tipY - 0.04, tipX, tipY, 10);

  // ─── fill remaining: scatter along board edges so chart stays clean ────────
  while (pIndex < PARTICLE_COUNT) {
    const edge = Math.floor(Math.random() * 4);
    const t = Math.random();
    if (edge === 0) push(bx1 + t * (bx2 - bx1), by2); // top edge
    else if (edge === 1) push(bx1 + t * (bx2 - bx1), by1); // bottom edge
    else if (edge === 2) push(bx1, by1 + t * (by2 - by1)); // left edge
    else push(bx2, by1 + t * (by2 - by1)); // right edge
  }

  return positions;
}

// 3.5 UI/UX & Product Design: Sleek, Proportional 3D "UI/UX" Typography with Vector Design Handles
export function getUIUXTextShape(): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  let pIndex = 0;

  // Ultra-crisp stroke placement
  const push = (x: number, y: number, z = 0) => {
    if (pIndex < PARTICLE_COUNT) {
      positions[pIndex * 3]     = x + (Math.random() - 0.5) * 0.012;
      positions[pIndex * 3 + 1] = y + (Math.random() - 0.5) * 0.012;
      positions[pIndex * 3 + 2] = z + (Math.random() - 0.5) * 0.03;
      pIndex++;
    }
  };

  const line = (x1: number, y1: number, x2: number, y2: number, n: number, z = 0) => {
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0.5 : i / (n - 1);
      push(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, z);
    }
  };

  const boldLine = (x1: number, y1: number, x2: number, y2: number, n: number, z = 0) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = (-dy / len) * 0.012;
    const ny = (dx / len) * 0.012;
    line(x1 + nx, y1 + ny, x2 + nx, y2 + ny, Math.floor(n / 2), z);
    line(x1 - nx, y1 - ny, x2 - nx, y2 - ny, Math.floor(n / 2), z);
  };

  const arc = (cx: number, cy: number, r: number, a1: number, a2: number, n: number, z = 0) => {
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0.5 : i / (n - 1);
      const a = a1 + (a2 - a1) * t;
      push(cx + r * Math.cos(a), cy + r * Math.sin(a), z);
    }
  };

  const circle = (cx: number, cy: number, r: number, n: number, z = 0) => {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      push(cx + r * Math.cos(a), cy + r * Math.sin(a), z);
    }
  };

  const rect = (cx: number, cy: number, w: number, h: number, n: number) => {
    const hw = w / 2;
    const hh = h / 2;
    const perSide = Math.floor(n / 4);
    line(cx - hw, cy + hh, cx + hw, cy + hh, perSide);
    line(cx + hw, cy + hh, cx + hw, cy - hh, perSide);
    line(cx + hw, cy - hh, cx - hw, cy - hh, perSide);
    line(cx - hw, cy - hh, cx - hw, cy + hh, perSide);
  };

  // ─── TYPOGRAPHY GEOMETRY (Height ±0.75, Total Width ~2.7) ───────────────
  const topY = 0.75;
  const botY = -0.75;
  const uCurveY = -0.40;
  const uR = 0.22;

  // 1. First 'U' (Centered at X = -1.15)
  const u1Left = -1.37;
  const u1Right = -0.93;
  const u1Center = (u1Left + u1Right) / 2;
  boldLine(u1Left, topY, u1Left, uCurveY, 65);
  boldLine(u1Right, topY, u1Right, uCurveY, 65);
  arc(u1Center, uCurveY, uR, Math.PI, 2 * Math.PI, 45);
  arc(u1Center, uCurveY, uR - 0.012, Math.PI, 2 * Math.PI, 35);

  // 2. 'I' (Centered at X = -0.58)
  const iX = -0.58;
  const iSerif = 0.12;
  boldLine(iX, botY, iX, topY, 70);
  boldLine(iX - iSerif, topY, iX + iSerif, topY, 26);
  boldLine(iX - iSerif, botY, iX + iSerif, botY, 26);

  // 3. Forward Slash '/' (From -0.25 to +0.20)
  boldLine(-0.24, botY - 0.08, 0.20, topY + 0.08, 85);

  // 4. Second 'U' (Centered at X = +0.58)
  const u2Left = 0.36;
  const u2Right = 0.80;
  const u2Center = (u2Left + u2Right) / 2;
  boldLine(u2Left, topY, u2Left, uCurveY, 65);
  boldLine(u2Right, topY, u2Right, uCurveY, 65);
  arc(u2Center, uCurveY, uR, Math.PI, 2 * Math.PI, 45);
  arc(u2Center, uCurveY, uR - 0.012, Math.PI, 2 * Math.PI, 35);

  // 5. 'X' (Centered at X = +1.18, Width = 0.44)
  const xLeft = 0.96;
  const xRight = 1.40;
  boldLine(xLeft, topY, xRight, botY, 75);
  boldLine(xLeft, botY, xRight, topY, 75);

  // ─── 6. UI / DESIGN SYSTEM VECTOR ANCHOR NODES & ACCENTS ──────────────────
  // Vector Bounding Box Corners & Bézier control handles
  const designNodes = [
    { x: -1.55, y:  0.95 }, // Top-Left handle
    { x:  1.58, y:  0.95 }, // Top-Right handle
    { x: -1.55, y: -0.95 }, // Bottom-Left handle
    { x:  1.58, y: -0.95 }, // Bottom-Right handle
    { x:  0.0,  y:  0.95 }, // Top-Center snap node
    { x:  0.0,  y: -0.95 }, // Bottom-Center snap node
  ];

  // Subtle UI Frame / Artboard guides (dashed laser frame)
  line(-1.55,  0.95,  1.58,  0.95, 70, -0.05);
  line(-1.55, -0.95,  1.58, -0.95, 70, -0.05);
  line(-1.55, -0.95, -1.55,  0.95, 50, -0.05);
  line( 1.58, -0.95,  1.58,  0.95, 50, -0.05);

  // Draw square vector anchor handles at frame corners
  designNodes.forEach(node => {
    rect(node.x, node.y, 0.08, 0.08, 20);
  });

  // ─── 7. REINFORCE SHAPE STROKES DENSELY ──────────────────────────────────
  while (pIndex < PARTICLE_COUNT) {
    const choice = Math.floor(Math.random() * 6);
    if (choice === 0) {
      // First U
      if (Math.random() < 0.4) line(u1Left, topY, u1Left, uCurveY, 10);
      else if (Math.random() < 0.7) line(u1Right, topY, u1Right, uCurveY, 10);
      else arc(u1Center, uCurveY, uR, Math.PI, 2 * Math.PI, 10);
    } else if (choice === 1) {
      // I
      line(iX, botY, iX, topY, 12);
    } else if (choice === 2) {
      // Slash
      line(-0.24, botY - 0.08, 0.20, topY + 0.08, 12);
    } else if (choice === 3) {
      // Second U
      if (Math.random() < 0.4) line(u2Left, topY, u2Left, uCurveY, 10);
      else if (Math.random() < 0.7) line(u2Right, topY, u2Right, uCurveY, 10);
      else arc(u2Center, uCurveY, uR, Math.PI, 2 * Math.PI, 10);
    } else if (choice === 4) {
      // X
      if (Math.random() < 0.5) line(xLeft, topY, xRight, botY, 10);
      else line(xLeft, botY, xRight, topY, 10);
    } else {
      // Artboard Guides / Anchor Nodes
      const node = designNodes[Math.floor(Math.random() * designNodes.length)];
      rect(node.x, node.y, 0.08, 0.08, 6);
    }
  }

  return positions;
}

// 1.5 ERP & Odoo — Ultra-Crisp ERP Architecture Diagram (High-Visibility Typography & Laser Geometry)
export function getERPDiagramShape(): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  let pIndex = 0;

  // Ultra-tight jitter so every stroke is sharp and crisp
  const push = (x: number, y: number, z = 0) => {
    if (pIndex < PARTICLE_COUNT) {
      positions[pIndex * 3]     = x + (Math.random() - 0.5) * 0.012;
      positions[pIndex * 3 + 1] = y + (Math.random() - 0.5) * 0.012;
      positions[pIndex * 3 + 2] = z + (Math.random() - 0.5) * 0.025;
      pIndex++;
    }
  };

  // Line drawer with thickness
  const line = (x1: number, y1: number, x2: number, y2: number, n: number) => {
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0.5 : i / (n - 1);
      push(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t);
    }
  };

  // Bold double-line
  const boldLine = (x1: number, y1: number, x2: number, y2: number, n: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = (-dy / len) * 0.014;
    const ny = (dx / len) * 0.014;
    line(x1 + nx, y1 + ny, x2 + nx, y2 + ny, Math.floor(n / 2));
    line(x1 - nx, y1 - ny, x2 - nx, y2 - ny, Math.floor(n / 2));
  };

  // Circle drawer
  const circle = (cx: number, cy: number, r: number, n: number) => {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      push(cx + r * Math.cos(a), cy + r * Math.sin(a));
    }
  };

  // Arc drawer
  const arc = (cx: number, cy: number, r: number, a1: number, a2: number, n: number) => {
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0.5 : i / (n - 1);
      const a = a1 + (a2 - a1) * t;
      push(cx + r * Math.cos(a), cy + r * Math.sin(a));
    }
  };

  // ─── GEOMETRY ────────────────────────────────────────────────────────────
  const R_OUTER = 1.75;   // outer node center radius
  const R_CORE  = 0.65;   // central core circle radius (large for big bold ERP name)
  const R_NODE  = 0.32;   // outer module node circle radius

  // 5 node angles (12 o'clock, top-right, bottom-right, bottom-left, top-left)
  const nodeAngles = [
    Math.PI / 2,
    Math.PI / 2 - (2 * Math.PI / 5),
    Math.PI / 2 - (4 * Math.PI / 5),
    Math.PI / 2 - (6 * Math.PI / 5),
    Math.PI / 2 - (8 * Math.PI / 5),
  ];
  const nodes = nodeAngles.map(a => ({ x: R_OUTER * Math.cos(a), y: R_OUTER * Math.sin(a), a }));

  // ─── 1. CENTRAL CORE CIRCLE (Crisp double-line border) ───────────────────
  circle(0, 0, R_CORE, 220);
  circle(0, 0, R_CORE - 0.02, 160);

  // ─── 2. LARGE BOLD "ERP" CENTER TEXT (High-Visibility Typography) ────────
  const hH = 0.24; // Letter height ±0.24 (total height 0.48)

  // ── 'E' (X: -0.42 to -0.20)
  boldLine(-0.40, -hH, -0.40,  hH, 50); // Left upright spine
  boldLine(-0.40,  hH, -0.20,  hH, 30); // Top bar
  boldLine(-0.40, 0.0, -0.23, 0.0, 24); // Middle bar
  boldLine(-0.40, -hH, -0.20, -hH, 30); // Bottom bar

  // ── 'R' (X: -0.11 to +0.13)
  boldLine(-0.10, -hH, -0.10,  hH, 50); // Left upright spine
  boldLine(-0.10,  hH,  0.02,  hH, 22); // Top horizontal bar
  boldLine(-0.10, 0.01, 0.02, 0.01, 22); // Middle horizontal bar
  // Semicircle loop on right side
  arc(0.02, hH / 2, hH / 2, Math.PI / 2, -Math.PI / 2, 32);
  arc(0.02, hH / 2, hH / 2 - 0.014, Math.PI / 2, -Math.PI / 2, 28);
  // Diagonal leg
  boldLine(-0.02, 0.01, 0.12, -hH, 36);

  // ── 'P' (X: +0.22 to +0.44)
  boldLine(0.23, -hH, 0.23,  hH, 50); // Left upright spine
  boldLine(0.23,  hH, 0.34,  hH, 22); // Top horizontal bar
  boldLine(0.23, 0.01, 0.34, 0.01, 22); // Middle horizontal bar
  // Semicircle loop on right side
  arc(0.34, hH / 2, hH / 2, Math.PI / 2, -Math.PI / 2, 32);
  arc(0.34, hH / 2, hH / 2 - 0.014, Math.PI / 2, -Math.PI / 2, 28);

  // ─── 3. FIVE OUTER MODULE NODES + LABELS (FIN, SCM, MFG, HR, CRM) ────────
  const labels = ['FIN', 'SCM', 'MFG', 'HR', 'CRM'];

  nodes.forEach((n, idx) => {
    // Node circle double rim
    circle(n.x, n.y, R_NODE, 120);
    circle(n.x, n.y, R_NODE - 0.02, 80);

    // Large high-contrast module label typography inside node
    const lbl = labels[idx];
    const lx = n.x;
    const ly = n.y;
    const s = 0.095;  // Letter half-height
    const lw = 0.065; // Letter width

    const totalW = lbl.length * (lw + 0.022) - 0.022;
    let cx = lx - totalW / 2 + lw / 2;

    for (const ch of lbl) {
      const tx = cx;
      switch (ch) {
        case 'F':
          boldLine(tx - lw/2, ly - s, tx - lw/2, ly + s, 22);
          boldLine(tx - lw/2, ly + s, tx + lw/2, ly + s, 14);
          boldLine(tx - lw/2, ly,     tx + lw/4, ly,     10);
          break;
        case 'I':
          boldLine(tx, ly - s, tx, ly + s, 22);
          line(tx - lw/3, ly + s, tx + lw/3, ly + s, 8);
          line(tx - lw/3, ly - s, tx + lw/3, ly - s, 8);
          break;
        case 'N':
          boldLine(tx - lw/2, ly - s, tx - lw/2, ly + s, 20);
          boldLine(tx + lw/2, ly - s, tx + lw/2, ly + s, 20);
          boldLine(tx - lw/2, ly + s, tx + lw/2, ly - s, 22);
          break;
        case 'S':
          arc(tx + lw/4, ly + s/2, lw/2.1, Math.PI * 0.1, Math.PI * 1.1, 16);
          arc(tx - lw/4, ly - s/2, lw/2.1, Math.PI * 1.1, Math.PI * 2.1, 16);
          break;
        case 'C':
          arc(tx + lw/6, ly, s * 0.95, Math.PI * 0.28, Math.PI * 1.72, 26);
          break;
        case 'M':
          boldLine(tx - lw/2, ly - s, tx - lw/2, ly + s, 18);
          boldLine(tx + lw/2, ly - s, tx + lw/2, ly + s, 18);
          line(tx - lw/2, ly + s, tx, ly, 12);
          line(tx, ly, tx + lw/2, ly + s, 12);
          break;
        case 'G':
          arc(tx + lw/6, ly, s * 0.95, Math.PI * 0.28, Math.PI * 1.82, 24);
          line(tx, ly - s * 0.1, tx + lw/2, ly - s * 0.1, 8);
          break;
        case 'H':
          boldLine(tx - lw/2, ly - s, tx - lw/2, ly + s, 20);
          boldLine(tx + lw/2, ly - s, tx + lw/2, ly + s, 20);
          boldLine(tx - lw/2, ly, tx + lw/2, ly, 12);
          break;
        case 'R':
          boldLine(tx - lw/2, ly - s, tx - lw/2, ly + s, 22);
          line(tx - lw/2, ly + s, tx + lw/4, ly + s, 10);
          line(tx - lw/2, ly + s * 0.05, tx + lw/4, ly + s * 0.05, 10);
          arc(tx + lw/4, ly + s * 0.52, s * 0.48, Math.PI / 2, -Math.PI / 2, 16);
          boldLine(tx - lw/6, ly + s * 0.05, tx + lw/2, ly - s, 16);
          break;
      }
      cx += lw + 0.022;
    }
  });

  // ─── 4. RADIAL SPOKE DATA STREAMS (Core rim → Node rim) ──────────────────
  nodes.forEach(n => {
    const nodeAngle = Math.atan2(n.y, n.x);
    const x1 = R_CORE * Math.cos(nodeAngle);
    const y1 = R_CORE * Math.sin(nodeAngle);
    const x2 = (R_OUTER - R_NODE) * Math.cos(nodeAngle);
    const y2 = (R_OUTER - R_NODE) * Math.sin(nodeAngle);
    boldLine(x1, y1, x2, y2, 60);
  });

  // ─── 5. CONTINUOUS OUTER ORBITAL RING (Connecting all 5 module nodes) ───
  circle(0, 0, R_OUTER, 380);
  circle(0, 0, R_OUTER + 0.015, 260);

  // ─── 6. REINFORCE STRUCTURAL STROKES (Zero random scatter) ───────────────
  while (pIndex < PARTICLE_COUNT) {
    const choice = Math.floor(Math.random() * 4);
    if (choice === 0) {
      // Reinforce ERP central text
      const letterChoice = Math.floor(Math.random() * 3);
      if (letterChoice === 0) line(-0.40, -hH, -0.40, hH, 8);
      else if (letterChoice === 1) line(-0.10, -hH, -0.10, hH, 8);
      else line(0.23, -hH, 0.23, hH, 8);
    } else if (choice === 1) {
      // Reinforce core rim
      const a = Math.random() * Math.PI * 2;
      push(R_CORE * Math.cos(a), R_CORE * Math.sin(a));
    } else if (choice === 2) {
      // Reinforce outer node rims
      const node = nodes[Math.floor(Math.random() * 5)];
      const a = Math.random() * Math.PI * 2;
      push(node.x + R_NODE * Math.cos(a), node.y + R_NODE * Math.sin(a));
    } else {
      // Reinforce outer perimeter ring
      const a = Math.random() * Math.PI * 2;
      push(R_OUTER * Math.cos(a), R_OUTER * Math.sin(a));
    }
  }

  return positions;
}

// Backward-compatibility alias

export const getPersonShape = getConsultingShape;

// Shape dispatcher
export const getShapeForService = (id: string | null): Float32Array => {
  switch (id) {
    case 'erp-odoo': return getERPDiagramShape();
    case 'ai-agentic': return getBrainShape();
    case 'ui-ux-design': return getUIUXTextShape();
    case 'web-mobile': return getDevicesShape();
    case 'seo-social': return getArrowShape();
    case 'consulting': return getConsultingShape();
    default: return getIdleShape();
  }
};
