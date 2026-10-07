"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaComments, FaChartLine, FaRocket } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden text-[#08153A] border-t border-[#08153A]/10">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
          <FaComments className="w-3.5 h-3.5 text-[#FF6600]" />
          <span>Connect With Us</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
          Talk To Our{" "}
          <span className="text-[#FF6600]">
            Odoo Experts
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#08153A]/70 font-normal max-w-2xl mx-auto">
          Get reliable & tailored ERP guidance from certified professionals
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <div className="flex items-center gap-2 bg-[#08153A]/5 px-4 py-2 rounded-full border border-[#08153A]/10 text-xs sm:text-sm font-semibold text-[#08153A]">
            <FaRocket className="text-[#FF6600]" />
            <span>Fast Implementation</span>
          </div>

          <div className="flex items-center gap-2 bg-[#08153A]/5 px-4 py-2 rounded-full border border-[#08153A]/10 text-xs sm:text-sm font-semibold text-[#08153A]">
            <FaChartLine className="text-[#FF6600]" />
            <span>Business Growth</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <a
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:opacity-90 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer">
              <FaWhatsapp className="text-xl" />
              <span>Contact Us on WhatsApp</span>
              <FaArrowRight className="text-xs" />
            </button>
          </a>
        </div>

        {/* Footer tag */}
        <p className="text-[#08153A]/60 text-xs pt-2 font-medium">
          Available 24/7 • Quick Response • Expert Guidance
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
