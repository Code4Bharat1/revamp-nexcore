"use client";

import React from "react";
import Link from "next/link";
import {
  Info,
  Mail,
  FileText,
  Shield,
  RotateCcw,
  Ban,
  Truck,
  Tag,
} from "lucide-react";

const policyLinks = [
  {
    name: "Terms & Conditions",
    href: "/policies/termsandcondition",
    icon: FileText,
  },
  {
    name: "Privacy Policy",
    href: "/policies/privacy",
    icon: Shield,
  },
  {
    name: "Refund Policy",
    href: "/policies/refund-policy",
    icon: RotateCcw,
  },
  {
    name: "Cancellation Policy",
    href: "/policies/cancellation-policy",
    icon: Ban,
  },
  {
    name: "Delivery Policy",
    href: "/policies/delivery-policy",
    icon: Truck,
  },
  {
    name: "Product & Pricing",
    href: "/policies/product-pricing",
    icon: Tag,
  },
];

export default function PolicyNav({ currentPath = "/policies/termsandcondition" }) {
  return (
    <nav
      aria-label="Legal and Company Policy Navigation"
      className="mb-8 sm:mb-10 w-full"
    >
      {/* Deterministic responsive layout: 2 cols on mobile, 3 cols on tablet, 6 cols on desktop */}
      <div
        className="w-full max-w-7xl mx-auto p-1.5 sm:p-2 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {policyLinks.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 rounded-xl text-xs sm:text-xs md:text-sm font-semibold transition-colors duration-150 text-center ${
                isActive
                  ? "bg-[#1769FF] text-white shadow-sm shadow-blue-500/25"
                  : "text-slate-600 hover:text-[#1769FF] hover:bg-blue-50/80"
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${
                  isActive ? "text-white" : "text-slate-500"
                }`}
              />
              <span className="whitespace-nowrap">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
