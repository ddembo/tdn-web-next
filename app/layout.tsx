import type { Metadata } from 'next';
import { DM_Sans, Jost } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';

import './globals.css';

export const runtime = 'edge'; // Applies to all pages

const fontJost = Jost({ subsets: ['latin'], display: 'swap' });
const fontDMSans = DM_Sans({ style: ['normal', 'italic'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'The Dreamy Nails Sydney | BIAB, nail art, manicures and press-on nails',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(fontDMSans.className, fontJost.className)}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
