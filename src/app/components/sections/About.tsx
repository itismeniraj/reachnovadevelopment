import AboutClient from "../client/about/AboutSection";
import { siteData } from "../../data/siteData";

export default function AboutSection() {
  return <AboutClient about={siteData.about} />;
}




// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { Globe, ShieldCheck, Target } from "lucide-react";
// import { useRef } from "react";
// import { siteData } from "../../data/siteData";

// export default function AboutSection() {
//   const sectionRef = useRef(null);

//   const { about } = siteData;

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const orb1Y = useTransform(scrollYProgress, [0, 1], [-200, 600]);
//   const orb2Y = useTransform(scrollYProgress, [0, 1], [-300, 800]);
//   const orb3Y = useTransform(scrollYProgress, [0, 1], [-150, 500]);
//   const orb4Y = useTransform(scrollYProgress, [0, 1], [-250, 700]);

//   // icon mapping (logic only, data still in siteData)
//   const iconMap: any = {
//     Target,
//     Globe,
//     ShieldCheck,
//   };

//   return (
//     <section id="about"
//       ref={sectionRef}
//       className="relative overflow-hidden bg-[#081128] py-24 lg:py-36"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

//       {/* Glow Effects */}
//       <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#43B6CF]/10 blur-[180px]" />

//       <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#1D3173]/40 blur-[160px]" />

//       {/* Orbs */}
//       <motion.div style={{ y: orb1Y }} className="absolute left-[5%] top-[-150px]">
//         <Orb size="w-72 h-72" />
//       </motion.div>

//       <motion.div style={{ y: orb2Y }} className="absolute right-[8%] top-[-220px]">
//         <Orb size="w-96 h-96" />
//       </motion.div>

//       <motion.div style={{ y: orb3Y }} className="absolute left-[25%] top-[20%]">
//         <Orb size="w-40 h-40" />
//       </motion.div>

//       <motion.div style={{ y: orb4Y }} className="absolute right-[30%] top-[35%]">
//         <Orb size="w-28 h-28" />
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: false }}
//           >
//             <p className="uppercase tracking-[5px] text-[#43B6CF] text-sm font-medium mb-6">
//               {about.badge}
//             </p>

//             <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95]">
//               {about.title}
//             </h2>

//             <div className="w-24 h-[2px] bg-[#43B6CF] mt-10 mb-10" />

//             <h3 className="text-white text-2xl font-semibold mb-5">
//               {about.highlightsTitle}
//             </h3>

//             <p className="text-white/70 text-lg leading-relaxed max-w-xl">
//               {about.highlights}
//             </p>

//             <h4 className="text-white text-xl font-semibold mt-8 mb-3">
//               {about.descriptionTitle}
//             </h4>

//             <p className="text-white/60 text-base leading-relaxed max-w-xl">
//               {about.description}
//             </p>
//           </motion.div>

//           {/* RIGHT (FROM DATA ONLY) */}
//           <div className="space-y-6">
//             {about.cards.map((item: any, index: number) => {
//               const Icon = iconMap[item.icon];

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1], }}
//                   viewport={{ once: false }}
//                   className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
//                 >
//                   <div className="relative z-10 flex gap-5">
//                     <div className="w-14 h-14 rounded-2xl bg-[#43B6CF]/10 border border-[#43B6CF]/20 flex items-center justify-center">
//                       <Icon className="w-7 h-7 text-[#43B6CF]" />
//                     </div>

//                     <div>
//                       <h3 className="text-white text-2xl font-semibold mb-3">
//                         {item.title}
//                       </h3>

//                       <p className="text-white/65 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// function Orb({ size }: { size: string }) {
//   return (
//     <div
//       className={`${size} rounded-full relative`}
//       style={{
//         background: `
//           radial-gradient(
//             circle at 30% 25%,
//             rgba(255,255,255,0.95),
//             rgba(67,182,207,0.35) 20%,
//             rgba(29,49,115,0.18) 55%,
//             transparent 85%
//           )
//         `,
//       }}
//     />
//   );
// }








// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { Globe, ShieldCheck, Target } from "lucide-react";
// import { useRef } from "react";

// export default function AboutSection() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const orb1Y = useTransform(scrollYProgress, [0, 1], [-200, 600]);
//   const orb2Y = useTransform(scrollYProgress, [0, 1], [-300, 800]);
//   const orb3Y = useTransform(scrollYProgress, [0, 1], [-150, 500]);
//   const orb4Y = useTransform(scrollYProgress, [0, 1], [-250, 700]);

//   const cards = [
//     {
//       icon: Target,
//       title: "Our Mission",
//       description:
//         "Push boundaries, engage audiences, and drive innovation through excellence in every service.",
//     },
//     {
//       icon: Globe,
//       title: "Our Vision",
//       description:
//         "Empower Nepali talent to compete globally while delivering innovative solutions to international clients.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Our Values",
//       description:
//         "Integrity, excellence, innovation, and client satisfaction drive everything we do.",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-[#081128] py-24 lg:py-36"
//     >
//       {/* Grid Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

//       {/* Glow Effects */}
//       <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#43B6CF]/10 blur-[180px]" />

//       <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#1D3173]/40 blur-[160px]" />

//       {/* Floating Orbs */}

//       <motion.div
//         style={{ y: orb1Y }}
//         className="absolute left-[5%] top-[-150px]"
//       >
//         <Orb size="w-72 h-72" />
//       </motion.div>

//       <motion.div
//         style={{ y: orb2Y }}
//         className="absolute right-[8%] top-[-220px]"
//       >
//         <Orb size="w-96 h-96" />
//       </motion.div>

//       <motion.div
//         style={{ y: orb3Y }}
//         className="absolute left-[25%] top-[20%]"
//       >
//         <Orb size="w-40 h-40" />
//       </motion.div>

//       <motion.div
//         style={{ y: orb4Y }}
//         className="absolute right-[30%] top-[35%]"
//       >
//         <Orb size="w-28 h-28" />
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
//           {/* Left Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: false }}
//           >
//             <p className="uppercase tracking-[5px] text-[#43B6CF] text-sm font-medium mb-6">
//               About Your Company
//             </p>

//             <h2 className="leading-[0.95]">
//               <span className="block text-white text-5xl md:text-6xl lg:text-7xl font-light">
//                 We Execute
//               </span>

//               <span className="block text-[#43B6CF] text-5xl md:text-6xl lg:text-7xl font-light mt-2">
//                 Ideas From
//               </span>

//               <span className="block text-white/30 text-5xl md:text-6xl lg:text-7xl font-light mt-2">
//                 Start To Finish
//               </span>
//             </h2>

//             <div className="w-24 h-[2px] bg-[#43B6CF] mt-10 mb-10" />

//             <h3 className="text-white text-2xl font-semibold mb-5">
//               About ReachNova Team
//             </h3>

//             <p className="text-white/70 text-lg leading-relaxed max-w-xl">
//               ReachNova is a consultancy and tech solution company dedicated
//               to bridging global opportunities with skilled talent. We
//               specialize in Japanese language training, IT consultancy, and
//               international outsourcing services.
//             </p>
//           </motion.div>

//           {/* Right Side */}
//           <div className="space-y-6">
//             {cards.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 80 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{
//                     duration: 0.7,
//                     delay: index * 0.15,
//                   }}
//                   viewport={{ once: false }}
//                   whileHover={{
//                     x: 8,
//                     borderColor: "#43B6CF",
//                   }}
//                   className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-500"
//                 >
//                   {/* Hover Glow */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-[#43B6CF]/10 via-transparent to-[#1D3173]/10" />

//                   <div className="relative z-10 flex gap-5">
//                     <div className="w-14 h-14 rounded-2xl bg-[#43B6CF]/10 border border-[#43B6CF]/20 flex items-center justify-center flex-shrink-0">
//                       <Icon className="w-7 h-7 text-[#43B6CF]" />
//                     </div>

//                     <div>
//                       <h3 className="text-white text-2xl font-semibold mb-3">
//                         {item.title}
//                       </h3>

//                       <p className="text-white/65 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Orb({ size }: { size: string }) {
//   return (
//     <div
//       className={`${size} rounded-full relative`}
//       style={{
//         background: `
//           radial-gradient(
//             circle at 30% 25%,
//             rgba(255,255,255,0.95),
//             rgba(67,182,207,0.35) 20%,
//             rgba(29,49,115,0.18) 55%,
//             transparent 85%
//           )
//         `,
//       }}
//     >
//       <div className="absolute inset-0 rounded-full shadow-[0_0_120px_rgba(67,182,207,0.25)]" />
//     </div>
//   );
// }





// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { Globe, Target, ShieldCheck } from "lucide-react";
// import { useRef } from "react";

// export default function AboutSection() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const orb1Y = useTransform(scrollYProgress, [0, 1], [-300, 800]);
//   const orb2Y = useTransform(scrollYProgress, [0, 1], [-200, 1000]);
//   const orb3Y = useTransform(scrollYProgress, [0, 1], [-400, 700]);
//   const orb4Y = useTransform(scrollYProgress, [0, 1], [-150, 900]);

//   const cards = [
//     {
//       icon: Target,
//       title: "Our Mission",
//       description:
//         "Push boundaries, engage audiences, and drive innovation through excellence in every service.",
//     },
//     {
//       icon: Globe,
//       title: "Our Vision",
//       description:
//         "Empower Nepali talent to compete globally while delivering innovative solutions to international clients.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Our Values",
//       description:
//         "Integrity, excellence, innovation, and client satisfaction drive everything we do.",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-[#1D3173] py-28 lg:py-40"
//     >
//       {/* GRID */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

//       {/* GLOW */}
//       <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

//       {/* ORBS */}

//       <motion.div
//         style={{ y: orb1Y }}
//         className="absolute left-[5%] top-[-250px]"
//       >
//         <Orb size="w-72 h-72" />
//       </motion.div>

//       <motion.div
//         style={{ y: orb2Y }}
//         className="absolute right-[8%] top-[-350px]"
//       >
//         <Orb size="w-96 h-96" />
//       </motion.div>

//       <motion.div
//         style={{ y: orb3Y }}
//         className="absolute left-[25%] top-[10%]"
//       >
//         <Orb size="w-40 h-40" />
//       </motion.div>

//       <motion.div
//         style={{ y: orb4Y }}
//         className="absolute right-[30%] top-[25%]"
//       >
//         <Orb size="w-28 h-28" />
//       </motion.div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* SMALL TAG */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center uppercase tracking-[6px] text-cyan-400 text-sm"
//         >
//           About ReachNova
//         </motion.p>

//         {/* HEADING */}
//         <motion.h2
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="mt-8 text-center leading-none"
//         >
//           <span className="block text-white text-5xl md:text-7xl lg:text-8xl font-light">
//             We Execute Ideas
//           </span>

//           <span className="block text-white text-5xl md:text-7xl lg:text-8xl font-light mt-2">
//             From Start
//           </span>

//           <span className="block text-white/25 text-5xl md:text-7xl lg:text-8xl font-light mt-2">
//             To Finish
//           </span>
//         </motion.h2>

//         {/* DESCRIPTION */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto text-center text-white/60 text-lg md:text-xl leading-relaxed mt-12"
//         >
//           ReachNova is a consultancy and tech solution company dedicated
//           to bridging global opportunities with skilled talent. We
//           specialize in Japanese language training, IT consultancy,
//           and international outsourcing services, helping businesses
//           scale efficiently while empowering professionals to thrive
//           in the global marketplace.
//         </motion.p>

//         {/* CARDS */}
//         <div className="grid md:grid-cols-3 gap-8 mt-24">
//           {cards.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 80 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.15,
//                 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   y: -10,
//                 }}
//                 className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
//               >
//                 {/* HOVER GLOW */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 via-transparent to-white/5" />

//                 <div className="relative z-10">
//                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
//                     <Icon className="w-7 h-7 text-cyan-400" />
//                   </div>

//                   <h3 className="text-2xl text-white font-semibold mb-4">
//                     {item.title}
//                   </h3>

//                   <p className="text-white/60 leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-28">
//           {[
//             ["5+", "Years Experience"],
//             ["200+", "Clients Served"],
//             ["50+", "Projects Delivered"],
//             ["100%", "Commitment"],
//           ].map(([number, text]) => (
//             <div key={text} className="text-center">
//               <h3 className="text-4xl md:text-6xl font-light text-white">
//                 {number}
//               </h3>
//               <p className="text-white/50 mt-3">{text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Orb({ size }: { size: string }) {
//   return (
//     <div
//       className={`${size} rounded-full relative`}
//       style={{
//         background:
//           "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.9), rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.04) 60%, transparent 80%)",
//       }}
//     >
//       <div className="absolute inset-0 rounded-full shadow-[0_0_120px_rgba(255,255,255,0.18)]" />
//     </div>
//   );
// }











// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function AboutSection() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [-100, 300]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [-200, 400]);
//   const y3 = useTransform(scrollYProgress, [0, 1], [-150, 500]);
//   const y4 = useTransform(scrollYProgress, [0, 1], [-250, 600]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-[#1D3173] py-32 md:py-40"
//     >
//       {/* Blur Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-white/5 blur-[120px]" />
//         <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-white/5 blur-[120px]" />
//       </div>

//       {/* Floating Orbs */}

//       <motion.div
//         style={{ y: y1 }}
//         animate={{
//           y: [0, 30, 0],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute left-[8%] top-0"
//       >
//         <Orb size="w-72 h-72" />
//       </motion.div>

//       <motion.div
//         style={{ y: y2 }}
//         animate={{
//           y: [0, 40, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute right-[12%] top-20"
//       >
//         <Orb size="w-48 h-48" />
//       </motion.div>

//       <motion.div
//         style={{ y: y3 }}
//         animate={{
//           y: [0, 35, 0],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute left-[20%] top-[40%]"
//       >
//         <Orb size="w-36 h-36" />
//       </motion.div>

//       <motion.div
//         style={{ y: y4 }}
//         animate={{
//           y: [0, 25, 0],
//         }}
//         transition={{
//           duration: 9,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute right-[25%] top-[55%]"
//       >
//         <Orb size="w-24 h-24" />
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left */}
//           <motion.div
//             initial={{ opacity: 0, x: -70 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="text-white/50 uppercase tracking-[4px] text-sm">
//               About Us
//             </span>

//             <h2 className="mt-6 text-5xl md:text-7xl font-light text-white leading-[1.05]">
//               Building the
//               <br />
//               future of
//               <br />
//               digital
//               <span className="block text-white/30">
//                 innovation
//               </span>
//             </h2>
//           </motion.div>

//           {/* Right */}
//           <motion.div
//             initial={{ opacity: 0, x: 70 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <p className="text-lg md:text-xl text-white/70 leading-relaxed">
//               We create modern digital experiences with
//               cutting-edge technologies, premium design systems,
//               and scalable solutions.
//             </p>

//             <p className="text-white/50 leading-relaxed">
//               Our mission is to help brands transform ideas
//               into exceptional products through innovation,
//               creativity and technology.
//             </p>

//             <div className="grid grid-cols-2 gap-6 pt-8">
//               <div>
//                 <h3 className="text-5xl font-light text-white">
//                   250+
//                 </h3>
//                 <p className="text-white/50 mt-2">
//                   Projects Completed
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-5xl font-light text-white">
//                   98%
//                 </h3>
//                 <p className="text-white/50 mt-2">
//                   Client Satisfaction
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Orb({ size }: { size: string }) {
//   return (
//     <div
//       className={`${size} rounded-full relative`}
//       style={{
//         background:
//           "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.15) 35%, rgba(255,255,255,0.05) 60%, transparent 80%)",
//         filter: "blur(1px)",
//       }}
//     >
//       <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
//       <div className="absolute inset-0 rounded-full shadow-[0_0_100px_rgba(255,255,255,0.25)]" />
//     </div>
//   );
// }









// "use client";

// import Image from "next/image";
// import {
//   CheckCircle2,
//   Globe,
//   Eye,
//   Target,
//   Shield,
// } from "lucide-react";

// import { siteData } from "../../data/siteData";
// import Container from "../ui/Container";
// // import DropReveal from "../animations/ScrollReveal";
// import  FadeUp  from "../animations/FadeUp";
// import InteractiveTilt from "../ui/InteractiveTilt";
// import { ScrollParallax } from "react-just-parallax";


// export default function AboutSection() {
//   const { about } = siteData;

//   const cards = [
//     { title: about.missionTitle, description: about.mission, icon: Target },
//     { title: about.visionTitle, description: about.vision, icon: Eye },
//     { title: about.valuesTitle, description: about.values, icon: CheckCircle2 },
//     { title: about.highlightsTitle, description: about.highlights, icon: Globe },
//   ];

//   return (
//     <section id="about" className="relative bg-white py-20 overflow-hidden">
//       <Container>
//         <FadeUp>
//         {/* ================= HEADER ================= */}
       
//           <div className="max-w-3xl mx-auto text-center">

//             <p className="text-xs tracking-[0.35em] uppercase text-[#43B6CF] font-semibold">
//               {about.badge}
//             </p>

//             <h2 className="mt-4 text-4xl sm:text-5xl font-black text-[#1D3173] leading-tight">
//               {about.title}
//             </h2>

//             <p className="mt-5 text-slate-600 text-base sm:text-lg leading-7">
//               {about.description}
//             </p>
//           </div>

//           </FadeUp>
        

//         {/* ================= MAIN GRID ================= */}
//         <div className="mt-16 grid lg:grid-cols-2 gap-14 items-center">

//           {/* ================= IMAGE SIDE ================= */}
//           {/* <DropReveal delay={0.1}> */}
//           <FadeUp>
//             <div className="relative isolate flex justify-center">

//               {/* BACK IMAGE */}
//               <div className="relative right-[-90] w-[260px] h-[380px] rounded-3xl overflow-hidden shadow-2xl -rotate-6">
                
//                 <Image
                
//                   src={about.image}
//                   alt="about"
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* FRONT IMAGE */}
//               <div className="absolute top-24 left-2 w-[260px] h-[380px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-6">
//                 <Image
//                   src={about.image}
//                   alt="about"
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* FLOATING ICONS */}
//               <div className="absolute top-0 left-6 text-[##1D3173] text-2xl animate-bounce">✦</div>
//               <div className="absolute top-10 right-10 text-slate-400 text-xl animate-pulse">✧</div>
//               <div className="absolute bottom-10 left-10 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />

//               {/* GLOW */}
//               <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-400/20 blur-[120px] rounded-full" />
//               <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400/20 blur-[120px] rounded-full" />

//               {/* TRUST BADGE */}
//               <ScrollParallax
//                 isAbsolutelyPositioned
//                 >
//               <div className="absolute z-[100] bottom-5 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2">

//                 <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center">
//                   <Shield className="text-emerald-600 w-4 h-4" />
//                 </div>

                

//                 <div>
//                   <p className="text-[10px] uppercase tracking-widest text-slate-500">
//                     Trusted
//                   </p>
//                   <p className="text-xs font-bold text-[#1D3173]">
//                     Verified Company
//                   </p>
//                 </div>
                


//               </div>
//               </ScrollParallax>

//             </div>
//             </FadeUp>
//           {/* </DropReveal> */}

//           {/* ================= FLIP CARDS ================= */}
//           {/* <DropReveal delay={0.2}> */}
//           <FadeUp>
//             <div className="grid sm:grid-cols-2 gap-5">

//               {cards.map((card, i) => {
//                 const Icon = card.icon;

//                 return (
//                   <div key={i} className="perspective group">

//                     <div className="relative w-full h-[200px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

//                       {/* ================= FRONT ================= */}
//                       <div className="absolute inset-0 backface-hidden p-6 rounded-2xl border bg-white shadow-sm flex flex-col">

//                         <div className="w-11 h-11 rounded-xl bg-[#43B6CF]/10 flex items-center justify-center">
//                           <Icon className="w-5 h-5 text-[#43B6CF]" />
//                         </div>

//                         <h3 className="mt-4 text-lg font-bold text-[#1D3173]">
//                           {card.title}
//                         </h3>

//                         <p className="mt-2 text-sm text-slate-600">Explore More about
//                           {card.title}
//                         </p>

//                       </div>

//                       {/* ================= BACK ================= */}
//                       <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl p-6 bg-gradient-to-br from-[#43B6CF] to-[#1D3173] text-white flex items-center justify-center shadow-xl">

//                         <div className="text-center">
//                           <Icon className="w-10 h-10 mx-auto mb-3 opacity-90" />
//                           <h3 className="text-lg font-bold mb-2">
//                             {card.title}
//                           </h3>
//                           <p className="text-sm opacity-90">
//                              {card.description}
//                           </p>
//                         </div>

//                       </div>

//                     </div>
//                   </div>
//                 );
//               })}

//             </div>
//             </FadeUp>
//           {/* </DropReveal> */}

//         </div>
//       </Container>
//     </section>
//   );
// }








// "use client";

// import Image from "next/image";
// import {
//   CheckCircle2,
//   Globe,
//   Eye,
//   Target,
//   Shield,
// } from "lucide-react";

// import { siteData } from "../../data/siteData";
// import Container from "../ui/Container";
// import FadeUp from "../animations/FadeUp";
// import { ScrollParallax } from "react-just-parallax";

// export default function AboutSection() {
//   const { about } = siteData;

//   const cards = [
//     { title: about.missionTitle, description: about.mission, icon: Target },
//     { title: about.visionTitle, description: about.vision, icon: Eye },
//     { title: about.valuesTitle, description: about.values, icon: CheckCircle2 },
//     { title: about.highlightsTitle, description: about.highlights, icon: Globe },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative py-20 overflow-hidden bg-white"
//     >

//       {/* ================= BACKGROUND ================= */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">

//         {/* Base gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50 to-blue-50" />

//         {/* Glow blobs */}
//         <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-cyan-300/30 rounded-full blur-[140px] animate-pulse" />
//         <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[160px] animate-pulse" />

//         {/* Floating bubbles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-cyan-300/20 backdrop-blur-xl animate-float"
//             style={{
//               width: `${10 + Math.random() * 28}px`,
//               height: `${10 + Math.random() * 28}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDuration: `${8 + Math.random() * 10}s`,
//               opacity: 0.4,
//             }}
//           />
//         ))}

//         {/* Stars */}
//         {[...Array(80)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute bg-white rounded-full animate-twinkle"
//             style={{
//               width: `${Math.random() * 2}px`,
//               height: `${Math.random() * 2}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: Math.random(),
//             }}
//           />
//         ))}
//       </div>

//       <Container>
//         <FadeUp>

//           {/* ================= HEADER ================= */}
//           <div className="max-w-3xl mx-auto text-center relative z-10">

//             <p className="text-xs tracking-[0.35em] uppercase text-cyan-600 font-semibold">
//               {about.badge}
//             </p>

//             <h2 className="mt-4 text-4xl sm:text-5xl font-black text-[#1D3173] leading-tight">
//               {about.title}
//             </h2>

//             <p className="mt-5 text-slate-600 text-base sm:text-lg leading-7">
//               {about.description}
//             </p>
//           </div>
//         </FadeUp>

//         {/* ================= MAIN GRID ================= */}
//         <div className="mt-16 grid lg:grid-cols-2 gap-14 items-center relative z-10">

//           {/* ================= IMAGE SIDE ================= */}
//           <FadeUp>
//             <div className="relative flex justify-center">

//               {/* BACK IMAGE */}
//               <div className="relative w-[260px] h-[380px] rounded-3xl overflow-hidden shadow-2xl -rotate-6">
//                 <Image
//                   src={about.image}
//                   alt="about"
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* FRONT IMAGE */}
//               <div className="absolute top-24 left-6 w-[260px] h-[380px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl rotate-6">
//                 <Image
//                   src={about.image}
//                   alt="about"
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* FLOATING ICONS */}
//               <div className="absolute top-0 left-10 text-[#1D3173] text-2xl animate-bounce">✦</div>
//               <div className="absolute top-12 right-10 text-slate-400 text-xl animate-pulse">✧</div>
//               <div className="absolute bottom-10 left-10 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />

//               {/* TRUST BADGE */}
//               <ScrollParallax isAbsolutelyPositioned>
//                 <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl border shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2">

//                   <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center">
//                     <Shield className="text-emerald-600 w-4 h-4" />
//                   </div>

//                   <div>
//                     <p className="text-[10px] uppercase tracking-widest text-slate-500">
//                       Trusted
//                     </p>
//                     <p className="text-xs font-bold text-[#1D3173]">
//                       Verified Company
//                     </p>
//                   </div>

//                 </div>
//               </ScrollParallax>

//             </div>
//           </FadeUp>

//           {/* ================= CARDS ================= */}
//           <FadeUp>
//             <div className="grid sm:grid-cols-2 gap-5">

//               {cards.map((card, i) => {
//                 const Icon = card.icon;

//                 return (
//                   <div key={i} className="group perspective">

//                     <div className="relative w-full h-[200px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

//                       {/* FRONT */}
//                       <div className="absolute inset-0 backface-hidden p-6 rounded-2xl border bg-white/80 backdrop-blur-xl shadow-sm flex flex-col">

//                         <div className="w-11 h-11 rounded-xl bg-cyan-100 flex items-center justify-center">
//                           <Icon className="w-5 h-5 text-cyan-600" />
//                         </div>

//                         <h3 className="mt-4 text-lg font-bold text-[#1D3173]">
//                           {card.title}
//                         </h3>

//                         <p className="mt-2 text-sm text-slate-600">
//                           Explore more about {card.title}
//                         </p>
//                       </div>

//                       {/* BACK */}
//                       <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl p-6 bg-gradient-to-br from-cyan-500 to-[#1D3173] text-white flex items-center justify-center shadow-xl">

//                         <div className="text-center">
//                           <Icon className="w-10 h-10 mx-auto mb-3 opacity-90" />
//                           <h3 className="text-lg font-bold mb-2">
//                             {card.title}
//                           </h3>
//                           <p className="text-sm opacity-90">
//                             {card.description}
//                           </p>
//                         </div>

//                       </div>

//                     </div>
//                   </div>
//                 );
//               })}

//             </div>
//           </FadeUp>

//         </div>
//       </Container>
//     </section>
//   );
// }
























// import Image from "next/image";
// import {
//   CheckCircle2,
//   Globe,
//   Eye,
//   Target,
//   Shield,
// } from "lucide-react";

// import FadeUp from "../animations/FadeUp";
// import ImageZoom from "../animations/ImageZoom";

// import { siteData } from "../../data/siteData";
// import Container from "../ui/Container";

// export default function AboutSection() {
//   const { about } = siteData;

//   const cards = [
//     {
//       title: about.missionTitle,
//       description: about.mission,
//       icon: Target,
//     },
//     {
//       title: about.visionTitle,
//       description: about.vision,
//       icon: Eye,
//     },
//     {
//       title: about.valuesTitle,
//       description: about.values,
//       icon: CheckCircle2,
//     },
//     {
//       title: about.highlightsTitle,
//       description: about.highlights,
//       icon: Globe,
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative bg-white py-14 sm:py-16 lg:py-20"
//     >
//       <Container>
//         {/* HEADER */}
//         <FadeUp>
//           <div className="max-w-2xl">
//             <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#43B6CF]">
//               {about.badge}
//             </p>

//             <h2 className="mt-3 text-3xl sm:text-4xl font-black leading-tight text-[#1D3173]">
//               {about.title}
//             </h2>

//             <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
//               {about.description}
//             </p>
//           </div>
//         </FadeUp>

//         {/* MAIN */}
//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
//           {/* IMAGE */}
//           <FadeUp delay={0.1}>
//             <div className="relative">
//               <ImageZoom className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
//                 <Image
//                   src={about.image}
//                   alt="About ReachNova"
//                   width={700}
//                   height={800}
//                   className="w-full h-[300px] sm:h-[380px] lg:h-[430px] object-cover"
//                 />
//               </ImageZoom>

//               {/* FLOATING BADGE */}
//               <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md p-3">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43B6CF]/10">
//                     <Shield className="h-5 w-5 text-[#43B6CF]" />
//                   </div>

//                   <div>
//                     <p className="text-[11px] uppercase tracking-widest text-slate-500">
//                       Trusted Company
//                     </p>

//                     <p className="text-sm font-semibold text-[#1D3173]">
//                       Certified & Verified
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeUp>

//           {/* CONTENT */}
//           <FadeUp delay={0.2}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {cards.map((card, index) => {
//                 const Icon = card.icon;

//                 return (
//                   <div
//                     key={index}
//                     className=" group min-h-[210px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#43B6CF]/30 hover:shadow-lg" >
//                     <div className="flex h-full flex-col">
//                       {/* ICON */}
//                       <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#43B6CF]/10 transition group-hover:bg-[#43B6CF]">
//                         <Icon className="h-5 w-5 text-[#43B6CF] group-hover:text-white" />
//                       </div>

//                       {/* TEXT */}
//                       <div className="mt-4 flex-1">
//                         <h3 className="text-base font-bold text-[#1D3173]">
//                           {card.title}
//                         </h3>

//                         <p className="mt-3 text-sm leading-6 text-slate-600">
//                           {card.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </FadeUp>
//         </div>
//       </Container>
//     </section>
//   );
// }









// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { CheckCircle2, Globe, Eye, Target, Shield } from "lucide-react";

// import FadeUp from "../animations/FadeUp";
// import ImageZoom from "../animations/ImageZoom";
// import { siteData } from "../../data/siteData";
// import Container from "../ui/Container";

// export default function AboutSection() {
//   const { about } = siteData;

//   // =========================
//   // ROTATING MAIN TITLES
//   // =========================
//   const rotatingTitles = [
//     about.title,
//     "Building Strong Digital Foundations",
//     "Our Mission & Purpose",
//     "Vision for a Better Future",
//   ];

//   const [titleIndex, setTitleIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
//     }, 3500);

//     return () => clearInterval(timer);
//   }, []);

//   // =========================
//   // FEATURES (MISSION ETC)
//   // =========================
//   const features = [
//     {
//       title: about.missionTitle,
//       description: about.mission,
//       icon: Target,
//     },
//     {
//       title: about.visionTitle,
//       description: about.vision,
//       icon: Eye,
//     },
//     {
//       title: about.valuesTitle,
//       description: about.values,
//       icon: CheckCircle2,
//     },
//     {
//       title: about.highlightsTitle,
//       description: about.highlights,
//       icon: Globe,
//     },
//   ];

//   const [active, setActive] = useState(0);
//   const [paused, setPaused] = useState(false);

//   useEffect(() => {
//     if (paused) return;

//     const timer = setInterval(() => {
//       setActive((prev) => (prev + 1) % features.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [paused]);

//   return (
//     <section className="relative bg-white py-16 lg:py-24 overflow-hidden">

//       {/* BACKGROUND EFFECTS */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#43B6CF]/10 blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[#1D3173]/10 blur-3xl animate-pulse" />
//       </div>

//       <Container>

//         {/* =========================
//             HEADER
//         ========================= */}
//         <FadeUp>
//           <div className="max-w-3xl mx-auto text-center">
//             <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#43B6CF]">
//               {about.badge}
//             </p>

//             {/* AUTO CHANGING TITLE */}
//             <h2 className="mt-4 text-4xl sm:text-5xl font-black transition-all duration-500">
//               <span className="bg-gradient-to-r from-[#1D3173] via-[#43B6CF] to-[#1D3173] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">
//                 {rotatingTitles[titleIndex]}
//               </span>
//             </h2>

//             <p className="mt-6 text-base sm:text-lg text-slate-600 leading-8">
//               {about.description}
//             </p>
//           </div>
//         </FadeUp>

//         {/* =========================
//             MAIN SECTION
//         ========================= */}
//         <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">

//           {/* IMAGE */}
//           <FadeUp>
//             <div className="relative">

//               <ImageZoom className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
//                 <Image
//                   src={about.image}
//                   alt="About"
//                   width={800}
//                   height={900}
//                   className="w-full h-[380px] lg:h-[460px] object-cover"
//                 />
//               </ImageZoom>

//               {/* FLOATING STATS */}
//               <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
//                 <p className="text-2xl font-black text-[#1D3173]">10+</p>
//                 <p className="text-xs text-slate-500">Years Experience</p>
//               </div>

//               <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
//                 <p className="text-2xl font-black text-[#43B6CF]">500+</p>
//                 <p className="text-xs text-slate-500">Happy Clients</p>
//               </div>

//               {/* TRUST BADGE */}
//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md p-4">
//                 <div className="flex items-center gap-3">
//                   <div className="h-10 w-10 rounded-full bg-[#43B6CF]/10 flex items-center justify-center">
//                     <Shield className="h-5 w-5 text-[#43B6CF]" />
//                   </div>
//                   <div>
//                     <p className="text-[11px] uppercase tracking-widest text-slate-500">
//                       Trusted Company
//                     </p>
//                     <p className="text-sm font-semibold text-[#1D3173]">
//                       Certified & Verified
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </FadeUp>

//           {/* =========================
//               AUTO ROTATING CONTENT
//           ========================= */}
//           <FadeUp>
//             <div
//               className="grid gap-4"
//               onMouseEnter={() => setPaused(true)}
//               onMouseLeave={() => setPaused(false)}
//             >

//               {/* TABS */}
//               <div className="flex flex-col gap-3">
//                 {features.map((item, i) => {
//                   const Icon = item.icon;

//                   return (
//                     <button
//                       key={i}
//                       onClick={() => setActive(i)}
//                       className={`text-left p-5 rounded-2xl border transition-all duration-500
//                         ${
//                           active === i
//                             ? "bg-[#1D3173] text-white shadow-xl border-transparent"
//                             : "bg-white text-slate-700 border-slate-200 hover:border-[#43B6CF]/40"
//                         }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <Icon className="h-5 w-5" />
//                         <span className="font-bold">{item.title}</span>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* ACTIVE CONTENT */}
//               <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl min-h-[220px] transition-all duration-500">

//                 <h3 className="text-2xl font-black text-[#1D3173]">
//                   {features[active].title}
//                 </h3>

//                 <p className="mt-4 text-slate-600 leading-7">
//                   {features[active].description}
//                 </p>

//                 {/* PROGRESS BAR */}
//                 <div className="mt-6 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-[#43B6CF] transition-all duration-500"
//                     style={{
//                       width: `${((active + 1) / features.length) * 100}%`,
//                     }}
//                   />
//                 </div>

//               </div>

//             </div>
//           </FadeUp>

//         </div>
//       </Container>
//     </section>
//   );
// }











// import Image from "next/image";
// import { CheckCircle2, Globe, Eye, Target, Shield } from "lucide-react";

// import FadeUp from "../animations/FadeUp";
// import ImageZoom from "../animations/ImageZoom";

// import { siteData } from "../../data/siteData";
// import Container from "../ui/Container";

// export default function AboutSection() {
//   const { about } = siteData;

//   return (
//     <section id="about" className="relative bg-white py-16 sm:py-20 lg:py-28">

//       <Container>

//       {/* CONTAINER (MATCH HERO EXACTLY) */}
//       {/* <div className="mx-auto max-w-7xl px-10 sm:px-16 lg:px-24 xl:px-32"> */}

//         {/* HEADER */}
//         <FadeUp>
//           <div className="max-w-3xl">

//             <p className="text-sm font-semibold tracking-widest text-[#43B6CF]">
//               {about.badge}
//             </p>

//             <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D3173] leading-tight">
//               {about.title}
//             </h2>

//             <p className="mt-5 text-slate-600 leading-7">
//               {about.description}
//             </p>

//           </div>
//         </FadeUp>

//         {/* MAIN GRID */}
//         <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

//           {/* LEFT IMAGE */}
//           <div className="relative">

//             <ImageZoom className="rounded-3xl shadow-xl">

//               <Image
//                 src={about.image}
//                 alt="about"
//                 width={800}
//                 height={1000}
//                 className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
//               />

//             </ImageZoom>

//             <FadeUp delay={0.2}>
//               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-3">

//                 <Shield className="text-[#43B6CF]" />

//                 <div>
//                   <p className="text-xs text-slate-500">
//                     Trusted Company
//                   </p>

//                   <p className="text-sm font-bold text-[#1D3173]">
//                     Certified & Verified
//                   </p>
//                 </div>

//               </div>
//             </FadeUp>

//           </div>

//           {/* RIGHT CONTENT */}
//           <FadeUp delay={0.2}>
//             <div className="space-y-8">

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//                 <div className="p-5 rounded-2xl border hover:shadow-md transition bg-white flex gap-4">
//                   <Target className="w-9 h-9 text-[#43B6CF]" />
//                   <div>
//                     <h4 className="font-bold text-[#1D3173]">Mission</h4>
//                     <p className="text-sm text-slate-600 mt-1">{about.mission}</p>
//                   </div>
//                 </div>

//                 <div className="p-5 rounded-2xl border hover:shadow-md transition bg-white flex gap-4">
//                   <Eye className="w-9 h-9 text-[#43B6CF]" />
//                   <div>
//                     <h4 className="font-bold text-[#1D3173]">Vision</h4>
//                     <p className="text-sm text-slate-600 mt-1">{about.vision}</p>
//                   </div>
//                 </div>

//                 <div className="p-5 rounded-2xl border hover:shadow-md transition bg-white flex gap-4">
//                   <CheckCircle2 className="w-9 h-9 text-[#43B6CF]" />
//                   <div>
//                     <h4 className="font-bold text-[#1D3173]">Values</h4>
//                     <p className="text-sm text-slate-600 mt-1">{about.values}</p>
//                   </div>
//                 </div>

//                 <div className="p-5 rounded-2xl border hover:shadow-md transition bg-white flex gap-4">
//                   <Globe className="w-9 h-9 text-[#43B6CF]" />
//                   <div>
//                     <h4 className="font-bold text-[#1D3173]">Global Services</h4>
//                     <p className="text-sm text-slate-600 mt-1">
//                     {about.highlights}
//                     </p>


//                     {/* <ul className="text-sm text-slate-600 mt-1 space-y-1">
//                       {about.highlights.map((item, i) => (
//                         <li key={i}>• {item}</li>
//                       ))}
//                     </ul> */}
//                   </div>
//                 </div>

//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 pt-4">

//                 <button className="px-6 py-3 rounded-full bg-[#1D3173] text-white font-semibold hover:bg-[#43B6CF] transition">
//                   Get Consultation
//                 </button>
//                 <button className="px-6 py-3 rounded-full border bg-white/70 text-[#1D3173] font-semibold hover:bg-white transition">
//                   Learn More
//                 </button>

//               </div>

//             </div>
//           </FadeUp>

//         </div>
//         </Container>

//       {/* </div> */}
//     </section>
//   );
// }




// "use client";

// import Image from "next/image";
// import { CheckCircle2, Globe, Eye, Target, Shield } from "lucide-react";
// import { motion } from "framer-motion";
// import { siteData } from "../../data/siteData";

// export default function AboutSection() {
//   const { about } = siteData;

//   return (
//     <section className="relative bg-white py-16 sm:py-20 lg:py-28">


// {/* TOP RIGHT IMAGE (NEW) */}
// {/* <div className="relative mb-2 flex justify-end">
  
//   <div className="w-20 sm:w-44 md:w-52 lg:w-60">
//     <Image
//       src="/images/plane1.png"
//       alt="about extra"
//       width={100}
//       height={100}
//       className="w-full h-auto object-contain"
//     />
//   </div>

// </div> */}


//       {/* CONTAINER (same as hero/navbar spacing) */}
//       <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">

//         {/* HEADER */}
//         <div className="max-w-3xl">
//           <p className="text-sm font-semibold tracking-widest text-[#43B6CF]">
//             {about.badge}
//           </p>

//           <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D3173] leading-tight">
//             {about.title}
//           </h2>

//           <p className="mt-5 text-slate-600 leading-7">
//             {about.description}
//           </p>
//         </div>

//         {/* MAIN GRID */}
//         <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

//           {/* LEFT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="rounded-3xl overflow-hidden shadow-xl">
//               <Image
//                 src={about.image}
//                 alt="about"
//                 width={800}
//                 height={1000}
//                 className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
//               />
//             </div>

//             {/* floating badge */}
//             <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-3">
//               <Shield className="text-[#43B6CF]" />
//               <div>
//                 <p className="text-xs text-slate-500">Trusted Company</p>
//                 <p className="text-sm font-bold text-[#1D3173]">
//                   Certified & Verified
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT CONTENT */}
//           <div className="space-y-8">

//             {/* CARDS */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//               {/* Mission */}
//               <div className="p-5 rounded-2xl border hover:shadow-md transition bg-white flex gap-4">
//                 <Target className="w-9 h-9 text-[#43B6CF] flex-shrink-0" />
//                 <div>
//                   <h4 className="font-bold text-[#1D3173]">Mission</h4>
//                   <p className="text-sm text-slate-600 mt-1">
//                     {about.mission}
//                   </p>
//                 </div>
//               </div>

//               {/* Vision */}
//               <div className="p-5 rounded-2xl border hover:shadow-md transition bg-white flex gap-4">
//                 <Eye className="w-9 h-9 text-[#43B6CF] flex-shrink-0" />
//                 <div>
//                   <h4 className="font-bold text-[#1D3173]">Vision</h4>
//                   <p className="text-sm text-slate-600 mt-1">
//                     {about.vision}
//                   </p>
//                 </div>
//               </div>

//               {/* Values */}
//               <div className="p-5 rounded-2xl border hover:shadow-md transition bg-white flex gap-4">
//                 <CheckCircle2 className="w-9 h-9 text-[#43B6CF] flex-shrink-0" />
//                 <div>
//                   <h4 className="font-bold text-[#1D3173]">Values</h4>
//                   <p className="text-sm text-slate-600 mt-1">
//                     {about.values}
//                   </p>
//                 </div>
//               </div>

//               {/* Global */}
//               <div className="p-5 rounded-2xl border hover:shadow-md transition bg-white flex gap-4">
//                 <Globe className="w-9 h-9 text-[#43B6CF] flex-shrink-0" />
//                 <div>
//                   <h4 className="font-bold text-[#1D3173]">
//                     Global Services
//                   </h4>

//                   <ul className="text-sm text-slate-600 mt-1 space-y-1">
//                     {about.highlights.map((item, i) => (
//                       <li key={i}>• {item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//             </div>

//             {/* CTA */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button className="px-6 py-3 rounded-xl bg-[#1D3173] text-white font-semibold hover:bg-[#43B6CF] transition">
//                 Get Consultation
//               </button>

//               <button className="px-6 py-3 rounded-xl border text-[#1D3173] font-semibold hover:bg-slate-50">
//                 Learn More
//               </button>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import { siteData } from "../../data/siteData";
// import { CheckCircle2 } from "lucide-react";

// export default function AboutSection() {
//   const { about } = siteData;

//   const [active, setActive] = useState(0);

//   return (
//     <section className="bg-white py-20 lg:py-28">

//       {/* CONTAINER */}
//       <div className="mx-auto max-w-7xl px-10 sm:px-16 lg:px-24 xl:px-32">

//         {/* HEADER */}
//         <div className="max-w-3xl mx-auto text-center">

//           <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#43B6CF]">
//             {about.badge}
//           </p>

//           <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D3173]">
//             {about.title}
//           </h2>

//           <p className="mt-5 text-sm sm:text-base text-slate-600 leading-7">
//             {about.description}
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//           {/* LEFT IMAGE */}
//           <div className="relative">
//             <div className="overflow-hidden rounded-2xl shadow-md">

//               <img
//                 src="/images/hero1.png"
//                 alt="about"
//                 className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
//               />

//               {/* SIMPLE TOP LABEL */}
//               <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-[#1D3173]">
//                 Global Consultancy
//               </div>

//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div>

//             {/* HIGHLIGHTS (DYNAMIC + CLICKABLE) */}
//             <div className="space-y-3">

//               {about.highlights.map((item, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActive(i)}
//                   className={`w-full flex items-start gap-3 p-4 rounded-xl border transition text-left ${
//                     active === i
//                       ? "bg-[#43B6CF] text-white border-[#43B6CF]"
//                       : "bg-white border-slate-200 text-slate-700 hover:border-[#43B6CF]"
//                   }`}
//                 >
//                   <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
//                   <span className="text-sm font-medium">{item}</span>
//                 </button>
//               ))}

//             </div>

//             {/* MISSION / VISION / VALUES */}
//             <div className="mt-10 space-y-6">

//               <div>
//                 <h4 className="text-sm font-semibold text-[#1D3173]">
//                   Mission
//                 </h4>
//                 <p className="text-sm text-slate-600 mt-1 leading-6">
//                   {about.mission}
//                 </p>
//               </div>

//               <div>
//                 <h4 className="text-sm font-semibold text-[#1D3173]">
//                   Vision
//                 </h4>
//                 <p className="text-sm text-slate-600 mt-1 leading-6">
//                   {about.vision}
//                 </p>
//               </div>

//               <div>
//                 <h4 className="text-sm font-semibold text-[#1D3173]">
//                   Values
//                 </h4>
//                 <p className="text-sm text-slate-600 mt-1 leading-6">
//                   {about.values}
//                 </p>
//               </div>

//             </div>

//             {/* CTA BOX */}
//             <div className="mt-10 p-5 rounded-xl bg-[#1D3173] text-white flex items-center justify-between">

//               <div>
//                 <p className="text-xs text-[#43B6CF] font-semibold uppercase">
//                   Active Service
//                 </p>

//                 <p className="text-sm font-medium mt-1">
//                   {about.highlights[active]}
//                 </p>
//               </div>

//               <button className="bg-[#43B6CF] hover:bg-white hover:text-[#1D3173] transition px-4 py-2 rounded-lg text-xs font-semibold">
//                 Contact
//               </button>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { siteData } from "../../data/siteData";
// import { CheckCircle2 } from "lucide-react";

// export default function AboutSection() {
//   const { about } = siteData;

//   return (
//     <section id="about" className="bg-white py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-14 xl:px-20 grid lg:grid-cols-2 gap-14 items-center">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >

//           {/* BADGE */}
//           <p className="text-sm font-semibold tracking-widest text-[#43B6CF] uppercase">
//             {about.badge}
//           </p>

//           {/* TITLE */}
//           <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-[#1D3173] leading-tight">
//             {about.title}
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="mt-5 text-slate-600 leading-7 text-sm sm:text-base">
//             {about.description}
//           </p>

//           {/* HIGHLIGHTS */}
//           <div className="mt-8 space-y-4">
//             {about.highlights.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-3"
//               >
//                 <CheckCircle2 className="w-5 h-5 text-[#43B6CF]" />
//                 <p className="text-sm text-slate-700">{item}</p>
//               </div>
//             ))}
//           </div>

//         </motion.div>

//         {/* RIGHT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="bg-[#f4f7fb] rounded-2xl p-8 border border-slate-100"
//         >

//           {/* SECTION TITLE */}
//           <h3 className="text-xl font-bold text-[#1D3173]">
//             Why Choose ReachNova
//           </h3>

//           {/* ITEMS */}
//           <div className="mt-6 space-y-5">

//             {/* Mission */}
//             <div>
//               <h4 className="font-semibold text-[#1D3173]">Mission</h4>
//               <p className="text-sm text-slate-600 mt-1">
//                 {about.mission}
//               </p>
//             </div>

//             {/* Vision */}
//             <div>
//               <h4 className="font-semibold text-[#1D3173]">Vision</h4>
//               <p className="text-sm text-slate-600 mt-1">
//                 {about.vision}
//               </p>
//             </div>

//             {/* Values */}
//             <div>
//               <h4 className="font-semibold text-[#1D3173]">Values</h4>
//               <p className="text-sm text-slate-600 mt-1">
//                 {about.values}
//               </p>
//             </div>

//           </div>

//           {/* SMALL CTA STRIP */}
//           <div className="mt-8 flex items-center justify-between rounded-xl bg-[#1D3173] px-5 py-4 text-white">
//             <p className="text-sm font-medium">
//               Want to work with us?
//             </p>

//             <button className="rounded-full bg-[#43B6CF] px-4 py-2 text-xs font-semibold hover:opacity-90">
//               Contact Now
//             </button>
//           </div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }