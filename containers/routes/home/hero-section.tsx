'use client';

import Image from 'next/image';
import { AnimatedShinyText } from '@/ui/animated-shiny-text';
import { useTranslation } from '@/hooks/translation';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="mt-29 flex flex-col items-center gap-7 lg:flex-row-reverse lg:justify-between">
          <Image
            src="/images/avatar.png"
            alt="Hero"
            width={150}
            height={150}
            className="rounded-full lg:size-[250px] lg:rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center lg:items-start">
              <p className="mb-1 text-3xl font-bold lg:text-[33px]">
                {t('hero.greeting')}{' '}
                <span className="text-primary">{t('fullname.name')} {t('fullname.lastname')}</span>
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
