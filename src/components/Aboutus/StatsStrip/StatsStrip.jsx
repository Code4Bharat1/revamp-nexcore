"use client";
import React from "react";
import CountUp from "../../common/CountUp";
import { stats } from "../Values/ValuesData";

const StatsStrip = () => {
  return (
    <div className="w-full bg-[#08153a] py-10 sm:py-12 md:py-16 border-y border-white/10 overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-1.5 items-center justify-center text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                <CountUp value={stat.number} />
              </div>
              <p className="text-xs sm:text-sm md:text-base font-medium text-slate-400 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;
