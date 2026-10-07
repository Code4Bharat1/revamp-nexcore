"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// Double Quote Icon matching Image 1
const QuoteIcon = ({ className = "w-8 h-8 text-indigo-400" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

const testimonialsData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    initials: "RK",
    avatarBg: "#2563eb", // blue
    rating: 5,
    quote:
      "NEXCORE ALLIANCE LLP transformed our digital presence completely. Their team's expertise and dedication are unmatched!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Founder, E-Shop Global",
    initials: "SJ",
    avatarBg: "#ea580c", // orange
    rating: 5,
    quote:
      "Outstanding work on our e-commerce platform. The attention to detail and customer support exceeded our expectations.",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    role: "CIO, Qatar Solutions",
    initials: "MA",
    avatarBg: "#2563eb", // blue
    rating: 5,
    quote:
      "Professional, reliable, and innovative. They delivered our project on time and within budget. Highly recommended!",
  },
];

export const ClientTestimonials = () => {
  const [activeIdx, setActiveIdx] = useState(1); // Default active is Sarah Johnson (center card) as in Image 1

  return (
    <section
      id="client-testimonials"
      className="relative w-full bg-white py-16 md:py-24 overflow-hidden select-none border-t border-slate-100"
    >
      {/* Subtle ambient lighting on light background */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/60 rounded-full blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-orange-600 mb-3">
            Client Testimonials
          </span>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            What Our{" "}
            <span className="text-orange-600">
              Clients Say
            </span>
          </h2>

          {/* Underline glowing indicator */}
          {/* <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-[0_0_10px_rgba(99,102,241,0.4)] mt-4" /> */}
        </div>

        {/* 3 Testimonials Cards Grid - Cards retain original Image 1 dark color styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonialsData.map((item, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${isActive
                  ? "bg-gradient-to-b from-[#0f1b40] to-[#0a132c] border-2 border-[#818cf8] shadow-[0_15px_40px_rgba(99,102,241,0.35)] md:-translate-y-2 ring-2 ring-indigo-400/30"
                  : "bg-[#0c142b] border border-slate-800/80 hover:border-slate-700 hover:bg-[#0f1936] hover:-translate-y-1 shadow-[0_10px_30px_rgba(15,23,42,0.25)]"
                  }`}
              >
                <div>
                  {/* Purple Double Quote Mark */}
                  <div className="mb-4">
                    <QuoteIcon className="w-8 h-8 text-[#818cf8] opacity-90" />
                  </div>

                  {/* 5 Golden Stars */}
                  <div className="flex items-center gap-1.5 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote Paragraph */}
                  <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 mt-auto border-t border-white/10">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0 shadow-md"
                    style={{ backgroundColor: item.avatarBg }}
                  >
                    <span>{item.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-base leading-tight truncate">
                      {item.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-0.5 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10 sm:mt-12">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${activeIdx === idx
                ? "w-8 h-2 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
