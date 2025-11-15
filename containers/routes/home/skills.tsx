'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/translation';

interface SkillCategory {
  title: string;
  techKeys: string[];
}

export const Skills = () => {
  const { t } = useTranslation();

  const categories: SkillCategory[] = [
    {
      title: 'skills.categories.frontend',
      techKeys: [
        'tech.html',
        'tech.css',
        'tech.javascript',
        'tech.typescript',
        'tech.react',
        'tech.nextjs',
      ],
    },
    {
      title: 'skills.categories.styling',
      techKeys: [
        'tech.tailwind',
        'tech.shadcnui',
        'tech.daisyui',
        'tech.heroui',
        'tech.framerMotion',
      ],
    },
    {
      title: 'skills.categories.stateManagement',
      techKeys: [
        'tech.zustand',
        'tech.reactQuery',
        'tech.jotai',
        'tech.recoil',
      ],
    },
    {
      title: 'skills.categories.tools',
      techKeys: ['tech.git', 'tech.npm', 'tech.figma', 'tech.linux'],
    },
  ];

  return (
    <section>
      <div className="container">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Link
              href="#skills"
              id="skills"
              className="text-muted-foreground hover:text-foreground font-mono text-2xl font-bold transition-colors"
            >
              #
            </Link>
            <h2 className="text-primary font-mono text-2xl font-bold">
              {t('skills.title')}
            </h2>
          </div>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.title} className="space-y-5">
                <h3 className="text-foreground text-base font-medium tracking-tight">
                  {t(category.title as any)}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.techKeys.map((techKey) => (
                    <button
                      key={techKey}
                      type="button"
                      className="bg-card border-border hover:border-primary hover:bg-accent text-muted-foreground hover:text-foreground rounded-md border px-3 py-1.5 text-sm font-normal transition-all"
                    >
                      {t(techKey as any)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
