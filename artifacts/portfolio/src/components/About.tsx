import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Happy Clients', value: '5' },
  { label: 'Technologies', value: '15+' },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.stat-card');
      gsap.fromTo(cards, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, [isInView]);

  return (
    <section id="about" className="py-16 md:py-32 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Redefining the{' '}
                <span className="hidden md:inline"><br /></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Digital Experience
                </span>
              </h2>
              <div className="space-y-4 text-lg text-white/60 font-light leading-relaxed">
                <p>
                  I'm a full-stack developer obsessed with building interfaces that feel alive. I don't just write code; I craft digital experiences that leave a lasting impression.
                </p>
                <p>
                  With expertise across the MERN stack, Firebase, and modern React ecosystems, I bridge the gap between robust backend architecture and cinematic frontend design.
                </p>
              </div>
              
              <div className="mt-8">
                <img 
                  src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=20&pause=1000&color=3B82F6&width=435&lines=console.log('Kumail+Raza');;return+true;" 
                  alt="Typing SVG" 
                  className="opacity-70"
                />
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2" ref={containerRef}>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="stat-card p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-white/50 uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
