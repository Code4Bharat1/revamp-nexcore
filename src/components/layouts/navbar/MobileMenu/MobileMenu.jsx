"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { 
  Bot, 
  Mic, 
  Layers, 
  AppWindow, 
  Cpu, 
  Boxes, 
  Building2, 
  HeartHandshake, 
  Workflow, 
  Trophy, 
  Users, 
  Globe2 
} from "lucide-react";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  pathname,
  menuItems,
  handleLinkClick,
  scrollToSection,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setOpenDropdown(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleItemNavigate = (scrollId, path) => {
    setIsMenuOpen(false);
    setOpenDropdown(null);

    if (scrollId && typeof window !== "undefined") {
      if (pathname === "/" || pathname === "") {
        const element = document.getElementById(scrollId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      } else {
        window.location.href = `/#${scrollId}`;
        return;
      }
    }

    if (handleLinkClick) handleLinkClick();
  };

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-visibility duration-300 ${
        isMenuOpen ? "pointer-events-auto" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="font-bold text-base text-[#0B1D33]">Navigation Menu</div>
          <button
            className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition-all cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <MdClose className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1.5">
          {menuItems.map(({ name, path, hasDropdown, dropdownType }) => {
            const isOpen = openDropdown === dropdownType;
            const isCurrent = pathname === path;

            if (hasDropdown) {
              return (
                <div key={name} className="border-b border-slate-100 pb-1">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(dropdownType)}
                    className="w-full flex items-center justify-between py-3.5 px-3 rounded-xl text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-[15px]">{name}</span>
                    <AiOutlineRight
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-90 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  {isOpen && dropdownType === "what-we-do" && (
                    <div className="pl-2 pr-1 pb-3 space-y-1.5 animate-in fade-in duration-200">
                      {/* Temporarily hidden — keep implementation for future use
                      <Link
                        href="/aisolutions"
                        onClick={() => handleItemNavigate(null, "/aisolutions")}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <Bot className="w-4 h-4 text-blue-600" />
                        <span>AI Solutions</span>
                      </Link>

                      <Link
                        href="/voiceagent"
                        onClick={() => handleItemNavigate(null, "/voiceagent")}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-orange-50 hover:text-[#ff6600] transition-colors"
                      >
                        <Mic className="w-4 h-4 text-[#ff6600]" />
                        <span>AI Voice Agent</span>
                      </Link>
                      */}

                      <Link
                        href="/servicesweoffer"
                        onClick={() => handleItemNavigate(null, "/servicesweoffer")}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      >
                        <Layers className="w-4 h-4 text-purple-600" />
                        <span>Odoo ERP Solutions</span>
                      </Link>

                      <Link
                        href="/apps"
                        onClick={() => handleItemNavigate(null, "/apps")}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      >
                        <AppWindow className="w-4 h-4 text-indigo-600" />
                        <span>Enterprise Apps</span>
                      </Link>

                      <Link
                        href="/services"
                        onClick={() => handleItemNavigate(null, "/services")}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        <Cpu className="w-4 h-4 text-emerald-600" />
                        <span>IT Services</span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleItemNavigate("products", "/#products")}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 text-left transition-colors"
                      >
                        <Boxes className="w-4 h-4 text-cyan-600" />
                        <span>Our Products</span>
                      </button>
                    </div>
                  )}

                  {isOpen && dropdownType === "about-us" && (
                    <div className="pl-2 pr-1 pb-3 space-y-1.5 animate-in fade-in duration-200">
                      <button
                        type="button"
                        onClick={() => handleItemNavigate("about", "/aboutus")}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 text-left transition-colors"
                      >
                        <Building2 className="w-4 h-4 text-blue-600" />
                        <span>About Nexcore Alliance</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleItemNavigate("values", "/#values")}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 text-left transition-colors"
                      >
                        <HeartHandshake className="w-4 h-4 text-cyan-600" />
                        <span>Our Values</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleItemNavigate("approach-detail", "/#approach-detail")}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-orange-50 hover:text-[#ff6600] text-left transition-colors"
                      >
                        <Workflow className="w-4 h-4 text-[#ff6600]" />
                        <span>Our Approach</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleItemNavigate("awards", "/#awards")}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 text-left transition-colors"
                      >
                        <Trophy className="w-4 h-4 text-amber-600" />
                        <span>Awards & Honours</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleItemNavigate("clients", "/#clients")}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600 text-left transition-colors"
                      >
                        <Users className="w-4 h-4 text-purple-600" />
                        <span>Client Stories</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleItemNavigate("reach", "/#reach")}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 text-left transition-colors"
                      >
                        <Globe2 className="w-4 h-4 text-emerald-600" />
                        <span>Global Reach</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={name} className="border-b border-slate-100">
                <Link
                  href={path}
                  onClick={() => handleItemNavigate(null, path)}
                  className={`block py-3.5 px-3 rounded-xl font-semibold text-[15px] transition-colors ${
                    isCurrent
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <Link
            href="/contactus"
            onClick={() => {
              setIsMenuOpen(false);
              if (handleLinkClick) handleLinkClick();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B1D33] hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <span>Get in Touch</span>
            <AiOutlineRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;