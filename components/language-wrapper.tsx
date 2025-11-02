'use client';

import { useEffect } from 'react';
import { Locale, locales } from '@/i18n';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    const currentLocale = saved && locales.includes(saved) ? saved : 'en';
    const updateDocumentAttributes = (loc: Locale) => {
      const html = document.documentElement;
      html.lang = loc;
      if (loc === 'fa' || loc === 'ar') {
        html.dir = 'rtl';
      } else {
        html.dir = 'ltr';
      }
      if (loc === 'fa' || loc === 'ar') {
        html.classList.add('font-vazir');
        html.style.fontFamily = 'Vazir, sans-serif';
      } else {
        html.classList.remove('font-vazir');
        html.style.fontFamily = '';
      }
    };
    updateDocumentAttributes(currentLocale);

    // گوش دادن به تغییرات localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'locale' && e.newValue) {
        const newLocale = e.newValue as Locale;
        if (locales.includes(newLocale)) {
          updateDocumentAttributes(newLocale);
        }
      }
    };

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<Locale>;
      const newLocale = customEvent.detail;
      if (locales.includes(newLocale)) {
        updateDocumentAttributes(newLocale);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languagechange', handleLanguageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  return <>{children}</>;
};
