"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  animate,
} from "framer-motion";
import { ServiceCard } from "../../ui/ServiceCard";
import FadeUp from "../../animations/FadeUp";

// Import Swiper for our mobile event interceptor
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

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

  // Native desktop scrolling track progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // The unified timeline variable fed straight to your original card logic
  const throttledProgress = useMotionValue(0);

  // Desktop bypass loop
  useAnimationFrame(() => {
    if (!isMobile) {
      throttledProgress.set(scrollYProgress.get());
    }
  });

  // Mobile gesture bridge: Converts Swiper's un-blastable slides to your exact progress percentages
  const handleMobileSlideChange = (swiper: any) => {
    if (!isMobile) return;
    const totalSlides = services.items.length;
    // Calculate exactly where the scroll timeline should be based on slide index
    const targetPercentage = swiper.activeIndex / (totalSlides - 1);

    // Smoothly animate the timeline pointer using your beautiful native timings
    animate(throttledProgress, targetPercentage, {
      type: "spring",
      stiffness: 70,
      damping: 20,
      mass: 0.8,
    });
  };

  return (
    <section
      id="services"
      className="w-full py-20 px-4 md:px-8 relative"
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

      {/* Main layout frame window */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto h-[220vh] sm:h-[240vh] md:h-[300vh]"
      >
        {/* On mobile, this invisible Swiper captures and filters raw input data */}
        {isMobile && mounted && (
          <div className="absolute inset-0 z-50 pointer-events-auto">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={0}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
              }}
              modules={[Mousewheel]}
              onSlideChange={handleMobileSlideChange}
              className="w-full h-full"
            >
              {services.items.map((item: any) => (
                <SwiperSlide
                  key={`gesture-${item.id}`}
                  className="w-full h-full"
                />
              ))}
            </Swiper>
          </div>
        )}

        {/* Your native view viewport with identical code handling */}
        <div className="sticky top-[80px] md:top-[110px] w-full flex flex-col items-center pointer-events-none">
          {mounted &&
            services.items.map((item: any, index: number) => (
              <div
                key={item.id}
                className="w-full pointer-events-auto"
                style={{ zIndex: index }}
              >
                <ServiceCard
                  item={item}
                  index={index}
                  totalServiceCards={services.items.length}
                  progress={throttledProgress}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
