import type { Metadata } from 'next';
import { DM_Sans, Jost } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import SiteAnalyticsTag from '@/components/SiteAnalyticsTag/SiteAnalyticsTag';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';

import './globals.css';

export const runtime = 'edge'; // Applies to all pages

const fontJost = Jost({ subsets: ['latin'], display: 'swap' });
const fontDMSans = DM_Sans({ style: ['normal', 'italic'], subsets: ['latin'], display: 'swap' });

/* NOTE: Next.js sets an incorrect prop if using the file convention described in docs:
 *  https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#apple-icon.
 *  The article they referenced has been updated. For now, we'll manually set it.
 */
export const metadata: Metadata = {
  title: 'The Dreamy Nails Sydney | BIAB, nail art, manicures and press-on nails',
  icons: [{
    rel: 'icon',
    url: '/favicon.ico', // Must be at root level
    sizes: '32x32', // Prevents double icon download in Chrome
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    url: '/icons/icon.svg',
  },
  {
    rel: 'apple-touch-icon',
    url: '/icons/apple-icon.png',
  },
]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(fontDMSans.className, fontJost.className)}>
        <SiteAnalyticsTag />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
