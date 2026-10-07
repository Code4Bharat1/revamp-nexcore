"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowRight, Users, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Animated counter component counting from 0 up to target number on scroll
const CountUp = ({ target, suffix = "", duration = 2.0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime = null;
    let animationFrameId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ContactSection = () => {
  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-20 overflow-hidden">
      {/* Subtle Geometric Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
        {/* Eyebrow / Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl border border-white/15 text-[#FF6600] shadow-md">
          <Users className="w-7 h-7" />
        </div>

        {/* Main Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            A single Odoo CRM Software for{" "}
            <span className="text-[#FF6600]">
              all your needs
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 font-medium">
            We are What We Do
          </p>
        </div>

        {/* Benefits Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
            <Zap className="w-4 h-4 text-[#FF6600]" />
            <span>All-in-One Solution</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
            <span>Proven Results</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
            <TrendingUp className="w-4 h-4 text-[#FF6600]" />
            <span>Business Growth</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FF6600] hover:bg-[#e05a00] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-[#FF6600]/25 transition-all text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contact Us Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/contactus"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-8 rounded-xl transition-all text-sm sm:text-base"
          >
            <span>Learn More</span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-6 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-white mb-1">
              <CountUp target={1000} suffix="+" />
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Happy Clients</p>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-2xl sm:text-3xl font-black text-[#FF6600] mb-1">
              <CountUp target={100} suffix="%" />
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-white mb-1">
              <CountUp target={24} suffix="/7" />
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-medium">Support</p>
          </div>
        </div>

        {/* Bottom Tagline */}
        <p className="text-white/60 text-xs sm:text-sm flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse" />
          Join thousands of businesses using Odoo CRM • Start today
        </p>
      </div>
    </section>
  );
};

export default ContactSection;