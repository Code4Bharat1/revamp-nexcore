"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, Sparkles, ArrowRight } from "lucide-react";

export default function PageHero({
  badgeIcon = <ShieldCheck className="w-4 h-4 text-[#FF6A00]" />,
  badgeText = "Verified Policy & Compliance",
  titlePrefix = "",
  titleHighlight = "",
  titleSuffix = "",
  description = "",
  actions,
  metrics = [],
  imageSrc = "/images/about/ecosystem_sphere.jpg",
  imageAlt = "Nexcore Alliance Enterprise Policy System",
  floatingBadges,
  statusCard,
  rightContent,
  children,
  className = "",
}) {
  const defaultBadges = [
    {
      icon: ShieldCheck,
      text: "Verified & Statutory",
      position: "-top-3 left-4",
      bg: "bg-blue-50 text-[#1769FF]",
    },
    {
      icon: Lock,
      text: "Enterprise Enforceable",
      position: "top-1/4 -right-4",
      bg: "bg-cyan-50 text-[#0EA5E9]",
    },
    {
      icon: CheckCircle2,
      text: "Transparent Terms",
      position: "bottom-16 -left-4",
      bg: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Sparkles,
      text: "2025 Revision",
      position: "-bottom-3 right-6",
      bg: "bg-purple-50 text-purple-600",
    },
  ];

  const badgesToRender = floatingBadges || defaultBadges;

  return (
    <section className={`relative pt-4 pb-12 sm:pb-16 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Heading, Badges, Summary, CTAs, Metrics */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow Badge */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1769FF] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs">
              {badgeIcon}
              <span>{badgeText}</span>
            </div>
          )}

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#060F28] tracking-tight leading-[1.15]">
            {titlePrefix && <span>{titlePrefix} </span>}
            {titleHighlight && (
              <span className="text-[#1769FF]">{titleHighlight}</span>
            )}
            {titleSuffix && <span> {titleSuffix}</span>}
          </h1>

          {/* Lead Description */}
          {description && (
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              {description}
            </p>
          )}

          {/* Action Buttons */}
          {actions ? (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {actions}
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#clauses"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#1769FF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Explore Clauses</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#060F28] font-bold text-sm sm:text-base border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                <span>Contact Desk</span>
              </a>
            </div>
          )}

          {/* Metrics Counter Strip */}
          {metrics.length > 0 && (
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {metrics.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-black text-[#060F28] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 font-semibold">
                      {stat.label}
                    </div>
                    {stat.sublabel && (
                      <div className="text-[11px] text-slate-400">
                        {stat.sublabel}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {children}
        </div>

        {/* Right Column: Visual Graphic / Image Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
          {rightContent ? (
            rightContent
          ) : (
            <div className="relative w-full max-w-[460px] h-[360px] sm:h-[420px] md:h-[450px] flex items-center justify-center">
              {/* Glow Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/25 via-cyan-400/20 to-transparent blur-2xl pointer-events-none" />

              {/* Main Image Container with guaranteed height */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-slate-900 group">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060F28]/85 via-[#060F28]/20 to-transparent pointer-events-none" />

                {/* Bottom glass info bar */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-cyan-300">
                      {statusCard?.tag || "NEXCORE ALLIANCE LLP"}
                    </div>
                    <div className="text-xs sm:text-sm font-bold">
                      {statusCard?.title || "Statutory Legal Compliance"}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#1769FF] text-[11px] font-black tracking-wider">
                    {statusCard?.badge || "ACTIVE"}
                  </span>
                </div>
              </div>

              {/* Floating Glass Pills with Animations */}
              {badgesToRender.map((badge, idx) => {
                const Icon = badge.icon;
                const anims = [
                  { y: [-4, 4, -4], duration: 4 },
                  { y: [4, -4, 4], duration: 4.5 },
                  { y: [-5, 5, -5], duration: 5 },
                  { y: [5, -5, 5], duration: 4.2 },
                ];
                const anim = anims[idx % anims.length];

                return (
                  <motion.div
                    key={idx}
                    animate={{ y: anim.y }}
                    transition={{
                      duration: anim.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${badge.position} bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-2 z-20 hover:scale-105 transition-transform`}
                  >
                    <div
                      className={`w-7 h-7 rounded-xl ${badge.bg} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#060F28] whitespace-nowrap">
                      {badge.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
