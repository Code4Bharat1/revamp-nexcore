"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, FileText, RefreshCw, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";

const Whyget = () => {
  const features = [
    { icon: <Zap className="w-4 h-4 text-[#FF6600]" />, text: "Fast and secure payments" },
    { icon: <RefreshCw className="w-4 h-4 text-[#FF6600]" />, text: "Online transactions with automated follow-ups" },
    { icon: <TrendingUp className="w-4 h-4 text-[#FF6600]" />, text: "Insightful analysis" },
    { icon: <FileText className="w-4 h-4 text-[#FF6600]" />, text: "Easy conversion of quotes into invoices" },
    { icon: <RefreshCw className="w-4 h-4 text-[#FF6600]" />, text: "Recurring invoices creation" },
    { icon: <FileCheck className="w-4 h-4 text-[#FF6600]" />, text: "Contract management" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden text-[#08153A]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-[#08153A]/10 w-full max-w-lg">
              <img
                src="/images/App images/WhatsApp Image odoo.jpeg"
                alt="Odoo Invoicing Solution"
                className="w-full h-auto rounded-xl object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-[#08153A] text-white px-4 py-3 rounded-xl shadow-xl border border-white/10 flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-[#FF6600]" />
                <div>
                  <p className="text-[10px] text-white/70 font-medium">Enterprise</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Secure & Reliable</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span>ESSENTIAL INVOICING SOLUTION</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
              Why get{" "}
              <span className="text-[#FF6600]">
                Odoo Invoicing
              </span>{" "}
              implemented?
            </h2>

            {/* Features List */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 bg-white p-3.5 rounded-xl border border-[#08153A]/10 hover:border-[#FF6600]/40 shadow-sm transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#08153A] flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#08153A]/90">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Description Box */}
            <div className="bg-[#08153A]/5 p-5 rounded-xl border border-[#08153A]/10">
              <p className="text-[#08153A]/80 text-sm sm:text-base leading-relaxed font-normal">
                Companies need the right tool to quickly pull up their business history and easily reach out to customers. Send invoices and quotes promptly and avoid the rush from customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyget;