"use client";

import React, { useState, useEffect } from "react";
import { TrendingUp, Zap, BarChart3, Award, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Card = () => {
  const cards = [
    {
      id: 1,
      title: "Manage Your Products Pricing and Sales",
      content:
        "A customizable attribute to design, implement and adjust your pricing strategy to maximize revenue. Take complete command over product variants. Easy and automated computation of shipping costs and print shipping labels. Odoo manages your sales conversion without breaking a sweat.",
      icon: "/images/App images/App Icons/odoo-sales-implementation-to-manage-your-sales-pipeline-icon.png",
      badge: "Pricing Strategy",
    },
    {
      id: 2,
      title: "Sell Your Products Effectively with Cutting-edge Interface",
      content:
        "A modern, fast and intuitive user interface that integrates Sales with CRM. An easy implementation to manage your sales pipeline at every stage. Odoo sales bring the necessary tabs under a roof for smooth processing of your orders from qualification to closing. Instant notifications to warn or alert your business on any undesirable business act.",
      icon: "/images/App images/App Icons/track-your-business-sales-with-odoo-sales-software-icon.webp",
      badge: "Smart Interface",
    },
    {
      id: 3,
      title: "Track Your Business Sales on a Dashboard and Portal",
      content:
        "A single-window dashboard to keep a trail of your business performance. An intuitive reporting system on the dashboard to get an overview of all your sales activities, performance data, and next actions. Extract your daily report with ease and arrive at conclusions to augment your business.",
      icon: "/images/App images/App Icons/manage-your-products-pricing-and-sales-with-odoo-sales-app-icon.webp",
      badge: "Analytics & Reports",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative bg-[#FFFFFF] py-20 lg:py-24 border-t border-[#08153A]/10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/15 text-[#08153A] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Powerful Features</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] mb-4 tracking-tight">
            Elevate Your <span className="text-[#FF6600]">Sales Process</span>
          </h2>

          <p className="text-[#08153A]/70 text-base sm:text-lg leading-relaxed">
            Discover intelligent solutions designed to streamline your operations and accelerate revenue.
          </p>
        </motion.div>

        <div className="flex items-center justify-between gap-4 md:gap-6 mb-12">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#08153A]/20 hover:border-[#FF6600] bg-white text-[#08153A] hover:bg-[#08153A] hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 flex-shrink-0 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Cards Grid Container */}
          <div className="flex gap-6 lg:gap-8 overflow-hidden justify-center w-full py-4">
            {cards
              .slice(currentIndex, currentIndex + itemsPerSlide)
              .concat(
                cards.slice(
                  0,
                  Math.max(0, currentIndex + itemsPerSlide - cards.length)
                )
              )
              .map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="w-full max-w-md bg-white rounded-2xl p-8 text-center flex-shrink-0 transition-all duration-300 relative border border-[#08153A]/10 hover:border-[#FF6600]/40 shadow-sm hover:shadow-xl flex flex-col justify-between"
                >
                  {/* Floating Top Badge */}
                  <div className="absolute top-4 right-4 bg-[#FF6600]/10 text-[#FF6600] text-xs font-bold px-3 py-1 rounded-full border border-[#FF6600]/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#FF6600]" />
                    <span>{card.badge}</span>
                  </div>

                  <div>
                    {/* Icon Container */}
                    <div className="relative inline-block mb-6 mt-4">
                      <div className="w-20 h-20 rounded-2xl bg-[#08153A]/5 border border-[#08153A]/10 flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#08153A]">
                      {card.title}
                    </h3>
                    
                    <p className="text-[#08153A]/70 text-sm sm:text-base leading-relaxed mb-4">
                      {card.content}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className="w-12 h-1 bg-[#FF6600] rounded-full mx-auto mt-4" />
                </motion.div>
              ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#08153A]/20 hover:border-[#FF6600] bg-white text-[#08153A] hover:bg-[#08153A] hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 flex-shrink-0 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index ? "w-8 h-2.5 bg-[#FF6600]" : "w-2.5 h-2.5 bg-[#08153A]/20 hover:bg-[#08153A]/40"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom Feature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-4 sm:gap-6 mt-16 flex-wrap"
        >
          <div className="flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/10 px-5 py-2.5 rounded-full">
            <TrendingUp className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[#08153A] font-semibold text-sm">Boost Revenue</span>
          </div>

          <div className="flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/10 px-5 py-2.5 rounded-full">
            <Zap className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[#08153A] font-semibold text-sm">Lightning Fast</span>
          </div>

          <div className="flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/10 px-5 py-2.5 rounded-full">
            <BarChart3 className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[#08153A] font-semibold text-sm">Real-Time Analytics</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Card;