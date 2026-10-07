"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { allServices } from "./ServiceData";

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const totalCards = allServices.length;

  // Scroll to a specific card & elevate it on click/hover
  const scrollToCard = useCallback((index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / totalCards;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  }, [totalCards]);

  const nextCard = useCallback(() => {
    const nextIdx = (activeIndex + 1) % totalCards;
    scrollToCard(nextIdx);
  }, [activeIndex, scrollToCard, totalCards]);

  const prevCard = useCallback(() => {
    const prevIdx = (activeIndex - 1 + totalCards) % totalCards;
    scrollToCard(prevIdx);
  }, [activeIndex, scrollToCard, totalCards]);

  // Automatically switch active card every 2 seconds (1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 1)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIdx = (prev + 1) % totalCards;
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const cardWidth = container.scrollWidth / totalCards;
          container.scrollTo({
            left: nextIdx * cardWidth,
            behavior: "smooth",
          });
        }
        return nextIdx;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, totalCards]);

  // Handle scroll events to update activeIndex on mobile/tablet if needed
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / totalCards;
      const currentIdx = Math.round(container.scrollLeft / cardWidth);
      if (currentIdx !== activeIndex && currentIdx >= 0 && currentIdx < totalCards) {
        setActiveIndex(currentIdx);
      }
    }
  };

  return (
    <section
      id="services"
      className="relative w-full bg-white py-14 sm:py-20 overflow-hidden select-none"
    >
      {/* Background Soft Ambient Spotlights on White */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-slate-100/50 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Tech Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(15, 23, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* ========================================================
            SECTION HEADER
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">

          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Services
          </span>

          <motion.h2
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4"
          >
            Comprehensive{" "}
            <span className="text-orange-600">
              IT Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering businesses with cutting-edge technology and innovative solutions tailored to your unique needs.
          </motion.p>
        </div>

        {/* ========================================================
            6-CARD SHOWCASE STAGE
            - Responsive 6-column grid on desktop (lg & xl): 100% visible
            - Smooth swipeable carousel on mobile & tablet
            - Auto-cycles every 2 seconds (1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 1)
           ======================================================== */}
        <div className="relative w-full max-w-[1520px] mx-auto px-1 sm:px-2">
          {/* Left Arrow Button (mobile / tablet) */}
          <button
            onClick={prevCard}
            aria-label="Previous Service"
            className="lg:hidden absolute -left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#081226]/90 border border-slate-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-[#0d1d3d] hover:text-cyan-300 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <FaChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Right Arrow Button (mobile / tablet) */}
          <button
            onClick={nextCard}
            aria-label="Next Service"
            className="lg:hidden absolute -right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#081226]/90 border border-slate-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-[#0d1d3d] hover:text-cyan-300 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <FaChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex lg:grid lg:grid-cols-6 items-center justify-start lg:justify-items-stretch gap-3 sm:gap-4 lg:gap-3 xl:gap-4 overflow-x-auto lg:overflow-visible no-scrollbar pt-6 pb-6 px-1 w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {allServices.map((service, idx) => {
              const isCardActive = idx === activeIndex;

              return (
                <div
                  key={service.id}
                  onClick={() => scrollToCard(idx)}
                  onMouseEnter={() => {
                    setActiveIndex(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  style={
                    isCardActive
                      ? {
                        boxShadow: `0 25px 50px -12px ${service.theme?.glowColor || "rgba(255, 102, 0, 0.45)"
                          }`,
                      }
                      : {}
                  }
                  className={`group relative flex-shrink-0 w-[240px] sm:w-[260px] lg:w-full aspect-[2/3] max-w-full rounded-[24px] sm:rounded-[28px] lg:rounded-[26px] xl:rounded-[30px] overflow-hidden cursor-pointer transition-all duration-500 ease-out ${isCardActive
                    ? "-translate-y-4 scale-[1.04] z-30 ring-2 ring-orange-500/80"
                    : "translate-y-0 z-10 shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:scale-[1.015] opacity-90 hover:opacity-100"
                    }`}
                >
                  <Image
                    src={`${service.cardImage || service.image}`}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 260px"
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PAGINATION DOTS INDICATOR (Bottom Center - on mobile/tablet)
           ======================================================== */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-5 sm:mt-7">
          {allServices.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToCard(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${dotIdx === activeIndex
                ? "w-6 h-2 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
