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
  activeMobileIndex: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  item,
  index,
  totalServiceCards,
  progress,
  activeMobileIndex,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startRange = index / totalServiceCards;
  const endRange = (index + 1) / totalServiceCards;
  const desktopStartingY = 600;

  const desktopY = useTransform(
    progress,
    [0, startRange, Math.min(1, endRange)],
    [desktopStartingY, desktopStartingY, 0],
  );

  const finalScale = 1 - (totalServiceCards - 1 - index) * 0.03;
  const scale = useTransform(
    progress,
    [endRange, endRange + 0.1],
    [1, finalScale],
  );
  const brightness = useTransform(
    progress,
    [endRange, endRange + 0.1],
    ["100%", "75%"],
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

  const isStackedMobile = isMobile && index <= activeMobileIndex;

  return (
    <motion.div
      initial={
        isMobile
          ? { y: index === 0 ? 0 : 800, opacity: index === 0 ? 1 : 0 }
          : false
      }
      animate={
        isMobile
          ? {
              y: isStackedMobile ? 0 : 800,
              opacity: isStackedMobile ? 1 : 0,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 28,
        mass: 1,
      }}
      style={{
        // FIX: Strip y out completely for mobile viewports to prevent style object collision
        ...(isMobile ? {} : { y: index === 0 ? 0 : desktopY }),
        scale: isMobile ? 1 : index === totalServiceCards - 1 ? 1 : scale,
        filter: isMobile
          ? "brightness(100%)"
          : index === totalServiceCards - 1
            ? "brightness(100%)"
            : `brightness(${brightness})`,
        opacity: isMobile ? undefined : 1,
        marginTop: index === 0 ? 0 : "-420px",
        paddingTop: 0,
        backgroundColor: "var(--services-card-bg)",
        border: "1px solid var(--services-card-border)",
      }}
      className="w-full min-h-[420px] md:h-[460px] rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)] origin-top"
    >
      <div className="relative w-full md:w-1/2 h-60 md:h-full select-none pointer-events-none">
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
        className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 select-none"
        style={{ backgroundColor: "var(--services-card-bg)" }}
      >
        <div>
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "var(--services-title)" }}
          >
            {item.title}
          </h3>

          <p
            className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: "var(--services-text)" }}
          >
            {item.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.features.map((f, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-full border"
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
