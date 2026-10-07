"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  Search, 
  X, 
  Bot, 
  Mic, 
  Layers, 
  AppWindow, 
  Cpu, 
  Boxes, 
  Building2, 
  Trophy, 
  Users, 
  FileText, 
  Mail,
  ArrowRight,
  Sparkles,
  Command
} from "lucide-react";
import gsap from "gsap";

const searchableItems = [
  // Quick Access & Services
  /*
  {
    id: "ai-solutions",
    title: "AI Solutions",
    desc: "Agentic AI, LLM systems, RAG architecture & intelligent enterprise automation",
    category: "Services",
    section: "Quick Access",
    path: "/aisolutions",
    icon: Bot,
    iconColor: "text-[#1769FF]",
    iconBg: "bg-blue-100/70",
    keywords: ["ai", "artificial intelligence", "llm", "agents", "machine learning", "automation", "rag"],
  },
  {
    id: "voice-agent",
    title: "AI Voice Agent",
    desc: "Conversational voice intelligence, inbound/outbound telephony agents & speech AI",
    category: "Services",
    section: "Quick Access",
    path: "/voiceagent",
    icon: Mic,
    iconColor: "text-[#1769FF]",
    iconBg: "bg-blue-100/70",
    keywords: ["voice", "telephony", "call center", "speech", "agent", "audio"],
  },
  */
  {
    id: "odoo-erp",
    title: "Odoo ERP Solutions",
    desc: "Official Odoo implementation, customization, migration & offshore support",
    category: "Services",
    section: "Quick Access",
    path: "/servicesweoffer",
    icon: Layers,
    iconColor: "text-[#1769FF]",
    iconBg: "bg-blue-100/70",
    keywords: ["odoo", "erp", "implementation", "crm", "inventory", "accounting"],
  },
  {
    id: "enterprise-apps",
    title: "Enterprise Apps Suite",
    desc: "16+ integrated business software suites for CRM, inventory, HR, payroll & finance",
    category: "Services",
    section: "Services",
    path: "/apps",
    icon: AppWindow,
    iconColor: "text-[#1769FF]",
    iconBg: "bg-blue-100/70",
    keywords: ["apps", "software", "suite", "hr", "payroll", "finance", "business"],
  },
  {
    id: "it-services",
    title: "IT Services & Web Development",
    desc: "Full-stack software engineering, modern cloud web apps & mobile solutions",
    category: "Services",
    section: "Services",
    path: "/services",
    icon: Cpu,
    iconColor: "text-[#1769FF]",
    iconBg: "bg-blue-100/70",
    keywords: ["web", "development", "it services", "software", "cloud", "fullstack", "mobile"],
  },
  {
    id: "our-products",
    title: "Our Products",
    desc: "Proprietary software built for ourselves, then productised for global scale",
    category: "Products",
    section: "Products",
    path: "/#products",
    icon: Boxes,
    iconColor: "text-[#FF6A00]",
    iconBg: "bg-orange-100/70",
    keywords: ["products", "saas", "proprietary", "platforms", "tools"],
  },
  {
    id: "case-studies",
    title: "Case Studies (What We Think)",
    desc: "Real-world transformation case studies, ROI metrics and client outcomes",
    category: "Insights",
    section: "Insights",
    path: "/casestudy",
    icon: FileText,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100/70",
    keywords: ["case studies", "insights", "blogs", "articles", "roi", "success stories"],
  },
  {
    id: "about-us",
    title: "About Nexcore Alliance",
    desc: "Since 2011, providing enterprise IT solutions, mission, values & leadership",
    category: "Company",
    section: "Company",
    path: "/aboutus",
    icon: Building2,
    iconColor: "text-[#060F28]",
    iconBg: "bg-slate-100/80",
    keywords: ["about", "company", "mission", "values", "leadership", "team", "nexcore"],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    desc: "Get in touch with our engineers, discuss project scope or request consultation",
    category: "Company",
    section: "Company",
    path: "/contactus",
    icon: Mail,
    iconColor: "text-[#FF6A00]",
    iconBg: "bg-orange-100/70",
    keywords: ["contact", "email", "phone", "reach", "consultation", "headquarters", "address"],
  },
  {
    id: "awards",
    title: "Awards & Recognition",
    desc: "14+ national and international honours across technology and innovation",
    category: "Company",
    section: "Company",
    path: "/#awards",
    icon: Trophy,
    iconColor: "text-[#060F28]",
    iconBg: "bg-slate-100/80",
    keywords: ["awards", "recognition", "honours", "achievements"],
  },
  {
    id: "clients",
    title: "Client Stories & Testimonials",
    desc: "Trusted by 500+ global brands and enterprises worldwide",
    category: "Company",
    section: "Company",
    path: "/#clients",
    icon: Users,
    iconColor: "text-[#060F28]",
    iconBg: "bg-slate-100/80",
    keywords: ["clients", "testimonials", "reviews", "partners", "customers"],
  },
];

const sectionOrder = ["Quick Access", "Services", "Products", "Insights", "Company"];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const resultsContainerRef = useRef(null);
  const router = useRouter();

  // Highlight matching query text helper
  const highlightMatch = (text, q) => {
    if (!q || !q.trim()) return text;
    const regex = new RegExp(`(${q.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="text-[#1769FF] font-bold bg-blue-50/80 px-0.5 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Filter items based on query
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchableItems;

    return searchableItems.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.desc.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchKeywords = item.keywords.some((kw) => kw.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchCategory || matchKeywords;
    });
  }, [query]);

  // Group items by section
  const groupedSections = useMemo(() => {
    const groups = {};
    filtered.forEach((item) => {
      const sec = item.section || item.category;
      if (!groups[sec]) groups[sec] = [];
      groups[sec].push(item);
    });
    return groups;
  }, [filtered]);

  // GSAP Entrance Animation
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!prefersReducedMotion && modalRef.current && backdropRef.current) {
        gsap.killTweensOf([backdropRef.current, modalRef.current]);
        
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: "power2.out" }
        );

        gsap.fromTo(
          modalRef.current,
          { opacity: 0, y: 12, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power2.out" }
        );
      }

      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Global ESC key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (item) => {
    onClose();
    if (item.path.startsWith("/#")) {
      const id = item.path.replace("/#", "");
      if (window.location.pathname === "/" || window.location.pathname === "") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      router.push(item.path);
    } else {
      router.push(item.path);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  // Keep selected item visible in scroll view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const selectedEl = resultsContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  let runningItemIndex = -1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-10 sm:pt-16 lg:pt-20 px-4 sm:px-6"
    >
      {/* 1. Backdrop: Darkened, Subdued & Blurred (Strictly NO colored outer glows) */}
      <div 
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 bg-[#050F28]/70 backdrop-blur-[10px] backdrop-saturate-[85%] transition-opacity duration-200"
      />

      {/* 2. Main Glass Search Panel */}
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search site"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[900px] max-h-[85vh] flex flex-col rounded-[24px] bg-white/[0.72] backdrop-blur-[24px] backdrop-saturate-[120%] border border-white/[0.85] shadow-[0_24px_70px_rgba(5,15,40,0.28),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden z-10"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between px-6 py-4 sm:py-5 border-b border-white/60">
          {/* Logo on Left */}
          <div className="flex items-center gap-3">
            <Image
              src="/nex.png"
              alt="Nexcore Alliance Logo"
              width={160}
              height={50}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </div>

          {/* Contextual Subtitle & Close Button */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-xs font-medium text-slate-500">
              Find services, products, insights and more
            </span>
            <button
              onClick={onClose}
              aria-label="Close search"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/60 hover:bg-white/90 border border-white/80 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all duration-200 shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Search Input Bar (Distinct Layer 2 Glass) */}
        <div className="p-4 sm:p-6 pb-3">
          <div className="relative flex items-center h-[54px] sm:h-[58px] px-4 rounded-[14px] bg-white/[0.55] border border-[rgba(30,90,180,0.16)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] focus-within:border-[#1769FF]/50 focus-within:ring-2 focus-within:ring-[#1769FF]/10 transition-all duration-200 gap-3">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              aria-label="Search query"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search services, products, case studies, or topics..."
              className="w-full text-[#07152F] placeholder-slate-400 bg-transparent border-none outline-none text-sm sm:text-base font-medium"
            />

            {/* Clear button if text typed */}
            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-white/80 transition-colors"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* ESC Key Badge */}
            <span className="hidden sm:inline-flex px-2 py-1 text-[11px] font-bold text-slate-500 bg-white/70 border border-slate-200/80 rounded-md shadow-2xs">
              ESC
            </span>
          </div>
        </div>

        {/* Scrollable Results Area */}
        <div 
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto px-4 sm:px-6 py-2 divide-y divide-slate-100/50 max-h-[50vh] sm:max-h-[55vh] custom-scrollbar"
        >
          {filtered.length === 0 ? (
            /* Clean Empty No-Results State */
            <div className="py-12 sm:py-16 text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-slate-200/60 flex items-center justify-center text-slate-400 mx-auto mb-3 shadow-sm">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#07152F] mb-1">
                No results found for &ldquo;{query}&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-[#53657D] max-w-sm mx-auto mb-5 font-medium">
                We couldn&apos;t find anything matching your search. Try searching for these topics:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["Odoo ERP", "Cloud", "Web Development", "Case Studies", "Contact"].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setQuery(topic);
                      inputRef.current?.focus();
                    }}
                    className="px-3 py-1.5 bg-white/70 hover:bg-white border border-slate-200/80 text-xs font-semibold text-[#1769FF] rounded-xl hover:border-blue-300 transition-all shadow-2xs cursor-pointer"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Categorized Group Results */
            sectionOrder.map((sectionKey) => {
              const items = groupedSections[sectionKey];
              if (!items || items.length === 0) return null;

              return (
                <div key={sectionKey} className="py-3 first:pt-1">
                  {/* Category Header */}
                  <div className="px-3 pb-2 pt-1 flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      {sectionKey}
                    </span>
                  </div>

                  {/* Section Result Rows */}
                  <div className="space-y-1">
                    {items.map((item) => {
                      runningItemIndex += 1;
                      const itemIdx = runningItemIndex;
                      const isSelected = itemIdx === selectedIndex;
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.id}
                          data-index={itemIdx}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(itemIdx)}
                          className={`group relative flex items-center justify-between p-2.5 sm:p-3 rounded-[14px] cursor-pointer transition-all duration-150 ${
                            isSelected
                              ? "bg-[rgba(230,240,255,0.75)] border-l-[3px] border-l-[#1769FF] shadow-xs"
                              : "hover:bg-white/[0.45] border-l-[3px] border-l-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0 pr-4">
                            {/* Icon Container (40x40) */}
                            <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200`}>
                              <Icon className={`w-5 h-5 ${item.iconColor}`} />
                            </div>

                            {/* Title & Description */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 mb-0.5">
                                <h4 className="text-sm sm:text-[15px] font-bold text-[#07152F] truncate">
                                  {highlightMatch(item.title, query)}
                                </h4>
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50/80 text-[#1769FF] border border-blue-100/60 shrink-0">
                                  {item.category}
                                </span>
                              </div>
                              <p className="text-xs sm:text-[13px] text-[#53657D] truncate font-normal leading-snug">
                                {highlightMatch(item.desc, query)}
                              </p>
                            </div>
                          </div>

                          {/* Arrow Right Indicator */}
                          <div className="shrink-0 pl-2">
                            <ArrowRight className={`w-4 h-4 transition-all duration-200 ${
                              isSelected
                                ? "opacity-100 text-[#1769FF] translate-x-1"
                                : "opacity-35 text-slate-400 group-hover:opacity-75 group-hover:translate-x-0.5"
                            }`} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Keyboard Navigation Footer */}
        <div className="px-6 py-3 bg-white/40 border-t border-white/60 flex items-center justify-between text-xs text-slate-600 font-medium">
          {/* Desktop Controls */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-white/80 border border-slate-200 font-mono text-[11px] shadow-2xs">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/80 border border-slate-200 font-mono text-[11px] shadow-2xs">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-white/80 border border-slate-200 font-mono text-[11px] shadow-2xs">↵</kbd>
              <span>Open</span>
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-white/80 border border-slate-200 font-mono text-[11px] shadow-2xs">ESC</kbd>
              <span>Close</span>
            </span>
          </div>

          {/* Shortcut reminder */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium ml-auto">
            <span className="flex items-center gap-1">
              <Command className="w-3.5 h-3.5" />
              <span>K / Ctrl K to search</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
