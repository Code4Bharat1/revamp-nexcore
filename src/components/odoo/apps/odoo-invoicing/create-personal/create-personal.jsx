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

const Personal = () => {
  const features = [
    { icon: <Zap className="w-4 h-4 text-[#FF6600]" />, text: "Multiple Payment Modes" },
    { icon: <Clock className="w-4 h-4 text-[#FF6600]" />, text: "Automated Follow-ups" },
    { icon: <TrendingUp className="w-4 h-4 text-[#FF6600]" />, text: "Streamlined Billing" },
  ];

  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-24 overflow-hidden">
      {/* Subtle Geometric Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <div className="relative bg-[#0c1e4f] p-3 sm:p-4 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/App images/odoo-invoice-to-business.jpg"
                alt="Odoo Invoicing Dashboard"
                className="rounded-xl w-full h-auto object-cover"
              />

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-[#08153A] border border-white/15 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#FF6600]" />
                <div>
                  <p className="text-[10px] text-white/60 font-medium">Enterprise</p>
                  <p className="text-xs font-bold text-white">Verified Solution</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-[#FF6600] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
              <span>PREMIUM FEATURE</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Create Personal Branding with{" "}
              <span className="text-[#FF6600]">
                Odoo Invoicing
              </span>
            </h2>

            {/* Subheading */}
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <div className="w-1.5 h-6 bg-[#FF6600] rounded-full" />
              Accelerated Business Transactions
            </h3>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
              Smooth and various payment modes for a hassle-free business flow. Streamline your billing for quick and easy payments. No rush to send reminders for late or pending payments. Odoo Invoicing provides automated follow-ups with simple and effective configuration.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 py-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white hover:border-[#FF6600]/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF6600] hover:bg-[#e05a00] text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-[#FF6600]/20"
              >
                <span>Start Building Your Brand</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Animated Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">
                  <CountUp target={500} suffix="+" />
                </div>
                <div className="text-xs text-white/70 font-medium">Happy Clients</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#FF6600] mb-0.5">
                  <CountUp target={99} suffix="%" />
                </div>
                <div className="text-xs text-white/70 font-medium">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-0.5">
                  <CountUp target={24} suffix="/7" />
                </div>
                <div className="text-xs text-white/70 font-medium">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Personal;