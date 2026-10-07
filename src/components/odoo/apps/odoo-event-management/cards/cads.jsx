import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Megaphone, BarChart3, Search, Ticket, Users } from "lucide-react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "A Complete Promotional Toolkit",
      subtitle: "Make event promotions on multiple channels efficiently",
      content:
        "Split your audience and utilize social media and email marketing to publicize your events to the right set of audiences. Keep all your attendees engaged by composing automated email campaigns or sending text messages or personalizing content to specific audience types or segments. Set up ad-hoc landing pages for your various marketing campaigns and optimize conversions.",
      icon: "/images/App images/App Icons/odoo-event-management-event-registration.png",
      lucideIcon: Megaphone,
      color: "green"
    },
    {
      id: 2,
      title: "Integrate Google Analytics",
      subtitle: "Keep an eye on your event analytics at every step",
      content:
        "Odoo's integration with Google Analytics is auto-configured to monitor all types of events via online cart and check out, call-to-actions and more. Also, every marketing tool is linked with Google Analytics to present you with a total overview of your business.",
      icon: "/images/App images/App Icons/odoo-event-management-system.png",
      lucideIcon: BarChart3,
      color: "emerald"
    },
    {
      id: 3,
      title: "SEO Integration",
      subtitle: "Enhance visibility and pull more attendees to your event",
      content:
        "Odoo has directly available ready-to-use SEO tools that require no configuration. Make use of the keywords that are suggested based on Google search volume and carefully structure your content and promote your events.",
      icon: "/images/App images/App Icons/event3.png",
      lucideIcon: Search,
      color: "teal"
    },
    {
      id: 4,
      title: "Sell online tickets for your event",
      subtitle: "Set automatic registration and payment process",
      content:
        " Handle event registration and online ticket sales on the go. You can choose to either publish a free event or make your attendees get tickets through the event page. Set the payment mode with customer invoicing or online credit card transactions. Specify terms such as early-bird offers, perks and benefits for members, or multiple ticket tiers. Odoo Event module has everything you need to increase your event attendance and handle your guest lists all from a single place.",
      icon: "/images/App images/App Icons/odoo-event-management-integrate-google-analytics.png",
      lucideIcon: Ticket,
      color: "green"
    },
    {
      id: 5,
      title: "Attract sponsors for your events",
      subtitle: "Sell sponsorship packages and publicize your partners",
      content:
        " Handle new and existing sponsors comfortably with Odoo Events Management System. Pull sponsors to your events and display sponsors on every page of the event in order based on the level of sponsorship they purchase. Sell event sponsorship online through Odoo apps like Odoo eCommerce.",
      icon: "/images/App images/App Icons/odoo-event-management-seo-integration.png",
      lucideIcon: Users,
      color: "emerald"
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
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 sm:py-24 overflow-hidden">
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

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex items-center justify-between gap-4 mb-10">
          {/* Enhanced Previous Button */}
          <button
            onClick={handlePrev}
            className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Enhanced Cards */}
          <div className="flex gap-3 sm:gap-6 overflow-x-hidden justify-center w-full">
            {visibleCards.map((card) => {
              const LucideIcon = card.lucideIcon;
              const colorClasses = getColorClasses(card.color);
              
              return (
                <div
                  key={card.id}
                  className="group relative w-full sm:w-auto md:max-w-md bg-white rounded-2xl shadow-xl p-8 text-center flex-shrink-0 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
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
                      <div className={`absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br ${colorClasses.gradient} rounded-full flex items-center justify-center shadow-lg animate-bounce`} style={{ animationDuration: '2s' }}>
                        <LucideIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                      {card.title}
                    </h3>

                    {/* Subtitle with Gradient */}
                    <h4 className={`text-base md:text-lg font-semibold mb-4 bg-gradient-to-r ${colorClasses.gradient} bg-clip-text text-transparent`}>
                      {card.subtitle}
                    </h4>

                    {/* Gradient Underline */}
                    <div className={`w-16 h-1 bg-gradient-to-r ${colorClasses.gradient} rounded-full mx-auto mb-4`}></div>

                    {/* Content */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {card.content}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Next Button */}
          <button
            onClick={handleNext}
            className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
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

export default Cards;