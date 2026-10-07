"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from "lucide-react";

export default function ContactPanel({
  title = "Questions or Inquiries?",
  description = "Our administrative team is here to assist with any policy inquiries or questions.",
  className = "",
}) {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <div
      className={`bg-gradient-to-br from-blue-50/80 via-white to-slate-50 rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-[0_4px_20px_rgba(23,105,255,0.04)] mb-8 ${className}`}
    >
      <div className="max-w-3xl">
        <h3 className="text-xl sm:text-2xl font-black text-[#060F28] mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Item */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1769FF] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-2xs font-bold uppercase tracking-wider text-slate-500">
                  Official Email
                </div>
                <a
                  href="mailto:director@nexcorealliance.com"
                  className="text-xs sm:text-sm font-semibold text-[#060F28] hover:text-[#1769FF] transition-colors truncate block"
                >
                  director@nexcorealliance.com
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy("director@nexcorealliance.com", "email")}
              title="Copy email"
              className="p-2 rounded-lg text-slate-400 hover:text-[#1769FF] hover:bg-slate-50 transition-colors flex-shrink-0"
              aria-label="Copy email address"
            >
              {copiedKey === "email" ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone Item */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-2xs font-bold uppercase tracking-wider text-slate-500">
                  Direct Assistance
                </div>
                <a
                  href="tel:+918976104646"
                  className="text-xs sm:text-sm font-semibold text-[#060F28] hover:text-[#1769FF] transition-colors truncate block"
                >
                  +91-8976104646
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy("+91-8976104646", "phone")}
              title="Copy phone"
              className="p-2 rounded-lg text-slate-400 hover:text-[#1769FF] hover:bg-slate-50 transition-colors flex-shrink-0"
              aria-label="Copy phone number"
            >
              {copiedKey === "phone" ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
