"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { ServiceCard } from "../../ui/ServiceCard";
import FadeUp from "../../animations/FadeUp";

export default function ServicesSection({ services }: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      className="w-full py-20 px-4 md:px-8"
      style={{
        backgroundColor: "var(--services-bg)",
      }}
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <FadeUp>
          <span
            className="px-4 py-2 text-xs font-bold uppercase rounded-full border"
            style={{
              backgroundColor: "var(--services-badge-bg)",
              color: "var(--services-badge-text)",
              borderColor: "var(--services-badge-border)",
            }}
          >
            {services.badge}
          </span>
        </FadeUp>

        <FadeUp>
          <h2
            className="mt-6 text-3xl sm:text-5xl font-black"
            style={{
              color: "var(--services-title)",
            }}
          >
            {services.title}{" "}
            <span
              style={{
                color: "var(--services-accent)",
              }}
            >
              {services.highlight}
            </span>
          </h2>
        </FadeUp>

        <FadeUp>
          <p
            className="mt-5"
            style={{
              color: "var(--services-text)",
            }}
          >
            {services.description}
          </p>
        </FadeUp>
      </div>

      {/* SCROLL AREA */}
      <div
        ref={containerRef}
        className="relative h-[260vh] max-w-5xl mx-auto"
      >
        <div className="sticky top-[110px] flex flex-col items-center">
          {services.items.map((item: any, index: number) => (
            <ServiceCard
              key={item.id}
              item={item}
              index={index}
              totalServiceCards={services.items.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}




// "use client";

// import { useRef } from "react";
// import { useScroll } from "framer-motion";
// import { ServiceCard } from "../../ui/ServiceCard";
// import FadeUp from "../../animations/FadeUp";

// export default function ServicesSection({ services }: any) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <section
//       id="services"
//       className="w-full py-20 px-4 md:px-8"
//       style={{
//         backgroundColor: "var(--services-bg)",
//       }}
//     >
//       {/* HEADER */}
//       <div className="max-w-4xl mx-auto text-center mb-16">
//         <FadeUp>
//           <span
//             className="px-4 py-2 text-xs font-bold uppercase rounded-full border"
//             style={{
//               backgroundColor: "var(--services-badge-bg)",
//               color: "var(--services-badge-text)",
//               borderColor: "var(--services-badge-border)",
//             }}
//           >
//             {services.badge}
//           </span>
//         </FadeUp>

//         <FadeUp>
//           <h2
//             className="mt-6 text-3xl sm:text-5xl font-black"
//             style={{
//               color: "var(--services-title)",
//             }}
//           >
//             {services.title}{" "}
//             <span
//               style={{
//                 color: "var(--services-accent)",
//               }}
//             >
//               {services.highlight}
//             </span>
//           </h2>
//         </FadeUp>

//         <FadeUp>
//           <p
//             className="mt-5"
//             style={{
//               color: "var(--services-text)",
//             }}
//           >
//             {services.description}
//           </p>
//         </FadeUp>
//       </div>

//       {/* SCROLL AREA */}
//       <div
//         ref={containerRef}
//         className="relative h-[260vh] max-w-5xl mx-auto"
//       >
//         <div className="sticky top-[110px] flex flex-col items-center">
//           {services.items.map((item: any, index: number) => (
//             <ServiceCard
//               key={item.id}
//               item={item}
//               index={index}
//               totalServiceCards={services.items.length}
//               progress={scrollYProgress}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }