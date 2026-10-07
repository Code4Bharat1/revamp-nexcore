import React from "react";
import Head from "next/head";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./ServiceCard/HeroSection";
import ServicesSection from "./ServiceSection/ServiceSec";
import Footer from "../layouts/footer/Footer";

const Service = () => {
  return (
    <>
      <Head>
        <title>Our Services – NEXCORE ALLIANCE LLP Web Development & Developer Resources</title>
        <meta
          name="description"
          content="Explore NEXCORE ALLIANCE LLP’s services, including web development tutorials, coding tools, and developer resources. We empower developers in India with modern web technologies."
        />
        <meta
          name="keywords"
          content="NEXCORE ALLIANCE LLP services, web development services India, coding tutorials, developer tools, programming resources India"
        />
        <meta name="author" content="NEXCORE ALLIANCE LLP Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Our Services – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="Learn more about NEXCORE ALLIANCE LLP’s services for developers, including tutorials, tools, and resources."
        />
        <meta property="og:url" content="https://www.nexcorealliance.com/services" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Services – NEXCORE ALLIANCE LLP Web Development & Resources"
        />
        <meta
          name="twitter:description"
          content="Explore tutorials, coding tools, and web development resources offered by NEXCORE ALLIANCE LLP."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Schema Markup (Services Page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "NEXCORE ALLIANCE LLP Services",
              url: "https://www.nexcorealliance.com/services",
              description:
                "NEXCORE ALLIANCE LLP offers web development tutorials, coding tools, and developer resources for developers in India.",
              provider: {
                "@type": "Organization",
                name: "NEXCORE ALLIANCE LLP",
                url: "https://www.nexcorealliance.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.nexcorealliance.com/og-image.png",
                },
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
            }),
          }}
        />
      </Head>

      <div className="w-full h-full">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <Footer />
      </div>
    </>
  );
};

export default Service;
