"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaCheckCircle,
  FaRocket,
  FaChartLine,
  FaArrowRight,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

const EcommerceSection = () => {
  const features = [
    { icon: FaCheckCircle, text: "Customer Satisfaction" },
    { icon: FaRocket, text: "Fast Implementation" },
    { icon: FaShieldAlt, text: "Quality Assured" },
  ];

  const benefits = [
    { icon: FaStar, text: "Industry Expertise" },
    { icon: FaCogs, text: "Technical Sophistication" },
    { icon: FaChartLine, text: "Clear Business Requirements" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden text-[#08153A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* IMAGE SECTION */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-[#08153A]/10">
              <img
                src="/images/odoo-images/odoo-erp-customizations.jpg"
                alt="Odoo ERP Customization"
                className="w-full h-auto rounded-xl object-cover"
              />

              {/* Badge */}
              <div className="absolute -top-4 -right-4 sm:top-6 sm:right-6 bg-[#08153A] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 border border-white/20">
                <FaCogs className="w-5 h-5 text-[#FF6600]" />
                <span className="font-bold text-xs">ERP Expert Customizer</span>
              </div>

              {/* Features pills */}
              <div className="flex flex-wrap gap-2 justify-center w-full pt-4">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-[#08153A]/5 px-3 py-1.5 rounded-full border border-[#08153A]/10"
                    >
                      <Icon className="text-[#FF6600] text-xs" />
                      <span className="text-xs font-semibold text-[#08153A]">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-6 text-left">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <FaCogs className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>ERP Customization</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
              Guaranteed{" "}
              <span className="text-[#FF6600]">
                Customer Satisfaction
              </span>{" "}
              with Odoo ERP Customization
            </h2>

            {/* First Description Box */}
            <div className="bg-[#08153A]/5 rounded-2xl p-5 sm:p-6 border-l-4 border-[#FF6600]">
              <p className="text-[#08153A]/80 leading-relaxed text-sm sm:text-base font-normal">
                <strong className="text-[#08153A] font-semibold">Odoo Customization</strong> is key to delivering exactly what your business needs. We at <strong className="text-[#08153A] font-semibold">Odoo Implementers</strong> deeply understand industry-specific requirements and ensure satisfaction through flawless execution.
              </p>
            </div>

            {/* Process Section */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#08153A] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#08153A] flex items-center justify-center text-white">
                  <FaRocket className="text-xs text-[#FF6600]" />
                </div>
                <span>Most Effective Process</span>
              </h3>

              <div className="bg-[#08153A]/5 rounded-2xl p-5 sm:p-6 border border-[#08153A]/10 space-y-2.5">
                <p className="text-[#08153A]/75 text-xs sm:text-sm leading-relaxed">
                  <strong className="text-[#08153A] font-semibold">Odoo Implementers</strong> have experience across multiple industry domains and deliver complete, scalable customization while defining clear business rules and execution strategies.
                </p>
                <p className="text-[#08153A]/75 text-xs sm:text-sm leading-relaxed">
                  We plan, prioritize, and execute new functionality that integrates perfectly into your ERP ecosystem.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 bg-white p-3.5 rounded-xl border border-[#08153A]/10 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FF6600] flex items-center justify-center text-white">
                      <Icon className="text-sm" />
                    </div>
                    <span className="text-xs font-semibold text-[#08153A] text-center">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link href="/servicesweoffer">
                <button className="inline-flex items-center gap-2 bg-[#FF6600] hover:opacity-90 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md transition-all cursor-pointer">
                  <FaCogs className="text-sm" />
                  <span>View All Services</span>
                  <FaArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
