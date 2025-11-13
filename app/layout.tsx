import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/containers/layout/header';
import { Footer } from '@/containers/layout/footer';
import { cn } from '@/utils/cn';
import { Montserrat } from 'next/font/google';
import Providers from './providers';
import { PropsWithChildren } from 'react';
import { CursorCustom } from '@/components/custom-cursor';
import SmoothScroll from '@/components/smooth-scroll';
import { LanguageWrapper } from '@/components/language-wrapper';
import { FontLoader } from '@/components/font-loader';

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

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn([fontInter.variable, fontMono.variable, 'font-inter'])}
      >
        <FontLoader />
        <Providers>
          <LanguageWrapper>
            <CursorCustom />
            <Header />
            <SmoothScroll>
              <main>{props.children}</main>
              <Footer />
            </SmoothScroll>
          </LanguageWrapper>
        </Providers>
      </body>
    </html>
  );
}
