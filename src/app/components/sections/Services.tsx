import ServicesSection from "../client/services/ServicesSection";
import { siteData } from "../../data/siteData";

export default function Services() {
  const { services } = siteData;

  return <ServicesSection services={services} />;
}



// "use client";

// import { useRef } from "react";
// import { useScroll } from "framer-motion";
// import { siteData } from "../../data/siteData";
// import { ServiceCard } from "../ui/ServiceCard";
// import FadeUp from "../animations/FadeUp";

// export default function ServicesSection() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const { services } = siteData;

//   return (
//     <section id="services" className="w-full bg-white py-20 px-4 md:px-8">

//       {/* HEADER (SAFE) */}
//       <div className="max-w-4xl mx-auto text-center mb-16">
//         <FadeUp>

//         <span className="px-4 py-2 text-xs font-bold uppercase rounded-full bg-[#43B6CF]/10 text-[#1D3173] border border-[#43B6CF]/20">
//           {services.badge}
//         </span>
//         </FadeUp>

//         <FadeUp>

//         <h2 className="mt-6 text-3xl sm:text-5xl font-black text-[#1D3173]">
//           {services.title}{" "}
//           <span className="text-[#43B6CF]">{services.highlight}</span>
//         </h2>

//         </FadeUp>

//         <FadeUp>
//         <p className="mt-5 text-[#1D3173]/70">
//           {services.description}
//         </p>
//         </FadeUp>
//       </div>

//       {/* SCROLL AREA */}
//       <div
//         ref={containerRef}
//         className="relative h-[260vh] max-w-5xl mx-auto"
//       >
//         <div className="sticky top-[110px] flex flex-col items-center">

//           {services.items.map((item, index) => (
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


















// yo lai na hataune 

// "use client";

// import { useRef } from "react";
// import { useScroll } from "framer-motion";
// import { SiteData } from "../../types/site"; // Adjust paths accordingly
// import { siteData } from "../../data/siteData";
// import { ServiceCard } from "../ui/ServiceCard";
// import FadeUp from "../animations/FadeUp";

// export default function ServicesSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { services }: SiteData = siteData;

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <section id="services" className="w-full bg-white min-h-[200px] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
//       {/* Header Container Area */}
//       <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-16 lg:mb-20">
//         <FadeUp>
//         <span className="inline-flex px-4 py-2 bg-[#43B6CF]/10 border border-[#43B6CF]/20 text-[#1D3173] font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full">
//           {services.badge}
//         </span>
//         </FadeUp>

//         <FadeUp>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1D3173] mt-5 mb-6 tracking-tight">
//           {services.title}{" "}
//           <span className="text-[#43B6CF]">
//             {services.highlight}
//           </span>
//         </h2>
//         </FadeUp>

//         <FadeUp>
//         <p className="text-base sm:text-lg md:text-xl text-[#1D3173]/75 max-w-2xl mx-auto leading-relaxed">
//           {services.description}
//         </p>
//         </FadeUp>
//       </div>


//       <div
//       ref={containerRef}
//       className="relative max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12 lg:gap-16">
//         {services.items.map((item, index) => (
//           <ServiceCard
//             key={index}
//             item={item}
//             index={index}
//             totalServiceCards={services.items.length}
//             progress={scrollYProgress}
//           />
//         ))}
//       </div>

//       <div className="h-[10vh]" />
//     </section>
//   );
// }









// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { siteData } from "../../data/siteData";
// import type { ServiceItem } from "../../types/site";
// import FadeUp from "../animations/FadeUp";

// export default function ServicesSection() {
//   const { services } = siteData;
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const total = services.items.length;

//   return (
//     <section id="services" className="bg-white">
//       <div ref={containerRef} className="relative">

//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto pt-16 pb-10 px-4">
//           <FadeUp>
//             <span className="text-sm font-semibold text-[#43B6CF] uppercase tracking-widest">
//               {services.badge}
//             </span>

//             <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
//               <span className="text-[#43B6CF]">{services.title}</span>{" "}
//               <span className="text-[#1D3173]">{services.highlight}</span>
//             </h2>

//             <p className="text-gray-600 mt-4 text-sm md:text-base">
//               {services.description}
//             </p>
//           </FadeUp>
//         </div>

//         {/* STACK */}
//         <div className="relative flex flex-col items-center px-4 pb-32">

//           {services.items.map((item: ServiceItem, index: number) => {
//             const start = index / total;
//             const end = (index + 1) / total;

//             // Smooth motion
//             const y = useTransform(scrollYProgress, [start, end], [index * 25, 0]);
//              const x = useTransform(scrollYProgress, [start, end], [index * 12 , 0]);
             
//             // const scale = useTransform(scrollYProgress, [start, end], [0.85, 1]);
//             // const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.6, 1, 1]);
//             // const rotate = useTransform(scrollYProgress, [start, end], [6, 0]); //  tilt effect



//             // const opacity = 1;

//             return (
//               <motion.div
//                 key={index}
//                 style={{
//                   y,
//                    x,
//                   // scale,
//                   // rotate,
//                   //  opacity,
//                   zIndex: index + 1,
//                     top: `${112 + index * 24}px`, // 112px = top-28

//                   // transformOrigin: "top left"
//                 }}
//                  className="sticky w-full flex justify-center">
//                 <div className={` w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 border bg-white border-slate-200 rounded-xl overflow-hidden shadow-sm p-5 sm:p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl`}>

//                   {/* IMAGE */}
//                   <div className="relative h-[220px] sm:h-[300px] md:h-full min-h-[280px] rounded-xl overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover transition-transform duration-700 hover:scale-105"
//                     />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="flex flex-col justify-center">
//                     <h3 className="text-2xl md:text-3xl font-bold text-[#1D3173]">
//                       {item.title}
//                     </h3>

//                     <p className="text-gray-600 mt-4 text-sm md:text-base leading-7">
//                       {item.description}
//                     </p>

//                     <ul className="mt-6 space-y-3">
//                       {item.features.map((f, i) => (
//                         <li
//                           key={i}
//                           className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
//                         >
//                           <span className="mt-2 w-2 h-2 bg-[#43B6CF] rounded-full shrink-0" />
//                           {f}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }








// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { siteData } from "../../data/siteData";
// import type { ServiceItem } from "../../types/site";
// import FadeUp from "../animations/FadeUp";

// export default function ServicesSection() {
//   const { services } = siteData;

//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <section id="services" className="bg-white relative overflow-hidden">
//       <div ref={containerRef} className="relative h-[320vh]">

//         {/* HEADER */}
//         <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-10">
//           <FadeUp>
//             <div className="text-center max-w-3xl mx-auto px-4">
//               <span className="text-sm font-semibold text-[#43B6CF] uppercase tracking-widest">
//                 {services.badge}
//               </span>

//               <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
//                 <span className="text-[#43B6CF]">{services.title}</span>{" "}
//                 <span className="text-[#1D3173]">{services.highlight}</span>
//               </h2>

//               <p className="text-gray-600 mt-4 text-base md:text-lg">
//                 {services.description}
//               </p>
//             </div>
//           </FadeUp>
//         </div>

//         {/* BACKGROUND GLOW */}
//         <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#43B6CF]/10 blur-3xl rounded-full" />

//         {/* STACK AREA */}
//         <div className="relative mt-10">

//           {services.items.map((item: ServiceItem, index: number) => {
//             const total = services.items.length;

//             const start = index / total;
//             const end = (index + 1) / total;

//             const y = useTransform(scrollYProgress, [start, end], [0, -200]);
//             const scale = useTransform(scrollYProgress, [start, end], [1, 0.82]);
//             const rotate = useTransform(scrollYProgress, [start, end], [0, -3]);
//             const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

//             return (
//               <motion.div
//                 key={index}
//                 style={{ y, scale, rotate, opacity }}
//                 className="sticky top-[140px] flex justify-center px-4 mb-24"
//               >

//                 {/* CARD */}
//                 <div className="relative w-full max-w-5xl">

//                   {/* glow layer behind */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#43B6CF]/20 to-[#1D3173]/10 blur-2xl rounded-3xl scale-105" />

//                   <div className="relative grid md:grid-cols-2 gap-10 bg-white/70 backdrop-blur-2xl border border-white shadow-2xl rounded-3xl p-6 md:p-10">

//                     {/* IMAGE */}
//                     <div className="relative h-[260px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg">
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         fill
//                         className="object-cover scale-105 hover:scale-110 transition duration-700"
//                       />
//                     </div>

//                     {/* CONTENT */}
//                     <div className="flex flex-col justify-center">
//                       <h3 className="text-2xl md:text-3xl font-bold text-[#1D3173]">
//                         {item.title}
//                       </h3>

//                       <p className="text-gray-600 mt-4 leading-relaxed">
//                         {item.description}
//                       </p>

//                       <ul className="mt-6 space-y-3">
//                         {item.features.map((f, i) => (
//                           <li key={i} className="flex items-center gap-3 text-gray-700">
//                             <span className="w-2.5 h-2.5 bg-[#43B6CF] rounded-full shadow-md" />
//                             {f}
//                           </li>
//                         ))}
//                       </ul>

//                       {/* small AI-style tag */}
//                       <div className="mt-6 inline-flex">
//                         <span className="text-xs px-3 py-1 rounded-full bg-[#43B6CF]/10 text-[#43B6CF] border border-[#43B6CF]/20">
//                           AI Enhanced Service
//                         </span>
//                       </div>
//                     </div>

//                   </div>
//                 </div>

//               </motion.div>
//             );
//           })}
//         </div>

//         <div className="h-[40vh]" />
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { siteData } from "../../data/siteData";
// import FadeUp from "../animations/FadeUp";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ServicesSection() {
//   const { services } = siteData;
//   const [active, setActive] = useState(0);

//   const currentService = services.items[active];

//   return (
//     <section
//       id="services"
//       className="py-14 md:py-20 bg-[#F5FBFD] overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <FadeUp>
//             <div>
//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#43B6CF]">
//                 {services.badge}
//               </span>

//               <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1D3173]">
//                 {services.title}
//                 <br />
//                 <span className="text-[#43B6CF]">
//                   {services.highlight}
//                 </span>
//               </h2>

//               <p className="mt-4 text-sm md:text-base text-slate-600 max-w-lg">
//                 {services.description}
//               </p>

//               {/* SERVICES LIST */}
//               <div className="mt-8 relative flex flex-col gap-3">
//   {services.items.map((service, index) => {
//     const isActive = active === index;

//     return (
//       <motion.button
//         key={service.id}
//         onClick={() => setActive(index)}
//         initial={false}
//         animate={{
//           scale: isActive ? 1 : 0.96,
//           y: isActive ? 0 : -index * 2,
//         }}
//         transition={{
//           duration: 0.35,
//         }}
//         className={`
//           relative
//           w-full
//           text-left
//           rounded-2xl
//           border
//           px-5
//           py-4
//           backdrop-blur-sm
//           transition-all
//           duration-300
//           ${
//             isActive
//               ? "bg-white border-[#43B6CF] shadow-[0_20px_50px_rgba(67,182,207,0.15)] z-20"
//               : "bg-white/80 border-slate-200 hover:border-[#43B6CF]/50"
//           }
//         `}
//       >
//         <div className="flex items-start gap-4">

//           <div
//             className={`
//               h-10
//               w-10
//               rounded-xl
//               flex
//               items-center
//               justify-center
//               text-sm
//               font-bold
//               shrink-0
//               ${
//                 isActive
//                   ? "bg-[#43B6CF] text-white"
//                   : "bg-slate-100 text-slate-500"
//               }
//             `}
//           >
//             {String(index + 1).padStart(2, "0")}
//           </div>

//           <div>
//             <h3 className="font-semibold text-[#1D3173] text-sm md:text-base">
//               {service.title}
//             </h3>

//             <AnimatePresence>
//               {isActive && (
//                 <motion.p
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="mt-2 text-sm text-slate-600 overflow-hidden"
//                 >
//                   {service.description}
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </motion.button>
//     );
//   })}
// </div>

//               <button className=" mt-8  px-6  py-3  rounded-full  bg-[#1D3173]  text-white  text-sm  font-medium  hover:bg-[#15255A]  transition">
//                 Learn More
//               </button>
//             </div>
//           </FadeUp>

//           {/* RIGHT IMAGE SECTION */}
//           <FadeUp>
//             <div className="relative w-full max-w-[520px] mx-auto mt-10 lg:mt-0">
//               {/* Main Image */}
//              <div className="relative h-[380px] sm:h-[420px] md:h-[500px] rounded-[28px] overflow-hidden shadow-2xl">

//   <AnimatePresence mode="wait">
//     <motion.div
//       key={currentService.id}
//       initial={{
//         opacity: 0,
//         scale: 1.08,
//       }}
//       animate={{
//         opacity: 1,
//         scale: 1,
//       }}
//       exit={{
//         opacity: 0,
//         scale: 0.96,
//       }}
//       transition={{
//         duration: 0.5,
//       }}
//       className="absolute inset-0"
//     >
//       <Image
//         src={currentService.image}
//         alt={currentService.title}
//         fill
//         className="object-cover"
//       />
//     </motion.div>
//   </AnimatePresence>

// </div>

//               {/* TOP CARD */}
//               <div
//                 className=" absolute top-4 left-2 bg-white rounded-xl p-3 shadow-lg" >
//                 <p className="text-[11px] text-slate-500">
//                   Services Available
//                 </p>

//                 <h3 className="text-2xl font-bold text-[#1D3173]">
//                   {services.items.length}
//                 </h3>
//               </div>

//               {/* MIDDLE CARD */}
//               <div
//                 className="absolute top-24 -left-2 md:-left-10 bg-white rounded-xl p-3 shadow-lg w-[180px]">
//                 <h4 className="font-semibold text-sm text-[#1D3173] line-clamp-2">
//                   {currentService.title}
//                 </h4>

//                 <div className="mt-3 space-y-2">
//                   {currentService.features
//                     .slice(0, 3)
//                     .map((_, i) => (
//                       <div
//                         key={i}
//                         className="h-2 rounded-full bg-[#43B6CF]/20"
//                       />
//                     ))}
//                 </div>
//               </div>

//               {/* BOTTOM RIGHT CARD */}
//               <div
//                 className=" absolute bottom-0 right-0 bg-white rounded-2xl p-4 shadow-xl w-[220px] md:w-[240px]">
//                 <h4 className="font-semibold text-[#1D3173] text-sm">
//                   Key Features
//                 </h4>

//                 <div className="mt-3 space-y-2">
//                   {currentService.features.map((feature) => (
//                     <div
//                       key={feature}
//                       className=" flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-xs">
//                       <span>{feature}</span>

//                       <span className="text-[#43B6CF] font-bold">
//                         +
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </FadeUp>

//         </div>
//       </div>
//     </section>
//   );
// }




























// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { siteData } from "../../data/siteData";
// import type { ServiceItem } from "../../types/site";
// import FadeUp from "../animations/FadeUp";

// //component

// export default function ServicesSection() {
//   const { services } = siteData;

//   const [activeIndex, setActiveIndex] = useState(0);

//   const activeService: ServiceItem =
//     services.items[activeIndex];

//   const next = () => {
//     setActiveIndex((prev) =>
//       prev === services.items.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prev = () => {
//     setActiveIndex((prev) =>
//       prev === 0 ? services.items.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section id="services" className="w-full py-16 bg-white">
      
//       <div className="max-w-6xl mx-auto px-4">

//        {/* header */}

//         <FadeUp>
//         <div className="text-center mb-10">
//           <span className="text-sm font-semibold text-[#43B6CF] uppercase tracking-wider">
//             {services.badge}
//           </span>

//           <h2 className="text-3xl md:text-4xl font-bold mt-2">
//             <span className="text-[#43B6CF]">
//               {services.title}
//             </span>{" "}
//             <span className="text-[#1D3173]">
//               {services.highlight}
//             </span>
//           </h2>

//           <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//             {services.description}
//           </p>
//         </div>
//         </FadeUp>


//         {/* CONTENT */}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//           {/* LEFT IMAGE */}

//           <FadeUp>
//           <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
//             <Image
//               src={activeService.image}
//               alt={activeService.title}
//               fill
//               className="object-cover transition-all duration-500"
//             />
//           </div>
//           </FadeUp>

//           {/* RIGHT CARD */}

//           <FadeUp>
//           <div className="bg-white border rounded-2xl shadow-md p-6 md:p-8">

//             <h3 className="text-2xl font-semibold text-[#1D3173]">
//               {activeService.title}
//             </h3>

//             <p className="text-gray-600 mt-3 leading-relaxed">
//               {activeService.description}
//             </p>

//             {/* FEATURES */}

//             <ul className="mt-5 space-y-2">
//               {activeService.features.map((feature, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center gap-2 text-gray-700"
//                 >
//                   <span className="w-2 h-2 bg-[#1D3173] rounded-full" />
//                   {feature}
//                 </li>
//               ))}
//             </ul>

//             {/* CONTROLS */}

//             <div className="flex items-center justify-between mt-6">

//               <button
//                 onClick={prev}
//                 className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
//               >
//                 Prev
//               </button>

//               {/* DOTS */}
              
//               <div className="flex gap-2">
//                 {services.items.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveIndex(idx)}
//                     className={`w-2.5 h-2.5 rounded-full transition ${
//                       idx === activeIndex
//                         ? "bg-[#1D3173]"
//                         : "bg-gray-300"
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={next}
//                 className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
//               >
//                 Next
//               </button>

//             </div>
//           </div>
//           </FadeUp>
//         </div>
//       </div>
//     </section>
//   );
// }







// "use client";

// import { useRef, useState } from "react";
// import Image from "next/image";
// import {
// motion,
// AnimatePresence,
// useScroll,
// useTransform,
// useMotionValueEvent,
// } from "framer-motion";

// import {
// BadgeCheck,
// Globe,
// Code2,
// Paintbrush,
// Rocket,
// } from "lucide-react";

// import Container from "../ui/Container";
// import FadeUp from "../animations/FadeUp";
// import { siteData } from "../../data/siteData";

// export default function ServiceSection() {
// const { services } = siteData;

// const [active, setActive] = useState(0);
// const containerRef = useRef<HTMLDivElement>(null);

// const { scrollYProgress } = useScroll({
// target: containerRef,
// offset: ["start start", "end end"],
// });

// const totalItems = services.items.length;

// const activeIndexTransform = useTransform(
// scrollYProgress,
// [0, 1],
// [0, totalItems - 1]
// );

// useMotionValueEvent(activeIndexTransform, "change", (latest) => {
// const nextIndex = Math.min(
// totalItems - 1,
// Math.max(0, Math.floor(latest + 0.35))
// );


// setActive(nextIndex);


// });

// const getIcon = (icon: string) => {
// switch (icon) {
// case "visa":
// return BadgeCheck;
// case "it":
// return Globe;
// case "code":
// return Code2;
// case "design":
// return Paintbrush;
// case "global":
// return Rocket;
// default:
// return Globe;
// }
// };

// return (
// <section
// id="services"
// ref={containerRef}
// className="relative bg-[#f8fbff]"
// style={{
// height: `${services.items.length * 140}vh`,
// }}
// > <div className="sticky top-0 h-screen flex items-center overflow-hidden py-10 lg:py-16"> <Container> <FadeUp>
// {/* Header */} <div className="max-w-4xl mx-auto text-center"> <div className="inline-flex rounded-full bg-[#43B6CF]/10 px-4 py-1.5 text-xs font-semibold text-[#43B6CF]">
// {services.badge} </div>

// ```
//           <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-[#1D3173]">
//             {services.title}
//             <span className="block text-[#43B6CF] mt-1">
//               {services.highlight}
//             </span>
//           </h2>

//           <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
//             {services.description}
//           </p>
//         </div>

//         {/* Content */}
//         <div className="mt-16 lg:mt-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 xl:gap-20 items-center">
//           {/* Image */}
//           <div className="relative w-full h-[420px] md:h-[500px] lg:h-[580px] xl:h-[680px] rounded-[36px] overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.18)]">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={active}
//                 initial={{ opacity: 0, scale: 1.08 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="absolute inset-0"
//               >
//                 <Image
//                   src={
//                     services.items[active]?.image ||
//                     "/images/default.jpg"
//                   }
//                   alt={services.items[active]?.title}
//                   fill
//                   priority
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </motion.div>
//             </AnimatePresence>

//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

//             <div className="absolute bottom-0 z-20 p-8 md:p-10 pb-12 md:pb-14 text-white">
//               <p className="text-xs tracking-[0.3em] uppercase text-cyan-300">
//                 Featured Service
//               </p>

//               <h3 className="mt-3 text-2xl md:text-3xl xl:text-4xl font-bold">
//                 {services.items[active]?.title}
//               </h3>

//               <p className="mt-4 max-w-md text-white/80 leading-7">
//                 {services.items[active]?.description}
//               </p>
//             </div>

//             <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/20 blur-[120px]" />
//           </div>

//           {/* Card */}
//           <div className="w-full">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={active}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -15 }}
//                 transition={{ duration: 0.4 }}
//                 className="bg-white/90 backdrop-blur-md rounded-[32px] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-10"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-[#43B6CF]/10 flex items-center justify-center">
//                   {(() => {
//                     const Icon = getIcon(
//                       services.items[active]?.icon
//                     );

//                     return (
//                       <Icon className="w-6 h-6 text-[#43B6CF]" />
//                     );
//                   })()}
//                 </div>

//                 <h3 className="mt-6 text-2xl lg:text-3xl font-bold leading-tight text-[#1D3173]">
//                   {services.items[active]?.title}
//                 </h3>

//                 <p className="mt-4 text-slate-600 leading-7">
//                   {services.items[active]?.description}
//                 </p>

//                 <div className="mt-8 flex flex-wrap gap-3">
//                   {services.items[active]?.features?.map(
//                     (feature, i) => (
//                       <span
//                         key={i}
//                         className="px-4 py-2 rounded-full bg-[#43B6CF]/10 text-[#43B6CF] text-sm font-medium"
//                       >
//                         {feature}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Progress */}
//             <div className="flex gap-2 mt-8">
//               {services.items.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => {
//                     if (!containerRef.current) return;

//                     const totalHeight =
//                       containerRef.current.scrollHeight -
//                       window.innerHeight;

//                     const target =
//                       containerRef.current.offsetTop +
//                       totalHeight *
//                         (i / (totalItems - 1));

//                     window.scrollTo({
//                       top: target,
//                       behavior: "smooth",
//                     });
//                   }}
//                   className="flex-1 h-1 rounded-full bg-slate-200 overflow-hidden"
//                 >
//                   <motion.div
//                     animate={{
//                       width:
//                         active >= i ? "100%" : "0%",
//                     }}
//                     transition={{ duration: 0.4 }}
//                     className="h-full bg-[#43B6CF]"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </FadeUp>
//     </Container>
//   </div>
// </section>

// );
// }
