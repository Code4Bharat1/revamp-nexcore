import React from "react";
import { MessageCircle, ArrowRight, Phone, Code, Zap, TrendingUp } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-[#08153A] py-16 sm:py-24 flex items-center justify-center overflow-hidden border-t border-b border-white/10">
      <div className="relative z-10 px-6 sm:px-12 max-w-5xl mx-auto text-center">
        {/* Decorative badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-xs font-bold uppercase tracking-widest">
            <Code className="w-3.5 h-3.5" />
            <span>API Integration Experts</span>
          </div>
        </div>

        {/* Subheading */}
        <h3 className="text-white/70 text-base sm:text-lg mb-3 font-medium">
          Drop us a line! We are here to answer your questions
        </h3>

        {/* Main Heading */}
        <div className="mb-8">
          <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            Odoo API Integration For{" "}
            <span className="text-[#FF6600]">
              Enhanced Business Productivity
            </span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Seamlessly connect your systems and unlock the full potential of your business operations
          </p>
        </div>

        {/* Features row */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white text-xs sm:text-sm font-bold">
            <Zap className="w-4 h-4 text-[#FF6600]" />
            <span>Fast Integration</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white text-xs sm:text-sm font-bold">
            <Code className="w-4 h-4 text-[#FF6600]" />
            <span>Secure API</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white text-xs sm:text-sm font-bold">
            <TrendingUp className="w-4 h-4 text-[#FF6600]" />
            <span>Boost Productivity</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white text-xs sm:text-sm font-bold">
            <Phone className="w-4 h-4 text-[#FF6600]" />
            <span>24/7 Support</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

          <a href="/contact">
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-[#08153A] border border-white/20 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base">
              <Phone className="w-4 h-4" />
              <span>Schedule a Call</span>
            </button>
          </a>
        </div>

        {/* API Integration Benefits */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-3xl font-black text-[#FF6600] mb-1">
              100+
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">API Integrations</p>
          </div>
          <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-3xl font-black text-white mb-1">
              99.9%
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">Uptime Guaranteed</p>
          </div>
          <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-3xl font-black text-[#FF6600] mb-1">
              &lt;24h
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">Response Time</p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-white/70 text-xs sm:text-sm mt-8 flex items-center justify-center gap-2 font-medium">
          <span className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></span>
          Our API integration specialists are ready to help • Connect with us today
        </p>
      </div>
    </section>
  );
};

export default ContactSection;