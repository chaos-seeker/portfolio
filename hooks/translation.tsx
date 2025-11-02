'use client';

import { useEffect, useState } from 'react';
import { Locale, getTranslations, locales, TranslationKey } from '@/i18n';

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>('en');
  const [translations, setTranslations] = useState(getTranslations('en'));

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && locales.includes(saved)) {
      setLocale(saved);
      setTranslations(getTranslations(saved));
    }
  }, []);

  const t = (key: TranslationKey): string => {
    return translations[key] || key;
  };

  const setLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    setTranslations(getTranslations(newLocale));
    localStorage.setItem('locale', newLocale);

    // Dispatch custom event برای LanguageWrapper
    const event = new CustomEvent('languagechange', { detail: newLocale });
    window.dispatchEvent(event);

    window.location.reload();
  };

  return { t, locale, setLanguage };
}
