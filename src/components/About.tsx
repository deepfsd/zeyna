export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#050505] relative text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Col - Image */}
        <div className="relative group overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop"
            alt="Zeyna Office"
            className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 z-20">
            <h3 className="text-3xl font-bold tracking-tight mb-2">Award Winning.</h3>
            <p className="text-neutral-300 font-light">Global reach, local impact.</p>
          </div>
        </div>

        {/* Right Col - Text */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 text-rose-500 font-medium tracking-[0.2em] uppercase text-sm">
            <span className="w-12 h-px bg-rose-500"></span>
            Who We Are
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1]">
            We build experiences <br />
            that matter.
          </h2>

          <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
            At Zeyna, we blur the line between design and technology. We believe in crafting digital products that not only look beautiful but function flawlessly.
          </p>

          <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
            Our team of creative thinkers and technical experts work together to transform your vision into reality, pushing boundaries and challenging the status quo.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">150+</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider font-medium">Projects Delivered</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">12</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
