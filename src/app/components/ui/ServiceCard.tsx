"use client";

import { ServiceItem } from "../../types/site";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

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
  const cardSize = 1 / totalServiceCards;
  const startRange = index * cardSize;
  const endRange = (index + 1) * cardSize;

  const STAIRCASE_OFFSET = 18; // px each card peeks above the next

  // Slide up from below into stacked position
  const y = useTransform(
    progress,
    [Math.max(0, startRange - cardSize), startRange],
    ["700px", `${index * STAIRCASE_OFFSET}px`],
  );

  // Scale down as later cards stack on top
  const scale = useTransform(
    progress,
    [endRange, Math.min(1, endRange + cardSize)],
    [1, 1 - (totalServiceCards - 1 - index) * 0.025],
  );

  const brightnessVal = useTransform(
    progress,
    [endRange, Math.min(1, endRange + cardSize)],
    [1, 0.82],
  );

  const filter = useTransform(brightnessVal, (b) =>
    index === totalServiceCards - 1 ? "brightness(1)" : `brightness(${b})`,
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: index,
        transformOrigin: "top center",
        // First card starts already in place, rest slide up
        y: index === 0 ? `${index * STAIRCASE_OFFSET}px` : y,
        scale: index === totalServiceCards - 1 ? 1 : scale,
        filter,
        backgroundColor: "var(--services-card-bg)",
        border: "1px solid var(--services-card-border)",
      }}
      className="w-full h-[460px] rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)]"
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

        <div className="mt-5 flex flex-wrap gap-2">
          {item.features.map((f: string, i: number) => (
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
