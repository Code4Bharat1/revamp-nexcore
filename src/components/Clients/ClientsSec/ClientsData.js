import {
  FaShoppingCart,
  FaGraduationCap,
  FaChartLine,
  FaTruck,
  FaBrain,
  FaMobile,
  FaAward,
  FaLightbulb
} from "react-icons/fa";

export const clients = [
  {
    id: 1,
    title: "E-commerce Web Platform",
    Icon: FaShoppingCart,
    color: "#1e40af",
    industry: "Retail & E-commerce",
    clientName: "RetailPro Solutions Qatar",
    location: "Doha, Qatar",
    date: "January 2023 - April 2023",
    tagline: "Complete E-commerce Solution with Payment Integration",
    description:
      "Built a comprehensive e-commerce platform with inventory management, multi-currency support, and seamless checkout experience.",
    challenge:
      "The client needed a scalable e-commerce website that could handle multiple product categories and integrate with local payment gateways.",
    solution:
      "We developed a robust full-stack web application using React and Node.js with MongoDB, integrated local payment gateways, and implemented real-time inventory tracking.",
    impact: [
      { metric: "250%", label: "Increase in Online Sales" },
      { metric: "40%", label: "Higher Conversion Rate" },
      { metric: "99.8%", label: "Platform Uptime" }
    ],
    testimonial:
      "NEXCORE ALLIANCE LLP delivered exactly what we needed. The platform is fast, secure, and our customers love the smooth checkout process.",
    testimonialAuthor: "Ahmed Al-Mansoori, Managing Director",
    details: {
      projectDuration: "4 Months",
      teamSize: "6 Developers",
      deliverables: [
        "Custom E-commerce Website",
        "Admin Dashboard",
        "Inventory Management System",
        "Payment Gateway Integration",
      ],
      technologiesUsed: "React, Next.js, Node.js, MongoDB, Razorpay API, AWS",
    }
  },
  {
    id: 2,
    title: "Educational LMS Platform",
    Icon: FaGraduationCap,
    color: "#3b82f6",
    industry: "Education & E-Learning",
    clientName: "Global Learning Institute",
    location: "Dubai, UAE",
    date: "March 2023 - July 2023",
    tagline: "Complete Learning Management System with Live Classes",
    description:
      "Developed a comprehensive Learning Management System with course management, student enrollment, and certificate generation.",
    challenge:
      "Educational institution required a platform to manage online courses and track student progress across multiple countries.",
    solution:
      "Created an end-to-end LMS using React and Node.js with WhatsApp OTP verification, automated certificate generation with QR codes, and integrated live classes.",
    impact: [
      { metric: "1000+", label: "Students Enrolled" },
      { metric: "150+", label: "Courses Available" },
      { metric: "95%", label: "Course Completion Rate" }
    ],
    testimonial:
      "The LMS platform has transformed how we deliver education. Certificate generation is automated and students can verify their credentials instantly.",
    testimonialAuthor: "Dr. Fatima Hassan, Academic Director",
    details: {
      projectDuration: "5 Months",
      teamSize: "8 Developers",
      deliverables: [
        "Learning Management System",
        "Student Portal",
        "Admin Dashboard",
        "Certificate Generation",
      ],
      technologiesUsed: "React, Node.js, MongoDB, WhatsApp API, Zoom API, AWS S3",
    }
  },
  {
    id: 3,
    title: "Fintech Mobile App",
    Icon: FaChartLine,
    color: "#f97316",
    industry: "Finance & Fintech",
    clientName: "SecureInvest India",
    location: "Mumbai, India",
    date: "June 2023 - October 2023",
    tagline: "Investment and Wealth Management Platform",
    description:
      "Designed and developed a cross-platform mobile application for wealth management, investment tracking, and financial planning.",
    challenge:
      "Client needed a secure mobile app that could handle complex financial data and provide real-time investment tracking for users.",
    impact: [
      { metric: "500k+", label: "App Downloads" },
      { metric: "₹100Cr+", label: "Assets Managed" },
      { metric: "4.8/5", label: "App Store Rating" }
    ],
    testimonial: "Fintech expertise is evident in the security and performance of our app.",
    testimonialAuthor: "Vikram Shah",
    details: {
      projectDuration: "4 Months",
      teamSize: "10 Developers",
      deliverables: ["iOS & Android App", "Secure API Backend", "Admin Panel"],
      technologiesUsed: "React Native, AWS, PostgreSQL",
    }
  },
  {
    id: 4,
    title: "Logistics Tracking System",
    Icon: FaTruck,
    color: "#1e3a8a",
    industry: "Logistics & Supply Chain",
    clientName: "FastTrack Logistics",
    location: "Colombo, Sri Lanka",
    date: "August 2023 - December 2023",
    tagline: "Real-time Fleet Management and Cargo Tracking",
    description:
      "Implemented a comprehensive logistics solution with real-time GPS tracking and route optimization.",
    impact: [
      { metric: "30%", label: "Fuel Efficiency" },
      { metric: "95%", label: "On-time Deliveries" }
    ],
    testimonial: "The tracking system is a game changer.",
    testimonialAuthor: "Sampath Perera",
    details: {
      projectDuration: "5 Months",
      teamSize: "5 Developers",
      deliverables: ["Driver App", "Dispatch Dashboard"],
      technologiesUsed: "Next.js, Google Maps API",
    }
  }
];
