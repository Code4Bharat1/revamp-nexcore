"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cards = () => {
  // Define the cards data
  const cards = [
    {
      id: 1,
      title: "Out-of-the-box Odoo Helpdesk Module Supports Multi-Channels",
      subtitle: "Reach out to your customers where they are",
      content: [
        "Email - Set new incoming emails to create tickets automatically.",
        "Website Form - Create a customizable website form to qualify your customers' queries.",
        "Live Chat - Instantly engage visitors by using the Live Chat plugin on your website.",
      ],
      icon: "/images/App images/App Icons/help.png",
    },
    {
      id: 2,
      title: "SLAs, Automation, Templates, and Canned Responses for Optimized Productivity",
      subtitle: "Odoo Helpdesk is well-optimized to increase your team's productivity",
      content: [
        "Define your SLA rules and allow Odoo Helpdesk to take action automatically.",
        "Set automated responses at diverse stages of ticket resolution.",
        "Use dynamic email templates to automate most usual responses.",
        "Escalate tickets in seconds with just a click.",
        "Invite experts into a live discussion.",
        "Creating canned responses to answer instantly in live chat.",
      ],
      icon: "/images/App images/App Icons/odoo-helpdesk-management-development-sla-automation-templates.png",
    },
    {
      id: 3,
      title: "Sell Contracts Of Your Support",
      subtitle: "Sell, renew, and upsell easily",
      content:
        "Automatically offer helpdesk services to your customers by selling support contracts. With the assistance of the timesheet app, you can monitor time on each contract, and upsell intuitively with time-limited contracts. Set alerts for your sales or helpdesk team depending on your customer status.",
      icon: "/images/App images/App Icons/odoo-helpdesk-module-service-to-customer.png",
    },
    {
      id: 4,
      title: "Deliver smarter self-service",
      subtitle: "In-built customer information base",
      content:
        "You can directly link your FAQs, training videos and presentations on a ticket and develop your own self-service platform. Create a community around your product with the forum.",
      icon: "/images/App images/App Icons/odoo-helpdesk-module-self-service.png",
    },
    {
      id: 5,
      title: "Enable customers to close their tickets",
      subtitle: "Increase productivity, Grant autonomy",
      content:
        "Avoid misunderstandings, reduce errors and give more time for Helpdesk Teams to think about what needs their focus truly.",
      icon: "/images/App images/App Icons/odoo-helpdesk-teams-management-development.png",
    },
  ];

  // State for managing the index of the current card being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to decide how many cards should be shown at once based on screen size
  const [cardsToShow, setCardsToShow] = useState(2); // default for medium screens and up

  // Effect to handle screen resizing and adjust the number of cards to show accordingly
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Show 1 card for small screens
      } else {
        setCardsToShow(2); // Show 2 cards for medium and larger screens
      }
    };

    // Call the function initially
    updateCardsToShow();

    // Add event listener to update the number of cards to show on window resize
    window.addEventListener("resize", updateCardsToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  // Handle showing the next card when the next button is clicked
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Handle showing the previous card when the previous button is clicked
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Slice the cards array to show the correct number of visible cards based on currentIndex and cardsToShow
  const visibleCards = cards
    .slice(currentIndex, currentIndex + cardsToShow)
    .concat(
      cards.slice(0, Math.max(0, currentIndex + cardsToShow - cards.length))
    );

  // Function to render content based on whether it's an array (list) or a regular string
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
          {content.map((item, index) => (
            <li key={index}>
              <span className="font-bold">{item.split(" ")[0]}</span> {item.slice(item.indexOf(" ") + 1)}
            </li>
          ))}
        </ul>
      );
    } else {
      return <p className="text-gray-600 text-sm md:text-base leading-relaxed">{content}</p>;
    }
  };

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
            aria-label="Previous card"
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition flex items-center justify-center z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 4.293a1 1 0 011.414 1.414L9.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5z"
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
                className="w-full sm:w-auto md:max-w-md bg-white rounded-lg shadow-xl p-8 text-center flex-shrink-0 transition-all duration-300 hover:shadow-2xl h-[400px] overflow-y-auto [transform-style:preserve-3d]"
              >
                <img
                  src={card.icon}
                  alt={card.title ? `${card.title} icon` : "Feature icon"}
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto w-20 h-20 mb-6"
                />
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{card.title}</h3>
                <h3 className="text-xl md:text-[16px] font-bold mb-4 text-gray-400">{card.subtitle}</h3>
                {renderContent(card.content)}
              </motion.div>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            aria-label="Next card"
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition flex items-center justify-center z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.707 4.293a1 1 0 000 1.414L11.586 10l-3.879 3.879a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z"
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
                  : "bg-gray-300 hover:bg-[#7f757c]"
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

