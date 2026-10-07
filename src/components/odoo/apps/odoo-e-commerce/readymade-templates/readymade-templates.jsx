"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Package, Users, Download, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "@/components/odoo/apps/CountUp";

const Readymade = () => {
  const features = [
    { icon: <Package className="w-4 h-4 text-[#FF6600]" />, text: "Automated Stock Management" },
    { icon: <Users className="w-4 h-4 text-[#FF6600]" />, text: "Customer Portal" },
    { icon: <Download className="w-4 h-4 text-[#FF6600]" />, text: "Invoice Downloads" },
    { icon: <MapPin className="w-4 h-4 text-[#FF6600]" />, text: "Order Tracking" }
  ];

  return (
    <section id="templates" className="relative bg-[#08153A] py-20 lg:py-24 overflow-hidden border-t border-white/10">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Section: Image Showcase */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Image Container */}
            <div className="relative bg-[#0c1e4f] p-3 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/App images/odoo-shopify-oodu-implementers.jpg"
                alt="Odoo E-commerce Dashboard"
                className="w-full h-auto rounded-xl object-cover"
              />
              
              {/* Feature Badge on Image */}
              <div className="absolute -bottom-4 -right-2 bg-[#08153A] border border-[#FF6600]/40 text-white px-5 py-2 rounded-full shadow-xl flex items-center gap-2 font-bold text-xs sm:text-sm">
                <CheckCircle className="w-4 h-4 text-[#FF6600]" />
                <span>Ready to Deploy</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Content */}
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
            <span>Instant Setup</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            <span className="text-[#FF6600]">Readymade Templates</span> to Create your Brand's E-commerce Website
          </h2>

          <div className="w-16 h-1 bg-[#FF6600] rounded-full" />

          {/* Subheading */}
          <h3 className="text-xl sm:text-2xl font-semibold text-white/90">
            Meet Your Business Needs in a Compact Package
          </h3>

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
            A ready-to-use e-commerce platform with automated stock adjustments and reporting. An integrated e-commerce platform to simplify business management. A user-friendly customer portal to cater to the needs of your customers in no time. Furnish customers with intuitive features to download invoices and track their orders and delivery status. Run your business from anywhere with ease.
          </p>

          {/* Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#0c1e4f] border border-white/10 px-4 py-2.5 rounded-xl text-white/90 text-xs sm:text-sm font-medium"
              >
                <div>{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="bg-[#FF6600] hover:bg-[#e65c00] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Your Template</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex gap-8 pt-4 border-t border-white/10 flex-wrap">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">
                <CountUp value="50+" />
              </div>
              <div className="text-xs text-white/60 font-medium">Templates</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-0.5">
                <CountUp value="100%" />
              </div>
              <div className="text-xs text-white/60 font-medium">Customizable</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">24/7</div>
              <div className="text-xs text-white/60 font-medium">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Readymade;