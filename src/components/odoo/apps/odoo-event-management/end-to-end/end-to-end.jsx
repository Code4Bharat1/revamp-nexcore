import React from 'react';
import { Sparkles, Calendar, Users, Building2, Video, Trophy, Music, CheckCircle } from 'lucide-react';

const Endtoend = () => {
  const eventTypes = [
    { icon: Building2, name: "Classes", color: "green" },
    { icon: Users, name: "Charity", color: "emerald" },
    { icon: Trophy, name: "Exhibition", color: "teal" },
    { icon: Calendar, name: "Conferences", color: "green" },
    { icon: Video, name: "Webinars", color: "emerald" },
    { icon: Music, name: "Festivals", color: "teal" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "text-green-400 bg-green-500/20 border-green-400/30",
      emerald: "text-emerald-400 bg-emerald-500/20 border-emerald-400/30",
      teal: "text-teal-400 bg-teal-500/20 border-teal-400/30"
    };
    return colors[color];
  };

  return (
    <div className="relative min-h-[42rem] md:min-h-[37rem] bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white overflow-hidden">
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Enhanced Background Images */}
      <div
        className="absolute bottom-0 right-0 w-[200px] sm:w-[264px] h-[300px] sm:h-[362px] bg-contain bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[250px] sm:w-[366px] h-[350px] sm:h-[501px] bg-contain bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-green-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-emerald-400 rounded-lg opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 py-16 sm:py-20 gap-12">
        {/* Left Section: Enhanced Image */}
        <div className="w-full lg:w-1/2 group">
          {/* Glowing Border Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          {/* Image Container */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl transform group-hover:scale-105 transition duration-500">
            {/* Colorful Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-green-500 opacity-20 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500 opacity-20 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-teal-500 opacity-20 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-600 opacity-20 rounded-br-2xl"></div>

            <img
              src="/images/App images/Odoo-event-management-module.png"
              alt="Odoo Event Management Module"
              className="rounded-xl w-full shadow-2xl"
            />

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-bounce" style={{ animationDuration: '2s' }}>
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">Complete Solution</span>
            </div>
          </div>
        </div>

        {/* Right Section: Enhanced Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
              Comprehensive Event Management
            </span>
          </div>

          {/* Main Heading with Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            End-to-end{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Event Management
            </span>{" "}
            with Odoo
          </h2>

          {/* Decorative Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Odoo event management is a complete software, capable of handling events from small to large scale. Odoo Events Features takes care of an entire range of event planner's jobs from organizing events and selling tickets to increasing visibility & promotions.
          </p>

          {/* Event Types Section */}
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-bold text-white">Event Types We Support:</h3>
            </div>

            {/* Event Types Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {eventTypes.map((eventType, index) => {
                const Icon = eventType.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 ${getColorClasses(eventType.color)} p-3 rounded-xl border backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-white font-semibold text-sm">{eventType.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
              <span className="text-sm font-bold text-green-300">Small to Large Scale</span>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/30">
              <span className="text-sm font-bold text-emerald-300">Complete Features</span>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-400/30">
              <span className="text-sm font-bold text-teal-300">All-in-One Solution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endtoend;