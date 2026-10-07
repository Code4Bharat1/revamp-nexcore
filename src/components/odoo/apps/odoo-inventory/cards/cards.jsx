"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Package, BarChart3, RefreshCw, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Fully Automated Replenishment",
      content:
        "Make your supply chain more efficient than before with Odoo Inventory. Maintain minimum stock based on your future stock forecast. Automated trigger requests for quotations based on future needs. Get immediate stock updates, then fill your warehouse to the brim with automated and reliable warehouse management.",
      icon: "/images/App images/App Icons/odoo-inventory-automated-replenishment-icon.png",
      badge: "Automated",
      iconComponent: <RefreshCw className="w-3.5 h-3.5 text-[#FF6600]" />
    },
    {
      id: 2,
      title: "Complete Traceability with Double-Entry System",
      content:
        "Odoo Inventory Management, with a unique double-entry inventory system, tracks every stock move from purchase to warehouse bin to sales order. Easy manufacturer tracking with bar code or serial numbers. Get your inventory valuation posted in real-time with Odoo Inventory. Real-time posting of inventory valuation on accounting software for an accurate balance sheet and warehouse management.",
      icon: "/images/App images/App Icons/odoo-inventory-system-icon.png",
      badge: "Traceability",
      iconComponent: <Package className="w-3.5 h-3.5 text-[#FF6600]" />
    },
    {
      id: 3,
      title: "Real-Time Reports and Dashboards",
      content:
        "Clear and complete reports that are real-time and dynamic can be generated with Odoo Inventory Management. Customized dashboards to view a complete picture of your business. Review and drill down to your customers' transaction details from your sale order. Use predefined dashboards with Odoo Inventory for smooth and easy warehouse management.",
      icon: "/images/App images/App Icons/odoo-inventory-management-reports-and-dashboard.png",
      badge: "Analytics",
      iconComponent: <BarChart3 className="w-3.5 h-3.5 text-[#FF6600]" />
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const visibleCards = cards
    .slice(currentIndex, currentIndex + cardsToShow)
    .concat(
      cards.slice(
        0,
        Math.max(0, currentIndex + cardsToShow - cards.length)
      )
    );

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
            <Package className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>Inventory Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] mb-4 tracking-tight">
            Smart Warehouse <span className="text-[#FF6600]">Management</span>
          </h2>

          <p className="text-[#08153A]/70 text-base sm:text-lg leading-relaxed">
            Complete control over your inventory operations with automated intelligence.
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

          {/* Cards */}
          <div className="flex gap-6 lg:gap-8 overflow-hidden justify-center w-full py-4">
            {visibleCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="w-full max-w-md bg-white rounded-2xl p-8 text-center flex-shrink-0 transition-all duration-300 relative border border-[#08153A]/10 hover:border-[#FF6600]/40 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                {/* Top Levitating Badge */}
                <div className="absolute top-4 right-4 bg-[#FF6600]/10 text-[#FF6600] text-xs font-bold px-3 py-1 rounded-full border border-[#FF6600]/20 flex items-center gap-1">
                  {card.iconComponent}
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

                {/* Bottom Accent Line */}
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

        {/* Dots Navigation */}
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

        {/* Bottom Stats */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mt-16 flex-wrap">
          <div className="flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/10 px-5 py-2.5 rounded-full">
            <RefreshCw className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[#08153A] font-semibold text-sm">Auto Replenishment</span>
          </div>
          <div className="flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/10 px-5 py-2.5 rounded-full">
            <Package className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[#08153A] font-semibold text-sm">Full Traceability</span>
          </div>
          <div className="flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/10 px-5 py-2.5 rounded-full">
            <TrendingUp className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[#08153A] font-semibold text-sm">Real-Time Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;