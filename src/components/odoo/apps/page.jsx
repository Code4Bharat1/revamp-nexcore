"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FileText,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Package,
  FolderKanban,
  Shield,
  Wrench,
  Lightbulb,
  ShoppingBag,
  Mail,
  Receipt,
  Calendar,
  Clock,
  Users,
  Star,
  Headphones,
  Zap,
  FileStack,
  Search,
  X,
  CheckCircle2,
  Check,
  RotateCw,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const AppsHero3DCanvas = dynamic(() => import("./AppsHero3DCanvas"), {
  ssr: false,
});

const ALL_FEATURES = [
  {
    id: "crm",
    title: "Odoo CRM",
    category: "Sales & CRM",
    description: "A cutting-edge, user-friendly CRM portal to enhance business performance and productivity. Odoo CRM solution fits the needs of enterprise solutions and transforms your business operations.",
    fullDesc: "Track leads, automate sales pipelines, predict revenue with AI reporting, and seamlessly manage customer interactions from lead capture to final contract execution.",
    highlights: ["AI Lead Scoring", "Automated Pipeline Stages", "Omnichannel Email & Calls", "Real-time Sales Analytics"],
    icon: <Users className="w-6 h-6" />,
    link: "/apps/odoo-crm",
  },
  {
    id: "invoicing",
    title: "Odoo Invoicing",
    category: "Finance",
    description: "Smooth and various payment modes for a hassle-free business flow. Streamline your billing for quick and easy payments. No rush to send reminders for late or pending payments.",
    fullDesc: "Create professional invoices automatically from sales orders or timesheets. Support multi-currency, payment gateway integration, and automated recurring billing.",
    highlights: ["Automated Invoice Creation", "Online Payment Integration", "Multi-Currency Support", "Smart Payment Reminders"],
    icon: <FileText className="w-6 h-6" />,
    link: "/apps/odoo-invoicing",
  },
  {
    id: "sales",
    title: "Odoo Sales",
    category: "Sales & CRM",
    description: "With Odoo Sales, you are one click away from converting business quotations into sales orders. Edit and modify orders, handle shipping and auto-generate invoices.",
    fullDesc: "Design attractive online quotations with e-signatures. Upsell items, handle pricing tiers, discounts, and customer portal sign-offs instantly.",
    highlights: ["Online E-Sign Quotations", "1-Click Order Conversion", "Tiered Pricing & Discounts", "Customer Portal Access"],
    icon: <ShoppingCart className="w-6 h-6" />,
    link: "/apps/odoo-sales",
  },
  {
    id: "ecommerce",
    title: "Odoo ECommerce",
    category: "Sales & CRM",
    description: "A ready-to-use e-commerce platform with automated stock adjustments and reporting. An integrated e-commerce platform to simplify business management.",
    fullDesc: "Build sleek online storefronts with drag-and-drop building blocks. Sync inventory live, offer payment options, and personalize shopper checkout experiences.",
    highlights: ["Drag-and-Drop Website Builder", "Real-time Stock Sync", "Multiple Payment Gateways", "SEO & Cross-Selling"],
    icon: <ShoppingBag className="w-6 h-6" />,
    link: "/apps/odoo-e-commerce",
  },
  {
    id: "pos",
    title: "Odoo Point of Sale",
    category: "Sales & CRM",
    description: "Point of Sale from Odoo is based on a smart interface and provides extreme flexibility. Simple Odoo POS configuration to meet your precise retail or restaurant needs.",
    fullDesc: "Works online and offline. Manage multi-store cash registers, barcode scanners, table management for restaurants, and loyalty rewards.",
    highlights: ["Offline & Online Functionality", "Restaurant Table Management", "Barcode Scanner Integration", "Loyalty & Gift Cards"],
    icon: <CreditCard className="w-6 h-6" />,
    link: "/apps/odoo-point-of-sale",
  },
  {
    id: "accounting",
    title: "Odoo Accounting",
    category: "Finance",
    description: "Odoo Accounting makes business easy for you. Odoo's popular features will change your business without much effort. Fully integrated with other Odoo Accounting Apps.",
    fullDesc: "Bank synchronization, automated reconciliation, tax audit trails, dynamic financial reports, and multi-entity consolidation.",
    highlights: ["Live Bank Synchronization", "Automated Reconciliation", "Real-time P&L / Balance Sheet", "Audit Trail & Tax Rules"],
    icon: <DollarSign className="w-6 h-6" />,
    link: "/apps/odoo-accounting",
  },
  {
    id: "inventory",
    title: "Odoo Inventory",
    category: "Operations",
    description: "Odoo Inventory tool to optimize your business with the best inventory solutions. Eliminate the tedious efforts you put into analyzing, optimizing, and organizing physical inventories.",
    fullDesc: "Double-entry inventory management system. Track stock movements across warehouses, manage serial/lot numbers, barcode operations, and reordering rules.",
    highlights: ["Double-Entry Inventory", "Serial & Lot Tracking", "Automated Reordering Rules", "Multi-Warehouse Routing"],
    icon: <Package className="w-6 h-6" />,
    link: "/apps/odoo-inventory",
  },
  {
    id: "project",
    title: "Odoo Project",
    category: "Operations",
    description: "Odoo Project Management provides facilities for multi-project analysis and searches. Schedule your teams for projects, considering their vacation plans.",
    fullDesc: "Agile Kanban boards, Gantt charts, task dependencies, automated time tracking, and client collaboration portals.",
    highlights: ["Interactive Kanban & Gantt", "Task Time Tracking", "Resource & Capacity Planning", "Client Guest Portals"],
    icon: <FolderKanban className="w-6 h-6" />,
    link: "/apps/odoo-project",
  },
  {
    id: "quality",
    title: "Odoo Quality Control",
    category: "Operations",
    description: "Support stringent quality compliance parameters to maintain high product quality with Odoo Quality. Streamline the entire production process to satisfy quality requirements.",
    fullDesc: "Set up automated quality checks at receipt, manufacturing, or shipping. Trigger quality alerts, root cause analysis, and inspection workflows.",
    highlights: ["Control Points & Checks", "Quality Alerts & RCA", "Inspection Checklists", "ISO & Compliance Ready"],
    icon: <Shield className="w-6 h-6" />,
    link: "/apps/odoo-quality",
  },
  {
    id: "maintenance",
    title: "Odoo Maintenance",
    category: "Operations",
    description: "Increase Overall Equipment Effectiveness with Odoo Maintenance Services. Triggering maintenance requests is made easy from the work center control panel.",
    fullDesc: "Preventative and corrective maintenance management. Track mean time between failures (MTBF), equipment status, and maintenance team schedules.",
    highlights: ["Preventative Schedules", "MTBF & MTTR Statistics", "Work Center Integration", "Spare Parts Tracking"],
    icon: <Wrench className="w-6 h-6" />,
    link: "/apps/odoo-maintenance",
  },
  {
    id: "plm",
    title: "Odoo PLM",
    category: "Operations",
    description: "Product Life Cycle Management for modern companies. Drive business growth with modern Odoo PLM. Transform your product value chain to rapidly innovate.",
    fullDesc: "Manage Engineering Change Orders (ECO), Bill of Materials (BOM) versions, document revisions, and real-time engineering approvals.",
    highlights: ["Engineering Change Orders (ECO)", "Multi-version BOM Management", "Document Versioning", "Real-time Approval Flow"],
    icon: <Lightbulb className="w-6 h-6" />,
    link: "/apps/odoo-plm",
  },
  {
    id: "purchase",
    title: "Odoo Purchase",
    category: "Sales & CRM",
    description: "Odoo Purchase app can help you place purchase orders smoothly and efficiently. We offer you a complete software solution to handle various activities involved in purchasing.",
    fullDesc: "Automate Requests for Quotation (RFQ), vendor pricelists, tender management, land cost calculations, and purchase order tracking.",
    highlights: ["Automated RFQ Generation", "Vendor Pricelists & Tenders", "Landed Cost Calculations", "Stock Delivery Tracking"],
    icon: <ShoppingCart className="w-6 h-6" />,
    link: "/apps/odoo-purchase",
  },
  {
    id: "timesheet",
    title: "Odoo TimeSheet",
    category: "HR & People",
    description: "Odoo Timesheet works the way you do through the mobile app, even offline. Whether you run a small business or manage employees from distant locations.",
    fullDesc: "1-click timer, grid timesheet entry, mobile app offline sync, billable hour tracking, and direct project cost integration.",
    highlights: ["Mobile App & Offline Timer", "Grid Entry View", "Billable Hour Tracking", "Project Profitability Sync"],
    icon: <Clock className="w-6 h-6" />,
    link: "/apps/odoo-timesheet",
  },
  {
    id: "emailmarketing",
    title: "Odoo Email Marketing",
    category: "Marketing",
    description: "Gain comprehensive support for creating, sending and evaluating E-mail marketing campaigns with clean responsive design templates.",
    fullDesc: "Drag-and-drop email designer, segment lead lists, automated trigger campaigns, click-through heatmaps, and unsubscriber analytics.",
    highlights: ["Drag-and-Drop Templates", "Segmented Contact Lists", "Click & Open Rate Analytics", "Unsubscriber Management"],
    icon: <Mail className="w-6 h-6" />,
    link: "/apps/odoo-e-mail-marketing",
  },
  {
    id: "expenses",
    title: "Odoo Expenses",
    category: "Finance",
    description: "Loaded with advanced features to digitize expense management and needs only a little bit of effort to integrate it with other business modules.",
    fullDesc: "Scan receipts using OCR, submit expense notes on mobile, multi-level manager approvals, and automated reimbursement processing.",
    highlights: ["OCR Receipt Scanner", "Mobile Expense Snap", "Multi-Level Approvals", "Automated Reimbursements"],
    icon: <Receipt className="w-6 h-6" />,
    link: "/apps/odoo-expenses",
  },
  {
    id: "event",
    title: "Odoo Event Management",
    category: "Marketing",
    description: "Complete event software capable of handling events from small webinars to large multi-day conferences and festival ticketing.",
    fullDesc: "Sell tickets online, manage speaker agendas, generate QR-code badges, track attendee check-ins, and publish event websites.",
    highlights: ["Online Ticket Sales", "Speaker & Agenda Manager", "QR-Code Badge Scanning", "Event Website Publisher"],
    icon: <Calendar className="w-6 h-6" />,
    link: "/apps/odoo-event-management",
  },
  {
    id: "leaves",
    title: "Odoo Leaves (Time Off)",
    category: "HR & People",
    description: "A simple reporting tool. Get reports in just a click for each leave request, with information per request type, department, employee.",
    fullDesc: "Employee PTO allocations, leave request calendars, manager approval workflows, team availability views, and holiday management.",
    highlights: ["PTO Allocation Rules", "Team Shared Calendar", "Manager Approval Workflow", "Accrual & Balance Stats"],
    icon: <Clock className="w-6 h-6" />,
    link: "/apps/odoo-timeoff",
  },
  {
    id: "recruitment",
    title: "Odoo Recruitment",
    category: "HR & People",
    description: "Create a job board, publicize job listings and easily track the number of submitted applications. Follow up with every applicant.",
    fullDesc: "Kanban applicant pipelines, automated resume parsing, interview scheduling, offer letter templates, and candidate skill tagging.",
    highlights: ["Custom Job Board", "Applicant Kanban Pipeline", "Automated Interview Slots", "Resume Skill Tagging"],
    icon: <Users className="w-6 h-6" />,
    link: "/apps/odoo-recruitment",
  },
  {
    id: "appraisal",
    title: "Odoo Appraisal",
    category: "HR & People",
    description: "Keep the encouragement process in your organization by performing periodical evaluations of your employees' performance.",
    fullDesc: "360-degree feedback reviews, goal tracking, skill growth matrices, automated evaluation reminders, and performance history reports.",
    highlights: ["360-Degree Feedback", "OKRs & Goal Tracking", "Skill Matrix Evaluation", "Automated Review Cycles"],
    icon: <Star className="w-6 h-6" />,
    link: "/apps/odoo-appraisal",
  },
  {
    id: "helpdesk",
    title: "Odoo Helpdesk",
    category: "Marketing",
    description: "Odoo Helpdesk will remain the perfect support ticket tool on your website to help you run things smoothly from one place.",
    fullDesc: "SLA metrics tracking, ticket routing rules, customer feedback surveys, knowledge base integration, and live chat widget support.",
    highlights: ["SLA Metrics & Targets", "Smart Ticket Routing", "Knowledge Base Integration", "Live Chat & Portal Support"],
    icon: <Headphones className="w-6 h-6" />,
    link: "/apps/odoo-helpdesk",
  },
  {
    id: "marketing",
    title: "Odoo Marketing Automation",
    category: "Marketing",
    description: "A friendly visual interface to help customize your workflows easily. Planning a multi-stage campaign with various paths.",
    fullDesc: "Design automated customer journeys, lead nurturing drip sequences, conditional action branches, and multi-channel marketing campaigns.",
    highlights: ["Visual Campaign Builder", "Automated Drip Sequences", "Conditional Branching", "Lead Nurturing Rules"],
    icon: <Zap className="w-6 h-6" />,
    link: "/apps/odoo-marketing-automation",
  },
  {
    id: "documents",
    title: "Odoo Documents",
    category: "Finance",
    description: "An effective tool for any organization dealing with an extensive range of documents. Create, tag, share, and archive key files securely.",
    fullDesc: "Centralized cloud document storage, e-signatures, document tags, automated invoice data extraction, and role-based access security.",
    highlights: ["Cloud Document Hub", "Built-in E-Signatures", "Automated Data Extraction", "Role-Based Access Control"],
    icon: <FileStack className="w-6 h-6" />,
    link: "/apps/odoo-documents",
  },
];

const CATEGORIES = [
  "All",
  "Sales & CRM",
  "Finance",
  "Operations",
  "HR & People",
  "Marketing",
];

export default function SolutionsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayLimit, setDisplayLimit] = useState(9);
  const loadMoreRef = useRef(null);
  const containerSectionRef = useRef(null);

  // Filter Logic - unchanged
  const filteredApps = ALL_FEATURES.filter((app) => {
    const matchesCategory =
      selectedCategory === "All" || app.category === selectedCategory;
    const matchesSearch =
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  React.useEffect(() => {
    if (displayLimit >= filteredApps.length) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayLimit(filteredApps.length);
        }
      },
      { rootMargin: "400px" }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [displayLimit, filteredApps.length]);

  return (
    <div
      ref={containerSectionRef}
      className="relative bg-white overflow-hidden min-h-screen"
    >
      {/* 3D MODULAR APP MATRIX HERO BACKGROUND (Three.js & GSAP) */}
      <div className="w-full min-h-screen relative overflow-hidden bg-[#08153A] pt-28 pb-20 px-6 md:px-12 flex items-center border-b border-[#08153A]/20">
        <AppsHero3DCanvas />

        {/* Ambient Soft Radial Spotlights */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Vertical Transition Gradients for Seamless Navbar and Section Flow */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#08153A] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08153A] to-transparent pointer-events-none" />

        {/* Hero Left Content Area */}
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 bg-[#08153A]/90 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 border border-[#FF6600]/40 shadow-lg">
              <Package className="w-4 h-4 text-[#FF6600]" />
              <span className="tracking-wider uppercase text-white/90">Enterprise Odoo Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
              End-to-end{" "}
              <span className="text-[#FF6600]">
                Odoo ERP Software
              </span>{" "}
              Solution Providers
            </h1>

            {/* Subtitle Description */}
            <p className="text-white/90 text-base md:text-xl max-w-2xl leading-relaxed font-normal mb-8">
              Comprehensive business solutions tailored to transform your operations, streamline workflow automation, and drive enterprise growth.
            </p>

            {/* Hero CTA button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#app-directory"
                className="inline-flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-[#c2410c]/25 transform hover:-translate-y-0.5"
              >
                <span>Explore All 22+ Apps</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* APP DIRECTORY SECTION (CLEAN WHITE TRANSITION) */}
      <div id="app-directory" className="max-w-7xl mx-auto py-12 md:py-16 px-4 md:px-8 relative z-10">
        <h2 className="sr-only">Odoo Applications Directory</h2>

        {/* INTERACTIVE CONTROLS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 sm:p-5 rounded-2xl border border-[#08153A]/10 shadow-sm mb-10 space-y-4"
        >
          {/* SEARCH & MODULE COUNTER ROW */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Live Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#08153A]/40" />
              <input
                type="text"
                placeholder="Search 22+ Odoo Apps (e.g. Sales, CRM, Invoice)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-white border border-[#08153A]/15 text-sm font-medium text-[#08153A] placeholder-[#08153A]/40 focus:outline-none focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#08153A]/40 hover:text-[#08153A]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Counter Badge */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-xs font-semibold text-[#08153A]/70 bg-[#08153A]/5 px-3.5 py-2 rounded-full border border-[#08153A]/10">
                Showing <strong className="text-[#FF6600]">{filteredApps.length}</strong> of {ALL_FEATURES.length} Modules
              </span>
            </div>
          </div>

          {/* CATEGORY TAB FILTERS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-[#08153A] text-white shadow-sm border border-[#08153A]"
                      : "bg-white text-[#08153A] hover:bg-[#08153A]/5 border border-[#08153A]/15"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* NO RESULTS FALLBACK */}
        {filteredApps.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#08153A]/20 p-8 shadow-sm">
            <Search className="w-12 h-12 text-[#08153A]/30 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#08153A]">No Odoo Apps found</h3>
            <p className="text-[#08153A]/70 text-sm mt-1">
              Try searching for a different keyword or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#08153A] hover:bg-[#FF6600] text-white font-bold text-xs shadow-md transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* APP CARDS GRID WITH PRESERVED INTERACTIVE FLIP */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredApps.slice(0, displayLimit).map((feature, index) => (
            <InteractiveFeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
        {displayLimit < filteredApps.length && (
          <div ref={loadMoreRef} className="h-10 w-full pointer-events-none opacity-0" />
        )}
      </div>
    </div>
  );
}

// 3D FLIP CARD COMPONENT WITH PRESERVED INTERACTION & CLEAN ENTERPRISE STYLING
function InteractiveFeatureCard({ feature, index }) {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (isFlipped || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleCardClick = (e) => {
    if (e.target.closest("a") || e.target.closest("button")) {
      return;
    }
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="h-[430px] w-full [perspective:1000px] select-none">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped
            ? "rotateY(180deg)"
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isFlipped
            ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
            : "transform 0.15s ease-out",
        }}
        onClick={handleCardClick}
        className="group relative w-full h-full rounded-2xl cursor-pointer shadow-sm hover:shadow-xl border border-[#08153A]/10 hover:border-[#FF6600]/40 bg-white hover:-translate-y-1"
      >
        {/* ================= FRONT FACE ================= */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full h-full p-6 md:p-7 flex flex-col justify-between rounded-2xl bg-white overflow-hidden"
        >
          <div>
            {/* Top Header: Category Tag */}
            <div className="flex items-center justify-between gap-2 mb-5">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#08153A]/5 text-[#08153A] border border-[#08153A]/10">
                {feature.category}
              </span>
            </div>

            {/* Icon & Title */}
            <div className="relative mb-4 flex items-center gap-3.5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#08153A]/5 border border-[#08153A]/10 text-[#08153A] group-hover:bg-[#FF6600] group-hover:text-white group-hover:border-[#FF6600] transition-all duration-300 shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#08153A] group-hover:text-[#FF6600] transition-colors duration-300 tracking-tight">
                  {feature.title}
                </h3>
                <span className="text-[11px] font-mono text-[#08153A]/70 font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                  Odoo Enterprise Ready
                </span>
              </div>
            </div>

            {/* Description Preview */}
            <p className="text-[#08153A]/70 text-sm leading-relaxed line-clamp-3 mb-4">
              {feature.description}
            </p>

            {/* Quick Highlight Pills */}
            <div className="flex flex-wrap gap-1.5">
              {feature.highlights.slice(0, 2).map((h, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-white border border-[#08153A]/15 text-[#08153A] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1"
                >
                  <Check className="w-3 h-3 text-[#FF6600]" />
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 border-t border-[#08153A]/10 flex items-center justify-between">
            <Link
              href={feature.link}
              onClick={(e) => e.stopPropagation()}
              className="group/btn inline-flex items-center gap-1.5 text-[#08153A] hover:text-[#FF6600] font-bold text-sm transition-colors duration-200"
            >
              <span>Explore {feature.title}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 text-[#FF6600] transition-transform duration-200" />
            </Link>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 group-hover:text-[#08153A] transition-colors">
              <RotateCw className="w-3.5 h-3.5 text-[#FF6600] group-hover:rotate-180 transition-transform duration-500" />
              <span>Click to flip</span>
            </span>
          </div>

          {/* Bottom Hover Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6600] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
        </div>

        {/* ================= BACK FACE ================= */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 w-full h-full p-6 md:p-7 flex flex-col justify-between rounded-2xl bg-white text-[#08153A] overflow-hidden border border-[#08153A]/15 shadow-xl"
        >
          <div>
            {/* Top Header: Category Tag */}
            <div className="flex items-center justify-between gap-2 mb-3.5">
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#08153A]/5 text-[#08153A] border border-[#08153A]/10">
                {feature.category}
              </span>
            </div>

            {/* Title & Icon Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-[#08153A] text-white flex items-center justify-center shadow-sm shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-[#08153A] tracking-tight">
                  {feature.title}
                </h4>
                <span className="text-[11px] font-mono text-[#9a3412] font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                  Quick Capabilities
                </span>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-slate-700 text-xs leading-relaxed line-clamp-2 mb-3">
              {feature.fullDesc}
            </p>

            {/* Key Capabilities Highlights List */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#9a3412]">
                Key Features:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {feature.highlights.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-1.5 px-2.5 rounded-lg bg-[#08153A]/5 border border-[#08153A]/10 text-xs font-semibold text-[#08153A]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6600] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Actions Footer */}
          <div className="pt-3 border-t border-[#08153A]/10 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#08153A] transition-colors">
              <RotateCcw className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>Click to flip back</span>
            </span>

            <Link
              href={feature.link}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#08153A] hover:bg-[#FF6600] text-white font-bold text-xs shadow-sm transition-all duration-200 transform hover:gap-2"
            >
              <span>Explore {feature.title} Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Bottom Accent Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6600] rounded-b-2xl" />
        </div>
      </div>
    </div>
  );
}