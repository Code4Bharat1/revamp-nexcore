"use client";

import React, { useRef, useEffect } from "react";
import {
  XCircle,
  Mail,
  AlertCircle,
  CheckCircle,
  CheckCircle2,
  FileText,
  DollarSign,
  TrendingDown,
  Clock,
  ShieldAlert,
  ShieldCheck,
  Send,
  Search,
  FileCheck,
  Ban,
  Calendar,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import {
  PageContainer,
  PolicyNavigation,
  PageHero,
  SectionHeading,
  ContentSection,
  Timeline,
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

export default function CancellationPolicy() {
  const containerRef = useRef(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CancellationPolicy",
    name: "Cancellation Policy – NEXCORE ALLIANCE LLP",
    url: "https://www.nexcorealliance.com/policies/cancellation-policy",
    description:
      "Official course cancellation policy for NEXCORE ALLIANCE LLP. Detailed requirements on written submission, 15% curriculum consumption ceiling, and fee deductions.",
    inLanguage: "en-IN",
  };

  const cancellationSteps = [
    {
      title: "Submit Written Notice",
      description:
        "Draft and send a formal cancellation request from your registered email account to director@nexcorealliance.com stating your Student ID and Course Name.",
      icon: Send,
      highlight: "Mandatory written communication via registered email.",
    },
    {
      title: "Curriculum Consumption Audit",
      description:
        "Our academic LMS administrators evaluate your account logs to ensure less than 15% of the digital coursework, lectures, and resources have been accessed.",
      icon: Search,
      highlight: "Accounts exceeding 15% access are strictly non-cancellable.",
    },
    {
      title: "Administrative Fee Calculation",
      description:
        "If verified within the eligible threshold, non-recoverable registration overhead and transaction charges are computed and deducted.",
      icon: DollarSign,
      highlight: "Transparent itemized deduction statement provided.",
    },
    {
      title: "Enrollment Deactivation & Settlement",
      description:
        "Course access permissions are revoked and eligible net balances are initiated for refund credit through the original payment processor.",
      icon: FileCheck,
      highlight: "Formal cancellation confirmation dispatched via email.",
    },
  ];

  const highlights = [
    {
      icon: Mail,
      label: "Written Email Notice",
      sublabel: "Required via registered ID",
    },
    {
      icon: TrendingDown,
      label: "15% Content Limit",
      sublabel: "Strict consumption threshold",
    },
    {
      icon: DollarSign,
      label: "Fee Deduction",
      sublabel: "Administrative charges apply",
    },
    {
      icon: Clock,
      label: "Timely Processing",
      sublabel: "Immediate audit on receipt",
    },
  ];

  const policies = [
    {
      number: 1,
      title: "Submission of Cancellation Requests",
      icon: Mail,
      content:
        "All cancellation requests must be submitted exclusively in writing via email to director@nexcorealliance.com. Verbal requests, SMS messages, or social media communications are not recognized as valid cancellation notices.",
    },
    {
      number: 2,
      title: "Eligibility Threshold",
      icon: CheckCircle,
      content:
        "Cancellations will not be eligible for refunds or credits if more than",
      highlight: "15% of the course content",
      suffix:
        "has been accessed, viewed, or downloaded from the Nexcore student portal. LMS server telemetry is the sole authoritative record for content consumption.",
    },
    {
      number: 3,
      title: "Cancellation Fees & Gateway Deductions",
      icon: DollarSign,
      content:
        "Any applicable cancellation fees, merchant gateway costs, and administrative processing expenses will be deducted from the total refundable amount before final disbursement.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Cancellation Policy – NEXCORE ALLIANCE LLP"
        description="Read NEXCORE ALLIANCE LLP's cancellation policy. Learn the procedures, eligibility rules, and conditions for cancelling course enrollment."
        keywords="Cancellation policy NEXCORE ALLIANCE LLP, course cancellation rules, student withdrawal India, cancellation process"
        url="https://www.nexcorealliance.com/policies/cancellation-policy"
        schema={schema}
      />

      <PageContainer maxWidth="max-w-7xl">
        {/* Policy Navigation Tabs */}
        <PolicyNavigation currentPath="/policies/cancellation-policy" />

        <div ref={containerRef}>
          {/* =========================================================================
              HERO: Process, clarity, transparency 2-column layout
          ========================================================================== */}
          <PageHero
            badgeIcon={<Ban className="w-4 h-4 text-[#FF6A00]" />}
            badgeText="Enrollment Flexibility & Protection"
            titlePrefix="Cancellation &"
            titleHighlight="Batch Transfer"
            titleSuffix="Policy"
            description="At NEXCORE ALLIANCE LLP, we provide a transparent and flexible cancellation and batch transfer procedure. Review our formal conditions, one-time transfer benefit, and timeline."
            metrics={[
              { value: "100%", label: "Pre-Batch Option", sublabel: "Formal Cancellation" },
              { value: "1 Free", label: "Batch Transfer", sublabel: "Next Available Cohort" },
              { value: "6 Months", label: "Seat Holding", sublabel: "Credit Validity Window" },
              { value: "48 Hours", label: "Notice Period", sublabel: "Prior to Cohort Start" },
            ]}
            imageSrc="/images/policies/cancellation_policy.svg"
            imageAlt="Nexcore Student Cohort & Batch Scheduling Management"
            statusCard={{
              tag: "ENROLLMENT GOVERNANCE",
              title: "Flexible Cohort Transfer Policy",
              badge: "FLEXIBLE",
            }}
            floatingBadges={[
              {
                icon: Ban,
                text: "Zero-Cost 1st Transfer",
                position: "-top-3 left-4",
                bg: "bg-blue-50 text-[#1769FF]",
              },
              {
                icon: Calendar,
                text: "6-Month Validity",
                position: "top-1/4 -right-4",
                bg: "bg-cyan-50 text-[#0EA5E9]",
              },
              {
                icon: Clock,
                text: "48h Advance Notice",
                position: "bottom-16 -left-4",
                bg: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: ShieldCheck,
                text: "Admissions Verification",
                position: "-bottom-3 right-6",
                bg: "bg-purple-50 text-purple-600",
              },
            ]}
          />

          {/* =========================================================================
              QUICK SUMMARY
          ========================================================================== */}
          <section className="gsap-reveal mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(6,15,40,0.03)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769FF] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-[#060F28] mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {item.sublabel}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              VERTICAL CANCELLATION PROCESS TIMELINE
          ========================================================================== */}
          <ContentSection className="gsap-reveal">
            <SectionHeading
              tag="Timeline"
              title="Official Cancellation Process"
              description="Follow this progressive procedure to ensure your cancellation request is audited and processed promptly."
            />

            <Timeline steps={cancellationSteps} layout="vertical" />
          </ContentSection>

          {/* =========================================================================
              ELIGIBILITY & FEES DETAILED CLAUSES
          ========================================================================== */}
          <section className="gsap-reveal space-y-4 mb-10">
            <SectionHeading
              tag="Clauses"
              title="Statutory Terms & Conditions"
              description="Detailed rules governing cancellation submissions and fee structures."
            />

            {policies.map((pol) => (
              <InfoBlock
                key={pol.number}
                number={pol.number}
                icon={pol.icon}
                title={pol.title}
                content={pol.content}
                highlight={pol.highlight}
                suffix={pol.suffix}
              />
            ))}
          </section>

          {/* =========================================================================
              IMPORTANT INFORMATION NOTICE BOX
          ========================================================================== */}
          <section className="gsap-reveal mb-10">
            <NoticeBox
              type="warning"
              title="Important Notice on Batch Access & Credentials"
            >
              Upon confirmation of course cancellation, all credentials, virtual
              lab access, recorded archives, mentor communication groups, and
              certificate eligibility will be permanently revoked. Access cannot be
              reinstated under previous fee terms.
            </NoticeBox>
          </section>

          {/* =========================================================================
              CONTACT PANEL & LAST UPDATED
          ========================================================================== */}
          <section className="gsap-reveal">
            <ContactPanel
              title="Need to Submit a Cancellation?"
              description="Send your formal request including your registered student email and enrollment reference to our desk."
            />

            <LastUpdated date="January 2025" />
          </section>
        </div>
      </PageContainer>
    </>
  );
}