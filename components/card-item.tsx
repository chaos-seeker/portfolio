import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  code?: string;
  live?: string;
}

export const CardItem = (props: CardItemProps) => {
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
      <div className="flex flex-grow flex-col border-t p-4">
        <div className='flex justify-between items-center'>
           <h3 className="mb-2 text-lg font-semibold">{props.title}</h3>
           <div className="flex gap-4">
          {props.code && (
            <Link
              href={props.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground gap-1 hover:text-primary flex items-center transition-colors"
            >
              <Github className="size-4" />
              <span>code</span>
            </Link>
          )}
          {props.live && (
            <Link
              href={props.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground gap-1 hover:text-primary flex items-center transition-colors"
            >
              <ExternalLink className="size-4" />
              <span>live</span>
            </Link>
          )}
        </div>
        </div>
        <p className="text-muted-foreground mt-2 mb-4 flex-grow text-sm">
          {props.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {props.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
