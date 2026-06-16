"use client";

import { ServiceItem } from "../../types/site";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
  totalServiceCards: number;
  activeCard: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  item,
  index,
  totalServiceCards,
  activeCard,
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
    return null;
  }

  const visible = index <= activeCard;

  const staircaseOffset = index * (isMobile ? 16 : 20);

  const scale = index < activeCard ? 1 - (activeCard - index) * 0.025 : 1;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: 700,
            opacity: 0,
          }}
          animate={{
            y: staircaseOffset,
            opacity: 1,
            scale,
            filter: index < activeCard ? "brightness(80%)" : "brightness(100%)",
          }}
          exit={{
            y: 700,
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            zIndex: index,
            marginTop: index === 0 ? 0 : isMobile ? "-404px" : "-420px",
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
              sizes="(max-width:768px) 100vw, 50vw"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top right,var(--services-overlay),transparent)",
              }}
            />
          </div>

          <div
            className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10"
            style={{
              backgroundColor: "var(--services-card-bg)",
            }}
          >
            <div>
              <h3
                className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight"
                style={{
                  color: "var(--services-title)",
                }}
              >
                {item.title}
              </h3>

              <p
                className="mt-3 text-xs sm:text-base md:text-lg leading-relaxed"
                style={{
                  color: "var(--services-text)",
                }}
              >
                {item.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 text-xs sm:text-sm font-semibold rounded-full border"
                  style={{
                    backgroundColor: "var(--services-feature-bg)",
                    color: "var(--services-feature-text)",
                    borderColor: "var(--services-feature-border)",
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
