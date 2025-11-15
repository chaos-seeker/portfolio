'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/translation';
import { AnimatedShinyText } from '@/ui/animated-shiny-text';

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
        'tech.sass',
        'tech.shadcnui',
        'tech.heroui',
        'tech.framerMotion',
      ],
    },
    {
      title: 'skills.categories.forms',
      techKeys: [
        'tech.reactHookForm',
        'tech.formik',
        'tech.zod',
        'tech.yup',
      ],
    },
    {
      title: 'skills.categories.stateManagement',
      techKeys: [
        'tech.zustand',
        'tech.reactQuery',
        'tech.swr',
        'tech.jotai',
        'tech.recoil',
        'tech.nuqs',
      ],
    },
    {
      title: 'skills.categories.tools',
      techKeys: [
        'tech.git',
        'tech.npm',
        'tech.figma',
        'tech.linux',
        'tech.eslint',
        'tech.husky',
        'tech.prettier',
      ],
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
                <AnimatedShinyText className='font-medium'>
                  {t(category.title as any)}
                </AnimatedShinyText>
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
