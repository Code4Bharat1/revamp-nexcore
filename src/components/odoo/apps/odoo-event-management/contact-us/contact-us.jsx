import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Phone, MessageCircle, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden mt-4 lg:-mt-1">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      
      {/* Decorative Blur Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-[300px] sm:min-h-[400px] flex items-center justify-center px-4 sm:px-0">
        {/* Image Container with Glow Effect */}
        <div className="relative group max-w-6xl w-full">
          {/* Glowing Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
          
          {/* Background Image Container */}
          <div
            className="relative bg-cover bg-center text-center min-h-[300px] sm:min-h-[400px] flex items-center justify-center rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>
            
            {/* Floating Badges */}
            {/* Top-right: Event Success Badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-800">Event Excellence</span>
            </div>
            
            {/* Bottom-left: 24/7 Support Badge */}
            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse hover:scale-105 transition-transform duration-300">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-sm font-bold text-white">Expert Support</span>
            </div>
            
            {/* Text Content */}
            <div className="relative z-10 px-4 sm:px-8 max-w-3xl">
              {/* Icon Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">
                  Organize Successful Events
                </span>
              </div>

              {/* Subheading */}
              <h3 className="text-lg sm:text-2xl leading-tight font-semibold drop-shadow-lg mb-3 text-white">
                Get Odoo Events App to organize business events and make them a huge success
              </h3>

              {/* Main Heading with Gradient */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                  Talk to our team now
                </span>
              </h2>

              {/* Decorative Line */}
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-6"></div>
              
              {/* Buttons Group */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Primary CTA Button */}
                <Link href="https://wa.me/8976104646">
                  <button className="group bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>

                {/* Secondary Button */}
                <Link href="/schedule-demo">
                  <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border-2 border-white/30 hover:border-white/50 shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    <span>Schedule Demo</span>
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-sm text-white font-medium">Event Experts</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm text-white font-medium">Quick Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;