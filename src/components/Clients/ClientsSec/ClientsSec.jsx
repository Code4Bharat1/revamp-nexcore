"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { testimonials } from "@/data/testimonials";

// ─── External Link Icon ───────────────────────────────────────────────────────
const ExternalLinkIcon = ({ className = "w-3 h-3" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

// ─── Avatar with Image Fallback ───────────────────────────────────────────────
const Avatar = ({ t, size = 44 }) => {
  const photoUrl = t.image || t.avatar;
  const a = t.accentColor ?? "#ff6600";
  const initials = t.initials ?? t.name.slice(0, 2).toUpperCase();

  return (
    <div
      className="relative rounded-full flex items-center justify-center font-bold text-white select-none flex-shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `linear-gradient(135deg, ${a}44, ${a}99)`,
        border: `2px solid ${a}`,
        boxShadow: `0 0 12px ${a}30`,
      }}
    >
      <span>{initials}</span>
      {photoUrl && (
        <img
          src={photoUrl}
          alt={t.name}
          width={size}
          height={size}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="absolute inset-0 w-full h-full object-cover rounded-full"
        />
      )}
    </div>
  );
};

// ─── Quote Mark ───────────────────────────────────────────────────────────────
const QuoteMark = ({ color }) => (
  <svg
    width="36"
    height="26"
    viewBox="0 0 40 30"
    fill="none"
    className="mb-3 flex-shrink-0 transition-colors duration-500"
  >
    <path
      d="M0 30V19.5C0 13.3 1.7 8.35 5.1 4.5C8.5 0.65 13.3-.15 19.5 1.3L18.1 5.4C14.7 4.5 12.1 5.3 10.3 7.7C8.6 10 7.6 12.8 7.5 16H15.5V30H0ZM24 30V19.5C24 13.3 25.7 8.35 29.1 4.5C32.5 0.65 37.3-.15 43.5 1.3L42.1 5.4C38.7 4.5 36.1 5.3 34.3 7.7C32.6 10 31.6 12.8 31.5 16H39.5V30H24Z"
      fill={color}
      fillOpacity="0.5"
    />
  </svg>
);

// ─── Chevron Navigation Icons ─────────────────────────────────────────────────
const ChevronUp = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const ChevronDown = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChevronLeft = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const LayersIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const getCompany = (t) => {
  const parts = t.role.split(",");
  return parts.length > 1 ? parts.slice(1).join(",").trim() : t.role;
};

// ─── Project Showcase Card in 3D Stack (Right Side) ───────────────────────────
const TestiCard = ({ t, isActive }) => {
  const a = t.accentColor ?? "#ff6600";
  const projectImg = t.projectImage;
  const companyName = getCompany(t);

  return (
    <div
      className={`w-full rounded-2xl flex flex-col justify-between p-3.5 sm:p-5 select-none transition-all duration-500 ${isActive ? "ring-1 ring-white/20" : ""
        }`}
      style={{
        minHeight: "240px",
        backgroundColor: "#0a162f",
        backgroundImage: isActive
          ? "linear-gradient(160deg, #11234c 0%, #071226 100%)"
          : "linear-gradient(160deg, #0d1b3b 0%, #050e1f 100%)",
        border: `1px solid ${isActive ? a : "rgba(255,255,255,0.14)"}`,
        boxShadow: isActive
          ? `0 0 0 1px ${a}35, 0 20px 50px rgba(0,0,0,0.85), 0 0 30px ${a}25`
          : "0 12px 35px rgba(0,0,0,0.7)",
      }}
    >
      <div>
        {/* Client Project Preview Image Showcase */}
        {projectImg && (
          <div className="relative w-full h-28 sm:h-36 rounded-xl overflow-hidden mb-1.5 border border-white/10 group">
            <img
              src={projectImg}
              alt={`${t.projectName || "Project"} Showcase`}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a162f]/85 via-transparent to-transparent" />
            {t.websiteUrl && (
              <a
                href={t.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md text-[10.5px] font-mono font-medium bg-black/75 hover:bg-black text-white border border-white/25 backdrop-blur-sm flex items-center gap-1.5 transition-all cursor-pointer hover:border-white"
              >
                <span>Live Project</span>
                <ExternalLinkIcon className="w-2.5 h-2.5 text-cyan-400" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Card footer: Project Name + Company Scope & Visit Site link */}
      <div
        className="flex items-center justify-between gap-3 pt-2.5 mt-1"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${a}25, ${a}50)`,
              border: `1px solid ${a}60`,
              boxShadow: `0 0 10px ${a}25`,
            }}
          >
            <LayersIcon className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-white text-xs sm:text-sm leading-tight truncate">
              {t.projectName || "Delivered Platform"}
            </p>
            <p className="text-white/50 text-[10.5px] mt-0.5 truncate">
              Built for {companyName}
            </p>
          </div>
        </div>

        {/* Website link button */}
        {t.websiteUrl && (
          <a
            href={t.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 transition-all flex-shrink-0 cursor-pointer shadow-sm hover:scale-105"
            aria-label={`Visit ${t.projectName || companyName}: ${t.websiteUrl}`}
          >
            <span>Visit Site</span>
            <ExternalLinkIcon className="w-2.5 h-2.5 text-cyan-400" />
          </a>
        )}
      </div>
    </div>
  );
};

// ─── Main Testimonials Section ────────────────────────────────────────────────
export const ClientsSec = () => {
  const total = testimonials.length;
  const [activeIdx, setActiveIdx] = useState(2); // Start with Marcus Tetteh (03/05) as shown in reference
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth auto-scroll every 3.5 seconds when in view, paused on active card hover
  useEffect(() => {
    if (!isInView || isHovered) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 3500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isInView, isHovered, handleNext, activeIdx]);

  const handleSelect = (idx) => {
    setActiveIdx(idx);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      handleNext();
    }
  };

  const activeTestimonial = testimonials[activeIdx];
  const activeAccent = activeTestimonial.accentColor ?? "#ff6600";

  return (
    <section
      id="clients"
      className="relative w-full bg-white text-slate-900 py-12 md:py-16 min-h-screen flex items-center justify-center overflow-hidden border-t border-slate-200"
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,102,0,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full focus:outline-none select-none"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label="Client Testimonials Section"
        >
          {/* ── LEFT COLUMN: Headline & Synchronized Active Testimonial Details ── */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-4 lg:mb-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 block mb-2">
                Client Projects
              </span>
              <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-black tracking-tight leading-[1.15]">
                Hear it from the{" "}
                <span className="text-orange-600">people</span> we built for.
              </h2>
            </div>

            {/* Synchronized Active Testimonial Text Container */}
            <div className="relative min-h-[220px] sm:min-h-[250px] flex flex-col justify-center">
              {/* Index Indicator */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[11px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full border transition-all duration-500"
                  style={{
                    borderColor: `${activeAccent}50`,
                    backgroundColor: `${activeAccent}18`,
                    color: activeAccent,
                  }}
                >
                  0{activeIdx + 1} / 0{total}
                </span>
              </div>

              {/* Animated Quote & Author Container */}
              <div key={activeTestimonial.id} className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                {/* Company Description Subline */}
                {activeTestimonial.description && (
                  <div
                    className="mb-3.5 border-l-2 pl-3.5 transition-colors duration-500"
                    style={{ borderColor: activeAccent }}
                  >
                    <p className="text-xs sm:text-sm text-black font-normal leading-relaxed">
                      {activeTestimonial.description}
                    </p>
                  </div>
                )}

                <QuoteMark color={activeAccent} />

                {/* Quote text */}
                <blockquote className="text-sm sm:text-base lg:text-[17px] leading-relaxed text-black font-medium mb-4">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </blockquote>

                {/* Divider line */}
                <div
                  className="h-0.5 w-10 mb-4 rounded-full transition-all duration-500"
                  style={{
                    background: activeAccent,
                    boxShadow: `0 0 10px ${activeAccent}80`,
                  }}
                />

                {/* Author info with photo avatar */}
                <div className="flex items-center gap-3.5">
                  <Avatar t={activeTestimonial} size={42} />
                  <div>
                    <p className="font-bold text-base sm:text-lg text-black leading-tight">
                      {activeTestimonial.name}
                    </p>
                    <p className="text-xs text-black font-medium mt-0.5 opacity-80">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: 3D Stack Carousel ── */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            {/* Main Vertical Fan Container */}
            <div
              className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[420px] overflow-visible"
            >
              {/* Left / Prev Circular Arrow Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="absolute -left-1 sm:left-0 md:left-1 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-slate-800 hover:bg-slate-100 hover:text-[#ff6600] hover:border-[#ff6600]/40 hover:scale-110 shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft />
              </button>

              {/* Vertical Stack Stage */}
              <div className="relative w-full max-w-sm sm:max-w-md h-[250px] flex items-center justify-center">
                {testimonials.map((t, idx) => {
                  let diff = (idx - activeIdx + total) % total;
                  if (diff > 2) diff -= total;

                  const isActive = diff === 0;

                  let translateY = 0;
                  let scale = 1;
                  let rotate = 0;
                  let opacity = 1;
                  let zIndex = 30;
                  let pointerEvents = "auto";

                  if (isActive) {
                    translateY = 0;
                    scale = 1;
                    rotate = 0;
                    opacity = 1;
                    zIndex = 30;
                    pointerEvents = "auto";
                  } else if (diff === -1) {
                    translateY = -55;
                    scale = 0.91;
                    rotate = -2.5;
                    opacity = 0.55;
                    zIndex = 20;
                    pointerEvents = "auto";
                  } else if (diff === -2) {
                    translateY = -105;
                    scale = 0.82;
                    rotate = -5;
                    opacity = 0.25;
                    zIndex = 10;
                    pointerEvents = "auto";
                  } else if (diff === 1) {
                    translateY = 55;
                    scale = 0.91;
                    rotate = 2.5;
                    opacity = 0.55;
                    zIndex = 20;
                    pointerEvents = "auto";
                  } else if (diff === 2) {
                    translateY = 105;
                    scale = 0.82;
                    rotate = 5;
                    opacity = 0.25;
                    zIndex = 10;
                    pointerEvents = "auto";
                  }

                  return (
                    <div
                      key={t.id}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => handleSelect(idx)}
                      style={{
                        transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
                        opacity,
                        zIndex,
                        pointerEvents,
                        willChange: "transform, opacity",
                      }}
                      className={`absolute inset-x-2 sm:inset-x-0 transition-all duration-500 ease-out ${isActive ? "cursor-default" : "cursor-pointer hover:opacity-75"
                        }`}
                    >
                      <TestiCard t={t} isActive={isActive} />
                    </div>
                  );
                })}
              </div>

              {/* Right / Next Circular Arrow Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="absolute -right-1 sm:right-0 md:right-1 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-slate-800 hover:bg-slate-100 hover:text-[#ff6600] hover:border-[#ff6600]/40 hover:scale-110 shadow-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ChevronRight />
              </button>
            </div>

            {/* Up / Down navigation buttons + quick select dots */}
            <div className="flex items-center gap-2.5 mt-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial (Up)"
                className="w-8 h-8 rounded-full border border-slate-200 bg-slate-100 text-slate-700 hover:text-[#ff6600] hover:bg-slate-200 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronUp />
              </button>

              <div className="flex items-center gap-1.5">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    aria-label={`Go to review by ${t.name}`}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === activeIdx
                        ? "w-5 bg-[#ff6600] shadow-sm"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial (Down)"
                className="w-8 h-8 rounded-full border border-slate-200 bg-slate-100 text-slate-700 hover:text-[#ff6600] hover:bg-slate-200 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSec;