'use client';

import { useState, useEffect, useRef } from 'react';

export const CursorCustom = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const animationRef = useRef<number | null>(null);
  const lastUpdateTime = useRef(0);

  const DOT_SMOOTHNESS = 0.25;
  const BORDER_DOT_SMOOTHNESS = 0.15;
  const FRAME_RATE_LIMIT = 120;

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(hover: none)').matches;
      setIsTouchDevice(hasTouch);
    };

    checkTouchDevice();
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const interactiveElements = document.querySelectorAll(
      'a, button, img, input, textarea, select',
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    const animate = (currentTime: number) => {
      if (currentTime - lastUpdateTime.current < 1000 / FRAME_RATE_LIMIT) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastUpdateTime.current = currentTime;

      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS,
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS,
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS,
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS,
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isTouchDevice]);

  if (!mounted || isTouchDevice) return null;

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-50">
        <div
          className="absolute rounded-full bg-black dark:bg-white"
          style={{
            width: '8px',
            height: '8px',
            transform: 'translate(-50%, -50%)',
            left: `${renderPos.dot.x}px`,
            top: `${renderPos.dot.y}px`,
            willChange: 'transform',
          }}
        />
        <div
          className="absolute rounded-full border border-black dark:border-white"
          style={{
            width: isHovering ? '44px' : '28px',
            height: isHovering ? '44px' : '28px',
            transform: 'translate(-50%, -50%)',
            left: `${renderPos.border.x}px`,
            top: `${renderPos.border.y}px`,
            transition: 'width 0.3s, height 0.3s',
            willChange: 'transform, width, height',
          }}
        />
      </div>
    </>
  );
};
