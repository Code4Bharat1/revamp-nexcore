"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Craft captivating email campaigns in no time",
      content:
        "Have complete control over your email content and layout with the help of an intuitive and user-friendly drag & drop interface. Utilize preset building blocks to form clean paragraphs and insert calls-to-action or images without disturbing a single line of code.",
      icon: "/images/App images/App Icons/odoo-marketing-automation-captivative-email-campaigns.png",
    },
    {
      id: 2,
      title: "Automate emails and much more",
      content:
        "Streamline your workflow by triggering any action you require.Craft customer journeys from the end-end and make use of workflows to mechanize tasks such as taking a lead forward in your sales funnel, assigning interested prospects to your sales team, updating the record books and more.Utilize if/then actions to implement particular tasks after an email has been clicked, read or replied to.",
      icon: "/images/bg-image/odoo-marketing-automation-development-automate-emails.png",
    },
    {
      id: 3,
      title: "A highly functional lead management system",
      content:
        "Set up an advanced approach to generating, nurturing and converting leads into customers.",
      icon: "/images/bg-image/odoo-marketing-automation-lead-management-system.png",
    },
    {
      id: 4,
      title: "Generate Leads",
      content:
        "You can easily generate leads by creating your own website with Odoo Website and other apps such as Odoo Email Marketing and Odoo Events.",
      icon: "/images/bg-image/marketing4.png",
    },
    {
      id: 5,
      title: "Filter Qualified Leads",
      content:
        "By integrating Odoo CRM, acquire leads based on demographic & behavioral categories and move forward the hot ones to your sales teams.",
      icon: "/images/bg-image/odoo-marketing-automation-software-qualified-leads.png",
    },
    {
      id: 6,
      title: "Nurture Leads",
      content:
        "Segregate your low-quality leads as per their interests & objectives and inspire them through relevant lead nurturing campaigns. A tool that operates beyond marketing by assisting you to automate every department’s business processes such as Accounting, Helpdesk, eCommerce, Events and more.",
      icon: "/images/bg-image/odoo-marketing-module-nurture-leads-icon.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Decide how many cards to show at once
  const [cardsToShow, setCardsToShow] = useState(2); // default for md+

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

  // Slice out the correct number of visible cards
  const visibleCards = cards
    .slice(currentIndex, currentIndex + cardsToShow)
    .concat(
      cards.slice(
        0,
        Math.max(0, currentIndex + cardsToShow - cards.length)
      )
    );

  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage:
            "url(/images/odoo-images/bg-maps-dots.jpg)",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex items-center justify-between gap-4 mb-10">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition flex items-center justify-center z-20"
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

          {/* Cards */}
          <div className="flex gap-3 sm:gap-6 overflow-x-hidden justify-center w-full drop-shadow-lg [perspective:1000px]">
            {visibleCards.map((card, idx) => (
              <motion.div
                key={`${card.id}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
                className="w-full sm:w-auto md:max-w-md bg-white rounded-lg shadow-xl p-8 text-center flex-shrink-0 transition-all duration-300 hover:shadow-2xl h-[380px] overflow-y-auto [transform-style:preserve-3d]"
              >
                <img
                  src={card.icon}
                  alt="Icon"
                  className="mx-auto w-20 h-20 mb-6"
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
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition flex items-center justify-center z-20"
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
            <motion.div
              whileHover={{ scale: 1.2 }}
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
                currentIndex === index
                  ? "bg-[#865b79]"
                  : "bg-gray-300 hover:bg-[#8d7f89]"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;

