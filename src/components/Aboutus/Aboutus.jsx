"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layouts/navbar/Navbar";
import HeroSection from "./AboutCard/HeroSection";
import AboutGuide from "./AboutGuide/AboutGuide";
import LazySection from "@/components/home/LazySection";

const SupportersSection = dynamic(() => import("./OurSupporters/SupporterSection"), { ssr: false });
const ValuesGrid = dynamic(() => import("./Values/ValuesGrid"), { ssr: false });
const StatsRibbon = dynamic(() => import("./StatsRibbon/StatsRibbon"), { ssr: false });
const TestimonialsSection = dynamic(() => import("./Testimonials/TestimonialsSection"), { ssr: false });
const WhyChooseUs = dynamic(() => import("./WhyChooseUs/WhyChooseUs"), { ssr: false });
const Footer = dynamic(() => import("../layouts/footer/Footer"), { ssr: false });

const Aboutus = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About NEXCORE ALLIANCE LLP",
            url: "https://www.nexcorealliance.com/aboutus",
            description:
              "NEXCORE ALLIANCE LLP is a premier IT solutions provider delivering enterprise software, Odoo ERP, and AI transformations globally.",
            publisher: {
              "@type": "Organization",
              name: "NEXCORE ALLIANCE LLP",
              url: "https://www.nexcorealliance.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.nexcorealliance.com/nex.png",
              },
            },
          }),
        }}
      />

      <div className="w-full min-h-screen bg-white text-[#08153A] selection:bg-[#FF6600] selection:text-white flex flex-col justify-between overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full">
          {/* 1. Hero Section (Empowering Businesses with Innovation) */}
          <HeroSection />

          {/* 2. Your Guide to NEXCORE ALLIANCE LLP */}
          <AboutGuide />

          {/* 3. Our Valued Clients & Partners */}
          <LazySection id="supporters" minHeight={400}>
            <SupportersSection />
          </LazySection>

          {/* 4. Discover the Values of NEXCORE ALLIANCE LLP */}
          <LazySection id="values" minHeight={500}>
            <ValuesGrid />
          </LazySection>

          {/* 5. Full-Width Dark Navy Stats Ribbon */}
          <LazySection id="stats" minHeight={200}>
            <StatsRibbon />
          </LazySection>

          {/* 6. What Our Clients Say */}
          <LazySection id="testimonials" minHeight={400}>
            <TestimonialsSection />
          </LazySection>

          {/* 7. Why Choose NEXCORE ALLIANCE? */}
          <LazySection id="why-choose" minHeight={500}>
            <WhyChooseUs />
          </LazySection>
        </main>
        <LazySection id="footer" minHeight={300}>
          <Footer />
        </LazySection>
      </div>
    </>
  );
};

export default Aboutus;
