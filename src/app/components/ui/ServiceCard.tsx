"use client";

import { ServiceItem } from "../../types/site";
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
  useAnimationControls,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
  totalServiceCards: number;
  progress: MotionValue<number>;
}

// Global simple registry to synchronize touch events sequentially across mobile cards
const mobileCardRegistry = {
  activeCardIndex: 1, // Card 0 is instantly visible; Card 1 waits for input
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  item,
  index,
  totalServiceCards,
  progress,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileStacked, setIsMobileStacked] = useState(false);

  // Setup motion tracking values and animation states for touch handling
  const dragY = useMotionValue(0);
  const controls = useAnimationControls();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop setup values
  const startRange = index / totalServiceCards;
  const endRange = (index + 1) / totalServiceCards;
  const desktopStartingY = 600;

  const desktopY = useTransform(
    progress,
    [0, startRange, Math.min(1, endRange)],
    [desktopStartingY, desktopStartingY, 0],
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

  // Mobile gesture mapping engine:
  // Card starts lowered at 340px offset. As the user drags upward towards 0, opacity scales to 1.
  const mobileOpacityRange = useTransform(dragY, [340, 60], [0, 1]);

  const handleDragEnd = async (_event: any, info: any) => {
    // Check if the gesture meets velocity or distance thresholds to lock into the stack
    if (info.offset.y < -100 || info.velocity.y < -150) {
      await controls.start({
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      });
      setIsMobileStacked(true);

      // Unlock the gesture interaction for the next card below this one
      mobileCardRegistry.activeCardIndex = index + 1;
    } else {
      // Spring back out of view if the gesture wasn't strong enough
      controls.start({
        y: 340,
        transition: { type: "spring", stiffness: 200, damping: 20 },
      });
    }
  };

  // Reset parameters cleanly if viewport switches or resets
  useEffect(() => {
    if (isMobile && index > 0 && !isMobileStacked) {
      controls.set({ y: 340 });
    } else {
      controls.set({ y: 0 });
    }
  }, [isMobile, controls, index, isMobileStacked]);

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

  // Determine whether this card is currently allowed to accept user slide-up input
  const canDragOnMobile =
    isMobile &&
    index === mobileCardRegistry.activeCardIndex &&
    !isMobileStacked;

  return (
    <motion.div
      drag={canDragOnMobile ? "y" : false}
      dragConstraints={{ top: 0, bottom: 340 }}
      dragElastic={{ top: 0.05, bottom: 0.1 }}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      animate={controls}
      style={{
        // Use gesture values for mobile touch, fallback to desktop scroll transformations
        y: isMobile ? undefined : index === 0 ? 0 : desktopY,
        _dragY: isMobile ? dragY : undefined,

        scale: isMobile ? 1 : index === totalServiceCards - 1 ? 1 : scale,
        filter: isMobile
          ? "brightness(100%)"
          : index === totalServiceCards - 1
            ? "brightness(100%)"
            : `brightness(${brightness})`,

        // Base Visibility: Card 0 is fully visible, others fade in cleanly using gesture calculations
        opacity: isMobile
          ? index === 0
            ? 1
            : isMobileStacked
              ? 1
              : mobileOpacityRange
          : 1,

        marginTop: index === 0 ? 0 : "-420px",
        paddingTop: 0,
        touchAction: isMobile ? "pan-x" : "auto",

        backgroundColor: "var(--services-card-bg)",
        border: "1px solid var(--services-card-border)",
      }}
      className={`w-full min-h-[420px] md:h-[460px] rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-[0_25px_60px_-20px_rgba(29,49,115,0.25)] origin-top ${
        canDragOnMobile ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="relative w-full md:w-1/2 h-60 md:h-full select-none pointer-events-none">
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
            background: `linear-gradient(to top right, var(--services-overlay), transparent)`,
          }}
        />
      </div>

      {/* CONTENT */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 select-none"
        style={{
          backgroundColor: "var(--services-card-bg)",
        }}
      >
        <div>
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "var(--services-title)" }}
          >
            {item.title}
          </h3>

          <p
            className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: "var(--services-text)" }}
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
