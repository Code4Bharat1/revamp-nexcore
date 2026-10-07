"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Package, Home, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-[94px] min-h-[50vh] sm:min-h-[55vh] flex items-center bg-[#08153A] overflow-hidden">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full transform-gpu opacity-40">
          <Image
            src="/images/bg-image/Odoo Inventory.jpg"
            alt="Odoo Inventory"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
            className="transform scale-102"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#08153A] via-[#08153A]/90 to-[#08153A]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08153A] via-transparent to-[#08153A]/40 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-16 py-12 flex flex-col justify-between items-center sm:flex-row gap-8">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center sm:items-start max-w-2xl"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Warehouse Excellence</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center sm:text-left mb-3 tracking-tight">
            Odoo <span className="text-[#FF6600]">Inventory</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/80 text-base sm:text-lg text-center sm:text-left max-w-xl leading-relaxed">
            Complete warehouse management and inventory control for streamlined operations.
          </p>
          
          {/* Decorative Line */}
          <div className="mt-4 w-24 h-1 bg-[#FF6600] rounded-full" />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center sm:items-end gap-5"
        >
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 text-xs sm:text-sm font-medium bg-[#0c1e4f] px-5 py-2.5 rounded-full border border-white/10 shadow-lg text-white/80">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#FF6600] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>

            <ChevronRight className="w-3.5 h-3.5 text-white/40" />

            <Link
              href="/apps"
              className="flex items-center gap-1 hover:text-[#FF6600] transition-colors"
            >
              <Package className="w-3.5 h-3.5" />
              <span>Apps</span>
            </Link>

            <ChevronRight className="w-3.5 h-3.5 text-white/40" />

            <span className="text-[#FF6600] font-semibold">Odoo Inventory</span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex gap-3">
            <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 bg-[#FF6600] hover:bg-[#e65c00] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all duration-300 cursor-pointer">
                <Zap className="w-4 h-4" />
                <span>Get Started</span>
              </button>
            </Link>

            <Link href="#warehouse">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm border border-white/20 shadow-sm transition-all duration-300 cursor-pointer">
                <span>Explore Features</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;