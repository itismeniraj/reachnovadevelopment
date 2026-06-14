"use client";

import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  enableScrollSpy?: boolean;
  scrollSpyOnce?: boolean;
}

export default function AnimatedCounter({
  end,
  duration = 2.5,
  suffix = "",
  prefix = "",
  separator = ",",
  enableScrollSpy = true,
  scrollSpyOnce = false, // ✅ IMPORTANT CHANGE
}: AnimatedCounterProps) {
  return (
    <>
      <CountUp
        end={end}
        duration={duration}
        separator={separator}
        enableScrollSpy={enableScrollSpy}
        scrollSpyOnce={scrollSpyOnce}
      />
      {suffix}
    </>
  );
}