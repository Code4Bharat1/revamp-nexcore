"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="w-full py-20 sm:py-24 bg-white text-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#08153A] rounded-3xl p-8 sm:p-12 lg:p-14 text-center shadow-2xl border border-white/10 relative overflow-hidden">
          
          {/* Background Architectural Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none" 
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }} 
          />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight relative z-10">
            Ready to Transform Your Business?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed relative z-10">
            Let&apos;s build innovative, scalable, and secure digital solutions with our expert team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link href="/contactus">
              <button
                type="button"
                className="px-8 py-3.5 sm:py-4 bg-[#FF6600] hover:bg-[#ea580c] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-orange-600/30 inline-flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <Link href="/contactus">
              <button
                type="button"
                className="px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base rounded-xl shadow-md inline-flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#FF6600]" />
                <span>Schedule a Consultation</span>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
