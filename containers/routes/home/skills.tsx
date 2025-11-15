'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/translation';

export const Skills = () => {
  const { t } = useTranslation();

  const techKeys = [
    'tech.html',
    'tech.css',
    'tech.javascript',
    'tech.typescript',
    'tech.react',
    'tech.nextjs',
    'tech.tailwind',
    'tech.git',
    'tech.shadcnui',
    'tech.daisyui',
    'tech.heroui',
    'tech.npm',
    'tech.figma',
    'tech.wordpress',
    'tech.elementor',
    'tech.linux',
  ];

  return (
    <section>
      <div className="container">
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Link
              href="#skills"
              id="skills"
              className="text-muted-foreground font-mono text-2xl font-bold"
            >
              #
            </Link>
            <h2 className="text-primary font-mono text-2xl font-bold">
              {t('skills.title')}
            </h2>
          </div>
          <ul className="flex flex-wrap gap-4">
            {techKeys.map((techKey) => (
              <li key={techKey} className="flex items-center gap-1">
                <span className="text-primary">•</span>
                <span className="text-smp font-medium">
                  {t(techKey as any)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
