"use client";

import React, { useRef, useEffect } from "react";
import {
  DollarSign,
  Clock,
  CheckCircle,
  CheckCircle2,
  Calendar,
  TrendingDown,
  RotateCcw,
  FileCheck,
  Search,
  CreditCard,
  Send,
  AlertCircle,
  Shield,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import {
  PageContainer,
  PolicyNavigation,
  PageHero,
  SectionHeading,
  MetricStrip,
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

export default function RefundPolicy() {
  const containerRef = useRef(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Refund Policy – NEXCORE ALLIANCE LLP",
    url: "https://www.nexcorealliance.com/policies/refund-policy",
    description:
      "Review NEXCORE ALLIANCE LLP's refund policy, covering our 7-day request window, 15% content consumption threshold, processing fee schedule, and 10-day settlement period.",
    inLanguage: "en-IN",
  };

  const refundMetrics = [
    {
      value: "7 Days",
      label: "Submission Window",
      sublabel: "From initial course enrollment",
      icon: Calendar,
    },
    {
      value: "15%",
      label: "Content Limit",
      sublabel: "Maximum accessed threshold",
      icon: TrendingDown,
    },
    {
      value: "₹5,000",
      label: "Administrative Deduction",
      sublabel: "Fixed processing fee",
      icon: DollarSign,
    },
    {
      value: "10 Days",
      label: "Settlement Period",
      sublabel: "For approved refund credits",
      icon: Clock,
    },
  ];

  const refundSteps = [
    {
      step: "01",
      name: "REQUEST",
      title: "Submit Written Request",
      desc: "Send an official refund notice from your registered email to director@nexcorealliance.com.",
      icon: Send,
    },
    {
      step: "02",
      name: "ELIGIBILITY",
      title: "System Audit",
      desc: "LMS verifies enrollment timestamp (within 7 days) and curriculum consumption (under 15%).",
      icon: Search,
    },
    {
      step: "03",
      name: "REVIEW",
      title: "Fee Assessment",
      desc: "Accounting computes the net refund after standard administrative (₹5000) & gateway charges.",
      icon: FileCheck,
    },
    {
      step: "04",
      name: "PROCESSING",
      title: "Gateway Execution",
      desc: "The approved balance is transmitted back through the original payment method.",
      icon: CreditCard,
    },
    {
      step: "05",
      name: "REFUND",
      title: "Credit Settled",
      desc: "Funds reflect in the student's originating bank account within 10 business days.",
      icon: CheckCircle,
    },
  ];

  const policies = [
    {
      number: 1,
      title: "Eligibility for Refunds",
      icon: CheckCircle,
      points: [
        {
          text: "Refund requests must be formally submitted within",
          highlight: "7 calendar days",
          suffix: "of course enrollment.",
        },
        {
          text: "Refunds are applicable only if less than",
          highlight: "15% of the course content",
          suffix: "has been accessed or downloaded on the learning portal.",
        },
        {
          text: "Requests submitted after the 7-day window or after accessing 15% or more of curriculum are non-refundable.",
          highlight: "",
          suffix: "",
        },
      ],
      content:
        "We are committed to delivering rigorous education while honoring fair cancellation terms. Eligibility is automatically cross-referenced against server activity logs.",
    },
    {
      number: 2,
      title: "Processing Fees & Deductions",
      icon: DollarSign,
      points: [
        {
          text: "A fixed administrative processing fee of",
          highlight: "₹5,000",
          suffix:
            "is deducted from all eligible approved refunds to cover software licensing and onboarding overhead.",
        },
        {
          text: "Third-party payment gateway transaction charges and non-recoverable tax levies may be deducted from the gross sum.",
          highlight: "",
          suffix: "",
        },
        {
          text: "All deductions are computed transparently and communicated in your written refund statement.",
          highlight: "",
          suffix: "",
        },
      ],
      content:
        "Processing fees cover irreversible costs incurred during student enrollment, server provisioning, and mentor assignment.",
    },
    {
      number: 3,
      title: "Refund Timeline & Disbursement",
      icon: Clock,
      points: [
        {
          text: "Approved refund requests will be processed and disbursed within",
          highlight: "10 business days",
          suffix: "following formal approval.",
        },
        {
          text: "Disbursements are routed exclusively to the original payment source (credit/debit card, UPI, or net banking account).",
          highlight: "",
          suffix: "",
        },
      ],
      content:
        "Depending on your financial institution or card issuing bank, an additional 2 to 5 clearing days may elapse before funds post to your statement.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Refund Policy – NEXCORE ALLIANCE LLP"
        description="Official refund policy for NEXCORE ALLIANCE LLP courses. Details on our 7-day request window, 15% curriculum consumption threshold, and refund timelines."
        keywords="Refund policy NEXCORE ALLIANCE LLP, course refund rules, fee refund India, student refund terms"
        url="https://www.nexcorealliance.com/policies/refund-policy"
        schema={schema}
      />

      <PageContainer maxWidth="max-w-7xl">
        {/* Policy Navigation Tabs */}
        <PolicyNavigation currentPath="/policies/refund-policy" />

        <div ref={containerRef}>
          {/* =========================================================================
              HERO: Process-oriented, clear, transparent 2-column layout
          ========================================================================== */}
          <PageHero
            badgeIcon={<RotateCcw className="w-4 h-4 text-[#FF6A00]" />}
            badgeText="Tuition Assurance & Transparency"
            titlePrefix="Refund &"
            titleHighlight="Satisfaction"
            titleSuffix="Policy"
            description="At NEXCORE ALLIANCE LLP, we prioritize student trust. Review our structured refund framework, statutory 7-day request window, eligibility criteria, and electronic payout timelines."
            metrics={[
              { value: "7 Days", label: "Request Window", sublabel: "From Batch Start Date" },
              { value: "15%", label: "Curriculum Ceiling", sublabel: "Maximum Content Accessed" },
              { value: "₹5,000", label: "Administrative Fee", sublabel: "Non-Refundable Base" },
              { value: "10 Days", label: "Disbursement SLA", sublabel: "Direct Bank Credit" },
            ]}
            imageSrc="/images/policies/refund_settlement.svg"
            imageAlt="Nexcore Tuition Assurance & Refund Framework"
            statusCard={{
              tag: "FINANCIAL ASSURANCE",
              title: "7-Day Statutory Guarantee",
              badge: "PROTECTED",
            }}
            floatingBadges={[
              {
                icon: RotateCcw,
                text: "7-Day Window",
                position: "-top-3 left-4",
                bg: "bg-blue-50 text-[#1769FF]",
              },
              {
                icon: Shield,
                text: "15% Content Cap",
                position: "top-1/4 -right-4",
                bg: "bg-cyan-50 text-[#0EA5E9]",
              },
              {
                icon: CheckCircle2,
                text: "10-Day Bank Payout",
                position: "bottom-16 -left-4",
                bg: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: DollarSign,
                text: "₹5,000 Admin Base",
                position: "-bottom-3 right-6",
                bg: "bg-purple-50 text-purple-600",
              },
            ]}
          />

          {/* =========================================================================
              VERIFIED COMPACT METRIC SUMMARY
          ========================================================================== */}
          <section className="gsap-reveal">
            <MetricStrip metrics={refundMetrics} columns="grid-cols-2 sm:grid-cols-4" />
          </section>

          {/* =========================================================================
              VISUAL REFUND PROCESS: REQUEST -> ELIGIBILITY -> REVIEW -> PROCESSING -> REFUND
          ========================================================================== */}
          <ContentSection className="gsap-reveal">
            <SectionHeading
              tag="Process Flow"
              title="Step-by-Step Refund Journey"
              description="How your refund request is audited, approved, and settled."
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
              {refundSteps.map((st, idx) => {
                const Icon = st.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-2xs font-black text-[#1769FF]">
                          {st.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1769FF] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="font-mono text-2xs uppercase tracking-wider text-slate-400 font-bold mb-0.5">
                        {st.name}
                      </div>
                      <h3 className="font-bold text-sm text-[#060F28] mb-1.5">
                        {st.title}
                      </h3>
                      <p className="text-2xs sm:text-xs text-slate-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ContentSection>

          {/* =========================================================================
              COMPLETE LEGAL CLAUSES
          ========================================================================== */}
          <section className="gsap-reveal space-y-4 mb-10">
            <SectionHeading
              tag="Clauses"
              title="Full Refund Terms & Deductions"
              description="Comprehensive statutory guidelines defining refund eligibility and deductions."
            />

            {policies.map((pol) => (
              <InfoBlock
                key={pol.number}
                number={pol.number}
                icon={pol.icon}
                title={pol.title}
                content={pol.content}
                points={pol.points}
              />
            ))}
          </section>

          {/* =========================================================================
              NOTICE BOX
          ========================================================================== */}
          <section className="gsap-reveal mb-10">
            <NoticeBox
              type="info"
              title="Proof of Identity & Bank Clearance"
            >
              For security compliance, refund disbursements can only be initiated
              to the exact account or cardholder profile from which the initial
              enrollment payment was cleared. Third-party account transfers are
              strictly prohibited under Reserve Bank of India (RBI) payment guidelines.
            </NoticeBox>
          </section>

          {/* =========================================================================
              CONTACT PANEL & LAST UPDATED
          ========================================================================== */}
          <section className="gsap-reveal">
            <ContactPanel
              title="Refund Desk & Billing Support"
              description="To initiate a formal refund request or check on an active ticket status, email our accounts team directly."
            />

            <LastUpdated date="January 2025" />
          </section>
        </div>
      </PageContainer>
    </>
  );
}