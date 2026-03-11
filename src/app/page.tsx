"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from(".hero-text-reveal > *", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".hero-btn-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

      // Section Animations (Staggered reveals)
      const sections = gsap.utils.toArray("section:not(:first-child)");
      sections.forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Services Stagger
      gsap.from("#services .group", {
        scrollTrigger: {
          trigger: "#services",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Portfolio Parallax
      gsap.utils.toArray("#portfolio img").forEach((img: any) => {
        gsap.to(img, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Stats counter animation
      const stats = gsap.utils.toArray("#stats h3");
      stats.forEach((stat: any) => {
          gsap.from(stat, {
              scrollTrigger: {
                  trigger: stat,
                  start: "top 85%",
              },
              innerHTML: 0,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: "power2.out"
          });
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-black min-h-screen text-white overflow-hidden selection:bg-rose-500 selection:text-white">
      <CustomCursor />
      <Header />

      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Features />
      <Testimonials />
      <div id="stats"><Stats /></div>
      <Team />
      <Contact />

      <Footer />
    </main>
  );
}
