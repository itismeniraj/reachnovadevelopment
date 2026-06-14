"use client";

import Container from "../ui/Container";
import { siteData } from "../../data/siteData";
import AnimatedCounter from "../ui/AnimatedCounter";
import FadeUp from "../animations/FadeUp";

export default function CTASection() {
const { cta } = siteData;

return (
<section
className="relative py-28 overflow-hidden"
style={{
background: "var(--cta-bg)",
}}
> <Container>


    {/* ================= MAIN CONTENT ================= */}
    <div className="text-center max-w-3xl mx-auto">

      {/* badge */}
      <FadeUp>
        <span
          className="inline-flex px-4 py-2 rounded-full text-sm font-medium border"
          style={{
            background: "var(--cta-badge-bg)",
            borderColor: "var(--cta-badge-border)",
            color: "var(--cta-badge-text)",
          }}
        >
          {cta.badge}
        </span>
      </FadeUp>

      {/* heading */}
      <FadeUp delay={0.1}>
        <h2
          className="mt-6 text-4xl md:text-6xl font-bold leading-tight"
          style={{
            color: "var(--cta-heading)",
          }}
        >
          {cta.title}
        </h2>
      </FadeUp>

      {/* description */}
      <FadeUp delay={0.2}>
        <p
          className="mt-6 text-lg leading-7"
          style={{
            color: "var(--cta-text)",
          }}
        >
          {cta.description}
        </p>
      </FadeUp>

      {/* buttons */}
      <FadeUp delay={0.3}>
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <button
            className="px-7 py-3 rounded-xl font-semibold shadow-md transition"
            style={{
              background: "var(--cta-btn-primary-bg)",
              color: "var(--cta-btn-primary-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--cta-btn-primary-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "var(--cta-btn-primary-bg)";
            }}
          >
            {cta.buttons.primary}
          </button>

          <button
            className="px-7 py-3 rounded-xl border font-semibold transition"
            style={{
              borderColor: "var(--cta-btn-secondary-border)",
              color: "var(--cta-btn-secondary-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                "var(--cta-btn-secondary-hover-border)";
              e.currentTarget.style.color =
                "var(--cta-btn-secondary-hover-text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                "var(--cta-btn-secondary-border)";
              e.currentTarget.style.color =
                "var(--cta-btn-secondary-text)";
            }}
          >
            {cta.buttons.secondary}
          </button>

        </div>
      </FadeUp>
    </div>

    {/* ================= BOTTOM STATS ================= */}
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center place-items-center">

      {cta.stats.map((stat, index) => {
        const value = Number(stat.number.replace("+", ""));

        return (
          <FadeUp key={index} delay={index * 0.1}>
            <div className="flex flex-col items-center justify-center text-center">

              <h3
                className="text-4xl font-bold"
                style={{
                  color: "var(--cta-stat-number)",
                }}
              >
                <AnimatedCounter end={value} suffix="+" />
              </h3>

              <p
                className="mt-2 text-sm"
                style={{
                  color: "var(--cta-stat-label)",
                }}
              >
                {stat.label}
              </p>

            </div>
          </FadeUp>
        );
      })}

    </div>

  </Container>
</section>


);
}











// "use client";

// import Container from "../ui/Container";
// import { siteData } from "../../data/siteData";
// import AnimatedCounter from "../ui/AnimatedCounter";
// import FadeUp from "../animations/FadeUp";

// export default function CTASection() {
//   const { cta } = siteData;

//   return (
//     <section className="relative py-28 bg-white overflow-hidden">
//       <Container>

//         {/* ================= MAIN CONTENT ================= */}
//         <div className="text-center max-w-3xl mx-auto">

//           {/* badge */}
//           <FadeUp>
//             <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-[#43B6CF15] text-[#1D3173] border border-[#43B6CF30]">
//               {cta.badge}
//             </span>
//           </FadeUp>

//           {/* heading */}
//           <FadeUp delay={0.1}>
//             <h2 className="mt-6 text-4xl md:text-6xl font-bold text-[#1D3173] leading-tight">
//               {cta.title}
//             </h2>
//           </FadeUp>

//           {/* description */}
//           <FadeUp delay={0.2}>
//             <p className="mt-6 text-lg text-slate-600 leading-7">
//               {cta.description}
//             </p>
//           </FadeUp>

//           {/* buttons */}
//           <FadeUp delay={0.3}>
//             <div className="mt-8 flex flex-wrap justify-center gap-4">
//               <button className="px-7 py-3 rounded-xl bg-[#1D3173] text-white font-semibold shadow-md hover:bg-[#43B6CF] transition">
//                 {cta.buttons.primary}
//               </button>

//               <button className="px-7 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-[#43B6CF] hover:text-[#1D3173] transition">
//                 {cta.buttons.secondary}
//               </button>
//             </div>
//           </FadeUp>
//         </div>

        
//        {/* ================= BOTTOM STATS ================= */}
// {/* ================= BOTTOM STATS ================= */}
// <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center place-items-center">

//   {cta.stats.map((stat, index) => {
//     const value = Number(stat.number.replace("+", ""));

//     return (
//       <FadeUp key={index} delay={index * 0.1}>
//         <div className="flex flex-col items-center justify-center text-center">

//           <h3 className="text-4xl font-bold text-[#1D3173]">
//             <AnimatedCounter end={value} suffix="+" />
//           </h3>

//           <p className="mt-2 text-sm text-slate-600">
//             {stat.label}
//           </p>

//         </div>
//       </FadeUp>
//     );
//   })}

// </div>

//       </Container>
//     </section>
//   );
// }






// "use client";

// import Container from "../ui/Container";
// import { siteData } from "../../data/siteData";



// export default function CTASection() {
//   const { cta } = siteData; 
//   return (
//     <section className="relative py-28 overflow-hidden bg-white">

//       {/* ================= BACKGROUND GLOW ================= */}
//       {/* <div className="absolute inset-0 -z-10">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#edeff020] blur-[120px] rounded-full" />
//         <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#1D317320] blur-[120px] rounded-full" />
//       </div> */}

//       <Container>
//         <div className="grid lg:grid-cols-2 items-center gap-16">

//           {/* ================= LEFT CONTENT ================= */}
//           <div className="relative">

//             {/* small badge */}
//             <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-[#43B6CF15] text-[#1D3173] border border-[#43B6CF30]">
//               {cta.badge}
//             </span>

//             {/* heading */}
//             <h2 className="mt-6 text-4xl md:text-6xl font-bold text-[#1D3173] leading-tight">
//               {cta.title} <br />
//               Your Business?
//             </h2>

//             {/* description */}
//             <p className="mt-6 text-slate-600 text-lg leading-7 max-w-xl">
//              {cta.description}
//             </p>

//             {/* buttons */}
//             <div className="mt-8 flex flex-wrap gap-4">

//               <button className="px-7 py-3 rounded-xl bg-[#43B6CF] text-white font-semibold shadow-lg hover:shadow-xl hover:bg-[#1D3173] transition">
//                 {cta.buttons.primary}
//               </button>

//               <button className="px-7 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-[#43B6CF] hover:text-[#1D3173] transition">
//                 {cta.buttons.secondary}
//               </button>

//             </div>

//           </div>

//           {/* ================= RIGHT FLOATING STATS ================= */}
//           {/* ================= RIGHT IMAGE + FLOATING STATS ================= */}
//           <div className="relative flex items-center justify-center">

//             {/* MAIN IMAGE CARD */}
//             <div className="relative w-full max-w-[520px]">

//               <img
//                 src={cta.image}
//                 alt="cta image"
//                 className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
//               />

//               {/* dark gradient overlay for premium feel */}
//               <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
//             </div>


//             {/* STATS */}
//             {cta.stats.map((stat, index) => {
//               const positionClass = 
//               stat.position === "top-left" ? "-top-6 left-6"
//               :stat.position === "top-right" ? "top-24 right-0"
//               : "bottom-0 left-20";

              

//               return (
//                 <div
                
//                   key={index}
//                   className={`absolute ${positionClass} bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl px-6 py-5 border border-slate-100`}
//                 >
//                   <h3 className="text-3xl font-bold text-[#1D3173]">
//                     {stat.number}
//                   </h3>
//                   <p className="text-sm text-slate-600 mt-1">
//                     {stat.label}
//                   </p>
//                 </div>
//               );

//             })}








//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// }