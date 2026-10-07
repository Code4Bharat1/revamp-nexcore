"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, CheckCircle2, Bell, Zap, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const EcommerceBenefits = () => {
  const benefits1 = [
    { icon: <Bell className="w-4 h-4 text-[#FF6600]" />, text: "Automated alerts" },
    { icon: <Target className="w-4 h-4 text-[#FF6600]" />, text: "Early issue detection" },
    { icon: <Zap className="w-4 h-4 text-[#FF6600]" />, text: "Quick decision making" },
  ];

  const benefits2 = [
    { icon: <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />, text: "Practical tools" },
    { icon: <DollarSign className="w-4 h-4 text-[#FF6600]" />, text: "Affordable pricing" },
    { icon: <TrendingUp className="w-4 h-4 text-[#FF6600]" />, text: "Business growth" },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-[#08153A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
            <span>CRM ADVANTAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] tracking-tight leading-tight">
            Why Choose{" "}
            <span className="text-[#FF6600]">
              Odoo CRM
            </span>
          </h2>
          <p className="text-[#08153A]/70 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Powerful tools and insights to transform your customer relationships
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Get Detailed Predictions */}
          <div className="group bg-white rounded-2xl p-7 sm:p-8 border border-[#08153A]/10 hover:border-[#FF6600]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#08153A] p-3 flex items-center justify-center shrink-0 group-hover:bg-[#FF6600] transition-colors duration-300 shadow-md">
                  <img
                    src="/images/App images/App Icons/odoo-open-source-dashboard-implementation.png"
                    alt="Detailed Predictions"
                    className="w-10 h-10 object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#08153A] leading-tight pt-2">
                  Get Detailed Predictions
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#08153A]/75 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Odoo CRM also sets up automated alerts and notifications so that you can stay on top of your sales and marketing activities. This helps you identify potential issues before they become major problems, allowing you to take corrective action quickly and efficiently. With Odoo CRM, business owners can take informed decisions quickly.
              </p>
            </div>

            {/* Benefits Pills */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#08153A]/10">
              {benefits1.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#08153A]/5 px-3 py-1.5 rounded-lg border border-[#08153A]/10 text-xs font-semibold text-[#08153A]"
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 - Reap Innumerable Benefits */}
          <div className="group bg-white rounded-2xl p-7 sm:p-8 border border-[#08153A]/10 hover:border-[#FF6600]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#08153A] p-3 flex items-center justify-center shrink-0 group-hover:bg-[#FF6600] transition-colors duration-300 shadow-md">
                  <img
                    src="/images/App images/App Icons/odoo-crm-module-benefits.png"
                    alt="Innumerable Benefits"
                    className="w-10 h-10 object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#08153A] leading-tight pt-2">
                  Reap Innumerable Benefits
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#08153A]/75 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Practical tools to implement various business functionalities. Affordable and well-curated Odoo CRM portal which does not burden your wallet and intention for investing in the implementation.
              </p>
            </div>

            {/* Benefits Pills */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#08153A]/10">
              {benefits2.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#08153A]/5 px-3 py-1.5 rounded-lg border border-[#08153A]/10 text-xs font-semibold text-[#08153A]"
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 max-w-5xl mx-auto bg-[#08153A] text-white rounded-2xl p-8 sm:p-10 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Transform Your CRM?
            </h3>
            <p className="text-white/80 text-sm sm:text-base mt-2 max-w-xl">
              Get in touch with our certified Odoo experts today and accelerate your sales growth.
            </p>
          </div>
          <Link
            href="/contactus"
            className="px-7 py-3.5 bg-[#FF6600] hover:bg-[#e05a00] text-white font-bold rounded-xl text-sm transition-colors shrink-0 shadow-lg shadow-[#FF6600]/20 flex items-center gap-2"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;