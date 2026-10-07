"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Zap, Truck, Package, Building2, RefreshCw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Highpoints = () => {
  const features = [
    { icon: <Zap className="w-5 h-5 text-[#FF6600]" />, text: "Cutting-edge automation and advanced routes" },
    { icon: <Truck className="w-5 h-5 text-[#FF6600]" />, text: "Drop-shipping to deliver directly to customers from the supplier" },
    { icon: <Package className="w-5 h-5 text-[#FF6600]" />, text: "Cross-docking for direct transfer with no storage in between" },
    { icon: <Building2 className="w-5 h-5 text-[#FF6600]" />, text: "Multi-warehouses management with replenishment rules" }
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

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            <div className="bg-[#0c1e4f] p-3 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/App images/odoo-inventory-software-features-image.gif"
                alt="Odoo Inventory Features"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* Levitating Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#08153A] border border-[#FF6600]/40 text-white px-5 py-2 rounded-full shadow-xl flex items-center gap-2 font-bold text-xs sm:text-sm whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-[#FF6600]" />
              <span>Next-Gen Warehouse Features</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Section 1: Features */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>Advanced Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              <span className="text-[#FF6600]">Futuristic Features</span> of Odoo Inventory
            </h2>

            <div className="w-16 h-1 bg-[#FF6600] rounded-full" />

            {/* Features List with Icons */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-[#0c1e4f] border border-white/10 hover:border-[#FF6600]/30 p-3.5 rounded-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <p className="text-white/80 font-medium text-xs sm:text-sm leading-relaxed pt-1">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Traceability */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              Complete Traceability with <span className="text-[#FF6600]">Double-Entry System</span>
            </h3>

            <div className="bg-[#0c1e4f] border border-white/10 p-4 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="bg-white/10 p-2 rounded-lg text-[#FF6600]">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                  Real-time posting of inventory valuation on accounting software for an accurate balance sheet and warehouse management. Odoo Inventory Management is fully integrated with other Odoo apps for automated business flow.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF6600] hover:bg-[#e65c00] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore All Features</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highpoints;