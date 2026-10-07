import React from "react";
import { MessageCircle, ArrowRight, Zap, Bot, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";

const SecondcontactSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="relative z-10 px-6 sm:px-12 max-w-5xl mx-auto">
        <div className="bg-[#08153A] rounded-3xl p-8 sm:p-14 border border-white/10 text-center space-y-6">
          {/* Icon Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FF6600] rounded-2xl text-white shadow-xl">
              <Bot className="w-7 h-7" />
            </div>
          </div>

          {/* Subheading */}
          <h3 className="text-[#FF6600] text-sm sm:text-base font-bold uppercase tracking-widest">
            Integration is the First Step Towards Automation!
          </h3>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Interested in Automating Your <span className="text-[#FF6600]">Business With Us?</span>
          </h2>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-3 py-2">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-bold">
              <Zap className="w-4 h-4 text-[#FF6600]" />
              <span>Fast Integration</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
              <span>Seamless Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-bold">
              <TrendingUp className="w-4 h-4 text-[#FF6600]" />
              <span>Boost Efficiency</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/8976104646"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start Automating Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Button */}
            <a href="/contact">
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-[#08153A] border border-white/20 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base">
                <Sparkles className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </a>
          </div>

          {/* Automation Benefits */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-6 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#FF6600] mb-1">
                3x
              </div>
              <p className="text-white/70 text-xs sm:text-sm font-medium">Faster Process</p>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                80%
              </div>
              <p className="text-white/70 text-xs sm:text-sm font-medium">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#FF6600] mb-1">
                24/7
              </div>
              <p className="text-white/70 text-xs sm:text-sm font-medium">Operations</p>
            </div>
          </div>

          {/* Bottom text */}
          <p className="text-white/60 text-xs sm:text-sm pt-2 flex items-center justify-center gap-2 font-medium">
            <span className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse"></span>
            Ready to transform your business • Let's automate together
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondcontactSection;