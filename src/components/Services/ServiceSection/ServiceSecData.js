import {
  FaShoppingCart,
  FaHospital,
  FaGraduationCap,
  FaChartLine,
  FaIndustry,
  FaBuilding,
  FaRocket,
  FaCloud,
  FaMicrochip,
  FaPalette,
  FaLaptopCode,
  FaCogs,
  FaGlobe,
  FaNetworkWired,
  FaMobile,
  FaServer,
  FaBrain,
  FaRobot,
  FaUsers,
  FaCode
} from "react-icons/fa";

export const serviceCategories = [
  {
    category: "Product Development",
    services: [
      { id: 1, title: "Product Development", Icon: FaRocket, color: "#1e40af", description: "End-to-end product development from concept to launch.", details: "We specialize in transforming ideas into market-ready products.", features: ["Strategy", "Research", "Agile"], priceRange: "$$$$", deliveryTime: "8-12 weeks" },
      { id: 2, title: "SaaS Development", Icon: FaCloud, color: "#f97316", description: "Scalable SaaS solutions with multi-tenancy.", details: "Build robust Software-as-a-Service platforms.", features: ["Multi-tenant", "Billing", "Cloud"], priceRange: "$$$$", deliveryTime: "12-16 weeks" },
      { id: 4, title: "MVP Development", Icon: FaRocket, color: "#1e3a8a", description: "Launch your Minimum Viable Product quickly.", details: "Get to market faster with our MVP services.", features: ["Core Features", "Rapid Market", "Feedback"], priceRange: "$$$", deliveryTime: "4-6 weeks" },
    ]
  },
  {
    category: "Digital Engineering",
    services: [
      { id: 9, title: "Digital Transformation", Icon: FaNetworkWired, color: "#1e40af", description: "Transform your business with modern solutions.", details: "Navigate your digital transformation journey.", features: ["Consulting", "Automation", "Cloud"], priceRange: "$$$$", deliveryTime: "16-24 weeks" },
      { id: 10, title: "App Modernization", Icon: FaMobile, color: "#3b82f6", description: "Modernize legacy applications.", details: "Breathe new life into legacy apps.", features: ["Architecture", "Cloud-Native", "Performance"], priceRange: "$$$", deliveryTime: "10-14 weeks" },
    ]
  }
];

export const stats = [
  { value: "239+", label: "Projects Delivered", color: "#1e40af" },
  { value: "24/7", label: "Active Support", color: "#f97316" },
  { value: "94%", label: "Client Satisfaction", color: "#3b82f6" },
  { value: "50+", label: "Expert Developers", color: "#1e3a8a" }
];

export const testimonials = [
  { text: "NEXCORE ALLIANCE LLP delivered ahead of schedule.", author: "Sarah Johnson", position: "CEO, TechRetail", rating: 5 },
  { text: "The AI solution transformed our operations.", author: "Mohammed Rashid", position: "CTO, DataInsight", rating: 5 }
];

export const industries = [
  { name: "E-commerce", Icon: FaShoppingCart, color: "#1e40af" },
  { name: "Healthcare", Icon: FaHospital, color: "#f97316" },
  { name: "Education", Icon: FaGraduationCap, color: "#3b82f6" },
  { name: "Finance", Icon: FaChartLine, color: "#1e3a8a" },
  { name: "Manufacturing", Icon: FaIndustry, color: "#1e40af" },
  { name: "Real Estate", Icon: FaBuilding, color: "#f97316" }
];

export const faqs = [
  { question: "Typical timeline?", answer: "Simple: 4-6 weeks, Complex: 16-24 weeks." },
  { question: "Post-launch support?", answer: "Yes, 24/7 maintenance and updates." }
];
