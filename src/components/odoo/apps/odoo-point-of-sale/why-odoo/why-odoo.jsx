"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, Globe, TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "@/components/odoo/apps/CountUp";

const Whyodoo = () => {
  const highlights = [
    { icon: <Award className="w-5 h-5 text-[#FF6600]" />, text: "Gold Odoo Partner" },
    { icon: <Globe className="w-5 h-5 text-[#FF6600]" />, text: "Seamless Data Migration" },
    { icon: <TrendingUp className="w-5 h-5 text-[#FF6600]" />, text: "Proficient Coding Team" },
    { icon: <Users className="w-5 h-5 text-[#FF6600]" />, text: "Tailored Business Analysis" }
  ];

  return (
    <section className="relative bg-[#08153A] py-20 lg:py-24 overflow-hidden border-t border-white/10">
      {/* Background Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Text Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Official Gold Partner</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Why <span className="text-[#FF6600]">Odoo Implementers</span> for Implementing POS?
          </h2>

          <div className="w-16 h-1 bg-[#FF6600] rounded-full" />

          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
            Odoo Implementers, a Gold Partner of Odoo, take care of your implementation process, including transferring files and documents from your old system to the new Odoo system. We are a trustworthy partner of Odoo, having thrived in every project undertaken. Our services stand out with our proficient team of coders, handling the entire implementation process effectively and efficiently.
          </p>

          {/* Highlight Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#0c1e4f] border border-white/10 p-3.5 rounded-xl text-white"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  {highlight.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold">{highlight.text}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="bg-[#FF6600] hover:bg-[#e65c00] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-lg">
            <div className="bg-[#0c1e4f] p-3 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/App images/oodu-implementers-for-implemeneting-odoo-pos.png"
                alt="Odoo POS Implementation"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* Levitating Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#08153A] border border-[#FF6600]/40 text-white px-5 py-2 rounded-full shadow-xl flex items-center gap-2 font-bold text-xs sm:text-sm whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
              <span>Certified Gold Partner</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Section */}
      <motion.div 
        className="container mx-auto px-6 sm:px-8 lg:px-16 mt-20 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
              <CountUp value="500+" />
            </div>
            <div className="text-xs sm:text-sm text-white/60 font-semibold">Global Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#FF6600] mb-1">
              <CountUp value="15+" />
            </div>
            <div className="text-xs sm:text-sm text-white/60 font-semibold">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
              <CountUp value="100%" />
            </div>
            <div className="text-xs sm:text-sm text-white/60 font-semibold">Success Rate</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Whyodoo;
