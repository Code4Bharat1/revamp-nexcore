"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaRocket, FaCheckCircle, FaCogs } from "react-icons/fa";

const SecondContactSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden text-[#08153A] border-t border-[#08153A]/10">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
          <FaRocket className="w-3.5 h-3.5 text-[#FF6600]" />
          <span>READY TO BEGIN?</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
          Hassle-Free Odoo{" "}
          <span className="text-[#FF6600]">
            Customization Services
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-sm sm:text-base text-[#08153A]/70 font-normal max-w-xl mx-auto">
          Get tailored ERP enhancements from certified Odoo experts
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#08153A]/5 border border-[#08153A]/10 rounded-full text-xs font-semibold text-[#08153A]">
            <FaCheckCircle className="text-[#FF6600]" /> <span>Quick Setup</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#08153A]/5 border border-[#08153A]/10 rounded-full text-xs font-semibold text-[#08153A]">
            <FaCogs className="text-[#FF6600]" /> <span>Custom Solutions</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#08153A]/5 border border-[#08153A]/10 rounded-full text-xs font-semibold text-[#08153A]">
            <FaRocket className="text-[#FF6600]" /> <span>Expert Support</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:opacity-90 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer">
              <FaWhatsapp className="text-xl" />
              <span>Contact Us Now</span>
              <FaArrowRight className="text-xs" />
            </button>
          </a>

          <Link href="/servicesweoffer">
            <button className="px-8 py-3.5 bg-[#08153A] hover:bg-[#08153A]/90 text-white font-semibold text-sm sm:text-base rounded-xl transition-all cursor-pointer">
              View All Services
            </button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="pt-2 flex flex-wrap justify-center gap-6 text-[#08153A]/70 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <span className="text-[#FF6600]">✓</span> Instant Response
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#FF6600]">✓</span> Free Consultation
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#FF6600]">✓</span> Certified Experts
          </span>
        </div>
      </div>
    </section>
  );
};

export default SecondContactSection;
