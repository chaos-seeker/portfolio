'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { AnimatedShinyText } from '@/ui/animated-shiny-text';
import { useTranslation } from '@/hooks/translation';

export const HeroSection = () => {
  const { t } = useTranslation();
  const imageRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section>
      <div className="container">
        <div className="mt-29 flex flex-col items-center gap-7 lg:flex-row-reverse lg:justify-between">
          <div
            ref={imageRef}
            className="h-fit w-fit shrink-0 transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
              willChange: 'transform',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/images/avatar.png"
              alt="Hero"
              width={150}
              height={150}
              className="rounded-full lg:size-[250px] lg:rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
              <p className="mb-1 text-3xl font-bold lg:text-[33px]">
                {t('hero.greeting')}{' '}
                <span className="text-primary">
                  {t('fullname.name')} {t('fullname.lastname')}
                </span>
              </p>
              <h2 className="text-muted-foreground mb-2 font-mono text-xl font-medium">
                {t('hero.role')}
              </h2>
            </div>
            <div className="space-y-0.5">
              <AnimatedShinyText>
                <p className="text-mdp text-center lg:text-start">
                  {t('hero.description1')}
                </p>
              </AnimatedShinyText>
              <AnimatedShinyText>
                <p className="text-mdp text-center lg:text-start">
                  {t('hero.description2')}
                </p>
              </AnimatedShinyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
