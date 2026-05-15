import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [
      { target: 30, delay: 0,    duration: 400 },
      { target: 65, delay: 400,  duration: 500 },
      { target: 85, delay: 900,  duration: 400 },
      { target: 100, delay: 1300, duration: 500 },
    ];

    const timers: ReturnType<typeof setTimeout>[] = [];

    steps.forEach(({ target, delay, duration }) => {
      const t = setTimeout(() => {
        const start = Date.now();
        const from = steps.find(s => s.target < target)?.target ?? 0;
        const tick = () => {
          const elapsed = Date.now() - start;
          const pct = Math.min(elapsed / duration, 1);
          setProgress(Math.round(from + (target - from) * pct));
          if (pct < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, delay);
      timers.push(t);
    });

    const done = setTimeout(onComplete, 2200);
    timers.push(done);
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#0d0d0f]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-purple-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative flex flex-col items-center gap-5">

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl font-black tracking-tight leading-none"
        >
          <span className="text-white">Kumail</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Raza</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.35em] text-white/40 uppercase"
        >
          Full Stack Developer
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="w-64 mt-2"
        >
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Status text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-[10px] tracking-[0.3em] text-white/25 uppercase mt-3"
          >
            Initializing Portfolio
          </motion.p>
        </motion.div>

      </div>
    </motion.div>
  );
}
