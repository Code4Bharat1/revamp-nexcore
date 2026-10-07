"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Zap, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const CarouselSection = () => {
  const cards = [
    {
      id: 1,
      title: "Streamlined Business Account Movement",
      content:
        "Keep an eye on your bank account movements with a reliable Odoo tool. An automated backup of all your business transactions by importing and reconciling your bank statements. Your business accounting is well taken care of.",
      icon: "/images/App images/App Icons/odoo-invoicing-software-business-account.webp",
      badge: "Automated",
    },
    {
      id: 2,
      title: "Simplified Billing Process",
      content:
        "No more need to spend hours generating bills. Generate bills automatically based on sales orders, delivery orders, contracts, or time and material. Odoo is a robust tool to automate your business in a safe and secure method.",
      icon: "/images/App images/App Icons/invoicing2.webp",
      badge: "Time-Saver",
    },
    {
      id: 3,
      title: "Create Professional and Customizable Invoices",
      content:
        "NEXCORE ALLIANCE delivers well-curated Odoo Invoicing to your business needs. We indulge in a complete analysis of your business to implement professional invoicing to take your business to the people.",
      icon: "/images/App images/App Icons/odoo-invoicing-billing-process-icon.webp",
      badge: "Customizable",
    },
    {
      id: 4,
      title: "Good-Better-Best Options",
      content:
        "Add reliability and upscale your business. Improve the chances of upselling by giving good, better, and best options for invoicing to your customers.",
      icon: "/images/App images/App Icons/invoicing2.webp",
      badge: "Upselling",
    },
  ];

  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-24 overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#FF6600] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
            <span>POWERFUL INVOICING FEATURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Elevate Your Business{" "}
            <span className="text-[#FF6600]">Workflow</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Discover intelligent solutions designed to streamline your operations
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#0c1e4f] border border-white/10 hover:border-[#FF6600]/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#FF6600]">
                    {card.badge}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#FF6600]" />
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/10 p-2.5 flex items-center justify-center mb-5 border border-white/10">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-9 h-9 object-contain brightness-0 invert"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* Content */}
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  {card.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                <span>Enterprise Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Row */}
        <div className="flex justify-center items-center gap-6 mt-14 flex-wrap">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-white text-xs sm:text-sm font-semibold">
            <TrendingUp className="w-4 h-4 text-[#FF6600]" />
            <span>500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-white text-xs sm:text-sm font-semibold">
            <Award className="w-4 h-4 text-[#FF6600]" />
            <span>Certified Odoo Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;