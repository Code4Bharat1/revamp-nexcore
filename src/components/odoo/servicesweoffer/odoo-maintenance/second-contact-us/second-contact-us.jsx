import React from "react";
import { MessageCircle, ArrowRight, TrendingUp, Zap, CheckCircle2 } from "lucide-react";

const SecondcontactSection = () => {
  return (
    <section className="relative bg-[#08153A] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Icon Badge */}
          <div className="flex justify-center">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-[#FF6600]" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Grow Your Business with{" "}
            <span className="text-[#FF6600]">
              Odoo Maintenance
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Take your business to the next level with our comprehensive maintenance solutions
          </p>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-3 py-2">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
              <Zap className="w-4 h-4 text-[#FF6600]" />
              <span>Reduce Downtime</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
              <span>Increase Efficiency</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
              <TrendingUp className="w-4 h-4 text-[#FF6600]" />
              <span>Boost Revenue</span>
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
              <span>Contact Us on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Button */}
            <a
              href="/contactus"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-1">
                500+
              </div>
              <p className="text-white/70 text-xs sm:text-sm font-medium">Happy Clients</p>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                98%
              </div>
              <p className="text-white/70 text-xs sm:text-sm font-medium">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#FF6600] mb-1">
                24/7
              </div>
              <p className="text-white/70 text-xs sm:text-sm font-medium">Support</p>
            </div>
          </div>

          {/* Bottom text */}
          <p className="text-white/60 text-xs sm:text-sm pt-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF6600] rounded-full"></span>
            Ready to help you succeed • Start your journey today
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondcontactSection;