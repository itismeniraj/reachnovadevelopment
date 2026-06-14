"use client";

import { motion } from "framer-motion";

export default function DropReveal({ children, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -120, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}