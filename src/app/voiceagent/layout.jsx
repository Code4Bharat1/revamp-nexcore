import React from "react";

export const metadata = {
  title: "AI Voice Agents & Autonomous Phone Call Automation | NEXCORE ALLIANCE LLP",
  description:
    "Deploy human-like, ultra-low-latency AI voice agents for 24/7 inbound customer support, outbound sales qualification, appointment booking, and multi-language CRM workflows.",
  keywords: [
    "AI voice agents",
    "voice automation",
    "conversational AI",
    "AI call center",
    "automated customer support",
    "Nexcore Alliance voice agent",
  ],
  openGraph: {
    title: "AI Voice Agents & Autonomous Phone Call Automation | NEXCORE ALLIANCE LLP",
    description:
      "Deploy human-like, ultra-low-latency AI voice agents for 24/7 inbound support, outbound qualification, and CRM automation.",
    url: "https://www.nexcorealliance.com/voiceagent",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.nexcorealliance.com/nex.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP AI Voice Agents",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents & Autonomous Phone Call Automation | NEXCORE ALLIANCE LLP",
    description:
      "Human-like AI voice agents for 24/7 customer support and autonomous outbound sales.",
    images: ["https://www.nexcorealliance.com/nex.png"],
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/voiceagent",
  },
};

export default function VoiceAgentLayout({ children }) {
  return <>{children}</>;
}
