"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Target, Zap, Shield, Clock, Star, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const GeneralConfiguration = () => {
  const reasons = [
    {
      icon: <Award className="w-5 h-5 text-[#FF6600]" />,
      title: "Renowned Partner",
      description: "Top Odoo CRM Implementation",
    },
    {
      icon: <Users className="w-5 h-5 text-[#FF6600]" />,
      title: "Customer-Centric",
      description: "Perfectly designed portal",
    },
    {
      icon: <Target className="w-5 h-5 text-[#FF6600]" />,
      title: "Outstanding Implementation",
      description: "Tailored for your business",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#FF6600]" />,
      title: "Latest Technology",
      description: "Modern business solutions",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#FF6600]" />,
      title: "Process-Driven",
      description: "Client-friendly approach",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#FF6600]" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
    },
  ];

  const highlights = [
    "Certified Odoo CRM partner",
    "Top-notch user experience",
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
          {/* Left Section - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span>Why Choose Us</span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Why{" "}
              <span className="text-[#FF6600]">
                NEXCORE ALLIANCE
              </span>{" "}
              for Odoo CRM?
            </h2>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#FF6600]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    {reason.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-2.5 bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#FF6600]" />
                <span>Additional Benefits</span>
              </h3>
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0" />
                  <p className="text-white/80 text-xs sm:text-sm font-medium">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF6600] hover:bg-[#e05a00] text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-[#FF6600]/20"
              >
                <span>Get Started</span>
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
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative bg-[#0c1e4f] p-3 sm:p-4 rounded-2xl border border-white/10 shadow-2xl w-full">
              <img
                src="/images/App images/odoo-open-source-crm-implementation.webp"
                alt="Odoo CRM Implementation"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -right-4 sm:top-4 sm:right-4 bg-[#08153A] text-white px-4 py-3 rounded-xl shadow-xl border border-white/15 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-white/60 font-medium">Enterprise</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Certified Partner</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GeneralConfiguration;