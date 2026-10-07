"use client";

import React, { useState, useEffect } from "react";
import { Zap, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "One Step Closer To Your Customers",
      content:
        "Stay in touch with your customers and pull them into your brand with various loyalty programs. Find your customers and products in no time with Odoo POS in-built search features. Engage in smart advertisements, promote your products, upcoming events and working hours on your bills and receipts. Keep your customers informed about your business happenings.",
      icon: "/images/App images/odoo-point-of-sale-implementation-features-icon.png",
      badge: "Customer Loyalty",
    },
    {
      id: 2,
      title: "An Integrated Inventory Management",
      content:
        "Real-time monitoring and accurate forecasts of procurements with Odoo POS. Integrated with Odoo Inventory and Odoo eCommerce, Odoo Point Of Sale saves you from juggling between two apps. Odoo POS is a multi-channel business that provides feasibility for viewing real-time product availability.",
      icon: "/images/App images/App Icons/odoo-point-of-sale-inventory-management-icon.png",
      badge: "Inventory Sync",
    },
    {
      id: 3,
      title: "Effective Product Management",
      content:
        "Sell your products with present Units of Measure and update your stock accordingly. Display your products in a structured way with product categories. Give customers the power of indulging in seamless shopping with the Search and Filter option.",
      icon: "/images/App images/App Icons/odoo-point-of-sale-product-management-icon.png",
      badge: "Product Catalog",
    },
    {
      id: 4,
      title: "Sell Your Products From Anywhere",
      content:
        "Reliable Odoo POS enables product selling even if your internet connection is unstable. Set up your store quickly with an internet connection and use your POS from everywhere, anytime. Odoo's POS is operational without internet after initial sync.",
      icon: "/images/App images/App Icons/odoo-pos-for-sell-your-business-icon.png",
      badge: "Offline Ready",
    },
    {
      id: 5,
      title: "Highlights of Odoo Point of Sale",
      content: (
        <ul className="space-y-1.5 text-[#08153A]/70 text-sm leading-relaxed text-left">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
            <span>Fully integrated with other Odoo apps.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
            <span>Compatible with standard POS hardware.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
            <span>Multiple order processing simultaneously.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
            <span>Customizable payment gateways.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
            <span>Set up in minutes and sell in seconds.</span>
          </li>
        </ul>
      ),
      icon: "/images/App images/App Icons/odoo-point-of-sale-ighlights-in-business.png",
      badge: "POS Highlights",
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
    return () => window.removeEventListener("resize", updateCardsToShow);
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
            <Zap className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>POS Highlights & Features</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] mb-4 tracking-tight">
            Seamless Retail & <span className="text-[#FF6600]">Dining Features</span>
          </h2>

          <p className="text-[#08153A]/70 text-base sm:text-lg leading-relaxed">
            Explore intelligent features designed to speed up your checkout process and streamline operations.
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

          {/* Cards Grid */}
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

                  <div className="text-[#08153A]/70 text-sm sm:text-base leading-relaxed mb-4">
                    {card.content}
                  </div>
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

        {/* Dots */}
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
      </div>
    </section>
  );
};

export default Cards;
