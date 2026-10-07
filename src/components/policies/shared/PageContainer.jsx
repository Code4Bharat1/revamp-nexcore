"use client";

import React from "react";

export default function PageContainer({
  children,
  className = "",
  maxWidth = "max-w-7xl",
}) {
  return (
    <div
      className={`relative min-h-screen bg-[#F7F9FC] text-[#060F28] px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-x-hidden selection:bg-[#1769FF] selection:text-white ${className}`}
    >
      {/* Subtle ambient lighting blurs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-96 right-10 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-32 left-10 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl -z-10"
      />

      <div className={`relative z-10 ${maxWidth} mx-auto`}>{children}</div>
    </div>
  );
}
