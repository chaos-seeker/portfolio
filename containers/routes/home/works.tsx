'use client';

import { CardItem } from '@/components/card-item';
import Link from 'next/link';
import { useTranslation } from '@/hooks/translation';

export const Works = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Link
              href="#works"
              id="works"
              className="text-muted-foreground font-mono text-2xl font-bold"
            >
              #
            </Link>
            <h2 className="text-primary font-mono text-2xl font-bold">
              {t('works.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <CardItem
              image="/images/works-hyphorest.jpg"
              title={t('works.hyphorest.title')}
              description={t('works.hyphorest.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              live="https://hyphorest.com"
            />
            <CardItem
              image="/images/works-rebox.jpg"
              title={t('works.rebox.title')}
              description={t('works.rebox.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              live="https://rebox.ir/"
            />
            <CardItem
              image="/images/works-brity.jpg"
              title={t('works.brity.title')}
              description={t('works.brity.description')}
              technologies={['nextjs', 'tailwind', 'typescript']}
              live="https://brity.vercel.app/"
            />
            <CardItem
              image="/images/works-alireza-namroodi.jpg"
              title={t('works.alirezaNamroodi.title')}
              description={t('works.alirezaNamroodi.description')}
              technologies={['html', 'tailwind', 'typescript']}
              live="https://alireza-namroodi.vercel.app/home.html"
            />
            <CardItem
              image="/images/works-doctormoo.jpg"
              title={t('works.doctormoo.title')}
              description={t('works.doctormoo.description')}
              technologies={['wordpress', 'elementor']}
              live="https://doctormoo.ir/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
