"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  Headphones,
  ArrowUpRight,
  Phone,
  CalendarCheck,
  BarChart3,
  Globe2,
  Plug,
  Play,
  Pause,
  Mic,
  Cpu,
  Database,
  UserCheck,
  HeartPulse,
  Building2,
  GraduationCap,
  Banknote,
  Smile,
  Briefcase,
  Sparkles,
  Volume2,
  CheckCircle2,
  Zap,
  RefreshCw,
  Bot,
  ChevronRight,
  Terminal,
  Activity,
  ShoppingBag,
  TrendingUp,
  MessageSquare,
  User,
  Clock,
  VolumeX,
  ShieldCheck,
  Layers,
  Code,
  Sliders,
  Check,
  Copy,
  Send,
  Mail,
  Calculator,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

const Robot3DCanvas = dynamic(() => import("@/components/voiceagent/Robot3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] sm:h-[500px] md:h-[540px] rounded-3xl bg-slate-950 flex items-center justify-center border border-cyan-500/30 shadow-2xl">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs text-cyan-300 font-mono font-semibold">Loading 3D AI Robot...</span>
      </div>
    </div>
  ),
});

export default function AIVoiceAgentPage() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [voice, setVoice] = useState("Professional");
  const [active, setActive] = useState(0);
  const [playingSample, setPlayingSample] = useState(null);

  const handlePlaySample = (voiceId) => {
    setPlayingSample(voiceId);
    setTimeout(() => {
      setPlayingSample((current) => (current === voiceId ? null : current));
    }, 3500);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION (FULL SCREEN) ================= */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-28 pb-16 bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 overflow-hidden">
        {/* Ambient Soft Light Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-300/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-300/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

        {/* HERO CONTAINER */}
        <div className="relative z-20 w-full max-w-7xl mx-auto text-gray-900">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* LEFT CONTENT COLUMN */}
            <div className="space-y-6">
              {/* BADGE */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                  AI Powered Voice Automation
                </span>
              </motion.div>

              {/* HEADLINE */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]"
              >
                AI Voice Agents for{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                  Real Conversations
                </span>
              </motion.h1>

              {/* PARAGRAPH */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl"
              >
                Deploy human-like voice AI that supports customers, qualifies leads,
                and schedules appointments — 24/7, across languages and channels.
              </motion.p>

              {/* CTA BUTTONS */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href="https://wa.me/919594402822?text=Hi%20I%20would%20like%20to%20get%20a%20demo%20of%20your%20AI%20Voice%20Agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="w-4 h-4" /> Get Demo
                </a>
              </motion.div>

              {/* TRUST METRICS */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="pt-6 border-t border-gray-200/80 flex flex-wrap gap-6 text-xs sm:text-sm font-medium text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-blue-500" />
                  <span>Multilingual</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-500" />
                  <span>Secure APIs</span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT VISUAL / PRODUCT SHOWCASE */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.92, y: 30 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="relative"
            >
              {/* 3D INTERACTIVE ROBOT CANVAS CONTAINER */}
              <div className="relative w-full">
                <Robot3DCanvas />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ================= FLOW – DARK PREMIUM ================= */}
      <section className="py-24 bg-gradient-to-br from-[#030712] via-[#08153A] to-[#030712] relative overflow-hidden text-white">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-cyan-400 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" /> Conversational AI Architecture
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-300"
            >
              How Voice Agent Works
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-blue-200/80 text-base md:text-lg"
            >
              Real-time conversational intelligence powered by speech, AI and business logic.
            </motion.p>
          </div>

          {/* Interactive Staggered Flow Timeline */}
          <InteractiveVoiceFlow />
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      {(() => {
        const allTabs = [
          {
            name: "ALL",
            items: categories.flatMap((cat) =>
              cat.items.map((item) => ({ ...item, categoryName: cat.name }))
            ),
          },
          ...categories,
        ];

        return (
          <section className="relative bg-white text-black py-32 md:py-40 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

              {/* TOP HEADER WITH SCROLL ENTRANCE */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center mb-16"
              >
                <span className="inline-flex items-center gap-2 mb-4 text-xs px-4 py-1.5 rounded-full bg-blue-950 text-cyan-300 border border-cyan-500/30 font-semibold shadow-lg shadow-blue-900/20">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  <span>OUR AGENTS</span>
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight bg-gradient-to-r from-gray-900 via-blue-950 to-indigo-950 bg-clip-text text-transparent">
                  Agents That Do More Than Talk
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                  Create AI voice agents for India that sound natural, understand context,
                  and speak multiple Indian languages including Hindi, Tamil, Telugu, Bengali,
                  Marathi, Hinglish.
                </p>
              </motion.div>

              {/* STICKY TOP NAVBAR FILTER TABS */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="sticky top-20 z-40 bg-[#0b1220]/95 backdrop-blur-xl p-2.5 rounded-2xl border border-white/10 mb-16 shadow-2xl max-w-5xl mx-auto flex flex-nowrap sm:flex-wrap overflow-x-auto scrollbar-none justify-start sm:justify-center gap-2"
              >
                {allTabs.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 shrink-0 ${active === i
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40 scale-105"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </motion.div>

              {/* CARDS */}
              {active === 0 ? (
                /* ALL TAB: 3D Perspective Marquee with Soundwaves & 3D Depth Lift */
                <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-16 px-4 sm:px-8 group/marquee [perspective:1200px]">
                  <style>{`
                    @keyframes marqueeRTL {
                      0% { transform: translateX(0%); }
                      100% { transform: translateX(-50%); }
                    }
                    @keyframes waveBar {
                      0%, 100% { height: 4px; }
                      50% { height: 16px; }
                    }
                    .animate-marquee-rtl {
                      animation: marqueeRTL 38s linear infinite;
                    }
                    .group\\/marquee:hover .animate-marquee-rtl {
                      animation-play-state: paused;
                    }
                    .soundwave-1 { animation: waveBar 0.8s ease-in-out infinite 0.1s; }
                    .soundwave-2 { animation: waveBar 0.8s ease-in-out infinite 0.3s; }
                    .soundwave-3 { animation: waveBar 0.8s ease-in-out infinite 0.2s; }
                    .soundwave-4 { animation: waveBar 0.8s ease-in-out infinite 0.4s; }
                  `}</style>

                  {/* Backdrop Blur Masks on edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-36 backdrop-blur-md [mask-image:linear-gradient(to_right,black_30%,transparent)] z-20 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-36 backdrop-blur-md [mask-image:linear-gradient(to_left,black_30%,transparent)] z-20 pointer-events-none" />

                  <div className="flex gap-8 w-max animate-marquee-rtl [transform-style:preserve-3d] px-4">
                    {[...allTabs[0].items, ...allTabs[0].items].map((item, i) => (
                      <div
                        key={i}
                        className="group w-[420px] sm:w-[480px] md:w-[540px] min-h-[320px] md:min-h-[360px] shrink-0 bg-gradient-to-br from-[#0c1629] via-[#0b1220] to-[#050b14] border border-white/10 hover:border-cyan-400/80 rounded-3xl p-9 md:p-10 flex flex-col justify-between transition-all duration-500 shadow-2xl hover:shadow-[0_0_35px_rgba(6,182,212,0.35)] hover:-translate-y-2 hover:[transform:rotateY(-5deg)_rotateX(3deg)_translateZ(20px)] cursor-pointer select-none"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-5">
                            <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                              {item.title}
                            </h3>
                            {item.categoryName && (
                              <span className="text-xs font-bold bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-cyan-300 border border-cyan-500/40 px-3.5 py-1 rounded-full shrink-0 shadow-sm">
                                {item.categoryName}
                              </span>
                            )}
                          </div>

                          <div className="flex gap-2 mb-5 flex-wrap">
                            {item.tags.map((t, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-lg font-medium border border-white/5"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-xs pt-5 border-t border-white/10 text-cyan-300 font-mono">
                          <span className="flex items-center gap-2 font-semibold group-hover:text-white transition-colors">
                            <Phone className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" /> {item.phone}
                          </span>

                          <div className="flex items-center gap-2">
                            {/* Live Animated Soundwave */}
                            <div className="flex items-end gap-0.5 h-4 px-1">
                              <span className="w-1 bg-cyan-400 rounded-full soundwave-1" />
                              <span className="w-1 bg-blue-400 rounded-full soundwave-2" />
                              <span className="w-1 bg-teal-400 rounded-full soundwave-3" />
                              <span className="w-1 bg-cyan-300 rounded-full soundwave-4" />
                            </div>

                            <span className="text-emerald-400 text-[11px] font-sans font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              24/7 Active
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* INDIVIDUAL CATEGORY TAB: 3D Stagger Grid */
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  className="grid md:grid-cols-2 gap-10 lg:gap-12 py-10 [perspective:1000px]"
                >
                  {allTabs[active].items.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 30, rotateX: 10 },
                        visible: { opacity: 1, y: 0, rotateX: 0 },
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="group relative bg-gradient-to-br from-[#0c1629] via-[#0b1220] to-[#050b14] border border-white/10 hover:border-cyan-400/80 rounded-3xl p-9 md:p-10 flex flex-col justify-between transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.3)] hover:-translate-y-2 hover:[transform:rotateY(-3deg)_rotateX(2deg)_translateZ(15px)] cursor-pointer select-none min-h-[300px] md:min-h-[340px]"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-5">
                          <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                            {item.title}
                          </h3>
                        </div>

                        <div className="flex gap-2 mb-5 flex-wrap">
                          {item.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-lg font-medium border border-white/5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-5 border-t border-white/10 text-cyan-300 font-mono">
                        <span className="flex items-center gap-2 font-semibold group-hover:text-white transition-colors">
                          <Phone className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" /> {item.phone}
                        </span>

                        <div className="flex items-center gap-2">
                          {/* Live Animated Soundwave */}
                          <div className="flex items-end gap-0.5 h-4 px-1">
                            <span className="w-1 bg-cyan-400 rounded-full soundwave-1" />
                            <span className="w-1 bg-blue-400 rounded-full soundwave-2" />
                            <span className="w-1 bg-teal-400 rounded-full soundwave-3" />
                            <span className="w-1 bg-cyan-300 rounded-full soundwave-4" />
                          </div>

                          <span className="text-emerald-400 text-[11px] font-sans font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            24/7 Active
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

            </div>
          </section>
        );
      })()}

      {/* ================= VOICE PERSONALITY ================= */}
      {(() => {
        const PERSONALITIES = [
          {
            id: "Professional",
            title: "Professional",
            tagline: "Formal & Executive Tone",
            description: "Formal, structured conversation tailored for corporate support, banking & enterprise workflows.",
            icon: <Briefcase className="w-6 h-6 text-blue-600" />,
            dialogue: "\"Good day. Thank you for calling Nexcore Alliance. How may I assist you with your account details today?\"",
          },
          {
            id: "Friendly",
            title: "Friendly",
            tagline: "Warm & Conversational",
            description: "Approachably warm and natural voice perfect for customer service, appointment desk & daily query handling.",
            icon: <Smile className="w-6 h-6 text-blue-600" />,
            dialogue: "\"Hey there! Super glad you called! What can I help you out with today?\"",
          },
          {
            id: "Sales-Oriented",
            title: "Sales-Oriented",
            tagline: "Persuasive & Conversion Driven",
            description: "Engaging, high-energy tone designed to qualify leads, pitch products, and close sales calls.",
            icon: <Sparkles className="w-6 h-6 text-blue-600" />,
            dialogue: "\"Hi! Excited to share our latest AI Voice features that can boost your lead conversions by 40%. Ready to dive in?\"",
          },
        ];

        return (
          <section className="py-24 bg-gradient-to-br from-[#030712] via-[#08153A] to-[#030712] relative overflow-hidden text-white">
            {/* Soft Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-cyan-400 mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Brand Identity & Tone
              </span>

              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-300">
                Choose Voice Personality
              </h2>
              <p className="mt-4 text-blue-200/80 max-w-2xl mx-auto text-base md:text-lg">
                Match your brand tone with adaptive AI voice behavior, accents, and speech dynamics.
              </p>

              {/* Personality Cards Grid */}
              <div className="grid md:grid-cols-3 gap-8 mt-14">
                {PERSONALITIES.map((p) => {
                  const isSelected = voice === p.id;

                  return (
                    <motion.div
                      key={p.id}
                      whileHover={{ y: -8 }}
                      onClick={() => setVoice(p.id)}
                      className={`relative cursor-pointer rounded-2xl p-7 md:p-8 transition-all duration-300 flex flex-col justify-between ${isSelected
                        ? "bg-white border-2 border-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.3)] ring-4 ring-blue-500/20 scale-[1.03]"
                        : "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-xl"
                        }`}
                    >
                      {/* Selected Checkmark Badge */}
                      {isSelected && (
                        <div className="absolute top-4 right-4 bg-blue-600 text-white p-1.5 rounded-full shadow-md flex items-center justify-center font-bold">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      )}

                      <div>
                        {/* Icon Pill */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`p-3 rounded-xl border transition-all ${isSelected
                              ? "bg-blue-50 border-blue-200 text-blue-600 shadow-sm"
                              : "bg-gray-100 border-gray-200 text-gray-600"
                              }`}
                          >
                            {p.icon}
                          </div>
                          <div className="text-left">
                            <h4 className="text-xl font-bold text-gray-900 tracking-tight">{p.title}</h4>
                            <span className="text-xs text-blue-600 font-semibold">{p.tagline}</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 text-left leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dynamic Interactive Speech Bubble Script Box */}
              <motion.div
                key={voice}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-14 max-w-3xl mx-auto relative bg-gradient-to-br from-[#09173d] via-[#06112e] to-[#081639] border-2 border-cyan-500/40 rounded-3xl p-6 md:p-8 shadow-[0_0_40px_rgba(6,182,212,0.25)] text-center"
              >
                {/* Speech Bubble Badge Header */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" /> Live Dialogue Simulation
                </div>

                <div className="flex items-center justify-between text-xs mb-3 border-b border-white/10 pb-3">
                  <span className="text-blue-200/80 font-medium">
                    Active Voice: <strong className="text-cyan-300 font-semibold">{voice}</strong>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    ● HD Neural TTS Stream
                  </span>
                </div>

                <div className="relative py-3 px-5 bg-black/40 rounded-2xl border border-cyan-500/20 text-left">
                  <p className="text-base md:text-lg text-cyan-100 font-medium leading-relaxed italic">
                    {PERSONALITIES.find((p) => p.id === voice)?.dialogue}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })()}

      {/* ================= FREE FLOW INTERACTION (ENHANCED) ================= */}
      <section className="relative py-32 overflow-hidden bg-white text-gray-900">

        {/* Glow Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-100/50 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100/50 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-gray-900">

          {/* Heading */}
          <div className="max-w-3xl mx-auto">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-600 tracking-wide">
              AI Voice Conversations
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Have a Free-Flow <br />
              Interaction Anytime, <br />
              Anywhere
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Human-like conversations that scale with your business and never miss a call.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-24 grid gap-12 md:grid-cols-3">

            <div className="group relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300" />
              <FreeFlowCard
                img="/voiceagent/card3.jpg"
                title="Keep Customers Engaged"
                desc="Respond instantly, resolve queries faster and build trust with every call."
              />
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300" />
              <FreeFlowCard
                img="/voiceagent/ai.gif"
                title="Scale Inbound Call Support"
                desc="Handle thousands of simultaneous calls without increasing human agents."
              />
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300" />
              <FreeFlowCard
                img="/voiceagent/card2.jpg"
                title="One AI Call Solution for All"
                desc="Sales, support, booking and surveys — all through one voice brain."
              />
            </div>

          </div>

        </div>
      </section>


      {/* ================= VOICE USE-CASE DEMO SECTION ================= */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            No More Press 1, Press 2…
          </h2>

          <p className="mt-2 text-blue-600 font-medium text-lg">
            Experience Conversational Voice AI Built by Nexcore Alliance
          </p>

          <VoiceDemoHub />
        </div>
      </section>

      {/* ================= FEATURES – DARK GRID SECTION ================= */}
      <InteractiveDarkFeaturesSection />

      {/* ================= TALK TO US ================= */}
      <InteractiveTalkToUsSection />


      <Footer />
    </main>
  );
}

const VOICE_DEMOS = [
  {
    id: "lead-qual",
    title: "Lead Qualification",
    badge: "Inbound & Sales",
    icon: Sparkles,
    color: "from-blue-600 to-cyan-500",
    customerQuery: "Hi, I need an enterprise plan for 50 sales agents with custom CRM sync.",
    aiResponse: "Awesome! Our Enterprise Tier includes unlimited AI voice minutes, 80ms latency, and 1-click Salesforce & Hubspot integration. Should I schedule a 15-min demo with our sales engineer?",
    metrics: { latency: "78 ms", accuracy: "99.4%", status: "Lead Qualified: Enterprise" }
  },
  {
    id: "product-rec",
    title: "Product Recommendation",
    badge: "E-Commerce AI",
    icon: ShoppingBag,
    color: "from-purple-600 to-indigo-500",
    customerQuery: "I'm looking for a lightweight laptop for 4K video editing under $1500.",
    aiResponse: "I recommend the NexBook Pro 14. It features a 12-core GPU, 32GB RAM, weighs 1.2kg, and is priced at $1,399. Shall I text you a direct checkout link?",
    metrics: { latency: "85 ms", accuracy: "98.9%", status: "SMS Checkout Link Sent" }
  },
  {
    id: "bookings",
    title: "Bookings & Appointments",
    badge: "Services & Healthcare",
    icon: CalendarCheck,
    color: "from-emerald-600 to-teal-500",
    customerQuery: "Can I move my dental appointment tomorrow to Friday at 3:00 PM?",
    aiResponse: "Checking Dr. Smith's calendar... Friday at 3:00 PM is available! I've rescheduled your slot and sent a confirmation SMS to your number.",
    metrics: { latency: "82 ms", accuracy: "99.8%", status: "Slot Booked & Synced" }
  },
  {
    id: "support",
    title: "Customer Support",
    badge: "Instant Resolution",
    icon: Headphones,
    color: "from-amber-500 to-orange-500",
    customerQuery: "Where is my package #94021? It was supposed to be delivered today.",
    aiResponse: "Your package is currently out for delivery with FedEx and expected by 5:30 PM today. Delivery tracking details have been sent to your phone!",
    metrics: { latency: "90 ms", accuracy: "99.1%", status: "Order Status Dispatched" }
  }
];

function VoiceDemoHub() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speakerActive, setSpeakerActive] = useState(false);
  const [callDuration, setCallDuration] = useState(14);
  const activeDemo = VOICE_DEMOS[activeIdx];
  const IconComp = activeDemo.icon;

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePlayVoice = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (speakerActive) {
        window.speechSynthesis.cancel();
        setSpeakerActive(false);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(activeDemo.aiResponse);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.onend = () => setSpeakerActive(false);
      utterance.onerror = () => setSpeakerActive(false);
      setSpeakerActive(true);
      window.speechSynthesis.speak(utterance);
    } else {
      setSpeakerActive(true);
      setTimeout(() => setSpeakerActive(false), 4000);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="relative mt-12 max-w-5xl mx-auto px-4">
      {/* 1. TOP INTERACTIVE USE-CASE SELECTOR CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {VOICE_DEMOS.map((demo, idx) => {
          const isSelected = activeIdx === idx;
          const DemoIcon = demo.icon;
          return (
            <button
              key={demo.id}
              onClick={() => {
                setActiveIdx(idx);
                setIsPlaying(true);
              }}
              className={`relative text-left p-5 rounded-2xl transition-all duration-300 border ${isSelected
                ? "bg-white border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02] ring-2 ring-blue-400/30"
                : "bg-white/80 hover:bg-white border-gray-200 shadow-sm hover:shadow-md"
                }`}
            >
              {isSelected && (
                <span className="absolute top-3 right-3 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
              )}

              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${demo.color} text-white flex items-center justify-center shadow-md`}>
                  <DemoIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                  {demo.badge}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 text-base leading-snug">
                {demo.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                Click to test interactive agent
              </p>
            </button>
          );
        })}
      </div>

      {/* 2. MAIN INTERACTIVE CONSOLE ARENA */}
      <div className="relative rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 text-white shadow-2xl overflow-hidden">
        {/* Background ambient glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/20 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/10 blur-3xl pointer-events-none rounded-full" />

        {/* TOP CONSOLE CONTROL BAR */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LIVE AGENT ACTIVE
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 font-mono">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              {formatTime(callDuration)}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Play/Pause Simulation button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${isPlaying
                ? "bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"
                : "bg-blue-600 text-white border-blue-500 hover:bg-blue-500 shadow-lg shadow-blue-600/30"
                }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-white" />}
              {isPlaying ? "Pause Call" : "Resume Call"}
            </button>

            {/* Listen / Speak Voice button */}
            <button
              onClick={handlePlayVoice}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-lg ${speakerActive
                ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border border-blue-400/30"
                }`}
            >
              {speakerActive ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-950 animate-bounce" /> Stop Audio
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-300" /> Listen Voice AI
                </>
              )}
            </button>
          </div>
        </div>

        {/* CENTER VISUALIZER & DYNAMIC CONVERSATION */}
        <div className="relative z-10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* CENTER VOICE ORB & ANIMATED EQUALIZER (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="relative mb-6 flex items-center justify-center">
              <div className={`absolute w-36 h-36 rounded-full bg-gradient-to-r ${activeDemo.color} opacity-30 ${isPlaying || speakerActive ? "animate-ping" : ""}`} />
              <div className="absolute w-44 h-44 rounded-full border border-blue-500/20 animate-spin-slow" />

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause voice simulation" : "Play voice simulation"}
                className={`relative z-10 w-28 h-28 rounded-full bg-gradient-to-br ${activeDemo.color} shadow-2xl flex items-center justify-center transition-transform hover:scale-105 cursor-pointer border-2 border-white/20`}
              >
                <IconComp className="w-10 h-10 text-white animate-pulse" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 h-8 px-4 py-1.5 bg-slate-900/80 rounded-full border border-slate-800">
              {Array.from({ length: 16 }).map((_, i) => {
                const barHeight = isPlaying || speakerActive ? Math.sin((i + callDuration) * 0.8) * 12 + 16 : 6;
                return (
                  <div
                    key={i}
                    className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full transition-all duration-200"
                    style={{ height: `${Math.max(4, Math.min(24, barHeight))}px` }}
                  />
                );
              })}
            </div>
            <span className="text-[11px] text-slate-400 mt-2 font-medium">
              Neural Audio Stream • 24kHz HD
            </span>
          </div>

          {/* CHAT BUBBLE CONSOLE TRANSCRIPT (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* CUSTOMER SPEECH BUBBLE */}
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-300">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-none p-4 text-slate-200 max-w-xl text-sm shadow-md">
                    <div className="flex items-center justify-between gap-4 text-[10px] text-slate-500 font-semibold mb-1 uppercase tracking-wider">
                      <span>Customer</span>
                      <span>00:02</span>
                    </div>
                    <p className="leading-relaxed">"{activeDemo.customerQuery}"</p>
                  </div>
                </div>

                {/* VOICE AI AGENT SPEECH BUBBLE */}
                <div className="flex gap-3 items-start flex-row-reverse">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${activeDemo.color} flex items-center justify-center shrink-0 text-white shadow-lg`}>
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-gradient-to-br from-blue-950/80 to-slate-900 border border-blue-500/30 rounded-2xl rounded-tr-none p-4 text-white max-w-xl text-sm shadow-xl relative">
                    <div className="flex items-center justify-between gap-4 text-[10px] text-cyan-400 font-semibold mb-1 uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-300" /> Nexcore Voice Agent
                      </span>
                      <span>Real-time Response</span>
                    </div>
                    <p className="leading-relaxed text-slate-100">"{activeDemo.aiResponse}"</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM METRICS BAR */}
        <div className="relative z-10 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 flex items-center justify-center gap-3">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Turnaround Latency</div>
              <div className="text-sm font-bold text-white font-mono">{activeDemo.metrics.latency}</div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 flex items-center justify-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">ASR Accuracy</div>
              <div className="text-sm font-bold text-white font-mono">{activeDemo.metrics.accuracy}</div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 flex items-center justify-center gap-3">
            <Activity className="w-4 h-4 text-purple-400 shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Automated Action</div>
              <div className="text-sm font-bold text-white font-mono truncate max-w-[160px]">{activeDemo.metrics.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Industry({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="bg-white border rounded-xl p-8 shadow-sm">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

function InteractiveVoiceFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const stepRefs = useRef([]);

  // Scroll animation: Update activeStep based on scroll position (both down and up)
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const targetPoint = viewportHeight * 0.45;

      let currentActive = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - targetPoint);

        if (rect.top < viewportHeight && rect.bottom > 0) {
          if (distance < minDistance) {
            minDistance = distance;
            currentActive = index;
          }
        }
      });

      setActiveStep(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSimulateApi = () => {
    setIsApiLoading(true);
    setTimeout(() => {
      setIsApiLoading(false);
    }, 600);
  };

  const handlePlayVoice = () => {
    setIsPlayingAudio(true);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 3000);
  };

  const PROMPTS = [
    { text: "Mera refund kab tak credit hoga?", lang: "Hindi / Hinglish", intent: "REFUND_STATUS" },
    { text: "I want to reschedule my doctor appointment to 4 PM tomorrow", lang: "English", intent: "APPOINTMENT_RESCHEDULE" },
    { text: "Can you check my loan eligibility for 5 Lakh rupees?", lang: "English", intent: "LOAN_ELIGIBILITY" },
  ];

  const FLOW_STEPS = [
    {
      id: "01",
      title: "Customer Speaks",
      subtitle: "Ultra-low Latency Speech Stream",
      icon: <Mic className="w-6 h-6 text-cyan-400" />,
      badgeColor: "bg-cyan-500",
      description:
        "Voice Agent listens in real time with Neural Voice Activity Detection (VAD), filtering ambient noise and handling instant interruptions naturally.",
      metrics: [
        { label: "VAD Latency", value: "< 15ms" },
        { label: "Sample Rate", value: "16 kHz HD" },
        { label: "Languages", value: "10+ Dialects" },
      ],
    },
    {
      id: "02",
      title: "Speech & Intent AI",
      subtitle: "ASR + LLM Context Engine",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      badgeColor: "bg-blue-600",
      description:
        "High-accuracy Neural Speech-to-Text converts audio to text, while LLMs analyze customer intent, sentiment, and parameters in under 120ms.",
      metrics: [
        { label: "ASR Accuracy", value: "99.2%" },
        { label: "LLM Processing", value: "< 120ms" },
        { label: "Intent Score", value: "99.8%" },
      ],
    },
    {
      id: "03",
      title: "Business Logic",
      subtitle: "API, CRM & Database Lookup",
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      badgeColor: "bg-indigo-600",
      description:
        "Triggers live backend APIs (Salesforce, Shopify, Custom REST APIs, SQL) to retrieve real-time account data and execute business workflows.",
      metrics: [
        { label: "API Latency", value: "< 40ms" },
        { label: "Status", value: "200 OK" },
        { label: "Encryption", value: "TLS 1.3" },
      ],
    },
    {
      id: "04",
      title: "Smart Response & Handoff",
      subtitle: "TTS Synthesis & Human Routing",
      icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
      badgeColor: "bg-emerald-500",
      description:
        "Generates ultra-realistic human-like voice responses with <300ms total end-to-end latency, or seamlessly transfers complex calls to a live agent.",
      metrics: [
        { label: "TTS Latency", value: "< 180ms" },
        { label: "Voice Variety", value: "Natural Accents" },
        { label: "Auto-Resolution", value: "94%" },
      ],
    },
  ];

  return (
    <div className="relative mt-8">
      {/* Main Flow Timeline - Staggered Left-Right Alternating Layout */}
      <div className="relative">
        {/* Central Vertical Neon Line Track (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[3px] bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600 shadow-[0_0_15px_rgba(59,130,246,0.7)]" />

        {/* Animated Traveling Pulse Beam down central track following scroll */}
        <motion.div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-10 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-full shadow-[0_0_20px_#06b6d4] z-20 pointer-events-none"
          animate={{
            top: activeStep === 0 ? "8%" : activeStep === 1 ? "33%" : activeStep === 2 ? "58%" : "84%",
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />

        <div className="space-y-12 md:space-y-20 relative">
          {FLOW_STEPS.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const isActive = activeStep === idx;

            return (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[idx] = el)}
                className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 transition-all duration-500"
              >
                {/* Desktop Horizontal Neon Connector Bar */}
                <div
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[3px] transition-all duration-300 z-10 ${isLeft
                    ? "left-[45%] right-1/2 bg-gradient-to-r from-blue-500 to-cyan-400"
                    : "left-1/2 right-[45%] bg-gradient-to-r from-cyan-400 to-blue-500"
                    } ${isActive
                      ? "shadow-[0_0_16px_rgba(6,182,212,0.9)] opacity-100 h-[4px]"
                      : "shadow-[0_0_8px_rgba(59,130,246,0.4)] opacity-50"
                    }`}
                />

                {/* Central Step Node (Badge on the central line) */}
                <div
                  onClick={() => setActiveStep(idx)}
                  className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center cursor-pointer transition-all duration-300 ${isActive
                    ? "bg-gradient-to-br from-cyan-400 to-blue-600 text-white scale-125 shadow-[0_0_25px_rgba(6,182,212,0.8)] ring-4 ring-cyan-400/40"
                    : "bg-[#09153a] border-2 border-blue-400/40 text-blue-300 hover:scale-110 hover:border-cyan-400"
                    }`}
                >
                  <span className="text-xs font-bold">{step.id}</span>
                </div>

                {/* LEFT COLUMN CONTENT */}
                <div className={`w-full md:w-[45%] ${isLeft ? "" : "order-2 md:order-1"}`}>
                  {isLeft ? (
                    <StepCard
                      step={step}
                      isActive={isActive}
                      onClick={() => setActiveStep(idx)}
                    />
                  ) : (
                    <InteractivePreviewPanel
                      stepIdx={idx}
                      isActive={isActive}
                      prompts={PROMPTS}
                      selectedPromptIndex={selectedPromptIndex}
                      setSelectedPromptIndex={setSelectedPromptIndex}
                      isApiLoading={isApiLoading}
                      onSimulateApi={handleSimulateApi}
                      isPlayingAudio={isPlayingAudio}
                      onPlayVoice={handlePlayVoice}
                    />
                  )}
                </div>

                {/* RIGHT COLUMN CONTENT */}
                <div className={`w-full md:w-[45%] ${isLeft ? "order-2" : "order-1 md:order-2"}`}>
                  {!isLeft ? (
                    <StepCard
                      step={step}
                      isActive={isActive}
                      onClick={() => setActiveStep(idx)}
                    />
                  ) : (
                    <InteractivePreviewPanel
                      stepIdx={idx}
                      isActive={isActive}
                      prompts={PROMPTS}
                      selectedPromptIndex={selectedPromptIndex}
                      setSelectedPromptIndex={setSelectedPromptIndex}
                      isApiLoading={isApiLoading}
                      onSimulateApi={handleSimulateApi}
                      isPlayingAudio={isPlayingAudio}
                      onPlayVoice={handlePlayVoice}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, isActive, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 backdrop-blur-xl ${isActive
        ? "bg-gradient-to-br from-[#0d1e4a] via-[#091538] to-[#0b1b42] border-2 border-cyan-400 shadow-[0_0_35px_rgba(59,130,246,0.35)] scale-[1.02]"
        : "bg-[#091432]/80 border border-white/10 hover:border-blue-400/50 hover:bg-[#0d1f4d]/60 shadow-lg"
        }`}
    >
      {/* Top Step Pill Badge */}
      <div
        className={`absolute -top-3.5 left-6 px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1.5 ${isActive ? "bg-gradient-to-r from-cyan-500 to-blue-600 ring-2 ring-cyan-400/50" : step.badgeColor
          }`}
      >
        <span>STEP {step.id}</span>
        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
      </div>

      {/* Header section with Icon & Title */}
      <div className="flex items-start gap-4 mb-4 pt-1">
        <div
          className={`p-3 rounded-xl border transition-all ${isActive
            ? "bg-cyan-500/20 border-cyan-400/50 shadow-md shadow-cyan-500/20"
            : "bg-blue-950/60 border-blue-500/20"
            }`}
        >
          {step.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
          <p className="text-xs text-cyan-300/80 font-medium">{step.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-blue-100/80 leading-relaxed mb-6">{step.description}</p>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 bg-black/20 p-3 rounded-xl border border-white/5">
        {step.metrics.map((m, i) => (
          <div key={i} className="text-center">
            <div className="text-[10px] text-blue-300/60 uppercase font-medium tracking-wider">{m.label}</div>
            <div className="text-xs font-bold text-white mt-0.5">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Active Indicator Ticker */}
      <div className="mt-4 flex items-center justify-between text-xs pt-2 border-t border-white/5">
        <span className="text-blue-300/70 flex items-center gap-1.5">
          <Activity className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400 animate-pulse" : "text-gray-500"}`} />
          {isActive ? "Step Active in Live Flow" : "Click to view step live demo"}
        </span>
        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "rotate-90 text-cyan-400" : "text-blue-400/50"}`} />
      </div>
    </motion.div>
  );
}

function InteractivePreviewPanel({
  stepIdx,
  isActive,
  prompts,
  selectedPromptIndex,
  setSelectedPromptIndex,
  isApiLoading,
  onSimulateApi,
  isPlayingAudio,
  onPlayVoice,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl p-6 border backdrop-blur-xl transition-all duration-300 ${isActive
        ? "bg-[#061029]/90 border-cyan-500/40 shadow-2xl shadow-cyan-500/10"
        : "bg-[#061029]/50 border-white/10 opacity-80"
        }`}
    >
      {stepIdx === 0 && (
        /* Step 01: Customer Speaks - Live Audio Equalizer & Voice Selector */
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5" /> Live Audio Capture
            </span>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">
              VAD Active
            </span>
          </div>

          {/* Equalizer animation */}
          <div className="flex items-end justify-center gap-1.5 h-16 bg-black/40 rounded-xl p-3 mb-4 border border-cyan-500/20">
            {[40, 75, 30, 90, 60, 100, 45, 80, 50, 70, 95, 35, 65, 85, 40].map((h, i) => (
              <motion.div
                key={i}
                animate={isActive ? { height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] } : { height: "20%" }}
                transition={{ repeat: Infinity, duration: 0.6 + (i % 5) * 0.1, ease: "easeInOut" }}
                className="w-1.5 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-full"
              />
            ))}
          </div>

          <p className="text-xs text-blue-200/70 mb-2 font-medium">Select a test customer speech phrase:</p>
          <div className="space-y-2">
            {prompts.map((p, i) => (
              <button
                key={i}
                onClick={() => setSelectedPromptIndex(i)}
                className={`w-full text-left p-2.5 rounded-lg text-xs transition-all border ${selectedPromptIndex === i
                  ? "bg-blue-600/30 border-cyan-400 text-white font-medium shadow-sm"
                  : "bg-white/5 border-white/5 text-blue-200/60 hover:text-white hover:bg-white/10"
                  }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-cyan-300/80 font-mono">{p.lang}</span>
                  {selectedPromptIndex === i && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                </div>
                <div>{p.text}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {stepIdx === 1 && (
        /* Step 02: Speech & Intent AI - ASR & Intent Extraction */
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> Neural NLU & Intent Engine
            </span>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">
              <Zap className="w-3 h-3 inline mr-0.5" /> 115ms Latency
            </span>
          </div>

          {/* Transcript Box */}
          <div className="bg-black/40 rounded-xl p-3.5 mb-4 border border-blue-500/20">
            <div className="text-[10px] text-blue-300/60 font-mono mb-1">ASR Speech-to-Text Transcript:</div>
            <div className="text-xs font-mono text-cyan-200 bg-blue-950/40 p-2 rounded border border-blue-400/20">
              "{prompts[selectedPromptIndex].text}"
            </div>
          </div>

          {/* Intent & Confidence Bar */}
          <div className="space-y-3 bg-white/5 p-3 rounded-xl border border-white/5">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-blue-200/70">Classified Intent</span>
                <span className="font-mono text-cyan-300 font-bold">{prompts[selectedPromptIndex].intent}</span>
              </div>
              <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "99.4%" }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-black/30 p-2 rounded">
                <span className="text-[10px] text-blue-300/50 block">Sentiment</span>
                <span className="text-emerald-400 font-semibold">Positive / Inquiring</span>
              </div>
              <div className="bg-black/30 p-2 rounded">
                <span className="text-[10px] text-blue-300/50 block">Confidence</span>
                <span className="text-cyan-300 font-semibold">99.4% Match</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {stepIdx === 2 && (
        /* Step 03: Business Logic - API & Database Lookup */
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" /> Live API & DB Execution
            </span>
            <button
              onClick={onSimulateApi}
              disabled={isApiLoading}
              className="text-[10px] bg-indigo-500/20 hover:bg-indigo-500/40 text-indigo-300 px-2.5 py-1 rounded-lg border border-indigo-500/40 transition-all flex items-center gap-1"
            >
              <RefreshCw className={`w-3 h-3 ${isApiLoading ? "animate-spin" : ""}`} />
              Re-test API Call
            </button>
          </div>

          {/* Terminal JSON Box */}
          <div className="bg-[#030914] rounded-xl p-3.5 border border-indigo-500/30 font-mono text-xs">
            <div className="flex justify-between items-center text-[10px] text-blue-300/50 pb-2 mb-2 border-b border-white/10">
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-indigo-400" /> POST /api/v1/webhook
              </span>
              <span className="text-emerald-400 font-bold">200 OK</span>
            </div>

            {isApiLoading ? (
              <div className="py-6 text-center text-indigo-300/70 flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" /> Executing database lookup...
              </div>
            ) : (
              <pre className="text-cyan-300/90 text-[11px] overflow-x-auto leading-relaxed">
                {`{
  "intent": "${prompts[selectedPromptIndex].intent}",
  "customer_id": "CUST-98421",
  "status": "VERIFIED",
  "data": {
    "amount": "₹1,499",
    "delivery_status": "Out for delivery",
    "eta": "4:30 PM"
  }
}`}
              </pre>
            )}
          </div>
        </div>
      )}

      {stepIdx === 3 && (
        /* Step 04: Smart Response & Handoff - Voice Output Synthesis */
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5" /> Voice Synthesis & Routing
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
              HD Neural Voice
            </span>
          </div>

          {/* AI Response Voice Player */}
          <div className="bg-black/40 rounded-xl p-4 mb-4 border border-emerald-500/30">
            <div className="text-[10px] text-blue-300/60 uppercase font-medium mb-1.5">Synthesized Voice Response:</div>
            <p className="text-xs text-emerald-200 font-medium italic mb-3">
              "Aapka query verify ho gaya hai. Aapka status out for delivery hai and aaj 4:30 PM tak deliver ho jayega!"
            </p>

            <button
              onClick={onPlayVoice}
              aria-label={isPlayingAudio ? "Stop synthesized voice audio sample" : "Play synthesized voice response audio sample"}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md ${isPlayingAudio
                ? "bg-emerald-500 text-black shadow-emerald-500/40"
                : "bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40"
                }`}
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-4 h-4 animate-bounce" /> Stop Audio Sample
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" /> Listen to Audio Sample
                </>
              )}
            </button>
          </div>

          {/* Routing status */}
          <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5 text-xs">
            <div className="flex items-center gap-2 text-blue-200/80">
              <Bot className="w-4 h-4 text-cyan-400" /> Resolution Mode
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
              100% Automated AI Resolution
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function ContactCard({ icon, title, text }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="bg-white border rounded-xl p-8 shadow-sm">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{text}</p>
    </motion.div>
  );
}

function FreeFlowCard({ img, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      className="relative bg-white border border-gray-200 hover:border-blue-600 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative h-60 bg-gradient-to-b from-blue-50 via-indigo-50/50 to-white">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-contain pt-8" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>
      <div className="p-8 text-left text-gray-900">
        <h3 className="font-bold text-xl mb-3 text-gray-900 tracking-tight">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {desc || "Enterprise-grade conversational automation with smooth human handoff."}
        </p>
      </div>
    </motion.div>
  );
}

const ENRICHED_FEATURES = [
  {
    id: "bulk-calling",
    category: "telephony",
    categoryLabel: "Telephony & Scale",
    title: "Bulk Calling at Scale",
    subtitle: "Run 10,000+ simultaneous voice channels with zero queue delay",
    desc: "Execute high-volume outbound campaigns and manage peak inbound traffic spikes effortlessly with auto-scaling SIP trunks.",
    icon: PhoneCall,
    color: "from-blue-500 to-cyan-400",
    badge: "10k+ Channels",
    metric: "99.99% Call Delivery Rate",
    techSpecs: ["SIP Trunking", "Auto-Dialer Engine", "Carrier Grade Failover"]
  },
  {
    id: "api-triggers",
    category: "api",
    categoryLabel: "Developer APIs",
    title: "Custom Mid-Call API Triggers",
    subtitle: "Execute real-time REST & GraphQL calls mid-conversation",
    desc: "Trigger backend webhooks while the call is live to query CRM databases, update order status, or trigger payment links instantly.",
    icon: Plug,
    color: "from-teal-400 to-emerald-500",
    badge: "< 40ms Execution",
    metric: "100% Real-Time Sync",
    techSpecs: ["REST & GraphQL", "Webhook Callbacks", "OAuth 2.0 Auth"]
  },
  {
    id: "human-handoff",
    category: "ai",
    categoryLabel: "AI & Speech",
    title: "Warm Human-in-the-Loop Handoff",
    subtitle: "Seamless transfer to live human reps with full call context",
    desc: "When a customer requests a human or complex edge cases arise, the AI transfers the call instantly with complete transcript history.",
    icon: UserCheck,
    color: "from-indigo-500 to-purple-500",
    badge: "< 1s Transfer",
    metric: "Zero Context Loss",
    techSpecs: ["SIP Refer Handoff", "Live Transcript Transfer", "Softphone Integration"]
  },
  {
    id: "workflow-int",
    category: "api",
    categoryLabel: "Developer APIs",
    title: "No-Code & Custom Workflow Sync",
    subtitle: "Connect n8n, Make.com, Zapier, Salesforce & Hubspot",
    desc: "Seamlessly integrate with your existing tech stack. Trigger multi-step workflows, send follow-up WhatsApp messages, and log call analytics.",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    badge: "500+ Integrations",
    metric: "1-Click Integration",
    techSpecs: ["Native n8n Nodes", "Zapier App", "Custom Webhooks"]
  },
  {
    id: "multilingual",
    category: "ai",
    categoryLabel: "AI & Speech",
    title: "Multilingual Dialect Mastery",
    subtitle: "Fluent in 10+ Indian regional dialects & 30+ global languages",
    desc: "Handles natural code-switching (Hinglish, Tanglish) and adapts accent dynamically based on user caller location.",
    icon: Globe2,
    color: "from-cyan-400 to-blue-600",
    badge: "40+ Dialects",
    metric: "Native Accent Accuracy",
    techSpecs: ["Neural Code-Switching", "Accent Conditioning", "Localized Phonemes"]
  },
  {
    id: "natural-conv",
    category: "ai",
    categoryLabel: "AI & Speech",
    title: "Natural Turn-Taking & Interruptions",
    subtitle: "Human-like <280ms latency with Neural VAD interruption handling",
    desc: "No mechanical pauses. If a user interrupts mid-sentence, the AI instantly stops speaking and listens, just like a human operator.",
    icon: Mic,
    color: "from-emerald-400 to-teal-600",
    badge: "< 280ms Latency",
    metric: "Neural VAD Engine",
    techSpecs: ["Neural VAD v3", "Stream Interruption", "Echo Cancellation"]
  },
  {
    id: "model-ecosystem",
    category: "ai",
    categoryLabel: "AI & Speech",
    title: "20+ Model Provider Ecosystem",
    subtitle: "Combine best-of-breed ASR, LLM, and TTS engines",
    desc: "Mix and match Deepgram ASR, OpenAI GPT-4o, Claude 3.5, Groq, and ElevenLabs TTS to achieve optimal speed and voice quality.",
    icon: Cpu,
    color: "from-blue-600 to-indigo-600",
    badge: "20+ AI Models",
    metric: "Multi-Model Router",
    techSpecs: ["Dynamic Model Router", "Fallback Cascade", "Model Fine-tuning"]
  },
  {
    id: "enterprise-infra",
    category: "telephony",
    categoryLabel: "Telephony & Scale",
    title: "Enterprise SIP & Telephony Infrastructure",
    subtitle: "Carrier-grade reliability with global WebRTC & SIP gateways",
    desc: "Connect your existing PBX or PSTN provider (Twilio, Plivo, Exotel, Tata Tele) with dedicated low-latency trunking.",
    icon: Database,
    color: "from-slate-400 to-blue-500",
    badge: "99.99% Uptime",
    metric: "Global SIP Gateway",
    techSpecs: ["WebRTC Gateway", "SIP Trunking", "Geo-Redundancy"]
  },
  {
    id: "data-privacy",
    category: "telephony",
    categoryLabel: "Telephony & Scale",
    title: "100% Enterprise Privacy & On-Prem Deployment",
    subtitle: "Data residency in India/USA with end-to-end security compliance",
    desc: "Keep all customer audio and transcript data compliant with SOC2 Type II, ISO 27001, and HIPAA regulations with optional on-prem VPC hosting.",
    icon: HeartPulse,
    color: "from-rose-500 to-pink-600",
    badge: "SOC2 & HIPAA",
    metric: "Zero Retention Option",
    techSpecs: ["Zero Log Retention", "End-to-End Encryption", "VPC Deployment"]
  },
  {
    id: "model-switching",
    category: "api",
    categoryLabel: "Developer APIs",
    title: "Dynamic Cost & Latency Router",
    subtitle: "Smart routing to balance cost, intelligence, and speed",
    desc: "Route simple queries to lightning-fast 50ms models and complex reasoning to frontier LLMs mid-call, saving up to 60% on API costs.",
    icon: Sparkles,
    color: "from-amber-400 to-orange-500",
    badge: "60% Cost Saved",
    metric: "Smart Query Classifier",
    techSpecs: ["Smart Intent Router", "Cost Optimization Engine", "Real-time Fallbacks"]
  }
];

function InteractiveDarkFeaturesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Capabilities" },
    { id: "telephony", label: "Telephony & Scale" },
    { id: "api", label: "Developer & APIs" },
    { id: "ai", label: "AI & Speech Engine" },
  ];

  const filteredFeatures = ENRICHED_FEATURES.filter(
    (f) => activeTab === "all" || f.category === activeTab
  );

  return (
    <section className="relative bg-[#020617] py-32 text-white overflow-hidden border-t border-slate-900">
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER WITH SCROLL REVEAL ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 mb-6 shadow-lg shadow-cyan-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            ENTERPRISE VOICE AGENT ARCHITECTURE
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
            Features Engineered for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Real-World Scale
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            From sub-300ms neural speech synthesis to multi-tenant SIP trunking and HIPAA-compliant data residency — built for production voice deployments.
          </p>

          {/* CATEGORY TABS */}
          <div className="flex flex-wrap justify-center gap-2 mt-10 p-1.5 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${activeTab === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 font-bold scale-[1.02]"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* INTERACTIVE BENTO GRID WITH STAGGERED SCROLL ANIMATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={feat.id}
                  layout
                  initial={{ opacity: 0, y: 45, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative rounded-3xl p-7 transition-all duration-300 overflow-hidden backdrop-blur-xl border bg-slate-900/50 hover:bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-xl"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity pointer-events-none`} />

                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-cyan-300">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs font-semibold text-cyan-400/90 mb-3">
                    {feat.subtitle}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {feat.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-300 font-mono">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{feat.metric}</span>
                    </div>

                    <span className="text-[11px] font-bold flex items-center gap-1 text-slate-500 group-hover:text-cyan-400 transition-colors">
                      Enterprise Grade
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function InteractiveTalkToUsSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("Request Live Demo");

  const handleCopy = (text, fieldName) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getEncodedWhatsApp = () => {
    const text = `Hi Nexcore Team, I am interested in ${selectedTopic}.`;
    return `https://wa.me/919594402822?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* Background Soft Glow Orbs for Glass Refraction */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

              {/* SECTION HEADER */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-md text-blue-700 border border-blue-200/80 mb-4 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                  CONNECT WITH OUR AI EXPERTS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Ready to Automate Your Voice Operations?
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  Whether you need an instant walkthrough, enterprise pricing, or custom integration details — our engineering team is online to help.
                </p>
              </motion.div>

              {/* 2. INTERACTIVE CONTACT ACTION CARDS (LIGHT BLUISH GLASS & NEUMORPHISM) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* CALL CARD */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden group bg-gradient-to-b from-[#f4f8fc]/90 via-[#e8f0f9]/80 to-[#edf3fa]/90 backdrop-blur-2xl backdrop-saturate-180 border border-white/90 hover:border-blue-300/80 rounded-[2rem] p-8 shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_12px_36px_rgba(30,58,138,0.06)] hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_20px_45px_rgba(37,99,235,0.12)] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Glossy Sheen Overlay */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none rounded-t-[2rem]" />
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-400/20 transition-all" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white text-blue-600 flex items-center justify-center font-bold text-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
                        <PhoneCall className="w-6 h-6" />
                      </div>
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-white/80 border border-white/90 backdrop-blur-md px-3.5 py-1 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        24/7 AI Voice Line
                      </span>
                    </div>

                    <h4 className="font-bold text-xl text-gray-900 mb-2">Direct Phone Support</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">Speak with an AI specialist or request an immediate callback.</p>

                    <div className="text-base font-bold font-mono text-gray-900 bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/90 mb-6 text-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)]">
                      +91 9594430295
                    </div>
                  </div>

                  <div className="relative z-10 flex gap-2.5">
                    <a
                      href="tel:+919594430295"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-3 rounded-xl font-semibold text-xs text-center transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call Now
                    </a>
                    <button
                      onClick={() => handleCopy("+919594430295", "phone")}
                      className="px-4 py-3 bg-white/80 hover:bg-white text-gray-700 rounded-xl font-semibold text-xs transition-all flex items-center gap-1.5 border border-white/90 backdrop-blur-md shadow-sm"
                    >
                      {copiedField === "phone" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedField === "phone" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </motion.div>

                {/* EMAIL CARD */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden group bg-gradient-to-b from-[#f4f8fc]/90 via-[#e8f0f9]/80 to-[#edf3fa]/90 backdrop-blur-2xl backdrop-saturate-180 border border-white/90 hover:border-indigo-300/80 rounded-[2rem] p-8 shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_12px_36px_rgba(30,58,138,0.06)] hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_20px_45px_rgba(79,70,229,0.12)] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Glossy Sheen Overlay */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none rounded-t-[2rem]" />
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-400/20 transition-all" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white text-indigo-600 flex items-center justify-center font-bold text-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
                        <Mail className="w-6 h-6" />
                      </div>
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 bg-white/80 border border-white/90 backdrop-blur-md px-3.5 py-1 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
                        Quick Response
                      </span>
                    </div>

                    <h4 className="font-bold text-xl text-gray-900 mb-2">Executive Email</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">Send detailed inquiries, RFP documents, or custom architecture specs.</p>

                    <div className="text-xs font-bold font-mono text-gray-900 bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/90 mb-6 text-center truncate shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)]">
                      director@nexcorealliance.com
                    </div>
                  </div>

                  <div className="relative z-10 flex gap-2.5">
                    <a
                      href={`mailto:director@nexcorealliance.com?subject=${encodeURIComponent(selectedTopic)}&body=${encodeURIComponent("Hi Nexcore Team, I would like to request info regarding " + selectedTopic + ".")}`}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white py-3 rounded-xl font-semibold text-xs text-center transition-all flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/20"
                    >
                      <Send className="w-3.5 h-3.5" /> Send Email
                    </a>
                    <button
                      onClick={() => handleCopy("director@nexcorealliance.com", "email")}
                      className="px-4 py-3 bg-white/80 hover:bg-white text-gray-700 rounded-xl font-semibold text-xs transition-all flex items-center gap-1.5 border border-white/90 backdrop-blur-md shadow-sm"
                    >
                      {copiedField === "email" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedField === "email" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </motion.div>

                {/* WHATSAPP CARD */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden group bg-gradient-to-b from-[#f4f8fc]/90 via-[#e8f0f9]/80 to-[#edf3fa]/90 backdrop-blur-2xl backdrop-saturate-180 border border-white/90 hover:border-emerald-300/80 rounded-[2rem] p-8 shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_12px_36px_rgba(30,58,138,0.06)] hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_20px_45px_rgba(16,185,129,0.12)] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Glossy Sheen Overlay */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none rounded-t-[2rem]" />
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-400/20 transition-all" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white text-emerald-600 flex items-center justify-center font-bold text-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
                        <CalendarCheck className="w-6 h-6" />
                      </div>
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-white/80 border border-white/90 backdrop-blur-md px-3.5 py-1 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        Online Now
                      </span>
                    </div>

                    <h4 className="font-bold text-xl text-gray-900 mb-2">Schedule 1-on-1 Walkthrough</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">Book a 30-min live demo with our solutions engineer on WhatsApp.</p>

                    <div className="text-xs font-bold text-emerald-800 bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/90 mb-6 text-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)]">
                      Instant Demo Link & WhatsApp Support
                    </div>
                  </div>

                  <div className="relative z-10">
                    <a
                      href={getEncodedWhatsApp()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white py-3 rounded-xl font-semibold text-xs text-center transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp →
                    </a>
                  </div>
                </motion.div>

              </div>

            </div>
          </section>
          );
}

          const categories = [
          {
            name: "AI Agents",
          items: [
          {
            title: "Customer Support Agent",
          tags: ["Customer Support", "English"],
          desc: "Provides 24/7 inbound call answering for FAQs and customer triage",
          phone: "+918035317400",
      },
          {
            title: "Recruitment Agent",
          tags: ["Recruitment", "English"],
          desc: "AI agents that screen, interview, and onboard candidates at scale",
          phone: "+918035317441",
      },
          ],
  },
          {
            name: "Ecommerce",
          items: [
          {
            title: "Cart Abandonment Agent",
          tags: ["Cart Abandonment", "English + Hindi"],
          desc: "Calls customers with abandoned items in carts, recovering sales",
          phone: "+918035317449",
      },
          {
            title: "COD Confirmation Agent",
          tags: ["COD Confirmation", "English + Hindi"],
          desc: "Handles last-mile logistics calls and order verification",
          phone: "+918035317450",
      },
          {
            title: "Return Management Agent",
          tags: ["Returns", "English + Hindi"],
          desc: "Automates return scheduling and pickup confirmations",
          phone: "+918035317451",
      },
          ],
  },
          {
            name: "EdTech",
          items: [
          {
            title: "Lead Qualification Agent",
          tags: ["Admissions", "English + Hindi"],
          desc: "Calls students and qualifies admission leads automatically",
          phone: "+918035317460",
      },
          {
            title: "Fee Reminder Agent",
          tags: ["Payments", "Multilingual"],
          desc: "Automated fee follow-ups and payment nudges",
          phone: "+918035317461",
      },
          ],
  },
          {
            name: "Health Tech",
          items: [
          {
            title: "Appointment Booking Agent",
          tags: ["OPD", "Multilingual"],
          desc: "Schedules doctor appointments automatically",
          phone: "+918035317470",
      },
          {
            title: "Lab Report Follow-up Agent",
          tags: ["Diagnostics", "English + Hindi"],
          desc: "Notifies patients and answers report queries",
          phone: "+918035317471",
      },
          ],
  },
          {
            name: "BFSI",
          items: [
          {
            title: "Loan Eligibility Agent",
          tags: ["Loans", "Multilingual"],
          desc: "Collects basic info and checks loan eligibility",
          phone: "+918035317480",
      },
          {
            title: "EMI Reminder Agent",
          tags: ["Payments", "English + Hindi"],
          desc: "Automated EMI reminder calls and confirmations",
          phone: "+918035317481",
      },
          ],
  },
          {
            name: "Hospitality",
          items: [
          {
            title: "Reservation Agent",
          tags: ["Bookings", "Multilingual"],
          desc: "Handles hotel and restaurant reservations",
          phone: "+918035317490",
      },
          {
            title: "Feedback Collection Agent",
          tags: ["Reviews", "English + Hindi"],
          desc: "Collects post-visit feedback from customers",
          phone: "+918035317491",
      },
          ],
  },
          ];