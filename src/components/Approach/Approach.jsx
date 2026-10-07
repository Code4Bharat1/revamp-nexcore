"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "../Approach/ApprochCard/HeroSection";
import LazySection from "../home/LazySection";

const ApproachSec = dynamic(() => import("../Approach/ApproachSec/ApproachSec"), { ssr: false });
const Footer = dynamic(() => import("../layouts/footer/Footer"), { ssr: false });

const Approach = () => {
  return (
    <>
      {/* Schema Markup (About NEXCORE ALLIANCE LLP’s Approach) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Approach – NEXCORE ALLIANCE LLP",
            url: "https://www.nexcorealliance.com/approach",
            description:
              "NEXCORE ALLIANCE LLP’s approach focuses on empowering developers in India with tutorials, coding tools, and resources for modern web development.",
            publisher: {
              "@type": "Organization",
              name: "NEXCORE ALLIANCE LLP",
              url: "https://www.nexcorealliance.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.nexcorealliance.com/og-image.png",
              },
            },
          }),
        }}
      />

      <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
        <Navbar />
        <HeroSection />
        <LazySection id="approach-detail" minHeight={500}>
          <ApproachSec />
        </LazySection>
        <LazySection id="footer" minHeight={300}>
          <Footer />
        </LazySection>
      </div>
    </>
  );
};

export default Approach;
