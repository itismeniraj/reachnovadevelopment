"use client";

import {
  Users,
  GraduationCap,
  Globe2,
} from "lucide-react";

import Container from "../ui/Container";
import { siteData } from "../../data/siteData";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function StatsSection() {
  const { hero } = siteData;

  const icons = [Users, GraduationCap, Globe2];

  return (
    <section
      className="py-10 md:py-12 lg:py-16"
      style={{ backgroundColor: "var(--stats-bg)" }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

          {hero.stats.map((stat, index) => {
            const Icon = icons[index];

            return (
              <div key={index} className="flex flex-col items-center">

                {/* ICON */}
                <div className="mb-5">
                  <Icon
                    className="h-10 w-10 md:h-12 md:w-12"
                    style={{ color: "var(--stats-icon)" }}
                  />
                </div>

                {/* NUMBER */}
                <h3
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none"
                  style={{ color: "var(--stats-number)" }}
                >
                  <AnimatedCounter
                    end={stat.number}
                    suffix="+"
                  />
                </h3>

                {/* LABEL */}
                <p
                  className="mt-3 max-w-[180px] text-sm md:text-base"
                  style={{ color: "var(--stats-label)" }}
                >
                  {stat.label}
                </p>

              </div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}




// "use client";

// import {
//   Users,
//   GraduationCap,
//   Globe2,
// } from "lucide-react";

// import Container from "../ui/Container";
// import { siteData } from "../../data/siteData";
// import AnimatedCounter from "../ui/AnimatedCounter";

// export default function StatsSection() {
//   const { hero } = siteData;

//   const icons = [Users, GraduationCap, Globe2];

//   return (
//     <section className="py-10 md:py-12 lg:py-16 bg-white/80">
//       <Container>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

//           {hero.stats.map((stat, index) => {
//             const Icon = icons[index];

//             return (
//               <div
//                 key={index}
//                 className="flex flex-col items-center"
//               >
//                 {/* Icon */}
//                 <div className="mb-5">
//                   <Icon className="h-10 w-10 md:h-12 md:w-12 text-[#43B6CF]" />
//                 </div>

//                 {/* Number */}
//                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D3173] leading-none">
//                   <AnimatedCounter
//                     end={stat.number}
//                     suffix="+"
//                   />
//                 </h3>

//                 {/* Label */}
//                 <p className="mt-3 max-w-[180px] text-sm md:text-base text-slate-600">
//                   {stat.label}
//                 </p>
//               </div>
//             );
//           })}

//         </div>
//       </Container>
//     </section>
//   );
// }