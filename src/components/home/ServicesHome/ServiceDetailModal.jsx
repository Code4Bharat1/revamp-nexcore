"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  FaTimes, 
  FaStar, 
  FaClock, 
  FaCheckCircle, 
  FaArrowRight,
  FaCode,
  FaPenNib,
  FaCog,
  FaCloud,
  FaWifi,
  FaChartBar
} from "react-icons/fa";

const iconMap = {
  code: FaCode,
  pen: FaPenNib,
  gear: FaCog,
  cloud: FaCloud,
  iot: FaWifi,
  erp: FaChartBar,
};

const ServiceDetailModal = ({ service, onClose }) => {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  // Lock body scroll on mount and restore on unmount
  useEffect(() => {
    if (typeof window === "undefined" || !service) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const overlay = overlayRef.current;
    const modal = modalRef.current;
    const contentBox = contentRef.current;

    let ctx;

    if (!isReducedMotion && overlay && modal) {
      ctx = gsap.context(() => {
        // Overlay fade in
        gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.22, ease: "power2.out" });

        // Modal scale & slide up
        gsap.fromTo(
          modal,
          { opacity: 0, scale: 0.94, y: 18 },
          { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power3.out" }
        );

        // Stagger internal modal content elements
        if (contentBox) {
          const children = contentBox.querySelectorAll(".modal-stagger");
          if (children.length > 0) {
            gsap.fromTo(
              children,
              { opacity: 0, y: 12 },
              { opacity: 1, y: 0, duration: 0.28, stagger: 0.04, ease: "power2.out", delay: 0.08 }
            );
          }
        }
      });
    }

    // ESC Key Listener
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        performClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (ctx) ctx.revert();
    };
  }, [service]);

  if (!service) return null;

  // Direct, robust close handler with exit animation + instant fallback
  const performClose = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    const overlay = overlayRef.current;
    const modal = modalRef.current;

    if (overlay && modal) {
      gsap.to(modal, {
        opacity: 0,
        scale: 0.95,
        y: 10,
        duration: 0.18,
        ease: "power2.in",
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => {
          onClose();
        },
      });

      // Timeout fallback to guarantee close even if GSAP callback is interrupted
      setTimeout(() => {
        onClose();
      }, 200);
    } else {
      onClose();
    }
  };

  const IconComp = service.Icon || iconMap[service.iconType] || FaCode;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-[#08153A]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={performClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#08153A]/10 relative text-[#08153A]"
      >
        {/* Close Button (X Cross) */}
        <button
          type="button"
          onClick={performClose}
          aria-label="Close Modal"
          className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#08153A]/5 hover:bg-[#FF6600] border border-[#08153A]/10 flex items-center justify-center transition-all duration-200 cursor-pointer text-[#08153A] hover:text-white hover:scale-110 active:scale-95 z-50"
        >
          <FaTimes className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>

        <div ref={contentRef} className="space-y-6">
          {/* Icon and Title Header */}
          <div className="modal-stagger flex items-start gap-4 sm:gap-5 pr-10">
            <div 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 bg-[#08153A] text-white border border-[#08153A] transition-transform hover:scale-105"
            >
              <IconComp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl sm:text-3xl font-black text-[#08153A] mb-1.5 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-[#08153A]/75 font-medium leading-relaxed mb-3">
                {service.description}
              </p>
              
              {/* Modal Information Badges */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <div className="flex items-center gap-1.5 bg-[#FF6600]/10 border border-[#FF6600]/20 px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-[#FF6600]">
                  <FaStar className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span>{service.rating || "4.9"} Rating</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#08153A]/5 border border-[#08153A]/15 px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-[#08153A]">
                  <FaClock className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span>{service.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#08153A]/5 border border-[#08153A]/15 px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-[#08153A]">
                  <FaCheckCircle className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span>{service.projectsCompleted || "50+"} Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details Body Description */}
          <div className="modal-stagger bg-[#08153A]/5 p-4.5 sm:p-5 rounded-2xl border border-[#08153A]/10">
            <p className="text-sm sm:text-base text-[#08153A]/85 leading-relaxed font-medium">
              {service.details}
            </p>
          </div>

          {/* Sub Services Tags */}
          {service.subServices && service.subServices.length > 0 && (
            <div className="modal-stagger">
              <h4 className="text-xs font-bold text-[#08153A]/60 uppercase tracking-wider mb-2.5">Included Domains & Services</h4>
              <div className="flex flex-wrap gap-2">
                {service.subServices.map((sub, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full bg-[#08153A]/5 text-[#08153A] text-xs font-bold border border-[#08153A]/10">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Capabilities & Features */}
          <div className="modal-stagger">
            <h4 className="text-base sm:text-lg font-bold text-[#08153A] mb-3">Key Capabilities & Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
              {service.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#08153A]/10 hover:bg-[#FF6600]/5 hover:border-[#FF6600]/30 transition-all duration-200 shadow-2xs group cursor-default"
                >
                  <div 
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#FF6600] group-hover:scale-125 transition-transform"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-[#08153A]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="modal-stagger pt-2">
            <a 
              href="https://wa.me/918976104646" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button 
                type="button"
                className="w-full py-3.5 sm:py-4 text-white font-bold rounded-2xl bg-[#08153A] hover:bg-[#FF6600] shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 text-sm sm:text-base hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get Started with {service.title}</span>
                <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
