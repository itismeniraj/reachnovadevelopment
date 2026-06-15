"use client";

import { ServiceItem } from "../../types/site";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
  totalServiceCards: number;
  progress: MotionValue<number>;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  item,
  index,
  totalServiceCards,
  progress,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate chronological progress splits per card step
  const startRange = index / totalServiceCards;
  const endRange = (index + 1) / totalServiceCards;

  // Initial drop point offset before scroll trigger execution
  const startingYPosition = isMobile ? 300 : 600;

  const y = useTransform(
    progress,
    [0, startRange, Math.min(1, endRange)],
    [startingYPosition, startingYPosition, 0],
  );

  // Strict Sequential Guard Loop:
  // Next card opacity remains completely hidden (0) until the current card
  // is nearly complete with its motion layout transit sequence.
  const mobileOpacity = useTransform(
    progress,
    [
      startRange,
      startRange + (endRange - startRange) * 0.45, // Holds invisible through 45% of its timeline range
      Math.min(1, endRange),
      1,
    ],
    [0, 0, 1, 1], // Becomes fully visible and holds solid '1' through all subsequent cards
  );

  const finalScale = 1 - (totalServiceCards - 1 - index) * 0.03;

  const scale = useTransform(
    progress,
    [endRange, endRange + 0.1],
    [1, finalScale],
  );

  const brightness = useTransform(
    progress,
    [endRange, endRange + 0.1],
    ["100%", "75%"],
  );

  if (!mounted) {
    return (
      <div
        className="w-full h-[420px] rounded-3xl border"
        style={{
          backgroundColor: "var(--services-card-bg)",
          borderColor: "var(--services-card-border)",
        }}
      />
    );
  }

  return (
    <motion.div
      style={{
        y: index === 0 ? 0 : y,
        scale: index === totalServiceCards - 1 ? 1 : scale,
        filter:
          index === totalServiceCards - 1
            ? "brightness(100%)"
            : `brightness(${brightness})`,

        // Apply strict sequential visibility rules to trailing components
        opacity: isMobile ? (index === 0 ? 1 : mobileOpacity) : 1,

        // Clean stacked overlap configuration
        marginTop: index === 0 ? 0 : "-420px",
        paddingTop: 0,

        backgroundColor: "var(--services-card-bg)",
        border: "1px solid var(--services-card-border)",
      }}
      className="w-full min-h-[420px] md:h-[460px] rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)] origin-top"
    >
      {/* IMAGE */}
      <div className="relative w-full md:w-1/2 h-60 md:h-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={index === 0}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to top right,
                var(--services-overlay),
                transparent
              )
            `,
          }}
        />
      </div>

      {/* CONTENT */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12"
        style={{
          backgroundColor: "var(--services-card-bg)",
        }}
      >
        <div>
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            style={{
              color: "var(--services-title)",
            }}
          >
            {item.title}
          </h3>

          <p
            className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
            style={{
              color: "var(--services-text)",
            }}
          >
            {item.description}
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-6 flex flex-wrap gap-2">
          {item.features.map((f, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-full border"
              style={{
                backgroundColor: "var(--services-feature-bg)",
                color: "var(--services-feature-text)",
                borderColor: "var(--services-feature-border)",
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// "use client";

// import { ServiceItem } from "../../types/site";
// import { motion, MotionValue, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// interface ServiceCardProps {
//   item: ServiceItem;
//   index: number;
//   totalServiceCards: number;
//   progress: MotionValue<number>;
// }

// export const ServiceCard: React.FC<ServiceCardProps> = ({
//   item,
//   index,
//   totalServiceCards,
//   progress,
// }) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const visibleHeaderGap = 28;

//   const startRange = index / totalServiceCards;
//   const endRange = (index + 1) / totalServiceCards;

//   const y = useTransform(
//     progress,
//     [0, startRange, Math.min(1, endRange)],
//     [800, 600, 0]
//   );

//   const finalScale = 1 - (totalServiceCards - 1 - index) * 0.03;

//   const scale = useTransform(
//     progress,
//     [endRange, endRange + 0.1],
//     [1, finalScale]
//   );

//   const brightness = useTransform(
//     progress,
//     [endRange, endRange + 0.1],
//     ["100%", "75%"]
//   );

//   if (!mounted) {
//     return (
//       <div className="w-full h-[420px] bg-white rounded-3xl border border-gray-100" />
//     );
//   }

//   return (
//     <motion.div
//       style={{
//         y: index === 0 ? 0 : y,
//         scale: index === totalServiceCards - 1 ? 1 : scale,
//         filter:
//           index === totalServiceCards - 1
//             ? "brightness(100%)"
//             : `brightness(${brightness})`,

//         marginTop: index === 0 ? 0 : "-420px",
//         paddingTop: 0,
//       }}
//       className="w-full min-h-[420px] md:h-[460px] bg-white rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)] border border-[#43B6CF]/20 origin-top">
//       {/* IMAGE SECTION (BALANCED) */}
//       <div className="relative w-full md:w-1/2 h-60 md:h-full">
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           priority={index === 0}
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, 50vw"
//         />

//         {/* soft overlay for premium look */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-[#1D3173]/20 to-transparent" />
//       </div>

//       {/* CONTENT SECTION */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 bg-white">

//         <div>
//           <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D3173] leading-tight">
//             {item.title}
//           </h3>

//           <p className="mt-4 text-sm sm:text-base md:text-lg text-[#1D3173]/70 leading-relaxed">
//             {item.description}
//           </p>
//         </div>

//         {/* FEATURES */}
//         <div className="mt-6 flex flex-wrap gap-2">
//           {item.features.map((f, i) => (
//             <span
//               key={i}
//               className="px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-[#43B6CF]/10 text-[#1D3173] border border-[#43B6CF]/20">
//               {f}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// yo lai na hataune

// import { ServiceItem } from "../../types/site";
// import { motion, MotionValue, useTransform } from "framer-motion";
// import Image from "next/image";

// interface ServiceCardProps {
//   item: ServiceItem;
//   index: number;
//   totalServiceCards: number;
//   progress: MotionValue<number>;
// }

// export const ServiceCard: React.FC<ServiceCardProps> = ({
//   item,
//   index,
//   totalServiceCards,
//   progress,
// }) => {
//   const topOffset = 150 + index * 24;
//   const finalScale = 1 - (totalServiceCards - 1 - index) * 0.04;

//   const startRange = index / totalServiceCards;
//   const endRange = (index + 1) / totalServiceCards;

//   const scale = useTransform(progress, [startRange, endRange], [1, finalScale]);
//   const brightness = useTransform(
//     progress,
//     [startRange, endRange],
//     ["100%", "70%"],
//   );

//   return (
//     <div
//       className="sticky w-full"
//       style={{
//         top: `${topOffset}px`,
//         paddingTop: `${index * 4}px`,
//       }}
//     >
//       <motion.div
//         style={{
//           scale: index === totalServiceCards - 1 ? 1 : scale,
//           filter:
//             index === totalServiceCards - 1
//               ? "brightness(100%)"
//               : `brightness(${brightness})`,
//         }}
//         className="w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[540px] bg-[#F8FBFF] rounded-[28px] flex flex-col lg:flex-row overflow-hidden origin-top border border-[#43B6CF]/20 shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)]">
//         <div
//           className="relative w-full lg:w-[45%] h-56 sm:h-72 md:h-80 lg:h-auto shrink-0">
//           <Image
//             src={item.image}
//             alt={item.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 42vw"
//             className="object-cover"
//             priority={index === 0}
//           />
//         </div>

//         <div className="p-5 sm:p-7 md:p-10 lg:p-12 flex flex-col flex-grow">
//           <div>
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D3173] tracking-tight mb-4">
//               {item.title}
//             </h3>
//             <p className="text-sm sm:text-base lg:text-lg text-[#1D3173]/70 leading-relaxed max-w-xl">
//               {item.description}
//             </p>
//           </div>

//           <div className="mt-6 flex flex-wrap  gap-2">
//             {item.features.map((feature, fIdx) => (
//               <ul key={fIdx}>
//                 <li
//                   className="bg-[#43B6CF]/15 text-[#1D3173] border border-[#43B6CF]/20 rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold"
//                 >
//                   {feature}
//                 </li>
//               </ul>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// import { ServiceItem } from "../../types/site";
// import { motion, MotionValue, useTransform } from "framer-motion";
// import Image from "next/image";

// interface ServiceCardProps {
//   item: ServiceItem;
//   index: number;
//   totalServiceCards: number;
//   progress: MotionValue<number>;
// }

// export const ServiceCard: React.FC<ServiceCardProps> = ({
//   item,
//   index,
//   totalServiceCards,
//   progress,
// }) => {
//   const topOffset = 150 + index * 24;
//   const finalScale = 1 - (totalServiceCards - 1 - index) * 0.04;

//   const startRange = index / totalServiceCards;
//   const endRange = (index + 1) / totalServiceCards;

//   const scale = useTransform(progress, [startRange, endRange], [1, finalScale]);
//   const brightness = useTransform(
//     progress,
//     [startRange, endRange],
//     ["100%", "70%"],
//   );

//   return (
//     <div
//       className="sticky w-full"
//       style={{
//         top: `${topOffset}px`,
//         paddingTop: `${index * 4}px`,
//       }}
//     >
//       <motion.div
//         style={{
//           scale: index === totalServiceCards - 1 ? 1 : scale,
//           filter:
//             index === totalServiceCards - 1
//               ? "brightness(100%)"
//               : `brightness(${brightness})`,
//         }}
//         className="w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[540px] bg-[#F8FBFF] rounded-[28px] flex flex-col lg:flex-row overflow-hidden origin-top border border-[#43B6CF]/20 shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)]">
//         <div
//           className="relative w-full lg:w-[45%] h-56 sm:h-72 md:h-80 lg:h-auto shrink-0">
//           <Image
//             src={item.image}
//             alt={item.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 42vw"
//             className="object-cover"
//             priority={index === 0}
//           />
//         </div>

//         <div className="p-5 sm:p-7 md:p-10 lg:p-12 flex flex-col flex-grow">
//           <div>
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D3173] tracking-tight mb-4">
//               {item.title}
//             </h3>
//             <p className="text-sm sm:text-base lg:text-lg text-[#1D3173]/70 leading-relaxed max-w-xl">
//               {item.description}
//             </p>
//           </div>

//           <div className="mt-6 flex flex-wrap  gap-2">
//             {item.features.map((feature, fIdx) => (
//               <ul key={fIdx}>
//                 <li
//                   className="bg-[#43B6CF]/15 text-[#1D3173] border border-[#43B6CF]/20 rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold"
//                 >
//                   {feature}
//                 </li>
//               </ul>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };
