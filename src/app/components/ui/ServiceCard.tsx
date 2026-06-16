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

  const segment = 1 / totalServiceCards;

  const startRange = index * segment;
  const endRange = startRange + segment;

  const startingY = isMobile ? 600 : 700;
  const staircaseOffset = index * (isMobile ? 16 : 0);

  // Each card reacts ONLY to its own scroll slice
  const localProgress = useTransform(progress, [startRange, endRange], [0, 1], {
    clamp: true,
  });

  const y = useTransform(localProgress, [0, 1], [startingY, staircaseOffset]);

  const opacity = useTransform(localProgress, [0, 0.1, 1], [0, 1, 1]);

  const scale = isMobile ? 1 : 1;

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
        y,
        opacity,
        scale,
        marginTop: index === 0 ? 0 : isMobile ? "-404px" : "-420px",
        backgroundColor: "var(--services-card-bg)",
        border: "1px solid var(--services-card-border)",
      }}
      className="w-full min-h-[420px] md:h-[460px] rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)] origin-top"
    >
      <div className="relative w-full md:w-1/2 h-52 sm:h-60 md:h-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={index === 0}
          className="object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
        <h3 className="text-xl md:text-4xl font-bold">{item.title}</h3>

        <p className="mt-3 text-sm md:text-lg">{item.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.features.map((f, i) => (
            <span key={i} className="px-2 py-1 text-xs border rounded-full">
              {f}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
