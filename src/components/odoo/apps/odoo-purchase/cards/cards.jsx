"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, TrendingUp, BarChart3, Building2 } from "lucide-react";

const Card = () => {
  const cards = [
    {
      id: 1,
      title: "Product availability & Supplier price-lists",
      content:
        "You can easily import the price lists of suppliers and compare them based on promotions, quantities and special contract conditions to perform smart purchases. Check the availability of products in the stock of different vendors and monitor your order status within the app. Concerning your supplier's price, you can even base your selling price.",
      icon: "/images/App images/App Icons/odoo-purchase-development-for-smart-purchases-icon.webp",
      lucideIcon: ShoppingBag,
      color: "green"
    },
    {
      id: 2,
      title: "Avail the best deals with purchase tenders",
      content:
        "You can negotiate with multiple vendors, pick the best deal and purchase items at a beneficial price easily. Odoo purchase allows you to launch purchase tenders, integrate responses from vendors in the process and compare various propositions. Leverage reports analysing the quality of your vendors. You can also buy goods from a supplier at a negotiated price, regularly during a particular time by using a blanket order agreement.",
      icon: "/images/App images/App Icons/odoo-purchase-app-for-negotiate-with-multiple-vendor-icon.webp",
      lucideIcon: TrendingUp,
      color: "emerald"
    },
    {
      id: 3,
      title: "Get purchases statistics",
      content:
        "Plan your orders efficiently with precise forecasts and analysis. Have detailed and accurate statistics on your suppliers' performance through flexible reporting that includes delays in delivery, negotiated price discounts, purchased quantities and more. Study your contracts' profitability by integrating purchases with analytic accounting.",
      icon: "/images/App images/App Icons/odoo-purchase-module-for-your-purchases-Statistics.webp",
      lucideIcon: BarChart3,
      color: "teal"
    },
    {
      id: 4,
      title: "Multiple companies management",
      content:
        "Odoo purchase has multi-company options that allow you to save time and effort. With just a single Odoo instance, you can synchronize multiple operations between various companies or warehouses. Set up sales orders, share customers, products & suppliers and handle invoices for all companies simultaneously. By automating the invoicing between several companies, even more, time can be saved.",
      icon: "/images/App images/App Icons/manage-multiple-companies-with-odoo-purchase-software-icon.webp",
      lucideIcon: Building2,
      color: "green"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    function updateItemsPerSlide() {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    }

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

  const getColorClasses = (color) => {
    const colors = {
      green: {
        gradient: "from-green-500 to-emerald-500",
        icon: "text-green-600",
        glow: "group-hover:shadow-green-500/50"
      },
      emerald: {
        gradient: "from-emerald-500 to-teal-500",
        icon: "text-emerald-600",
        glow: "group-hover:shadow-emerald-500/50"
      },
      teal: {
        gradient: "from-teal-500 to-green-500",
        icon: "text-teal-600",
        glow: "group-hover:shadow-teal-500/50"
      }
    };
    return colors[color];
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 sm:py-24 overflow-hidden [perspective:1000px]">
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url(/images/odoo-images/bg-maps-dots.jpg)",
        }}
      ></div>

      {/* Floating Decorative Shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-green-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-emerald-300 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 [transform-style:preserve-3d]">
        <div className="flex items-center justify-between gap-4 mb-10">
          {/* Enhanced Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full p-4 shadow-xl flex-shrink-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Enhanced Cards */}
          <div className="flex gap-6 overflow-hidden justify-center w-full [transform-style:preserve-3d]">
            {cards
              .slice(currentIndex, currentIndex + itemsPerSlide)
              .concat(
                cards.slice(
                  0,
                  Math.max(0, currentIndex + itemsPerSlide - cards.length)
                )
              )
              .map((card) => {
                const LucideIcon = card.lucideIcon;
                const colorClasses = getColorClasses(card.color);
                
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 30, rotateX: 5 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="group relative w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center flex-shrink-0 [transform-style:preserve-3d]"
                  >
                    {/* Glowing Border Effect on Hover */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500`}></div>
                    
                    {/* Card Content */}
                    <div className="relative">
                      {/* Icon Container with Gradient Background */}
                      <div className={`relative mx-auto w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br ${colorClasses.gradient} p-1 shadow-lg ${colorClasses.glow} transition-all duration-300`}>
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                          <img
                            src={card.icon}
                            alt="Icon"
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        
                        {/* Floating Lucide Icon Badge */}
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          className={`absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br ${colorClasses.gradient} rounded-full flex items-center justify-center shadow-lg`}
                        >
                          <LucideIcon className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>

                      {/* Title with Gradient Underline */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                        {card.title}
                      </h3>
                      <div className={`w-16 h-1 bg-gradient-to-r ${colorClasses.gradient} rounded-full mx-auto mb-4`}></div>

                      {/* Content */}
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {card.content}
                      </p>

                      {/* Bottom Accent Line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </motion.div>
                );
              })}
          </div>

          {/* Enhanced Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full p-4 shadow-xl flex-shrink-0"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {cards.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index
                  ? "w-12 h-4 bg-gradient-to-r from-green-600 to-emerald-600"
                  : "w-4 h-4 bg-gray-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;