"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { ServiceCard } from "../../ui/ServiceCard";
import FadeUp from "../../animations/FadeUp";

export default function ServicesSection({ services }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 IMPORTANT: control refs (prevents multi-step jumps)
  const lastIndexRef = useRef(0);
  const lockRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    mass: 0.3,
  });

  // 🔥 STEP LOCK SYSTEM (core fix)
  useMotionValueEvent(smoothProgress, "change", (v) => {
    const next = Math.min(
      services.items.length - 1,
      Math.floor(v * services.items.length),
    );

    const current = lastIndexRef.current;

    // ignore backward jumps (optional but stabilizes UX)
    if (next <= current) return;

    // allow only ONE step at a time
    if (lockRef.current) return;

    lockRef.current = true;

    const newIndex = current + 1;

    setActiveIndex(newIndex);
    lastIndexRef.current = newIndex;

    // unlock after animation duration
    setTimeout(() => {
      lockRef.current = false;
    }, 650); // match your card transition timing
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full relative"
      style={{ backgroundColor: "var(--services-bg)" }}
    >
      {/* scroll height for pin effect */}
      <div className="relative h-[320vh] md:h-[360vh]">
        {/* sticky viewport */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-5xl mx-auto">
            {/* HEADER */}
            <div className="text-center mb-14">
              <FadeUp>
                <span className="px-4 py-2 text-xs font-bold uppercase rounded-full border">
                  {services.badge}
                </span>
              </FadeUp>

              <FadeUp>
                <h2 className="mt-4 md:mt-6 text-3xl sm:text-5xl font-black">
                  {services.title}{" "}
                  <span style={{ color: "var(--services-accent)" }}>
                    {services.highlight}
                  </span>
                </h2>
              </FadeUp>

              <FadeUp>
                <p className="mt-3 md:mt-5 text-sm md:text-base max-w-2xl mx-auto">
                  {services.description}
                </p>
              </FadeUp>
            </div>

            {/* STACK AREA */}
            <div className="relative h-[460px] md:h-[480px]">
              {mounted &&
                services.items.map((item: any, index: number) => (
                  <ServiceCard
                    key={item.id}
                    item={item}
                    index={index}
                    activeIndex={activeIndex}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
