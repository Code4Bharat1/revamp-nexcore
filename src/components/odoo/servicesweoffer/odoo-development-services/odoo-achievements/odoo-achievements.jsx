import React from 'react';
import { FaLaptopCode, FaAward, FaProjectDiagram, FaMobileAlt, FaGlobe, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const OdooAchievements = () => {
  const achievements = [
    {
      icon: FaLaptopCode,
      title: "20000+ Hours",
      subtitle: "Of Implementation",
      stat: "20K+",
    },
    {
      icon: FaAward,
      title: "Odoo Gold",
      subtitle: "Partner Status",
      stat: "Gold",
    },
    {
      icon: FaProjectDiagram,
      title: "75+ Projects",
      subtitle: "Across Industries",
      stat: "75+",
    },
    {
      icon: FaMobileAlt,
      title: "10000+ Apps",
      subtitle: "Developed",
      stat: "10K+",
    },
    {
      icon: FaGlobe,
      title: "3 Decades",
      subtitle: "Functional Experience",
      stat: "30Y+",
    }
  ];

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-4">
            <FaTrophy className="text-sm" />
            <span>Our Achievements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08153A] mb-4">
            Excellence in <span className="text-[#FF6600]">Odoo Implementation</span>
          </h2>

          <p className="text-[#08153A]/70 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Proven track record of delivering world-class Odoo solutions
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
          {achievements.slice(0, 3).map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-[#08153A]/10 hover:border-[#FF6600]/40 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#08153A] text-[#FF6600] flex items-center justify-center mb-5">
                  <Icon className="text-2xl" />
                </div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] font-black text-sm mb-3">
                  {achievement.stat}
                </div>
                <h3 className="text-[#08153A] font-black text-xl mb-1">
                  {achievement.title}
                </h3>
                <p className="text-[#08153A]/70 text-sm font-medium">
                  {achievement.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Row */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.slice(3).map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-[#08153A]/10 hover:border-[#FF6600]/40 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#08153A] text-[#FF6600] flex items-center justify-center mb-5">
                  <Icon className="text-2xl" />
                </div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] font-black text-sm mb-3">
                  {achievement.stat}
                </div>
                <h3 className="text-[#08153A] font-black text-xl mb-1">
                  {achievement.title}
                </h3>
                <p className="text-[#08153A]/70 text-sm font-medium">
                  {achievement.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div variants={itemVariants} className="mt-14 text-center">
          <div className="inline-block bg-[#08153A] rounded-3xl p-8 sm:p-10 border border-white/10 max-w-2xl w-full text-center">
            <p className="text-white font-bold text-lg sm:text-xl mb-6">
              Ready to experience excellence in Odoo implementation?
            </p>
            <a href="/contact">
              <button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                Get Started Today
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OdooAchievements;