"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Clock, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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

const QuotesSection = () => {
  const benefits = [
    { icon: <Clock className="w-5 h-5 text-[#FF6600]" />, title: "Instant Creation" },
    { icon: <Zap className="w-5 h-5 text-[#FF6600]" />, title: "Professional Quality" },
    { icon: <TrendingUp className="w-5 h-5 text-[#FF6600]" />, title: "Quick Delivery" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden text-[#08153A]">
      <div className="max-w-7xl mx-auto text-center px-6 md:px-8 lg:px-8 relative z-10">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08153A]/5 border border-[#08153A]/15 text-xs font-semibold tracking-wider text-[#FF6600] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
          <span>LIGHTNING FAST QUOTING</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08153A] leading-tight tracking-tight mb-4 max-w-3xl mx-auto">
          Creating Quotes Takes{" "}
          <span className="text-[#FF6600]">
            No Time
          </span>
        </h2>

        {/* Description */}
        <p className="text-[#08153A]/75 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
          With Odoo, create a professional quote in no time. Make an effective business approach with Odoo tools. Put your business in the right front with invoicing that works. Get your quote done instantly and send it to potential customers straight away.
        </p>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#08153A]/10 hover:border-[#FF6600]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#08153A] flex items-center justify-center mb-4 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[#08153A]">{benefit.title}</h3>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            href="/contactus"
            className="px-8 py-3.5 bg-[#FF6600] hover:bg-[#e05a00] text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-[#FF6600]/20 flex items-center gap-2"
          >
            <span>Start Creating Quotes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/apps"
            className="px-8 py-3.5 bg-white border border-[#08153A]/20 hover:bg-[#08153A] hover:text-white text-[#08153A] font-bold rounded-xl text-sm transition-colors shadow-sm"
          >
            Explore Apps
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-[#08153A]/10 text-xs sm:text-sm font-semibold text-[#08153A]/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
            <span>No Hidden Costs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
            <span>Enterprise Implementation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
            <span>24/7 Dedicated Support</span>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-10 pt-8 border-t border-[#08153A]/10">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#08153A] mb-1">
              <CountUp target={5} suffix=" sec" duration={1.5} />
            </div>
            <div className="text-xs sm:text-sm text-[#08153A]/70 font-medium">Average Quote Time</div>
          </div>
          <div className="text-center border-x border-[#08153A]/10">
            <div className="text-2xl sm:text-3xl font-black text-[#FF6600] mb-1">
              <CountUp target={10000} suffix="+" duration={2.0} />
            </div>
            <div className="text-xs sm:text-sm text-[#08153A]/70 font-medium">Quotes Generated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#08153A] mb-1">
              <CountUp target={99} suffix="%" duration={2.0} />
            </div>
            <div className="text-xs sm:text-sm text-[#08153A]/70 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;