'use client';

import { useEffect } from 'react';
import { Locale, locales } from '@/i18n';

export const LanguageAttributes = () => {
  useEffect(() => {
    const updateDocumentAttributes = () => {
      const saved = localStorage.getItem('locale') as Locale;
      const currentLocale = saved && locales.includes(saved) ? saved : 'en';
      const html = document.documentElement;

      html.lang = currentLocale;

      if (currentLocale === 'fa' || currentLocale === 'ar') {
        html.dir = 'rtl';
      } else {
        html.dir = 'ltr';
      }
    };

    updateDocumentAttributes();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'locale') {
        updateDocumentAttributes();
      }
    };

    const handleLanguageChange = () => {
      updateDocumentAttributes();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languagechange', handleLanguageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  return null;
};
