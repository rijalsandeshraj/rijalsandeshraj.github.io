'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin accent bar across the top showing read progress. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-accent via-accent-soft to-blue-500"
    />
  );
}
