import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

const SecondcontactSection = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="relative z-10 px-6 sm:px-12 max-w-4xl mx-auto text-center">
        <div className="bg-[#08153A] rounded-3xl p-8 sm:p-14 border border-white/10">
          {/* Subheading */}
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-black leading-tight mb-6">
            Contact Us for <span className="text-[#FF6600]">Odoo Migration Service</span> and Watch Your Company Grow Better
          </h3>

          {/* Button */}
          <div className="mt-6">
            <Link href="https://wa.me/8976104646" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2.5 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
                <MessageCircle className="w-4 h-4" />
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default SecondcontactSection;
