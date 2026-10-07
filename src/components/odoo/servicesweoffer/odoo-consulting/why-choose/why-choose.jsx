"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaAward, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    "Analyzing and mapping the software requirements",
    "Provide solutions by evaluating the problem and difficulties",
    "Develop highly functional qualitative system modifications",
  ];

  const stats = [
    { Icon: FaAward, number: "Gold", label: "Odoo Partner" },
    { Icon: FaUsers, number: "500+", label: "Happy Clients" },
    { Icon: FaStar, number: "98%", label: "Success Rate" },
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-20 md:py-24 overflow-hidden text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-[#FF6600]">
              <FaAward className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>Why Choose Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Why Choose{" "}
              <span className="text-[#FF6600]">
                Odoo Implementers
              </span>{" "}
              for Consulting
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-normal">
              <strong className="text-white font-semibold">Odoo Implementers</strong> is a proud and official{" "}
              <span className="text-[#FF6600] font-semibold">Gold Partner of Odoo</span>, delivering cost-efficient
              enterprise ERP solutions with specialization in customization, consultation,
              implementation and full-cycle support.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-xl p-4 border border-white/15 text-center"
                >
                  <div className="w-9 h-9 bg-[#FF6600] rounded-lg flex items-center justify-center mx-auto mb-2 text-white">
                    <stat.Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-[#FF6600]" />
                What Do We Do?
              </h3>

              <div className="space-y-2.5">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs sm:text-sm text-white/90"
                  >
                    <FaCheckCircle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Block */}
          <div className="relative">
            <div className="relative bg-white/5 rounded-2xl p-3 sm:p-4 border border-white/15">
              <img
                src="/images/odoo-images/odoo-implemeters-for-consulting.webp"
                alt="Why Choose Us"
                className="w-full h-auto rounded-xl object-cover"
              />

              {/* Gold Partner Badge */}
              <div className="absolute -top-4 -right-4 sm:top-6 sm:right-6 bg-[#08153A] text-white rounded-xl p-3.5 sm:p-4 shadow-xl border border-[#FF6600]/40 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
                  <FaAward className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">Official</div>
                  <div className="text-sm font-bold text-white">Gold Partner</div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-6 bg-[#08153A] text-white rounded-xl p-3.5 sm:p-4 shadow-xl border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-white/70 font-medium whitespace-nowrap">
                  Years Experience
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
