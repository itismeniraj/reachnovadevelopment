"use client";

import { motion } from "framer-motion";

export default function GlobalBrandWave() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black to-black" />

      {/* 🟥 LEFT CURTAIN */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full w-1/2 bg-black z-20"
      />

      {/* 🟥 RIGHT CURTAIN */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 right-0 h-full w-1/2 bg-black z-20"
      />

      {/* 🌟 CENTER CONTENT */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-center text-white z-10"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest">
          ReachNova
        </h1>

        <p className="text-gray-400 mt-4">
          Build. Innovate. Scale.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-black rounded-full">
            Enter
          </button>
          <button className="px-6 py-3 border border-white/30 text-white">
            Explore
          </button>
        </div>
      </motion.div>

    </div>
  );
}