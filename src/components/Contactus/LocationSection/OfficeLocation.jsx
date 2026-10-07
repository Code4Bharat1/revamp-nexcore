"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiNavigation, FiClock, FiPhone, FiMail, FiExternalLink } from "react-icons/fi";
import { Sparkles, Building2, Compass } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OfficeLocation = () => {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftCardRef.current,
        { opacity: 0, x: -40, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        rightCardRef.current,
        { opacity: 0, x: 40, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-gradient-to-b from-[#F7FAFF] via-white to-[#F7FAFF] relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600/10 to-orange-500/10 border border-blue-600/20 rounded-full backdrop-blur-sm mb-5 shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-700 to-orange-600 bg-clip-text text-transparent">
              Global Presence & Location
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#060F28] tracking-tight leading-tight mb-5">
            Visit Our{" "}
            <span className="bg-gradient-to-r from-[#1769FF] via-blue-700 to-[#FF6A00] bg-clip-text text-transparent">
              Head Office
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            We&apos;d love to meet you at our office. Drop by for a coffee and let&apos;s discuss how we can engineer transformative technology for your business.
          </p>
        </div>

        {/* 2-Column Location & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Office Showcase & Info */}
          <div ref={leftCardRef} className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 group">
            {/* Office Image presentation */}
            <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/10] sm:aspect-[16/9] shadow-md border border-slate-100">
              <Image
                src="/images/nexcore.png"
                alt="Nexcore Alliance Head Office Entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060F28]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 text-white">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-600/80 backdrop-blur-md rounded-lg">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold">Headquarters</p>
                    <p className="text-sm font-bold text-white">Nexcore Alliance LLP</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-emerald-500/90 backdrop-blur-md rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Open for Visits
                </div>
              </div>
            </div>

            {/* Address and details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#060F28] mb-1">Registered Address</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                    White House, Office No. 1A & 2, New Buddha Colony, Kurla, Maharashtra 400070, India
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    Landmark: S.G. Barve Marg, Kurla West (Off BKC), Mumbai
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <FiClock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Business Hours</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">Mon - Sat: 9:30 AM - 7:30 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <FiPhone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Direct Call</p>
                    <a href="tel:+918976104646" className="text-xs sm:text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors">
                      +91 8976104646
                    </a>
                  </div>
                </div>
              </div>

              {/* Get directions button */}
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/DzBt4BdL9BH4MRga9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-[#060F28] text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <FiNavigation className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  <span>Get Directions on Google Maps</span>
                  <FiExternalLink className="w-4 h-4 opacity-80" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Container */}
          <div ref={rightCardRef} className="lg:col-span-6 flex flex-col bg-white rounded-3xl overflow-hidden border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500">
            {/* Map Header */}
            <div className="p-6 bg-gradient-to-r from-slate-900 via-[#060F28] to-blue-950 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-md">
                  <Compass className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Mumbai HQ Interactive Map</h4>
                  <p className="text-xs text-slate-300">Kurla West / Off BKC Commercial Hub</p>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-blue-200 border border-white/10">
                Live Directions
              </span>
            </div>

            {/* Google Map Embed */}
            <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] w-full bg-slate-100">
              <iframe
                title="Nexcore Alliance Head Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.835845012351!2d72.8791!3d19.0709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e9b8b0e889%3A0x6b4a68393c830954!2sWhite%20House%2C%20Kurla%20West%2C%20Mumbai%2C%20Maharashtra%20400070!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Quick Action Card on Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-black text-xs shadow-sm">
                    NA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Nexcore Alliance</p>
                    <p className="text-[11px] text-slate-500 font-medium">Maharashtra 400070</p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/DzBt4BdL9BH4MRga9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
