import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaArrowRight, FaRocket, FaCheckCircle, FaCogs } from 'react-icons/fa';

const SecondcontactSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden text-[#08153A] border-t border-[#08153A]/10">
      <div className="relative z-10 px-6 sm:px-8 max-w-4xl mx-auto text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#08153A]/5 text-[#FF6600] px-4 py-1.5 rounded-md border border-[#08153A]/15 text-xs font-semibold tracking-wider uppercase">
          <FaRocket className="text-xs text-[#FF6600]" />
          <span>PERFECT FOR YOU</span>
        </div>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl font-medium text-[#08153A]/70">
          Amazing Software Designed for Your <strong className="text-[#08153A] font-semibold">Business!</strong>
        </h2>

        {/* Main Heading */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#08153A]">
          Discover More <span className="text-[#FF6600]">With Us!</span>
        </h3>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <div className="flex items-center gap-2 bg-[#08153A]/5 px-4 py-2 rounded-full border border-[#08153A]/10 text-xs sm:text-sm font-semibold text-[#08153A]">
            <FaRocket className="text-[#FF6600]" />
            <span>Custom Solutions</span>
          </div>

          <div className="flex items-center gap-2 bg-[#08153A]/5 px-4 py-2 rounded-full border border-[#08153A]/10 text-xs sm:text-sm font-semibold text-[#08153A]">
            <FaCogs className="text-[#FF6600]" />
            <span>Full Support</span>
          </div>

          <div className="flex items-center gap-2 bg-[#08153A]/5 px-4 py-2 rounded-full border border-[#08153A]/10 text-xs sm:text-sm font-semibold text-[#08153A]">
            <FaCheckCircle className="text-[#FF6600]" />
            <span>Proven Results</span>
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
      </div>
    </section>
  );
};

export default SecondcontactSection;
