import { Github, Linkedin, Instagram, ArrowUp, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0a0c] pt-12 md:pt-20 pb-10 border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 md:mb-16">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-400">
              Kumail<span className="text-white/20 font-thin">.</span>
            </span>
            <span className="text-xs font-medium tracking-[0.25em] text-white/30 uppercase">Full Stack Developer</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/kumailraza5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kumail-raza-4440a9261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/kumailxdev?igsh=Z2JydmNxcTYzazFz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:kumailr436@gmail.com"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/30">
          <p>© {new Date().getFullYear()} Kumail Raza. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-white/20 text-xs">Full Stack Developer · kumailr436@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
