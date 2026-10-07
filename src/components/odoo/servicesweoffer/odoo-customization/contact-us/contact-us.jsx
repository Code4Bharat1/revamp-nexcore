"use client";
import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaArrowRight, FaComments, FaRocket, FaCheckCircle, FaCogs } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="relative bg-[#08153A] py-16 sm:py-20 md:py-24 overflow-hidden text-white border-t border-white/10">
      <div className="relative z-10 px-6 sm:px-8 max-w-5xl mx-auto text-center space-y-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-[#FF6600] px-4 py-1.5 rounded-md border border-white/20 text-xs font-semibold tracking-wider uppercase">
          <FaComments className="text-sm" />
          <span>GET IN TOUCH</span>
        </div>

        {/* Subheading */}
        <p className="text-white/70 text-base sm:text-lg font-normal">
          We're here to answer your questions
        </p>

        {/* Main Title */}
        <h3 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
          Customize Odoo ERP Software{" "}
          <br className="hidden sm:block" />
          <span className="text-[#FF6600]">to fit your Business Perfectly</span>
        </h3>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <FaRocket className="text-[#FF6600] text-xs" />
            <span className="text-white text-xs sm:text-sm font-semibold">Tailored Solutions</span>
          </div>
          
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <FaCogs className="text-[#FF6600] text-xs" />
            <span className="text-white text-xs sm:text-sm font-semibold">Expert Team</span>
          </div>

          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <FaCheckCircle className="text-[#FF6600] text-xs" />
            <span className="text-white text-xs sm:text-sm font-semibold">Proven Results</span>
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
              <span>Chat with Us on WhatsApp</span>
              <FaArrowRight className="text-xs" />
            </button>
          </a>
        </div>

        {/* Trust Bar */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-white/70 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="text-[#FF6600]">✓</span>
            <span>Instant Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF6600]">✓</span>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF6600]">✓</span>
            <span>Certified Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
