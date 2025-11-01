import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Layout from '@/containers/layout';
import { cn } from '@/utils/cn';
import { Montserrat } from 'next/font/google';
import Providers from './providers';
import { PropsWithChildren } from 'react';
export const metadata: Metadata = {
  title: 'Hamid Shahsavani - Portfolio',
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
        <Providers>
          <Layout>{props.children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
