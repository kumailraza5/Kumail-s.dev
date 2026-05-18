import { useEffect, useState, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const Hero3D = lazy(() => import('./components/Hero3D'));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Setup global ScrollTrigger integration with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <CustomCursor />
      
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Progress Bar */}
      <div 
        id="scroll-progress" 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 z-50 origin-left"
        style={{ width: '100%', transform: 'scaleX(0)' }}
      />

      <Navbar />

      <main className="relative w-full overflow-hidden">
        {/* 3D Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </div>

        <div className="relative z-10">
          <Hero />
          <About />
          <TechStack />
          <Services />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
