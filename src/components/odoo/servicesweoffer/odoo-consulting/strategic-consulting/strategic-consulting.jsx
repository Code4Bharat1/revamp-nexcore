"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCheckCircle, FaAward } from "react-icons/fa";

const Strategic = () => {
  const benefits = [
    "Latest Odoo versions & updates",
    "Business efficiency enhancement",
    "Expert consulting guidance",
    "Custom implementation strategies",
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden text-[#08153A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-[#08153A]/10">
              <img
                src="/images/odoo-images/odoo-service-strategic-consulting-partner.png"
                alt="Strategic Consulting"
                className="w-full h-auto rounded-xl object-cover"
              />

              {/* Verified Partner Badge */}
              <div className="absolute -bottom-5 -right-5 sm:bottom-6 sm:right-6 bg-[#08153A] text-white rounded-xl p-4 shadow-xl border border-white/20 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
                  <FaAward className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">500+</div>
                  <div className="text-xs text-white/70 font-medium">Projects Delivered</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              Strategic Consulting
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
              Strategic Odoo{" "}
              <span className="text-[#FF6600]">
                Consulting Partners
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#08153A]/75 leading-relaxed font-normal">
              Odoo (<strong className="text-[#08153A] font-semibold">On-Demand Open Object</strong>) is a dynamic ERP platform designed to enhance
              operational efficiency. Our expert consultants ensure you stay aligned with the latest Odoo releases and maximize
              business performance through tailored implementation strategies.
            </p>

            {/* Benefits */}
            <div className="space-y-3 pt-2">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 bg-[#08153A]/5 rounded-xl border border-[#08153A]/10 text-xs sm:text-sm font-medium text-[#08153A]"
                >
                  <FaCheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a href="/contactus">
                <button className="px-8 py-3.5 bg-[#FF6600] hover:opacity-90 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer">
                  Learn More About Our Approach
                </button>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Strategic;
