"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { ServiceCard } from "../../ui/ServiceCard";
import FadeUp from "../../animations/FadeUp";

export default function ServicesSection({ services }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1. Get raw scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Custom throttle container for mobile velocity control
  const throttledProgress = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollYProgress);

  useAnimationFrame((_, delta) => {
    const raw = scrollYProgress.get();
    const currentThrottled = throttledProgress.get();

    if (!isMobile) {
      // Desktop bypass: Keep standard native behavior
      throttledProgress.set(raw);
      return;
    }

    const diff = raw - currentThrottled;
    if (Math.abs(diff) < 0.001) {
      throttledProgress.set(raw);
      return;
    }

    // Capture speed data and set a maximum progress jump per frame (Delta target calculation)
    const velocity = Math.abs(scrollVelocity.get());
    const isBlastScrolling = velocity > 1.5;

    // Strict speed limits: forces a beautiful, steady interpolation transition even under fast flicks
    const maxStepPerFrame = isBlastScrolling ? 0.008 : 0.02;
    const step =
      Math.sign(diff) *
      Math.min(Math.abs(diff), maxStepPerFrame * (delta / 16.66));

    throttledProgress.set(currentThrottled + step);
  });

  return (
    <section
      id="services"
      className="w-full py-20 px-4 md:px-8"
      style={{ backgroundColor: "var(--services-bg)" }}
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <FadeUp>
          <span
            className="px-4 py-2 text-xs font-bold uppercase rounded-full border"
            style={{
              backgroundColor: "var(--services-badge-bg)",
              color: "var(--services-badge-text)",
              borderColor: "var(--services-badge-border)",
            }}
          >
            {services.badge}
          </span>
        </FadeUp>

        <FadeUp>
          <h2
            className="mt-6 text-3xl sm:text-5xl font-black"
            style={{ color: "var(--services-title)" }}
          >
            {services.title}{" "}
            <span style={{ color: "var(--services-accent)" }}>
              {services.highlight}
            </span>
          </h2>
        </FadeUp>

        <FadeUp>
          <p className="mt-5" style={{ color: "var(--services-text)" }}>
            {services.description}
          </p>
        </FadeUp>
      </div>

      {/* Sticky Scroll Container Track */}
      <div
        ref={containerRef}
        className="relative h-[220vh] sm:h-[240vh] md:h-[300vh] w-full max-w-5xl mx-auto"
      >
        <div className="sticky top-[80px] md:top-[110px] w-full flex flex-col items-center">
          {mounted &&
            services.items.map((item: any, index: number) => (
              <div key={item.id} className="w-full" style={{ zIndex: index }}>
                <ServiceCard
                  item={item}
                  index={index}
                  totalServiceCards={services.items.length}
                  progress={throttledProgress} // Fed controlled timeline progress instead of erratic scrolling jumps
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
