"use client";
import React from 'react';
import { FaWhatsapp, FaArrowRight, FaComments, FaHeadset, FaCheckCircle, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="relative bg-[#08153A] py-16 sm:py-24 flex items-center justify-center overflow-hidden border-t border-b border-white/10">
      <div className="relative z-10 px-6 sm:px-12 max-w-4xl mx-auto text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-6">
          <FaComments className="text-sm" />
          <span>GET SUPPORT</span>
        </div>

        {/* Subheading */}
        <h2 className="text-white/70 text-base sm:text-xl font-medium leading-relaxed mb-3">
          Drop us a line! We are here to answer your <span className="text-white font-bold">questions</span>
        </h2>

        {/* Main Heading */}
        <h3 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
          24 × 7 <span className="text-[#FF6600]">Odoo Support Services</span>
        </h3>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white">
            <FaClock className="text-[#FF6600]" />
            <span>24/7 Available</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white">
            <FaHeadset className="text-[#FF6600]" />
            <span>Expert Team</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white">
            <FaCheckCircle className="text-[#FF6600]" />
            <span>Quick Resolution</span>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <a 
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <FaWhatsapp className="text-lg" />
              <span>Contact Us Now</span>
              <FaArrowRight className="text-xs" />
            </button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-white/70 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></div>
            <span>Always Available</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></div>
            <span>Instant Response</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/20 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></div>
            <span>Expert Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;