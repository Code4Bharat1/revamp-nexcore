"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Smartphone,
  Laptop,
  Cloud,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import dynamic from "next/dynamic";
import CountUp from "../../odoo/apps/CountUp";

const ServiceHero3DCanvas = dynamic(() => import("./ServiceHero3DCanvas"), {
  ssr: false,
});

const ServiceHeroSection = () => {
  const heroSectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonsRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageInnerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !heroSectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const section = heroSectionRef.current;
    const badge = badgeRef.current;
    const heading = headingRef.current;
    const desc = descRef.current;
    const cards = cardsRef.current.filter(Boolean);
    const buttons = buttonsRef.current;
    const imageWrap = imageWrapRef.current;
    const imageInner = imageInnerRef.current;

    if (isReducedMotion) {
      gsap.set([badge, heading, desc, buttons, imageWrap, ...cards], { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. INITIAL SETUP - PREVENT FOUC
      gsap.set([badge, desc, buttons, imageWrap], { opacity: 0, y: 25 });
      gsap.set(cards, { opacity: 0, y: 30, scale: 0.95 });

      const headingLines = heading ? heading.querySelectorAll(".heading-line") : [];
      if (headingLines.length > 0) {
        gsap.set(headingLines, { opacity: 0, y: 40 });
      }

      // 2. ENTRANCE TIMELINE
      const entranceTL = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // STEP 1: OUR SERVICES badge (opacity 0->1, y 20->0)
      if (badge) {
        entranceTL.to(badge, { opacity: 1, y: 0, duration: 0.5 });
      }

      // STEP 2: Heading line-by-line reveal (opacity 0->1, y 40->0)
      if (headingLines.length > 0) {
        entranceTL.to(
          headingLines,
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.12 },
          "-=0.25"
        );
      }

      // STEP 3: Paragraph (opacity 0->1, y 20->0)
      if (desc) {
        entranceTL.to(desc, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
      }

      // STEP 4: Service cards stagger from left to right
      if (cards.length > 0) {
        entranceTL.to(
          cards,
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.09, ease: "back.out(1.4)" },
          "-=0.25"
        );
      }

      // STEP 5: Buttons (opacity 0->1, y 15->0)
      if (buttons) {
        entranceTL.to(buttons, { opacity: 1, y: 0, duration: 0.45 }, "-=0.4");
      }

      // STEP 7: Right-side 3D laptop reveal
      if (imageWrap) {
        entranceTL.to(
          imageWrap,
          { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.7"
        );
      }

      // 3. CONTINUOUS SUBTLE FLOATING MICRO-ANIMATIONS (Post Entrance)
      entranceTL.add(() => {
        if (imageInner) {
          gsap.to(imageInner, {
            y: "-=8",
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });

      // 4. DISTINCT SCROLL PARALLAX (Scrubbed on Scroll)
      const leftContent = section.querySelector(".hero-left-content");
      if (leftContent) {
        gsap.to(leftContent, {
          y: -45,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }

      if (imageWrap) {
        gsap.to(imageWrap, {
          y: -70,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    }, section);

    // 5. DESKTOP MOUSE PARALLAX ON 3D LAPTOP
    const handleMouseMove = (e) => {
      if (typeof window === "undefined" || window.innerWidth < 1024 || !imageInnerRef.current) return;
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(imageInnerRef.current, {
        rotateY: x * 8,
        rotateX: -y * 8,
        x: x * 14,
        y: y * 14,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (typeof window === "undefined" || window.innerWidth < 1024 || !imageInnerRef.current) return;
      gsap.to(imageInnerRef.current, {
        rotateY: 0,
        rotateX: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      ctx.revert();
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const services = [
    { Icon: Code, label: "Web Dev" },
    { Icon: Smartphone, label: "Mobile Apps" },
    { Icon: Laptop, label: "Software" },
    { Icon: Cloud, label: "Cloud" },
  ];

  return (
    <section
      ref={heroSectionRef}
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-[#08153A] text-white py-16 sm:py-20 lg:py-24 select-none"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content, Cards, Stats, CTA (#08153A, #FF6600, #FFFFFF theme) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left hero-left-content">
            
            {/* STEP 1: Eyebrow Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/30 shadow-sm mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
              <span className="text-xs font-mono font-bold text-[#FF6600] tracking-[0.2em] uppercase">
                OUR SERVICES
              </span>
            </div>

            {/* STEP 2: Main Heading */}
            <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.1] mb-5">
              <span className="heading-line block">Empowering</span>
              <span className="heading-line block">Developers with</span>
              <span className="heading-line block text-[#FF6600]">
                Web Solutions
              </span>
            </h1>

            {/* STEP 3: Paragraph */}
            <p ref={descRef} className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-7">
              At <span className="font-bold text-white">NEXCORE ALLIANCE LLP</span>, we specialize in delivering innovative IT solutions. From tailored software development to web design, we help businesses succeed in the digital world.
            </p>

            {/* STEP 4: 4 Service Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full max-w-xl mb-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  ref={(el) => { cardsRef.current[idx] = el; }}
                  className="group bg-[#08153A] rounded-xl p-3.5 sm:p-4 border border-white/10 hover:border-[#FF6600]/50 hover:shadow-lg flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FF6600]/10 border border-[#FF6600]/20 flex items-center justify-center text-[#FF6600] group-hover:scale-105 transition-all">
                    <service.Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                  </div>
                  <span className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors text-center whitespace-nowrap">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>

            {/* STEP 5: Statistics Row */}
            <div className="flex items-center gap-8 sm:gap-10 pb-8 mb-8 border-b border-white/15 w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF6600]">
                  <CountUp value="500+" duration={2.0} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/70 uppercase tracking-wider mt-1">
                  Projects
                </div>
              </div>
              <div className="border-l border-white/15 h-10" />
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                  <CountUp value="50+" duration={2.0} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/70 uppercase tracking-wider mt-1">
                  Clients
                </div>
              </div>
              <div className="border-l border-white/15 h-10" />
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF6600]">
                  <CountUp value="98%" duration={2.0} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/70 uppercase tracking-wider mt-1">
                  Success
                </div>
              </div>
            </div>

            {/* STEP 6: CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/servicesweoffer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#FF6600] hover:bg-[#FF6600]/90 shadow-md transition-all duration-300 text-sm sm:text-base">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              <Link href="/contactus" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                  Get Started
                </button>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Clean 3D Laptop Canvas with ample room */}
          <div ref={imageWrapRef} className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end">
            <div
              ref={imageInnerRef}
              className="relative w-full max-w-[720px] transition-transform duration-700 flex items-center justify-center"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <ServiceHero3DCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;