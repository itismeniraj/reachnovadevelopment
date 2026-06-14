"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, ShieldCheck, Target } from "lucide-react";
import { useRef } from "react";

const iconMap: any = {
  Target,
  Globe,
  ShieldCheck,
};

export default function AboutSection({ about }: any) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], [-200, 600]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [-300, 800]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [-150, 500]);
  const orb4Y = useTransform(scrollYProgress, [0, 1], [-250, 700]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#081128] py-24 lg:py-36"
    >
      {/* Background (UNCHANGED) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow Effects (UNCHANGED) */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#43B6CF]/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#1D3173]/40 blur-[160px]" />

      {/* Orbs (UNCHANGED) */}
      <motion.div style={{ y: orb1Y }} className="absolute left-[5%] top-[-150px]">
        <Orb size="w-72 h-72" />
      </motion.div>

      <motion.div style={{ y: orb2Y }} className="absolute right-[8%] top-[-220px]">
        <Orb size="w-96 h-96" />
      </motion.div>

      <motion.div style={{ y: orb3Y }} className="absolute left-[25%] top-[20%]">
        <Orb size="w-40 h-40" />
      </motion.div>

      <motion.div style={{ y: orb4Y }} className="absolute right-[30%] top-[35%]">
        <Orb size="w-28 h-28" />
      </motion.div>

      {/* CONTENT (UNCHANGED) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <p className="uppercase tracking-[5px] text-[#43B6CF] text-sm font-medium mb-6">
              {about.badge}
            </p>

            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95]">
              {about.title}
            </h2>

            <div className="w-24 h-[2px] bg-[#43B6CF] mt-10 mb-10" />

            <h3 className="text-white text-2xl font-semibold mb-5">
              {about.highlightsTitle}
            </h3>

            <p className="text-white/70 text-lg max-w-xl">
              {about.highlights}
            </p>

            <h4 className="text-white text-xl font-semibold mt-8 mb-3">
              {about.descriptionTitle}
            </h4>

            <p className="text-white/60 text-base max-w-xl">
              {about.description}
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-6">
            {about.cards.map((item: any, index: number) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  viewport={{ once: false }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
                >
                  <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#43B6CF]/10 border border-[#43B6CF]/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#43B6CF]" />
                    </div>

                    <div>
                      <h3 className="text-white text-2xl font-semibold mb-3">
                        {item.title}
                      </h3>

                      <p className="text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

/* still client-side (fine) */
function Orb({ size }: { size: string }) {
  return (
    <div
      className={`${size} rounded-full`}
      style={{
        background: `
          radial-gradient(
            circle at 30% 25%,
            rgba(255,255,255,0.95),
            rgba(67,182,207,0.35) 20%,
            rgba(29,49,115,0.18) 55%,
            transparent 85%
          )
        `,
      }}
    />
  );
}