'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export const Reveal = (props: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: 0,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};
