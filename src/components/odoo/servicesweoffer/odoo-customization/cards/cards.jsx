"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaSearch,
  FaCheckCircle,
  FaCalculator,
  FaCode,
  FaFlask,
  FaTruck,
  FaBullseye,
  FaCogs,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const EcommerceBenefits = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const processSteps = [
    { icon: FaLightbulb, title: "Understanding", description: "Business Requirements" },
    { icon: FaSearch, title: "Analysis", description: "Gap between requirements & current system" },
    { icon: FaCheckCircle, title: "Feasibility Check", description: "Ensuring performance & best practice" },
    { icon: FaCalculator, title: "Cost Estimation", description: "Based on required deliverables" },
    { icon: FaCode, title: "Development", description: "Custom modules & logic building" },
    { icon: FaFlask, title: "Testing", description: "QA & UAT success validation" },
    { icon: FaTruck, title: "Delivery", description: "Deploy stable output" },
  ];

  const purposes = [
    { icon: FaBullseye, text: "Identify key business challenges that customization should solve" },
    { icon: FaCogs, text: "Solve departmental, operational & workflow-level barriers" },
    { icon: FaChartLine, text: "Prioritize areas with maximum ROI & operational impact" },
    { icon: FaUsers, text: "Deliver precise UI/UX & reporting tailored to teams" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden text-[#08153A] border-t border-[#08153A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
            <FaCogs className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Odoo Customization</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
            Tailored Solutions{" "}
            <span className="text-[#FF6600]">
              for Your Business
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* LEFT CARD - CUSTOMIZATION PROCESS */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-[#08153A]/15 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#08153A]/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#08153A] flex items-center justify-center text-white">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-implementers-for-odoo-customization-process.png"
                    alt="Process"
                    className="w-7 h-7 object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#08153A]">
                  Customization Process
                </h3>
              </div>

              <div className="space-y-2.5">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-[#08153A]/5 border border-[#08153A]/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#08153A] flex items-center justify-center text-[#FF6600] flex-shrink-0 mt-0.5">
                        <Icon className="text-xs" />
                      </div>
                      <p className="flex-1 text-[#08153A]/80 text-xs sm:text-sm leading-relaxed">
                        <strong className="text-[#08153A] font-bold">{step.title}</strong> – {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT CARD - PURPOSE LIST */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-[#08153A]/15 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#08153A]/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#08153A] flex items-center justify-center text-white">
                  <img
                    src="/images/odoo-images/odoo-icons/custom2.png"
                    alt="Purpose"
                    className="w-7 h-7 object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#08153A]">
                  Purpose of Customization
                </h3>
              </div>

              <div className="mb-5 p-4 bg-[#08153A]/5 rounded-xl border-l-4 border-[#FF6600]">
                <p className="text-[#08153A]/80 text-xs sm:text-sm leading-relaxed font-medium">
                  <strong className="text-[#08153A] font-semibold">Odoo customization</strong> is intended to shape ERP capabilities exactly to business operations and future-proof workflows.
                </p>
              </div>

              <div className="space-y-3">
                {purposes.map((purpose, index) => {
                  const Icon = purpose.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#08153A]/5 border border-[#08153A]/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                        <Icon className="text-xs" />
                      </div>
                      <p className="flex-1 text-[#08153A]/80 text-xs sm:text-sm leading-relaxed font-medium">
                        {purpose.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
