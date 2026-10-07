"use client";
import React from 'react';
import { FaShoppingCart, FaCreditCard, FaTruck, FaPlug, FaBullhorn, FaPalette, FaBox, FaDesktop, FaCheckCircle } from 'react-icons/fa';

const EcommerceBenefits = () => {
  const benefits = [
    { icon: FaShoppingCart, text: "Easy Tracking of Orders" },
    { icon: FaCreditCard, text: "Simplified Payment Process" },
    { icon: FaTruck, text: "Efficient Logistics System" },
    { icon: FaPlug, text: "Robust Third-Party Integration" },
    { icon: FaBullhorn, text: "Enhanced Online Promotion" }
  ];

  const storeFeatures = [
    { icon: FaDesktop, title: "Intuitive User Interface", description: "Rich shopping experience for customers" },
    { icon: FaPalette, title: "Attractive Templates", description: "Tailor-made for your business" },
    { icon: FaBox, title: "Perfect Product Galleries", description: "Showcase products and services" },
    { icon: FaDesktop, title: "Interactive UI Designs", description: "Maximum customer comfort" }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-4">
            <FaCheckCircle className="text-sm" />
            <span>E-commerce Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] mb-4">
            Powerful Features <span className="text-[#FF6600]">for Your Online Store</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Key Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#08153A] rounded-2xl flex items-center justify-center text-[#FF6600]">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-e-commerce-service-benefits.png"
                  alt="Key Benefits"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#08153A] leading-tight">
                Key Benefits of Odoo E-commerce
              </h3>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#08153A]/[0.02] border border-[#08153A]/10 hover:border-[#FF6600]/30 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white">
                      <Icon className="text-sm" />
                    </div>
                    <p className="text-[#08153A] text-sm font-bold">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2 - Artistic Store Features */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#08153A]/10 hover:border-[#FF6600]/40 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#08153A] rounded-2xl flex items-center justify-center text-[#FF6600]">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-artistic-e-commerce-store.png"
                  alt="Artistic Store"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#08153A] leading-tight">
                Artistic E-commerce Store
              </h3>
            </div>

            {/* Store Features List */}
            <div className="space-y-3">
              {storeFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#08153A]/[0.02] border border-[#08153A]/10 hover:border-[#FF6600]/30 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white mt-0.5">
                      <Icon className="text-sm" />
                    </div>
                    <div>
                      <p className="text-[#08153A] text-sm font-bold mb-0.5">{feature.title}</p>
                      <p className="text-[#08153A]/70 text-xs font-medium">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;