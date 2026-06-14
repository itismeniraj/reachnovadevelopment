import Image from "next/image";
import Hero from "./components/sections/Hero";

import AboutSection from "./components/sections/About";
import Services from "./components/sections/Services";
import ProjectsSection from "./components/sections/Projects";
import ProcessSection from "./components/sections/Process";
import ContactSection from "./components/sections/Contact";
import CTASection from "./components/sections/CTA";
import StatsSection from "./components/sections/STA";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
    <main >
      <Hero />
      <StatsSection />
      <AboutSection />
      <Services />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <CTASection />
      
      
    </main>
    </ReactLenis>
  );
}
