'use client';
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Zap, Sparkles, TrendingUp } from "lucide-react";

const Card = () => {
  const cards = [
    {
      id: 1,
      title: "Clear and Dynamic Business Reports",
      content: "Generate your reports the way you like them. With the feature for Business Intelligence, Odoo accounting enables to report across any dimension. Futuristic features are available to filter, zoom, annotate and compare any data.",
      icon: "/images/App images/odoo-erp-solutions-account-reports.png",
      gradient: "from-emerald-500 to-teal-500",
      badge: "Analytics",
      iconComponent: <BarChart3 className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Rapid Payment and Transactions with Odoo Accounting",
      content: "Accounting offers automated follow-ups for faster payments, making it easy to create and send invoices, receive payments online, and remind your debtors in no time. With this feature, you can easily keep track of your outstanding invoices and take action to ensure timely payment.",
      icon: "/images/App images/App Icons/odoo-erp-solutions-account-payments-and-trasactions.png",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Payments",
      iconComponent: <Zap className="w-4 h-4" />
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-16 sm:py-20 overflow-hidden [perspective:1000px]"
      style={{
        backgroundImage: "url(/images/odoo-images/bg-maps-dots.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg"
        >
          <Sparkles className="w-4 h-4" />
          <span>Key Features</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Powerful Accounting Capabilities
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need for complete financial management
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 px-6 sm:px-12 lg:px-24 relative z-10 [transform-style:preserve-3d]">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
            className="group bg-white shadow-xl rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl relative overflow-hidden border border-gray-100"
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

            {/* Header Section */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
              {/* Icon Container with Enhanced Effects */}
              <div className="relative flex-shrink-0">
                {/* Glowing Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse`}></div>
                
                {/* Icon Background */}
                <div className={`relative bg-gradient-to-br ${card.gradient} p-1 rounded-2xl transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                  <div className="bg-white rounded-xl p-3">
                    <img
                      src={card.icon}
                      alt="Feature Icon"
                      className="w-16 h-16 relative z-10"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 leading-tight pt-2">
                {card.title}
              </h3>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-base leading-relaxed relative z-10">
              {card.content}
            </p>

            {/* Bottom Accent Line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

            {/* Corner Decoration */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <TrendingUp className={`w-6 h-6 text-emerald-500`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 flex justify-center items-center gap-8 mt-16 flex-wrap">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg"
        >
          <BarChart3 className="w-5 h-5 text-emerald-500" />
          <span className="text-gray-700 font-semibold">Real-Time Reports</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg"
        >
          <Zap className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700 font-semibold">Fast Processing</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg"
        >
          <Sparkles className="w-5 h-5 text-teal-500" />
          <span className="text-gray-700 font-semibold">Automated Workflows</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Card;