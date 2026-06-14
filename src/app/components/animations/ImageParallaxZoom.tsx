"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ReactNode } from "react";

export default function ImageParallaxZoom({
  children,
}: {
  children: ReactNode;
}) {
  const { scrollY } = useScroll();

  // Raw values
  const scaleRaw = useTransform(scrollY, [0, 1200], [1, 2.2]);
  const yRaw = useTransform(scrollY, [0, 1200], [0, -250]);

  // Smooth values
  const scale = useSpring(scaleRaw, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const y = useSpring(yRaw, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  return (
    <motion.div
      style={{
        scale,
        y,
      }}
      className="w-full h-full will-change-transform"
    >
      {children}
    </motion.div>
  );
}