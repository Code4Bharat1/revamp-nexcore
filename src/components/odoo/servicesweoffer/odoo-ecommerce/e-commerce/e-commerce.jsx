"use client";
import React from 'react';
import { FaShoppingCart, FaRocket, FaGlobe, FaArrowRight, FaMobileAlt, FaDollarSign } from 'react-icons/fa';

const EcommerceSection = () => {
  const features = [
    { icon: FaShoppingCart, text: "Online Store" },
    { icon: FaGlobe, text: "Global Reach" },
    { icon: FaMobileAlt, text: "Mobile Ready" }
  ];

  const benefits = [
    { icon: FaRocket, text: "Boost Sales" },
    { icon: FaMobileAlt, text: "Mobile App" },
    { icon: FaDollarSign, text: "Budget-Friendly" }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 relative z-10">
        {/* Image Section */}
        <div className="relative flex justify-center order-2 lg:order-1">
          {/* Main Image Container */}
          <div className="relative bg-white rounded-3xl shadow-xl p-3 sm:p-4 border border-[#08153A]/10 w-full max-w-lg group">
            {/* Floating Badge */}
            <div className="absolute -top-3.5 -right-3.5 bg-[#FF6600] text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <FaShoppingCart className="text-xs" />
              <span>E-commerce</span>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-e-commerce-online-busniess.webp"
              alt="Odoo E-commerce Online Business"
              className="rounded-2xl w-full h-auto object-cover"
            />

            {/* Feature Pills on Image */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#08153A] text-white px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold"
                  >
                    <Icon className="text-[#FF6600] text-xs" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left order-1 lg:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-6">
            <FaShoppingCart className="text-sm" />
            <span>E-Commerce</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] mb-6 leading-tight">
            Establish a <span className="text-[#FF6600]">Powerful Online Business</span> with Odoo E-commerce
          </h2>

          {/* Description 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 border border-[#08153A]/10 border-l-4 border-l-[#FF6600]">
            <p className="text-[#08153A]/80 leading-relaxed font-medium">
              The past decade witnessed a tremendous change in customers' shopping behavior and purchase patterns. <strong className="text-[#08153A]">E-commerce services</strong> with futuristic online features influence value-added services. Boost business sales and reach more loyal customers with <strong className="text-[#FF6600]">Odoo Ecommerce</strong>.
            </p>
          </div>

          {/* Subheading */}
          <h3 className="text-xl sm:text-2xl font-black text-[#08153A] mb-4 flex items-center justify-center lg:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#08153A] text-[#FF6600] flex items-center justify-center">
              <FaRocket className="text-sm" />
            </div>
            <span>Odoo E-commerce Services</span>
          </h3>

          {/* Description 2 */}
          <div className="bg-[#08153A]/[0.02] rounded-2xl p-6 border border-[#08153A]/10 mb-6">
            <p className="text-[#08153A]/80 leading-relaxed font-medium">
              Build an authentic online store in no time and connect with your potential business prospects worldwide with <strong className="text-[#08153A]">Odoo E-commerce</strong>. <strong className="text-[#FF6600]">Odoo Implementers'</strong> mobilized and customized E-commerce mobile app development technology is feasible to work from anywhere and anytime. Bootstrapped budget for easy business expansion as demand grows.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-200 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#08153A] text-[#FF6600] flex items-center justify-center">
                    <Icon className="text-base" />
                  </div>
                  <span className="text-xs font-bold text-[#08153A] text-center">{benefit.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <a href="/servicesweoffer">
              <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <FaShoppingCart className="text-base" />
                <span>View All Services</span>
                <FaArrowRight className="text-xs" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;