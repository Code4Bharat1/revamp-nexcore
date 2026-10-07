"use client";

import React from "react";
import { Zap, CheckCircle2, Package, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Takestep = () => {
  const orderFeatures = [
    { icon: <Zap className="w-4 h-4 text-[#FF6600]" />, text: "One-Click Conversion" },
    { icon: <Package className="w-4 h-4 text-[#FF6600]" />, text: "Easy Order Tracking" },
  ];

  const communicationFeatures = [
    { icon: <Mail className="w-4 h-4 text-[#FF6600]" />, text: "Unified Channel" },
    { icon: <MessageSquare className="w-4 h-4 text-[#FF6600]" />, text: "Custom Templates" },
  ];

  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-24 overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <div className="relative bg-[#0c1e4f] p-3 sm:p-4 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/App images/Sales-Quotation.webp"
                alt="Odoo Sales Quotation Dashboard"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-[#08153A] border border-white/15 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#FF6600]" />
                <div>
                  <p className="text-[10px] text-white/60 font-medium">Enterprise</p>
                  <p className="text-xs font-bold text-white">Proven Solution</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span>NEXT-LEVEL SALES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Take a Step Ahead with{" "}
              <span className="text-[#FF6600]">
                Odoo Sales
              </span>
            </h2>

            {/* Section 1: Orders */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <div className="w-1.5 h-6 bg-[#FF6600] rounded-full" />
                Manage Your Orders Effortlessly
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                With Odoo Sales, you are one click away from converting business quotations into sales orders. You can edit and modify orders and ship orders. Automated invoice generation on ordered and delivered products with details on time, quantities and materials. Easy tracking of order flow with Odoo Sales.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {orderFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                  >
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Communication */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <div className="w-1.5 h-6 bg-[#FF6600] rounded-full" />
                Streamline Your Communication with Customers
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                A single communication channel to schedule your business activities. Odoo Sales tool facilitates the attachment of your emails with the associated customer order. NEXCORE ALLIANCE designs customizable email templates for products to communicate relevant information to customers.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {communicationFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                  >
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF6600] hover:bg-[#e05a00] text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-[#FF6600]/20"
              >
                <span>Start Managing Orders</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">1-Click</div>
                <div className="text-xs text-white/70 font-medium">Quote to Order</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#FF6600] mb-0.5">100%</div>
                <div className="text-xs text-white/70 font-medium">Automated Flow</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">Real-Time</div>
                <div className="text-xs text-white/70 font-medium">Tracking</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Takestep;