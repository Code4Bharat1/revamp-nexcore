"use client";

import React from "react";
import CounterNumber from "@/components/common/CounterNumber";

export default function MetricStrip({
  metrics = [],
  className = "",
  columns = "grid-cols-2 sm:grid-cols-4",
}) {
  return (
    <div className={`grid ${columns} gap-4 sm:gap-6 mb-12 ${className}`}>
      {metrics.map((item, index) => {
        const Icon = item.icon;
        // Parse numerical value if present
        const numericVal =
          typeof item.value === "number"
            ? item.value
            : parseFloat(item.value?.toString().replace(/[^0-9.]/g, ""));
        const suffix =
          item.suffix ||
          (typeof item.value === "string"
            ? item.value.replace(/[0-9.]/g, "")
            : "");

        return (
          <div
            key={index}
            className="group relative bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(6,15,40,0.04)] border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {Icon && (
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1769FF] mb-3 group-hover:scale-105 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
            )}

            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#060F28] tracking-tight mb-1 flex items-baseline">
              {!isNaN(numericVal) && numericVal > 0 ? (
                <CounterNumber value={numericVal} suffix={suffix} duration={2} />
              ) : (
                <span>{item.value}</span>
              )}
            </div>

            <div className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">
              {item.label}
            </div>

            {item.sublabel && (
              <div className="text-2xs sm:text-xs text-slate-500 font-medium">
                {item.sublabel}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
