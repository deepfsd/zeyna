"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Fintech Dashboard",
      category: "UI/UX & Frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "SaaS Platform",
      category: "Fullstack Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      link: "#"
    },
    {
      id: 4,
      title: "Creative Agency Site",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#050505] relative text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 text-rose-500 font-medium tracking-[0.2em] uppercase text-sm mb-6">
              <span className="w-12 h-px bg-rose-500"></span>
              Selected Work
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1]">
              Recent case studies.
            </h2>
          </div>
          <Link
            href="#"
            className="group flex items-center text-sm font-medium uppercase tracking-wider text-white hover:text-rose-500 transition-colors"
          >
            <span className="mr-4">View All Projects</span>
            <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-rose-500 flex items-center justify-center transition-colors">
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 flex justify-between items-end translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <p className="text-rose-500 font-medium tracking-widest uppercase text-xs mb-3">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
