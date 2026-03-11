"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const container = useRef(null);

  // Parallax background logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      const bg = document.getElementById("hero-bg-layer");
      if (bg) {
        bg.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Background elements */}
      <div id="hero-bg-layer" className="absolute inset-0 z-0 transition-transform duration-300 ease-out">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-rose-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-0 pointer-events-none"></div>

      <div className="container relative z-10 px-6 lg:px-12 mx-auto flex flex-col items-center justify-center text-center">
        <div className="overflow-hidden hero-text-reveal">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-4">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
              DIGITAL
            </span>{" "}
            FUTURES.
          </h1>
        </div>

        <div className="overflow-hidden mt-6 hero-text-reveal delay-100">
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light mx-auto">
            We are a premium creative agency delivering forward-thinking digital experiences, innovative SaaS solutions, and immersive branding.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 hero-btn-reveal delay-200">
          <Link
            href="#portfolio"
            className="group relative px-8 py-4 bg-white text-black font-medium uppercase tracking-wider overflow-hidden rounded-full flex items-center justify-center transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white font-medium uppercase tracking-wider rounded-full hover:bg-white/5 transition-all hover:border-white/40 flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
        <span className="text-xs uppercase tracking-[0.3em] mb-2 font-light">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
