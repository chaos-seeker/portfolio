'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

type SmoothScrollProps = PropsWithChildren<{
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    wheelMultiplier?: number;
    infinite?: boolean;
  };
}>;

export default function SmoothScroll(props: SmoothScrollProps) {
  const { children, options } = props;
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
      anchors: {
          offset: -80, 
        },
      ...options,
    });
    lenisRef.current = lenis;
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis;
    }
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      lenisRef.current = null;
      if (typeof window !== 'undefined') {
        delete (window as any).lenis;
      }
      lenis.destroy();
    };
  }, [options]);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
