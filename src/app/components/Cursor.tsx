"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Dot (instant)
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }

      // Circle (smooth follow)
      if (circleRef.current) {
        circleRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          {
            duration: 400,
            fill: "forwards",
          }
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-600 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* big circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-600 rounded-full pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}