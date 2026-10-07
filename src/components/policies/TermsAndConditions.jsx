"use client";

import React, { useRef, useEffect } from "react";
import {
  Shield,
  CheckCircle,
  FileText,
  Zap,
  Scale,
  AlertTriangle,
  Lock,
  Globe,
  Clock,
  BookOpen,
} from "lucide-react";
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

export default function TermsAndConditions() {
  const containerRef = useRef(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions – NEXCORE ALLIANCE LLP",
    url: "https://www.nexcorealliance.com/policies/termsandcondition",
    description:
      "Read NEXCORE ALLIANCE LLP's terms and conditions outlining user eligibility, intellectual property rights, liability limits, and dispute resolution governed by Mumbai jurisdiction.",
    inLanguage: "en-IN",
  };

  const terms = [
    {
      number: 1,
      title: "Eligibility",
      content:
        "Users must be at least 18 years old or have explicit parental/guardian consent to access and use our educational platforms and consulting services. By continuing use of our services, you warrant and represent that you meet these eligibility criteria.",
      icon: CheckCircle,
    },
    {
      number: 2,
      title: "Accuracy of Information",
      content:
        "All users are required to provide accurate, complete, and up-to-date personal, corporate, and payment details during registration and enrollment. Falsified, misleading, or fraudulent information constitutes a material breach and may result in immediate account suspension or termination without notice.",
      icon: FileText,
    },
    {
      number: 3,
      title: "Intellectual Property Rights",
      content:
        "All proprietary curriculum, instructional content, course materials, software prototypes, trade names, graphics, and documentation on our platform are owned exclusively by NEXCORE ALLIANCE LLP and protected by applicable copyright, trademark, and intellectual property laws of India and international treaties. Unauthorized recording, downloading, reproduction, redistribution, or commercial exploitation is strictly prohibited and subject to civil litigation and criminal prosecution.",
      icon: Shield,
    },
    {
      number: 4,
      title: "Service Modifications & Availability",
      content:
        "NEXCORE ALLIANCE LLP reserves the unilateral right to update, modify, reschedule, suspend, or discontinue any course curriculum, training schedule, or technical service without prior liability. While we strive for maximum service uptime, temporary maintenance windows or unavoidable system upgrades may occur.",
      icon: Zap,
    },
    {
      number: 5,
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by applicable law, NEXCORE ALLIANCE LLP, its partners, mentors, and directors shall not be liable for any indirect, incidental, punitive, special, or consequential damages arising from the use or inability to use our services, coursework, or external third-party software tools. Users agree to access and utilize the platform at their own risk.",
      icon: Scale,
    },
    {
      number: 6,
      title: "Governing Law & Dispute Resolution",
      content:
        "These Terms and Conditions shall be governed, construed, and enforced in accordance with the substantive laws of the Republic of India. Any controversy, dispute, or claim arising out of or relating to these terms or our services shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.",
      icon: Globe,
    },
  ];

  const quickSummaryPills = [
    { label: "Age 18+ or Parental Consent", icon: CheckCircle },
    { label: "Accurate Enrollment Info", icon: FileText },
    { label: "Strict Copyright Protection", icon: Shield },
    { label: "Mumbai Court Jurisdiction", icon: Scale },
  ];

  return (
    <>
      <SEOHead
        title="Terms & Conditions – NEXCORE ALLIANCE LLP"
        description="Official Terms and Conditions for NEXCORE ALLIANCE LLP. Understand your rights, user obligations, intellectual property protections, and dispute terms."
        keywords="Terms and conditions NEXCORE ALLIANCE LLP, student terms, developer course policy India, legal policy Mumbai"
        url="https://www.nexcorealliance.com/policies/termsandcondition"
        schema={schema}
      />

      <PageContainer maxWidth="max-w-7xl">
        {/* Policy Navigation Tabs */}
        <PolicyNavigation currentPath="/policies/termsandcondition" />

        <div ref={containerRef}>
          {/* =========================================================================
              HERO: Legal, structured, authoritative 2-column layout
          ========================================================================== */}
          <PageHero
            badgeIcon={<Scale className="w-4 h-4 text-[#FF6A00]" />}
            badgeText="Legal Framework & Compliance"
            titlePrefix="Terms &"
            titleHighlight="Conditions"
            titleSuffix="of Service"
            description="Please review these Terms and Conditions carefully before enrolling in our programs or utilizing our technology services. They govern your contractual relationship with NEXCORE ALLIANCE LLP."
            metrics={[
              { value: "100%", label: "Enforceable Terms", sublabel: "Indian Law Aligned" },
              { value: "Mumbai", label: "Legal Jurisdiction", sublabel: "Arbitration & Courts" },
              { value: "Strict", label: "IP Protection", sublabel: "Copyright Protected" },
              { value: "2025", label: "Statutory Terms", sublabel: "Current Edition" },
            ]}
            imageSrc="/images/policies/terms_documents.svg"
            imageAlt="Nexcore Legal Compliance Framework"
            statusCard={{
              tag: "LEGAL GOVERNANCE",
              title: "Terms of Service Agreement",
              badge: "STATUTORY",
            }}
            floatingBadges={[
              {
                icon: Shield,
                text: "IP Protected",
                position: "-top-3 left-4",
                bg: "bg-blue-50 text-[#1769FF]",
              },
              {
                icon: Scale,
                text: "Arbitration Clause",
                position: "top-1/4 -right-4",
                bg: "bg-cyan-50 text-[#0EA5E9]",
              },
              {
                icon: FileText,
                text: "Verified Enrollment",
                position: "bottom-16 -left-4",
                bg: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: CheckCircle,
                text: "Mumbai Jurisdiction",
                position: "-bottom-3 right-6",
                bg: "bg-purple-50 text-purple-600",
              },
            ]}
          />

          {/* =========================================================================
              INTRODUCTION & QUICK SUMMARY
          ========================================================================== */}
          <ContentSection className="gsap-reveal">
            <SectionHeading
              tag="Overview"
              title="Agreement to Terms"
              description="Welcome to NEXCORE ALLIANCE LLP. By accessing our educational portals, enterprise consultation desks, or engaging with our courses, you acknowledge that you have read, understood, and agree to be bound by the terms outlined below."
            />

            {/* Quick Summary Pill Strip */}
            <div className="pt-2 pb-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Obligations at a Glance
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {quickSummaryPills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-2.5"
                    >
                      <Icon className="w-4 h-4 text-[#1769FF] flex-shrink-0" />
                      <span className="text-xs font-bold text-slate-800">
                        {pill.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ContentSection>

          {/* =========================================================================
              LEGAL CLAUSES (01 to 06)
          ========================================================================== */}
          <section className="gsap-reveal space-y-4 mb-10">
            <SectionHeading
              tag="Legal Clauses"
              title="Terms of Service & Usage"
              description="The following sections define user eligibility, academic content rights, and liability limits."
            />

            {terms.map((term) => (
              <InfoBlock
                key={term.number}
                number={term.number}
                icon={term.icon}
                title={term.title}
                content={term.content}
              />
            ))}
          </section>

          {/* =========================================================================
              IMPORTANT NOTICE BOX
          ========================================================================== */}
          <section className="gsap-reveal mb-10">
            <NoticeBox
              type="warning"
              title="Important Notice Regarding Commercial Material"
            >
              NEXCORE ALLIANCE LLP strictly prohibits unauthorized recording,
              screen-capturing, or sharing of any live lectures, proprietary code
              repositories, or course assignments. Any infraction will result in
              immediate forfeiture of course access without refund and may incur
              statutory legal action under the Indian Copyright Act, 1957.
            </NoticeBox>
          </section>

          {/* =========================================================================
              QUESTIONS / CONTACT PANEL & LAST UPDATED
          ========================================================================== */}
          <section className="gsap-reveal">
            <ContactPanel
              title="Legal Questions or Clarifications?"
              description="For formal inquiries regarding our Terms of Service, licensing, or corporate contracts, please contact our legal and administrative desk."
            />

            <LastUpdated date="January 2025" />
          </section>
        </div>
      </PageContainer>
    </>
  );
}