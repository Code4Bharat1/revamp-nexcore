"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const sectionRef = useRef(null);
  const humanHandRef = useRef(null);
  const robotHandRef = useRef(null);
  const lightBurstRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const section = sectionRef.current;
    const humanHand = humanHandRef.current;
    const robotHand = robotHandRef.current;
    const lightBurst = lightBurstRef.current;
    const ring1 = ring1Ref.current;
    const ring2 = ring2Ref.current;
    const text = textRef.current;

    if (!section || isReducedMotion) return;

    const ctx = gsap.context(() => {
      // Master ScrollTrigger Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=220%", // Pinned scroll distance
          pin: true,
          scrub: 1, // Smooth scrubbed animation (forward & reverse)
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ── STEP 1 & 2: Hands Approach to Center (0.0 -> 0.40) ──
      tl.fromTo(
        humanHand,
        { x: "-45vw" },
        { x: "-2vw", ease: "power1.inOut" },
        0
      );

      tl.fromTo(
        robotHand,
        { x: "45vw" },
        { x: "2vw", ease: "power1.inOut" },
        0
      );

      // ── STEP 3: Touch + Light Burst (0.38 -> 0.56) ──
      tl.fromTo(
        lightBurst,
        { opacity: 0, scale: 0.2 },
        { opacity: 1, scale: 1.8, ease: "power2.out", duration: 0.1 },
        0.38
      );
      tl.to(lightBurst, { opacity: 0.3, scale: 1.2, duration: 0.1 }, 0.48);

      tl.fromTo(
        ring1,
        { opacity: 0, scale: 0.3 },
        { opacity: 0.9, scale: 2.2, ease: "power2.out", duration: 0.12 },
        0.39
      );
      tl.to(ring1, { opacity: 0, scale: 3.0, duration: 0.08 }, 0.51);

      tl.fromTo(
        ring2,
        { opacity: 0, scale: 0.2 },
        { opacity: 0.7, scale: 2.8, ease: "power2.out", duration: 0.14 },
        0.41
      );
      tl.to(ring2, { opacity: 0, scale: 3.6, duration: 0.08 }, 0.53);

      // ── STEP 4: Hands Move Away (0.56 -> 0.82) ──
      tl.to(
        humanHand,
        { x: "-36vw", ease: "power1.inOut" },
        0.56
      );

      tl.to(
        robotHand,
        { x: "36vw", ease: "power1.inOut" },
        0.56
      );

      // ── STEP 5: Text Reveal "AI Solutions" (0.72 -> 1.0) ──
      tl.fromTo(
        text,
        { opacity: 0, scale: 0.88, filter: "blur(12px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", ease: "power2.out" },
        0.72
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero-ai-solutions"
      className="relative w-full h-screen min-h-[600px] bg-white text-gray-900 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Human Hand (Left) */}
      <div
        ref={humanHandRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[640px] lg:w-[820px] max-w-[50vw] h-auto pointer-events-none z-10 flex justify-end"
      >
        <Image
          src="/images/human-hand.png"
          alt="Human Hand"
          width={820}
          height={450}
          priority
          sizes="(max-width: 640px) 340px, (max-width: 1024px) 640px, 820px"
          className="w-full h-auto object-contain filter drop-shadow-sm"
        />
      </div>

      {/* Robot Hand (Right) */}
      <div
        ref={robotHandRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[640px] lg:w-[820px] max-w-[50vw] h-auto pointer-events-none z-10 flex justify-start"
      >
        <Image
          src="/images/robot-hand.png"
          alt="Robot Hand"
          width={820}
          height={450}
          priority
          sizes="(max-width: 640px) 340px, (max-width: 1024px) 640px, 820px"
          className="w-full h-auto object-contain filter drop-shadow-sm"
        />
      </div>

      {/* Touch Light Burst & Rings at Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-15 flex items-center justify-center">
        {/* Core Flash */}
        <div
          ref={lightBurstRef}
          className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-white blur-xl opacity-0"
        />
        {/* Ring 1 */}
        <div
          ref={ring1Ref}
          className="absolute w-40 h-40 sm:w-60 sm:h-60 rounded-full border-2 border-cyan-400/80 shadow-[0_0_30px_rgba(56,189,248,0.8)] opacity-0"
        />
        {/* Ring 2 */}
        <div
          ref={ring2Ref}
          className="absolute w-60 h-60 sm:w-88 sm:h-88 rounded-full border border-blue-400/60 shadow-[0_0_50px_rgba(30,64,175,0.5)] opacity-0"
        />
      </div>

      {/* Text Reveal: "AI Solutions" */}
      <div
        ref={textRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none px-4 opacity-0"
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-[#0b1329]">
          <span className="bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
            AI Solutions
          </span>
        </h1>
      </div>
    </section>
  );
}
