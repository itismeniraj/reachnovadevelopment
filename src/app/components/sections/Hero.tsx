// import HeroSwiper from "../hero/HeroSwiper";


// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       <HeroSwiper />
//     </section>
//   );
// }


import HeroSwiper from "../client/hero/HeroSwiper";
import { siteData } from "../../data/siteData";

export default function HeroSection() {
  const { hero } = siteData;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroSwiper hero={hero} /> 
    </section>
  );
}








// import Image from "next/image";
// import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

// import FadeUp from "../animations/FadeUp";
// import { siteData } from "../../data/siteData";
// import Container from "../ui/Container";

// export default function HeroSection() {
//   const { hero } = siteData;

//   return (
//     <section className="relative min-h-screen overflow-hidden">

//       {/* FULL BACKGROUND IMAGE */}
//       <div className="absolute inset-0">
//         <Image
//           src={hero.image}
//           alt={hero.heading}
//           fill
//           priority
//           className="object-cover"
//         />

//         <div className="absolute left-0 top-0 h-full w-[50%] bg-linear-to-r from-white via-white/80 via-50% to-transparent"/>
//       </div>

//       {/* CONTENT */}
//       <Container >



//       <div className="relative z-20 flex min-h-screen items-center">

//         <div className="max-w-2xl">

//           {/* BADGE */}
//           <FadeUp
//             duration={0.9}
//             className="mb-5 flex items-center gap-3"
//           >
//             <>
//               <Sparkles className="h-4 w-4 text-[#43B6CF]" />

//               <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#1D3173]">
//                 {hero.badge}
//               </p>
//             </>
//           </FadeUp>

//           {/* HEADING */}
//           <FadeUp
//             delay={0.1}
//             duration={0.9}
//           >
//             <h1 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#1D3173]">
//               {hero.heading}
//             </h1>
//           </FadeUp>

//           <FadeUp
//             delay={0.1}
//             duration={0.9}
//           >
//             <h1 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-light leading-[1.02] tracking-[-0.05em] text-[#1D3173]">
//               {hero.heading1}
//             </h1>
//           </FadeUp>

//           <FadeUp
//             delay={0.1}
//             duration={0.9}
//           >
//             <h1 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#1D3173]">
//               {hero.heading2}
//             </h1>
//           </FadeUp>

//           {/* SUBTEXT */}
//           <FadeUp
//             delay={0.2}
//             duration={0.8}
//           >
//             <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-slate-700">
//               {hero.subtext}
//             </p>
//           </FadeUp>

//           {/* FEATURES */}
//           <div className="mt-8 flex flex-wrap gap-3">
//             {hero.features.map((item, index) => (
//               <FadeUp
//                 key={index}
//                 delay={0.2}
//                 duration={0.9}
//               >
//                 <div className="flex items-center gap-2 rounded-full border-slate-200 bg-white/90 px-4 py-2 text-xs sm:text-sm text-slate-700">
//                   <CheckCircle2 className="h-4 w-4 text-[#43B6CF]" />
//                   {item}
//                 </div>
//               </FadeUp>
//             ))}
//           </div>

//           {/* BUTTONS */}
//           <FadeUp
//             delay={0.5}
//             duration={0.9}
//           >
//             <div className="mt-10 flex flex-col gap-3 sm:flex-row">

//               {/* PRIMARY */}
//               <button className="flex items-center justify-center gap-2 rounded-full bg-[#43B6CF] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1D3173]">
//                 {hero.cta.primary}
//                 <ArrowRight className="h-4 w-4" />
//               </button>

//               {/* SECONDARY */}
//               <button className="rounded-full border border-[#1D3173]/20 bg-white/70 px-7 py-3 text-sm font-semibold text-[#1D3173] backdrop-blur transition hover:bg-white">
//                 {hero.cta.secondary} ↗
//               </button>

              

//             </div>
//           </FadeUp>

//           {/* STATS */}
//           <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 gap-4">
//             {hero.stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="rounded-xl border border-slate-200 bg-white p-4 text-center"
//               >
//                 <h3 className="text-xl sm:text-2xl font-black text-[#1D3173]">
//                   {stat.number}
//                   <span className="text-[#43B6CF]">+</span>
//                 </h3>

//                 <p className="mt-1 text-xs text-slate-500">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//       </Container>
//     </section>
//   );
// }









// "use client";

// import Image from "next/image";
// import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
// import { motion } from "framer-motion";
// import { siteData } from "../../data/siteData";

// export default function HeroSection() {
//   const { hero } = siteData;

//   return (
//     <section className="relative min-h-screen overflow-hidden">

//       {/* FULL BACKGROUND IMAGE */}
//       <div className="absolute inset-0">
//         <Image
//           src={hero.image}
//           alt={hero.heading}
//           fill
//           priority
//           className="object-cover"
//         />

//         {/* DARK OVERLAY */}
//         {/* <div className="absolute inset-0 bg-black/20" /> */}

//         {/* LEFT SIDE WHITE + BLUE GRADIENT */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-[10%] to-transparent" /> */}

//         {/* LEFT SIDE WHITE GRADIENT */}
//         <div className="absolute left-0 top-0 h-full w-[65%] bg-linear-to-r from-white via-white/80 via-50% to-transparent"/>

//         {/* BOTTOM LEFT SOFT GLOW */}

//         {/* <div className="absolute bottom-[-80px] left-[-60px] h-[320px] w-[320px] rounded-full bg-white blur-[120px]" /> */}



//         {/* <div className="absolute left-0 top-0 h-full w-[30%] bg-white/40 blur-3xl" /> */}

//         {/* EXTRA SMALL GLOW */}
//         {/* <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-white blur-3xl" /> */}

//       </div>

//       {/* CONTENT */}
//       <div className="relative z-20 flex min-h-screen items-center px-10 sm:px-16 lg:px-24 xl:px-32">

//         <div className="max-w-2xl">

//           {/* BADGE */}
//           <motion.div
//             initial={{ opacity: 0, y: 70 }}
//             animate={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9 }}
//             className="mb-5 flex items-center gap-3"
//           >
//             <Sparkles className="h-4 w-4 text-[#43B6CF]" />

//             <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#1D3173]">
//               {hero.badge}
//             </p>
//           </motion.div>

//           {/* HEADING */}
//           <motion.h1
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1, duration: 0.9 }}
//             className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#1D3173]"
//           >
//             {hero.heading}
//           </motion.h1>


//           <motion.h1
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1, duration: 0.9 }}
//             className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-light leading-[1.02] tracking-[-0.05em] text-[#1D3173]"
//           >
//             {hero.heading1}
//           </motion.h1>

//           <motion.h1
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1, duration: 0.9 }}
//             className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#1D3173]"
//           >
//             {hero.heading2}
//           </motion.h1>






//           {/* SUBTEXT */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-slate-700"
//           >
//             {hero.subtext}
//           </motion.p>

//           {/* FEATURES */}
//           <div className="mt-8 flex flex-wrap gap-3">
//             {hero.features.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2, duration: 0.9 }}
//                 className="flex items-center gap-2 rounded-full border-slate-200 bg-white/90 px-4 py-2 text-xs sm:text-sm text-slate-700"
//               >
//                 <CheckCircle2 className="h-4 w-4 text-[#43B6CF]" />
//                 {item}
//               </motion.div>
//             ))}
//           </div>

//           {/* BUTTONS */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 , duration: 0.9 }}
//             viewport={{ once: true }}
//             className="mt-10 flex flex-col gap-3 sm:flex-row"
//           >
//             {/* PRIMARY */}
//             <button className="flex items-center justify-center gap-2 rounded-full bg-[#1D3173] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#43B6CF]">
//               {hero.cta.primary}
//               <ArrowRight className="h-4 w-4" />
//             </button>

//             {/* SECONDARY */}
//             <button className="rounded-full border border-[#1D3173]/20 bg-white/70 px-7 py-3 text-sm font-semibold text-[#1D3173] backdrop-blur transition hover:bg-white">
//               {hero.cta.secondary} ↗
//             </button>
//           </motion.div>

//           {/* STATS */}
//           <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 gap-4">
//             {hero.stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="rounded-xl border border-slate-200 bg-white p-4 text-center"
//               >
//                 <h3 className="text-xl sm:text-2xl font-black text-[#1D3173]">
//                   {stat.number}
//                   <span className="text-[#43B6CF]">+</span>
//                 </h3>

//                 <p className="mt-1 text-xs text-slate-500">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";

// import Image from "next/image";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Rocket,
//   ShieldCheck,
//   Wifi,
// } from "lucide-react";

// const hero = {
//   badge: "WELCOME TO REACHNOVA",

//   heading: "Comprehensive IT Consulting & Development",

//   subtext:
//     "Leverage innovative frameworks to provide robust synopses for high-level business overview and strategic consultancy. Transform your vision into reality with our expert solutions.",

//   features: [
//     "Language Training & Visa Services",
//     "IT Consultancy & Software Development",
//     "International Outsourcing Services",
//   ],

//   cta: {
//     primary: "Let's Talk With Us",
//     secondary: "Learn More",
//   },

//   image: "/images/hero.png",

//   stats: [
//     {
//       number: 7,
//       label: "Projects Done",
//     },
//     {
//       number: 3,
//       label: "Expert Team",
//     },
//     {
//       number: 4,
//       label: "Years Experience",
//     },
//   ],

//   floatingCards: {
//     topLeft: {
//       title: "Trusted Company",
//       subtitle: "100% Professional Solutions",
//       icon: "shield",
//     },

//     bottomLeft: {
//       title: "Project Delivered",
//       subtitle: "Successfully completed projects",
//       icon: "rocket",
//       badge: "LIVE",
//     },

//     topRight: {
//       number: "4+",
//       label: "Years Experience",
//     },

//     bottomRight: {
//       title: "Team Available",
//       subtitle: "Ready For Your Project",
//       icon: "online",
//     },
//   },
// };

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#f8fafc]">
//       {/* Background Blur */}
//       <div className="absolute left-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-emerald-300/30 blur-[120px]" />
//       <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-300/30 blur-[120px]" />

//       <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10">
//         {/* LEFT CONTENT */}
//         <div className="relative z-10">
//           {/* Badge */}
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2 shadow-sm backdrop-blur-md">
//             <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
//             <p className="text-sm font-semibold tracking-wide text-emerald-600">
//               {hero.badge}
//             </p>
//           </div>

//           {/* Heading */}
//           <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-6xl xl:text-7xl">
//             Comprehensive IT
//             <span className="block text-[#0f172a]">Consulting &</span>
//             <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
//               Development
//             </span>
//           </h1>

//           {/* Subtext */}
//           <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
//             {hero.subtext}
//           </p>

//           {/* Features */}
//           <div className="mt-8 flex flex-col gap-4">
//             {hero.features.map((item, i) => (
//               <div
//                 key={i}
//                 className="group flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
//               >
//                 <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
//                   <CheckCircle2 className="h-4 w-4 text-emerald-600" />
//                 </div>

//                 <span className="text-sm font-medium text-slate-700">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="mt-10 flex flex-wrap items-center gap-5">
//             <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(16,185,129,0.45)]">
//               {hero.cta.primary}
//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </button>

//             <button className="group flex items-center gap-2 text-base font-semibold text-slate-800 transition-all duration-300 hover:text-emerald-600">
//               {hero.cta.secondary}
//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="mt-14 grid max-w-lg grid-cols-3 gap-5">
//             {hero.stats.map((stat, i) => (
//               <div
//                 key={i}
//                 className="rounded-3xl border border-white/40 bg-white/80 p-6 text-center shadow-[0_10px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl"
//               >
//                 <h3 className="text-3xl font-black text-slate-900">
//                   {stat.number}+
//                 </h3>

//                 <p className="mt-2 text-sm font-medium text-slate-500">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative flex items-center justify-center">
//           {/* Main Image Glow */}
//           <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-r from-emerald-300/40 to-cyan-300/40 blur-[100px]" />

//           {/* Main Image Card */}
//           <div className="relative z-20 overflow-hidden rounded-[40px] border border-white/30 bg-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl">
//             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/0" />

//             <Image
//               src={hero.image}
//               alt="Hero"
//               width={650}
//               height={700}
//               className="h-auto w-full object-cover"
//               priority
//             />
//           </div>

//           {/* Floating Cards */}

//           {/* Top Left */}
//           <div className="absolute left-[-20px] top-[40px] z-30 animate-float rounded-3xl border border-white/40 bg-white/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
//                 <ShieldCheck className="h-6 w-6 text-emerald-600" />
//               </div>

//               <div>
//                 <h4 className="text-sm font-bold text-slate-900">
//                   {hero.floatingCards.topLeft.title}
//                 </h4>

//                 <p className="mt-1 text-xs text-slate-500">
//                   {hero.floatingCards.topLeft.subtitle}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Left */}
//           <div className="absolute bottom-[50px] left-[-40px] z-30 animate-float2 rounded-3xl border border-white/40 bg-white/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
//                 <Rocket className="h-6 w-6 text-cyan-600" />
//               </div>

//               <div>
//                 <div className="flex items-center gap-2">
//                   <h4 className="text-sm font-bold text-slate-900">
//                     {hero.floatingCards.bottomLeft.title}
//                   </h4>

//                   <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">
//                     LIVE
//                   </span>
//                 </div>

//                 <p className="mt-1 text-xs text-slate-500">
//                   {hero.floatingCards.bottomLeft.subtitle}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Top Right */}
//           <div className="absolute right-[-10px] top-[80px] z-30 animate-float3 rounded-3xl border border-white/40 bg-gradient-to-br from-emerald-500 to-cyan-500 p-6 text-white shadow-[0_20px_70px_rgba(16,185,129,0.35)]">
//             <h3 className="text-4xl font-black">
//               {hero.floatingCards.topRight.number}
//             </h3>

//             <p className="mt-2 text-sm font-medium text-white/90">
//               {hero.floatingCards.topRight.label}
//             </p>
//           </div>

//           {/* Bottom Right */}
//           <div className="absolute bottom-[30px] right-[-10px] z-30 animate-float rounded-3xl border border-white/40 bg-white/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
//             <div className="flex items-start gap-4">
//               <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
//                 <Wifi className="h-5 w-5 text-emerald-600" />

//                 <span className="absolute right-2 top-2 h-2.5 w-2.5 animate-ping rounded-full bg-emerald-500" />
//               </div>

//               <div>
//                 <h4 className="text-sm font-bold text-slate-900">
//                   {hero.floatingCards.bottomRight.title}
//                 </h4>

//                 <p className="mt-1 text-xs text-slate-500">
//                   {hero.floatingCards.bottomRight.subtitle}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import { siteData } from "../../data/siteData";

// export default function Hero() {
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         setVisible(true);
//     }, []);

//     const hero = siteData.hero;

//     return (
//         <section className="relative min-h-screen overflow-hidden bg-[#070A1A] text-white">

//             {/* ================= SOFT BACKGROUND GLOWS ================= */}
//             <div className="pointer-events-none absolute inset-0">
//                 <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px]" />
//                 <div className="absolute bottom-[-120px] right-[-120px] h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[180px]" />
//                 <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[200px]" />
//             </div>

//             {/* ================= CONTENT ================= */}
//             <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28">
//                 <div className="grid items-center gap-14 lg:grid-cols-12">

//                     {/* ================= LEFT ================= */}
//                     <div className={`lg:col-span-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

//                         {/* BADGE */}
//                         <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-5 py-2 backdrop-blur-xl mb-6">
//                             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//                             <p className="text-xs uppercase tracking-widest text-cyan-300 font-semibold">
//                                 {hero.badge}
//                             </p>
//                         </div>

//                         {/* HEADING */}
//                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
//                             <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
//                                 {hero.heading}
//                             </span>
//                         </h1>

//                         {/* SUBTEXT */}
//                         <p className="mt-6 text-slate-300 max-w-xl text-lg leading-relaxed">
//                             {hero.subtext}
//                         </p>

//                         {/* FEATURES */}
//                         <div className="mt-8 space-y-3">
//                             {hero.features.map((f, i) => (
//                                 <div key={i} className="flex items-center gap-3 text-slate-300">
//                                     <span className="h-2 w-2 rounded-full bg-cyan-400" />
//                                     {f}
//                                 </div>
//                             ))}
//                         </div>

//                         {/* BUTTONS */}
//                         <div className="mt-10 flex flex-col sm:flex-row gap-4">

//                             <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105 transition">
//                                 {hero.cta.primary}
//                             </button>

//                             <button className="px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl hover:border-cyan-400 transition">
//                                 {hero.cta.secondary}
//                             </button>

//                         </div>

//                         {/* STATS */}
//                         {/* STATS */}
//                         <div className="mt-12 grid grid-cols-3 gap-4">
//                             {hero.stats.map((s, i) => (
//                                 <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center shadow-lg hover:-translate-y-2 transition-all duration-500">

//                                     {/* glow effect */}
//                                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

//                                     <h3 className="relative text-2xl font-bold text-cyan-300 group-hover:scale-110 transition">
//                                         {s.number}
//                                     </h3>

//                                     <p className="relative text-[10px] uppercase tracking-widest text-slate-400 mt-1">
//                                         {s.label}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>

//                     {/* ================= RIGHT (TOP LIFTED PROFESSIONAL IMAGE) ================= */}
//                     <div className="lg:col-span-5 relative flex justify-center lg:-mt-10">

//                         <div className="relative w-[380px] sm:w-[420px]">

//                             {/* OUTER GLOW */}
//                             <div className="absolute inset-0 rounded-[60px] bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 blur-3xl" />

//                             {/* ARCH FRAME (TOP FULL ROUND) */}
//                             <div className="relative rounded-t-[220px] rounded-b-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

//                                 <img
//                                     src={hero.image}
//                                     alt="Hero"
//                                     className="h-[520px] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
//                                 />

//                                 {/* DARK GRADIENT BOTTOM */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//                             </div>

//                             {/* FLOAT CARD 1 */}
//                             <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/10 text-sm">
//                                 Fast Processing
//                             </div>

//                             {/* FLOAT CARD 2 */}
//                             <div className="absolute bottom-10 -left-6 bg-white/10 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/10 text-sm">
//                                 Japan Visa
//                             </div>

//                             {/* FLOAT CARD 3 */}
//                             <div className="absolute top-20 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg">
//                                 99% Success
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }