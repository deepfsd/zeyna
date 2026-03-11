import { Smartphone, PenTool, LayoutDashboard, Database, Megaphone, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences tailored to your audience. We focus on modern aesthetics and usability.",
      icon: <PenTool size={32} className="text-rose-500 mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building scalable, high-performance web applications using modern frameworks like Next.js and Tailwind CSS.",
      icon: <LayoutDashboard size={32} className="text-orange-500 mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
    },
    {
      id: 3,
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications that provide native-like performance and stunning visuals.",
      icon: <Smartphone size={32} className="text-blue-500 mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
    },
    {
      id: 4,
      title: "Backend Systems",
      description: "Designing robust server architectures and APIs to power your digital products securely and efficiently.",
      icon: <Database size={32} className="text-green-500 mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Data-driven strategies to boost your online presence, reach target audiences, and increase conversions.",
      icon: <Megaphone size={32} className="text-purple-500 mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
    },
    {
      id: 6,
      title: "Cyber Security",
      description: "Implementing comprehensive security measures to protect your digital assets and user data from threats.",
      icon: <ShieldCheck size={32} className="text-yellow-500 mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-black relative text-white">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-rose-600/5 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 text-rose-500 font-medium tracking-[0.2em] uppercase text-sm mb-6">
              <span className="w-12 h-px bg-rose-500"></span>
              Our Solutions
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight max-w-2xl">
              Elevating brands through <br />
              strategic design.
            </h2>
          </div>
          <p className="text-neutral-400 font-light max-w-md md:text-right">
            We provide comprehensive digital solutions that cover the entire product lifecycle from ideation to launch and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-10 hover:border-white/20 hover:bg-[#111] transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 via-transparent to-transparent group-hover:from-rose-500/5 transition-colors duration-500"></div>

              <div className="relative z-10">
                {service.icon}
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-rose-400 transition-colors">{service.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex items-center text-sm font-medium uppercase tracking-wider text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="mr-2">Explore</span>
                  <span className="block w-6 h-px bg-white group-hover:w-10 transition-all duration-300"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
