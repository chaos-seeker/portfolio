'use client';

import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Header = () => {
  return (
    <header>
      <div className="container py-3">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="mb-2 flex gap-1 font-mono text-xl font-bold"
          >
            <p>hamid</p>
            <p className="text-primary">shahsavani</p>
          </Link>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="border-border hover:bg-accent rounded-lg border p-2 transition-colors">
        <Sun className="size-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="border-border hover:bg-accent rounded-lg border p-2 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="text-foreground size-5" />
      ) : (
        <Moon className="text-foreground size-5" />
      )}
    </button>
  );
};
