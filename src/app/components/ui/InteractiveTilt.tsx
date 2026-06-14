"use client";

import { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface InteractiveTiltProps {
  src: string;
  alt?: string;
  height?: string;
  scale?: number;
  maxTilt?: number;
  className?: string;
  children?: ReactNode;
}

export default function InteractiveTilt({
  src,
  alt = "",
  height = "h-[420px]",
  scale = 1.1,
  maxTilt = 8,
  className = "",
  children,
}: InteractiveTiltProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 150,
    damping: 20,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(
      ((x - centerX) / centerX) * maxTilt
    );

    rotateX.set(
      -((y - centerY) / centerY) * maxTilt
    );
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className={`relative overflow-hidden ${height} ${className}`}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          scale,
        }}
      />

      {children}
    </div>
  );
}