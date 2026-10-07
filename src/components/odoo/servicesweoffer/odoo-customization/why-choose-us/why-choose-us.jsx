import React from 'react';
import { FaAward, FaCheckCircle, FaLightbulb, FaCogs, FaStar, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const highlights = [
    { icon: FaCheckCircle, text: "Consistent Delivery" },
    { icon: FaAward, text: "Client Satisfaction" },
    { icon: FaLightbulb, text: "Problem Solving" },
    { icon: FaCogs, text: "Industry Expertise" }
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-20 md:py-24 overflow-hidden text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#FF6600] px-4 py-1.5 rounded-md border border-white/20 text-xs font-semibold tracking-wider uppercase">
              <FaStar className="text-xs" />
              <span>Why Choose Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Why Choose{" "}
              <span className="text-[#FF6600]">
                Odoo Implementers
              </span>{" "}
              for Odoo Customisation
            </h2>

            {/* Description */}
            <div className="bg-white/5 rounded-2xl p-5 sm:p-6 border-l-4 border-[#FF6600]">
              <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
                <strong className="text-white font-semibold">Odoo Implementers</strong> has a track record of successful delivery and client satisfaction. Our experienced team has mastered <span className="text-[#FF6600] font-semibold">Odoo Customization services</span> while solving real-world business challenges through innovation, expertise, and a customer-first approach.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight, idx) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white flex-shrink-0">
                      <Icon className="text-xs" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-white/90">{highlight.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative bg-white/5 rounded-2xl p-3 sm:p-4 border border-white/15 w-full">
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 sm:top-6 sm:right-6 bg-[#08153A] text-white px-4 py-2.5 rounded-xl shadow-xl z-20 border border-[#FF6600]/40 flex items-center gap-2">
                <FaUsers className="text-sm text-[#FF6600]" />
                <span className="font-bold text-xs">Expert Team</span>
              </div>

              <img
                src="/images/odoo-images/odoo-implementers-for-odoo-customization.webp"
                alt="Odoo Implementers Customization"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
