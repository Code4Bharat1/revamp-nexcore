"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Zap, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const pills = [
    { icon: <Users className="w-4 h-4 text-[#FF6600]" />, text: "Customer Management" },
    { icon: <Zap className="w-4 h-4 text-[#FF6600]" />, text: "Boost Productivity" },
    { icon: <TrendingUp className="w-4 h-4 text-[#FF6600]" />, text: "Sales Growth" },
  ];

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center bg-[#08153A] text-white overflow-hidden select-none">
      {/* ── Background Image & Directional Gradient Blending ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/bg-image/odoo crm.jpg"
          alt="Odoo CRM Enterprise"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-right opacity-30 lg:opacity-40"
        />
        {/* Directional Gradient: Solid #08153A on Left for High-Contrast Typography, Image Visibility on Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08153A] via-[#08153A]/95 to-[#08153A]/40 lg:via-[#08153A]/90 lg:to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08153A] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08153A] to-transparent" />
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

      {/* ── Main Content Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-8 py-6">
        <div className="max-w-3xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 font-medium mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/apps" className="hover:text-white transition-colors">
              Apps
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#FF6600] font-semibold">Odoo CRM</span>
          </nav>

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6600]" />
            <span>CRM Solution Suite</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Odoo CRM{" "}
            <span className="text-[#FF6600]">
              Open Source Software Development
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed font-normal mb-8"
          >
            Transform your customer relationships with cutting-edge CRM technology designed for modern businesses.
          </motion.p>

          {/* Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {pills.map((pill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-sm"
              >
                {pill.icon}
                <span>{pill.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contactus"
              className="px-7 py-3.5 bg-[#FF6600] hover:bg-[#e05a00] text-white font-bold rounded-xl text-sm sm:text-base shadow-lg shadow-[#FF6600]/20 transition-all flex items-center gap-2"
            >
              <span>Schedule CRM Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/apps"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl text-sm sm:text-base transition-all flex items-center gap-2"
            >
              <span>All Applications</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;