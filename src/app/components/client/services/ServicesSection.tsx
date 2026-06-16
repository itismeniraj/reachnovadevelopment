"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import { ServiceCard } from "../../ui/ServiceCard";
import FadeUp from "../../animations/FadeUp";

export default function ServicesSection({ services }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Stable scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth but NOT self-running animation
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.2,
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
          <p style={{ color: "var(--services-text)" }}>
            {services.description}
          </p>
        </FadeUp>
      </div>

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
                  progress={progress}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
