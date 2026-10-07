'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, MessageCircle, BarChart3, CheckCircle, Award, Zap } from "lucide-react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Strengthen Your Business with Better Employee Collaboration",
      content:
        "A flexible project management software to simplify the project flow. Indulge in active collaboration with employees to sort and prioritize the tasks. Create customized stages for each project by breaking down the project into tasks. Automatically assign tasks to your team and get the task done in the estimated time. Improve the overall project efficiency with Odoo Project Management Software.",
      icon: "/images/App images/App Icons/odoo-project-management-better-employee-collaboration-icon.png",
      gradient: "from-indigo-500 to-purple-500",
      badge: "Collaboration",
      iconComponent: <Users className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Interact Better and Share Files With Ease",
      content:
        "Collaborate on tasks in real-time with other employees and coordinate the project most effectively. Communicate with others via chat box, write on a shared real-time notepad or use the live chat. All customizable features are available on a single interface. An email-integrated software to communicate effectively among project members and get the work lined up. Attach short notes or files to a task and stay connected with your team. You no longer have to attend endless follow-up meetings to stay on top of your projects.",
      icon: "/images/App images/App Icons/odoo-project-management-share-files-icon.png",
      gradient: "from-purple-500 to-pink-500",
      badge: "Communication",
      iconComponent: <MessageCircle className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Conceptualize Your Project Flow",
      content:
        "A functional and dynamic graph view feature with the feasibility of creating graphs. Analyze your data with the powerful search tool and unique visual interfaces to track your project status. Get an insight into your project in graphs and bars to arrive at better decisions. Pre-defined dashboards serve the sole purpose of your project management from a single window.",
      icon: "/images/App images/App Icons/project3.png",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Analytics",
      iconComponent: <BarChart3 className="w-4 h-4" />
    },
    {
      id: 4,
      title: "Features of Odoo Project",
      content: "Mobile-friendly project tracking • Customizable features • Document management • Automated reports • Clear calendar view for deadlines",
      icon: "/images/App images/App Icons/odoo-project-resources-need.png",
      gradient: "from-green-500 to-emerald-500",
      badge: "Features",
      iconComponent: <CheckCircle className="w-4 h-4" />
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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 overflow-hidden [perspective:1000px]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: "url(/images/odoo-images/bg-maps-dots.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 [transform-style:preserve-3d]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg"
          >
            <Zap className="w-4 h-4" />
            <span>Project Management Features</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Streamline Your Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need for successful project delivery
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 mb-12">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="group bg-white text-indigo-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white flex-shrink-0"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 4.293a1 1 0 011.414 1.414L9.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>

          {/* Cards */}
          <div className="flex gap-8 overflow-hidden justify-center w-full">
            {visibleCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
                className="group w-full max-w-md bg-white rounded-2xl shadow-xl p-10 text-center flex-shrink-0 transition-all duration-500 hover:shadow-2xl relative overflow-hidden border border-gray-100"
              >
                {/* Animated Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Top Levitating Badge */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
                >
                  {card.iconComponent}
                  <span>{card.badge}</span>
                </motion.div>

                {/* Icon Container with Advanced Effects */}
                <div className="relative inline-block mb-8">
                  {/* Rotating Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse`}></div>
                  
                  {/* Icon Background */}
                  <div className={`relative bg-gradient-to-br ${card.gradient} p-1 rounded-full transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                    <div className="bg-white rounded-full p-5">
                      <img
                        src={card.icon}
                        alt="Icon"
                        className="w-16 h-16 relative z-10"
                      />
                    </div>
                  </div>

                  {/* Floating Award Badge */}
                  <div className="absolute -top-1 -right-1 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-5 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 relative z-10">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed relative z-10">
                  {card.content}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </motion.div>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="group bg-white text-indigo-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white flex-shrink-0"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 4.293a1 1 0 000 1.414L11.586 10l-3.879 3.879a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>

        {/* Enhanced Dots Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {cards.map((card, index) => (
            <button
              key={index}
              className={`relative transition-all duration-300 ${
                currentIndex === index
                  ? "w-12 h-3"
                  : "w-3 h-3 hover:scale-125"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? `bg-gradient-to-r ${card.gradient}`
                  : "bg-gray-300 hover:bg-gray-400"
              }`}></div>
            </button>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="flex justify-center items-center gap-8 mt-16 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Users className="w-5 h-5 text-indigo-500" />
            <span className="text-gray-700 font-semibold">Team Collaboration</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <MessageCircle className="w-5 h-5 text-purple-500" />
            <span className="text-gray-700 font-semibold">Real-Time Chat</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700 font-semibold">Visual Analytics</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cards;