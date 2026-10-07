"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  CheckCircle2,
  Phone,
  Mail,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Clock,
  Check
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+91",
    country: "India",
    phone: "",
    email: "",
    company: "",
    companySize: "",
    businessNeeds: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [activeHoverStep, setActiveHoverStep] = useState(null);

  // Animation refs
  const sectionRef = useRef(null);
  const formCardRef = useRef(null);
  const processCardRef = useRef(null);
  const timelineLineProgressRef = useRef(null);
  const stepItemsRef = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Form entrance animation
      gsap.fromTo(
        formCardRef.current,
        { opacity: 0, x: -30, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Process Card container entrance
      gsap.fromTo(
        processCardRef.current,
        { opacity: 0, x: 30, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Sequential Scroll-driven Storytelling Timeline
      const timelineTl = gsap.timeline({
        scrollTrigger: {
          trigger: processCardRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      });

      // Animate the vertical line drawing progressively
      if (timelineLineProgressRef.current) {
        timelineTl.fromTo(
          timelineLineProgressRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          { scaleY: 1, duration: 1.2, ease: "power2.inOut" }
        );
      }

      // Stagger each step (Node icon, horizontal connector, and card content)
      const validSteps = stepItemsRef.current.filter(Boolean);
      if (validSteps.length > 0) {
        validSteps.forEach((stepEl, idx) => {
          const iconEl = stepEl.querySelector(".timeline-icon-box");
          const bridgeEl = stepEl.querySelector(".timeline-bridge");
          const cardEl = stepEl.querySelector(".timeline-content-card");

          const stepTl = gsap.timeline();
          if (iconEl) {
            stepTl.fromTo(
              iconEl,
              { scale: 0.8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
            );
          }
          if (bridgeEl) {
            stepTl.fromTo(
              bridgeEl,
              { scaleX: 0, transformOrigin: "left center" },
              { scaleX: 1, duration: 0.3, ease: "power2.out" },
              "-=0.2"
            );
          }
          if (cardEl) {
            stepTl.fromTo(
              cardEl,
              { x: 25, opacity: 0, scale: 0.98 },
              { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
              "-=0.2"
            );
          }

          timelineTl.add(stepTl, idx * 0.25);
        });
      }

      // Stats stagger reveal
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 18, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.company.trim()) errors.company = "Company name is required";
    if (!formData.companySize) errors.companySize = "Company size is required";
    if (!formData.businessNeeds) errors.businessNeeds = "Please select a service";
    if (!formData.requirements.trim() || formData.requirements.trim().length < 15) {
      errors.requirements = "Please enter at least 15 characters";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const whatsappNumber = "918976104646";

      const message = `🔔 *New Consultation Request*

👤 *Name:* ${formData.firstName} ${formData.lastName}
📱 *Phone:* ${formData.countryCode} ${formData.phone}
📧 *Email:* ${formData.email}
🏢 *Company:* ${formData.company}
📊 *Company Size:* ${formData.companySize || "Not specified"}
💼 *Business Needs:* ${formData.businessNeeds || "Not specified"}

📝 *Requirements:*
${formData.requirements}

---
Sent from Nexcore Alliance Website`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");

      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          countryCode: "+91",
          country: "India",
          phone: "",
          email: "",
          company: "",
          companySize: "",
          businessNeeds: "",
          requirements: "",
        });
        setIsSubmitting(false);
      }, 1200);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      number: "01",
      stepBadge: "STEP 1",
      title: "Requirements Analysis",
      description:
        "Our technical architects analyze and understand your unique digital requirements.",
      icon: MessageSquare,
      color: "#246BFF",
      bgColor: "bg-[#246BFF]",
      activeBorder: "hover:border-[#246BFF]/50",
      glowColor: "shadow-blue-500/20",
    },
    {
      number: "02",
      stepBadge: "STEP 2",
      title: "Quick Follow-up",
      description:
        "You will receive a strategic follow-up consultation at your most convenient time.",
      icon: Phone,
      color: "#FF6500",
      bgColor: "bg-[#FF6500]",
      activeBorder: "hover:border-[#FF6500]/50",
      glowColor: "shadow-orange-500/20",
    },
    {
      number: "03",
      stepBadge: "STEP 3",
      title: "NDA & Security",
      description:
        "We execute mutual NDAs to ensure your intellectual property remains 100% private and protected.",
      icon: CheckCircle2,
      color: "#10B981",
      bgColor: "bg-[#10B981]",
      activeBorder: "hover:border-[#10B981]/50",
      glowColor: "shadow-emerald-500/20",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/105730702/admin/dashboard",
      color: "hover:bg-blue-600",
      gradient: "from-blue-600 to-blue-700",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61570113656994",
      color: "hover:bg-sky-500",
      gradient: "from-sky-500 to-blue-500",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/Nexcorealliancellp/",
      color: "hover:bg-pink-500",
      gradient: "from-pink-500 to-purple-600",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag",
      color: "hover:bg-red-600",
      gradient: "from-red-600 to-red-700",
      label: "YouTube",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F7FAFF] to-[#F7FAFF] relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Labels Matching Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 items-center">
          {/* Left Pill */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/80 rounded-full shadow-2xs">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                Get In Touch
              </span>
            </div>
          </div>

          {/* Right Pill */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200/80 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-orange-800">
                Our Process
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Consultation Form & Right Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Consultation Form */}
          <div
            ref={formCardRef}
            className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-10 border border-[rgba(10,35,75,0.08)] shadow-[0_12px_40px_-15px_rgba(7,21,47,0.06)] hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="relative z-10">
              {/* Form Title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#246BFF] to-[#1554D8] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#07152F]">
                    Let&apos;s Discuss Your Project
                  </h3>
                  <p className="text-[#53657D] text-xs sm:text-sm font-medium">
                    Share your requirements and our team will get back to you shortly
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* 1. Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("firstName")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="First Name"
                      className={`w-full px-4 py-3 bg-[#F8FAFD] border-2 rounded-xl text-slate-900 placeholder-slate-400 text-sm font-medium transition-all ${
                        focusedField === "firstName"
                          ? "border-[#246BFF] bg-white ring-4 ring-blue-50"
                          : formErrors.firstName
                          ? "border-rose-500 bg-rose-50/30"
                          : "border-[#E3EAF3] hover:border-slate-300"
                      }`}
                    />
                    {formErrors.firstName && (
                      <p className="text-xs text-rose-500 font-semibold mt-1">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("lastName")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Last Name"
                      className={`w-full px-4 py-3 bg-[#F8FAFD] border-2 rounded-xl text-slate-900 placeholder-slate-400 text-sm font-medium transition-all ${
                        focusedField === "lastName"
                          ? "border-[#246BFF] bg-white ring-4 ring-blue-50"
                          : formErrors.lastName
                          ? "border-rose-500 bg-rose-50/30"
                          : "border-[#E3EAF3] hover:border-slate-300"
                      }`}
                    />
                    {formErrors.lastName && (
                      <p className="text-xs text-rose-500 font-semibold mt-1">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* 2. Phone & Country Code */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <div className="flex gap-2.5">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-28 sm:w-32 px-3 py-3 bg-[#F8FAFD] border-2 border-[#E3EAF3] rounded-xl text-slate-900 text-sm font-semibold hover:border-slate-300 transition-all cursor-pointer"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+974">🇶🇦 +974</option>
                      <option value="+968">🇴🇲 +968</option>
                      <option value="+965">🇰🇼 +965</option>
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Phone Number"
                      className={`flex-1 px-4 py-3 bg-[#F8FAFD] border-2 rounded-xl text-slate-900 placeholder-slate-400 text-sm font-medium transition-all ${
                        focusedField === "phone"
                          ? "border-[#246BFF] bg-white ring-4 ring-blue-50"
                          : formErrors.phone
                          ? "border-rose-500 bg-rose-50/30"
                          : "border-[#E3EAF3] hover:border-slate-300"
                      }`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* 3. Work Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Work Email"
                    className={`w-full px-4 py-3 bg-[#F8FAFD] border-2 rounded-xl text-slate-900 placeholder-slate-400 text-sm font-medium transition-all ${
                      focusedField === "email"
                        ? "border-[#246BFF] bg-white ring-4 ring-blue-50"
                        : formErrors.email
                        ? "border-rose-500 bg-rose-50/30"
                        : "border-[#E3EAF3] hover:border-slate-300"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* 4. Company Name & Company Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Company Name"
                      className={`w-full px-4 py-3 bg-[#F8FAFD] border-2 rounded-xl text-slate-900 placeholder-slate-400 text-sm font-medium transition-all ${
                        focusedField === "company"
                          ? "border-[#246BFF] bg-white ring-4 ring-blue-50"
                          : formErrors.company
                          ? "border-rose-500 bg-rose-50/30"
                          : "border-[#E3EAF3] hover:border-slate-300"
                      }`}
                    />
                    {formErrors.company && (
                      <p className="text-xs text-rose-500 font-semibold mt-1">
                        {formErrors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Company Size *
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("companySize")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-[#F8FAFD] border-2 rounded-xl text-slate-900 text-sm font-medium transition-all cursor-pointer ${
                        focusedField === "companySize"
                          ? "border-[#246BFF] bg-white ring-4 ring-blue-50"
                          : formErrors.companySize
                          ? "border-rose-500 bg-rose-50/30"
                          : "border-[#E3EAF3] hover:border-slate-300"
                      }`}
                    >
                      <option value="">Company Size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                    {formErrors.companySize && (
                      <p className="text-xs text-rose-500 font-semibold mt-1">
                        {formErrors.companySize}
                      </p>
                    )}
                  </div>
                </div>

                {/* 5. Business Needs */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Select Your Business Need *
                  </label>
                  <select
                    name="businessNeeds"
                    value={formData.businessNeeds}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("businessNeeds")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-[#F8FAFD] border-2 rounded-xl text-slate-900 text-sm font-medium transition-all cursor-pointer ${
                      focusedField === "businessNeeds"
                        ? "border-[#246BFF] bg-white ring-4 ring-blue-50"
                        : formErrors.businessNeeds
                        ? "border-rose-500 bg-rose-50/30"
                        : "border-[#E3EAF3] hover:border-slate-300"
                    }`}
                  >
                    <option value="">Select your Business Need</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App Development</option>
                    <option value="AI Solutions">AI Solutions &amp; Machine Learning</option>
                    <option value="Odoo ERP">Odoo ERP Implementation &amp; Customization</option>
                    <option value="Cloud & DevOps">Cloud Infrastructure &amp; DevOps</option>
                    <option value="IT Consulting">IT Consulting &amp; Architecture</option>
                    <option value="Other">Other Digital Services</option>
                  </select>
                  {formErrors.businessNeeds && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">
                      {formErrors.businessNeeds}
                    </p>
                  )}
                </div>

                {/* 6. Requirements */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Tell us about your project requirements *
                    </label>
                    <span
                      className={`text-[11px] font-bold ${
                        formData.requirements.length >= 15
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }`}
                    >
                      {formData.requirements.length}/15 min chars
                    </span>
                  </div>
                  <textarea
                    name="requirements"
                    rows="4"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("requirements")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your project requirements (minimum 15 characters)*"
                    className={`w-full px-4 py-3 bg-[#F8FAFD] border-2 rounded-xl text-slate-900 placeholder-slate-400 text-sm font-medium transition-all resize-none ${
                      focusedField === "requirements"
                        ? "border-[#246BFF] bg-white ring-4 ring-blue-50"
                        : formErrors.requirements
                        ? "border-rose-500 bg-rose-50/30"
                        : "border-[#E3EAF3] hover:border-slate-300"
                    }`}
                  />
                  {formErrors.requirements && (
                    <p className="text-xs text-rose-500 font-semibold mt-1">
                      {formErrors.requirements}
                    </p>
                  )}
                </div>

                {/* Submit Feedback Banner */}
                {submitSuccess && (
                  <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <p className="text-xs sm:text-sm font-semibold">
                      Thank you! Your consultation request has been prepared and dispatched.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group overflow-hidden py-4 px-6 rounded-2xl bg-gradient-to-r from-[#246BFF] via-[#1677FF] to-[#FF6500] hover:from-blue-700 hover:via-blue-600 hover:to-orange-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2.5">
                    {isSubmitting ? (
                      <React.Fragment>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing Consultation...</span>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <span>Schedule a Consultation</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                      </React.Fragment>
                    )}
                  </div>
                </button>

                {/* Privacy & Security guarantee */}
                <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-500 text-center font-medium">
                  <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Your information is secure. By submitting, you agree to let Nexcore Alliance contact you.
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: REVAMPED "What Happens Next?" Process Timeline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Timeline Card Container */}
            <div
              ref={processCardRef}
              className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-9 border border-[rgba(10,35,75,0.08)] shadow-[0_12px_40px_-15px_rgba(7,21,47,0.06)] relative overflow-hidden"
            >
              {/* Subtle ambient light blue glow behind timeline */}
              <div className="absolute top-1/3 left-6 w-48 h-48 bg-[#246BFF]/5 rounded-full blur-2xl pointer-events-none" />

              {/* Section Header */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 bg-gradient-to-br from-[#FF6500] to-[#FF8533] rounded-2xl flex items-center justify-center text-white shadow-md shadow-orange-500/20 flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#07152F] tracking-tight leading-tight">
                    What Happens <span className="text-[#FF6500]">Next?</span>
                  </h3>
                  <p className="text-[#53657D] text-xs sm:text-sm font-medium mt-0.5">
                    Our transparent 3-step onboarding flow
                  </p>
                </div>
              </div>

              {/* Connected Process Flow */}
              <div className="relative space-y-6 sm:space-y-7">
                {/* 2px Continuous Vertical Connecting Line */}
                <div className="absolute left-6 sm:left-7 top-7 bottom-7 w-[2px] bg-slate-100 rounded-full pointer-events-none" />
                <div
                  ref={timelineLineProgressRef}
                  className="absolute left-6 sm:left-7 top-7 bottom-7 w-[2px] bg-gradient-to-b from-[#246BFF] via-[#FF6500] to-[#10B981] opacity-70 rounded-full pointer-events-none"
                />

                {steps.map((step, index) => {
                  const isHovered = activeHoverStep === index;
                  return (
                    <div
                      key={index}
                      ref={(el) => (stepItemsRef.current[index] = el)}
                      onMouseEnter={() => setActiveHoverStep(index)}
                      onMouseLeave={() => setActiveHoverStep(null)}
                      className="group relative flex items-center gap-3 sm:gap-4.5 cursor-pointer"
                    >
                      {/* Timeline Node Column (approx 56px) */}
                      <div className="relative z-10 flex-shrink-0 flex items-center justify-center">
                        <div
                          className={`timeline-icon-box w-12 h-12 sm:w-14 sm:h-14 ${step.bgColor} rounded-2xl flex items-center justify-center text-white shadow-md ${step.glowColor} transition-transform duration-300 ${
                            isHovered ? "scale-105" : "scale-100"
                          }`}
                        >
                          <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-xs" />
                        </div>
                      </div>

                      {/* Horizontal Connector Bridge */}
                      <div
                        className={`timeline-bridge w-3 sm:w-4 h-[2px] transition-colors duration-300 ${
                          isHovered ? "bg-[#246BFF]" : "bg-slate-200"
                        }`}
                      />

                      {/* Process Step Card */}
                      <div
                        className={`timeline-content-card flex-1 bg-[#F8FAFD] border border-[#E3EAF3] rounded-[20px] p-5 sm:p-6 relative overflow-hidden transition-all duration-300 ${
                          isHovered
                            ? "bg-white border-[#246BFF]/40 shadow-lg -translate-y-1 shadow-blue-500/5"
                            : "hover:border-slate-300"
                        }`}
                      >
                        {/* Subtle background number watermark */}
                        <span className="absolute top-2 right-4 text-3xl sm:text-4xl font-black text-slate-200/50 select-none pointer-events-none tracking-tighter">
                          {step.number}
                        </span>

                        {/* Step Badge & Title */}
                        <div className="flex flex-wrap items-center gap-2 mb-2 relative z-10">
                          <span className="px-2.5 py-0.5 bg-white border border-[#E3EAF3] rounded-md text-[11px] font-bold text-[#07152F] shadow-2xs">
                            {step.stepBadge}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-[#07152F] tracking-tight">
                            {step.title}
                          </h4>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#53657D] font-normal leading-[1.55] relative z-10">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl p-4 text-center border border-[rgba(10,35,75,0.08)] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#246BFF] to-blue-700 bg-clip-text text-transparent">
                  329+
                </p>
                <p className="text-xs font-bold text-slate-600 mt-0.5">Projects</p>
              </div>

              <div className="bg-white rounded-2xl p-4 text-center border border-[rgba(10,35,75,0.08)] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#FF6500] to-orange-600 bg-clip-text text-transparent">
                  94%
                </p>
                <p className="text-xs font-bold text-slate-600 mt-0.5">Satisfied</p>
              </div>

              <div className="bg-white rounded-2xl p-4 text-center border border-[rgba(10,35,75,0.08)] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#246BFF] to-blue-700 bg-clip-text text-transparent">
                  24/7
                </p>
                <p className="text-xs font-bold text-slate-600 mt-0.5">Support</p>
              </div>
            </div>

            {/* Social Links Connect Card */}
            <div className="bg-white rounded-2xl p-5 border border-[rgba(10,35,75,0.08)] shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF6500]" />
                <span className="text-xs sm:text-sm font-bold text-[#07152F]">
                  Connect With Us
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ icon: Icon, href, gradient, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:text-white hover:scale-110 transition-all duration-300 relative overflow-hidden group shadow-sm"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <Icon className="w-4 h-4 relative z-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;