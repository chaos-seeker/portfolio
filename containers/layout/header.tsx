'use client';

import Link from 'next/link';
import { Moon, Sun, Github, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/ui/button';
import Image from 'next/image';
import { useScrollPosition } from '@/hooks/scroll-position';
import { cn } from '@/utils/cn';
import { Locale, locales } from '@/i18n';
import { useTranslation } from '@/hooks/translation';

export const Header = () => {
  const scrollPosition = useScrollPosition();
  const { t } = useTranslation();
  
  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-500',
        scrollPosition === 'bottom' ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <div className="bg-bg/40 border-border container border-b py-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full dark:invert"
            />
            <div className="flex gap-1 text-mdp sm:text-xl font-bold">
              <p className="text-muted-foreground">{t('fullname.name')}</p>
              <p className="text-primary">{t('fullname.lastname')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
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

const LanguageSwitcher = () => {
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && locales.includes(saved)) {
      setCurrentLocale(saved);
    }
  }, []);

  const handleChangeLanguage = (locale: Locale) => {
    setCurrentLocale(locale);
    localStorage.setItem('locale', locale);
    window.location.reload();
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Globe className="text-foreground size-5" />
      </Button>
    );
  }

  return (
    <div className="group relative">
      <Button variant="outline" size="icon" className="gap-1">
        <Globe className="size-5" />
      </Button>
      <div className="bg-popover border-border invisible absolute right-0 z-50 mt-2 w-32 rounded-lg border opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => handleChangeLanguage(locale)}
            className={`hover:bg-accent w-full px-4 py-2 text-start text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
              currentLocale === locale ? 'bg-accent font-semibold' : ''
            }`}
          >
            {locale === 'en'
              ? 'English'
              : locale === 'fa'
                ? 'فارسی'
                : 'العربية'}
          </button>
        ))}
      </div>
    </div>
  );
};
