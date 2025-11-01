import Link from 'next/link';
import Image from 'next/image';

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
        <div className="from-background/80 absolute inset-0 flex items-end justify-center border-red-200 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-4 text-center">
            <span className="flex items-center justify-center gap-1 text-sm font-medium">
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-grow flex-col border-t p-4">
        <h3 className="mb-2 text-lg font-semibold">{props.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow text-sm">
          {props.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {props.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-4">
          {props.code && (
            <Link
              href={props.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center text-xs transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-3 w-3"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              Code
            </Link>
          )}
          {props.live && (
            <Link
              href={props.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center text-xs transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-3 w-3"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
