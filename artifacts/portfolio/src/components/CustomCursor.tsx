import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // High performance Motion values for raw mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth hardware-accelerated springs for the cursor elements
  const cursorSpringX = useSpring(mouseX, { stiffness: 800, damping: 45, mass: 1 });
  const cursorSpringY = useSpring(mouseY, { stiffness: 800, damping: 45, mass: 1 });

  const outerSpringX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.8 });
  const outerSpringY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.8 });

  // Spring for the sluggish glow blob trail
  const blobSpringX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const blobSpringY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  useEffect(() => {
    // Detect mobile / touch capabilities
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isNarrow = window.innerWidth <= 768;
      setIsMobile(isTouch || isNarrow);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target && (
          target.tagName.toLowerCase() === 'button' ||
          target.tagName.toLowerCase() === 'a' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer')
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[10000] mix-blend-screen"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-primary/50 rounded-full pointer-events-none z-[9999]"
        style={{
          x: outerSpringX,
          y: outerSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Glow Blob */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none z-[-1]"
        style={{
          x: blobSpringX,
          y: blobSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
