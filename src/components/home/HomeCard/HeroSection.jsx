"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const HeroSection = () => {
  const heroContentRef = useRef(null);

  useEffect(() => {
    if (!heroContentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroContentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.1 }
      );
    }, heroContentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center relative overflow-hidden pt-28 sm:pt-32 lg:pt-28 pb-16 sm:pb-20 bg-[#08153A]"
    >
      {/* ── Background Image & Directional Gradient Blending ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/background-hero.png"
          alt="Nexcore Alliance Enterprise Technology Ecosystem"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-right opacity-35 lg:opacity-45"
        />
        {/* Horizontal Directional Gradient: Deep #08153A on Left for High-Contrast Typography, Image Depth on Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08153A] via-[#08153A]/90 to-[#08153A]/40 lg:via-[#08153A]/80 lg:to-transparent" />

        {/* Vertical Transition Gradients for Seamless Top (Navbar) and Bottom (Next Section) Flow */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#08153A] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08153A] to-transparent" />
      </div>

      {/* ── Main Hero Content ── */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 z-10">
        <div
          ref={heroContentRef}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-12 xl:gap-16 w-full"
        >

          {/* Left Column: Eyebrow, Main Headline, Description & CTAs */}
          <div className="max-w-2xl xl:max-w-3xl flex-1 text-white">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-orange-600 uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
              Co-Pilot of your company
            </div>

            {/* Main Headline */}
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.08] mb-6 text-white" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              <span className="block">Your Business Partner</span>
              <span className="block">to Solve</span>
              <span className="block text-orange-600">Real Business Problems.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
              We aren't just coders; we are your strategic partners. From diagnosing cost leaks to deploying AI, Odoo, and Web systems, we build what your business actually needs to thrive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contactus">
                <button className="bg-[#ff6600] hover:bg-[#e65c00] text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-all duration-200 shadow-md shadow-orange-500/20 cursor-pointer">
                  Talk to Us
                </button>
              </Link>
              <Link href="#services">
                <button className="bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-all duration-200 cursor-pointer">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Refined Enterprise Video Panel */}
          <div className="flex-1 w-full max-w-md lg:max-w-[440px] xl:max-w-[480px] flex flex-col items-center lg:items-end justify-center self-center">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a163d] border border-white/10 shadow-2xl shadow-black/40">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Nexcore Alliance Enterprise Technology Showcase"
                className="w-full h-auto object-cover select-none"
              >
                <source src="/NEXCORE_ALLIANCE_logo_animation_202608241009_gwr_video_mvp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;