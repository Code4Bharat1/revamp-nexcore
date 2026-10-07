import React from "react";
import { MessageCircle, ArrowRight, Phone, Mail, Sparkles } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-[#08153A] py-16 sm:py-24 flex items-center justify-center overflow-hidden border-t border-b border-white/10">
      <div className="relative z-10 px-6 sm:px-12 max-w-4xl mx-auto text-center">
        {/* Decorative badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Expert Support</span>
          </div>
        </div>

        {/* Subheading */}
        <h3 className="text-white/70 text-base sm:text-xl leading-relaxed mb-3 font-medium">
          Drop us a line! We are here to answer your questions
        </h3>

        {/* Main Heading */}
        <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
          Keep Your Systems Updated with{" "}
          <span className="text-[#FF6600]">
            Odoo Migration
          </span>
        </h2>

        {/* Features row */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white text-xs sm:text-sm font-bold">
            <Phone className="w-4 h-4 text-[#FF6600]" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white text-xs sm:text-sm font-bold">
            <MessageCircle className="w-4 h-4 text-[#FF6600]" />
            <span>Quick Response</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white text-xs sm:text-sm font-bold">
            <Mail className="w-4 h-4 text-[#FF6600]" />
            <span>Expert Team</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Contact Us Button */}
          <a href="/contact">
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-[#08153A] border border-white/20 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base">
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </a>
        </div>

        {/* Bottom text */}
        <p className="text-white/60 text-xs sm:text-sm mt-8 flex items-center justify-center gap-2 font-medium">
          <span className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></span>
          Our team typically responds within 24 hours
        </p>
      </div>
    </section>
  );
};

export default ContactSection;