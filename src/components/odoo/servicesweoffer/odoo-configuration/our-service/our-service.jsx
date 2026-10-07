"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaCheckCircle,
  FaRocket,
  FaChartLine,
  FaArrowRight,
  FaHeadset,
  FaTools,
} from "react-icons/fa";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: FaCogs,
      title: "Odoo Configuration Service",
      description:
        "Configuration does not simply mean setting up a few system parameters — maintaining and updating the ERP system regularly is equally important.",
      highlight:
        "Odoo Implementers offers excellent customer care services round the clock.",
      footer:
        "Our technical team caters to your business needs and delivers the best business approach.",
      benefits: [
        { icon: FaHeadset, text: "24/7 Support" },
        { icon: FaTools, text: "Expert Team" },
        { icon: FaRocket, text: "Fast Delivery" },
      ],
    },
    {
      id: 2,
      icon: FaChartLine,
      title: "Need for Odoo ERP Configuration",
      description:
        "Initial setup alone is not enough to meet all business needs. Factors such as strategy, growth, and new users trigger configuration needs.",
      highlight:
        "Restructuring ensures improved productivity and better ERP user experience.",
      footer: "These factors influence how your business uses ERP efficiently.",
      benefits: [
        { icon: FaCheckCircle, text: "Scalability" },
        { icon: FaRocket, text: "Flexibility" },
        { icon: FaChartLine, text: "Growth Ready" },
      ],
    },
  ];

  return (
    <section className="relative bg-[#08153A] py-16 sm:py-20 md:py-24 overflow-hidden text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-[#FF6600]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              Our Services
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Best Odoo Configuration{" "}
              <span className="text-[#FF6600]">
                Services
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
              Achieve <strong className="text-white font-semibold">scalable</strong>, <strong className="text-white font-semibold">flexible</strong>, and <strong className="text-white font-semibold">performance-driven</strong> ERP configuration for your enterprise.
            </p>
          </div>

          <Link href="/servicesweoffer">
            <button className="px-6 py-3 bg-[#FF6600] hover:opacity-90 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer">
              <span>View All Services</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/15 hover:border-[#FF6600]/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Icon area */}
                  <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF6600] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed text-xs sm:text-sm">{service.description}</p>

                  <div className="text-white/90 font-medium leading-relaxed text-xs sm:text-sm bg-white/5 p-4 rounded-xl border-l-2 border-[#FF6600]">
                    {service.highlight}
                  </div>

                  <p className="text-white/70 leading-relaxed text-xs sm:text-sm">{service.footer}</p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-3 gap-2.5 pt-6 border-t border-white/10 mt-6">
                  {service.benefits.map((benefit, idx) => {
                    const BenefitIcon = benefit.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/5 border border-white/10"
                      >
                        <BenefitIcon className="text-base text-[#FF6600]" />
                        <span className="text-[11px] font-semibold text-white/90 text-center">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
