"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { 
  Laptop, 
  Layers, 
  Bot, 
  Cloud, 
  Sparkles, 
  ArrowRight, 
  Star, 
  Clock, 
  ThumbsUp 
} from "lucide-react";
import gsap from "gsap";
import CounterNumber from "@/components/common/CounterNumber";

const HeroSection = () => {
  const containerRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const serviceCardsRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const quickStatsRef = useRef(null);
  const bgImageRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.fromTo(
        breadcrumbRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.9, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          bgImageRef.current,
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 1.1 },
          "-=0.7"
        )
        .fromTo(
          serviceCardsRef.current?.children || [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ctaButtonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          quickStatsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 4 Core Capability Cards
  const capabilities = [
    {
      code: "WEB & APP",
      title: "Web & Mobile Apps",
      icon: Laptop,
      color: "bg-[#08153A] text-[#FF6600] border border-[#FF6600]/30",
      accent: "text-slate-200",
      href: "/services",
    },
    {
      code: "ERP",
      title: "Odoo ERP Solutions",
      icon: Layers,
      color: "bg-[#08153A] text-white border border-white/20",
      accent: "text-slate-200",
      href: "/servicesweoffer",
    },
    {
      code: "AI & ML",
      title: "AI Solutions & Automation",
      icon: Bot,
      color: "bg-[#FF6600] text-white border border-[#FF6600]/40",
      accent: "text-slate-200",
      href: "/aisolutions",
    },
    {
      code: "DEVOPS",
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "bg-[#08153A] text-white border border-white/20",
      accent: "text-slate-200",
      href: "/services",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[720px] lg:min-h-[820px] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 bg-[#08153A] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} 
      />

      {/* Subtle deep ambient glow behind left text */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-blue-900/30 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#FF6600]/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Right-Side Custom Hero Image with Seamless Editorial Blend */}
      <div
        ref={bgImageRef}
        className="absolute top-0 right-0 w-full lg:w-[62%] h-full pointer-events-none z-0 overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/about-hero.jpg"
            alt="NEXCORE ALLIANCE Software Engineering & Digital Transformation Team"
            fill
            priority
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 62vw"
            className="object-cover object-center lg:object-[center_40%]"
          />

          {/* Left-to-Right Seamless Gradient Blend into Deep Navy Canvas */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08153A] via-[#08153A]/90 sm:via-[#08153A]/75 md:via-[#08153A]/50 lg:via-[#08153A]/30 to-transparent" />

          {/* Additional Solid Feathered Fade for wide desktop */}
          <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-44 bg-gradient-to-r from-[#08153A] to-transparent" />

          {/* Top-to-Bottom Soft Gradient for navbar header blend & bottom edge blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08153A]/90 via-transparent to-[#08153A]" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Content: Breadcrumb, Badge, Headline, Subtitle */}
        <div className="max-w-2xl lg:max-w-3xl pt-2 sm:pt-4">
          
          {/* Breadcrumb Navigation */}
          <div ref={breadcrumbRef} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-5 font-medium">
            <Link href="/" className="hover:text-[#FF6600] transition-colors">
              Home
            </Link>
            <span className="text-slate-600 font-bold">&gt;</span>
            <span className="text-white font-semibold">About Us</span>
          </div>

          {/* Senior Editorial Eyebrow Badge */}
          <div ref={badgeRef} className="mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-200">
                Empowering Digital Innovation
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div ref={headingRef} className="mb-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Empowering
              <br />
              Businesses with{" "}
              <span className="text-[#FF6600]">Innovation</span>
            </h1>
          </div>

          {/* Supporting Description */}
          <div ref={descriptionRef} className="max-w-xl">
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              At <span className="font-semibold text-white">NEXCORE ALLIANCE LLP</span>, we specialize in delivering innovative IT solutions that empower businesses to navigate the evolving digital landscape with ease, scalability, and efficiency.
            </p>
          </div>
        </div>

        {/* 4 Feature Capability Cards Grid: 2 per row (2 top, 2 bottom) */}
        <div
          ref={serviceCardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl lg:max-w-3xl gap-3 sm:gap-4 mt-8 sm:mt-10 w-full"
        >
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group relative flex items-center gap-3.5 p-4 bg-[#06102C]/85 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#FF6600]/50 hover:bg-[#0A1A44] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/30"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0 pr-4">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {item.code}
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF6600] transition-colors truncate">
                    {item.title}
                  </p>
                </div>
                <div className="absolute top-3.5 right-3.5 text-slate-500 group-hover:text-[#FF6600] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <FiArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Primary CTA Action Buttons */}
        <div ref={ctaButtonsRef} className="flex flex-wrap items-center gap-4 mt-8">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#FF6600] hover:bg-[#ea580c] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contactus"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base rounded-xl backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Talk to Experts</span>
          </Link>
        </div>

        {/* 3 Quick Stats / Highlights Under Buttons */}
        <div
          ref={quickStatsRef}
          className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mt-8 pt-6 border-t border-white/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#FF6600] flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight">
                <CounterNumber value={500} suffix="+" duration={2} />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Projects Done</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#FF6600] flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight">
                <CounterNumber value={15} suffix="+" duration={1.8} />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Years Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#FF6600] flex items-center justify-center flex-shrink-0">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight">
                <CounterNumber value={98} suffix="%" duration={2.2} />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;