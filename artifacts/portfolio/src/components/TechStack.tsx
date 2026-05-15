import nextjsLogo from '@assets/download_1778839862524.png';

const technologies: { name: string; icon: string; img?: string; color: string }[] = [
  { name: 'React',      icon: '⚛️',  color: 'hover:shadow-[0_0_30px_rgba(97,218,251,0.4)]' },
  { name: 'Node.js',    icon: '🟢',  color: 'hover:shadow-[0_0_30px_rgba(104,160,99,0.4)]' },
  { name: 'MongoDB',    icon: '🍃',  color: 'hover:shadow-[0_0_30px_rgba(71,162,72,0.4)]' },
  { name: 'Express',    icon: '🚂',  color: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]' },
  { name: 'Firebase',   icon: '🔥',  color: 'hover:shadow-[0_0_30px_rgba(255,160,0,0.4)]' },
  { name: 'Supabase',   icon: '⚡',  color: 'hover:shadow-[0_0_30px_rgba(63,207,142,0.4)]' },
  { name: 'Tailwind',   icon: '🌊',  color: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]' },
  { name: 'Next.js',    icon: '',    img: nextjsLogo, color: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]' },
  { name: 'TypeScript', icon: '💙',  color: 'hover:shadow-[0_0_30px_rgba(49,120,198,0.4)]' },
  { name: 'PostgreSQL', icon: '🐘',  color: 'hover:shadow-[0_0_30px_rgba(51,103,145,0.4)]' },
];

export function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-4">Core Arsenal</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
      </div>

      {/* Marquee wrapper */}
      <div className="relative w-full overflow-hidden mask-edges">
        <div className="flex gap-6 px-3 marquee-track">
          {/* Triple for seamless loop */}
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className={`flex-shrink-0 flex items-center gap-3 px-5 py-4 md:px-8 md:py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 ${tech.color} group`}
            >
              {tech.img ? (
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-10 h-10 object-contain invert group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
              )}
              <span className="text-base md:text-xl font-bold text-white/80 group-hover:text-white transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .marquee-track {
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
