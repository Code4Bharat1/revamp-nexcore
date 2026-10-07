"use client";

import React from "react";
import { Check } from "lucide-react";

export default function Timeline({
  steps = [],
  layout = "vertical", // 'vertical' | 'horizontal'
  className = "",
}) {
  if (layout === "horizontal") {
    return (
      <div className={`overflow-x-auto pb-4 scrollbar-none ${className}`}>
        <div className="flex items-start gap-4 min-w-[650px] relative">
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="absolute top-5 left-6 right-6 h-0.5 bg-blue-200 -z-0"
          />

          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 relative z-10 text-center">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[#1769FF] text-[#1769FF] font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-sm">
                {step.year || idx + 1}
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#060F28] mb-1">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Vertical timeline
  return (
    <div className={`relative pl-8 sm:pl-10 space-y-8 ${className}`}>
      {/* Vertical connector line */}
      <div
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-3.5 sm:left-4 w-0.5 bg-blue-200 -z-0"
      />

      {steps.map((step, idx) => (
        <div key={idx} className="relative group">
          {/* Node Icon/Number */}
          <div className="absolute -left-8 sm:-left-10 top-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#1769FF] text-[#1769FF] font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs group-hover:bg-[#1769FF] group-hover:text-white transition-colors">
            {step.icon ? <step.icon className="w-3.5 h-3.5" /> : idx + 1}
          </div>

          <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-2xs font-bold uppercase tracking-wider text-[#1769FF]">
                Step {idx + 1}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#060F28]">
                {step.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {step.description}
            </p>
            {step.highlight && (
              <div className="mt-2 text-xs font-semibold text-[#1769FF]">
                {step.highlight}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
