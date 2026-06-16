"use client";

import { useEffect, useRef, useState } from "react";
import FadeUp from "../../animations/FadeUp";
import { ServiceCard } from "../../ui/ServiceCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

export default function ServicesSection({ services }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);
  const isAnimatingRef = useRef(false);

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!swiperRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const isPinned = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isPinned) return;

      const swiper = swiperRef.current;

      const isFirst = swiper.activeIndex === 0;

      const isLast = swiper.activeIndex === services.items.length - 1;

      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0) {
        if (!isLast) {
          e.preventDefault();

          isAnimatingRef.current = true;

          swiper.slideNext();

          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 800);
        }
      } else {
        if (!isFirst) {
          e.preventDefault();

          isAnimatingRef.current = true;

          swiper.slidePrev();

          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 800);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [services.items.length]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full"
      style={{
        height: `${services.items.length * 100}vh`,
        backgroundColor: "var(--services-bg)",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center px-4 md:px-8">
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
              style={{
                color: "var(--services-title)",
              }}
            >
              {services.title}{" "}
              <span
                style={{
                  color: "var(--services-accent)",
                }}
              >
                {services.highlight}
              </span>
            </h2>
          </FadeUp>

          <FadeUp>
            <p
              className="mt-5"
              style={{
                color: "var(--services-text)",
              }}
            >
              {services.description}
            </p>
          </FadeUp>
        </div>

        {/* Hidden Swiper Controller */}
        <Swiper
          className="hidden"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveCard(swiper.activeIndex);
          }}
          direction="vertical"
          slidesPerView={1}
          allowTouchMove={false}
          speed={800}
          mousewheel={false}
          modules={[Mousewheel]}
        >
          {services.items.map((item: any) => (
            <SwiperSlide key={item.id} />
          ))}
        </Swiper>

        {/* Stacked Cards */}
        <div className="relative max-w-5xl mx-auto w-full">
          {services.items.map((item: any, index: number) => (
            <ServiceCard
              key={item.id}
              item={item}
              index={index}
              totalServiceCards={services.items.length}
              activeCard={activeCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
