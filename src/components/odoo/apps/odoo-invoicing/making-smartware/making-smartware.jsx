"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, ArrowRight, Award } from "lucide-react";
import Link from "next/link";

const Makingsmart = () => {
  const features = [
    { icon: <Zap className="w-4 h-4 text-[#FF6600]" />, text: "Automated Invoicing" },
    { icon: <TrendingUp className="w-4 h-4 text-[#FF6600]" />, text: "Organized Workflow" },
    { icon: <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />, text: "Expert Implementation" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden text-[#08153A]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span>Making Smartware Work for Your Business</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
              <span className="text-[#FF6600]">
                Odoo Invoicing
              </span>{" "}
              to Manage your Business Effortlessly
            </h2>

            {/* Subheading */}
            <h3 className="text-lg sm:text-xl font-semibold text-[#08153A]/85 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#FF6600] rounded-full" />
              Effortlessly Manage Your Business With Odoo
            </h3>

            {/* Description */}
            <p className="text-[#08153A]/75 text-sm sm:text-base leading-relaxed font-normal">
              Turn to NEXCORE ALLIANCE to have the right Odoo Invoicing installed. We are active in Odoo Invoicing implementation for many years now. Our certified implementers are well-equipped to handle the complex installation procedure. Our team runs a thorough analysis of your business process to implement reliable Odoo Invoicing.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 bg-[#08153A]/5 px-3.5 py-2 rounded-xl border border-[#08153A]/10 text-xs sm:text-sm font-semibold text-[#08153A]"
                >
                  <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#08153A] hover:bg-[#FF6600] text-white font-bold rounded-xl text-sm transition-colors shadow-md"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-[#08153A]/10">
              <img
                src="/images/App images/odoo-invoicing-development-manage-your-busniess.webp"
                alt="Odoo Invoicing Management"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-[#08153A] text-white px-4 py-3 rounded-xl shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-white/70 font-medium">Enterprise</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Trusted by 500+ Businesses</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Makingsmart;