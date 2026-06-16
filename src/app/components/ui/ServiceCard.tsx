"use client";

import { ServiceItem } from "../../types/site";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
  totalServiceCards: number;
  progress: MotionValue<number>;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  item,
  index,
  totalServiceCards,
  progress,
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

  const startRange = index / totalServiceCards;
  const endRange = (index + 1) / totalServiceCards;
  const startingY = isMobile ? 600 : 700;

  const staircaseOffset = index * (isMobile ? 16 : 0);

  const y = useTransform(
    progress,
    [0, startRange, Math.min(1, endRange)],
    [startingY, startingY, staircaseOffset],
  );

  const opacity = useTransform(
    progress,
    [
      0,
      Math.max(0, startRange - 0.02),
      startRange,
      startRange + (endRange - startRange) * 0.3,
      Math.min(1, endRange),
      1,
    ],
    [0, 0, 0, 0, 1, 1],
  );

  const finalScale = 1 - (totalServiceCards - 1 - index) * 0.025;
  const scale = useTransform(
    progress,
    [endRange, endRange + 0.1],
    [1, finalScale],
  );
  const brightness = useTransform(
    progress,
    [endRange, endRange + 0.1],
    ["100%", "80%"],
  );

  if (!mounted) {
    return (
      <div
        className="w-full h-[420px] rounded-3xl border"
        style={{
          backgroundColor: "var(--services-card-bg)",
          borderColor: "var(--services-card-border)",
        }}
      />
    );
  }

  return (
    <motion.div
      style={{
        y: index === 0 ? staircaseOffset : y,
        scale: isMobile ? 1 : index === totalServiceCards - 1 ? 1 : scale,
        filter: isMobile
          ? "brightness(100%)"
          : index === totalServiceCards - 1
            ? "brightness(100%)"
            : `brightness(${brightness})`,
        opacity: index === 0 ? 1 : opacity,
        marginTop: index === 0 ? 0 : isMobile ? "-404px" : "-420px",
        paddingTop: 0,
        backgroundColor: "var(--services-card-bg)",
        border: "1px solid var(--services-card-border)",
      }}
      className="w-full min-h-[420px] md:h-[460px] rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)] origin-top"
    >
      <div className="relative w-full md:w-1/2 h-52 sm:h-60 md:h-full select-none pointer-events-none">
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
        className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 select-none"
        style={{ backgroundColor: "var(--services-card-bg)" }}
      >
        <div>
          <h3
            className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "var(--services-title)" }}
          >
            {item.title}
          </h3>

          <p
            className="mt-3 text-xs sm:text-base md:text-lg leading-relaxed line-clamp-4 sm:line-clamp-none"
            style={{ color: "var(--services-text)" }}
          >
            {item.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.features.map((f, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 text-xs sm:text-sm font-semibold rounded-full border"
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
    </motion.div>
  );
};
