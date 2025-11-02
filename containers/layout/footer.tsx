'use client';

import { useTranslation } from '@/hooks/translation';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <footer className="text-muted-foreground pt-7 pb-5 text-center text-sm">
          <div className="space-y-1">
            <p>{t('footer.copyright')}</p>
            <p>{t('footer.developed')}</p>
          </div>
        </footer>
      </div>
    </footer>
  );
};
