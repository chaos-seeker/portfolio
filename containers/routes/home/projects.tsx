'use client';

import { CardItem } from '@/components/card-item';
import Link from 'next/link';
import { useTranslation } from '@/hooks/translation';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Link
              href="#projects"
              id="projects"
              className="text-muted-foreground font-mono text-2xl font-bold"
            >
              #
            </Link>
            <h2 className="text-primary font-mono text-2xl font-bold">
              {t('projects.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <CardItem
              image="/images/projects-killua.jpg"
              title={t('projects.killua.title')}
              description={t('projects.killua.description')}
              technologies={['typescript']}
              code="https://github.com/chaos-seeker/killua"
              live="https://www.npmjs.com/package/killua"
            />
            <CardItem
              image="/images/projects-konj.jpg"
              title={t('projects.konj.title')}
              description={t('projects.konj.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/konj"
              live="https://konj-henna.vercel.app/"
            />
            <CardItem
              image="/images/projects-shopi.jpg"
              title={t('projects.shopi.title')}
              description={t('projects.shopi.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/shopi"
              live="https://shopifa.vercel.app/"
            />
            <CardItem
              image="/images/projects-toranj.png"
              title={t('projects.toranj.title')}
              description={t('projects.toranj.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/jouissance-seeker/toranj"
              live="https://toranj.vercel.app/"
            />
            <CardItem
              image="/images/projects-doctor-plus.png"
              title={t('projects.doctorPlus.title')}
              description={t('projects.doctorPlus.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/doctor-plus"
              live="https://doctor-plus-olive.vercel.app/"
            />
            <CardItem
              image="/images/projects-bartar.png"
              title={t('projects.bartar.title')}
              description={t('projects.bartar.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/bartar"
              live="https://bartar-three.vercel.app/"
            />
            <CardItem
              image="/images/projects-bank-dash.jpg"
              title={t('projects.bankDash.title')}
              description={t('projects.bankDash.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/bankdash"
              live="https://bankdash-swart.vercel.app/dashboard"
            />
            <CardItem
              image="/images/projects-ava-movie.jpg"
              title={t('projects.avaMovie.title')}
              description={t('projects.avaMovie.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/ava-movie"
              live="https://ava-movie.vercel.app/"
            />
            <CardItem
              image="/images/projects-mobit.jpg"
              title={t('projects.mobit.title')}
              description={t('projects.mobit.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/mobit"
              live="https://mobit-frontend.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
