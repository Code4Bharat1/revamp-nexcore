"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import local data
import { approachSteps } from "./ApproachSecData";

// Lazy load the Modal component
const ApproachDetailModal = dynamic(() => import("./ApproachDetailModal"), {
  ssr: false,
});

const ApproachSec = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".grid-item", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: { amount: 0.6, from: "center" },
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gridRef.current || ".grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  // Top row: cards 0, 1, 2 (01, 02, 03)
  // Bottom row: cards 3, 4 (04, 05)
  const topSteps = approachSteps.slice(0, 3);
  const bottomSteps = approachSteps.slice(3, 5);

  const cardConfigs = [
    { rotate: -2.5 }, // 01
    { rotate: 0 },    // 02
    { rotate: 2.5 },   // 03
    { rotate: -2 },    // 04
    { rotate: 2 },     // 05
  ];

  const handleCardClick = (step) => {
    setSelectedStep(step);
  };

  /**
   * Pure transform calculation for 3-top / 2-bottom layout with hover physics
   */
  const getCardStyle = (index, rowIndex, rowHoveredIndex) => {
    const config = cardConfigs[index] || { rotate: 0 };

    // Default state
    if (hoveredIndex === null) {
      return {
        transform: `rotate(${config.rotate}deg)`,
        zIndex: 10 + index,
        opacity: 1,
        filter: "brightness(1)",
        boxShadow: "0 14px 35px rgba(0, 0, 0, 0.55)",
      };
    }

    // Active hovered card
    if (index === hoveredIndex) {
      return {
        transform: `translateY(-14px) scale(1.04) rotate(0deg) translateZ(30px)`,
        zIndex: 60,
        opacity: 1,
        filter: "brightness(1.05)",
        boxShadow: "0 25px 55px rgba(0, 0, 0, 0.85)",
      };
    }

    // Same row displacement
    if (rowHoveredIndex !== null) {
      if (rowIndex < rowHoveredIndex) {
        return {
          transform: `translateX(-24px) rotate(${config.rotate}deg) scale(0.98)`,
          zIndex: 10 + index,
          opacity: 0.9,
          filter: "brightness(0.9)",
          boxShadow: "0 8px 22px rgba(0, 0, 0, 0.4)",
        };
      }
      if (rowIndex > rowHoveredIndex) {
        return {
          transform: `translateX(24px) rotate(${config.rotate}deg) scale(0.98)`,
          zIndex: 10 + index,
          opacity: 0.9,
          filter: "brightness(0.9)",
          boxShadow: "0 8px 22px rgba(0, 0, 0, 0.4)",
        };
      }
    }

    // Other row cards
    return {
      transform: `rotate(${config.rotate}deg) scale(0.98)`,
      zIndex: 10 + index,
      opacity: 0.9,
      filter: "brightness(0.9)",
      boxShadow: "0 8px 22px rgba(0, 0, 0, 0.4)",
    };
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#08153a] bg-gradient-to-b from-[#050d24] via-[#08153a] to-[#050d24] py-10 sm:py-14 md:py-16 relative overflow-hidden select-none border-t border-blue-900/40 text-white">
      {/* Background ambient lighting glows */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-16 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8 space-y-2.5">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-orange-600 block">
            Our Process Workflow
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Our Approach {" "}
            <span className="text-orange-600">
              Step by Step
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300/80 max-w-2xl mx-auto font-normal">
            A structured, iterative lifecycle engineered to turn complex business requirements into high-impact digital solutions.
          </p>
        </div>

        {/* ─── 3 UP / 2 BELOW STRUCTURE (EXACT UNIFORM SIZE FOR ALL 5 CARDS) ─── */}
        <div
          ref={gridRef}
          className="grid flex flex-col items-center justify-center gap-4 sm:gap-6 py-4"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Top Row: 3 Cards (01, 02, 03) */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 sm:gap-5 lg:gap-6 w-full max-w-6xl">
            {topSteps.map((step, idx) => {
              const globalIndex = idx;
              const rowHoveredIdx = hoveredIndex !== null && hoveredIndex <= 2 ? hoveredIndex : null;
              const cardStyle = getCardStyle(globalIndex, idx, rowHoveredIdx);

              return (
                <div
                  key={step.id}
                  className="grid-item relative flex-shrink-0 origin-center"
                >
                  <div
                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                    onClick={() => handleCardClick(step)}
                    className="relative cursor-pointer will-change-transform flex-shrink-0"
                    style={{
                      ...cardStyle,
                      transition:
                        "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {/* Exact Uniform Size for all 5 cards */}
                    <div className="relative w-[285px] sm:w-[315px] lg:w-[345px] xl:w-[365px] aspect-[1024/720] rounded-[18px] lg:rounded-[22px] overflow-hidden bg-[#060e24] shadow-xl border border-white/10">
                      <Image
                        src={step.imgSrc}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1200px) 345px, 365px"
                        className="object-cover object-center pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 2 Cards (04, 05) centered below with the exact same size */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 sm:gap-5 lg:gap-6 w-full max-w-4xl">
            {bottomSteps.map((step, idx) => {
              const globalIndex = idx + 3;
              const rowHoveredIdx = hoveredIndex !== null && hoveredIndex >= 3 ? hoveredIndex - 3 : null;
              const cardStyle = getCardStyle(globalIndex, idx, rowHoveredIdx);

              return (
                <div
                  key={step.id}
                  className="grid-item relative flex-shrink-0 origin-center"
                >
                  <div
                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                    onClick={() => handleCardClick(step)}
                    className="relative cursor-pointer will-change-transform flex-shrink-0"
                    style={{
                      ...cardStyle,
                      transition:
                        "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {/* Exact Uniform Size for all 5 cards */}
                    <div className="relative w-[285px] sm:w-[315px] lg:w-[345px] xl:w-[365px] aspect-[1024/720] rounded-[18px] lg:rounded-[22px] overflow-hidden bg-[#060e24] shadow-xl border border-white/10">
                      <Image
                        src={step.imgSrc}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1200px) 345px, 365px"
                        className="object-cover object-center pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lazy-loaded Step Detail Modal */}
      {selectedStep && (
        <ApproachDetailModal
          step={selectedStep}
          onClose={() => setSelectedStep(null)}
        />
      )}
    </section>
  );
};

export default ApproachSec;