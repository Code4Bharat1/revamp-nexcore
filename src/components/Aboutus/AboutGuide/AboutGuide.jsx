"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Users,
  Award,
  BadgeCheck,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Rocket,
  Clock,
  ThumbsUp,
} from "lucide-react";
import CounterNumber from "@/components/common/CounterNumber";

const guideItems = [
  {
    id: 1,
    num: "01",
    title: "Our mission and vision for business growth worldwide",
    description:
      "We empower enterprises across global markets with robust, scalable software architectures, agile implementation processes, and transformative digital strategies that guarantee long-term competitive advantage.",
    icon: Globe,
  },
  {
    id: 2,
    num: "02",
    title: "What makes us a trusted tech partner in IT solutions",
    description:
      "Our transparent workflows, unwavering SLA adherence, verified engineering rigor, and collaborative client-first mindset ensure zero friction from concept to production.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    num: "03",
    title: "The core principles that drive our innovation and client satisfaction",
    description:
      "Integrity, technical mastery, continuous evolution, and direct business accountability. We measure our achievements strictly through the tangible metrics of our clients' growth.",
    icon: Handshake,
  },
  {
    id: 4,
    num: "04",
    title: "Explore our wide range of digital services and offerings",
    description:
      "From full-stack web and mobile application engineering to comprehensive Odoo ERP deployment, intelligent AI workflows, and resilient cloud infrastructure.",
    icon: Lightbulb,
  },
  {
    id: 5,
    num: "05",
    title: "Meet the dedicated minds behind our technology solutions",
    description:
      "Our multi-disciplinary team comprises seasoned enterprise architects, certified Odoo consultants, full-stack developers, and AI engineers working collaboratively.",
    icon: Users,
  },
  {
    id: 6,
    num: "06",
    title: "Committed to delivering excellence across all industries",
    description:
      "Demonstrated domain expertise delivering tailored solutions across Retail, Healthcare, Logistics, FinTech, E-Commerce, and Manufacturing sectors.",
    icon: Award,
  },
  {
    id: 7,
    num: "07",
    title: "Certified & recognized experts in software and digital development",
    description:
      "Strict adherence to international coding benchmarks, modern architectural design patterns, data privacy regulations, and enterprise-grade security protocols.",
    icon: BadgeCheck,
  },
];

const AboutGuide = () => {
  const [openId, setOpenId] = useState(1);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-20 sm:py-24 bg-[#F8FAFC] text-[#08153A] relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#08153A 1px, transparent 1px),
                           linear-gradient(90deg, #08153A 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200/90 rounded-full shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span className="text-xs sm:text-sm font-bold text-[#08153A] tracking-wider uppercase">
              About NEXCORE ALLIANCE LLP
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] tracking-tight leading-tight mb-4">
            Your Guide to{" "}
            <span className="text-[#FF6600]">
              NEXCORE ALLIANCE LLP
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            NEXCORE ALLIANCE LLP is a leading IT solutions provider, specializing in cutting-edge technology and business excellence.
          </p>
        </div>

        {/* 7 Interactive Editorial Checklist Rows */}
        <div className="space-y-3 mb-16 max-w-4xl mx-auto">
          {guideItems.map((item) => {
            const isOpen = openId === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#08153A]/25 shadow-md ring-1 ring-[#08153A]/10"
                    : "border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Index & Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen 
                          ? "bg-[#08153A] text-white" 
                          : "bg-slate-100 text-[#08153A]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-slate-400 block mb-0.5">
                        {item.num}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#08153A] leading-snug">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#FF6600] text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-[15px] text-slate-600 leading-relaxed border-t border-slate-100 ml-0 sm:ml-14">
                        {item.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 3 Executive Stat Cards (Navy, Orange, Pure White) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14">
          {/* Card 1: Deep Navy Anchor */}
          <div className="bg-[#08153A] rounded-3xl p-6 sm:p-7 text-white shadow-xl shadow-[#08153A]/20 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-1 transition-transform border border-white/10">
            <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-3">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div className="text-4xl sm:text-5xl font-black mb-1 tracking-tight text-white">
              <CounterNumber value={329} suffix="+" duration={2} />
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-200 mb-0.5">Completed Projects</div>
            <div className="text-xs text-slate-400">Across Diverse Sectors</div>
          </div>

          {/* Card 2: Signature Nexcore Orange */}
          <div className="bg-[#FF6600] rounded-3xl p-6 sm:p-7 text-white shadow-xl shadow-orange-600/20 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="text-4xl sm:text-5xl font-black mb-1 tracking-tight text-white">
              <CounterNumber value={15} suffix="+" duration={1.8} />
            </div>
            <div className="text-base sm:text-lg font-bold text-white mb-0.5">Years Experience</div>
            <div className="text-xs text-orange-100">Technical Excellence</div>
          </div>

          {/* Card 3: Enterprise Pure White */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#08153A] shadow-lg shadow-slate-200/60 border border-slate-200 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center mb-3">
              <ThumbsUp className="w-5 h-5 text-[#FF6600]" />
            </div>
            <div className="text-4xl sm:text-5xl font-black mb-1 tracking-tight text-[#08153A]">
              <CounterNumber value={98} suffix="%" duration={2.2} />
            </div>
            <div className="text-base sm:text-lg font-bold text-[#08153A] mb-0.5">Client Satisfaction</div>
            <div className="text-xs text-slate-500">Verified Client Reviews</div>
          </div>
        </div>

        {/* Ready to Start Your Digital Journey Callout Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#08153A] rounded-3xl p-8 sm:p-10 text-center text-white shadow-2xl border border-white/10 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none" 
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                backgroundSize: '36px 36px',
              }} 
            />

            <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white tracking-tight relative z-10">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 relative z-10">
              Let&apos;s collaborate to take your business to the next level with our innovative IT solutions.
            </p>
            <Link href="/contactus" className="relative z-10 inline-block">
              <button
                type="button"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#FF6600] hover:bg-[#ea580c] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-orange-600/30 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutGuide;
