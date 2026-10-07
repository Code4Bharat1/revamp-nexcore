"use client";

import React from "react";

export default function SectionHeading({
  tag,
  number,
  title,
  highlight,
  description,
  centered = false,
  className = "",
}) {
  return (
    <div
      className={`mb-8 sm:mb-10 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2.5 mb-3 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        {number && (
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/80 text-[#1769FF] font-black text-xs">
            {number}
          </span>
        )}
        {tag && (
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1769FF]">
            {tag}
          </span>
        )}
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#060F28] tracking-tight leading-tight mb-3">
        {title}{" "}
        {highlight && (
          <span className="text-[#1769FF]">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
