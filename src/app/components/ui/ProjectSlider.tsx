"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectSliderProps<T> = {
  items: T[];
  interval?: number;
  renderSlide: (item: T, index: number) => React.ReactNode;
};

export default function ProjectSlider<T>({
  items,
  interval = 5000,
  renderSlide,
}: ProjectSliderProps<T>) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const hasItems = Array.isArray(items) && items.length > 0;

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // AUTO SLIDE
  useEffect(() => {
    if (!hasItems) return;

    const id = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(id);
  }, [hasItems, interval, items.length]);

  if (!hasItems) return null;

  return (
    <div className="relative w-full">
      {/* SLIDER AREA */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction === 1 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -80 : 80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {renderSlide(items[index], index)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1D3173] p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1D3173] p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#43B6CF]" : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}