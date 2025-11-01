'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Providers(props: PropsWithChildren) {
  return (
    <ThemeProvider>
      {props.children}
    </ThemeProvider>
  );
}

const ThemeProvider = (props: PropsWithChildren) => {
  return <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
    {props.children}
  </NextThemesProvider>;
}
