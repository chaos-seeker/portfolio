'use client';

import { PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

type SmoothScrollProps = PropsWithChildren<{
  stiffness?: number;
  damping?: number;
  mass?: number;
  enabledOnTouch?: boolean;
}>;

export default function SmoothScroll(props: SmoothScrollProps) {
  const {
    children,
    stiffness = 170,
    damping = 26,
    mass = 1,
    enabledOnTouch = false,
  } = props;

  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const hasTouch =
      'ontouchstart' in window ||
      (navigator as any).maxTouchPoints > 0 ||
      window.matchMedia('(hover: none)').matches;
    setIsTouchDevice(hasTouch);
    setMounted(true);
  }, []);

  // Measure content height and keep it updated
  useEffect(() => {
    if (!mounted) return;
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.getBoundingClientRect().height);
      }
    };
    updateHeight();

    let resizeObserver: ResizeObserver | null = null;
    if ('ResizeObserver' in window && contentRef.current) {
      resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(contentRef.current);
    } else {
      window.addEventListener('resize', updateHeight);
    }

    return () => {
      if (resizeObserver && contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
      window.removeEventListener('resize', updateHeight);
    };
  }, [mounted]);

  // Disable smoothing for touch unless explicitly enabled
  const smoothingEnabled = useMemo(() => {
    return mounted && (enabledOnTouch ? true : !isTouchDevice);
  }, [mounted, isTouchDevice, enabledOnTouch]);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness, damping, mass });
  const y = useTransform(smoothY, (v) => -v);

  if (!mounted) return null;

  if (!smoothingEnabled) {
    return <>{children}</>;
  }

  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        style={{
          y,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          willChange: 'transform',
        }}
      >
        <div ref={contentRef}>{children}</div>
      </motion.div>
      <div style={{ height: contentHeight }} />
    </div>
  );
}
