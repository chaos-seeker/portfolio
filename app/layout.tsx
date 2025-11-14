import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/containers/layout/header';
import { Footer } from '@/containers/layout/footer';
import { cn } from '@/utils/cn';
import { Montserrat } from 'next/font/google';
import { Vazirmatn } from 'next/font/google';
import Providers from './providers';
import { PropsWithChildren } from 'react';
import { CursorCustom } from '@/components/custom-cursor';
import SmoothScroll from '@/components/smooth-scroll';
import { LanguageAttributes } from '@/components/language-attributes';

export const metadata: Metadata = {
  title: 'Hamid Shahsavani',
};

const fontInter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});
const fontMono = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
});
const fontVazirmatn = Vazirmatn({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazir',
});

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn([
          fontInter.variable,
          fontMono.variable,
          fontVazirmatn.variable,
          'font-inter',
        ])}
      >
        <Providers>
          <LanguageAttributes />
          <CursorCustom />
          <Header />
          <SmoothScroll>
            <main>{props.children}</main>
            <Footer />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
