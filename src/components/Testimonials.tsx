"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Working with Zeyna transformed our digital presence. They didn't just design a website; they crafted an experience that our users love.",
      author: "Sarah Jenkins",
      role: "CMO, TechNova",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "The attention to detail and creative vision the team brought to our SaaS product was unparalleled. Our conversion rates doubled within weeks.",
      author: "David Chen",
      role: "Founder, GrowthStack",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "An absolute pleasure to collaborate with. They understood our brand identity immediately and translated it into a stunning digital platform.",
      author: "Elena Rodriguez",
      role: "Creative Director, Bloom",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#050505] relative text-white overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter mix-blend-overlay">
        TESTIMONIALS
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 text-rose-500 font-medium tracking-[0.2em] uppercase text-sm mb-6">
            <span className="w-12 h-px bg-rose-500"></span>
            Client Love
            <span className="w-12 h-px bg-rose-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] max-w-2xl">
            What our partners <br />
            say about us.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative h-[400px] md:h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center text-center transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } ${index !== currentIndex && direction === "right" && currentIndex > index ? "-translate-x-full" : ""}
                ${index !== currentIndex && direction === "left" && currentIndex < index ? "translate-x-full" : ""}`}
              style={{
                 transform: index === currentIndex ? 'translateX(0)' : (direction === 'right' ? 'translateX(100px)' : 'translateX(-100px)'),
              }}
            >
              <Quote size={48} className="text-rose-500/20 mb-8" />
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-12 max-w-3xl">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold tracking-tight text-white">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-400 font-light uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-16">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
