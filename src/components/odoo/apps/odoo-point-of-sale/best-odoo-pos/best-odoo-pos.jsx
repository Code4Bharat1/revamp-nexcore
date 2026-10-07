"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "@/components/odoo/apps/CountUp";

const Bestodoo = () => {
  return (
    <section className="relative bg-[#08153A] py-20 lg:py-24 text-white overflow-hidden border-t border-white/10">
      {/* Background Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Section: Image */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="relative bg-[#0c1e4f] p-3 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/App images/odoo-pos-software-solutions-for-your-business.jpg"
                alt="Odoo POS Solution"
                className="w-full h-auto rounded-xl object-cover"
              />
              
              {/* Levitating Badge */}
              <div className="absolute -bottom-4 -right-2 bg-[#08153A] border border-[#FF6600]/40 text-white px-5 py-2 rounded-full shadow-xl flex items-center gap-2 font-bold text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                <span>Smart POS Interface</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Smart Retail & Dining</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            Best <span className="text-[#FF6600]">Odoo POS Software</span> Solution for Your Business
          </h2>

          <div className="w-16 h-1 bg-[#FF6600] rounded-full" />

          <p className="text-sm sm:text-base leading-relaxed text-white/80 font-normal">
            Point of Sale from Odoo is based on a smart interface and provides extreme flexibility. Simple Odoo POS configuration to meet your precise needs. Integrated with various Odoo solutions like accounting to make payments simple and reliable. Sell your products without breaking a sweat with Odoo Point of Sale. Get everything your business needs with Odoo POS.
          </p>

          <div className="pt-2">
            <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="bg-[#FF6600] hover:bg-[#e65c00] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex gap-8 pt-4 border-t border-white/10 flex-wrap">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">
                <CountUp value="100%" />
              </div>
              <div className="text-xs text-white/60 font-medium">Offline Sync</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-0.5">
                <CountUp value="2x" />
              </div>
              <div className="text-xs text-white/60 font-medium">Checkout Speed</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">
                <CountUp value="24/7" />
              </div>
              <div className="text-xs text-white/60 font-medium">Availability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bestodoo;
