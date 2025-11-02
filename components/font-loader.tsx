'use client';

import { useEffect } from 'react';

export const FontLoader = () => {
  useEffect(() => {
    // اضافه کردن فونت وزیر از CDN
    if (!document.querySelector('link[href*="vazir"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href =
        'https://cdn.jsdelivr.net/gh/rastikerdar/vazirfont@v30.1.0/dist/font-face.css';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  }, []);

  return null;
};
