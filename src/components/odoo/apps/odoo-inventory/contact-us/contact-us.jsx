"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Phone, Package, Clock, TrendingUp } from "lucide-react";
import CountUp from "@/components/odoo/apps/CountUp";

const ContactSection = () => {
  return (
    <section className="relative bg-[#08153A] py-20 lg:py-24 text-center overflow-hidden border-t border-white/10">
      {/* Background Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 px-6 sm:px-8 max-w-4xl mx-auto"
      >
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <Package className="w-3.5 h-3.5 text-[#FF6600]" />
          <span>Complete Inventory Solution</span>
        </div>

        {/* Subheading */}
        <h3 className="text-white/80 text-lg sm:text-xl font-medium mb-3">
          Expand Your Business with Odoo Inventory
        </h3>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Solution for All <span className="text-[#FF6600]">Your Business Needs</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-white/80 font-normal mb-8 max-w-2xl mx-auto">
          Get in Touch with Nexcore Alliance Today for Warehouse Excellence.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FF6600] hover:bg-[#e65c00] text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Us on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-full border border-white/20 shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 text-[#FF6600]" />
              <span>Request Demo</span>
            </motion.button>
          </Link>
        </div>

        {/* Info Cards */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <div className="bg-[#0c1e4f] border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Package className="w-4 h-4 text-[#FF6600]" />
            <span className="text-white/80 font-medium text-xs sm:text-sm">Full Warehouse Control</span>
          </div>
          
          <div className="bg-[#0c1e4f] border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#FF6600]" />
            <span className="text-white/80 font-medium text-xs sm:text-sm">Optimize Operations</span>
          </div>
          
          <div className="bg-[#0c1e4f] border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FF6600]" />
            <span className="text-white/80 font-medium text-xs sm:text-sm">24/7 Support</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
              <CountUp value="500+" />
            </div>
            <div className="text-xs sm:text-sm text-white/60 font-medium">Warehouses Managed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-1">
              <CountUp value="99%" />
            </div>
            <div className="text-xs sm:text-sm text-white/60 font-medium">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
              Real-Time
            </div>
            <div className="text-xs sm:text-sm text-white/60 font-medium">Updates</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;