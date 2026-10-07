"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaRocket, FaCheckCircle } from "react-icons/fa";

const SecondContactSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden text-[#08153A] border-t border-[#08153A]/10">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
          <FaRocket className="w-3.5 h-3.5 text-[#FF6600]" />
          <span>Ready to Get Started?</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
          All Your Business Needs{" "}
          <span className="text-[#FF6600]">
            Under One Roof
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#08153A]/70 font-medium">
          Get Started With Odoo Today
        </p>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#08153A]">
          {["Free Consultation", "Expert Support", "Quick Implementation"].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
              <FaCheckCircle className="w-4 h-4 text-[#FF6600]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {/* WhatsApp CTA */}
          <Link href="https://wa.me/918976104646">
            <button className="px-8 py-3.5 bg-[#FF6600] hover:opacity-90 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2.5 text-sm sm:text-base cursor-pointer">
              <FaWhatsapp className="w-5 h-5" />
              <span>Contact Us on WhatsApp</span>
            </button>
          </Link>

          {/* Secondary CTA */}
          <Link href="/servicesweoffer">
            <button className="px-8 py-3.5 bg-[#08153A] hover:bg-[#08153A]/90 text-white font-semibold rounded-xl transition-all text-sm sm:text-base cursor-pointer">
              View All Services
            </button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-6 text-[#08153A]/70 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2"><span className="text-base text-[#FF6600]">✓</span> <span>24/7 Support</span></div>
          <div className="flex items-center gap-2"><span className="text-base text-[#FF6600]">✓</span> <span>500+ Projects</span></div>
          <div className="flex items-center gap-2"><span className="text-base text-[#FF6600]">✓</span> <span>98% Success Rate</span></div>
        </div>
      </div>
    </section>
  );
};

export default SecondContactSection;
