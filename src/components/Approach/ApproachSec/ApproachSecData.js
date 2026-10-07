import {
  FaComments,
  FaCode,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaTools,
  FaUsers,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaDatabase,
  FaStar,
  FaAward,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

export const approachSteps = [
  {
    id: 1,
    stepNumber: "01",
    title: "Understand Your Needs",
    Icon: FaComments,
    color: "#3b82f6",
    accentColor: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.4)",
    imgSrc: "/images/process/card-01.jpg",
    description: "We listen, analyze, and understand your goals to define the right solution.",
    details: "Our team conducts in-depth consultations to grasp your vision, evaluate requirements, and identify high-impact technical solutions.",
    duration: "1–2 weeks",
    deliverables: ["Requirements Document", "Project Scope", "Timeline Estimate"]
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Design & Planning",
    Icon: FaTools,
    color: "#f97316",
    accentColor: "#fb923c",
    glowColor: "rgba(249, 115, 22, 0.4)",
    imgSrc: "/images/process/card-02.jpg",
    description: "We create a strategic roadmap and design solutions tailored to your needs.",
    details: "Our design team crafts intuitive wireframes, mockups, and interactive prototypes while our system architects establish scalable engineering foundations.",
    duration: "2–3 weeks",
    deliverables: ["UI/UX Designs", "Technical Architecture", "Project Roadmap"]
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Agile Development",
    Icon: FaCode,
    color: "#a855f7",
    accentColor: "#c084fc",
    glowColor: "rgba(168, 85, 247, 0.4)",
    imgSrc: "/images/process/card-03.jpg",
    description: "Our agile approach ensures iterative development with transparency.",
    details: "Leveraging modern stacks, we build scalable and clean solutions through bi-weekly sprints, continuous integration, and frequent stakeholder demos.",
    duration: "6–12 weeks",
    deliverables: ["Working Prototypes", "Sprint Demos", "Regular Updates"]
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Testing & QA",
    Icon: FaShieldAlt,
    color: "#6366f1",
    accentColor: "#818cf8",
    glowColor: "rgba(99, 102, 241, 0.4)",
    imgSrc: "/images/process/card-04.jpg",
    description: "Rigorous testing to ensure quality, security and a bug-free experience.",
    details: "Our QA specialists execute end-to-end automated testing, cross-browser audits, load testing, and comprehensive vulnerability assessments.",
    duration: "2–3 weeks",
    deliverables: ["Test Reports", "Bug Fixes", "Performance Metrics"]
  },
  {
    id: 5,
    stepNumber: "05",
    title: "Deployment & Support",
    Icon: FaHeadset,
    color: "#06b6d4",
    accentColor: "#22d3ee",
    glowColor: "rgba(6, 182, 212, 0.4)",
    imgSrc: "/images/process/card-05.jpg",
    description: "We deploy seamlessly and provide ongoing support for your peace of mind.",
    details: "We execute zero-downtime production rollouts with continuous uptime monitoring, cloud optimization, and dedicated 24/7 technical maintenance.",
    duration: "Ongoing",
    deliverables: ["Cloud Deployment", "Training & Docs", "24/7 SLA Support"]
  }
];

export const benefits = [
  { icon: FaClock, title: "Faster Time to Market", description: "Agile methodology ensures rapid delivery", color: "#1e40af" },
  { icon: FaCheckCircle, title: "Cost-Effective Solutions", description: "Optimized development process reduces costs", color: "#f97316" },
  { icon: FaRocket, title: "Scalable Architecture", description: "Built to grow with your business", color: "#3b82f6" },
  { icon: FaShieldAlt, title: "Risk Mitigation", description: "Proactive testing minimizes risks", color: "#1e3a8a" }
];

export const teamExpertise = [
  { title: "15+ Years", subtitle: "Combined Experience", icon: FaAward },
  { title: "50+", subtitle: "Certified Developers", icon: FaUsers },
  { title: "6 Countries", subtitle: "Global Presence", icon: FaStar },
  { title: "100%", subtitle: "Client Retention", icon: FaCheckCircle }
];

export const metrics = [
  { value: "94%", label: "On-Time Delivery", color: "#1e40af" },
  { value: "239+", label: "Projects Completed", color: "#f97316" },
  { value: "95%", label: "Client Satisfaction", color: "#3b82f6" },
  { value: "24/7", label: "Support Available", color: "#1e3a8a" }
];
