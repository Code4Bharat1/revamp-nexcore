"use client";

import React, { useRef, useEffect } from "react";
import { Tag, CheckCircle, CheckCircle2, Percent, RefreshCw, FileText, CreditCard, DollarSign, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import {
  PageContainer,
  PolicyNavigation,
  PageHero,
  SectionHeading,
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

export default function ProductPricing() {
  const containerRef = useRef(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Product Pricing – NEXCORE ALLIANCE LLP",
    url: "https://www.nexcorealliance.com/policies/product-pricing",
    description:
      "Explore NEXCORE ALLIANCE LLP's transparent product and course pricing policy including statutory tax inclusions, promotional discounts, and fee revisions.",
    inLanguage: "en-IN",
  };

  const pricingClauses = [
    {
      number: 1,
      title: "Transparent Pricing Architecture",
      icon: Tag,
      content:
        "All course tuition, enterprise training retainers, and consulting fees are clearly delineated on our official catalog and invoice schedules, ensuring complete financial transparency.",
    },
    {
      number: 2,
      title: "Statutory Tax Inclusions",
      icon: FileText,
      content:
        "Unless explicitly annotated otherwise, all published fees are fully inclusive of applicable Goods and Services Tax (GST) and statutory duties under Indian fiscal regulations, eliminating unexpected checkout additions.",
    },
    {
      number: 3,
      title: "Promotional Discounts & Scholarships",
      icon: Percent,
      content:
        "Any authorized institutional concessions, early-bird scholarships, or corporate partnership discounts will be automatically computed and itemized at checkout prior to payment authorization.",
    },
    {
      number: 4,
      title: "Price Revisions & Confirmed Registrations",
      icon: RefreshCw,
      content:
        "NEXCORE ALLIANCE LLP reserves the right to periodically adjust curriculum fees based on market demands and upgraded syllabus tracks. However, all confirmed bookings and active student enrollments remain entirely unaffected by subsequent fee modifications.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Product & Pricing Policy – NEXCORE ALLIANCE LLP"
        description="Learn about NEXCORE ALLIANCE LLP's transparent course and service pricing structure, tax inclusions, and billing terms."
        keywords="Product pricing NEXCORE ALLIANCE LLP, course fees India, transparent training pricing"
        url="https://www.nexcorealliance.com/policies/product-pricing"
        schema={schema}
      />

      <PageContainer maxWidth="max-w-7xl">
        <PolicyNavigation currentPath="/policies/product-pricing" />

        <div ref={containerRef}>
          {/* =========================================================================
              HERO: Transparent pricing, clarity 2-column layout
          ========================================================================== */}
          <PageHero
            badgeIcon={<Tag className="w-4 h-4 text-[#FF6A00]" />}
            badgeText="Upfront Pricing & Fee Transparency"
            titlePrefix="Course Catalog &"
            titleHighlight="Pricing Policy"
            description="At NEXCORE ALLIANCE LLP, our educational tracks and enterprise solutions are architected to deliver maximum return on investment with uncompromising fee clarity and zero hidden surcharges."
            metrics={[
              { value: "₹0", label: "Hidden Charges", sublabel: "Upfront All-Inclusive" },
              { value: "18% GST", label: "Statutory Tax", sublabel: "Itemized Invoicing" },
              { value: "Flexible", label: "EMI & Corporate", sublabel: "Multiple Gateway Options" },
              { value: "100%", label: "Fee Lock", sublabel: "Confirmed Price Guarantee" },
            ]}
            imageSrc="/images/policies/pricing_analytics.svg"
            imageAlt="Nexcore Product Catalog & Transparent Financial Analytics"
            statusCard={{
              tag: "PRICING INTEGRITY",
              title: "Transparent Tuition Schedule",
              badge: "VERIFIED",
            }}
            floatingBadges={[
              {
                icon: Tag,
                text: "Zero Hidden Fees",
                position: "-top-3 left-4",
                bg: "bg-blue-50 text-[#1769FF]",
              },
              {
                icon: CreditCard,
                text: "GST Itemized Billing",
                position: "top-1/4 -right-4",
                bg: "bg-cyan-50 text-[#0EA5E9]",
              },
              {
                icon: DollarSign,
                text: "Flexible EMI Options",
                position: "bottom-16 -left-4",
                bg: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: ShieldCheck,
                text: "Enrollment Price Lock",
                position: "-bottom-3 right-6",
                bg: "bg-purple-50 text-purple-600",
              },
            ]}
          />

          <section className="gsap-reveal space-y-4 mb-10">
            <SectionHeading
              tag="Billing Principles"
              title="Fee Transparency &amp; Tax Terms"
              description="Learn about our upfront pricing schedule, inclusive taxation, and discount policies."
            />

            {pricingClauses.map((clause) => (
              <InfoBlock
                key={clause.number}
                number={clause.number}
                icon={clause.icon}
                title={clause.title}
                content={clause.content}
              />
            ))}
          </section>

          <section className="gsap-reveal mb-10">
            <NoticeBox type="info" title="Corporate &amp; Cohort Invoicing">
              For volume corporate sponsorships, university cohorts, or customized
              enterprise tracks, custom quotations with pro-forma GST invoicing
              are issued by our finance department.
            </NoticeBox>
          </section>

          <section className="gsap-reveal">
            <ContactPanel
              title="Billing &amp; Corporate Invoicing Desk"
              description="To request formal GST pro-forma invoices, custom corporate proposals, or payment plan assistance, connect with our accounts team."
            />

            <LastUpdated date="January 2025" />
          </section>
        </div>
      </PageContainer>
    </>
  );
}
