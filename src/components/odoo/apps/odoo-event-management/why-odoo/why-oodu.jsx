import React from "react";
import { Sparkles, Award, Users, Calendar, CheckCircle, Shield, Zap, TrendingUp } from "lucide-react";

const Whychoose = () => {
  const benefits = [
    {
      icon: Award,
      title: "Licensed Partner",
      description: "Official Odoo certification",
      color: "green"
    },
    {
      icon: Calendar,
      title: "Event Automation",
      description: "Simplified event processes",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Complete Features",
      description: "End-to-end solutions",
      color: "teal"
    },
    {
      icon: Zap,
      title: "Any Event Size",
      description: "Small to large scale",
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "text-green-600 bg-green-100 border-green-200",
      emerald: "text-emerald-600 bg-emerald-100 border-emerald-200",
      teal: "text-teal-600 bg-teal-100 border-teal-200"
    };
    return colors[color];
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-green-50 py-16 sm:py-20 overflow-hidden">
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Decorative Shapes */}
      <div className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-green-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-16 h-16 border-2 border-emerald-300 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* Enhanced Image Section */}
        <div className="relative group order-2 lg:order-1">
          {/* Glowing Hover Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

          {/* Image Container with Border and Corner Accents */}
          <div className="relative bg-white rounded-2xl p-4 shadow-2xl transform group-hover:scale-105 transition duration-500">
            {/* Colorful Corner Accents */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-green-500 opacity-20 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500 opacity-20 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500 opacity-20 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-600 opacity-20 rounded-br-2xl"></div>

            {/* Image */}
            <img
              src="/images/App images/Odoo-event-management-module.png"
              alt="Odoo Event Management Module"
              className="rounded-xl w-full h-auto"
            />

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-3 rounded-full shadow-xl flex items-center gap-2 animate-bounce" style={{ animationDuration: '2s' }}>
              <Award className="w-5 h-5 text-white" />
              <span className="text-sm font-bold text-white">Licensed Partner</span>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-gray-800">Verified Expert</span>
            </div>
          </div>
        </div>

        {/* Enhanced Text Content */}
        <div className="space-y-6 order-1 lg:order-2">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800 uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>

          {/* Main Heading with Gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Odoo Implementers
            </span>{" "}
            for Odoo Events app?
          </h2>

          {/* Decorative Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>

          {/* Description Paragraphs */}
          <div className="space-y-4">
            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Odoo Implementers is your licensed Odoo partner and offers a wide variety of Odoo software solutions to help increase your business performance.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md border-l-4 border-emerald-500 hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                With the installation of the Odoo Event Management Module, Odoo Implementers assist you in simplifying and automating the process of conducting an event of any size. Odoo Event features all that you need from planning a program and making accommodations to selling tickets and seeking sponsors for events easily and effectively.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:translate-x-2"
                >
                  {/* Icon Container */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${getColorClasses(benefit.color)} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-green-800">Licensed Partner</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200">
              <Users className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-800">Expert Team</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-teal-100 to-green-100 px-4 py-2 rounded-full border border-teal-200">
              <TrendingUp className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-bold text-teal-800">Proven Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;