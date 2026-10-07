"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./HomeCard/HeroSection";
import LazySection from "./LazySection";

const StatsStrip = dynamic(
  () => import("../Aboutus/StatsStrip/StatsStrip"),
  { ssr: false }
);


const ValuesSection = dynamic(
  () => import("../Aboutus/Values/ValuesSection"),
  { ssr: false }
);

const ProductsSection = dynamic(
  () => import("../Products/ProductsSection"),
  { ssr: false }
);

const Clientsec = dynamic(
  () => import("../Clients/ClientsSec/ClientsSec"),
  { ssr: false }
);

const ClientTestimonials = dynamic(
  () => import("../Clients/ClientTestimonials/ClientTestimonials"),
  { ssr: false }
);

const ApproachSec = dynamic(
  () => import("../Approach/ApproachSec/ApproachSec"),
  { ssr: false }
);

const Awards = dynamic(
  () => import("../Awards/Awards"),
  { ssr: false }
);

const ReachSection = dynamic(
  () => import("../Reach/ReachSection"),
  { ssr: false }
);

const Footer = dynamic(
  () => import("../layouts/footer/Footer"),
  { ssr: false }
);

const ServiceSection = dynamic(
  () => import("../home/ServicesHome/ServiceSection"),
  { ssr: false }
);

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);

      const heroElement = document.getElementById("home");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }
  }, []);

  return (
    <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
      <Navbar />

      {/* Above-fold — loaded eagerly */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Client Projects */}
      <LazySection id="clients" minHeight={600}>
        <Clientsec />
      </LazySection>

      {/* Stats Strip */}
      <LazySection id="stats-strip" minHeight={200}>
        <StatsStrip />
      </LazySection>

      <LazySection id="services" minHeight={500}>
        <ServiceSection />
      </LazySection>
      <LazySection id="values" minHeight={600}>
        <ValuesSection />
      </LazySection>

      {/* Software we built for ourselves, then productised */}
      <LazySection id="products" minHeight={600}>
        <ProductsSection />
      </LazySection>

      <LazySection id="approach-detail" minHeight={500}>
        <ApproachSec />
      </LazySection>

      <LazySection id="awards" minHeight={400}>
        <Awards />
      </LazySection>

      {/* 3D Global Reach Section (Eight countries. Six offices. One operating standard.) */}
      <LazySection id="reach" minHeight={700}>
        <ReachSection />
      </LazySection>

      {/* Client Testimonials (What Our Clients Say) */}
      <LazySection id="client-testimonials" minHeight={500}>
        <ClientTestimonials />
      </LazySection>

      <LazySection id="footer" minHeight={300}>
        <Footer />
      </LazySection>
    </div>
  );
};

export default Home;