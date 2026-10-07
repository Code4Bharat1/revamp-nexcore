"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, Globe, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "@/components/odoo/apps/CountUp";

const Whyodoo = () => {
  const highlights = [
    { icon: <Award className="w-5 h-5 text-[#FF6600]" />, text: "Certified Professionals" },
    { icon: <Globe className="w-5 h-5 text-[#FF6600]" />, text: "Global Client Base" },
    { icon: <TrendingUp className="w-5 h-5 text-[#FF6600]" />, text: "Proven Track Record" },
    { icon: <Users className="w-5 h-5 text-[#FF6600]" />, text: "Thorough Business Analysis" }
  ];

  return (
    <section className="relative bg-[#FFFFFF] py-20 lg:py-24 overflow-hidden border-t border-[#08153A]/10">
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
          <div className="inline-flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/15 text-[#08153A] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Expert Implementation</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] leading-tight tracking-tight">
            Why <span className="text-[#FF6600]">Odoo Implementers</span> for your E-commerce Website?
          </h2>

          <div className="w-16 h-1 bg-[#FF6600] rounded-full" />

          {/* Description */}
          <p className="text-[#08153A]/70 text-base sm:text-lg leading-relaxed font-normal">
            odoo Implementers are a team of vibrant and certified professionals with a proven track record in Odoo implementation. We have clients across the globe excelling in their business with Odoo tools. odoo Implementers serve the best tools, running a thorough analysis of your business and implementing the best strategy for your brand.
          </p>

          {/* Highlight Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#08153A]/5 border border-[#08153A]/10 p-3.5 rounded-xl text-[#08153A]"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#08153A]/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  {highlight.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="bg-[#08153A] hover:bg-[#FF6600] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
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
            <div className="bg-white p-3 rounded-2xl border border-[#08153A]/10 shadow-xl">
              <img
                src="/images/App images/oodu-implementers-best-erp-service-providers-best-ecommerce-website-with-odoo.webp"
                alt="E-commerce Development"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#08153A] text-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 font-bold text-xs sm:text-sm whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
              <span>Trusted Implementation Partner</span>
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
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-10 border-t border-[#08153A]/10">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#08153A] mb-1">
              <CountUp value="500+" />
            </div>
            <div className="text-xs sm:text-sm text-[#08153A]/70 font-semibold">Global Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#FF6600] mb-1">
              <CountUp value="15+" />
            </div>
            <div className="text-xs sm:text-sm text-[#08153A]/70 font-semibold">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#08153A] mb-1">
              <CountUp value="100%" />
            </div>
            <div className="text-xs sm:text-sm text-[#08153A]/70 font-semibold">Satisfaction</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Whyodoo;