"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Headphones,
  Lock,
  Sparkles,
  Users2,
} from "lucide-react";

const reasons = [
  {
    id: 1,
    num: "01",
    title: "Proven Track Record",
    description: "Over 329+ successful enterprise project deployments worldwide.",
    icon: ShieldCheck,
    bg: "bg-[#08153A] text-white",
  },
  {
    id: 2,
    num: "02",
    title: "Timely Delivery",
    description: "Strict agile delivery sprints with zero operational delays.",
    icon: Zap,
    bg: "bg-[#FF6600] text-white",
  },
  {
    id: 3,
    num: "03",
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and proactive maintenance.",
    icon: Headphones,
    bg: "bg-[#08153A] text-white",
  },
  {
    id: 4,
    num: "04",
    title: "Security & Reliability",
    description: "Bank-grade data encryption, compliance, and 99.9% system uptime.",
    icon: Lock,
    bg: "bg-[#08153A] text-white",
  },
  {
    id: 5,
    num: "05",
    title: "Innovative Solutions",
    description: "Modern cloud, AI automation, and future-proof digital architectures.",
    icon: Sparkles,
    bg: "bg-[#FF6600] text-white",
  },
  {
    id: 6,
    num: "06",
    title: "Dedicated Experts",
    description: "Skilled full-stack engineers, cloud architects, and Odoo consultants.",
    icon: Users2,
    bg: "bg-[#08153A] text-white",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#F8FAFC] text-[#08153A] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span className="text-xs sm:text-sm text-[#08153A] font-bold uppercase tracking-wider">
              Engineered for Enterprise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] tracking-tight leading-tight">
            Why Choose{" "}
            <span className="text-[#FF6600]">
              NEXCORE ALLIANCE?
            </span>
          </h2>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg} shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#08153A] mb-1.5 leading-snug group-hover:text-[#FF6600] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
