import nextjsLogo from '@assets/download_1778839862524.png';

const technologies: { name: string; img: string; color: string; invert?: boolean }[] = [
  {
    name: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    color: 'hover:shadow-[0_0_30px_rgba(97,218,251,0.4)]'
  },
  {
    name: 'Node.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    color: 'hover:shadow-[0_0_30px_rgba(104,160,99,0.4)]'
  },
  {
    name: 'MongoDB',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    color: 'hover:shadow-[0_0_30px_rgba(71,162,72,0.4)]'
  },
  {
    name: 'Express',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    color: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]',
    invert: true
  },
  {
    name: 'Firebase',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    color: 'hover:shadow-[0_0_30px_rgba(255,160,0,0.4)]'
  },
  {
    name: 'Supabase',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    color: 'hover:shadow-[0_0_30px_rgba(63,207,142,0.4)]'
  },
  {
    name: 'Tailwind',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    color: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]'
  },
  {
    name: 'Next.js',
    img: nextjsLogo,
    color: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]',
    invert: true
  },
  {
    name: 'TypeScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    color: 'hover:shadow-[0_0_30px_rgba(49,120,198,0.4)]'
  },
  {
    name: 'PostgreSQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    color: 'hover:shadow-[0_0_30px_rgba(51,103,145,0.4)]'
  },
];

export function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />

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
              <img
                src={tech.img}
                alt={tech.name}
                className={`w-9 h-9 md:w-10 md:h-10 object-contain ${tech.invert ? 'invert' : ''} group-hover:scale-110 transition-transform duration-300`}
              />
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
          will-change: transform;
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
