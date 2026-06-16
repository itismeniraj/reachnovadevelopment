"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { ServiceCard } from "../../ui/ServiceCard";
import FadeUp from "../../animations/FadeUp";

import "swiper/css";

export default function ServicesSection({ services }: any) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="services"
      className="w-full relative"
      style={{ backgroundColor: "var(--services-bg)" }}
    >
      <div className="relative h-[300vh] md:h-[350vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="px-4 py-2 text-xs font-bold uppercase rounded-full border">
                {services.badge}
              </span>

              <h2 className="mt-4 md:mt-6 text-3xl sm:text-5xl font-black">
                {services.title}{" "}
                <span style={{ color: "var(--services-accent)" }}>
                  {services.highlight}
                </span>
              </h2>

              <p className="mt-3 md:mt-5 text-sm md:text-base max-w-2xl mx-auto">
                {services.description}
              </p>
            </div>

            <div className="relative h-[460px] sm:h-[440px] md:h-[480px]">
              {mounted && (
                <div className="absolute inset-0 z-50">
                  <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    mousewheel={{
                      forceToAxis: true,
                      sensitivity: 0.5,
                      thresholdDelta: 15,
                      thresholdTime: 400,
                    }}
                    modules={[Mousewheel]}
                    onSlideChange={(swiper) =>
                      setActiveIndex(swiper.activeIndex)
                    }
                    className="w-full h-full"
                  >
                    {services.items.map((item: any) => (
                      <SwiperSlide
                        key={`interceptor-${item.id}`}
                        className="w-full h-full"
                      />
                    ))}
                  </Swiper>
                </div>
              )}

              <div className="absolute inset-0 pointer-events-none">
                {mounted &&
                  services.items.map((item: any, index: number) => (
                    <ServiceCard
                      key={item.id}
                      item={item}
                      index={index}
                      activeIndex={activeIndex}
                      totalServiceCards={services.items.length}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
