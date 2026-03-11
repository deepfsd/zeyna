export default function Stats() {
  const stats = [
    {
      id: 1,
      value: "150+",
      label: "Projects Completed"
    },
    {
      id: 2,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      id: 3,
      value: "25+",
      label: "Awards Won"
    },
    {
      id: 4,
      value: "10M+",
      label: "Users Reached"
    }
  ];

  return (
    <section className="py-24 bg-black relative text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group ${
              index % 2 !== 0 ? 'md:translate-y-12' : ''
            }`}
          >
            {/* Hover gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 group-hover:from-rose-400 group-hover:to-orange-400 transition-all duration-500">
              {stat.value}
            </h3>
            <p className="text-sm md:text-base text-neutral-400 font-medium uppercase tracking-widest group-hover:text-white transition-colors duration-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
