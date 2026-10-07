"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, FileText, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-20 overflow-hidden text-center">
      {/* Subtle Geometric Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6600]" />
          <span>SIMPLIFIED ODOO INVOICING</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl mx-auto">
          Make the Job Easy with{" "}
          <span className="text-[#FF6600]">
            Professional Invoicing
          </span>{" "}
          Templates
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/80 font-medium">
          Get in Touch with Our Certified ERP Architects
        </p>

        {/* Buttons Container */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FF6600] hover:bg-[#e05a00] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-[#FF6600]/25 transition-all text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contact Us on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/contactus"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-8 rounded-xl transition-all text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 text-[#FF6600]" />
            <span>Schedule Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;