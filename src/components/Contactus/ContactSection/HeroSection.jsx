"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight, FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Headphones, Globe2, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const containerRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactCardsRef = useRef(null);
  const branchCardRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const quickStatsRef = useRef(null);
  const bgImageRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.5 },
      });

      tl.fromTo(
        breadcrumbRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.3 },
          "-=0.1"
        )
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.2"
        )
        .fromTo(
          contactCardsRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 },
          "-=0.2"
        )
        .fromTo(
          branchCardRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.2"
        )
        .fromTo(
          ctaButtonsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.2"
        )
        .fromTo(
          quickStatsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const branchOffices = [
    { code: "QA", name: "Qatar" },
    { code: "AE", name: "UAE" },
    { code: "OM", name: "Oman" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "KW", name: "Kuwait" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[620px] lg:min-h-[700px] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 bg-white overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative organic background wave lines on the left */}
      <div className="absolute top-0 left-0 bottom-0 w-full lg:w-2/3 pointer-events-none z-0 overflow-hidden">
        {/* Soft radial blue glow */}
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl opacity-70" />

        {/* Subtle SVG wave art */}
        <svg
          className="absolute left-0 top-1/4 h-[420px] w-[360px] opacity-25 text-blue-300 pointer-events-none"
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 100 C120 180, 200 80, 280 250 C360 420, 180 500, 300 650"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
          <path
            d="M-100 150 C80 230, 220 140, 240 320 C260 500, 140 560, 220 700"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Right-Side Integrated Office Background Image with Seamless Gradient Blend */}
      <div
        ref={bgImageRef}
        className="absolute top-0 right-0 w-full lg:w-[58%] h-full pointer-events-none z-0 overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/nexcore.png"
            alt="Nexcore Alliance Office Signboard and Headquarters"
            fill
            priority
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-top lg:object-[center_20%]"
          />

          {/* Left-to-Right Soft Feather Gradient to blend seamlessly with the left white content */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/75 md:via-white/50 lg:via-white/30 to-transparent" />

          {/* Top-to-Bottom Soft Gradient for navbar header blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90 lg:to-white/80" />

          {/* Solid Left Blend for wide desktop */}
          <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Content: Breadcrumb, Badge, Headline, Subtitle */}
        <div className="max-w-2xl lg:max-w-3xl pt-2 sm:pt-4">
          {/* Breadcrumb Navigation */}
          <div ref={breadcrumbRef} className="flex items-center gap-2 text-sm text-slate-500 mb-5 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="text-slate-400 font-bold">&gt;</span>
            <span className="text-[#060F28] font-bold">Contact</span>
          </div>

          {/* Small Label / Badge */}
          <div ref={badgeRef} className="mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 border border-orange-200/90 rounded-full backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-[#FF6A00] bg-clip-text text-transparent">
                Let&apos;s Connect &amp; Collaborate
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div ref={headingRef} className="mb-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#060F28] tracking-tight leading-[1.12]">
              Let&apos;s Connect &amp;
              <br />
              Build{" "}
              <span className="text-[#1769FF]">What&apos;s</span>{" "}
              <span className="text-[#FF6A00]">Next</span>
            </h1>
          </div>

          {/* Supporting Description */}
          <div ref={descriptionRef} className="max-w-xl">
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              We&apos;re here to discuss your ideas, answer your questions, and explore how Nexcore Alliance can help you achieve your business goals.
            </p>
          </div>
        </div>

        {/* 4 Contact Cards Grid: 2 per row (2 top, 2 bottom matching About Us) */}
        <div
          ref={contactCardsRef}
          suppressHydrationWarning
          className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl lg:max-w-3xl gap-3.5 sm:gap-4 mt-8 sm:mt-10 w-full"
        >
          {/* Card 1: India */}
          <a
            href="https://wa.me/918976104646"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3.5 p-4 sm:p-4.5 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-200/60 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-[#1677FF] flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <FiPhone className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0 pr-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-0.5">
                IN <span className="text-slate-800 font-bold capitalize">India</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-[#060F28] group-hover:text-blue-600 transition-colors">
                +91 8976104646
              </p>
            </div>
            <div className="absolute top-3.5 right-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <FiArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Card 2: Email */}
          <a
            href="mailto:director@nexcorealliance.com"
            className="group relative flex items-center gap-3.5 p-4 sm:p-4.5 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-200/60 hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-[#FF6A00] flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <FiMail className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0 pr-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-0.5">
                Email
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#060F28] group-hover:text-orange-600 transition-colors">
                director@nexcorealliance.com
              </p>
            </div>
            <div className="absolute top-3.5 right-3.5 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <FiArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Card 3: UAE */}
          <a
            href="https://wa.me/+971562021489"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3.5 p-4 sm:p-4.5 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-200/60 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-[#1677FF] flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <FiPhone className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0 pr-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-0.5">
                AE <span className="text-slate-800 font-bold capitalize">UAE</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-[#060F28] group-hover:text-blue-600 transition-colors">
                +971 562021489
              </p>
            </div>
            <div className="absolute top-3.5 right-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <FiArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Card 4: Head Office */}
          <a
            href="https://maps.app.goo.gl/DzBt4BdL9BH4MRga9"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3.5 p-4 sm:p-4.5 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-200/60 hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-[#FF6A00] flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <FiMapPin className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0 pr-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-0.5">
                Head Office
              </div>
              <p className="text-xs font-semibold text-slate-600 leading-snug group-hover:text-orange-600 transition-colors">
                White House, Office No. 1A &amp; 2, Kurla West, Mumbai, India
              </p>
            </div>
            <div className="absolute top-3.5 right-3.5 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <FiArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Branch Offices Card Section (Matching Exact User Reference) */}
        <div ref={branchCardRef} className="mt-8 max-w-2xl">
          <div className="p-6 bg-[#F4F8FF]/80 backdrop-blur-sm border border-[#D5E5FF] rounded-3xl shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 text-[#1769FF]">
              <FiGlobe className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
                BRANCH OFFICES
              </span>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {branchOffices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl px-4 py-3 border border-slate-100 shadow-2xs flex items-center gap-2.5 text-slate-800 text-sm font-semibold hover:border-blue-200 transition-colors"
                >
                  <span className="text-slate-500 font-bold">{office.code}</span>
                  <span>{office.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Primary CTA Action Buttons */}
        <div ref={ctaButtonsRef} className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href="https://wa.me/918976104646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1769FF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>WhatsApp Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="mailto:director@nexcorealliance.com"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-slate-50 border-2 border-[#1769FF] text-[#1769FF] font-bold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <FiMail className="w-5 h-5" />
            <span>Send Email</span>
          </a>
        </div>

        {/* 3 Quick Stats / Highlights Under Buttons */}
        <div ref={quickStatsRef} className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-700">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <Headphones className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-bold">24/7 Support</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700">
            <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
              <Globe2 className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-bold">Global Reach</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-bold">Live Chat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;