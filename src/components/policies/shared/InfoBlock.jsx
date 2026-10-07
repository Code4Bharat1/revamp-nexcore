"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function InfoBlock({
  number,
  icon: Icon,
  title,
  content,
  highlight,
  suffix,
  points = [],
  dataTypes = [],
  securityFeatures = [],
  className = "",
}) {
  return (
    <article
      className={`group relative bg-white hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-blue-300 shadow-[0_4px_24px_rgba(6,15,40,0.03)] hover:shadow-xl transition-all duration-300 mb-6 last:mb-0 ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Left Icon Badge */}
        {Icon && (
          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1769FF] shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
        )}

        <div className="flex-1 w-full">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {number && (
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100/70 text-[#1769FF]">
                {String(number).padStart(2, "0")}
              </span>
            )}
            <h3 className="text-lg sm:text-xl font-bold text-[#060F28]">
              {title}
            </h3>
          </div>

          {/* Main Description */}
          {content && (
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              {content}{" "}
              {highlight && (
                <strong className="text-[#1769FF] font-bold">{highlight}</strong>
              )}{" "}
              {suffix}
            </p>
          )}

          {/* Bulleted Points if present */}
          {points.length > 0 && (
            <ul className="space-y-2.5 mb-4">
              {points.map((pt, idx) => {
                const text = typeof pt === "string" ? pt : pt.text;
                const ptHighlight = typeof pt === "object" ? pt.highlight : "";
                const ptSuffix = typeof pt === "object" ? pt.suffix : "";

                return (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1769FF] flex-shrink-0 mt-0.5" />
                    <span>
                      {text}{" "}
                      {ptHighlight && (
                        <strong className="text-[#060F28] font-bold">
                          {ptHighlight}
                        </strong>
                      )}{" "}
                      {ptSuffix}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Data types grid if present */}
          {dataTypes.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-200/80">
              {dataTypes.map((dt, idx) => {
                const DtIcon = dt.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/70"
                  >
                    {DtIcon && <DtIcon className="w-4 h-4 text-[#1769FF]" />}
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {dt.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Security Features if present */}
          {securityFeatures.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-200/80">
              {securityFeatures.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/70"
                >
                  <div className="text-sm font-bold text-[#060F28] mb-1">
                    {sec.title}
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    {sec.desc}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
