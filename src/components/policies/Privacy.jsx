"use client";

import React, { useRef, useEffect } from "react";
import {
  Shield,
  FileText,
  Zap,
  Lock,
  Users,
  Cookie,
  RefreshCw,
  Mail,
  Phone,
  User,
  CreditCard,
  CheckCircle2,
  Database,
  KeyRound,
  Eye,
  Server,
  ArrowRight,
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

export default function PrivacyPolicy() {
  const containerRef = useRef(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy – NEXCORE ALLIANCE LLP",
    url: "https://www.nexcorealliance.com/policies/privacy",
    description:
      "Read NEXCORE ALLIANCE LLP's privacy policy to learn how we collect, use, store, and protect your personal data in full compliance with applicable Indian privacy standards.",
    inLanguage: "en-IN",
  };

  const lifecycleStages = [
    {
      step: "01",
      title: "COLLECT",
      desc: "Essential personal & payment data for enrollment.",
      icon: User,
    },
    {
      step: "02",
      title: "USE",
      desc: "Course delivery, payment verification & updates.",
      icon: Zap,
    },
    {
      step: "03",
      title: "STORE",
      desc: "Secure encrypted databases with role-based access.",
      icon: Database,
    },
    {
      step: "04",
      title: "PROTECT",
      desc: "Industry-standard SSL/TLS & zero third-party sale.",
      icon: Lock,
    },
  ];

  const sections = [
    {
      number: 1,
      title: "Data Collection",
      icon: FileText,
      dataTypes: [
        { icon: User, label: "Full Name" },
        { icon: Mail, label: "Email Address" },
        { icon: Phone, label: "Phone Number" },
        { icon: CreditCard, label: "Billing & Payment" },
      ],
      content:
        "We collect only the essential personal data required to provide you with our services. This information helps us process your enrollment, administer accounts, and ensure a seamless learning experience.",
    },
    {
      number: 2,
      title: "Data Usage",
      icon: Zap,
      points: [
        "Processing your course enrollment, digital verification, and fee transactions.",
        "Sending crucial notifications regarding academic programs, scheduled lectures, and policy updates.",
        "Enhancing and personalizing your technical experience by improving our platform offerings.",
      ],
      content:
        "Your personal information is utilized strictly for verified academic and operational purposes. We respect your trust and guarantee that your details are never monetized.",
    },
    {
      number: 3,
      title: "Data Security Protocols",
      icon: Lock,
      securityFeatures: [
        {
          title: "SSL/TLS Encryption",
          desc: "Industry-standard cryptographic protocols protecting all in-flight data exchanges.",
        },
        {
          title: "Secure Storage & Firewall",
          desc: "Hardened infrastructure with restricted administrative access to prevent unauthorized intrusion.",
        },
      ],
      content:
        "We take information security seriously and maintain stringent technical safeguards. Your privacy is paramount, and we continually audit our infrastructure against emerging threats.",
    },
    {
      number: 4,
      title: "Third-Party Sharing Limitations",
      icon: Users,
      content:
        "Your data is never sold, leased, or disclosed to third parties for advertising or marketing campaigns. We share data solely with trusted, PCI-DSS-compliant payment gateway aggregators strictly for payment clearance.",
    },
    {
      number: 5,
      title: "Cookies & Session Tracking",
      icon: Cookie,
      content:
        "We utilize essential session cookies strictly to preserve your logged-in session state and remember user preferences. You may adjust your browser settings to reject cookies; however, some interactive platform features may be restricted as a consequence.",
    },
    {
      number: 6,
      title: "Policy Updates & Notification",
      icon: RefreshCw,
      content:
        "NEXCORE ALLIANCE LLP reserves the right to periodically amend this Privacy Policy to reflect regulatory modifications or operational advancements. We encourage users to inspect this page periodically.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Privacy Policy – NEXCORE ALLIANCE LLP"
        description="Read NEXCORE ALLIANCE LLP's privacy policy to understand data collection, storage, encryption, cookies, and protection standards."
        keywords="Privacy policy NEXCORE ALLIANCE LLP, data security India, user privacy policy, developer platform privacy"
        url="https://www.nexcorealliance.com/policies/privacy"
        schema={schema}
      />

      <PageContainer maxWidth="max-w-7xl">
        {/* Policy Navigation Tabs */}
        <PolicyNavigation currentPath="/policies/privacy" />

        <div ref={containerRef}>
          {/* =========================================================================
              HERO: Security, trust, transparency 2-column layout
          ========================================================================== */}
          <PageHero
            badgeIcon={<Shield className="w-4 h-4 text-[#FF6A00]" />}
            badgeText="Data Privacy & Cybersecurity"
            titlePrefix="Privacy &"
            titleHighlight="Data Protection"
            titleSuffix="Policy"
            description="Your privacy and personal information security are our highest priorities. Learn how NEXCORE ALLIANCE LLP collects, handles, stores, and protects your information with ISO-standard cryptographic safeguards."
            metrics={[
              { value: "256-Bit", label: "SSL/TLS Encryption", sublabel: "In-Flight & At Rest" },
              { value: "0%", label: "Third-Party Data Sale", sublabel: "Zero Ad Tracking" },
              { value: "Role-Based", label: "Access Security", sublabel: "Strict Access Logs" },
              { value: "DPDP Act", label: "Regulatory Aligned", sublabel: "Indian Law Compliant" },
            ]}
            imageSrc="/images/policies/privacy_security.svg"
            imageAlt="Nexcore Data Privacy & Cybersecurity Protection"
            statusCard={{
              tag: "DATA PRIVACY SHIELD",
              title: "DPDP & ISO Aligned Protection",
              badge: "SECURE",
            }}
            floatingBadges={[
              {
                icon: Lock,
                text: "End-to-End SSL/TLS",
                position: "-top-3 left-4",
                bg: "bg-blue-50 text-[#1769FF]",
              },
              {
                icon: Shield,
                text: "Zero Ad Retargeting",
                position: "top-1/4 -right-4",
                bg: "bg-cyan-50 text-[#0EA5E9]",
              },
              {
                icon: Database,
                text: "Encrypted Storage",
                position: "bottom-16 -left-4",
                bg: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: CheckCircle2,
                text: "Role-Based Access",
                position: "-bottom-3 right-6",
                bg: "bg-purple-50 text-purple-600",
              },
            ]}
          />

          {/* =========================================================================
              PRIVACY LIFECYCLE CONCEPT: COLLECT -> USE -> STORE -> PROTECT
          ========================================================================== */}
          <ContentSection className="gsap-reveal">
            <SectionHeading
              tag="Data Lifecycle"
              title="How We Safeguard Your Information"
              description="A clear, end-to-end framework of our data integrity and protection standards."
            />

            {/* SVG/CSS Connected Lifecycle Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {lifecycleStages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={idx}
                    className="relative bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-[#1769FF] shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-black text-slate-400">
                        {stage.step}
                      </span>
                    </div>

                    <h3 className="font-black text-sm text-[#060F28] mb-1 tracking-wide">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </ContentSection>

          {/* =========================================================================
              DETAILED CLAUSES (Data Collection, Usage, Security, Sharing, Cookies)
          ========================================================================== */}
          <section className="gsap-reveal space-y-4 mb-10">
            <SectionHeading
              tag="Clauses"
              title="Data Practices in Detail"
              description="Full legal disclosures regarding our data management practices."
            />

            {sections.map((sec) => (
              <InfoBlock
                key={sec.number}
                number={sec.number}
                icon={sec.icon}
                title={sec.title}
                content={sec.content}
                points={sec.points}
                dataTypes={sec.dataTypes}
                securityFeatures={sec.securityFeatures}
              />
            ))}
          </section>

          {/* =========================================================================
              SECURITY NOTICE BOX
          ========================================================================== */}
          <section className="gsap-reveal mb-10">
            <NoticeBox
              type="security"
              title="Zero Third-Party Advertising Policy"
            >
              NEXCORE ALLIANCE LLP does not participate in third-party data broker
              networks, behavior tracking ad retargeting, or advertising data
              sales. Your contact information and learning activity remain
              strictly confidential within our platform ecosystem.
            </NoticeBox>
          </section>

          {/* =========================================================================
              PRIVACY CONTACT PANEL & LAST UPDATED
          ========================================================================== */}
          <section className="gsap-reveal">
            <ContactPanel
              title="Data Protection Officer (DPO) Contact"
              description="To exercise your data access rights, request profile deletion, or submit privacy concerns, reach out directly to our designated compliance desk."
            />

            <LastUpdated date="January 2025" />
          </section>
        </div>
      </PageContainer>
    </>
  );
}