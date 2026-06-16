"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import { ServiceCard } from "../../ui/ServiceCard";
import FadeUp from "../../animations/FadeUp";

export default function ServicesSection({ services }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const totalCards = services?.items?.length || 1;

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snap progress: advances one card threshold at a time
  const snappedProgress = useMotionValue(0);
  const lastRaw = useRef(0);
  const currentSnap = useRef(0);

  useAnimationFrame(() => {
    const raw = scrollYProgress.get();
    const delta = raw - lastRaw.current;
    lastRaw.current = raw;

    if (Math.abs(delta) < 0.0001) return;

    const cardSize = 1 / totalCards;
    const direction = delta > 0 ? 1 : -1;

    // Only allow moving to the adjacent snap point
    const nextSnap = currentSnap.current + direction * cardSize;
    const clamped = Math.max(0, Math.min(1, nextSnap));

    // Only commit if raw scroll has actually reached or passed the next snap
    if (direction > 0 && raw >= clamped) {
      currentSnap.current = clamped;
      snappedProgress.set(clamped);
    } else if (direction < 0 && raw <= clamped) {
      currentSnap.current = clamped;
      snappedProgress.set(clamped);
    }
  });

  // Spring follows snapped value smoothly for the staircase animation
  const smoothProgress = useSpring(snappedProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
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

      {/* Tall container — height drives how long the section stays pinned */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto"
        style={{ height: `${totalCards * 100}vh` }}
      >
        {/* Sticky viewport — cards live here and stay pinned */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center">
          <div className="relative w-full" style={{ height: "460px" }}>
            {mounted &&
              services.items.map((item: any, index: number) => (
                <ServiceCard
                  key={item.id}
                  item={item}
                  index={index}
                  totalServiceCards={totalCards}
                  progress={smoothProgress}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
