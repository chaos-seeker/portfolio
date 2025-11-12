'use client';

import { Progress } from '@/ui/progress';
import Link from 'next/link';
import { useTranslation } from '@/hooks/translation';

export const Skills = () => {
  const { t } = useTranslation();

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
          <div className="grid grid-cols-1 flex-col gap-4 lg:grid-cols-2">
            <ProgressItem techKey="tech.html" value={90} />
            <ProgressItem techKey="tech.css" value={90} />
            <ProgressItem techKey="tech.javascript" value={90} />
            <ProgressItem techKey="tech.typescript" value={80} />
            <ProgressItem techKey="tech.react" value={90} />
            <ProgressItem techKey="tech.nextjs" value={85} />
            <ProgressItem techKey="tech.tailwind" value={98} />
            <ProgressItem techKey="tech.git" value={80} />
            <ProgressItem techKey="tech.shadcnui" value={97} />
            <ProgressItem techKey="tech.daisyui" value={95} />
            <ProgressItem techKey="tech.heroui" value={95} />
            <ProgressItem techKey="tech.npm" value={90} />
            <ProgressItem techKey="tech.figma" value={70} />
            <ProgressItem techKey="tech.wordpress" value={70} />
            <ProgressItem techKey="tech.elementor" value={60} />
            <ProgressItem techKey="tech.linux" value={75} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProgressItemProps {
  techKey: string;
  value: number;
}

const ProgressItem = (props: ProgressItemProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-full items-center justify-between gap-2">
        <span className="text-smp font-medium">{t(props.techKey as any)}</span>
      </div>
      <Progress value={props.value} />
    </div>
  );
};
