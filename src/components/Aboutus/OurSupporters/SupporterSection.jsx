"use client";
import React from "react";
import { motion } from "framer-motion";
import SupporterCard from "./SupporterCard/Card";
import { FaHandshake, FaStar } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const SupportersSection = () => {
  const supporters = [
    { imageSrc: "/images/Supporters/1.png", altText: "Supporter 1 - Company A" },
    { imageSrc: "/images/Supporters/2.png", altText: "Supporter 2 - Company B" },
    { imageSrc: "/images/Supporters/3.png", altText: "Supporter 3 - Company C" },
    { imageSrc: "/images/Supporters/4.png", altText: "Supporter 4 - Company D" },
    { imageSrc: "/images/Supporters/5.png", altText: "Supporter 5 - Company E" },
    { imageSrc: "/images/Supporters/6.png", altText: "Supporter 6 - Company F" },
    { imageSrc: "/images/Supporters/7.png", altText: "Supporter 7 - Company G" },
    { imageSrc: "/images/Supporters/8.png", altText: "Supporter 8 - Company H" },
    { imageSrc: "/images/Supporters/9.png", altText: "Supporter 9 - Company I" },
    { imageSrc: "/images/Supporters/10.png", altText: "Supporter 10 - Company J" },
    { imageSrc: "/images/Supporters/11.webp", altText: "Supporter 11 - Company K" },
    { imageSrc: "/images/Supporters/12.png", altText: "Supporter 12 - Company L" },
    { imageSrc: "/images/Supporters/13.png", altText: "Supporter 13 - Company M" },
    { imageSrc: "/images/Supporters/14.png", altText: "Supporter 14 - Company N" },
    { imageSrc: "/images/Supporters/15.png", altText: "Supporter 15 - Company O" },
    { imageSrc: "/images/Supporters/16.png", altText: "Supporter 16 - Company P" },
    { imageSrc: "/images/Supporters/17.png", altText: "Supporter 17 - Company Q" },
    { imageSrc: "/images/Supporters/18.png", altText: "Supporter 18 - Company R" },
    { imageSrc: "/images/Supporters/19.png", altText: "Supporter 19 - Company S" },
    { imageSrc: "/images/Supporters/20.png", altText: "Supporter 20 - Company T" },
  ];

  // Balanced alternation of banner and square logos so both slides have identical visual weight
  const balancedSupporters = [
    supporters[1],  // 2.png (Banner)
    supporters[0],  // 1.png (Square)
    supporters[2],  // 3.png (Banner)
    supporters[6],  // 7.png (Square)
    supporters[3],  // 4.png (Banner)
    supporters[8],  // 9.png (Square)
    supporters[4],  // 5.png (Banner)
    supporters[11], // 12.png (Square)
    supporters[5],  // 6.png (Banner)
    supporters[14], // 15.png (Square)
    supporters[7],  // 8.png (Banner)
    supporters[15], // 16.png (Square)
    supporters[9],  // 10.png (Banner)
    supporters[16], // 17.png (Square)
    supporters[10], // 11.webp (Banner)
    supporters[17], // 18.png (Square)
    supporters[12], // 13.png (Banner)
    supporters[19], // 20.png (Square)
    supporters[13], // 14.png (Banner)
    supporters[18], // 19.png (Banner)
  ];

  const row1Supporters = balancedSupporters;
  const row2Supporters = [...balancedSupporters.slice(10), ...balancedSupporters.slice(0, 10)];

  return (
    <section className="w-full py-20 sm:py-24 bg-white text-[#08153A] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span className="text-xs sm:text-sm text-[#08153A] font-bold uppercase tracking-wider">
              Trusted By Industry Leaders
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] tracking-tight leading-tight mb-4">
            Our Valued{" "}
            <span className="text-[#FF6600]">
              Clients &amp; Partners
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Proud to collaborate with forward-thinking organizations and enterprise partners worldwide.
          </p>

          {/* 2 Stat Badges */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 pt-6">
            <div className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#08153A] text-white flex items-center justify-center shadow-xs">
                <FaStar className="w-3.5 h-3.5 text-[#FF6600]" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-black text-[#08153A] leading-none">100+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Global Clients</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#FF6600] text-white flex items-center justify-center shadow-xs">
                <FaHandshake className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-black text-[#08153A] leading-none">500+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Projects Done</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marquee Container with Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-4"
        >
          {/* Subtle edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Row 1: Right to Left */}
          <div className="relative overflow-hidden group mb-4 sm:mb-6">
            <div className="marquee-track flex items-center">
              {row1Supporters.concat(row1Supporters).map((supporter, index) => (
                <div key={`supporter-row1-${index}`} className="px-3 sm:px-4 flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <SupporterCard
                    imageSrc={supporter.imageSrc}
                    altText={supporter.altText}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="relative overflow-hidden group">
            <div className="marquee-track-reverse flex items-center">
              {row2Supporters.concat(row2Supporters).map((supporter, index) => (
                <div key={`supporter-row2-${index}`} className="px-3 sm:px-4 flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <SupporterCard
                    imageSrc={supporter.imageSrc}
                    altText={supporter.altText}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Marquee Animations */}
      <style jsx>{`
        .marquee-track {
          display: flex;
          animation: marqueeScroll 16s linear infinite;
          will-change: transform;
        }

        .marquee-track-reverse {
          display: flex;
          animation: marqueeScrollReverse 16s linear infinite;
          will-change: transform;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marqueeScrollReverse {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        .group:hover .marquee-track,
        .group:hover .marquee-track-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SupportersSection;
