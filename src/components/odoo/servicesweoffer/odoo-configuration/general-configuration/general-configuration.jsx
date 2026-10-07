"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaToggleOn,
  FaCodeBranch,
  FaStream,
  FaCogs,
  FaCheckCircle,
  FaStar,
  FaTasks,
  FaAward,
} from "react-icons/fa";

const GeneralConfiguration = () => {
  const configModes = [
    {
      id: 1,
      icon: FaToggleOn,
      title: "ON / OFF / OPTIONAL",
      description: "A function can be enabled, disabled, or kept optional as needed.",
    },
    {
      id: 2,
      icon: FaCodeBranch,
      title: "XOR Mode",
      description: "Only one workflow path can be chosen based on set conditions.",
    },
    {
      id: 3,
      icon: FaStream,
      title: "OR Mode",
      description: "Allows zero, one, or multiple optional activities.",
    },
    {
      id: 4,
      icon: FaTasks,
      title: "AND Mode",
      description: "Indicates mandatory parallel flows and dependencies.",
    },
  ];

  const benefits = [
    { icon: FaCheckCircle, text: "Expert Implementation" },
    { icon: FaStar, text: "Gold Partner Excellence" },
    { icon: FaAward, text: "Certified & Recognized" },
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-20 md:py-24 overflow-hidden text-white border-t border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Title Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-xs font-semibold tracking-wider text-[#FF6600] uppercase mb-4">
                <FaCogs className="w-3.5 h-3.5 text-[#FF6600]" />
                <span>CONFIGURATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                General Configuration{" "}
                <span className="text-[#FF6600]">
                  Modes
                </span>
              </h2>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {configModes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <div
                    key={mode.id}
                    className="relative bg-white/5 rounded-2xl p-5 border border-white/15 hover:border-[#FF6600]/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FF6600] mb-3 flex items-center justify-center text-white">
                      <Icon className="text-lg" />
                    </div>

                    <h4 className="font-bold text-sm mb-1.5 text-white">
                      {mode.title}
                    </h4>

                    <p className="text-white/70 text-xs leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Why Choose Box */}
            <div className="bg-white/5 rounded-2xl p-6 sm:p-7 border border-white/15">
              <h3 className="text-xl font-bold text-white mb-2">
                Why Choose{" "}
                <span className="text-[#FF6600]">
                  Odoo Implementers
                </span>
              </h3>

              <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-4">
                Configuration is a crucial part of{" "}
                <strong className="text-white font-semibold">Odoo Implementation</strong>, aligning platform settings to business requirements. As an official{" "}
                <span className="text-[#FF6600] font-semibold">Odoo Gold Partner</span>, we ensure proper structuring, parameters, and workflow logic aligned to your operational model.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {benefits.map((benefit, idx) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
                    >
                      <BenefitIcon className="text-[#FF6600] w-3.5 h-3.5" />
                      <span className="text-xs font-semibold text-white/90">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative">
            <div className="relative bg-white/5 rounded-2xl p-3 sm:p-4 border border-white/15">
              <img
                src="/images/odoo-images/odoo-configuration-services.webp"
                alt="Odoo Configuration Services"
                className="w-full h-auto rounded-xl object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 sm:top-6 sm:right-6 bg-[#08153A] text-white px-4 py-3 rounded-xl border border-[#FF6600]/40 flex items-center gap-2.5 shadow-xl">
                <FaCogs className="w-5 h-5 text-[#FF6600]" />
                <span className="font-bold text-xs">ERP Config Expert</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GeneralConfiguration;
