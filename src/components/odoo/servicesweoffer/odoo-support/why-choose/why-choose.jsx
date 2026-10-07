import React from 'react';
import { FaHeadset, FaCheckCircle, FaClock, FaRocket, FaStar, FaAward } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { icon: FaHeadset, text: "Dedicated Team" },
    { icon: FaClock, text: "24/7 Available" },
    { icon: FaRocket, text: "Quick Response" },
    { icon: FaCheckCircle, text: "Quality Service" }
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
            Why Choose <span className="text-[#FF6600]">Odoo Implementers</span> for Odoo Support Services
          </h2>

          {/* Description */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/15 mb-6">
            <p className="text-white/80 leading-relaxed font-medium">
              <strong className="text-white">Odoo Implementers</strong> have a dedicated support team to cater to our client's needs. With Odoo being the most preferred <strong className="text-[#FF6600]">Open Source ERP</strong>, we provide utmost assistance for your Digital Business Platform and enhance your digital transformation journey. We function with your success being our priority. We never compromise quality and deliver effective support services from anywhere, any time.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FF6600]/40 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FF6600] flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="text-base" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center">
          <div className="relative bg-white/5 rounded-3xl p-3 sm:p-4 border border-white/15 w-full max-w-lg group">
            {/* Floating Badge */}
            <div className="absolute -top-3.5 -right-3.5 bg-[#FF6600] text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <FaAward className="text-xs" />
              <span>Expert Support</span>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/choose-oodu-implementers-for-odoo-support-services.webp"
              alt="Choose Odoo Implementers for Support Services"
              className="rounded-2xl w-full h-auto object-cover"
            />

            {/* Stats Overlay */}
            <div className="mt-4 bg-[#08153A] border border-white/15 rounded-2xl p-4 shadow-xl">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <div className="text-2xl font-black text-[#FF6600]">24/7</div>
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Support</div>
                </div>
                <div className="w-px h-8 bg-white/15"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">Fast</div>
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Response</div>
                </div>
                <div className="w-px h-8 bg-white/15"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#FF6600]">Expert</div>
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Team</div>
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