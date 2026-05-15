import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';
import profilePic from '@assets/pp_1778340909790.png';

const typeWords = [
  "MERN Stack", 
  "Firebase", 
  "Supabase", 
  "React Ecosystem", 
  "Backend APIs", 
  "Modern UI/UX"
];

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (text.length < typeWords[currentWord].length) {
        timeout = setTimeout(() => {
          setText(typeWords[currentWord].slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        setCurrentWord((prev) => (prev + 1) % typeWords.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, currentWord]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 md:pt-16 overflow-hidden" id="home">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div 
            className="relative mb-2"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.6, ease: "easeOut" }}
          >
            {/* Glow bloom under the image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-16 bg-blue-500/25 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-10 bg-purple-500/15 blur-2xl rounded-full" />

            {/* Floating image — no crop, no background, height-constrained */}
            <motion.img
              src={profilePic}
              alt="Kumail Raza"
              className="relative h-48 sm:h-56 md:h-64 lg:h-80 w-auto object-contain drop-shadow-[0_0_35px_rgba(59,130,246,0.45)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <h2 className="text-sm font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3">
              Full Stack Developer
            </h2>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4 leading-[1.05]">
              Kumail <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">Raza</span>
            </h1>

            <div className="h-9 mb-4 md:mb-6 flex items-center justify-center gap-2 text-lg md:text-2xl font-light text-white/75">
              Specializing in <span className="font-semibold text-white">{text}</span>
              <span className="w-[2px] h-7 bg-primary animate-pulse" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                  View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="group px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 hover:border-white/40 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105"
              >
                Hire Me
              </a>
            </div>

            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/kumailraza5" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kumail-raza-4440a9261" },
                { icon: Instagram, href: "https://www.instagram.com/kumailxdev?igsh=Z2JydmNxcTYzazFz&utm_source=qr" },
                { icon: Mail, href: "mailto:kumailr436@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <span className="text-xs tracking-[0.2em] text-white/50 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
