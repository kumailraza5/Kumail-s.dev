import { useRef, useEffect } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import imgAurevo from '@assets/aurevo_1778343304802.png';
import imgCar from '@assets/carshowroom_1778343304806.png';
import imgObe from '@assets/obe_1778343304806.png';
import imgPink from '@assets/pink_1778343304807.png';
import imgPurple from '@assets/purple_1778343304808.jpeg';
import imgSalon from '@assets/salonn_1778343304808.jpg';

const projects = [
  {
    title: 'USP OBE System',
    description: 'Full-stack Outcome-Based Education system built with React (TypeScript), Node.js, Tailwind CSS, and Supabase. Manages students, courses, CLOs/PLOs, and assessments while tracking learning outcomes through data-driven dashboards.',
    tags: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Tailwind CSS'],
    image: imgObe,
    accent: 'from-blue-500 to-indigo-600',
    accentShadow: 'rgba(59,130,246,0.25)',
    github: 'https://github.com/kumailraza5/OBE-System',
    live: 'https://obe-system-w2wd.onrender.com/',
    number: '01',
  },
  {
    title: 'Aurevo Store',
    description: 'Modern full-stack eCommerce store built with React and Supabase. Offers a smooth shopping experience for premium watches and luxury perfumes — with secure authentication, cart features, and a clean responsive UI.',
    tags: ['React', 'TypeScript', 'Supabase', 'E-Commerce'],
    image: imgAurevo,
    accent: 'from-emerald-400 to-teal-600',
    accentShadow: 'rgba(52,211,153,0.25)',
    github: 'https://github.com/kumailraza5/Aurevo.store',
    live: 'https://aurevostore.pk/',
    number: '02',
  },
  {
    title: 'Elite Motors',
    description: 'A modern and responsive Luxury Car Showroom website built with React and Tailwind CSS. Features smooth animations, interactive car listings, and a clean, elegant UI to showcase premium vehicles.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: imgCar,
    accent: 'from-orange-400 to-red-500',
    accentShadow: 'rgba(249,115,22,0.25)',
    github: 'https://github.com/kumailraza5/carshowroom_UI',
    live: 'https://carshowroom-ws42.onrender.com/',
    number: '03',
  },
  {
    title: 'Salon Web App',
    description: 'A modern salon website built with React featuring client reviews, service packages, online booking, and secure payment integration for a smooth and user-friendly experience.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Booking'],
    image: imgSalon,
    accent: 'from-pink-400 to-rose-600',
    accentShadow: 'rgba(244,114,182,0.25)',
    github: 'https://github.com/kumailraza5/Saloon_Web_UI',
    live: 'https://saloon-app-kiic.onrender.com/',
    number: '04',
  },
  {
    title: 'Bakery UI – Pink',
    description: 'A charming, responsive Bakery App interface built with a pink-themed palette, designed to bring bakery menus to life with appetizing visuals, intuitive navigation, and delightful animations.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
    image: imgPink,
    accent: 'from-fuchsia-400 to-pink-600',
    accentShadow: 'rgba(232,121,249,0.25)',
    github: 'https://github.com/kumailraza5/Bakery_APP_Pink',
    live: 'https://bakery-app-ui-pinktheme-1.onrender.com/',
    number: '05',
  },
  {
    title: 'Bakery UI – Purple',
    description: 'A charming, responsive Bakery App interface built with a purple-themed palette — bringing bakery menus to life with appetizing visuals, intuitive navigation, and delightful micro-animations.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
    image: imgPurple,
    accent: 'from-violet-400 to-purple-700',
    accentShadow: 'rgba(139,92,246,0.25)',
    github: 'https://github.com/kumailraza5/Bakery_APP_Purple',
    live: 'https://bakery-app-ui-purpletheme.onrender.com/',
    number: '06',
  },
];

const featured = projects.slice(0, 2);
const rest = projects.slice(2);

function FeaturedCard({ project, i }: { project: typeof projects[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
      const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      gsap.to(card, { rotateX, rotateY, transformPerspective: 1200, ease: 'power2.out', duration: 0.4 });
    };
    const onLeave = () => gsap.to(card, { rotateX: 0, rotateY: 0, ease: 'power2.out', duration: 0.6 });
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
  }, []);

  const reverse = i % 2 === 1;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: i * 0.15 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 bg-white/[0.03] transition-all duration-500"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
        style={{ boxShadow: `inset 0 0 80px ${project.accentShadow}` }}
      />

      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

        {/* Image */}
        <div className="relative w-full md:w-[55%] h-56 sm:h-72 md:h-80 overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Bottom fade to blend with card */}
          <div className={`absolute inset-0 ${reverse ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-[#0d0d0f]/80 hidden md:block`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/60 to-transparent md:hidden" />

          {/* Number badge */}
          <div className={`absolute top-4 ${reverse ? 'right-4' : 'left-4'} text-6xl font-black text-white/[0.08] leading-none select-none`}>
            {project.number}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
          {/* Accent line */}
          <div className={`w-10 h-1 bg-gradient-to-r ${project.accent} rounded-full mb-4`} />

          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
            {project.title}
          </h3>

          <p className="text-white/55 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map(tag => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.accent} bg-opacity-10 text-white/80 border border-white/10`}
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.accent} text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg`}
              style={{ boxShadow: `0 0 20px ${project.accentShadow}` }}
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 font-medium text-sm transition-all duration-300"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GridCard({ project, i }: { project: typeof projects[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
      const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      gsap.to(card, { rotateX, rotateY, transformPerspective: 1000, ease: 'power2.out', duration: 0.4 });
    };
    const onLeave = () => gsap.to(card, { rotateX: 0, rotateY: 0, ease: 'power2.out', duration: 0.5 });
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 bg-white/[0.03] transition-all duration-500 flex flex-col"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 50px ${project.accentShadow}` }}
      />

      {/* Number */}
      <div className="absolute top-3 right-4 text-5xl font-black text-white/[0.07] leading-none select-none z-10">
        {project.number}
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/70 via-transparent to-transparent" />

        {/* Accent bar at bottom of image */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className={`w-8 h-0.5 bg-gradient-to-r ${project.accent} rounded-full mb-3`} />

        <h3 className="text-lg font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
          {project.title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/65">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r ${project.accent} text-white font-semibold text-sm hover:opacity-90 transition-all duration-300`}
            style={{ boxShadow: `0 0 16px ${project.accentShadow}` }}
          >
            Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative z-10 bg-[#0d0d0f]">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3"
            >
              Real Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black mb-3"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-white/50 font-light max-w-xl"
            >
              A curated selection of real projects — built for clients, e-commerce, and academic systems.
            </motion.p>
          </div>
          <motion.a
            href="https://github.com/kumailraza5"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/25 text-sm font-medium transition-all group"
          >
            All Repos <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Featured — large horizontal cards */}
        <div className="flex flex-col gap-6 mb-6">
          {featured.map((project, i) => (
            <FeaturedCard key={project.title} project={project} i={i} />
          ))}
        </div>

        {/* Rest — 2-col grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((project, i) => (
            <GridCard key={project.title} project={project} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
