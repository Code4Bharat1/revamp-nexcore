"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection({
  tag = "READY TO TRANSFORM YOUR FUTURE?",
  title = "Join thousands of learners who are building their future with NEXCORE ALLIANCE LLP.",
  description,
  buttonText = "Get Started Today",
  buttonLink = "/contactus",
  className = "",
}) {
  return (
    <div
      className={`relative rounded-3xl sm:rounded-4xl p-8 sm:p-12 md:p-14 text-center text-white shadow-2xl overflow-hidden mb-12 border border-white/10 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #1769FF 0%, #0B1C48 60%, #060F28 100%)",
      }}
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-500/30 blur-3xl"
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {tag && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{tag}</span>
          </div>
        )}

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
          {title}
        </h2>

        {description && (
          <p className="text-blue-100 text-sm sm:text-base mb-6 leading-relaxed">
            {description}
          </p>
        )}

        <div className="pt-2">
          <Link
            href={buttonLink}
            className="inline-flex items-center gap-2.5 bg-white text-[#1769FF] hover:bg-blue-50 font-bold px-8 py-3.5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-white/40"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
