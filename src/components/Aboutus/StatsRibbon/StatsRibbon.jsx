"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Headphones, Users2, Globe2 } from "lucide-react";
import CounterNumber from "@/components/common/CounterNumber";

const statsList = [
  {
    val: 329,
    suffix: "+",
    raw: null,
    label: "Projects Completed",
    icon: CheckCircle2,
    sub: "Delivered on Schedule",
  },
  {
    val: null,
    suffix: "",
    raw: "24/7",
    label: "Global Support",
    icon: Headphones,
    sub: "Round-the-clock SLA",
  },
  {
    val: 50,
    suffix: "+",
    raw: null,
    label: "Team Members",
    icon: Users2,
    sub: "Engineers & Architects",
  },
  {
    val: 6,
    suffix: "+",
    raw: null,
    label: "Global Countries",
    icon: Globe2,
    sub: "International Presence",
  },
];

const StatsRibbon = () => {
  return (
    <section className="w-full bg-[#08153A] text-white relative overflow-hidden py-12 sm:py-16 border-y border-white/10">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col items-center text-center ${
                  idx > 1 ? "pt-6 lg:pt-0" : ""
                } ${idx > 0 ? "lg:pl-6" : ""}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6600] mb-3 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-2">
                  {stat.val !== null ? (
                    <CounterNumber value={stat.val} suffix={stat.suffix} duration={2} />
                  ) : (
                    stat.raw
                  )}
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsRibbon;
