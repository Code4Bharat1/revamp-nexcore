"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Never lose receipts again",
      content:
        "Odoo expense management system helps you avoid losing receipts by allowing employees to directly upload receipts into the expense log. Users can take a picture of the receipt using any mobile device and add attachments on the go and send them to a designated email address.",
      icon: "/images/App images/App Icons/odoo-expenses-management-system-expense-log.png",
    },
    {
      id: 2,
      title: "Get a clear overview of a team's expenses",
      content:
        "With Odoo expenses, you can manage expenditures per team. It's very easy for managers to track expense records across the whole team to watch costs and ensure they stay on track and within budget.",
      icon: "/images/App images/App Icons/odoo-app-manage-expenses.png",
    },
    {
      id: 3,
      title: "Split the workload between teams",
      content:
        "Odoo Expenses module lets everyone contribute in saving time. Accountants can easily record company and employee expenses by adding them to the log books and processing invoices & payments.",
      icon: "/images/App images/App Icons/odoo-expenses-module-for-team.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2); // Default for md+

  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth < 768 ? 1 : 2); // Show 1 card on small screens, 2 on larger
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= cards.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - cardsToShow : prevIndex - 1
    );
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16 overflow-hidden [perspective:1000px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url(/images/odoo-images/bg-maps-dots.jpg)",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex items-center justify-between gap-4 mb-10">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition flex items-center justify-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 4.293a1 1 0 011.414 1.414L9.414 
                  10l4.293 4.293a1 1 0 01-1.414 
                  1.414l-5-5a1 1 0 
                  010-1.414l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>

          {/* Cards Container */}
          <div className="flex gap-4 sm:gap-6 overflow-hidden justify-center w-full drop-shadow-lg">
            {cards
              .slice(currentIndex, currentIndex + cardsToShow)
              .concat(
                cards.slice(
                  0,
                  Math.max(0, currentIndex + cardsToShow - cards.length)
                )
              )
              .map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 40, rotateY: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
                  className="w-full sm:w-auto md:max-w-md bg-white rounded-lg shadow-xl p-8 text-center flex-shrink-0 [transform-style:preserve-3d]"
                >
                  <Image
                    src={card.icon}
                    alt="Icon"
                    width={80}
                    height={80}
                    className="mx-auto mb-6"
                  />
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {card.content}
                  </p>
                </motion.div>
              ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition flex items-center justify-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 4.293a1 1 0 000 
                  1.414L11.586 10l-3.879 
                  3.879a1 1 0 101.414 1.414l5-5a1 
                  1 0 000-1.414l-5-5a1 1 0 
                  00-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-[#865b79]"
                  : "bg-gray-300 hover:bg-[#8d7f89]"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
