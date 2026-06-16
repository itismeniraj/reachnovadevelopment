"use client";

import { ServiceItem } from "../../types/site";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
  activeIndex: number;
  totalServiceCards: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  item,
  index,
  activeIndex,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-full h-full rounded-3xl border"
        style={{
          backgroundColor: "var(--services-card-bg)",
          borderColor: "var(--services-card-border)",
        }}
      />
    );
  }

  const isPast = index < activeIndex;
  const isActive = index === activeIndex;

  const staircaseOffset = index * (isMobile ? 12 : 16);

  const scale = isPast ? 1 - (activeIndex - index) * 0.025 : 1;
  const brightness = isPast ? `${100 - (activeIndex - index) * 8}%` : "100%";

  let targetY = isMobile ? 650 : 850;
  let opacity = 0;

  if (isPast || isActive) {
    targetY = staircaseOffset;
    opacity = 1;
  }

  return (
    <div
      style={{
        zIndex: index,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY(${targetY}px) scale(${scale})`,
        opacity: opacity,
        filter: isMobile ? "brightness(100%)" : `brightness(${brightness})`,
        transition:
          "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.35s ease, filter 0.4s ease",
        transformOrigin: "top center",
        backgroundColor: "var(--services-card-bg)",
        border: "1px solid var(--services-card-border)",
      }}
      className="w-full h-[440px] sm:h-[420px] md:h-[460px] rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)]"
    >
      <div className="relative w-full md:w-1/2 h-44 sm:h-48 md:h-full select-none pointer-events-none">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={index === 0}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top right, var(--services-overlay), transparent)`,
          }}
        />
      </div>

      <div
        className="w-full md:w-1/2 flex flex-col justify-center p-5 sm:p-8 md:p-10 select-none"
        style={{ backgroundColor: "var(--services-card-bg)" }}
      >
        <div>
          <h3
            className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight"
            style={{ color: "var(--services-title)" }}
          >
            {item.title}
          </h3>

          <p
            className="mt-2 text-xs sm:text-base md:text-md leading-relaxed line-clamp-3 sm:line-clamp-none"
            style={{ color: "var(--services-text)" }}
          >
            {item.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.features.map((f, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 text-[10px] sm:text-sm font-semibold rounded-full border"
              style={{
                backgroundColor: "var(--services-feature-bg)",
                color: "var(--services-feature-text)",
                borderColor: "var(--services-feature-border)",
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
