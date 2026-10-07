"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [shouldRender, setShouldRender] = useState(true);
  const [isZooming, setIsZooming] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  const targetProgressRef = useRef(0);
  const animFrameRef = useRef(null);
  const isDoneRef = useRef(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [useCanvas, setUseCanvas] = useState(true);

  // 1. High-Precision Chroma-Key: Isolates Arrow, Disc, and Letters with Zero Cloud / Halos
  useEffect(() => {
    if (!shouldRender || !useCanvas) return;

    let canvasAnimId;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    video.muted = true;
    video.playbackRate = 1.6; // Increased animation speed for a snappy, dynamic feel

    const handleVideoPlay = () => {
      video.playbackRate = 1.6;
    };
    video.addEventListener("play", handleVideoPlay);
    video.addEventListener("loadedmetadata", handleVideoPlay);

    video.play().catch(() => {});

    const processVideoFrame = () => {
      if (video.readyState >= 2) {
        const width = video.videoWidth || 640;
        const height = video.videoHeight || 360;

        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }

        ctx.drawImage(video, 0, 0, width, height);

        try {
          const frame = ctx.getImageData(0, 0, width, height);
          const data = frame.data;
          const len = data.length;

          for (let i = 0; i < len; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            const minC = Math.min(r, g, b);

            // A. Detect saturated brand elements strictly on their core colors
            // 1. Blue Arrow (high blue, low red, solid blue dominance)
            const isBlueArrow = b > 140 && b > r + 45 && r < 140;
            // 2. Orange / Yellow top of 'O'
            const isOrangeYellow = r > 160 && r > b + 45;
            // 3. Cyan / Blue bottom of 'O'
            const isCyanDisc = b > 150 && g > 120 && r < 120 && b > r + 35;

            // B. Detect background fog / spotlight halos
            const isBackground = minC >= 150 || (r > 160 && g > 160 && b > 170);

            if (isBlueArrow || isOrangeYellow || isCyanDisc) {
              // Saturated logo elements stay 100% solid & vibrant
              data[i + 3] = 255;
            } else if (isBackground) {
              // 100% Transparent background
              data[i + 3] = 0;
            } else {
              // Letters (N, E, X, C, R, E, ALLIANCE, SINCE:2011, ®)
              data[i + 3] = 255;

              // Wave shine highlight (smooth metallic silver-white)
              const waveShine = Math.min(1, Math.max(0, minC / 140));
              data[i] = Math.round(230 + waveShine * 25);
              data[i + 1] = Math.round(235 + waveShine * 20);
              data[i + 2] = Math.round(245 + waveShine * 10);
            }
          }

          ctx.putImageData(frame, 0, 0);
        } catch {
          setUseCanvas(false);
        }
      }

      canvasAnimId = requestAnimationFrame(processVideoFrame);
    };

    canvasAnimId = requestAnimationFrame(processVideoFrame);

    return () => {
      if (canvasAnimId) cancelAnimationFrame(canvasAnimId);
    };
  }, [shouldRender, useCanvas]);

  // 2. Real Readiness & Progress Animation
  useEffect(() => {
    if (typeof window === "undefined") return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const MIN_LOADING_TIME = 2400; // Luxurious duration in ms

    let isFontsLoaded = false;
    let isWindowLoaded = false;

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready
        .then(() => {
          isFontsLoaded = true;
        })
        .catch(() => {
          isFontsLoaded = true;
        });
    } else {
      isFontsLoaded = true;
    }

    const checkWindowComplete = () => {
      isWindowLoaded = true;
    };

    if (document.readyState === "complete") {
      checkWindowComplete();
    } else {
      window.addEventListener("load", checkWindowComplete, { once: true });
    }

    let current = 0;
    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const timeRatio = Math.min(1, elapsed / MIN_LOADING_TIME);

      const timeProgress = (1 - Math.pow(1 - timeRatio, 2.2)) * 100;

      let readinessCap = 40;
      if (isFontsLoaded) readinessCap = 70;
      if (isWindowLoaded) readinessCap = 100;

      const desiredTarget = Math.min(timeProgress, readinessCap);
      targetProgressRef.current = Math.max(targetProgressRef.current, desiredTarget);

      if (timeRatio >= 1 && (isWindowLoaded || elapsed > 4500)) {
        targetProgressRef.current = 100;
      }

      const step = (targetProgressRef.current - current) * 0.055;
      current += Math.max(step, 0.2);

      if (current >= 99.4 && targetProgressRef.current >= 100) {
        current = 100;
        setDisplayProgress(100);

        if (!isDoneRef.current) {
          isDoneRef.current = true;
          // Step 1: Hold briefly at 100%
          setTimeout(() => {
            // Step 2: Trigger cinematic video zoom transition
            setIsZooming(true);
            
            // Step 3: Trigger exit completion after zoom reveals website
            setTimeout(() => {
              setIsExiting(true);
            }, 900);
          }, 250);
        }
        return;
      }

      setDisplayProgress(Math.min(99, Math.round(current)));
      animFrameRef.current = requestAnimationFrame(updateProgress);
    };

    animFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      document.body.style.overflow = originalOverflow;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("load", checkWindowComplete);
    };
  }, []);

  const handleAnimationComplete = () => {
    if (isExiting) {
      document.body.style.overflow = "";
      setShouldRender(false);
    }
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {!isExiting && (
        <motion.div
          key="nexcore-loader"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isZooming ? 0 : 1,
            transition: {
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3 },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050B1A] text-white select-none overflow-hidden"
          role="progressbar"
          aria-valuenow={displayProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Initial website loading"
        >
          {/* Off-screen active video element to decode frames */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              position: "fixed",
              top: "-9999px",
              left: "-9999px",
              width: "640px",
              height: "360px",
              opacity: 0.01,
              pointerEvents: "none",
              zIndex: -100,
            }}
          >
            <source
              src="/NEXCORE_ALLIANCE_logo_animation_202608241009_gwr_video_mvp.mp4"
              type="video/mp4"
            />
          </video>

          {/* Centered Brand Content Box */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6">
            {/* 1. CINEMATIC ZOOMING VIDEO LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 8 }}
              animate={
                isZooming
                  ? {
                      scale: 2.3,
                      opacity: 0,
                      filter: "blur(4px)",
                      transition: {
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1], // Smooth cinematic camera zoom curve
                      },
                    }
                  : {
                      scale: 1,
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }
              }
              className="relative flex items-center justify-center origin-center"
            >
              <div className="relative w-72 sm:w-88 md:w-96 lg:w-[26rem] flex items-center justify-center">
                {useCanvas ? (
                  <canvas
                    ref={canvasRef}
                    className="w-full h-auto object-contain select-none pointer-events-none block drop-shadow-[0_8px_24px_rgba(26,115,232,0.4)]"
                  />
                ) : (
                  <Image
                    src="/nex.png"
                    alt="NEXCORE ALLIANCE LLP"
                    width={280}
                    height={100}
                    priority
                    className="w-full h-auto object-contain drop-shadow-[0_8px_24px_rgba(26,115,232,0.4)]"
                  />
                )}
              </div>
            </motion.div>

            {/* 2. PROGRESS BAR (Fades out immediately when zoom begins) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={
                isZooming
                  ? {
                      opacity: 0,
                      y: -10,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }
                  : {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: 0.25,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }
              }
              className="mt-6 sm:mt-8 flex flex-col items-center w-full"
            >
              {/* Progress Bar Track */}
              <div className="w-48 sm:w-60 md:w-72 h-[2.5px] sm:h-[3px] bg-slate-800/80 rounded-full overflow-hidden relative shadow-inner">
                {/* Active Progress Fill */}
                <div
                  className="h-full bg-gradient-to-r from-[#1a73e8] via-[#3F72AF] to-[#ff6600] rounded-full transition-[width] duration-150 ease-out relative"
                  style={{ width: `${displayProgress}%` }}
                >
                  {/* Subtle leading edge glow */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#ff6600] rounded-full blur-[2px] opacity-80" />
                </div>
              </div>

              {/* 3. PERCENTAGE DISPLAY */}
              <div className="mt-3.5 flex items-center justify-center">
                <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.2em] text-slate-400 tabular-nums">
                  {displayProgress}%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
