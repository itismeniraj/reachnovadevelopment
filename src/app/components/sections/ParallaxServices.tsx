"use client";

import Container from "../ui/Container";

export default function ParallaxServices() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ================= FIXED BACKGROUND ================= */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/images/services/parallax.jpg')",
        }}
      />

      {/* dark overlay */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      <Container>

        {/* ================= HERO CONTENT ================= */}
        <div className="min-h-screen flex flex-col justify-center items-start text-white">

          {/* small tag */}
          <p className="text-cyan-300 tracking-[0.3em] uppercase text-xs font-semibold">
            Our Services
          </p>

          {/* title */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mt-4">
            Smart Solutions <br />
            <span className="text-cyan-400">for a Digital World</span>
          </h1>

          {/* description */}
          <p className="mt-6 max-w-xl text-white/70 text-lg leading-8">
            We provide modern IT solutions, consultancy, and digital services
            designed to help businesses grow globally with smart technology.
          </p>

          {/* button */}
          <button className="mt-8 px-6 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition">
            Explore Services
          </button>

        </div>

        {/* ================= SCROLL CONTENT (PARALLAX FEEL) ================= */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 max-w-2xl text-white shadow-2xl">

            <h2 className="text-3xl font-bold mb-4">
              Why Choose Us?
            </h2>

            <p className="text-white/70 leading-7">
              We combine innovation, technology, and strategy to deliver
              high-quality digital solutions. Our team focuses on performance,
              design, and user experience to ensure your business stands out
              in the digital world.
            </p>

          </div>
        </div>

      </Container>
    </section>
  );
}