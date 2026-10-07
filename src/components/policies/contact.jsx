"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Clock,
  Zap,
  MessageCircle,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  Headphones,
  CheckCircle2,
  Send,
  Building2,
  Calendar,
  Shield,
  HelpCircle,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import {
  PageContainer,
  PolicyNavigation,
  SectionHeading,
  CTASection,
} from "./shared";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPolicy() {
  const containerRef = useRef(null);
  const [copiedKey, setCopiedKey] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Enterprise Consultation",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text, key) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please enter at least 10 characters";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate smooth processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "Enterprise Consultation",
        message: "",
      });
    }, 1000);
  };

  const contactChannels = [
    {
      id: "email",
      icon: Mail,
      title: "Email Support",
      value: "director@nexcorealliance.com",
      link: "mailto:director@nexcorealliance.com",
      actionText: "Send Email",
      responseTime: "24-48 hours",
      description:
        "Direct channel for general inquiries, business partnerships, and legal policy communications.",
    },
    {
      id: "phone-in",
      icon: Phone,
      title: "Phone Assistance (India)",
      value: "+91-8976104646",
      link: "tel:+918976104646",
      actionText: "Call Now",
      responseTime: "Mon - Sat: 9:30 AM - 6:30 PM IST",
      description:
        "Direct desk support for admissions guidance, technical training, and corporate partnerships.",
    },
    {
      id: "phone-uae",
      icon: Building2,
      title: "Regional Office (UAE)",
      value: "+971-562021489",
      link: "tel:+971562021489",
      actionText: "Call UAE Desk",
      responseTime: "Standard Gulf Business Hours",
      description:
        "Middle East regional corporate operations and enterprise solution inquiries.",
    },
    {
      id: "address",
      icon: MapPin,
      title: "Corporate Headquarters",
      value: "Off BKC, Mumbai, India 400070",
      link: "https://www.google.com/maps/place/NEXCORE+ALLIANCE+LLP/@19.0726494,72.8804081,17z",
      actionText: "Open in Maps",
      responseTime: "By appointment",
      description:
        "Our central innovation and development hub situated near Bandra Kurla Complex.",
    },
  ];

  const whatHappensNext = [
    {
      step: "01",
      title: "Submit Inquiry",
      desc: "Share your program requirements, syllabus questions, or corporate consultation needs through our structured channels.",
    },
    {
      step: "02",
      title: "Architect Review",
      desc: "Our senior technical coordinators and admission advisors review your request against current industry tracks.",
    },
    {
      step: "03",
      title: "Connect & Align",
      desc: "We schedule a dedicated consultation within 24 hours to map out a clear roadmap tailored to your objectives.",
    },
  ];

  const supportMetrics = [
    {
      value: "24/7",
      label: "Digital Support Channel",
      sublabel: "Always accessible online",
    },
    {
      value: "<24h",
      label: "Average Response Time",
      sublabel: "Rapid resolution commitment",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      sublabel: "Dedicated assistance pledge",
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact Policy & Direct Inquiries – NEXCORE ALLIANCE LLP"
        description="Get in touch with NEXCORE ALLIANCE LLP. Verified contact channels, response commitments, office locations in Mumbai and UAE, and direct consultation form."
        keywords="Contact NEXCORE ALLIANCE LLP, developer support India, corporate training contact, Odoo ERP Mumbai"
        url="https://www.nexcorealliance.com/policies/contact"
      />

      <PageContainer maxWidth="max-w-7xl">
        {/* Policy Navigation Tabs */}
        <PolicyNavigation currentPath="/policies/contact" />

        <div ref={containerRef} className="space-y-16 sm:space-y-20">
          {/* =========================================================================
              01 HERO: "Let's Connect"
          ========================================================================== */}
          <section className="relative pt-2">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1769FF] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs">
                <MessageCircle className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>Communication &amp; Support Channels</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#060F28] tracking-tight leading-tight">
                Let&apos;s <span className="text-[#1769FF]">Connect</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Have questions regarding our training programs, corporate
                alliances, or institutional policies? Reach out to our dedicated
                teams in India and the UAE.
              </p>
            </div>
          </section>

          {/* =========================================================================
              02 CONTACT CHANNELS: Email, Phone, Office, Inquiry
          ========================================================================== */}
          <section className="gsap-reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactChannels.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(6,15,40,0.03)] hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1769FF] mb-4">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        {item.responseTime}
                      </div>

                      <h3 className="text-lg font-bold text-[#060F28] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 mb-4 flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-semibold text-[#060F28] truncate">
                          {item.value}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(item.value, item.id)}
                          title="Copy to clipboard"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-[#1769FF] hover:bg-white transition-colors flex-shrink-0"
                          aria-label={`Copy ${item.title}`}
                        >
                          {copiedKey === item.id ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-[#1769FF] text-[#1769FF] hover:text-white font-bold text-xs sm:text-sm transition-colors duration-200"
                    >
                      <span>{item.actionText}</span>
                      {item.link.startsWith("http") ? (
                        <ExternalLink className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5" />
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              03 PRIMARY CONTACT FORM & 04 WHAT HAPPENS NEXT
          ========================================================================== */}
          <section className="gsap-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_4px_24px_rgba(6,15,40,0.03)]">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1769FF] block mb-1">
                  Send a Direct Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#060F28] tracking-tight">
                  Consultation &amp; Support Request
                </h2>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#060F28]">
                    Inquiry Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out. A senior coordinator from
                    Nexcore Alliance will review your details and contact you
                    within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#1769FF] text-white font-bold text-sm shadow-md"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          formErrors.firstName
                            ? "border-red-400 bg-red-50/30"
                            : "border-slate-200"
                        } text-sm text-[#060F28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769FF] transition-all`}
                      />
                      {formErrors.firstName && (
                        <p className="text-xs text-red-500 mt-1">
                          {formErrors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          formErrors.lastName
                            ? "border-red-400 bg-red-50/30"
                            : "border-slate-200"
                        } text-sm text-[#060F28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769FF] transition-all`}
                      />
                      {formErrors.lastName && (
                        <p className="text-xs text-red-500 mt-1">
                          {formErrors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          formErrors.email
                            ? "border-red-400 bg-red-50/30"
                            : "border-slate-200"
                        } text-sm text-[#060F28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769FF] transition-all`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          formErrors.phone
                            ? "border-red-400 bg-red-50/30"
                            : "border-slate-200"
                        } text-sm text-[#060F28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769FF] transition-all`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-red-500 mt-1">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#060F28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769FF] transition-all"
                    >
                      <option>Enterprise Consultation</option>
                      <option>Professional Training &amp; Upskilling</option>
                      <option>Odoo ERP Implementation</option>
                      <option>AI Automation Solutions</option>
                      <option>Policy &amp; Academic Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message or Requirements *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your requirements or inquiry in detail..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                        formErrors.message
                          ? "border-red-400 bg-red-50/30"
                          : "border-slate-200"
                      } text-sm text-[#060F28] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769FF] transition-all`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-500 mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-[#1769FF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Submit Inquiries</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: What Happens Next Storyboard */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#060F28] text-white rounded-3xl sm:rounded-4xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                      Our Commitment
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      What Happens Next?
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {whatHappensNext.map((step) => (
                      <div key={step.step} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-cyan-300 font-bold font-mono text-sm flex items-center justify-center flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base mb-1">
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
                    🔒 All submissions are encrypted and handled in compliance with
                    our strict Privacy Policy.
                  </div>
                </div>
              </div>

              {/* Verified Headquarters Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(6,15,40,0.03)] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#060F28] text-sm sm:text-base">
                      Corporate Office
                    </h4>
                    <p className="text-xs text-slate-500">
                      Off BKC, Mumbai, India 400070
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Situated near Bandra Kurla Complex (BKC) with convenient transit
                  connections. In-person meetings by confirmed appointment.
                </p>

                <a
                  href="https://www.google.com/maps/place/NEXCORE+ALLIANCE+LLP/@19.0726494,72.8804081,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769FF] hover:underline pt-1"
                >
                  <span>View Exact Location on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>

          {/* =========================================================================
              05 SUPPORT / RESPONSE INFORMATION (Trust Indicators)
          ========================================================================== */}
          <section className="gsap-reveal grid grid-cols-1 sm:grid-cols-3 gap-6">
            {supportMetrics.map((stat, idx) => (
              <div
                key={idx}
                className="text-center bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(6,15,40,0.03)]"
              >
                <div className="text-3xl sm:text-4xl font-black text-[#1769FF] mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-[#060F28] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </section>

          {/* =========================================================================
              06 FINAL CTA: Direct Action
          ========================================================================== */}
          <CTASection
            tag="START THE CONVERSATION"
            title="Ready to accelerate your technology journey with NEXCORE ALLIANCE LLP?"
            description="Our solutions architects and training coordinators are prepared to discuss your goals."
            buttonText="Reach Our Leadership"
            buttonLink="mailto:director@nexcorealliance.com"
          />
        </div>
      </PageContainer>
    </>
  );
}