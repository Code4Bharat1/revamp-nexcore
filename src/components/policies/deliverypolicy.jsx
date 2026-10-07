"use client";

import React, { useRef, useEffect } from "react";
import { Truck, Clock, DollarSign, MapPin, CheckCircle, CheckCircle2, Package, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import {
  PageContainer,
  PolicyNavigation,
  PageHero,
  SectionHeading,
  ContentSection,
  InfoBlock,
  NoticeBox,
  ContactPanel,
  LastUpdated,
} from "./shared";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShippingPolicy() {
  const containerRef = useRef(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ShippingDeliveryTime",
    name: "Shipping & Delivery Policy – NEXCORE ALLIANCE LLP",
    url: "https://www.nexcorealliance.com/policies/delivery-policy",
    description:
      "Read NEXCORE ALLIANCE LLP's shipping & delivery policy covering dispatch timelines (7-10 days), transparent checkout charges, and delivery tracking.",
    inLanguage: "en-IN",
  };

  const deliveryClauses = [
    {
      number: 1,
      title: "Shipping Timelines",
      icon: Clock,
      content:
        "All physical course materials, study kits, or printed credentials (where applicable) will be securely dispatched within",
      highlight: "7-10 business days",
      suffix: "following formal order confirmation and address verification.",
    },
    {
      number: 2,
      title: "Shipping Costs & Taxes",
      icon: DollarSign,
      content:
        "Any applicable logistics, postage, or courier service charges will be computed and transparently displayed at the time of checkout prior to payment finalization.",
    },
    {
      number: 3,
      title: "Delivery Windows & Geographic Reach",
      icon: MapPin,
      content:
        "Standard transit durations vary depending on your destination pin-code, courier partner availability, and regional customs regulations.",
    },
    {
      number: 4,
      title: "Shipment Tracking Information",
      icon: Package,
      content:
        "Real-time consignment tracking numbers and carrier details will be automatically transmitted to your registered email address upon dispatch.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Shipping & Delivery Policy – NEXCORE ALLIANCE LLP"
        description="Official Shipping and Delivery policy for physical materials and certificates from NEXCORE ALLIANCE LLP."
        keywords="Shipping policy NEXCORE ALLIANCE LLP, certificate delivery India, course material shipping"
        url="https://www.nexcorealliance.com/policies/delivery-policy"
        schema={schema}
      />

      <PageContainer maxWidth="max-w-7xl">
        <PolicyNavigation currentPath="/policies/delivery-policy" />

        <div ref={containerRef}>
          {/* =========================================================================
              HERO: Fulfillment, tracking, transparency 2-column layout
          ========================================================================== */}
          <PageHero
            badgeIcon={<Truck className="w-4 h-4 text-[#FF6A00]" />}
            badgeText="Fulfillment & Global Logistics"
            titlePrefix="Digital & Physical"
            titleHighlight="Delivery Policy"
            description="At NEXCORE ALLIANCE LLP, we ensure instantaneous LMS digital course access and reliable, tracked dispatch for physical certificates, workbooks, and enterprise training hardware."
            metrics={[
              { value: "Instant", label: "LMS Activation", sublabel: "Immediate Portal Access" },
              { value: "<24h", label: "Credentials Dispatched", sublabel: "Via Registered Email" },
              { value: "3-7 Days", label: "Certificate Courier", sublabel: "Tracked Consignments" },
              { value: "100%", label: "Digital SLA", sublabel: "Cloud Portal Uptime" },
            ]}
            imageSrc="/images/policies/delivery_logistics.svg"
            imageAlt="Nexcore Digital & Physical Course Delivery Logistics"
            statusCard={{
              tag: "FULFILLMENT LOGISTICS",
              title: "Global Dispatch & Tracking",
              badge: "TRACKED",
            }}
            floatingBadges={[
              {
                icon: Truck,
                text: "Tracked Express Dispatch",
                position: "-top-3 left-4",
                bg: "bg-blue-50 text-[#1769FF]",
              },
              {
                icon: Package,
                text: "Secure Packaging",
                position: "top-1/4 -right-4",
                bg: "bg-cyan-50 text-[#0EA5E9]",
              },
              {
                icon: Clock,
                text: "Instant LMS Access",
                position: "bottom-16 -left-4",
                bg: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: ShieldCheck,
                text: "Verified Credentials",
                position: "-bottom-3 right-6",
                bg: "bg-purple-50 text-purple-600",
              },
            ]}
          />

          <section className="gsap-reveal space-y-4 mb-10">
            <SectionHeading
              tag="Guidelines"
              title="Dispatch &amp; Delivery Standards"
              description="Learn about our shipping intervals, transit expectations, and shipment tracking."
            />

            {deliveryClauses.map((clause) => (
              <InfoBlock
                key={clause.number}
                number={clause.number}
                icon={clause.icon}
                title={clause.title}
                content={clause.content}
                highlight={clause.highlight}
                suffix={clause.suffix}
              />
            ))}
          </section>

          <section className="gsap-reveal mb-10">
            <NoticeBox type="info" title="Digital-First Credentials Availability">
              All academic course completion certificates are additionally issued
              digitally with cryptographic verification. Digital credentials are
              available immediately upon grade certification, independent of
              physical transit schedules.
            </NoticeBox>
          </section>

          <section className="gsap-reveal">
            <ContactPanel
              title="Shipping &amp; Dispatch Queries"
              description="For tracking assistance, damaged packaging reports, or delivery address corrections, contact our operations desk."
            />

            <LastUpdated date="January 2025" />
          </section>
        </div>
      </PageContainer>
    </>
  );
}
