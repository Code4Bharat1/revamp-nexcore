"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "NEXCORE ALLIANCE LLP transformed our entire retail operations with a custom Odoo ERP system. Highly professional, disciplined, and responsive team!",
    author: "Rajesh Kumar",
    role: "Director, Retail Operations",
    initials: "RK",
    avatarBg: "bg-[#08153A]",
    stars: 5,
  },
  {
    id: 2,
    quote:
      "The AI automation pipeline they built reduced our manual data entry time by 80%. Truly exceptional engineering standards and reliable ongoing support.",
    author: "Sarah Johnson",
    role: "Head of Digital, FinTech Corp",
    initials: "SJ",
    avatarBg: "bg-[#FF6600]",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "Outstanding web application and continuous cloud support. The team delivered ahead of schedule and exceeded every expectation.",
    author: "Mohammed Ali",
    role: "Founder, E-Commerce Hub UAE",
    initials: "MA",
    avatarBg: "bg-[#08153A]",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 sm:py-24 bg-white text-[#08153A] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
            <span className="text-xs sm:text-sm text-[#08153A] font-bold uppercase tracking-wider">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] tracking-tight leading-tight mb-4">
            What Our{" "}
            <span className="text-[#FF6600]">
              Clients Say
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real feedback from leaders and partners who have accelerated their businesses with Nexcore Alliance.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#FF6600]">
                  {[...Array(item.stars)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote Icon & Text */}
                <div className="relative mb-6">
                  <FaQuoteLeft className="w-5 h-5 text-slate-300 mb-2.5" />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/70">
                <div
                  className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-xs flex-shrink-0`}
                >
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-[#08153A] truncate leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
