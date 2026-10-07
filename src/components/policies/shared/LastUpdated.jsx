"use client";

import React from "react";
import { Clock } from "lucide-react";

export default function LastUpdated({ date = "January 2025", className = "" }) {
  return (
    <div
      className={`text-center pt-8 border-t border-slate-200/80 mt-10 ${className}`}
    >
      <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
        <Clock className="w-3.5 h-3.5 text-[#1769FF]" />
        <span>Official Policy Revision: {date}</span>
      </div>
    </div>
  );
}
