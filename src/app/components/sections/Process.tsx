"use client";

import { motion, Variants } from "framer-motion";
import {
Search,
Lightbulb,
Code2,
ShieldCheck,
Rocket,
HeadphonesIcon,
} from "lucide-react";
import Container from "../../components/ui/Container";
import { siteData } from "../../data/siteData";

const iconMap = {
search: Search,
lightbulb: Lightbulb,
code: Code2,
shield: ShieldCheck,
rocket: Rocket,
support: HeadphonesIcon,
};

function StepCard({
step,
customVariant,
}: {
step: (typeof siteData.process.steps)[number];
customVariant: Variants;
}) {
return (
<motion.div
variants={customVariant}
whileHover={{ y: -6 }}
className="w-[260px] h-[280px] rounded-3xl p-6 flex flex-col relative"
style={{
background: "var(--process-card-bg)",
boxShadow: "var(--process-card-shadow)",
}}
>
<span
className="absolute right-4 top-2 text-6xl font-bold"
style={{
color: "var(--process-card-number)",
}}
>
{step.number} </span>


  <div
    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
    style={{
      background: "var(--process-icon-bg)",
    }}
  >
    {(() => {
      const Icon = iconMap[step.icon as keyof typeof iconMap];

      return (
        <Icon
          size={26}
          style={{
            color: "var(--process-icon)",
          }}
        />
      );
    })()}
  </div>

  <h3
    className="mb-3 text-lg font-bold"
    style={{
      color: "var(--process-card-title)",
    }}
  >
    {step.title}
  </h3>

  <p
    className="text-sm"
    style={{
      color: "var(--process-card-description)",
    }}
  >
    {step.description}
  </p>
</motion.div>


);
}

export default function ProcessSection() {
const process = siteData.process;
const steps = process.steps;

const containerVariants: Variants = {
hidden: {},
visible: {
transition: {
staggerChildren: 0.8,
},
},
};

return ( <section id="process" className="relative overflow-hidden py-24 lg:py-32"> <Container>
{/* HEADER */}
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: false }}
transition={{ duration: 0.9 }}
className="mb-24 text-center"
>
<span
className="inline-flex rounded-full px-4 py-2 text-sm font-semibold border"
style={{
background: "var(--process-badge-bg)",
borderColor: "var(--process-badge-border)",
color: "var(--process-badge-text)",
}}
>
{process.badge} </span>


      <h2 className="mt-6 text-4xl font-bold md:text-5xl">
        <span
          style={{
            color: "var(--process-title)",
          }}
        >
          {process.title}
        </span>

        <span
          className="block"
          style={{
            color: "var(--process-highlight)",
          }}
        >
          {process.highlight}
        </span>
      </h2>

      <p
        className="mx-auto mt-6 max-w-3xl text-lg"
        style={{
          color: "var(--process-description)",
        }}
      >
        {process.description}
      </p>
    </motion.div>

    {/* DESKTOP */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="hidden xl:block relative h-[780px]"
    >
      <div className="absolute top-[390px] left-0 right-0 h-[4px] -translate-y-1/2 pointer-events-none z-0">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "var(--process-line-bg)",
          }}
        />

        {steps.map((_, index) => {
          if (index === steps.length - 1) return null;

          return (
            <motion.div
              key={`horiz-segment-${index}`}
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: {
                    duration: 0.8,
                    ease: "linear",
                    delay: index * 0.35,
                  },
                },
              }}
              className="absolute h-full"
              style={{
                right: `${-10 + index * 16}%`,
                width: "36%",
                transformOrigin: "right center",
                background: `linear-gradient(
                  to left,
                  var(--process-line-gradient-from),
                  var(--process-line-gradient-to)
                )`,
              }}
            />
          );
        })}
      </div>

      {steps.map((step, index) => {
        const isTop = index % 2 === 0;

        const verticalLineVariants: Variants = {
          hidden: { scaleY: 0 },
          visible: {
            scaleY: 1,
            transition: {
              duration: 0.8,
              ease: "linear",
              delay: index * 0.35,
            },
          },
        };

        const dotVariants: Variants = {
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.35,
            },
          },
        };

        const cardVariants: Variants = {
          hidden: {
            opacity: 0,
            x: isTop ? 90 : -90,
            y: isTop ? 25 : -25,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: 0.5,
              ease: [0.25, 0.6, 0.6, 1],
              delay: index * 0.45,
            },
          },
        };

        return (
          <div
            key={step.number}
            className={`absolute ${isTop ? "top-0" : "bottom-0"} z-10`}
            style={{
              right: `${-10 + index * 16}%`,
              transform: "translateX(-50%)",
            }}
          >
            <StepCard
              step={step}
              customVariant={cardVariants}
            />

            <motion.div
              variants={verticalLineVariants}
              className="absolute left-1/2 w-[2px]"
              style={{
                background: "var(--process-vertical-line)",
                height: "110px",
                top: isTop ? "100%" : undefined,
                bottom: !isTop ? "100%" : undefined,
                transformOrigin: isTop
                  ? "top center"
                  : "bottom center",
              }}
            />

            <motion.div
              variants={dotVariants}
              className="absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full border-4 shadow-md"
              style={{
                background: "var(--process-dot)",
                borderColor: "var(--process-dot-border)",
                top: isTop ? "calc(100% + 100px)" : undefined,
                bottom: !isTop
                  ? "calc(100% + 100px)"
                  : undefined,
              }}
            />
          </div>
        );
      })}
    </motion.div>

    {/* MOBILE */}
    <div className="xl:hidden space-y-8 md:space-y-12 relative">
      <div
        className="absolute left-7 top-0 h-full w-[3px]"
        style={{
          background: `linear-gradient(
            to bottom,
            var(--process-line-gradient-from),
            var(--process-line-gradient-to)
          )`,
        }}
      />

      {steps.map((step, index) => {
        const Icon =
          iconMap[step.icon as keyof typeof iconMap];

        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            className="flex gap-5"
          >
            <div
              className="h-14 w-14 flex items-center justify-center rounded-2xl shadow"
              style={{
                background: "var(--process-mobile-icon-bg)",
              }}
            >
              <Icon
                style={{
                  color: "var(--process-icon)",
                }}
              />
            </div>

            <div
              className="flex-1 rounded-3xl p-6 shadow-md"
              style={{
                background: "var(--process-mobile-card-bg)",
              }}
            >
              <h3
                className="font-bold mb-2"
                style={{
                  color: "var(--process-card-title)",
                }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm"
                style={{
                  color: "var(--process-card-description)",
                }}
              >
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </Container>
</section>
);
}












// "use client";

// import { motion, Variants } from "framer-motion";
// import {
//   Search,
//   Lightbulb,
//   Code2,
//   ShieldCheck,
//   Rocket,
//   HeadphonesIcon,
// } from "lucide-react";
// import Container from "../../components/ui/Container";
// import { siteData } from "../../data/siteData";

// const iconMap = {
//   search: Search,
//   lightbulb: Lightbulb,
//   code: Code2,
//   shield: ShieldCheck,
//   rocket: Rocket,
//   support: HeadphonesIcon,
// };

// function StepCard({
//   step,
//   customVariant,
// }: {
//   step: (typeof siteData.process.steps)[number];
//   customVariant: Variants;
// }) {
//   return (
//     <motion.div
//       variants={customVariant}
//       whileHover={{ y: -6 }}
//       className="w-[260px] h-[280px] rounded-3xl bg-white p-6 shadow-lg flex flex-col relative"
//       style={{
//         boxShadow: "0 12px 40px rgba(29,49,115,0.08)",
//       }}
//     >
//       <span className="absolute right-4 top-2 text-6xl font-bold text-slate-100">
//         {step.number}
//       </span>

//       <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#43B6CF15]">
//         {(() => {
//           const Icon = iconMap[step.icon as keyof typeof iconMap];
//           return <Icon size={26} style={{ color: "#1D3173" }} />;
//         })()}
//       </div>

//       <h3 className="mb-3 text-lg font-bold text-[#1D3173]">
//         {step.title}
//       </h3>

//       <p className="text-sm text-slate-500">{step.description}</p>
//     </motion.div>
//   );
// }

// export default function ProcessSection() {
//   const process = siteData.process;
//   const steps = process.steps;

//   const containerVariants: Variants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.8,
//       },
//     },
//   };

//   return (
//     <section id="process" className="relative overflow-hidden py-24 lg:py-32">
//       <Container>
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           transition={{ duration: 0.9 }}
//           className="mb-24 text-center"
//         >
//           <span className="inline-flex rounded-full px-4 py-2 text-sm font-semibold bg-[#43B6CF15] text-[#1D3173] border border-[#43B6CF30]">
//             {process.badge}
//           </span>

//           <h2 className="mt-6 text-4xl font-bold md:text-5xl">
//             <span style={{ color: "#1D3173" }}>{process.title}</span>
//             <span className="block" style={{ color: "#43B6CF" }}>
//               {process.highlight}
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
//             {process.description}
//           </p>
//         </motion.div>

//         {/* ================= DESKTOP ================= */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           className="hidden lg:block relative h-[780px]"
//         >
//           <div className="absolute top-[390px] left-0 right-0 h-[4px] -translate-y-1/2 pointer-events-none z-0">
//             <div className="absolute inset-0 bg-[#43B6CF15] rounded-full" />

//             {steps.map((_, index) => {
//               if (index === steps.length - 1) return null;
//               const stepDelayBase = index * 0.8;

//               return (
//                 <motion.div
//                   key={`horiz-segment-${index}`}
//                   variants={{
//                     hidden: { scaleX: 0 },
//                     visible: {
//                       scaleX: 1,
//                       transition: {
//                         duration: 0.8,
//                         ease: "linear",
//                         delay: index * 0.35,
//                       },
//                     },
//                   }}
//                   className="absolute h-full bg-gradient-to-l from-[#43B6CF] to-[#1D3173]"
//                   style={{
//                     right: `${-10 + index * 16}%`,
//                     width: "36%",
//                     transformOrigin: "right center",
//                   }}
//                 />
//               );
//             })}
//           </div>

//           {steps.map((step, index) => {
//             const isTop = index % 2 === 0;
//             const stepDelayBase = index * 0.8;

//             const verticalLineVariants: Variants = {
//               hidden: { scaleY: 0 },
//               visible: {
//                 scaleY: 1,
//                 transition: {
//                   duration: 0.8,
//                   ease: "linear",
//                   delay: index * 0.35,
//                 },
//               },
//             };

//             const dotVariants: Variants = {
//               hidden: { scale: 0, opacity: 0 },
//               visible: {
//                 scale: 1,
//                 opacity: 1,
//                 transition: {
//                   duration: 0.8,
//                   ease: "easeOut",
//                  delay: index * 0.35,
//                 },
//               },
//             };

//             const cardVariants: Variants = {
//               hidden: {
//                 opacity: 0,
//                 x: isTop ? 90 : -90,
//                 y: isTop ? 25 : -25,
//               },
//               visible: {
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//                 transition: {
//                   duration: 0.5,
//                   ease: [0.25, 0.60, 0.60, 1],
//                   delay: index * 0.45,
//                 },
//               },
//             };

//             return (
//               <div
//                 key={step.number}
//                 className={`absolute ${isTop ? "top-0" : "bottom-0"} z-10`}
//                 style={{
//                   right: `${-10 + index * 16}%`,
//                   transform: "translateX(-50%)",
//                 }}
//               >
//                 <StepCard
//                   step={step}
//                   customVariant={cardVariants}
//                 />

//                 <motion.div
//                   variants={verticalLineVariants}
//                   className="absolute left-1/2 w-[2px] bg-[#43B6CF55]"
//                   style={{
//                     height: "110px",
//                     top: isTop ? "100%" : undefined,
//                     bottom: !isTop ? "100%" : undefined,
//                     transformOrigin: isTop
//                       ? "top center"
//                       : "bottom center",
//                   }}
//                 />

//                 <motion.div
//                   variants={dotVariants}
//                   className="absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full border-4 border-white shadow-md"
//                   style={{
//                     backgroundColor: "#43B6CF",
//                     top: isTop ? "calc(100% + 100px)" : undefined,
//                     bottom: !isTop
//                       ? "calc(100% + 100px)"
//                       : undefined,
//                   }}
//                 />
//               </div>
//             );
//           })}
//         </motion.div>

//         {/* ================= MOBILE ================= */}
//         <div className="lg:hidden space-y-8 relative">
//           <div className="absolute left-7 top-0 h-full w-[3px] bg-gradient-to-b from-[#43B6CF] to-[#1D3173]" />

//           {steps.map((step, index) => {
//             const Icon =
//               iconMap[step.icon as keyof typeof iconMap];

//             return (
//               <motion.div
//                 key={step.number}
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: false }}
//                 transition={{
//                   duration: 0.9,
//                   delay: index * 0.12,
//                   ease: "easeOut",
//                 }}
//                 className="flex gap-5"
//               >
//                 <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white shadow">
//                   <Icon style={{ color: "#1D3173" }} />
//                 </div>

//                 <div className="flex-1 rounded-3xl bg-white p-6 shadow-md">
//                   <h3 className="font-bold mb-2 text-[#1D3173]">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm text-slate-500">
//                     {step.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// }








// "use client";

// import { motion } from "framer-motion";

// import {
//   Search,
//   Lightbulb,
//   Code2,
//   ShieldCheck,
//   Rocket,
//   HeadphonesIcon,
// } from "lucide-react";

// import Container from "../ui/Container";
// import { siteData } from "../../data/siteData";

// const iconMap = {
//   search: Search,
//   lightbulb: Lightbulb,
//   code: Code2,
//   shield: ShieldCheck,
//   rocket: Rocket,
//   support: HeadphonesIcon,
// };

// function StepCard({ step, index }: any) {
//   const isRight = index % 2 === 0;

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: isRight ? 90 : -90, y: 25 }}
//       whileInView={{ opacity: 1, x: 0, y: 0 }}
//       viewport={{ once: false, amount: 0.35 }}
//       transition={{
//         duration: 1.1,
//         ease: [0.25, 0.8, 0.25, 1],
//         delay: index * 0.15,
//       }}
//       whileHover={{ y: -6 }}
//       className="w-[260px] h-[280px] rounded-3xl bg-white p-6 shadow-lg flex flex-col relative"
//       style={{
//         boxShadow: "0 12px 40px rgba(29,49,115,0.08)",
//       }}
//     >
//       {/* big number */}
//       <span className="absolute right-4 top-2 text-6xl font-bold text-slate-100">
//         {step.number}
//       </span>

//       {/* icon */}
//       <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#43B6CF15]">
//         {(() => {
//           const Icon = iconMap[step.icon as keyof typeof iconMap];
//           return <Icon size={26} style={{ color: "#1D3173" }} />;
//         })()}
//       </div>

//       {/* title */}
//       <h3 className="mb-3 text-lg font-bold text-[#1D3173]">
//         {step.title}
//       </h3>

//       {/* description */}
//       <p className="text-sm text-slate-500">{step.description}</p>
//     </motion.div>
//   );
// }

// export default function ProcessSection() {
//   const process = siteData.process;
//   const steps = process.steps;

//   return (
//     <section
//       id="process"
//       className="relative overflow-hidden py-24 lg:py-32"
//     >
//       <Container>

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           transition={{ duration: 0.9 }}
//           className="mb-24 text-center"
//         >
//           <span className="inline-flex rounded-full px-4 py-2 text-sm font-semibold bg-[#43B6CF15] text-[#1D3173] border border-[#43B6CF30]">
//             {process.badge}
//           </span>

//           <h2 className="mt-6 text-4xl font-bold md:text-5xl">
//             <span style={{ color: "#1D3173" }}>{process.title}</span>
//             <span className="block" style={{ color: "#43B6CF" }}>
//               {process.highlight}
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
//             {process.description}
//           </p>
//         </motion.div>

//         {/* ================= DESKTOP ================= */}
//         <div className="hidden lg:block relative h-[780px]">

//           {/* CENTER LINE */}
//           <div className="absolute top-1/2 left-0 right-0 h-[4px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#43B6CF] to-[#1D3173]" />

//           {steps.map((step, index) => {
//             const isTop = index % 2 === 0;

//             return (
//               <div
//                 key={step.number}
//                 className={`absolute ${isTop ? "top-0" : "bottom-0"}`}
//                 style={{
//                   right: `${-10 + index * 16}%`,
//                   transform: "translateX(-50%)",
//                 }}
//               >
//                 {/* CARD */}
//                 <StepCard step={step} index={index} />

//                 {/* CONNECTOR LINE */}
//                 <div
//                   className={`absolute left-1/2 w-[2px] -translate-x-1/2 ${
//                     isTop ? "top-full h-[110px]" : "bottom-full h-27.5"
//                   }`}
//                   style={{ backgroundColor: "#43B6CF55" }}
//                 />

//                 {/* DOT */}
//                 <motion.div
//                   initial={{ scale: 0, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   viewport={{ once: false, amount: 0.4 }}
//                   transition={{
//                     duration: 0.6,
//                     delay: index * 0.15,
//                     ease: "easeOut",
//                   }}
//                   className="absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full border-4 border-white shadow-md"
//                   style={{
//                     backgroundColor: "#43B6CF",
//                     top: isTop ? "calc(100% + 105px)" : undefined,
//                     bottom: !isTop ? "calc(100% + 105px)" : undefined,
//                   }}
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* ================= MOBILE ================= */}
//         <div className="lg:hidden space-y-8 relative">

//           {/* vertical line */}
//           <div className="absolute left-7 top-0 h-full w-[3px] bg-gradient-to-b from-[#43B6CF] to-[#1D3173]" />

//           {steps.map((step, index) => {
//             const Icon = iconMap[step.icon as keyof typeof iconMap];

//             return (
//               <motion.div
//                 key={step.number}
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: false }}
//                 transition={{
//                   duration: 0.9,
//                   delay: index * 0.12,
//                   ease: "easeOut",
//                 }}
//                 className="flex gap-5"
//               >
//                 <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white shadow">
//                   <Icon style={{ color: "#1D3173" }} />
//                 </div>

//                 <div className="flex-1 rounded-3xl bg-white p-6 shadow-md">
//                   <h3 className="font-bold mb-2 text-[#1D3173]">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm text-slate-500">
//                     {step.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//       </Container>
//     </section>
//   );
// }









// "use client";

// import {
//   Search,
//   Lightbulb,
//   Code2,
//   ShieldCheck,
//   Rocket,
//   HeadphonesIcon,
// } from "lucide-react";

// import Container from "../ui/Container";
// import { siteData } from "../../data/siteData";

// const iconMap = {
//   search: Search,
//   lightbulb: Lightbulb,
//   code: Code2,
//   shield: ShieldCheck,
//   rocket: Rocket,
//   support: HeadphonesIcon,
// };

// export default function ProcessSection() {
//   const process = siteData.process;
//   const steps = process.steps;

//   return (
//     <section id="process" className="relative overflow-hidden py-24 lg:py-32">
//       {/* Background */}
//       {/* <div className="absolute inset-0 -z-10">
//         <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full blur-3xl"
//           style={{ backgroundColor: "#43B6CF20" }}
//         />
//         <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full blur-3xl"
//           style={{ backgroundColor: "#1D317315" }}
//         />
//       </div> */}

//       <Container>
//         {/* HEADER */}
//         <div className="mb-24 text-center">
//           <span
//             className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
//             style={{
//               backgroundColor: "#43B6CF15",
//               color: "#1D3173",
//               border: "1px solid #43B6CF30",
//             }}
//           >
//             {process.badge}
//           </span>

//           <h2 className="mt-6 text-4xl font-bold md:text-5xl">
//             <span style={{ color: "#1D3173" }}>
//               {process.title}
//             </span>

//             <span className="block" style={{ color: "#43B6CF" }}>
//               {process.highlight}
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
//             {process.description}
//           </p>
//         </div>

//         {/* DESKTOP */}
//         <div className="hidden lg:block relative h-[780px]">
//           {/* LINE */}
//           <div
//             className="absolute top-1/2 left-0 right-0 h-[4px] -translate-y-1/2 rounded-full"
//             style={{
//               background:
//                 "linear-gradient(90deg,#43B6CF,#1D3173)",
//             }}
//           />

//           {steps.map((step, index) => {
//             const Icon = iconMap[step.icon as keyof typeof iconMap];
//             const isTop = index % 2 === 0;

//             return (
//               <div
//                 key={step.number}
//                 className={`absolute ${isTop ? "top-0" : "bottom-0"}`}
//                 style={{
//                   left: `${8 + index * 17}%`,
//                   transform: "translateX(-50%)",
//                 }}
//               >
//                 {/* CARD */}
//                 <div className="w-[260px] h-[280px] rounded-3xl bg-white p-6 shadow-lg hover:-translate-y-2 transition flex flex-col justify-start"
//                   style={{
//                     boxShadow: "0 10px 40px rgba(29,49,115,0.08)",
//                   }}
//                 >
//                   <span className="absolute right-4 top-2 text-6xl font-bold text-slate-100">
//                     {step.number}
//                   </span>

//                   <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
//                     style={{ backgroundColor: "#43B6CF15" }}
//                   >
//                     <Icon size={26} style={{ color: "#1D3173" }} />
//                   </div>

//                   <h3 className="mb-3 text-lg font-bold" style={{ color: "#1D3173" }}>
//                     {step.title}
//                   </h3>

//                   <p className="text-sm text-slate-500">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* CONNECTOR */}
//                 <div
//                   className={`absolute left-1/2 w-[2px] -translate-x-1/2 ${
//                     isTop ? "top-full h-[110px]" : "bottom-full h-[110px]"
//                   }`}
//                   style={{ backgroundColor: "#43B6CF55" }}
//                 />

//                 {/* DOT */}
//                 <div
//                   className={`absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white ${
//                     isTop ? "top-[calc(100%+105px)]" : "bottom-[calc(100%+105px)]"
//                   }`}
//                   style={{ backgroundColor: "#43B6CF" }}
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* MOBILE */}
//         <div className="lg:hidden space-y-8 relative">
//           <div
//             className="absolute left-7 top-0 h-full w-[3px]"
//             style={{
//               background: "linear-gradient(#43B6CF,#1D3173)",
//             }}
//           />

//           {steps.map((step) => {
//             const Icon = iconMap[step.icon as keyof typeof iconMap];

//             return (
//               <div key={step.number} className="flex gap-5">
//                 <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white shadow">
//                   <Icon style={{ color: "#1D3173" }} />
//                 </div>

//                 <div className="flex-1 rounded-3xl bg-white p-6 shadow-md">
//                   <h3 className="font-bold mb-2" style={{ color: "#1D3173" }}>
//                     {step.title}
//                   </h3>
//                   <p className="text-sm text-slate-500">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// }







// "use client";

// import {
//   Search,
//   Lightbulb,
//   Code2,
//   ShieldCheck,
//   Rocket,
//   HeadphonesIcon,
// } from "lucide-react";
// import Container from "../ui/Container";

// const processSteps = [
//   {
//     number: "01",
//     title: "Discovery & Planning",
//     description:
//       "We understand your business goals, challenges, and requirements through detailed consultation and analysis.",
//     icon: Search,
//   },
//   {
//     number: "02",
//     title: "Strategy & Design",
//     description:
//       "Our experts develop a comprehensive strategy and design solutions tailored to your specific needs.",
//     icon: Lightbulb,
//   },
//   {
//     number: "03",
//     title: "Development & Implementation",
//     description:
//       "We build your solution using cutting-edge technologies and agile methodologies for optimal results.",
//     icon: Code2,
//   },
//   {
//     number: "04",
//     title: "Testing & Quality Assurance",
//     description:
//       "Rigorous testing ensures your solution meets the highest quality standards and performs flawlessly.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "05",
//     title: "Deployment & Launch",
//     description:
//       "We handle smooth deployment and ensure your solution launches successfully in the production environment.",
//     icon: Rocket,
//   },
//   {
//     number: "06",
//     title: "Support & Maintenance",
//     description:
//       "Continuous support and maintenance to ensure your solution operates optimally and evolves with your needs.",
//     icon: HeadphonesIcon,
//   },
// ];

// export default function ProcessSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-24 lg:py-32">
//       {/* Background Effects */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-100/70 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-sky-100/70 blur-3xl" />
//       </div>

//       <Container>
//         {/* Header */}
//         <div className="mb-24 text-center">
//           <span className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
//             Our Process
//           </span>

//           <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
//             A systematic approach to
//             <span className="block text-cyan-600">
//               delivering excellence
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
//             We follow a proven workflow that transforms ideas into scalable
//             digital solutions with transparency, quality, and long-term
//             success.
//           </p>
//         </div>

//         {/* Desktop Timeline */}
//         <div className="relative hidden lg:block">
//           <div className="relative h-[780px]">
//             {/* Main Timeline */}
//             <div className="absolute left-0 right-0 top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" />

//             {processSteps.map((step, index) => {
//               const Icon = step.icon;
//               const isTop = index % 2 === 0;

//               return (
//                 <div
//                   key={step.number}
//                   className={`absolute ${
//                     isTop ? "top-0" : "bottom-0"
//                   }`}
//                   style={{
//                     left: `${8 + index * 17}%`,
//                     transform: "translateX(-50%)",
//                   }}
//                 >
//                   {/* Card */}
//                   <div className="group relative w-[230px] rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
//                     {/* Step Number */}
//                     <span className="absolute right-4 top-2 text-6xl font-bold text-slate-100">
//                       {step.number}
//                     </span>

//                     {/* Icon */}
//                     <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 transition-all duration-300 group-hover:bg-cyan-100">
//                       <Icon
//                         size={28}
//                         className="text-cyan-600 transition-transform duration-300 group-hover:scale-110"
//                       />
//                     </div>

//                     {/* Content */}
//                     <h3 className="mb-3 text-lg font-bold text-slate-900">
//                       {step.title}
//                     </h3>

//                     <p className="text-sm leading-7 text-slate-500">
//                       {step.description}
//                     </p>

//                     {/* Hover Border */}
//                     <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
//                   </div>

//                   {/* Connector Line */}
//                   <div
//                     className={`absolute left-1/2 w-[2px] -translate-x-1/2 bg-cyan-200 ${
//                       isTop
//                         ? "top-full h-[150px]"
//                         : "bottom-full h-[150px]"
//                     }`}
//                   />

//                   {/* Timeline Dot */}
//                   <div
//                     className={`absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-cyan-500 shadow-lg ${
//                       isTop
//                         ? "top-[calc(100%+150px)]"
//                         : "bottom-[calc(100%+150px)]"
//                     }`}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Mobile Version */}
//         <div className="lg:hidden">
//           <div className="relative mx-auto max-w-2xl">
//             <div className="absolute left-7 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600" />

//             <div className="space-y-8">
//               {processSteps.map((step) => {
//                 const Icon = step.icon;

//                 return (
//                   <div key={step.number} className="relative flex gap-5">
//                     <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg">
//                       <Icon size={24} className="text-cyan-600" />
//                     </div>

//                     <div className="relative flex-1 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-md">
//                       <span className="absolute right-4 top-2 text-5xl font-bold text-slate-100">
//                         {step.number}
//                       </span>

//                       <h3 className="mb-3 text-lg font-bold text-slate-900">
//                         {step.title}
//                       </h3>

//                       <p className="text-sm leading-7 text-slate-600">
//                         {step.description}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

