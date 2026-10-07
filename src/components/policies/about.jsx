"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  BookOpen,
  Lightbulb,
  Users,
  ArrowRight,
  CheckCircle2,
  Zap,
  Award,
  TrendingUp,
  Clock,
  Sparkles,
  Globe2,
  GraduationCap,
  Cpu,
  Building2,
  Compass,
  Briefcase,
  Play,
  Layers,
  ShieldCheck,
  Search,
  PenTool,
  Send,
  RefreshCw,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CounterNumber from "@/components/common/CounterNumber";
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

export default function About() {
  const containerRef = useRef(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About NEXCORE ALLIANCE LLP",
    url: "https://www.nexcorealliance.com/policies/about",
    description:
      "Learn more about NEXCORE ALLIANCE LLP's mission to empower students, professionals, and organizations with future-ready skills through innovative education and technology solutions.",
    publisher: {
      "@type": "Organization",
      name: "NEXCORE ALLIANCE LLP",
      url: "https://www.nexcorealliance.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.nexcorealliance.com/og-image.png",
      },
    },
    inLanguage: "en-IN",
  };

  const heroMetrics = [
    { value: 1000, suffix: "+", label: "Students Trained" },
    { value: 95, suffix: "%", label: "Success Rate" },
    { value: 50, suffix: "+", label: "Expert Mentors" },
    { value: 2011, suffix: "", label: "Since Inception" },
  ];

  const solutions = [
    {
      icon: Target,
      title: "Mission-Driven",
      items: [
        "Focused on equipping students with industry-relevant skills",
        "Dedicated to preparing learners for a successful future",
      ],
      link: "/services",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Programs",
      items: [
        "Coding & Programming",
        "Market Intelligence",
        "Growth-Centric Training",
      ],
      link: "/services",
    },
    {
      icon: Lightbulb,
      title: "Innovative Learning",
      items: [
        "Inclusive and accessible approach",
        "Results-oriented methodology",
        "Tailored solutions for industry demands",
      ],
      link: "/services",
    },
    {
      icon: Users,
      title: "Expert Support",
      items: [
        "Passionate team of mentors",
        "Ongoing guidance and support",
        "Unlock your potential for success",
      ],
      link: "/services",
    },
  ];

  const approachSteps = [
    {
      num: "01",
      icon: Search,
      title: "Understand",
      desc: "We start with real needs and industry demands.",
    },
    {
      num: "02",
      icon: PenTool,
      title: "Design",
      desc: "We create practical, future-focused programs.",
    },
    {
      num: "03",
      icon: Send,
      title: "Deliver",
      desc: "We ensure hands-on learning and expert guidance.",
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "Evolve",
      desc: "We continuously improve to stay ahead.",
    },
  ];

  const timelineMilestones = [
    {
      year: "2011",
      desc: "Nexcore Alliance begins with a vision to empower learners.",
    },
    {
      year: "2015",
      desc: "Expanded training programs and industry collaborations.",
    },
    {
      year: "2020",
      desc: "Introduced advanced technology and enterprise solutions.",
    },
    {
      year: "2024",
      desc: "Strengthened global opportunities for learners.",
    },
    {
      year: "2026",
      desc: "Continuing to build a future-ready generation.",
    },
  ];

  const whyNexcoreCards = [
    {
      icon: Cpu,
      title: "Technology + People",
      desc: "We combine advanced technology with human expertise.",
    },
    {
      icon: Zap,
      title: "Practical Innovation",
      desc: "We focus on real solutions that solve real challenges.",
    },
    {
      icon: TrendingUp,
      title: "Industry Relevance",
      desc: "Our programs align with current and future industry needs.",
    },
    {
      icon: RefreshCw,
      title: "Continuous Evolution",
      desc: "We adapt, innovate and grow with the changing world.",
    },
  ];

  const ecosystemNodes = [
    { label: "Industry Mentorship", icon: Users, pos: "top-4 left-4" },
    { label: "AI & Automation", icon: Cpu, pos: "top-4 right-4" },
    { label: "Enterprise Solutions", icon: Building2, pos: "bottom-4 right-4" },
    { label: "Skill Development", icon: BookOpen, pos: "bottom-4 left-4" },
    { label: "Global Opportunities", icon: Globe2, pos: "top-1/2 -translate-y-1/2 right-2" },
  ];

  return (
    <>
      <SEOHead
        title="About NEXCORE ALLIANCE LLP – Empowering Students & Developers"
        description="Discover NEXCORE ALLIANCE LLP's mission, vision, and ecosystem. We empower students, professionals, and organizations with future-ready skills through cutting-edge technology and education."
        keywords="About NEXCORE ALLIANCE LLP, developer community India, future-ready skills, education transformation, technology training"
        url="https://www.nexcorealliance.com/policies/about"
        schema={schema}
      />

      <PageContainer maxWidth="max-w-7xl">
        {/* Policy Navigation Tabs */}
        <PolicyNavigation currentPath="/policies/about" />

        <div ref={containerRef} className="space-y-20 sm:space-y-24">
          {/* =========================================================================
              01 HERO SECTION: Modern technology company story matching mockup
          ========================================================================== */}
          <section className="relative pt-4 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Hero Text & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1769FF] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs">
                  <Zap className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span>Transforming Education</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#060F28] tracking-tight leading-[1.1]">
                  About{" "}
                  <span className="text-[#1769FF] block sm:inline">
                    NEXCORE
                  </span>{" "}
                  <span className="text-[#0EA5E9] block sm:inline">
                    ALLIANCE LLP
                  </span>
                </h1>

                {/* Description */}
                <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
                  Empowering students, professionals and organizations with
                  future-ready skills through innovative education and technology
                  solutions.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#journey"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#1769FF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>Explore Our Journey</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/contactus"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#060F28] font-bold text-sm sm:text-base border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1769FF] flex items-center justify-center">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                    <span>Watch Our Story</span>
                  </Link>
                </div>

                {/* Verified Metric Counter Strip */}
                <div className="pt-6 border-t border-slate-200/80">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {heroMetrics.map((stat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-black text-[#060F28] tracking-tight">
                          <CounterNumber
                            value={stat.value}
                            suffix={stat.suffix}
                            duration={2}
                          />
                        </div>
                        <div className="text-xs sm:text-sm text-slate-500 font-semibold">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Holographic Globe Visual with Floating Tags */}
              <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
                <div className="relative w-full max-w-[460px] h-[360px] sm:h-[420px] md:h-[450px] flex items-center justify-center">
                  {/* Subtle Background Glow Rings */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/25 via-cyan-400/20 to-transparent blur-2xl pointer-events-none" />

                  {/* Main Globe Asset */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-slate-900 group">
                    <Image
                      src="/images/about/about_hero_globe.jpg"
                      alt="Nexcore Global Digital Learning Network"
                      fill
                      sizes="(max-width: 768px) 100vw, 460px"
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060F28]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-cyan-300">Nexcore Ecosystem</div>
                        <div className="text-xs font-bold">Global Skill Network</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#1769FF] text-[11px] font-black">2025</span>
                    </div>
                  </div>

                  {/* Floating Glass Pill Badges */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-2 z-20 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-blue-50 text-[#1769FF] flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#060F28]">
                      Education &amp; Training
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-2 z-20 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-cyan-50 text-[#0EA5E9] flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#060F28]">
                      AI &amp; Technology
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-16 -left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-2 z-20 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#060F28]">
                      Industry Ready Skills
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-3 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-2 z-20 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#060F28]">
                      Global Opportunities
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              02 WHO WE ARE: Purpose, Values & Headquarters Visual
          ========================================================================== */}
          <section className="gsap-reveal bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(6,15,40,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1769FF] block mb-2">
                    Who We Are
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#060F28] tracking-tight leading-tight">
                    We build skills today for a{" "}
                    <span className="text-[#1769FF]">brighter tomorrow.</span>
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                  Nexcore Alliance is a technology-driven education and skill
                  development organization committed to bridging the gap between
                  learning and real-world opportunities.
                </p>

                {/* 3 Pill Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-[#1769FF] flex-shrink-0" />
                    <span className="text-xs font-bold text-slate-800">
                      Practical Learning
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-cyan-50/70 border border-cyan-100 flex items-center gap-2.5">
                    <Briefcase className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                    <span className="text-xs font-bold text-slate-800">
                      Industry Alignment
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-center gap-2.5">
                    <Globe2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="text-xs font-bold text-slate-800">
                      Global Opportunities
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Nexcore Headquarters Building Visual */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 aspect-[16/10] bg-slate-900 group">
                  <Image
                    src="/images/about/nexcore_hq.jpg"
                    alt="Nexcore Alliance Corporate Headquarters Building"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Top-Right Play Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-[#1769FF] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Bottom Floating Cards matching mockup */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 bg-[#060F28]/90 backdrop-blur-md rounded-2xl p-4 text-white border border-white/10">
                      <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1">
                        Our Vision
                      </div>
                      <p className="text-2xs sm:text-xs text-slate-300 leading-relaxed">
                        A future where every learner has the skills, opportunities
                        and confidence to succeed in a rapidly changing world.
                      </p>
                    </div>

                    <div className="sm:w-44 bg-white/90 backdrop-blur-md rounded-2xl p-4 text-[#060F28] border border-white/40 flex flex-col justify-center">
                      <div className="text-2xs text-slate-500 font-semibold">
                        Driven by
                      </div>
                      <div className="text-xs font-black text-[#1769FF]">
                        Innovation
                      </div>
                      <div className="text-2xs text-slate-500 font-semibold mt-1">
                        Powered by People
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              03 WHAT WE DO: Comprehensive solutions for future-ready talent
          ========================================================================== */}
          <section className="gsap-reveal space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1769FF] block mb-2">
                  What We Do
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#060F28] tracking-tight leading-tight mb-3">
                  Comprehensive solutions for future-ready talent.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  From industry-focused training to technology-driven programs,
                  we provide end-to-end solutions that prepare learners for
                  real-world success.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-50 hover:bg-[#1769FF] text-[#1769FF] hover:text-white font-bold text-sm border border-blue-200 hover:border-transparent transition-all duration-300 shadow-xs flex-shrink-0"
              >
                <span>Explore All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(6,15,40,0.03)] hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1769FF] mb-5 group-hover:scale-105 group-hover:bg-[#1769FF] group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-bold text-[#060F28] mb-3">
                        {item.title}
                      </h3>

                      <ul className="space-y-2 mb-6">
                        {item.items.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={item.link}
                      className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#1769FF] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              04 HOW WE THINK: 4-Step Methodology Connected Flow
          ========================================================================== */}
          <section className="gsap-reveal bg-white rounded-3xl sm:rounded-4xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(6,15,40,0.03)]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769FF] block mb-2">
                How We Think
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#060F28] tracking-tight">
                A clear approach to lasting impact.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {approachSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="relative text-center p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-blue-200 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 text-[#1769FF] flex items-center justify-center mx-auto mb-4 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="font-mono text-xs font-black text-[#1769FF] mb-1">
                      {step.num}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#060F28] mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              05 OUR ECOSYSTEM: Connected Learning for a Better Future
          ========================================================================== */}
          <section className="gsap-reveal space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1769FF] block mb-2">
                  Our Ecosystem
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#060F28] tracking-tight leading-tight mb-3">
                  Connected learning for a better future.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Nexcore Alliance brings together education, technology and
                  industry expertise to create a powerful ecosystem that helps
                  learners grow, adapt and succeed.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1769FF] hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex-shrink-0"
              >
                <span>Discover Our Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Central Ecosystem Display matching mockup */}
            <div className="relative bg-gradient-to-br from-slate-900 via-[#060F28] to-[#0B1C48] rounded-3xl sm:rounded-4xl p-8 sm:p-12 overflow-hidden text-white shadow-2xl border border-white/10 min-h-[380px] flex items-center justify-center">
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,105,255,0.25)_0%,transparent_70%)] pointer-events-none" />

              {/* Central Sphere Graphic */}
              <div className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(14,165,233,0.3)]">
                <Image
                  src="/images/about/ecosystem_sphere.jpg"
                  alt="Nexcore Central Learning & Technology Core"
                  fill
                  className="object-cover animate-spin-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-4">
                  <div className="text-center">
                    <span className="font-mono text-2xs uppercase tracking-widest text-cyan-300 font-bold block">
                      Nexcore
                    </span>
                    <span className="text-xs font-black text-white">
                      CORE ALLIANCE
                    </span>
                  </div>
                </div>
              </div>

              {/* Surrounding Node Badges matching mockup */}
              <div className="absolute inset-0 p-6 pointer-events-none flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="pointer-events-auto bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-white flex items-center gap-2.5 shadow-lg">
                    <Users className="w-4 h-4 text-cyan-300" />
                    <span className="text-xs sm:text-sm font-bold">
                      Industry Mentorship
                    </span>
                  </div>

                  <div className="pointer-events-auto bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-white flex items-center gap-2.5 shadow-lg">
                    <Cpu className="w-4 h-4 text-blue-300" />
                    <span className="text-xs sm:text-sm font-bold">
                      AI &amp; Automation
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="pointer-events-auto bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-white flex items-center gap-2.5 shadow-lg">
                    <BookOpen className="w-4 h-4 text-emerald-300" />
                    <span className="text-xs sm:text-sm font-bold">
                      Skill Development
                    </span>
                  </div>

                  <div className="pointer-events-auto bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-white flex items-center gap-2.5 shadow-lg">
                    <Building2 className="w-4 h-4 text-purple-300" />
                    <span className="text-xs sm:text-sm font-bold">
                      Enterprise Solutions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              06 OUR JOURNEY: Horizontal Milestone Timeline
          ========================================================================== */}
          <section id="journey" className="gsap-reveal bg-white rounded-3xl sm:rounded-4xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(6,15,40,0.03)]">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769FF] block mb-2">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#060F28] tracking-tight">
                From a vision to a growing impact.
              </h2>
            </div>

            {/* Horizontal Timeline Bar */}
            <div className="overflow-x-auto pb-4 scrollbar-none">
              <div className="flex items-start gap-4 min-w-[720px] relative">
                {/* Horizontal line */}
                <div className="absolute top-4 left-6 right-6 h-0.5 bg-blue-100 -z-0" />

                {timelineMilestones.map((item, idx) => (
                  <div key={idx} className="flex-1 relative z-10 text-center">
                    <div className="w-8 h-8 rounded-full bg-[#1769FF] text-white font-bold text-xs flex items-center justify-center mx-auto mb-3 shadow-md">
                      {idx + 1}
                    </div>

                    <div className="font-mono text-sm sm:text-base font-black text-[#1769FF] mb-1">
                      {item.year}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed px-2">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              07 WHY NEXCORE: Growth Partner & 4 Pillars
          ========================================================================== */}
          <section className="gsap-reveal space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769FF] block mb-2">
                Why Nexcore
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#060F28] tracking-tight leading-tight">
                More than education — a{" "}
                <span className="text-[#1769FF]">growth partner.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyNexcoreCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(6,15,40,0.03)] hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1769FF] mb-5 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#060F28] mb-2">
                        {card.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {card.desc}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#1769FF] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              08 FINAL CTA: Enterprise conversion banner
          ========================================================================== */}
          <CTASection
            tag="READY TO TRANSFORM YOUR FUTURE?"
            title="Join thousands of learners who are building their future with NEXCORE ALLIANCE LLP."
            buttonText="Get Started Today"
            buttonLink="/contactus"
          />
        </div>
      </PageContainer>
    </>
  );
}