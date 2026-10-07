"use client";

import React from "react";
import { AlertCircle, Info, Shield, CheckCircle2 } from "lucide-react";

export default function NoticeBox({
  type = "info", // 'info' | 'warning' | 'security' | 'success'
  title,
  children,
  className = "",
}) {
  const styles = {
    info: {
      border: "border-blue-200",
      bg: "bg-blue-50/70",
      icon: Info,
      iconColor: "text-[#1769FF]",
      titleColor: "text-blue-900",
      textColor: "text-blue-950",
    },
    warning: {
      border: "border-amber-200",
      bg: "bg-amber-50/70",
      icon: AlertCircle,
      iconColor: "text-amber-600",
      titleColor: "text-amber-900",
      textColor: "text-amber-950",
    },
    security: {
      border: "border-indigo-200",
      bg: "bg-indigo-50/70",
      icon: Shield,
      iconColor: "text-indigo-600",
      titleColor: "text-indigo-900",
      textColor: "text-indigo-950",
    },
    success: {
      border: "border-emerald-200",
      bg: "bg-emerald-50/70",
      icon: CheckCircle2,
      iconColor: "text-emerald-600",
      titleColor: "text-emerald-900",
      textColor: "text-emerald-950",
    },
  }[type] || styles.info;

  const Icon = styles.icon;

  return (
    <div
      role="note"
      className={`rounded-2xl p-5 sm:p-6 border ${styles.border} ${styles.bg} ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${styles.iconColor}`} />
        <div className="flex-1">
          {title && (
            <div className={`font-bold text-sm sm:text-base mb-1 ${styles.titleColor}`}>
              {title}
            </div>
          )}
          <div className={`text-xs sm:text-sm leading-relaxed ${styles.textColor}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
