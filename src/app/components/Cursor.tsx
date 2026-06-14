"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mobile / touch devices मा cursor disable गर्ने
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const moveCursor = (e: PointerEvent) => {
      const { clientX, clientY } = e;

      // small dot (instant)
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }

      // big circle (smooth follow)
      if (circleRef.current) {
        circleRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          {
            duration: 350,
            fill: "forwards",
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }
        );
      }
    };

    window.addEventListener("pointermove", moveCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />

      {/* big circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-500 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}





// "use client";

// import { useEffect, useRef } from "react";

// export default function Cursor() {
//   const dotRef = useRef<HTMLDivElement>(null);
//   const circleRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       const { clientX, clientY } = e;

//       // Dot (instant)
//       if (dotRef.current) {
//         dotRef.current.style.left = `${clientX}px`;
//         dotRef.current.style.top = `${clientY}px`;
//       }

//       // Circle (smooth follow)
//       if (circleRef.current) {
//         circleRef.current.animate(
//           {
//             left: `${clientX}px`,
//             top: `${clientY}px`,
//           },
//           {
//             duration: 400,
//             fill: "forwards",
//           }
//         );
//       }
//     };

//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return (
//     <>
//       {/* small dot */}
//       <div
//         ref={dotRef}
//         className="fixed top-0 left-0 w-2 h-2 bg-cyan-600 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
//       />

//       {/* big circle */}
//       <div
//         ref={circleRef}
//         className="fixed top-0 left-0 w-8 h-8 border border-cyan-600 rounded-full pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2"
//       />
//     </>
//   );
// }