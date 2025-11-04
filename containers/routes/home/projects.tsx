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
              image="/images/projects-bartar.png"
              title={t('projects.bartar.title')}
              description={t('projects.bartar.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/bartar"
              live="https://bartar-three.vercel.app/"
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
              image="/images/projects-ava-movie.jpg"
              title={t('projects.avaMovie.title')}
              description={t('projects.avaMovie.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/ava-movie"
              live="https://ava-movie.vercel.app/"
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
              image="/images/projects-killua-document.jpg"
              title={t('projects.killuaDocument.title')}
              description={t('projects.killuaDocument.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/killua"
              live="https://github.com/chaos-seeker/killua/tree/main/websites/document"
            />
            <CardItem
              image="/images/projects-killua-todo-list.jpg"
              title={t('projects.todoList.title')}
              description={t('projects.todoList.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/killua/tree/main/websites/examples/todo%20list"
              live="https://killua-todo-list.vercel.app/"
            />
            <CardItem
              image="/images/projects-killua-shopping-cart.jpg"
              title={t('projects.shoppingCart.title')}
              description={t('projects.shoppingCart.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              code="https://github.com/chaos-seeker/killua/tree/main/websites/examples/shopping%20cart"
              live="https://killua-shopping-cart.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
