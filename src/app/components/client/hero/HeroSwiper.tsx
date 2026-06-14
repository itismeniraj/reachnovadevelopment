"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import Container from "../../ui/Container";
import FadeUp from "../../animations/FadeUp";
import ImageParallaxZoom from "../../animations/ImageParallaxZoom";

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function HeroSwiper({ hero }: any) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="fade"
      loop
      className="h-screen"
    >
      {hero.slides.map((slide: any, index: number) => (
        <SwiperSlide key={index} className="relative">

          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <ImageParallaxZoom>
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </ImageParallaxZoom>

            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "var(--hero-overlay)",
              }}
            />
          </div>

          {/* CONTENT */}
          <Container>
            <div className="relative z-20 flex min-h-screen items-center">

              <div className="max-w-2xl">

                {/* BADGE */}
                <FadeUp className="mb-5 flex items-center gap-3">
                  <Sparkles
                    className="h-4 w-4"
                    style={{ color: "var(--hero-accent)" }}
                  />

                  <p
                    className="text-xs sm:text-sm font-semibold tracking-wide"
                    style={{ color: "var(--hero-text)" }}
                  >
                    {hero.badge}
                  </p>
                </FadeUp>

                {/* HEADING 1 */}
                <FadeUp>
                  <h1
                    className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    {slide.heading}
                  </h1>
                </FadeUp>

                {/* HEADING 2 */}
                <FadeUp>
                  <h2
                    className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-light leading-[1.02] tracking-[-0.05em] drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                    style={{ color: "var(--hero-text)" }}
                  >
                    {slide.heading1}
                  </h2>
                </FadeUp>

                {/* HEADING 3 */}
                <FadeUp>
                  <h3
                    className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    {slide.heading2}
                  </h3>
                </FadeUp>

                {/* SUBTEXT */}
                <FadeUp>
                  <p
                    className="mt-5 max-w-lg text-sm sm:text-base leading-7"
                    style={{ color: "var(--hero-subtext)" }}
                  >
                    {slide.subtext}
                  </p>
                </FadeUp>

                {/* FEATURES */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {hero.features.map((item: string, i: number) => (
                    <FadeUp key={i}>
                      <div
                        className="flex items-center gap-2 rounded-xl border px-4 py-2 text-xs sm:text-sm font-semibold backdrop-blur-md"
                        style={{
                          backgroundColor: "var(--hero-feature-bg)",
                          color: "var(--hero-feature-text)",
                          borderColor: "var(--hero-feature-border)",
                        }}
                      >
                        <CheckCircle2
                          className="h-4 w-4"
                          style={{ color: "var(--hero-accent)" }}
                        />
                        {item}
                      </div>
                    </FadeUp>
                  ))}
                </div>

                {/* BUTTONS */}
                <FadeUp>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                    {/* PRIMARY */}
                    <button
                      className="flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white transition"
                      style={{
                        backgroundColor: "var(--hero-btn-primary)",
                      }}
                    >
                      {hero.cta.primary}
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    {/* SECONDARY */}
                    <button
                      className="rounded-xl border px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                      style={{
                        backgroundColor: "var(--hero-btn-secondary-bg)",
                        borderColor: "var(--hero-btn-secondary-border)",
                      }}
                    >
                      {hero.cta.secondary} ↗
                    </button>

                  </div>
                </FadeUp>

              </div>
            </div>
          </Container>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}













// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";

// import Container from "../../ui/Container";
// import FadeUp from "../../animations/FadeUp";
// import ImageParallaxZoom from "../../animations/ImageParallaxZoom";

// import {
//   ArrowRight,
//   CheckCircle2,
//   Sparkles,
// } from "lucide-react";

// export default function HeroSwiper({ hero }: any) {
//   return (
//     <Swiper
//       modules={[Autoplay, EffectFade]}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       effect="fade"
//       loop
//       className="h-screen"
//     >
//       {hero.slides.map((slide: any, index: number) => (
//         <SwiperSlide key={index} className="relative">

//           {/* BACKGROUND */}
//           <div className="absolute inset-0">

//             <ImageParallaxZoom>
//               <Image
//                 src={slide.image}
//                 alt={slide.heading}
//                 fill
//                 priority={index === 0}
//                 className="object-cover"
//               />
//             </ImageParallaxZoom>

//             <div className="absolute inset-0 bg-black/35" />
//           </div>

//           {/* CONTENT */}
//           <Container>
//             <div className="relative z-20 flex min-h-screen items-center">

//               <div className="max-w-2xl">

//                 {/* BADGE (same UI) */}
//                 <FadeUp className="mb-5 flex items-center gap-3">
//                   <>
//                     <Sparkles className="h-4 w-4 text-[#43B6CF]" />

//                     <p className="text-xs sm:text-sm font-semibold tracking-wide text-white">
//                       {hero.badge}
//                     </p>
//                   </>
//                 </FadeUp>

//                 {/* HEADING 1 */}
//                 <FadeUp>
//                   <h1 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#43B6CF] drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
//                     {slide.heading}
//                   </h1>
//                 </FadeUp>

//                 {/* HEADING 2 */}
//                 <FadeUp>
//                   <h2 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-light leading-[1.02] tracking-[-0.05em] text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
//                     {slide.heading1}
//                   </h2>
//                 </FadeUp>

//                 {/* HEADING 3 */}
//                 <FadeUp>
//                   <h3 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#43B6CF] drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
//                     {slide.heading2}
//                   </h3>
//                 </FadeUp>

//                 {/* SUBTEXT */}
//                 <FadeUp>
//                   <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-white/90 drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
//                     {slide.subtext}
//                   </p>
//                 </FadeUp>

//                 {/* FEATURES */}
//                 <div className="mt-8 flex flex-wrap gap-3">
//                   {hero.features.map((item: string, i: number) => (
//                     <FadeUp key={i}>
//                       <div className="flex items-center gap-2 rounded-xl border font-semibold border-white/10 bg-white/80 backdrop-blur-md px-4 py-2 text-xs sm:text-sm text-[#1D3173] drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
//                         <CheckCircle2 className="h-4 w-4 text-[#1D3173]" />
//                         {item}
//                       </div>
//                     </FadeUp>
//                   ))}
//                 </div>

//                 {/* BUTTONS */}
//                 <FadeUp>
//                   <div className="mt-10 flex flex-col gap-3 sm:flex-row">

//                     <button className="flex items-center justify-center gap-2 rounded-xl bg-[#1D3173] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#43B6CF]">
//                       {hero.cta.primary}
//                       <ArrowRight className="h-4 w-4" />
//                     </button>

//                     <button className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
//                       {hero.cta.secondary} ↗
//                     </button>

//                   </div>
//                 </FadeUp>

//               </div>
//             </div>
//           </Container>

//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }








// yo ho ral chai use client hataunu vanda agadi ko code ani tespaxi mathi ko chai server component banau na lai paxi use garyo tesari 


// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";

// import { siteData } from "../../data/siteData";
// import Container from "../ui/Container";
// import FadeUp from "../animations/FadeUp";
// import ImageParallaxZoom from "../animations/ImageParallaxZoom";

// import {
//   ArrowRight,
//   CheckCircle2,
//   Sparkles,
// } from "lucide-react";
// // import CountUp from "react-countup";
// import dynamic from "next/dynamic"; 

// const CountUp = dynamic(() => import("react-countup"),{
//     ssr: false,
//   });




// export default function HeroSwiper() {

 
//   const { hero } = siteData;

//   return (
//     <Swiper
//       modules={[Autoplay, EffectFade]}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       effect="fade"
//       loop
//       className="h-screen"
//     >
//       {hero.slides.map((slide, index) => (
//         <SwiperSlide
//           key={index}
//           className="relative"
//         >

//           {/* BACKGROUND */}
//           <div className="absolute inset-0">

//             {/* IMAGE */}
//             <ImageParallaxZoom>
//             <Image
//               src={slide.image}
//               alt={slide.heading}
//               fill
//               priority={index === 0}
//               className="object-cover"
//             />
//             </ImageParallaxZoom>

//             {/* DARK TRANSPARENT OVERLAY */}
//             <div className="absolute inset-0 bg-black/35" />

//           </div>

//           {/* CONTENT */}
//           <Container>
//             <div className="relative z-20 flex min-h-screen items-center">

//               <div className="max-w-2xl">

//                 {/* BADGE */}
//                 <FadeUp className="mb-5 flex items-center gap-3">
//                   <>
//                     <Sparkles className="h-4 w-4 text-[#43B6CF]" />

//                     <p className="text-xs sm:text-sm font-semibold tracking-wide text-white">
//                       {hero.badge}
//                     </p>
//                   </>
//                 </FadeUp>

//                 {/* HEADING */}
//                 <FadeUp>
//                   <h1 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#43B6CF] drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
//                     {/* className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#43B6CF] drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"> */}

//                     {/* className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#43B6CF]"> */}
//                     {slide.heading}
//                   </h1>
//                 </FadeUp>

//                 <FadeUp>
//                   <h2 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-light leading-[1.02] tracking-[-0.05em] text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">


//                     {slide.heading1}
//                   </h2>
//                 </FadeUp>

//                 <FadeUp>
//                   <h3 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#43B6CF] drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
//                     {/* className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#43B6CF]"> */}
//                     {slide.heading2}
//                   </h3>
//                 </FadeUp>

//                 {/* SUBTEXT */}
//                 <FadeUp>
//                   <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-white/90 drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
//                     {slide.subtext}
//                   </p>
//                 </FadeUp>

//                 {/* FEATURES */}
//                 <div className="mt-8 flex flex-wrap gap-3">
//                   {hero.features.map((item, i) => (
//                     <FadeUp key={i}>
//                       <div className="flex items-center gap-2 rounded-xl border font-semibold border-white/10 bg-white/80 backdrop-blur-md px-4 py-2 text-xs sm:text-sm text-[#1D3173] drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
//                         <CheckCircle2 className="h-4 w-4 text-[#1D3173]" />
//                         {item}
//                       </div>
//                     </FadeUp>
//                   ))}
//                 </div>

//                 {/* BUTTONS */}
//                 <FadeUp>
//                   <div className="mt-10 flex flex-col gap-3 sm:flex-row">

//                     {/* PRIMARY */}
//                     <button className="flex items-center justify-center gap-2 rounded-xl bg-[#1D3173] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#43B6CF]">
//                       {hero.cta.primary}

//                       <ArrowRight className="h-4 w-4" />
//                     </button>

//                     {/* SECONDARY */}
//                     <button className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
//                       {hero.cta.secondary} ↗
//                     </button>

//                   </div>
//                 </FadeUp>



//               </div>

//             </div>
//           </Container>

//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
















// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// import { siteData } from "../../data/siteData";
// import Container from "../ui/Container";
// import FadeUp from "../animations/FadeUp";
// import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

// export default function HeroSwiper() {
//     const { hero } = siteData;

//     return (
//         <Swiper
//             modules={[Autoplay, EffectFade]}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             pagination={{ clickable: true }}
//             effect="fade"
//             loop
//             className="h-screen"
//         >
//             {hero.slides.map((slide, index) => (
//                 <SwiperSlide key={index} className="relative">

//                     {/* BACKGROUND IMAGE (SLIDES) */}
//                     <div className="absolute inset-0">
//                         <Image
//                             src={slide.image}
//                             alt={slide.heading}
//                             fill
//                             priority
//                             className="object-cover"
//                         />


//                         {/* yo chai paxi add gare ko ho */}
//                         <div className="absolute inset-0 bg-gradient-to-l w-[50%]S from-black/50 via-black/30 via-10% to-transparent" />

//                         <div className="absolute left-0 bg-gradient-to-r top-0 h-full w-[55%] bg-linear-to-r from-white via-white/80 via-65% to-transparent" />
//                     </div>

//                     {/* CONTENT (UNCHANGED UI) */}
//                     <Container>
//                         <div className="relative z-20 flex min-h-screen items-center">
//                             <div className="max-w-2xl">

//                                 {/* BADGE (STATIC) */}
//                                 <FadeUp className="mb-5 flex items-center gap-3">
//                                     <>
//                                         <Sparkles className="h-4 w-4 text-[#43B6CF]" />
//                                         <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#1D3173]">
//                                             {hero.badge}
//                                         </p>
//                                     </>
//                                 </FadeUp>

//                                 {/* HEADINGS (SLIDE CHANGES) */}
//                                 <FadeUp>
//                                     <h1 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#1D3173]">
//                                         {slide.heading}
//                                     </h1>
//                                 </FadeUp>

//                                 <FadeUp>
//                                     <h1 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-light leading-[1.02] tracking-[-0.05em] text-[#1D3173]">
//                                         {slide.heading1}
//                                     </h1>
//                                 </FadeUp>

//                                 <FadeUp>
//                                     <h1 className="max-w-xl text-[34px] sm:text-[46px] md:text-[58px] xl:text-[70px] font-bold leading-[1.02] tracking-[-0.05em] text-[#1D3173]">
//                                         {slide.heading2}
//                                     </h1>
//                                 </FadeUp>

//                                 {/* SUBTEXT (SLIDE CHANGES) */}
//                                 <FadeUp>
//                                     <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-slate-700">
//                                         {slide.subtext}
//                                     </p>
//                                 </FadeUp>

//                                 {/* FEATURES (STATIC) */}
//                                 <div className="mt-8 flex flex-wrap gap-3">
//                                     {hero.features.map((item, i) => (
//                                         <FadeUp key={i}>
//                                             <div className="flex items-center gap-2 rounded-full border-slate-200 bg-white/90 px-4 py-2 text-xs sm:text-sm text-slate-700">
//                                                 <CheckCircle2 className="h-4 w-4 text-[#43B6CF]" />
//                                                 {item}
//                                             </div>
//                                         </FadeUp>
//                                     ))}
//                                 </div>

//                                 {/* BUTTONS (STATIC) */}
//                                 <FadeUp>
//                                     <div className="mt-10 flex flex-col gap-3 sm:flex-row">

//                                         <button className="flex items-center justify-center gap-2 rounded-full bg-[#43B6CF] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#1D3173]">
//                                             {hero.cta.primary}
//                                             <ArrowRight className="h-4 w-4" />
//                                         </button>

//                                         <button className="rounded-full border border-[#1D3173]/20 bg-white/70 px-7 py-3 text-sm font-semibold text-[#1D3173] backdrop-blur transition hover:bg-white">
//                                             {hero.cta.secondary} ↗
//                                         </button>

//                                     </div>
//                                 </FadeUp>

//                                 {/* STATS (STATIC) */}
//                                 <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
//                                     {hero.stats.map((stat, i) => (
//                                         <div
//                                             key={i}
//                                             className="rounded-xl border border-slate-200 bg-white p-4 text-center"
//                                         >
//                                             <h3 className="text-xl sm:text-2xl font-black text-[#1D3173]">
//                                                 {stat.number}
//                                                 <span className="text-[#43B6CF]">+</span>
//                                             </h3>

//                                             <p className="mt-1 text-xs text-slate-500">
//                                                 {stat.label}
//                                             </p>
//                                         </div>
//                                     ))}
//                                 </div>

//                             </div>
//                         </div>
//                     </Container>

//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// }