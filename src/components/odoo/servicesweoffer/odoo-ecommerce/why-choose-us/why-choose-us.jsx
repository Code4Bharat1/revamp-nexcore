"use client";
import React from 'react';
import { FaAward, FaCreditCard, FaTruck, FaShareAlt, FaSms, FaStar, FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const integrations = [
    { icon: FaCreditCard, text: "Payment Gateway" },
    { icon: FaTruck, text: "Logistics" },
    { icon: FaShareAlt, text: "Social Media" },
    { icon: FaSms, text: "SMS Gateway" }
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-24 overflow-hidden border-t border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Text Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-6">
            <FaStar className="text-xs" />
            <span>Why Choose Us</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Why <span className="text-[#FF6600]">Odoo Implementers</span> as your E-commerce Website Development Company
          </h2>

          {/* Description */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/15 mb-6">
            <p className="text-white/80 leading-relaxed font-medium mb-4">
              <strong className="text-white">Odoo Implementers</strong>, a trusted <strong className="text-[#FF6600]">Gold Partner of Odoo</strong> in India, provides impeccable E-commerce Integration Services that automate your online business.
            </p>
            <p className="text-white/70 leading-relaxed text-sm font-medium">
              Payment Gateway Integrations, Logistics Integrations, Social Media Integrations, and SMS Gateway Integrations are some of the futuristic services we offer to take your business to the right prospects.
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {integrations.map((integration, idx) => {
              const Icon = integration.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FF6600]/40 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FF6600] text-white flex items-center justify-center flex-shrink-0">
                    <Icon className="text-base" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white">{integration.text}</span>
                </div>
              );
            })}
          </div>

          {/* Gold Partner Badge */}
          <div className="inline-flex items-center gap-3 bg-[#FF6600] text-white px-6 py-3 rounded-2xl shadow-lg">
            <FaAward className="text-2xl" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-90">Certified</div>
              <div className="text-base font-black">Gold Partner</div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center">
          {/* Main Image Container */}
          <div className="relative bg-white/5 rounded-3xl p-3 sm:p-4 border border-white/15 w-full max-w-lg group">
            {/* Floating Badge */}
            <div className="absolute -top-3.5 -right-3.5 bg-[#FF6600] text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <FaCheckCircle className="text-xs" />
              <span>Trusted Partner</span>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-e-commerce-service.jpg"
              alt="Odoo E-commerce Service"
              className="rounded-2xl w-full h-auto object-cover"
            />

            {/* Stats Overlay */}
            <div className="mt-4 bg-[#08153A] border border-white/15 rounded-2xl p-4 shadow-xl">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <div className="text-2xl font-black text-[#FF6600]">75+</div>
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Projects</div>
                </div>
                <div className="w-px h-8 bg-white/15"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">20K+</div>
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Hours</div>
                </div>
                <div className="w-px h-8 bg-white/15"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#FF6600]">Gold</div>
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;