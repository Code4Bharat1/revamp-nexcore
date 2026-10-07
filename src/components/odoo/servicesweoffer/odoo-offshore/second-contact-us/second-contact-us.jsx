import React from "react";
import { MessageCircle, ArrowRight, Rocket, Zap, Users, CheckCircle2 } from "lucide-react";

const ContactSectionsecond = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20 overflow-hidden border-b border-[#08153A]/10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="bg-[#08153A] rounded-2xl p-8 sm:p-12 lg:p-16 border border-[#08153A] text-white relative overflow-hidden text-center">
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            {/* Icon Badge */}
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-[#FF6600]" />
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Work{" "}
              <span className="text-[#FF6600]">
                With Us?
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Let's transform your business together with world-class offshore development services
            </p>

            {/* Benefits Pills */}
            <div className="flex flex-wrap justify-center gap-3 py-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
                <Zap className="w-4 h-4 text-[#FF6600]" />
                <span>Quick Start</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
                <Users className="w-4 h-4 text-[#FF6600]" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                <span>Proven Results</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/8976104646"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-3.5 px-8 rounded-lg shadow-md transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Let's Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Button */}
              <a
                href="/servicesweoffer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300"
              >
                <Rocket className="w-4 h-4 text-[#FF6600]" />
                <span>View Portfolio</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-1">
                  150+
                </div>
                <p className="text-white/70 text-xs sm:text-sm font-medium">Projects Delivered</p>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  100%
                </div>
                <p className="text-white/70 text-xs sm:text-sm font-medium">Client Success</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-1">
                  10+
                </div>
                <p className="text-white/70 text-xs sm:text-sm font-medium">Years Experience</p>
              </div>
            </div>

            {/* Bottom text */}
            <p className="text-white/60 text-xs sm:text-sm pt-2 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF6600] rounded-full"></span>
              Join 150+ satisfied clients • Start your project today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionsecond;