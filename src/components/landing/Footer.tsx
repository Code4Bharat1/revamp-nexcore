"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";

export const Footer = () => {
  const quickLinks = [
    { name: "Hub", path: "/" },
    { name: "About Us", path: "/aboutus" },
    // { name: "AI Solutions", path: "/aisolutions" },
    { name: "Case Studies", path: "/casestudy" },
    { name: "Odoo", path: "/servicesweoffer" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const policyLinks = [
    { name: "Terms & Conditions", path: "/policies/termsandcondition" },
    { name: "Privacy Policy", path: "/policies/privacy" },
    { name: "Refund Policy", path: "/policies/refund-policy" },
    { name: "Cancellation Policy", path: "/policies/cancellation-policy" },
    { name: "Delivery Policy", path: "/policies/delivery-policy" },
    { name: "Product & Pricing", path: "/policies/product-pricing" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61570113656994",
      icon: <FaFacebookF className="w-4 h-4 text-white" />,
      hoverColor: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nexcorealliancellp/",
      icon: <FaInstagram className="w-4 h-4 text-white" />,
      hoverColor: "hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-pink-500",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag",
      icon: <FaYoutube className="w-4 h-4 text-white" />,
      hoverColor: "hover:bg-[#FF0000] hover:border-[#FF0000]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/105730702/admin/dashboard/",
      icon: <FaLinkedinIn className="w-4 h-4 text-white" />,
      hoverColor: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
    },
  ];

  return (
    <footer className="w-full bg-[#08153A] text-white">
      {/* ── Main Footer Content ── */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* COLUMN 1: Logo, Description & Socials (Wide) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start">
            {/* White Rounded Logo Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md flex items-center justify-center mb-6">
              <Image
                src="/nex.jpeg"
                alt="NEXCORE ALLIANCE SINCE:2011"
                width={200}
                height={65}
                className="w-44 sm:w-48 h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Description */}
            <p className="text-slate-300/80 text-[14.5px] sm:text-[15px] leading-[1.7] max-w-md mb-7">
              Nexcore Alliance is at the forefront of providing world-class IT
              solutions, helping businesses globally leverage technology for growth
              and success.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-3.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-11 h-11 rounded-full bg-[#0f1b3d] border border-white/15 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 active:scale-95 ${social.hoverColor}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col">
            {/* Heading & Blue Accent Bar */}
            <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-wide">
              Quick Links
            </h3>
            <div className="w-7 h-[3px] bg-[#38bdf8] rounded-full mt-2 mb-6" />

            {/* Links */}
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group inline-flex items-center gap-2.5 text-white/90 hover:text-[#38bdf8] text-[15px] transition-colors duration-200"
                  >
                    <FaChevronRight className="w-2.5 h-2.5 text-[#38bdf8] transition-transform duration-200 group-hover:translate-x-0.5" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Policies */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col">
            {/* Heading & Blue Accent Bar */}
            <h3 className="text-lg sm:text-[19px] font-bold text-white tracking-wide">
              Policies
            </h3>
            <div className="w-7 h-[3px] bg-[#38bdf8] rounded-full mt-2 mb-6" />

            {/* Links */}
            <ul className="space-y-4">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group inline-flex items-center gap-2.5 text-white/90 hover:text-[#38bdf8] text-[15px] transition-colors duration-200"
                  >
                    <FaChevronRight className="w-2.5 h-2.5 text-[#38bdf8] transition-transform duration-200 group-hover:translate-x-0.5" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="w-full border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.5px] sm:text-[14px]">
          
          {/* Copyright with "N" Avatar */}
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center font-bold text-white text-xs shrink-0">
              N
            </div>
            <p>
              © 2011-2026{" "}
              <Link href="/" className="text-[#38bdf8] hover:underline font-medium">
                Nexcore Alliance
              </Link>
              . All Rights Reserved.
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex items-center gap-3 text-slate-300">
            <Link
              href="/policies/privacy"
              className="text-slate-300 hover:text-[#38bdf8] transition-colors"
            >
              Privacy
            </Link>
            <span className="text-[#38bdf8] text-xs">·</span>
            <Link
              href="/policies/termsandcondition"
              className="text-slate-300 hover:text-[#38bdf8] transition-colors"
            >
              Terms
            </Link>
            <span className="text-[#38bdf8] text-xs">·</span>
            <Link
              href="/contactus"
              className="text-slate-300 hover:text-[#38bdf8] transition-colors"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
