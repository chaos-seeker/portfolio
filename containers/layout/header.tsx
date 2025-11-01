'use client';

import Link from 'next/link';
import { Moon, Sun, Github } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/ui/button';
export const Header = () => {
  return (
    <header>
      <div className="container py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex gap-1 font-mono text-xl font-bold"
          >
            <p>hamid</p>
            <p className="text-primary">shahsavani</p>
          </Link>
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
