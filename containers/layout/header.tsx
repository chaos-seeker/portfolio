'use client';

import Link from 'next/link';
import { Moon, Sun, Github } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/ui/button';
import Image from 'next/image';
import { useScrollPosition } from '@/hooks/scroll-position';
import { cn } from '@/utils/cn';

export const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-500',
        scrollPosition === 'bottom' ? 'translate-y-[-100%]' : 'translate-y-0',
      )}
    >
      <div className="bg-bg/40 border-border container border-b py-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={45}
            height={45}
            className="rounded-full dark:invert"
          />
          <Nav />
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="icon">
              <Link href="https://github.com/chaos-seeker">
                <Github className="size-5" />
              </Link>
            </Button>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-5 hidden lg:flex">
        <li>
          <Link
            href="#about"
            className="text-smp hover:text-primary transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="text-smp hover:text-primary transition-colors"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="#works"
            className="text-smp hover:text-primary transition-colors"
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="text-smp hover:text-primary transition-colors"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Sun className="text-foreground size-5" />
      </Button>
    );
  }

  return (
    <Button
      onClick={handleToggleTheme}
      className="border-border hover:bg-accent rounded-lg border p-2 transition-colors"
      aria-label="Toggle theme"
      variant="outline"
      size="icon"
    >
      {theme === 'dark' ? (
        <Sun className="text-foreground size-5" />
      ) : (
        <Moon className="text-foreground size-5" />
      )}
    </Button>
  );
};
