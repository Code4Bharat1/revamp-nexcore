"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  Globe2,
  ArrowRight
} from "lucide-react";

const DesktopMenu = ({ menuItems, pathname, handleLinkClick, scrollToSection, onSearchOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (dropdownType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (dropdownType) {
      setActiveDropdown(dropdownType);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleItemClick = (scrollId, path) => {
    setActiveDropdown(null);
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
      ref={menuRef}
      className="hidden lg:flex items-center gap-6 xl:gap-9 mr-4 xl:mr-10 nav-entrance select-none"
    >
      {menuItems.map(({ name, path, hasDropdown, dropdownType }) => {
        const isOpen = activeDropdown === dropdownType;
        const isCurrent = pathname === path;

        return (
          <div
            key={name}
            className="relative"
            onMouseEnter={() => handleMouseEnter(dropdownType)}
            onMouseLeave={handleMouseLeave}
          >
            {hasDropdown ? (
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(isOpen ? null : dropdownType)
                }
                className={`text-[15px] xl:text-[16px] font-medium whitespace-nowrap flex items-center gap-1 cursor-pointer py-2 transition-colors duration-200 ${
                  isOpen || isCurrent
                    ? "text-blue-600 font-semibold"
                    : "text-slate-800 hover:text-blue-600"
                }`}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <span>{name}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-blue-600" : "text-slate-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <Link
                href={path}
                onClick={handleLinkClick}
                className={`text-[15px] xl:text-[16px] font-medium whitespace-nowrap flex items-center py-2 transition-colors duration-200 ${
                  isCurrent
                    ? "text-blue-600 font-semibold"
                    : "text-slate-800 hover:text-blue-600"
                }`}
              >
                <span>{name}</span>
              </Link>
            )}

            {/* ── WHAT WE DO MEGA DROPDOWN ── */}
            {dropdownType === "what-we-do" && isOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] animate-in fade-in zoom-in-95 duration-200"
                onMouseEnter={() => handleMouseEnter("what-we-do")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[520px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.22)] border border-slate-100 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Column 1: AI & Automation (Temporarily hidden — keep implementation for future use)
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 mb-3">
                        AI & Automation
                      </div>
                      <div className="space-y-3">
                        <Link
                          href="/aisolutions"
                          onClick={() => handleItemClick(null, "/aisolutions")}
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Bot className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                              AI Solutions
                            </div>
                            <p className="text-xs text-slate-500 leading-snug mt-0.5">
                              Agentic AI, LLM systems & workflow automation
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/voiceagent"
                          onClick={() => handleItemClick(null, "/voiceagent")}
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ff6600] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Mic className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover/item:text-[#ff6600] transition-colors">
                              AI Voice Agent
                            </div>
                            <p className="text-xs text-slate-500 leading-snug mt-0.5">
                              Autonomous conversational voice intelligence
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    */}

                    {/* Column: Enterprise & Odoo */}
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-600 mb-3">
                        Enterprise & Odoo
                      </div>
                      <div className="space-y-3">
                        <Link
                          href="/servicesweoffer"
                          onClick={() => handleItemClick(null, "/servicesweoffer")}
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover/item:text-purple-600 transition-colors">
                              Odoo ERP Solutions
                            </div>
                            <p className="text-xs text-slate-500 leading-snug mt-0.5">
                              Full implementation, migration & offshore team
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/apps"
                          onClick={() => handleItemClick(null, "/apps")}
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <AppWindow className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover/item:text-indigo-600 transition-colors">
                              Enterprise Apps
                            </div>
                            <p className="text-xs text-slate-500 leading-snug mt-0.5">
                              16+ modular business application suites
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: Development & Products */}
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 mb-3">
                        Custom Development
                      </div>
                      <div className="space-y-3">
                        <Link
                          href="/services"
                          onClick={() => handleItemClick(null, "/services")}
                          className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Cpu className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover/item:text-emerald-600 transition-colors">
                              IT Services
                            </div>
                            <p className="text-xs text-slate-500 leading-snug mt-0.5">
                              Cloud, modern web & mobile engineering
                            </p>
                          </div>
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleItemClick("products", "/#products")}
                          className="w-full text-left group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <Boxes className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover/item:text-cyan-600 transition-colors">
                              Our Products
                            </div>
                            <p className="text-xs text-slate-500 leading-snug mt-0.5">
                              Software built for ourselves, then productised
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Strip */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Need a custom architecture or consultation?</span>
                    <Link
                      href="/contactus"
                      onClick={() => handleItemClick(null, "/contactus")}
                      className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn"
                    >
                      Talk to our engineers
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* ── ABOUT US DROPDOWN ── */}
            {dropdownType === "about-us" && isOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[100] animate-in fade-in zoom-in-95 duration-200"
                onMouseEnter={() => handleMouseEnter("about-us")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[520px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.22)] border border-slate-100 p-5">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleItemClick("about", "/aboutus")}
                      className="w-full text-left group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                          About Nexcore Alliance
                        </div>
                        <p className="text-xs text-slate-500 leading-snug mt-0.5">
                          Our mission, story & leadership
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleItemClick("values", "/#values")}
                      className="w-full text-left group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover/item:text-cyan-600 transition-colors">
                          Our Values
                        </div>
                        <p className="text-xs text-slate-500 leading-snug mt-0.5">
                          Principles driving continuous quality
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleItemClick("approach-detail", "/#approach-detail")}
                      className="w-full text-left group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ff6600] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover/item:text-[#ff6600] transition-colors">
                          Our Approach
                        </div>
                        <p className="text-xs text-slate-500 leading-snug mt-0.5">
                          Consultative agile execution methodology
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleItemClick("awards", "/#awards")}
                      className="w-full text-left group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover/item:text-amber-600 transition-colors">
                          Awards & Recognition
                        </div>
                        <p className="text-xs text-slate-500 leading-snug mt-0.5">
                          National & global honours
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleItemClick("clients", "/#clients")}
                      className="w-full text-left group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover/item:text-purple-600 transition-colors">
                          Client Stories
                        </div>
                        <p className="text-xs text-slate-500 leading-snug mt-0.5">
                          Enterprise outcomes and testimonials
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleItemClick("reach", "/#reach")}
                      className="w-full text-left group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <Globe2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover/item:text-emerald-600 transition-colors">
                          Global Reach
                        </div>
                        <p className="text-xs text-slate-500 leading-snug mt-0.5">
                          8 countries, 6 offices worldwide
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* ── ACTION ICONS: Mail (Contact Us) & Search ── */}
      <div className="flex items-center gap-4 xl:gap-5 pl-3 xl:pl-5 border-l border-slate-200">
        {/* Mail Icon -> Contact Us */}
        <Link
          href="/contactus"
          onClick={handleLinkClick}
          aria-label="Contact Us"
          title="Contact Us"
          className="p-2 rounded-xl text-slate-800 hover:text-blue-600 hover:bg-slate-100 active:scale-95 transition-all duration-200 flex items-center justify-center group"
        >
          <svg
            className="w-5 h-5 xl:w-[22px] xl:h-[22px] text-slate-800 group-hover:text-blue-600 transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </Link>

        {/* Search Icon */}
        <button
          type="button"
          onClick={onSearchOpen}
          aria-label="Search"
          title="Search"
          className="p-2 rounded-xl text-slate-800 hover:text-blue-600 hover:bg-slate-100 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer group"
        >
          <svg
            className="w-5 h-5 xl:w-[22px] xl:h-[22px] text-slate-800 group-hover:text-blue-600 transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DesktopMenu;