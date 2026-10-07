'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { services } from '@/data/services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Canvas = dynamic(
  () => import('@react-three/fiber').then((m) => m.Canvas),
  { ssr: false }
);

const ParticleCloud = dynamic(
  () => import('./ParticleCloud').then((m) => m.ParticleCloud),
  { ssr: false }
);

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export const ParticleServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(services[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !scrollContainerRef.current) return;

    const slideToNext = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % services.length;
        setActiveServiceId(services[nextIndex].id);
        if (scrollContainerRef.current) {
          const firstCard = scrollContainerRef.current.children[0] as HTMLElement;
          const secondCard = scrollContainerRef.current.children[1] as HTMLElement;
          const stepDistance = firstCard && secondCard
            ? secondCard.offsetLeft - firstCard.offsetLeft
            : 374;
          gsap.to(scrollContainerRef.current, {
            x: -stepDistance * nextIndex,
            duration: 0.9,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
        return nextIndex;
      });
    };

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        if (!autoScrollTimerRef.current) autoScrollTimerRef.current = setInterval(slideToNext, 3500);
      },
      onEnterBack: () => {
        if (!autoScrollTimerRef.current) autoScrollTimerRef.current = setInterval(slideToNext, 3500);
      },
      onLeave: () => {
        if (autoScrollTimerRef.current) {
          clearInterval(autoScrollTimerRef.current);
          autoScrollTimerRef.current = null;
        }
      },
      onLeaveBack: () => {
        if (autoScrollTimerRef.current) {
          clearInterval(autoScrollTimerRef.current);
          autoScrollTimerRef.current = null;
        }
      }
    });

    return () => {
      if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current);
      st.kill();
    };
  }, []);

  const handleSelectCard = (index: number) => {
    setCurrentIndex(index);
    setActiveServiceId(services[index].id);
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.children[0] as HTMLElement;
      const secondCard = scrollContainerRef.current.children[1] as HTMLElement;
      const stepDistance = firstCard && secondCard
        ? secondCard.offsetLeft - firstCard.offsetLeft
        : 374;
      gsap.to(scrollContainerRef.current, {
        x: -stepDistance * index,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { rootMargin: '300px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative w-full bg-[#030610] text-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
        
        {/* Left Side: 3D Particle Cloud */}
        <div className="relative w-full h-[380px] lg:h-[550px] flex items-center justify-center lg:col-span-6">
          {inView && (
            <Canvas
              camera={{ position: [0, 0, 7], fov: 48 }}
              style={{ width: '100%', height: '100%' }}
              dpr={[1, 2]}
              gl={{
                antialias: false,
                alpha: true,
                powerPreference: 'high-performance',
                preserveDrawingBuffer: false,
              }}
              onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0);
              }}
            >
              <ambientLight intensity={1} />
              <ParticleCloud activeServiceId={activeServiceId} />
            </Canvas>
          )}
        </div>

        {/* Right Side: Showcase Cards */}
        <div className="relative w-full flex flex-col justify-center lg:col-span-6 overflow-hidden">
          <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 mb-8 pr-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
                Our Services
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/60 max-w-[280px]">
              We design and engineer digital solutions that transform your business and drive innovation across every touchpoint.
            </p>
          </div>

          {/* Cards Track */}
          <div className="w-full overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex flex-row space-x-6 pb-6 w-max transition-transform"
            >
              {services.map((service, idx) => {
                const isActive = activeServiceId === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => handleSelectCard(idx)}
                    className={`relative rounded-3xl border transition-all duration-700 ease-out overflow-hidden flex-shrink-0 w-[85vw] sm:w-[350px] min-h-[380px] flex flex-col cursor-pointer ${
                      isActive
                        ? 'bg-[#3c417c] border-[#6b62c4] shadow-[0_0_30px_rgba(139,123,255,0.25)] scale-100 opacity-100'
                        : 'bg-[#0a0d1b] border-white/5 scale-90 opacity-50 blur-[1px] hover:opacity-75'
                    }`}
                  >
                    <div className="p-8 flex flex-col h-full relative z-10">
                      <div className="flex items-start justify-between mb-auto">
                        {isActive ? (
                          <h3 className="text-2xl font-bold text-white pr-4">
                            {service.title}
                          </h3>
                        ) : (
                          <span className="text-3xl font-bold text-white">{service.number}</span>
                        )}
                        <div className="text-white/80">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>

                      {isActive ? (
                        <div className="flex flex-col mt-6">
                          <p className="text-sm leading-relaxed text-white/90 mb-6">
                            {service.description}
                          </p>
                          <div className="flex gap-8">
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Services</span>
                              <ul className="flex flex-col gap-1.5">
                                {service.subPractices?.slice(0, 4).map((sub) => (
                                  <li key={sub} className="text-xs text-white/80">
                                    {sub}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-auto">
                          <h3 className="text-xl font-bold text-white/90">
                            {service.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-4">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => handleSelectCard(i)}
                aria-label={`Select service ${s.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex ? 'w-8 bg-[#8b7bff]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
