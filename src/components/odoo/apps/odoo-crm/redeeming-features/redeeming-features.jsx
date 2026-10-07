"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, BarChart3, Layout, MessageSquare, Activity, CheckCircle2, Star } from "lucide-react";

const Redeeming = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-[#FF6600]" />,
      title: "Fast Business Management",
      description: "Innumerable tools for effective operations",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#FF6600]" />,
      title: "Insightful Data",
      description: "Make smart business decisions",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#FF6600]" />,
      title: "Real-time Reports",
      description: "Analyze business performance",
    },
    {
      icon: <Layout className="w-5 h-5 text-[#FF6600]" />,
      title: "Custom Dashboard",
      description: "Review activities and plan ahead",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#FF6600]" />,
      title: "Real-time Messaging",
      description: "Enhanced customer collaboration",
    },
    {
      icon: <Activity className="w-5 h-5 text-[#FF6600]" />,
      title: "Transaction Tracking",
      description: "Monitor business transactions instantly",
    },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden text-[#08153A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-[#08153A]/10 w-full">
              <img
                src="/images/App images/odoo-crm-software-analysis.webp"
                alt="Odoo CRM Software Analysis"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Verified Feature Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-[#08153A] text-white px-4 py-3 rounded-xl shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-white/70 font-medium">Enterprise</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Core Capabilities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span>POWERFUL FEATURES</span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
              Redeeming Features of{" "}
              <span className="text-[#FF6600]">
                Odoo CRM
              </span>
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-[#08153A]/10 hover:border-[#FF6600]/40 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#08153A] flex items-center justify-center mb-2.5 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-[#08153A] text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#08153A]/70 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Description Box */}
            <div className="bg-[#08153A]/5 rounded-xl p-6 border border-[#08153A]/10 space-y-3">
              <p className="text-[#08153A]/80 text-sm sm:text-base leading-relaxed font-normal">
                Odoo CRM provides innumerable tools for fast and effective business management. With Odoo CRM, you can access insightful data that enables you to make smart business decisions. The real-time reports analyzing business performance, available in Odoo CRM, provide you with up-to-date information that can help you to identify areas where you need to improve.
              </p>
              <p className="text-[#08153A]/80 text-sm sm:text-base leading-relaxed font-normal">
                With a custom dashboard, provided by Odoo CRM, you can review your activities and plan your next move. The real-time messaging feature of Odoo CRM enhances collaboration with customers, allowing you to stay in touch and keep them updated on your progress.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {["Fast Management", "Smart Decisions", "Real-time Data"].map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-lg border border-[#08153A]/10 shadow-sm text-xs font-semibold text-[#08153A]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Redeeming;