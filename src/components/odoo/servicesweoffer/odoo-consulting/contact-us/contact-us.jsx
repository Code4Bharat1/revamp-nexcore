"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaEnvelope, FaComments } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden text-[#08153A] border-t border-[#08153A]/10">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
          <FaComments className="w-3.5 h-3.5 text-[#FF6600]" />
          <span>We're Here to Help</span>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#08153A]/70 font-medium">
          Reach out — our experts will respond quickly
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight">
          Speak With Our{" "}
          <span className="text-[#FF6600]">
            Odoo ERP Specialists
          </span>
        </h2>

        {/* Contact Methods Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-[#08153A]">
          {[
            { icon: FaPhone, text: "Call Support" },
            { icon: FaEnvelope, text: "Mail Assistance" },
            { icon: FaWhatsapp, text: "WhatsApp Support" }
          ].map((method, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-[#08153A]/5 rounded-full border border-[#08153A]/10 text-xs sm:text-sm font-semibold"
            >
              <method.icon className="w-4 h-4 text-[#FF6600]" />
              <span>{method.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {/* WhatsApp CTA */}
          <Link href="https://wa.me/918976104646">
            <button className="px-8 py-3.5 bg-[#FF6600] hover:opacity-90 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2.5 text-sm sm:text-base cursor-pointer">
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </button>
          </Link>

          {/* Call Button */}
          <Link href="tel:+918976104646">
            <button className="px-8 py-3.5 bg-[#08153A] hover:bg-[#08153A]/90 text-white font-semibold rounded-xl transition-all flex items-center gap-2.5 text-sm sm:text-base cursor-pointer">
              <FaPhone className="w-4 h-4 text-[#FF6600]" />
              <span>Call Now</span>
            </button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-6 text-[#08153A]/70 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="text-base text-[#FF6600]">✓</span> <span>Fast Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base text-[#FF6600]">✓</span> <span>Top-tier Experts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base text-[#FF6600]">✓</span> <span>Trusted Deliverables</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
