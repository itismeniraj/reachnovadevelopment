"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { ServiceCard } from "../../ui/ServiceCard";
import FadeUp from "../../animations/FadeUp";

export default function ServicesSection({ services }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;

    const currentY = e.touches[0].clientY;
    const diffY = touchStartY.current - currentY;

    if (diffY > 10 && activeMobileIndex < services.items.length - 1) {
      if (e.cancelable) e.preventDefault();
    } else if (diffY < -10 && activeMobileIndex > 0) {
      if (e.cancelable) e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isMobile) return;

    const currentY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - currentY;

    if (diffY > 40) {
      setActiveMobileIndex((prev) =>
        Math.min(services.items.length - 1, prev + 1),
      );
    } else if (diffY < -40) {
      setActiveMobileIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const mobileContainerHeight = 440 + services.items.length * 16;

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

      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={
          isMobile
            ? "relative w-full max-w-5xl mx-auto"
            : "relative h-[140vh] sm:h-[180vh] md:h-[260vh] w-full max-w-5xl mx-auto"
        }
        style={{
          touchAction: isMobile ? "pan-x" : "auto",
          height: isMobile ? `${mobileContainerHeight}px` : undefined,
        }}
      >
        <div
          className={
            isMobile
              ? "relative w-full flex flex-col items-center"
              : "sticky top-[80px] md:top-[110px] w-full flex flex-col items-center"
          }
        >
          {services.items.map((item: any, index: number) => (
            <div key={item.id} className="w-full" style={{ zIndex: index }}>
              <ServiceCard
                item={item}
                index={index}
                totalServiceCards={services.items.length}
                progress={scrollYProgress}
                activeMobileIndex={activeMobileIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
