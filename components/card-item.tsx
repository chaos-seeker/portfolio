'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { AnimatedShinyText } from '@/ui/animated-shiny-text';
import { useTranslation } from '@/hooks/translation';

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  code?: string;
  live?: string;
}

export const CardItem = (props: CardItemProps) => {
  const { t } = useTranslation();

  const getTechTranslation = (tech: string): string => {
    const techMap: Record<string, string> = {
      html: 'tech.html',
      css: 'tech.css',
      javascript: 'tech.javascript',
      typescript: 'tech.typescript',
      react: 'tech.react',
      'next.js': 'tech.nextjs',
      nextjs: 'tech.nextjs',
      tailwind: 'tech.tailwind',
      git: 'tech.git',
      shadcnui: 'tech.shadcnui',
      daisyui: 'tech.daisyui',
      heroui: 'tech.heroui',
      npm: 'tech.npm',
      figma: 'tech.figma',
      wordpress: 'tech.wordpress',
      elementor: 'tech.elementor',
      linux: 'tech.linux',
    };
    const normalizedTech = tech.toLowerCase().trim();
    const key = techMap[normalizedTech];
    return key ? t(key as any) : tech;
  };

  return (
    <div className="group border-border hover:border-primary/50 flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          alt={props.title}
          src={props.image}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </div>
      <div className="flex grow flex-col border-t p-4">
        <div className="flex items-center justify-between">
          <h3 className="mb-2 text-lg font-semibold">{props.title}</h3>
          <div className="flex gap-4">
            {props.code && (
              <Link
                href={props.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
              >
                <Github className="size-4" />
                <AnimatedShinyText>{t('common.code')}</AnimatedShinyText>
              </Link>
            )}
            {props.live && (
              <Link
                href={props.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
              >
                <ExternalLink className="size-4" />
                <AnimatedShinyText>{t('common.live')}</AnimatedShinyText>
              </Link>
            )}
          </div>
        </div>
        <AnimatedShinyText>
          <p className="mb-4 grow text-sm">{props.description}</p>
        </AnimatedShinyText>
        <div className="flex flex-wrap gap-2">
          {props.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
            >
              {getTechTranslation(tech)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
