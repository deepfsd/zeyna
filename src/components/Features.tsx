import { Settings, Zap, Layers, RefreshCcw } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Modular Design",
      description: "Build interfaces faster with customizable, reusable components tailored to your brand identity.",
      icon: <Layers size={24} className="text-white" />
    },
    {
      id: 2,
      title: "Lightning Fast",
      description: "Optimized performance and seamless animations using cutting-edge technologies.",
      icon: <Zap size={24} className="text-white" />
    },
    {
      id: 3,
      title: "Advanced Customization",
      description: "Deep styling capabilities to make your product stand out from the competition.",
      icon: <Settings size={24} className="text-white" />
    },
    {
      id: 4,
      title: "Continuous Updates",
      description: "Regular updates ensuring your platform remains secure and ahead of trends.",
      icon: <RefreshCcw size={24} className="text-white" />
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-black relative text-white border-t border-white/5">
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-blue-600/5 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Col - Features List */}
        <div className="w-full lg:w-1/2 space-y-12 z-10">
          <div>
            <div className="flex items-center gap-4 text-blue-500 font-medium tracking-[0.2em] uppercase text-sm mb-6">
              <span className="w-12 h-px bg-blue-500"></span>
              Core Features
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
              Powerful tools <br />
              for modern teams.
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed max-w-lg">
              We provide the infrastructure and design systems necessary to build scalable digital products quickly without compromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">{feature.title}</h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col - Visual/Mockup */}
        <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden glass p-8 z-10 border border-white/10">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
           <img
             src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
             alt="Feature Mockup"
             className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
           />
           <div className="absolute bottom-12 left-12 glass p-6 rounded-xl border border-white/20 shadow-xl backdrop-blur-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
             <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">System Status</p>
             <p className="text-lg text-white font-medium">All systems operational</p>
           </div>
        </div>
      </div>
    </section>
  );
}
