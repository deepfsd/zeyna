import { Linkedin, Twitter, Dribbble } from "lucide-react";
import Link from "next/link";

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Alex Carter",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Maya Lin",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Jordan Smith",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Sophia Patel",
      role: "Marketing Head",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-[#050505] relative text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 text-rose-500 font-medium tracking-[0.2em] uppercase text-sm mb-6">
            <span className="w-12 h-px bg-rose-500"></span>
            Our Team
            <span className="w-12 h-px bg-rose-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] max-w-2xl">
            Meet the minds <br />
            behind the magic.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-12">
          {team.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 flex flex-col items-center translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1">{member.name}</h3>
                <p className="text-rose-500 font-medium tracking-widest uppercase text-xs mb-4">{member.role}</p>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors">
                    <Linkedin size={14} />
                  </Link>
                  <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors">
                    <Twitter size={14} />
                  </Link>
                  <Link href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors">
                    <Dribbble size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
