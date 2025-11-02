'use client';

import {
  PropsWithChildren,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

type SmoothScrollProps = PropsWithChildren<{
  stiffness?: number;
  damping?: number;
  mass?: number;
  enabledOnTouch?: boolean;
  containerRef?: RefObject<HTMLElement | null>;
  bottomPadding?: number;
}>;

export default function SmoothScroll(props: SmoothScrollProps) {
  const {
    children,
    stiffness = 170,
    damping = 26,
    mass = 1,
    enabledOnTouch = false,
    containerRef,
    bottomPadding = 0,
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

  useEffect(() => {
    if (!mounted || containerRef) return;
    const updateHeight = () => {
      if (contentRef.current) {
        const el = contentRef.current;
        const rectHeight = el.getBoundingClientRect().height;
        const scrollHeight = el.scrollHeight;
        const measured = Math.max(scrollHeight, rectHeight);
        setContentHeight(measured);
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
  }, [mounted, containerRef]);

  // Disable smoothing for touch unless explicitly enabled
  const smoothingEnabled = useMemo(() => {
    return mounted && (enabledOnTouch ? true : !isTouchDevice);
  }, [mounted, isTouchDevice, enabledOnTouch]);

  const { scrollY } = containerRef
    ? useScroll({ container: containerRef as RefObject<HTMLElement | null> })
    : useScroll();
  const smoothY = useSpring(scrollY, { stiffness, damping, mass });
  const y = useTransform(smoothY, (v) => -v);

  if (!mounted) return null;

  if (!smoothingEnabled) {
    return <>{children}</>;
  }
  if (containerRef) {
    return (
      <motion.div style={{ y, willChange: 'transform' }}>
        <div
          ref={contentRef}
          style={{ display: 'flow-root', paddingBottom: bottomPadding }}
        >
          {children}
        </div>
      </motion.div>
    );
  }
  return (
    <div style={{ height: contentHeight }}>
      <div
        className="sticky top-0 h-screen overflow-hidden"
      >
        <motion.div className="transform will-change-transform" style={{ y }}>
          <div ref={contentRef} className="flow-root">
            {children}
        </div>
      </motion.div>
    </div>
  </div>
);
}
