"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaServer, FaCogs, FaShieldAlt } from "react-icons/fa";

const OdooDetailHero = ({
  serviceTitle,
  breadcrumbName,
  description,
  bgImage,
  features = [],
  specTitle = "Odoo ERP Platform",
  specSubtitle = "Enterprise Solution Suite",
  specHighlights = [],
}) => {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 min-h-[85vh] lg:min-h-screen flex items-center justify-center bg-[#08153A] text-white overflow-hidden select-none">
      {/* ── Background Image & Directional Gradient Blending ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src={bgImage}
          alt={`Odoo ${serviceTitle} Enterprise Visual`}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-right opacity-35 lg:opacity-50"
        />
        {/* Directional Gradient: Solid #08153A on Left for High-Contrast Typography, Image Visibility on Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08153A] via-[#08153A]/95 to-[#08153A]/40 lg:via-[#08153A]/85 lg:to-transparent" />

        {/* Vertical Transition Gradients for Seamless Top and Bottom Flow */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#08153A] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08153A] to-transparent" />
      </div>

      {/* ── Subtle Geometric Grid Background Overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Main Hero Content Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ── LEFT COLUMN: Breadcrumb, Eyebrow, Heading, Description, Tags, CTAs & Stats ── */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Professional Clean Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <Link href="/servicesweoffer" className="hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-slate-600">/</span>
              <Link href="/servicesweoffer" className="hover:text-white transition-colors">
                Odoo
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-[#ff6600] font-semibold">{breadcrumbName || serviceTitle}</span>
            </nav>

            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#ff6600] uppercase mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6600]" />
              ODOO SERVICES
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Odoo <span className="text-[#ff6600]">{serviceTitle}</span>
            </h1>

            {/* Preserved Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal mb-6">
              {description}
            </p>

            {/* Feature Pills */}
            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8 max-w-xl">
                {features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link href="/contactus">
                <button className="px-7 py-3.5 bg-[#ff6600] hover:bg-[#e65c00] text-white font-semibold rounded-lg shadow-md shadow-orange-500/20 transition-all duration-200 text-sm sm:text-base cursor-pointer">
                  Get Started
                </button>
              </Link>
              <Link href="/contactus">
                <button className="px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold rounded-lg transition-all duration-200 text-sm sm:text-base cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Preserved Enterprise Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  500<span className="text-[#ff6600]">+</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  Projects Delivered
                </div>
              </div>

              <div className="border-l border-white/10 pl-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  50<span className="text-[#ff6600]">+</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  Odoo Modules
                </div>
              </div>

              <div className="border-l border-white/10 pl-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  98<span className="text-[#ff6600]">%</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  Client Satisfaction
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Enterprise Odoo Workspace Card ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-[#0c1f52]/90 border border-white/10 shadow-2xl p-6 sm:p-7 text-white backdrop-blur-sm">
              
              {/* Workspace Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#ff6600]/20 text-[#ff6600] flex items-center justify-center font-bold text-sm">
                    <FaServer className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-wide">
                      {specTitle}
                    </h2>
                    <span className="text-[11px] text-slate-400">{specSubtitle}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Enterprise Ready
                </span>
              </div>

              {/* Functional Architecture Blocks */}
              <div className="space-y-3 mb-5">
                {specHighlights.length > 0 ? (
                  specHighlights.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-[#ff6600]">{item.icon || <FaCogs className="w-4 h-4" />}</div>
                        <div>
                          <div className="text-xs font-semibold text-white">{item.title}</div>
                          <div className="text-[10px] text-slate-400">{item.desc}</div>
                        </div>
                      </div>
                      {item.badge && <span className="text-[11px] text-slate-300 font-mono">{item.badge}</span>}
                    </div>
                  ))
                ) : (
                  <>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FaCogs className="w-4 h-4 text-[#ff6600]" />
                        <div>
                          <div className="text-xs font-semibold text-white">Custom Engineering & ERP Core</div>
                          <div className="text-[10px] text-slate-400">CRM • Inventory • Accounting • HR</div>
                        </div>
                      </div>
                      <span className="text-[11px] text-slate-300 font-mono">v18 Ready</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FaShieldAlt className="w-4 h-4 text-cyan-400" />
                        <div>
                          <div className="text-xs font-semibold text-white">High Security & Stability</div>
                          <div className="text-[10px] text-slate-400">Verified Architecture • ISO Standards</div>
                        </div>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-semibold">Verified</span>
                    </div>
                  </>
                )}
              </div>

              {/* Verified Capabilities Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <FaCheckCircle className="w-3.5 h-3.5 text-[#ff6600] shrink-0" />
                  <span>Certified Offshore & On-site Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <FaCheckCircle className="w-3.5 h-3.5 text-[#ff6600] shrink-0" />
                  <span>Full API & Third-Party System Compatibility</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OdooDetailHero;
