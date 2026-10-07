import React from "react";
import { MessageCircle, ArrowRight, Phone, Headphones, CheckCircle2, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-24 overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 border border-[#FF6600]/30 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Headphones className="w-3.5 h-3.5" />
            <span>Expert Consultation Available</span>
          </div>

          {/* Subheading */}
          <p className="text-white/80 text-sm sm:text-base font-medium mb-3">
            Drop us a line! We are here to answer your questions
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            NEED A{" "}
            <span className="text-[#FF6600]">
              CONSULTATION?
            </span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Our experts are ready to guide you through your Odoo offshore development journey
          </p>

          {/* Features row */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-[#FF6600]" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-[#FF6600]" />
              <span>Expert Guidance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/8976104646"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-3.5 px-8 rounded-lg shadow-md transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Us Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Button */}
            <a
              href="/contactus"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-[#FF6600]" />
              <span>Schedule Call</span>
            </a>
          </div>

          {/* Consultation Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10">
            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-1">
                Free
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Initial Consultation</p>
            </div>
            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                &lt;2h
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Response Time</p>
            </div>
            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-1">
                24/7
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Available Support</p>
            </div>
          </div>

          {/* Bottom text */}
          <p className="text-white/60 text-xs sm:text-sm mt-8 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF6600] rounded-full"></span>
            Our consultation experts are online now • Get instant answers
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;