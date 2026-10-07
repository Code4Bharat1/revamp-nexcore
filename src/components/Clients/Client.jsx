"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./ClientCard/HeroSection";
import LazySection from "../home/LazySection";

const ProductsSection = dynamic(() => import("../Products/ProductsSection"), { ssr: false });
const Clientsec = dynamic(() => import("../Clients/ClientsSec/ClientsSec"), { ssr: false });
const ClientTestimonials = dynamic(() => import("./ClientTestimonials/ClientTestimonials"), { ssr: false });
const Footer = dynamic(() => import("../layouts/footer/Footer"), { ssr: false });

const Client = () => {
  return (
    <>
      {/* Schema Markup (Client/Partner Page) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Clients – NEXCORE ALLIANCE LLP",
            url: "https://www.nexcorealliance.com/clients",
            description:
              "NEXCORE ALLIANCE LLP collaborates with clients, developers, and organizations in India to deliver modern web development solutions and resources.",
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
        <LazySection id="products" minHeight={500}>
          <ProductsSection />
        </LazySection>
        <LazySection id="clients-sec" minHeight={500}>
          <Clientsec />
        </LazySection>
        <LazySection id="testimonials" minHeight={400}>
          <ClientTestimonials />
        </LazySection>
        <LazySection id="footer" minHeight={300}>
          <Footer />
        </LazySection>
      </div>
    </>
  );
};

export default Client;
