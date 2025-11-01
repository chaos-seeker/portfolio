'use client';

import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<'top' | 'bottom'>('top');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setLastScrollY((prev) => {
        if (currentScrollY > prev) {
          setScrollPosition('bottom');
        } else if (currentScrollY < prev) {
          setScrollPosition('top');
        }
        return currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};
