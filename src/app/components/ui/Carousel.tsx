"use client";

import {
  AnimatePresence,
  motion,
  PanInfo,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  ReactNode,
  useEffect,
  useState,
} from "react";

interface CarouselProps<T> {
  items: T[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  renderItem: (item: T, index: number) => ReactNode;
}

export default function Carousel<T>({
  items,
  renderItem,
  autoPlay = true,
  autoPlayDelay = 5000,
}: CarouselProps<T>) {
  const [[index, direction], setIndex] =
    useState([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => [
      (prev + newDirection + items.length) %
        items.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      paginate(1);
    }, autoPlayDelay);

    return () => clearInterval(timer);
  }, [index, autoPlay, autoPlayDelay, items.length]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -100) {
      paginate(1);
    } else if (info.offset.x > 100) {
      paginate(-1);
    }
  };

  if (!items.length) return null;

  return (
    <div className="relative">

      {/* PREV */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg hover:scale-105 transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* NEXT */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg hover:scale-105 transition"
      >
        <ChevronRight size={20} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={0.8}
          onDragEnd={handleDragEnd}
          initial={{
            x:
              direction > 0
                ? 300
                : -300,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x:
              direction > 0
                ? -300
                : 300,
            opacity: 0,
          }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
        >
          {renderItem(
            items[index],
            index
          )}
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="flex justify-center gap-2 py-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() =>
              setIndex([
                i,
                i > index ? 1 : -1,
              ])
            }
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-[#43B6CF]"
                : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}