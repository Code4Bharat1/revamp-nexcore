"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, TrendingUp, Home, Package, Zap, Calculator } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const ctaRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bgRef.current,
        { scale: 1.25, opacity: 0.7, filter: "blur(10px)" },
        { scale: 1.05, opacity: 1, filter: "blur(0px)", duration: 1.4, ease: "power2.out" }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: -30, scale: 0.7, rotate: -5 },
          { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" },
          "-=0.9"
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40, rotateX: 30, transformOrigin: "0% 50%" },
          { opacity: 1, y: 0, rotateX: 0, duration: 1, ease: "power4.out" },
          "-=0.6"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.6"
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          breadcrumbRef.current,
          { opacity: 0, x: 40, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
          "-=0.5"
        );

      // Continuous Levitating Orb Animations
      gsap.to(orb1Ref.current, {
        x: 30,
        y: -25,
        scale: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: -35,
        y: 30,
        scale: 1.25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // ScrollTrigger 3D Zoom & Fade Out when scrolling down (Reverses on Scroll Up)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          if (bgRef.current) {
            gsap.set(bgRef.current, {
              scale: 1.05 + progress * 0.25,
              yPercent: progress * 20,
              filter: `blur(${progress * 8}px)`,
            });
          }
          if (overlayRef.current) {
            gsap.set(overlayRef.current, {
              opacity: 0.5 + progress * 0.4,
            });
          }
        },
      });
    }, containerRef);

    // Interactive 3D Mouse Parallax Tracking
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);

      gsap.to(bgRef.current, {
        rotateY: x * 8,
        rotateX: -y * 8,
        x: x * 15,
        y: y * 15,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(badgeRef.current, {
        x: x * 12,
        y: y * 12,
        rotateZ: x * 4,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(titleRef.current, {
        x: x * 8,
        y: y * 8,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.to(breadcrumbRef.current, {
        x: -x * 10,
        y: -y * 10,
        duration: 0.7,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(
        [bgRef.current, badgeRef.current, titleRef.current, breadcrumbRef.current],
        {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener("mousemove", handleMouseMove);
      containerEl.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      ctx.revert();
      if (containerEl) {
        containerEl.removeEventListener("mousemove", handleMouseMove);
        containerEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh] overflow-hidden [perspective:1200px]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div ref={bgRef} className="relative w-full h-full transform-gpu will-change-transform">
          <Image
            src="/images/bg-image/Best Odoo Accounting Software development.jpg"
            alt="Odoo Accounting Software"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
            className="transform scale-105"
          />
        </div>
        {/* Dynamic Gradient Overlays for Depth */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-emerald-950/70 transition-opacity duration-300 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Animated GSAP Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={orb1Ref}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/25 rounded-full filter blur-3xl"
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-teal-600/30 rounded-full filter blur-3xl"
        />
      </div>

      {/* Text & Content Container */}
      <div className="relative z-10 flex flex-col h-full w-full justify-center items-center sm:justify-between sm:flex-row px-6 sm:px-[11.5rem] gap-6 py-6">
        {/* Left Side - Main Title & Badges */}
        <div className="flex flex-col items-center sm:items-start [transform-style:preserve-3d]">
          {/* Decorative Levitating Badge */}
          <div
            ref={badgeRef}
            className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-2xl border border-white/25 hover:scale-110 transition-transform duration-300"
          >
            <Calculator className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span>FINANCIAL EXCELLENCE</span>
          </div>

          <h2
            ref={titleRef}
            className="text-[24px] sm:text-4xl lg:text-5xl font-extrabold text-white text-center sm:text-left mb-2 drop-shadow-2xl tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent">
              Best Odoo Accounting
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Software Development
            </span>
          </h2>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-gray-300 text-sm sm:text-base text-center sm:text-left max-w-md drop-shadow-lg"
          >
            Streamline your finances with automated invoicing, bank sync & real-time financial reporting
          </p>

          {/* Animated Accent Line */}
          <div
            ref={lineRef}
            className="mt-4 w-32 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full origin-left shadow-[0_0_12px_#10b981]"
          />
        </div>

        {/* Right Side - Interactive Breadcrumb & CTAs */}
        <div className="flex flex-col items-center sm:items-end gap-4 [transform-style:preserve-3d]">
          {/* Breadcrumb Navigation */}
          <div
            ref={breadcrumbRef}
            className="flex flex-wrap justify-center sm:justify-end items-center gap-2 text-sm sm:text-base font-semibold bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-2xl hover:border-emerald-500/50 transition-colors duration-300"
          >
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-white text-[#E1306C] cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            <ChevronRight className="w-4 h-4 text-[#E1306C] animate-pulse" />

            <Link
              href="/apps"
              className="flex items-center gap-1 hover:text-white text-[#E1306C] cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <Package className="w-4 h-4" />
              <span>Apps</span>
            </Link>

            <ChevronRight className="w-4 h-4 text-[#E1306C] animate-pulse" />

            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1.5 rounded-full font-bold shadow-lg border border-white/20">
              <span>Odoo Accounting</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div ref={ctaRef} className="flex gap-3">
            <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span>Get Started</span>
            </button>

            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-semibold text-sm border border-white/30 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border Light Beam */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_14px_#10b981] animate-[slide_3s_infinite_ease-in-out]" />
      </div>
    </div>
  );
};

export default Hero;