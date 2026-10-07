"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DECORATIVE_PARTICLES = Array.from({ length: 15 }, (_, i) => ({
  left: `${((i * 37 + 13) % 95) + 2}%`,
  top: `${((i * 53 + 7) % 95) + 2}%`,
  animation: `float ${4 + ((i * 17) % 6)}s linear infinite`,
  animationDelay: `${((i * 13) % 50) / 10}s`,
}));

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  // Mount animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Slide animation
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(slideTimer);
  }, []);

  // Quick navigation options
  const quickLinks = [
    { name: "Home", path: "/", icon: "🏠", color: "#106EB5" },
    { name: "About", path: "/about", icon: "ℹ️", color: "#28A745" },
    { name: "Services", path: "/services", icon: "⚙️", color: "#FFC107" },
    { name: "Contact", path: "/contact", icon: "📞", color: "#DC3545" }
  ];

  const handleQuickNavigation = (path) => {
    router.push(path);
  };

  const SearchIcon = () => (
    <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  const HomeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );

  const BackIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  );

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#106EB5] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C4B</span>
            </div>
            <span className="font-bold text-gray-800 text-lg hidden sm:block">NEXCORE ALLIANCE LLP</span>
          </div>

          <button
            onClick={() => router.push("/")}
            className="text-sm text-gray-600 hover:text-[#106EB5] transition-colors duration-200 flex items-center space-x-1"
          >
            <HomeIcon />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Main 404 Section */}
      <section className="w-full h-screen flex items-center justify-center relative pt-16 bg-gray-50">
        <div
          className={`w-[90%] max-w-6xl h-[80%] bg-[#106EB5] rounded-3xl flex overflow-hidden text-white flex-col md:flex-row transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          {/* Left Section - 404 Content */}
          <div
            className={`left w-full md:w-[60%] h-[60%] md:h-full px-5 md:px-10 flex flex-col items-center justify-center gap-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* 404 Display */}
            <div className="w-full text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <h1 className="text-[15vw] md:text-[8vw] lg:text-[6vw] font-bold font-sans leading-none">
                  4
                  <span className="relative inline-block mx-2 md:mx-4">
                    <span className="text-[15vw] md:text-[8vw] lg:text-[6vw]">0</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                        <SearchIcon />
                      </div>
                    </div>
                  </span>
                  4
                </h1>
              </div>

              <h2 className="text-[6vw] md:text-[2.5vw] lg:text-[2vw] font-bold mb-4">
                Page Not Found – We're Here to Help!
              </h2>
            </div>

            {/* Description */}
            <div
              className={`w-full text-center md:text-left transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <p className="text-[3.5vw] md:text-[1.2vw] lg:text-base font-medium leading-relaxed">
                Looks like this page took a wrong turn in the digital world! <br className="hidden md:block" />
                Don't worry, our team at NEXCORE ALLIANCE LLP is here to guide you back. <br className="hidden md:block" />
                Let's get you where you need to be.
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className={`w-full flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center md:justify-start transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <button
                onClick={() => router.push("/")}
                className="px-6 py-3 text-[4vw] md:text-[1vw] lg:text-base font-medium bg-white text-[#106EB5] rounded-md hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 min-w-[120px] justify-center"
              >
                <HomeIcon />
                <span>Go Home</span>
              </button>

              <button
                onClick={() => router.back()}
                className="px-6 py-3 text-[4vw] md:text-[1vw] lg:text-base font-medium bg-white/20 backdrop-blur-sm text-white rounded-md hover:bg-white/30 transition-colors duration-200 flex items-center space-x-2 min-w-[120px] justify-center"
              >
                <BackIcon />
                <span>Go Back</span>
              </button>
            </div>
          </div>

          {/* Right Section - Interactive Content */}
          <div
            className={`right w-full md:w-[40%] h-[40%] md:h-full flex flex-col items-center justify-center p-5 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            {/* Quick Navigation Cards */}
            <div className="w-full mb-6">
              <h3 className="text-center text-lg md:text-xl font-semibold mb-4">Quick Navigation</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickNavigation(link.path)}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center min-h-[70px] md:min-h-[80px]"
                  >
                    <div className="text-2xl md:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-center">
                      {link.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Auto Redirect Info */}
            <div className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <ClockIcon />
                <span className="font-semibold">Auto Redirect</span>
              </div>

              <p className="text-sm mb-3">
                Redirecting to home in <span className="font-bold text-yellow-300">{countdown}</span> seconds
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div
                  className="bg-yellow-300 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((5 - countdown) / 5) * 100}%` }}
                ></div>
              </div>

              <p className="text-xs opacity-80">
                Taking you back automatically
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {DECORATIVE_PARTICLES.map((particleStyle, i) => (
            <div
              key={i}
              className={`absolute opacity-20 ${i % 3 === 0 ? 'w-2 h-2 bg-[#106EB5] rounded-full' :
                  i % 3 === 1 ? 'w-3 h-0.5 bg-blue-300' :
                    'w-1 h-1 bg-blue-400 rounded-full'
                }`}
              style={particleStyle}
            />
          ))}
        </div>
      </section>

      {/* Bottom Info */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        <p className="text-sm text-gray-600">
          <strong>NEXCORE ALLIANCE LLP</strong> - Empowering Developers in India 🇮🇳
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        /* Responsive text scaling */
        @media (max-width: 640px) {
          .responsive-404 {
            font-size: 12vw !important;
          }
        }

        /* Enhanced mobile spacing */
        @media (max-width: 768px) {
          .mobile-spacing {
            padding: 1rem;
            gap: 1rem;
          }
        }

        /* Better button sizing on mobile */
        @media (hover: none) and (pointer: coarse) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
}