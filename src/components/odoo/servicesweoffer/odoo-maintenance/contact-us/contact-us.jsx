import React from "react";
import { MessageCircle, ArrowRight, Phone, Mail, Workflow, CheckCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 border-b border-[#08153A]/10 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="bg-[#08153A] rounded-2xl p-8 sm:p-12 lg:p-16 border border-[#08153A] text-white relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/15 border border-[#FF6600]/30 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Workflow className="w-3.5 h-3.5" />
              <span>Expert Support Available</span>
            </div>

            {/* Subheading */}
            <p className="text-white/80 text-sm sm:text-base mb-3 font-medium">
              Drop us a line! We are here to answer your questions
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Odoo Maintenance{" "}
              <span className="text-[#FF6600]">
                Process Flow
              </span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Let us help you streamline your maintenance operations with our proven process
            </p>

            {/* Features row */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white text-xs sm:text-sm">
                <Phone className="w-4 h-4 text-[#FF6600]" />
                <span>Instant Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white text-xs sm:text-sm">
                <MessageCircle className="w-4 h-4 text-[#FF6600]" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-white text-xs sm:text-sm">
                <Mail className="w-4 h-4 text-[#FF6600]" />
                <span>Expert Team</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://wa.me/8976104646"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-3.5 px-8 rounded-lg shadow-md transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contactus"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#FF6600]" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* Process Flow Steps Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {[
                { num: "01", label: "Analysis" },
                { num: "02", label: "Planning" },
                { num: "03", label: "Execution" },
                { num: "04", label: "Support" }
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-[#FF6600] text-xs font-bold mb-1">{step.num}</div>
                  <div className="text-white font-semibold text-sm">{step.label}</div>
                </div>
              ))}
            </div>

            {/* Bottom text */}
            <p className="text-white/60 text-xs sm:text-sm mt-8 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#FF6600] rounded-full"></span>
              Our maintenance experts typically respond within 2 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;