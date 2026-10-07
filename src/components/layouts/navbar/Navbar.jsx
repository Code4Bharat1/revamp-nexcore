"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Import Components
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import SearchModal from "./SearchModal";

// Inline SVG hamburger — avoids loading react-icons/bi in critical path
const MenuIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="8" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [isMobile, setIsMobile]         = useState(false);
  const [isScrolled, setIsScrolled]     = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inScrollyHero, setInScrollyHero] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollyEl = document.getElementById("scrolly-hero");
      if (scrollyEl) {
        const rect = scrollyEl.getBoundingClientRect();
        setInScrollyHero(rect.bottom > 80);
      } else {
        setInScrollyHero(false);
      }
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Keyboard shortcut: Cmd+K / Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const pathname = usePathname();

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleLogoClick = (e) => {
    setIsMenuOpen(false);
    if (pathname === "/" || pathname === "") {
      e.preventDefault();
      const heroElement = document.getElementById("home");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const convertToPath = (name) =>
    `/${name.toLowerCase().replace(/\s+/g, "")}`;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    {
      name: "What We Do",
      path: "/services",
      hasDropdown: true,
      dropdownType: "what-we-do",
    },
    {
      name: "What We Think",
      path: "/casestudy",
      hasDropdown: false,
    },
    {
      name: "About Us",
      path: "/aboutus",
      hasDropdown: false,
    },
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out nav-entrance ${
          inScrollyHero
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        } ${
          isScrolled
            ? "bg-white/25 backdrop-blur-[24px] backdrop-saturate-[190%] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07)] border-b border-white/40"
            : "bg-white shadow-md border-b border-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20 xl:h-22">

            {/* LOGO */}
            <div
              className="flex-shrink-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Link
                href="/"
                onClick={handleLogoClick}
                className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <Image
                  src="/nex.png"
                  alt="NEXCORE ALLIANCE LLP Logo"
                  width={260}
                  height={100}
                  priority
                  sizes="(max-width: 640px) 130px, (max-width: 1024px) 200px, 260px"
                  className="w-auto h-16 sm:h-20 lg:h-24 xl:h-24 object-contain"
                />
              </Link>
            </div>

            {/* Mobile Header Actions (Mail + Search + Hamburger) */}
            <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
              {/* Mail Icon */}
              <Link
                href="/contactus"
                onClick={handleLinkClick}
                aria-label="Contact Us"
                title="Contact Us"
                className="p-2 rounded-lg text-slate-800 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-800"
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
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                title="Search"
                className="p-2 rounded-lg text-slate-800 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-slate-800"
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

              {/* Mobile Hamburger */}
              <button
                className="p-2 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105 active:scale-95 ml-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <MenuIcon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" />
              </button>
            </div>

            {/* Desktop Main Menu with Action Icons */}
            {!isMobile && (
              <div className="hidden lg:flex items-center space-x-4 lg:space-x-6">
                <DesktopMenu
                  menuItems={menuItems}
                  pathname={pathname}
                  handleLinkClick={handleLinkClick}
                  scrollToSection={scrollToSection}
                  onSearchOpen={() => setIsSearchOpen(true)}
                />
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Mobile Sidebar */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        pathname={pathname}
        menuItems={menuItems}
        handleLinkClick={handleLinkClick}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navbar;