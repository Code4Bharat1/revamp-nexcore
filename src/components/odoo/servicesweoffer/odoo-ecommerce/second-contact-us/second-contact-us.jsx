"use client";
import React from 'react';
import { FaWhatsapp, FaArrowRight, FaChartLine, FaCheckCircle, FaShoppingCart } from 'react-icons/fa';

const SecondcontactSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="relative z-10 px-6 sm:px-12 max-w-4xl mx-auto text-center">
        <div className="bg-[#08153A] rounded-3xl p-8 sm:p-14 border border-white/10">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-6">
            <FaShoppingCart className="text-sm" />
            <span>E-COMMERCE SUCCESS</span>
          </div>

          {/* Subheading */}
          <h2 className="text-white/70 text-base sm:text-xl font-medium leading-relaxed mb-3">
            E-commerce: The <span className="text-white font-bold">success mantra</span> of your business growth
          </h2>

          {/* Main Heading */}
          <h3 className="text-white font-black text-2xl sm:text-3xl lg:text-4xl leading-tight mb-8">
            Get in Touch for a <span className="text-[#FF6600]">Successful Online Business</span>
          </h3>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white">
              <FaChartLine className="text-[#FF6600]" />
              <span>Business Growth</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white">
              <FaShoppingCart className="text-[#FF6600]" />
              <span>Online Success</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white">
              <FaCheckCircle className="text-[#FF6600]" />
              <span>Proven Strategy</span>
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
              <span>E-commerce Experts</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></div>
              <span>Growth Strategy</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></div>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondcontactSection;