"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, Users, Zap, CheckCircle2, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const OdooCRM = () => {
  const features = [
    { icon: <MessageSquare className="w-4 h-4 text-[#FF6600]" />, text: "Real-time Messaging" },
    { icon: <Users className="w-4 h-4 text-[#FF6600]" />, text: "Lead Management" },
    { icon: <Target className="w-4 h-4 text-[#FF6600]" />, text: "Online Campaigns" },
    { icon: <TrendingUp className="w-4 h-4 text-[#FF6600]" />, text: "Business Growth" },
  ];

  const benefits = [
    "Technology-driven customer experience",
    "Effective relationship building",
    "Scalable and flexible platform",
    "Enhanced business performance",
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
          {/* Left Section: CRM Dashboard Gif Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <div className="relative bg-[#0c1e4f] p-3 sm:p-4 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/App images/odoo-crm-software-development.gif"
                alt="Odoo CRM Dashboard"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-[#08153A] border border-white/15 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-[#FF6600] rounded-full animate-pulse" />
                <div>
                  <p className="text-[10px] text-white/60 font-medium">Live Dashboard</p>
                  <p className="text-xs font-bold text-white">Interactive View</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span>Powerful CRM Solution</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Odoo CRM Software to{" "}
              <span className="text-[#FF6600]">
                Manage Leads
              </span>{" "}
              and Real-time Messages
            </h2>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
              Odoo CRM offers a technology-driven approach to enhance customer experience and cater to their needs effortlessly. With real-time messaging and effective online campaigns, it helps grab the attention of leads and build reliable relationships with customers. Utilize its features to leverage key resources and augment your business operations.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white hover:border-[#FF6600]/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Subheading */}
            <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
              Redefine{" "}
              <span className="text-[#FF6600]">
                Scalability and Flexibility
              </span>{" "}
              with Odoo CRM
            </h3>

            {/* Additional Description */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
              A cutting-edge, user-friendly Odoo CRM portal to enhance business performance and productivity. Odoo CRM solution fits the needs of enterprise solutions and transforms your business operation services.
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-2 pt-1">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0" />
                  <span className="text-sm font-medium text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF6600] hover:bg-[#e05a00] text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-[#FF6600]/20"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OdooCRM;