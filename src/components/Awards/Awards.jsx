"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { awardsData } from "./AwardsData";

function AwardCard({ award }) {
  const domainWord =
    award.theme?.domainLabel ||
    (award.category === "STEM & EdTech"
      ? "STEM"
      : award.category === "Leadership & Vision"
        ? "LEAD"
        : award.category === "Entrepreneurship"
          ? "GROWTH"
          : "HONOR");

  return (
    <div className="group relative pt-14 sm:pt-16 flex flex-col select-none transition-transform duration-300 hover:-translate-y-2 w-full">
      {/* Floating Trophy Image popping out above the card's top edge */}
      <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-44 sm:w-48 h-44 sm:h-48 z-20 pointer-events-none flex items-center justify-center">
        {/* Soft blurred ambient shadow beneath the raised trophy */}
        <div className="absolute bottom-2 w-28 sm:w-32 h-5 bg-black/40 rounded-full blur-md opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />

        {/* The trophy image (natural shape preserved, pop-out effect) */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={award.imageSrc}
            alt={award.title}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
            className="object-contain drop-shadow-2xl group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-300"
          />
        </div>
      </div>

      {/* Multi-Stop Gradient Rounded Card Body with Subtle Depth Lighting */}
      <div
        className="relative rounded-[24px] p-5 sm:p-6 pt-28 sm:pt-32 flex flex-col justify-between shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/10 h-[280px] sm:h-[300px]"
        style={{
          background:
            award.theme?.cardGradient ||
            award.theme?.cardBg ||
            "linear-gradient(145deg, #091a42 0%, #173b8a 45%, #1d4ed8 75%, #4338ca 100%)",
        }}
      >
        {/* Subtle Radial Light Glows for Dimensional Depth */}
        <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/[0.08] blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-black/[0.20] blur-2xl pointer-events-none" />

        {/* Faint Oversized Domain Watermark Text behind content */}
        <div className="absolute right-2 bottom-0 pointer-events-none select-none z-0">
          <span className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white/[0.07] uppercase block leading-none">
            {domainWord}
          </span>
        </div>

        {/* Card Text Block */}
        <div className="relative z-10 flex flex-col flex-1 mt-auto">
          {/* Award Title */}
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-1.5 line-clamp-2">
            {award.title}
          </h3>

          {/* Subtitle / Organization */}
          <p className="text-xs text-white/80 font-medium line-clamp-2 leading-relaxed">
            {award.organization}
          </p>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="relative z-10 mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70 font-medium">
          <span>{award.date || award.year}</span>
          <span className="text-[10px] tracking-wider uppercase font-semibold text-white/50 px-2 py-0.5 rounded-full bg-white/10">
            {award.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Awards() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { label: "All", count: awardsData.length },
    { label: "STEM & EdTech", count: awardsData.filter((a) => a.category === "STEM & EdTech").length },
    { label: "Leadership & Vision", count: awardsData.filter((a) => a.category === "Leadership & Vision").length },
    { label: "Institutional & CSR", count: awardsData.filter((a) => a.category === "Institutional & CSR").length },
    { label: "Entrepreneurship", count: awardsData.filter((a) => a.category === "Entrepreneurship").length },
  ];

  const filteredAwards =
    activeCategory === "All"
      ? awardsData
      : awardsData.filter((award) => award.category === activeCategory);

  const marqueeAwards = [...awardsData, ...awardsData];

  return (
    <section id="awards" className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl opacity-25 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(15, 23, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-orange-600 mb-3"
          >
            Honours & Accolades
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Awards & <span className="text-orange-600">Recognitions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6"
          >
            A journey of excellence, innovation and impact.
          </motion.p>
        </div>

        {/* ========================================================
            CATEGORY FILTER PILLS WITH SMOOTH SPRING ANIMATION
           ======================================================== */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`relative group flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 border cursor-pointer ${isActive
                  ? "text-white border-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.35)] scale-105"
                  : "text-slate-700 bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-slate-300"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeAwardPill"
                    className="absolute inset-0 rounded-full bg-[#09152b] z-0"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
                <span
                  className={`relative z-10 text-[10px] sm:text-xs font-mono px-1.5 py-0.5 rounded-full transition-colors ${isActive
                    ? "bg-blue-600/80 text-blue-100"
                    : "bg-slate-200 text-slate-600 group-hover:bg-slate-300"
                    }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          ANIMATED AWARDS SHOWCASE (Framer Motion Category Switch)
         ======================================================== */}
      <AnimatePresence mode="wait">
        {activeCategory === "All" ? (
          /* Marquee View for "All" */
          <motion.div
            key="all-marquee"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="relative w-full overflow-hidden pt-6 pb-6 awards-marquee-container"
          >
            <div className="awards-marquee-track flex">
              {marqueeAwards.map((award, index) => (
                <div
                  key={`${award.id}-${index}`}
                  className="w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0 px-3 sm:px-4"
                >
                  <AwardCard award={award} />
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Categorized Grid View with Staggered Entrance Animation */
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex flex-wrap justify-center gap-6 pt-4 pb-6">
              {filteredAwards.map((award, idx) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 25, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full sm:w-[300px] md:w-[320px] lg:w-[340px]"
                >
                  <AwardCard award={award} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pure CSS Performant Infinite Marquee Animation */}
      <style jsx>{`
        .awards-marquee-track {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          animation: marquee-scroll 50s linear infinite;
          will-change: transform;
        }

        .awards-marquee-container:hover .awards-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}