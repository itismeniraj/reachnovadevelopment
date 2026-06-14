"use client";

import Container from "../ui/Container";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteData } from "../../data/siteData";
import FadeUp from "../animations/FadeUp";
import ProjectSlider from "../ui/ProjectSlider";

export default function ProjectsSection() {
  const projects = siteData?.projects ?? [];
  const projectsSection = siteData?.projectsSection;

  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <section
      id="projects"
      className="py-16 md:py-20 lg:py-28"
      style={{
        backgroundColor: "var(--projects-section-bg)",
      }}
    >
      <Container>
        {/* HEADER */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <FadeUp>
            <p
              className="text-sm font-bold tracking-[0.25em]"
              style={{
                color: "var(--projects-badge)",
              }}
            >
              {projectsSection.badge}
            </p>
          </FadeUp>

          <FadeUp>
            <h2
              className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black"
              style={{
                color: "var(--projects-title)",
              }}
            >
              {projectsSection.title}
            </h2>
          </FadeUp>

          <FadeUp>
            <p
              className="mt-4 leading-relaxed"
              style={{
                color: "var(--projects-description)",
              }}
            >
              {projectsSection.description}
            </p>
          </FadeUp>
        </div>

        {!hasProjects && (
          <p className="text-white/60 text-center">
            No projects available.
          </p>
        )}

        {hasProjects && (
          <div className="mx-auto max-w-7xl">
            {/* FRAME */}
            <div
              className="rounded-3xl border-2 shadow-2xl p-3"
              style={{
                borderColor: "var(--projects-frame-border)",
                backgroundColor: "var(--projects-frame-bg)",
              }}
            >
              {/* TOP BAR */}
              <div
                className="relative h-12 w-full flex items-center px-5 rounded-t-2xl border-b"
                style={{
                  backgroundColor: "var(--projects-topbar-bg)",
                  borderColor: "var(--projects-topbar-border)",
                }}
              >
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div
                  className="absolute left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-medium whitespace-nowrap"
                  style={{
                    color: "var(--projects-topbar-text)",
                  }}
                >
                  portfolio / projects showcase
                </div>
              </div>

              {/* SCREEN */}
              <div
                className="rounded-b-2xl p-2 overflow-hidden"
                style={{
                  backgroundColor: "var(--projects-screen-bg)",
                }}
              >
                <ProjectSlider
                  items={projects}
                  interval={5000}
                  renderSlide={(project) => (
                    <div className="flex flex-col lg:flex-row">
                      {/* IMAGE */}
                      <div className="relative w-full lg:w-1/2 h-[220px] sm:h-[320px] md:h-[420px] lg:h-[540px] xl:h-[620px]">
                        <Image
                          src={project?.image || "/placeholder.png"}
                          alt={project?.title || "Project"}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="w-full lg:w-1/2 p-5 sm:p-6 md:p-10 lg:p-14 flex flex-col justify-center min-h-[400px]">
                        <span
                          className="text-xs font-bold"
                          style={{
                            color: "var(--projects-category)",
                          }}
                        >
                          {project?.category || "Project"}
                        </span>

                        <h3
                          className="mt-3 text-xl sm:text-2xl md:text-3xl font-black break-words"
                          style={{
                            color: "var(--projects-heading)",
                          }}
                        >
                          {project?.title || "Untitled Project"}
                        </h3>

                        <p
                          className="mt-4 text-sm sm:text-base leading-6 sm:leading-7"
                          style={{
                            color: "var(--projects-text)",
                          }}
                        >
                          {project?.description ||
                            "No description available."}
                        </p>

                        {/* STACK */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {(project?.stack ?? []).map(
                            (tech: string, idx: number) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 rounded-full"
                                style={{
                                  backgroundColor:
                                    "var(--projects-stack-bg)",
                                  color:
                                    "var(--projects-stack-text)",
                                }}
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>

                        {/* BUTTONS */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                          {project?.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full transition"
                              style={{
                                backgroundColor:
                                  "var(--projects-btn-bg)",
                                color:
                                  "var(--projects-btn-text)",
                              }}
                            >
                              GitHub
                            </a>
                          )}

                          {project?.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full border transition"
                              style={{
                                borderColor:
                                  "var(--projects-outline-border)",
                                color:
                                  "var(--projects-outline-text)",
                              }}
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}










// "use client";

// import Container from "../ui/Container";
// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import { siteData } from "../../data/siteData";
// import FadeUp from "../animations/FadeUp";
// import ProjectSlider from "../ui/ProjectSlider";

// export default function ProjectsSection() {
//   const projects = siteData?.projects ?? [];
//   const projectsSection = siteData?.projectsSection;

//   const hasProjects = Array.isArray(projects) && projects.length > 0;

//   return (
//     <section id="projects" className="bg-[#0B1B3A] py-16 md:py-20 lg:py-28">
//       <Container>
//         {/* HEADER */}
//         <div className="max-w-2xl mx-auto mb-10 text-center">
//           <FadeUp>
//             <p className="text-sm font-bold tracking-[0.25em] text-[#43B6CF]">
//               {projectsSection.badge}
//             </p>
//           </FadeUp>

//           <FadeUp>
//             <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
//               {projectsSection.title}
//             </h2>
//           </FadeUp>

//           <FadeUp>
//             <p className="mt-4 text-slate-300 leading-relaxed">
//               {projectsSection.description}
//             </p>
//           </FadeUp>
//         </div>

//         {!hasProjects && (
//           <p className="text-white/60 text-center">No projects available.</p>
//         )}

//         {hasProjects && (
//           <div className="mx-auto max-w-7xl">
//             {/* FRAME */}
//             <div className="rounded-3xl border-2 border-white/70 shadow-2xl bg-[#1D3173]/10 p-3">
              
//               {/* TOP BAR */}
//               <div className="relative h-12 w-full bg-white flex items-center px-5 border-b border-black/20 rounded-t-2xl">
//                 <div className="flex gap-2">
//                   <span className="h-3 w-3 rounded-full bg-red-400" />
//                   <span className="h-3 w-3 rounded-full bg-yellow-400" />
//                   <span className="h-3 w-3 rounded-full bg-green-400" />
//                 </div>

//                 <div className="absolute left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-slate-500 font-medium whitespace-nowrap">
//                   portfolio / projects showcase
//                 </div>
//               </div>

//               {/* SCREEN */}
//               <div className="bg-white rounded-b-2xl p-2 overflow-hidden">
                
//                 <ProjectSlider
//                   items={projects}
//                   interval={5000}
//                   renderSlide={(project) => (
//                     <div className="flex flex-col lg:flex-row">
                      
//                       {/* IMAGE */}
//                       <div className="relative w-full lg:w-1/2 h-[220px] sm:h-[320px] md:h-[420px] lg:h-[540px] xl:h-[620px]">
//                         <Image
//                           src={project?.image || "/placeholder.png"}
//                           alt={project?.title || "Project"}
//                           fill
//                           className="object-cover rounded-xl"
//                         />
//                       </div>

//                       {/* CONTENT */}
//                       <div className="w-full lg:w-1/2 p-5 sm:p-6 md:p-10 lg:p-14 flex flex-col justify-center min-h-[400px]">
//                         <span className="text-xs font-bold text-[#43B6CF]">
//                           {project?.category || "Project"}
//                         </span>

//                         <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-black text-[#1D3173] break-words">
//                           {project?.title || "Untitled Project"}
//                         </h3>

//                         <p className="mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
//                           {project?.description || "No description available."}
//                         </p>

//                         {/* STACK */}
//                         <div className="mt-5 flex flex-wrap gap-2">
//                           {(project?.stack ?? []).map((tech: string, idx: number) => (
//                             <span
//                               key={idx}
//                               className="text-xs px-3 py-1 rounded-full bg-[#1D3173] text-white"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         {/* BUTTONS */}
//                         <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
//                           {project?.github && (
//                             <a
//                               href={project.github}
//                               target="_blank"
//                               className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1D3173] text-white hover:bg-[#43B6CF] transition "
//                             >
//                               GitHub
//                             </a>
//                           )}

//                           {project?.demo && (
//                             <a
//                               href={project.demo}
//                               target="_blank"
//                               className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#1D3173] text-[#1D3173] hover:text-[#1D3173] transition"
//                             >
//                               <ExternalLink className="h-4 w-4" />
//                               Live
//                             </a>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </Container>
//     </section>
//   );
// }









// "use client";

// import Container from "../ui/Container";
// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import { siteData } from "../../data/siteData";
// import { useEffect, useRef, useState } from "react";
// import FadeUp from "../animations/FadeUp";

// export default function ProjectsSection() {
//   const projects = siteData?.projects ?? [];
//   const projectsSection =siteData?.projectsSection;
  

//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const [index, setIndex] = useState(0);

//   const hasProjects = Array.isArray(projects) && projects.length > 0;

//   // AUTO SLIDE
//   useEffect(() => {
//     if (!hasProjects) return;

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % projects.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [hasProjects, projects.length]);

//   // SCROLL SYNC
//   useEffect(() => {
//     if (!sliderRef.current || !hasProjects) return;

//     const el = sliderRef.current;
//     const width = el.clientWidth || 0;

//     el.scrollTo({
//       left: width * index,
//       behavior: "smooth",
//     });
//   }, [index, hasProjects]);

//   return (
//     <section id="projects" className="bg-[#0B1B3A] py-16 md:py-20 lg:py-28">
//       <Container>

//         {/* HEADER */}
//         <div className="max-w-2xl mx-auto mb-10 lg:mg-14 text-center">
//           <FadeUp>
//           <p className="text-sm font-bold tracking-[0.25em] text-[#43B6CF]">
//             {projectsSection.badge}
//           </p>
//           </FadeUp>

//           <FadeUp>

//           <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-white">
//             {projectsSection.title}
//           </h2>

//           </FadeUp>

//           <FadeUp>

//           <p className="mt-4 text-slate-300 leading-relaxed">
//             {projectsSection.description}
//           </p>

//           </FadeUp>
//         </div>

//         {!hasProjects && (
//           <p className="text-white/60 text-center">No projects available.</p>
//         )}

//         {hasProjects && (
//           <div className="mx-auto max-w-7xl">

//             {/* FRAME */}
//             <div className="overflow-hidden rounded-3xl border-2 border-white/70 shadow-2xl bg-[#1D3173]/10 p-3">

//               {/* TOP BAR */}
//               <div className="h-12 w-full rounded-t-2xl bg-white flex items-center px-5 border-b border-black/20">
//                 <div className="flex gap-2">
//                   <span className="h-3 w-3 rounded-full bg-red-400"></span>
//                   <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
//                   <span className="h-3 w-3 rounded-full bg-green-400"></span>
//                 </div>

//                 <div className="mx-auto text-xs text-slate-500 font-medium">
//                   portfolio / projects showcase
//                 </div>
//               </div>

//               {/* SCREEN */}
//               <div className="bg-white rounded-b-2xl overflow-hidden">

//                 {/* SLIDER */}
//                 <div
//                   ref={sliderRef}
//                   className="flex overflow-hidden scroll-smooth"
//                 >
//                   {projects.map((project, i) => (
//                     <div
//                       key={project?.id ?? i}
//                       className="min-w-full flex flex-col lg:flex-row"
//                     >

//                       {/* IMAGE */}
//                       <div className="relative w-full lg:w-1/2 h-[260px] lg:h-[540px]">
//                         <Image
//                           src={project?.image || "/placeholder.png"}
//                           alt={project?.title || "Project"}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>

//                       {/* CONTENT */}
//                       <div className="w-full lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center">

//                         <span className="text-xs font-bold text-[#43B6CF]">
//                           {project?.category || "Project"}
//                         </span>

//                         <h3 className="mt-3 text-3xl font-black text-[#1D3173]">
//                           {project?.title || "Untitled Project"}
//                         </h3>

//                         <p className="mt-5 text-slate-600 leading-7">
//                           {project?.description || "No description available."}
//                         </p>

//                         {/* STACK */}
//                         <div className="mt-6 flex flex-wrap gap-2">
//                           {(project?.stack ?? []).map((tech: string, idx: number) => (
//                             <span
//                               key={idx}
//                               className="text-xs px-3 py-1 rounded-full bg-[#1D3173] text-white"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         {/* BUTTONS */}
//                         <div className="mt-10 flex flex-wrap gap-4">

//                           {/* GITHUB (SVG ICON - NO ERROR EVER) */}
//                           {project?.github && (
//                             <a
//                               href={project.github}
//                               target="_blank"
//                               className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#1D3173] text-white hover:bg-[#43B6CF] transition"
//                             >
//                               <svg
//                                 className="h-4 w-4"
//                                 viewBox="0 0 24 24"
//                                 fill="currentColor"
//                               >
//                                 <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.2 3.2 2.2 2.2 0 2.8-1.1 3.2-2.2.2-1.6.8-1.1 1.7-1.1.1 0 1.2 0 .1.7 0 0-.7.4-1.2 1.6 0 0-.7 2.1-3.9 1.4v2.1c0 .4.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12 23.5 5.7 18.3.5 12 .5z" />
//                               </svg>

//                               GitHub
//                             </a>
//                           )}

//                           {/* LIVE DEMO */}
//                           {project?.demo && (
//                             <a
//                               href={project.demo}
//                               target="_blank"
//                               className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#1D3173] text-[#1D3173] hover:bg-[#1D3173] hover:text-white transition"
//                             >
//                               <ExternalLink className="h-4 w-4" />
//                               Live Demo
//                             </a>
//                           )}

//                           {!project?.github && !project?.demo && (
//                             <span className="text-xs text-slate-400">
//                               No links available
//                             </span>
//                           )}
//                         </div>

//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* DOTS */}
//                 <div className="flex justify-center gap-2 py-5 bg-white">
//                   {projects.map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setIndex(i)}
//                       className={`h-2 rounded-full transition-all ${
//                         i === index ? "w-6 bg-[#43B6CF]" : "w-2 bg-slate-300"
//                       }`}
//                     />
//                   ))}
//                 </div>

//               </div>
//             </div>
//           </div>
//         )}

//       </Container>
//     </section>
//   );
// }