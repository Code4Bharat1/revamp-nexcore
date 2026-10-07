"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, TrendingUp, Users, Target, CheckCircle2, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const BusinessGrowthPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const benefits = [
    { icon: <Users className="w-4 h-4 text-[#FF6600]" />, text: "Track Leads" },
    { icon: <Target className="w-4 h-4 text-[#FF6600]" />, text: "Convert Customers" },
    { icon: <TrendingUp className="w-4 h-4 text-[#FF6600]" />, text: "Build Loyalty" },
  ];

  const features = [
    "Skilled & certified developers",
    "Smooth implementation process",
    "Zero business disruption",
    "Step-by-step structured plan",
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
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span>Business Management Suite</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
              Successful Implementation with{" "}
              <span className="text-[#FF6600]">
                Odoo CRM Software
              </span>
            </h2>

            {/* Subheading */}
            <h3 className="text-lg sm:text-xl font-semibold text-[#08153A]/85">
              Track leads, convert them into customers and build loyal relationships
            </h3>

            {/* Benefits Pills */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#08153A]/5 px-3.5 py-2 rounded-xl border border-[#08153A]/10 text-xs sm:text-sm font-semibold text-[#08153A]"
                >
                  <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    {benefit.icon}
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-[#08153A]/75 text-sm sm:text-base leading-relaxed font-normal">
              Odoo CRM implementation can make your business path grow exponentially. Odoo Implementers Private Limited functions with a team of skilled and certified developers who ensure that the entire Odoo CRM implementation process remains smooth. We strive to give the best solutions to our clients without disturbing their business operations.
            </p>

            <p className="text-[#08153A]/75 text-sm sm:text-base leading-relaxed font-normal">
              As a prime step, our team sketches a step-by-step plan for a successful Odoo CRM implementation to execute the implementation in the most structured way.
            </p>

            {/* Features Checklist */}
            <div className="space-y-2.5 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0" />
                  <span className="text-sm font-medium text-[#08153A]/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#08153A] hover:bg-[#FF6600] text-white font-bold rounded-xl text-sm transition-colors shadow-md"
              >
                <span>Consult Our CRM Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Section - Image/Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-[#08153A]/10">
              <img
                src="/images/App images/odoo-crm-software-implementation.webp"
                alt="Odoo CRM Software Implementation"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  aria-label="Play video demo"
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FF6600] hover:bg-[#e05a00] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-[#08153A] text-white px-4 py-3 rounded-xl shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#FF6600] rounded-lg flex items-center justify-center text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-white/70 font-medium">Certified CRM</p>
                  <p className="text-xs sm:text-sm font-bold text-white">Interactive Demo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#08153A]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-2xl overflow-hidden w-full max-w-5xl shadow-2xl border border-white/20">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#08153A] hover:bg-[#FF6600] text-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video iframe */}
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/KxZAdEGpYAw?si=Mw132zCufWYtX-o2&autoplay=1"
                title="Odoo CRM Implementation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BusinessGrowthPage;