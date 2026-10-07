"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Zap, ShoppingCart, Palette, Megaphone, Gift, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const CarouselSection = () => {
  const cards = [
    {
      id: 1,
      title: "Design Your Business Website in a Flash",
      content:
        "Create your online business website effortlessly with Odoo E-Commerce. Odoo has standard functionalities to set your business website unique and bring in more customers. Odoo has drag and drop building blocks to snap your designs into place and showcase your inventory.",
      icon: "/images/App images/App Icons/odoo-ecommerce-website-design.webp",
      badge: "Design",
      iconComponent: <Palette className="w-3.5 h-3.5 text-[#FF6600]" />,
    },
    {
      id: 2,
      title: "Edit Your Website to Your Convenience",
      content:
        "Ready-to-use website to give your brand a global reach. Custom design your business website to display your products in the most sorted way to grab your customers' attention. Give customers the joy of shopping by listing out the product information in the way you want it to be seen. Add product attributes such as color, size, or style to keep product lines easy to navigate.",
      icon: "/images/App images/App Icons/odoo-ecommerce-webiste-development.webp",
      badge: "Customization",
      iconComponent: <ShoppingCart className="w-3.5 h-3.5 text-[#FF6600]" />,
    },
    {
      id: 3,
      title: "Promote Your Brand with Odoo Marketing Tools",
      content:
        "Optimize your marketing by setting keywords and increasing your average cart revenue. Boost your sales with cross-selling and upselling opportunities features on product pages, in the cart, or at checkout. Automatically recommend optional products to customers and alternatives to show customers more of the items they might like.",
      icon: "/images/App images/App Icons/odoo-ecommerce-website-businessing-tools.webp",
      badge: "Marketing",
      iconComponent: <Megaphone className="w-3.5 h-3.5 text-[#FF6600]" />,
    },
    {
      id: 4,
      title: "Grab the Attention of Your Customers",
      content:
        "Retain your existing customers and bring in more customers with engaging rewards and loyalty programs. Provide attractive deals and offers with promo codes and coupons. Focus on promotions and gifts to stay in the minds of customers. Give customers intriguing attributes like search and filter to easily move their desired products to the cart and checkout smoothly.",
      icon: "/images/App images/App Icons/app-ecom4.webp",
      badge: "Loyalty & Promo",
      iconComponent: <Gift className="w-3.5 h-3.5 text-[#FF6600]" />,
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
            <ShoppingCart className="w-3.5 h-3.5 text-[#FF6600]" />
            <span>E-Commerce Features</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08153A] mb-4 tracking-tight">
            Build Your Dream <span className="text-[#FF6600]">Online Store</span>
          </h2>

          <p className="text-[#08153A]/70 text-base sm:text-lg leading-relaxed">
            Everything you need to launch, customize, and grow your e-commerce business.
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
        <div className="flex justify-center items-center gap-4 sm:gap-6 mt-16 flex-wrap">
          <div className="flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/10 px-5 py-2.5 rounded-full">
            <Zap className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[#08153A] font-semibold text-sm">Fast Setup</span>
          </div>

          <div className="flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/10 px-5 py-2.5 rounded-full">
            <ShoppingCart className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[#08153A] font-semibold text-sm">Easy Management</span>
          </div>

          <div className="flex items-center gap-2 bg-[#08153A]/5 border border-[#08153A]/10 px-5 py-2.5 rounded-full">
            <Sparkles className="w-4 h-4 text-[#FF6600]" />
            <span className="text-[#08153A] font-semibold text-sm">Mobile Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;