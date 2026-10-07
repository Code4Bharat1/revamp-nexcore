"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Laptop,
  Rocket,
  Lightbulb,
  Users,
  Shield,
  ArrowRight,
  Sparkles,
  RotateCw,
  CheckCircle,
} from "lucide-react";

const valuesData = [
  {
    id: 1,
    num: "01",
    title: "Software Solutions",
    description:
      "We provide tailor-made software solutions designed to boost efficiency, streamline processes, and scale effortlessly across enterprise operations.",
    fullDetails:
      "Our bespoke software engineering process translates complex business logic into high-performance, fault-tolerant systems using modern microservices, clean code, and automated CI/CD testing.",
    icon: Code,
    iconBg: "bg-[#08153A]",
  },
  {
    id: 2,
    num: "02",
    title: "Web Development",
    description:
      "From sleek landing pages to complex web applications, we craft engaging, responsive, and high-performance digital experiences for your users.",
    fullDetails:
      "Built with Next.js, React, and modern frontend architectures. Every web solution achieves 90+ Core Web Vitals, sub-second hydration, and seamless cross-device adaptability.",
    icon: Laptop,
    iconBg: "bg-[#FF6600]",
  },
  {
    id: 3,
    num: "03",
    title: "Digital Transformation",
    description:
      "Accelerate your business with modern cloud architectures, scalable databases, and automated workflows that drive agility.",
    fullDetails:
      "We modernize legacy monolithic stacks, migrate enterprise workloads to resilient cloud providers (AWS, GCP, Azure), and integrate automated end-to-end data pipelines.",
    icon: Rocket,
    iconBg: "bg-[#08153A]",
  },
  {
    id: 4,
    num: "04",
    title: "Innovation & Technology",
    description:
      "Stay ahead with AI, machine learning, and emerging technologies integrated into your day-to-day business operations.",
    fullDetails:
      "From intelligent LLM agents and predictive neural networks to automated document processing, we embed production-grade AI into existing enterprise operations.",
    icon: Lightbulb,
    iconBg: "bg-[#FF6600]",
  },
  {
    id: 5,
    num: "05",
    title: "Customer-Centric Approach",
    description:
      "Your success is our priority. We work closely with you from inception to post-deployment support with transparent communication.",
    fullDetails:
      "We operate as an agile extension of your team. Featuring dedicated technical project managers, real-time sprint dashboards, and weekly delivery milestones.",
    icon: Users,
    iconBg: "bg-[#08153A]",
  },
  {
    id: 6,
    num: "06",
    title: "Quality & Security",
    description:
      "Uncompromising standards in code quality, data protection, and enterprise-grade cybersecurity across all deliverables.",
    fullDetails:
      "Security by design: end-to-end encryption, OWASP top-10 mitigation, role-based access controls, and strict compliance with international security standards.",
    icon: Shield,
    iconBg: "bg-[#FF6600]",
  },
];

const ValuesGrid = () => {
  // Track flipped state for each card independently
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span className="text-xs sm:text-sm text-[#08153A] font-bold uppercase tracking-wider">
              Our Core Values
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] tracking-tight leading-tight mb-4">
            Discover the Values of{" "}
            <span className="text-[#FF6600]">
              NEXCORE ALLIANCE LLP
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Guiding principles that define our work and culture as a trusted IT solutions provider for global enterprises.
          </p>
        </div>

        {/* 6 Value Cards with 3D Flip Animation on Read More Click */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {valuesData.map((item) => {
            const Icon = item.icon;
            const isFlipped = !!flippedCards[item.id];

            return (
              <div
                key={item.id}
                className="h-[360px] sm:h-[370px] w-full"
                style={{ perspective: 1200 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  {/* FRONT FACE OF CARD */}
                  <div
                    style={{ backfaceVisibility: "hidden" }}
                    className="absolute inset-0 w-full h-full bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header: Number and Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-11 h-11 rounded-2xl ${item.iconBg} text-white inline-flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400 px-2.5 py-1 rounded-full bg-slate-100">
                          {item.num}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-[#08153A] tracking-tight mb-2.5 group-hover:text-[#FF6600] transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Click to Flip Button */}
                    <button
                      type="button"
                      onClick={() => toggleFlip(item.id)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6600] hover:text-[#ea580c] transition-colors group/btn pt-3 border-t border-slate-100 cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  {/* BACK FACE OF CARD (Flipped State) */}
                  <div
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                    className="absolute inset-0 w-full h-full bg-[#08153A] text-white rounded-3xl p-6 sm:p-7 border border-white/10 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-8 h-8 rounded-xl bg-white/10 text-[#FF6600] inline-flex items-center justify-center flex-shrink-0"
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-bold text-[#FF6600] uppercase tracking-wider">
                            Architecture &amp; Value
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleFlip(item.id)}
                          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs cursor-pointer font-bold"
                          title="Flip back"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Title */}
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                        {item.title}
                      </h4>

                      {/* In-depth content */}
                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-3.5 font-normal">
                        {item.fullDetails}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-white/10">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                          <CheckCircle className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0" />
                          <span>Enterprise SLA &amp; fault-tolerant design</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                          <CheckCircle className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0" />
                          <span>Automated testing &amp; zero-defect delivery</span>
                        </div>
                      </div>
                    </div>

                    {/* Flip Again Button */}
                    <button
                      type="button"
                      onClick={() => toggleFlip(item.id)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF6600] hover:text-[#ea580c] transition-colors pt-2.5 border-t border-white/10 cursor-pointer"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Flip Back</span>
                    </button>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ValuesGrid;
