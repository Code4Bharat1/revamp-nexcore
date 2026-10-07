"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import CountUp from "../../common/CountUp";
import { FaArrowRight } from "react-icons/fa";

// Import local data
import { values, stats } from "./ValuesData";

// Lazy load the modal component
const ValueModal = dynamic(() => import("./ValueModal"), {
  ssr: false,
});

const ValuesSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const cardsRef = useRef([]);
  const offsetRef = useRef(0);
  const animFrameRef = useRef(null);
  const isHoveredRef = useRef(false);
  const windowWidthRef = useRef(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Synchronize hover ref
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      windowWidthRef.current = window.innerWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ─── PURE CONTINUOUS SCROLL ENGINE (100% OPACITY, ZERO DELAY) ───
  useEffect(() => {
    let lastTime = performance.now();
    const totalUniqueCards = values.length; // 6 cards
    const totalSlots = totalUniqueCards * 4; // 24 slots for gapless infinite stream

    const updateFrame = (now) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const w = windowWidthRef.current;

      // Responsive card spacing & elevated baseline
      let cardWidth = 290;
      let cardGap = 20;
      let curveDip = 18;
      let baseY = -70;

      if (w < 640) {
        cardWidth = 230;
        cardGap = 12;
        curveDip = 12;
        baseY = -50;
      } else if (w < 1024) {
        cardWidth = 265;
        cardGap = 16;
        curveDip = 15;
        baseY = -60;
      }

      const slotStep = cardWidth + cardGap;
      const totalTrackWidth = slotStep * totalSlots;

      // Smooth continuous scroll speed (~90px/s)
      if (!isHoveredRef.current) {
        offsetRef.current = (offsetRef.current + delta * 90) % totalTrackWidth;
      }

      const currentOffset = offsetRef.current;
      const halfViewport = w / 2;

      cardsRef.current.forEach((cardEl, idx) => {
        if (!cardEl) return;

        // Absolute conveyor slot position
        let rawX = (idx * slotStep + currentOffset) % totalTrackWidth;

        // Center conveyor relative to screen center
        let x = rawX - (totalTrackWidth / 2);

        // Continuous seamless wrap-around
        if (x < -halfViewport - slotStep * 1.5) {
          x += totalTrackWidth;
        } else if (x > halfViewport + slotStep * 1.5) {
          x -= totalTrackWidth;
        }

        // Normalized distance d from center
        const d = x / (halfViewport * 0.95);
        const absD = Math.abs(d);

        // 1. Vertical position Y: gentle U-curve
        const y = baseY - (d * d) * curveDip;

        // 2. Tangent tilt
        const rotZ = -d * 3;

        // 3. Subtle scale
        const scale = 1.0 - Math.min(absD * 0.03, 0.05);

        // 4. Layer order (Z-index)
        const zIndex = Math.round((1.3 - Math.min(absD, 1.3)) * 20) + 10;

        // Apply hardware-accelerated transform with 100% full opacity (no opacity delay)
        cardEl.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotZ}deg) scale(${scale})`;
        cardEl.style.opacity = "1";
        cardEl.style.zIndex = `${zIndex}`;
        cardEl.style.visibility = "visible";
      });

      animFrameRef.current = requestAnimationFrame(updateFrame);
    };

    animFrameRef.current = requestAnimationFrame(updateFrame);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // 24 items (4x duplicate of 6 values) for 100% gapless continuous conveyor
  const conveyorCards = [...values, ...values, ...values, ...values];

  return (
    <section
      id="values"
      ref={containerRef}
      className="w-full pt-10 sm:pt-12 md:pt-14 pb-0 bg-[#08153a] text-white relative overflow-hidden select-none border-t border-blue-900/30"
    >
      {/* Background atmospheric glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      {/* Header Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 mb-0">
        <div className="text-center space-y-1 animate-fade-up">
          {/* Eyebrow */}
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Values
          </span>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Discover the Values of{" "}
            <span className="text-orange-600">
              NEXCORE ALLIANCE LLP
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-[14px] max-w-2xl mx-auto leading-relaxed">
            We&apos;re committed to delivering excellence through innovative solutions and unwavering dedication
          </p>
        </div>
      </div>

      {/* ─── FULL-WIDTH SEAMLESS CONVEYOR STAGE (100% SHARP & CONTINUOUS) ─── */}
      <div className="w-full relative overflow-hidden -mt-2 pb-4">
        <div
          ref={stageRef}
          className="relative w-full h-[320px] sm:h-[350px] md:h-[380px] flex items-center justify-center overflow-visible"
        >
          {/* 24 Uniformly Spaced Cards — pure continuous scroll, 100% opacity */}
          {conveyorCards.map((value, idx) => (
            <div
              key={`${value.id}-${idx}`}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setSelectedItem(value)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group bg-white rounded-2xl p-4 sm:p-5 border border-slate-100/90 hover:border-cyan-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_45px_rgba(0,194,255,0.25)] transition-shadow duration-300 cursor-pointer flex flex-col justify-between w-[230px] sm:w-[255px] md:w-[280px] lg:w-[290px] h-[210px] sm:h-[225px] md:h-[240px] will-change-transform"
              style={{
                transformOrigin: "center center",
              }}
            >
              <div className="space-y-1.5 sm:space-y-2">
                {/* Icon Squircle */}
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: value.color }}
                >
                  <value.Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                </div>

                {/* Card Title */}
                <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 group-hover:text-[#1e40af] transition-colors leading-snug">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs line-clamp-2 sm:line-clamp-3">
                  {value.description}
                </p>
              </div>

              {/* Learn More Action Link */}
              <div
                className="flex items-center gap-1.5 font-semibold group-hover:gap-2.5 transition-all text-[11px] sm:text-xs pt-1.5 border-t border-slate-100"
                style={{ color: value.color }}
              >
                <span>Learn More</span>
                <FaArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Modal */}
      {selectedItem && (
        <ValueModal
          value={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};

export default ValuesSection;