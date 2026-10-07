import React from "react";
import { 
  FaCode, 
  FaLaptopCode, 
  FaRocket, 
  FaLightbulb,
  FaUserFriends,
  FaShieldAlt
} from "react-icons/fa";

export const values = [
  {
    id: 1,
    title: "Software Solutions",
    description:
      "We deliver exceptional web development services tailored to meet the specific needs of businesses.",
    Icon: FaCode,
    color: "#1e40af",
    details: (
      <>
        <p>
          <strong>NEXCORE ALLIANCE LLP</strong> specializes in providing IT solutions, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-sm sm:text-base">
          <li>Web Development</li>
          <li>Mobile Application Development</li>
          <li>Custom Software Solutions</li>
          <li>E-commerce Development</li>
          <li>API Integration</li>
          <li>UI/UX Design</li>
        </ul>
        <p className="mt-4 text-sm sm:text-base">
          Clients who engage NEXCORE ALLIANCE LLP for these services will enter into a separate Service Agreement that details the specific terms of the project.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "We deliver exceptional web development services tailored to meet the specific needs of businesses.",
    Icon: FaLaptopCode,
    color: "#f97316",
    details: (
      <>
        <p>
          At <strong>NEXCORE ALLIANCE LLP</strong>, we deliver exceptional web development services tailored to meet the specific needs of businesses. From creating responsive, user-friendly websites to developing sophisticated web applications, we cover it all.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-sm sm:text-base">
          <li><strong>Custom Website Development</strong></li>
          <li><strong>E-commerce Platforms</strong></li>
          <li><strong>Content Management Systems (CMS)</strong></li>
          <li><strong>Web Applications</strong></li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Digital Transformation",
    description:
      "We leverage cutting-edge technologies to transform your business processes, enhance customer experiences, and drive innovation.",
    Icon: FaRocket,
    color: "#3b82f6",
    details: (
      <>
        <p>
          <strong>Digital Transformation</strong> at NEXCORE ALLIANCE LLP involves leveraging cutting-edge technologies. Our services include:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-sm sm:text-base">
          <li>Cloud Computing Solutions</li>
          <li>Data Analytics and Business Intelligence</li>
          <li>Automation and AI Integration</li>
          <li>Digital Strategy Consulting</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Innovation & Technology",
    description:
      "Staying ahead with cutting-edge technologies and innovative solutions that drive business growth.",
    Icon: FaLightbulb,
    color: "#1e3a8a",
    details: (
      <>
        <p>
          Innovation is at the heart of everything we do. We continuously explore and adopt emerging technologies.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-sm sm:text-base">
          <li><strong>AI & Machine Learning Integration</strong></li>
          <li><strong>Blockchain Solutions</strong></li>
          <li><strong>IoT Development</strong></li>
          <li><strong>Progressive Web Apps</strong></li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Customer-Centric Approach",
    description:
      "Your success is our priority. We build lasting relationships through transparent communication.",
    Icon: FaUserFriends,
    color: "#f97316",
    details: (
      <>
        <p>
          <strong>Customer satisfaction</strong> is the cornerstone of our business philosophy.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-sm sm:text-base">
          <li><strong>Dedicated Account Managers</strong></li>
          <li><strong>Regular Progress Updates</strong></li>
          <li><strong>Post-Launch Support</strong></li>
          <li><strong>Client Training</strong></li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Quality & Security",
    description:
      "Uncompromising standards in code quality, security practices, and data protection.",
    Icon: FaShieldAlt,
    color: "#1e40af",
    details: (
      <>
        <p>
          <strong>Quality and Security</strong> are non-negotiable. We implement industry-best practices.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3 text-sm sm:text-base">
          <li><strong>Code Review & QA</strong></li>
          <li><strong>Security Audits</strong></li>
          <li><strong>Data Encryption</strong></li>
          <li><strong>GDPR Compliance</strong></li>
        </ul>
      </>
    ),
  },
];

export const stats = [
  { id: 1, number: "16+", label: "Years in Operation" },
  { id: 2, number: "329+", label: "Projects Delivered" },
  { id: 3, number: "8+", label: "Countries Served" },
  { id: 4, number: "11+", label: "Industries Served" },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO, TechStart India",
    review: "NEXCORE ALLIANCE LLP transformed our digital presence completely. Their team's expertise and dedication are unmatched!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=1e40af&color=fff&size=128",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Founder, E-Shop Global",
    review: "Outstanding work on our e-commerce platform. The attention to detail and customer support exceeded our expectations.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=f97316&color=fff&size=128",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    position: "CTO, Qatar Solutions",
    review: "Professional, reliable, and innovative. They delivered our project on time and within budget. Highly recommended!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Mohammed+Ali&background=3b82f6&color=fff&size=128",
  },
];
