"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { products } from "@/data/products";

// ─── STAGE CONSTANTS ──────────────────────────────────────────────────────────
const CARD_W = 270; // card width in px
const CARD_H = 330; // card height in px
const GAP = 30; // horizontal gap between cards
const STAGE_W = 1240;

// Helper to compute dynamic x-offset, subtle arch dip, and fan angle for any number of cards
const getCardLayout = (index, total) => {
  if (total <= 1) return { x: 0, y: 0, angle: 0 };
  const centerIndex = (total - 1) / 2;
  const offsetFromCenter = index - centerIndex;
  const x = offsetFromCenter * (CARD_W + GAP);
  const normDist = Math.abs(offsetFromCenter) / (centerIndex || 1);
  const y = normDist * normDist * 10;
  const angle = (offsetFromCenter / (centerIndex || 1)) * 3.5;
  return { x, y, angle };
};

// ─── Inline Product Icon ──────────────────────────────────────────────────────
const ProductIcon = ({ name, color, size = 24 }) => {
  if (name === "mic") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    );
  }
  if (name === "server") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    );
  }
  if (name === "flow") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M6 9v3a3 3 0 0 0 3 3h6" />
      </svg>
    );
  }
  if (name === "device") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="14" x="3" y="3" rx="2" />
        <line x1="2" x2="22" y1="20" y2="20" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
};

export const ProductsSection = () => {
  const [expandedSlug, setExpandedSlug] = useState(null);
  const [animationDone] = useState(true);

  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const cardsRef = useRef([]);
  const badgesRef = useRef([]);

  const activeProduct = products.find((p) => p.slug === expandedSlug) ?? null;

  // Set initial fanned positions on mount without ScrollTrigger
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const layout = getCardLayout(i, products.length);
      gsap.set(card, {
        x: layout.x,
        y: layout.y,
        rotationY: 0,
        rotationZ: layout.angle,
        scale: 1,
        opacity: 1,
        zIndex: i,
      });
    });
    badgesRef.current.forEach((b) => {
      if (!b) return;
      gsap.set(b, { opacity: 1 });
    });
  }, []);

  // ── Hover effects ────────────────────────────────────────────────────────
  const handleCardMouseEnter = useCallback(
    (idx) => {
      if (expandedSlug) return;

      const hoveredCard = cardsRef.current[idx];
      if (hoveredCard) {
        const layout = getCardLayout(idx, products.length);
        gsap.to(hoveredCard, {
          y: layout.y - 20,
          scale: 1.08,
          rotationZ: layout.angle * 0.35,
          zIndex: 50,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      // Dim non-hovered cards
      cardsRef.current.forEach((card, i) => {
        if (!card || i === idx) return;
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.65,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    },
    [expandedSlug]
  );

  const handleCardMouseLeave = useCallback(() => {
    if (expandedSlug) return;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const layout = getCardLayout(i, products.length);
      gsap.to(card, {
        x: layout.x,
        y: layout.y,
        rotationY: 0,
        rotationZ: layout.angle,
        scale: 1,
        opacity: 1,
        zIndex: i,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }, [expandedSlug]);

  // ── Click to Inspect ─────────────────────────────────────────────────────
  const handleCardClick = useCallback(
    (slug, idx) => {
      if (expandedSlug === slug) {
        handleClose();
        return;
      }

      // Lift clicked card
      const clickedCard = cardsRef.current[idx];
      if (clickedCard) {
        const layout = getCardLayout(idx, products.length);
        gsap.to(clickedCard, {
          scale: 1.1,
          y: layout.y - 18,
          rotationY: 0,
          rotationZ: 0,
          zIndex: 60,
          duration: 0.45,
          ease: "back.out(1.4)",
        });
      }

      // Dim other cards
      cardsRef.current.forEach((card, i) => {
        if (!card || i === idx) return;
        gsap.to(card, {
          scale: 0.88,
          opacity: 0.25,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      setExpandedSlug(slug);
    },
    [expandedSlug]
  );

  const handleClose = useCallback(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const layout = getCardLayout(i, products.length);
      gsap.to(card, {
        x: layout.x,
        y: layout.y,
        rotationY: 0,
        rotationZ: layout.angle,
        scale: 1,
        opacity: 1,
        zIndex: i,
        duration: 0.5,
        ease: "power3.out",
      });
    });
    setExpandedSlug(null);
  }, []);

  // Escape key support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && expandedSlug) handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expandedSlug, handleClose]);

  return (
    <section
      id="products"
      ref={containerRef}
      className="w-full min-h-screen bg-[#F9F7F7] py-6 sm:py-8 lg:py-10 relative overflow-hidden select-none flex flex-col justify-center items-center"
    >
      <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center my-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 lg:mb-7 flex flex-col items-center">
          {/* Eyebrow */}
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-orange-600 mb-2">
            Our Products
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black text-[#0B1330] tracking-tight leading-[1.18] mb-2">
            Software we built for ourselves,{" "}
            <span className="text-orange-600">
              then productised.
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
            Systems that came out of client work, hardened into products you can
            deploy.
          </p>
        </div>

        {/* ── DESKTOP STACK & SPLIT STAGE (lg+) ── */}
        <div
          ref={stageRef}
          className="relative mx-auto overflow-visible hidden lg:block"
          style={{
            width: `${STAGE_W}px`,
            maxWidth: "100%",
            height: `${CARD_H + 45}px`,
            perspective: "1200px",
          }}
        >
          {products.map((product, idx) => (
            <div
              key={product.slug}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              tabIndex={animationDone ? 0 : -1}
              role="button"
              aria-expanded={expandedSlug === product.slug}
              aria-label={`View details for ${product.name}`}
              onClick={() => handleCardClick(product.slug, idx)}
              onMouseEnter={() => handleCardMouseEnter(idx)}
              onMouseLeave={handleCardMouseLeave}
              onFocus={() => handleCardMouseEnter(idx)}
              onBlur={handleCardMouseLeave}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: `${CARD_W}px`,
                height: `${CARD_H}px`,
                marginTop: `-${CARD_H / 2}px`,
                marginLeft: `-${CARD_W / 2}px`,
                cursor: animationDone ? "pointer" : "default",
                willChange: "transform, opacity",
                transformStyle: "preserve-3d",
              }}
              className={`
                rounded-3xl bg-[#0b1329] border
                flex flex-col justify-between p-5 shadow-[0_16px_40px_rgba(4,10,26,0.35)]
                transition-[border-color,box-shadow] duration-300
                ${expandedSlug === product.slug
                  ? "border-[#00f2ff] shadow-[0_25px_60px_rgba(0,242,255,0.3)]"
                  : "border-white/10 hover:border-cyan-400/50 hover:shadow-[0_20px_45px_rgba(0,194,255,0.2)]"
                }
              `}
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div
                    className="p-2.5 rounded-xl border"
                    style={{
                      backgroundColor: `${product.themeColor}15`,
                      borderColor: `${product.themeColor}35`,
                    }}
                  >
                    <ProductIcon
                      name={product.iconName}
                      color={product.themeColor}
                      size={24}
                    />
                  </div>
                  <span
                    ref={(el) => {
                      badgesRef.current[idx] = el;
                    }}
                    className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-white/5 border-white/10 text-white/80"
                  >
                    {product.status}
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-[17px] text-white mb-1 leading-snug">
                  {product.name}
                </h3>
                <p className="text-[11px] font-mono text-cyan-400 font-semibold mb-2">
                  {product.category}
                </p>
                <p className="text-[11px] text-white/65 line-clamp-3 leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span className="font-mono text-[10px] text-white/60">
                  Click to inspect
                </span>
                <span className="font-bold text-[#ff6600] text-sm group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE / TABLET RESPONSIVE GRID (< lg) ── */}
        <div
          className={`grid lg:hidden gap-5 mx-auto ${
            products.length % 2 === 0
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl"
          }`}
        >
          {products.map((product) => (
            <button
              key={product.slug}
              type="button"
              onClick={() =>
                setExpandedSlug(
                  expandedSlug === product.slug ? null : product.slug
                )
              }
              className="relative cursor-pointer p-6 rounded-3xl bg-[#0b1329] border border-white/10 flex flex-col justify-between text-left shadow-xl hover:border-cyan-400/40 transition-all duration-300 hover:scale-[1.02]"
              style={{ minHeight: `${CARD_H - 30}px` }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="p-3 rounded-2xl border"
                    style={{
                      backgroundColor: `${product.themeColor}15`,
                      borderColor: `${product.themeColor}35`,
                    }}
                  >
                    <ProductIcon
                      name={product.iconName}
                      color={product.themeColor}
                      size={24}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-white/5 border-white/10 text-white/80">
                    {product.status}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400 font-semibold mb-3">
                  {product.category}
                </p>
                <p className="text-xs text-white/65 line-clamp-3 leading-relaxed">
                  {product.tagline}
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span className="font-mono text-[11px] text-white/60">
                  Click to inspect
                </span>
                <span className="font-bold text-[#ff6600]">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Detail Inspection Modal ── */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="expanded-product-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#030610]/80 backdrop-blur-md"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Detail card */}
          <div className="relative z-10 w-full max-w-2xl bg-[#091530] border border-[#ff6600]/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.95)] animate-in fade-in zoom-in-95 duration-300">
            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition cursor-pointer"
              aria-label="Close product details"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Content Header */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="p-3.5 rounded-2xl border"
                style={{
                  backgroundColor: `${activeProduct.themeColor}18`,
                  borderColor: `${activeProduct.themeColor}44`,
                }}
              >
                <ProductIcon
                  name={activeProduct.iconName}
                  color={activeProduct.themeColor}
                  size={36}
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  {activeProduct.category}
                </span>
                <h3
                  id="expanded-product-title"
                  className="font-bold text-2xl sm:text-3xl text-white"
                >
                  {activeProduct.name}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
              {activeProduct.description}
            </p>

            {/* Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {activeProduct.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6600]" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-white/40">
                Status: {activeProduct.status}
              </span>
              <a
                href={activeProduct.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="px-5 py-2.5 rounded-xl bg-[#ff6600] text-white font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-orange-500/20"
              >
                Deploy System →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
