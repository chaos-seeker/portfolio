import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef, CSSProperties, FC } from 'react';

export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<'span'> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span className={cn('relative inline-block', className)} {...props}>
      <span className="mx-auto max-w-md text-neutral-800/70 dark:text-neutral-200/70">
        {children}
      </span>
      <span
        aria-hidden="true"
        style={{ '--shiny-width': `${shimmerWidth}px` } as CSSProperties}
        className={cn(
          'pointer-events-none absolute inset-0',
          'animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat text-transparent',
          'bg-linear-to-r from-transparent via-foreground/95 via-50% to-transparent dark:via-white/95',
        )}
      >
        {children}
      </span>
    </span>
  );
};
