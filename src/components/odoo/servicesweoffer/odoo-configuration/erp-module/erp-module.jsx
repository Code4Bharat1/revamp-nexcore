"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaCheckCircle, FaRocket, FaChartLine } from "react-icons/fa";

const OdooModuleConfiguration = () => {
  const benefits = [
    { Icon: FaCheckCircle, text: "Scalability for growth" },
    { Icon: FaRocket, text: "Flexibility in operations" },
    { Icon: FaChartLine, text: "Feasibility assessment" }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden text-[#08153A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-[#08153A]/10">
              <img
                src="/images/odoo-images/odoo-configuration-module.jpg"
                alt="Odoo Module Configuration"
                className="w-full h-auto rounded-xl object-cover"
              />

              {/* Module badge */}
              <div className="absolute -top-4 -right-4 sm:top-6 sm:right-6 bg-[#08153A] text-white rounded-xl p-3.5 sm:p-4 shadow-xl border border-white/20 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
                  <FaCogs className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-wider font-bold">System Setup</div>
                  <div className="text-sm font-bold text-white">Module Config</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              ERP Module Configuration
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
              Easy-to-use{" "}
              <span className="text-[#FF6600]">
                Odoo Module
              </span>{" "}
              Configuration Services
            </h2>

            {/* Description */}
            <div className="space-y-4 text-sm sm:text-base text-[#08153A]/75 leading-relaxed font-normal">
              <p>
                Choosing the relevant components and aligning them for business workflow is essential
                for a smooth system. <strong className="text-[#08153A] font-semibold">Odoo Implementers</strong> helps you select the right modules
                and configure them according to real-world needs.
              </p>
              <p>
                Odoo should provide{" "}
                <strong className="text-[#08153A] font-semibold">scalability, flexibility & feasibility</strong>{" "}
                to support long-term business growth.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 bg-[#08153A]/5 rounded-xl border border-[#08153A]/10"
                >
                  <div className="w-10 h-10 bg-[#FF6600] rounded-xl flex items-center justify-center mb-2.5 text-white">
                    <benefit.Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#08153A]">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a href="/contactus">
                <button className="px-8 py-3.5 bg-[#FF6600] hover:opacity-90 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer">
                  Get Configuration Support
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OdooModuleConfiguration;
