import type { Metadata } from 'next';
import { DM_Sans, Jost } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import SiteAnalyticsTag from '@/components/SiteAnalyticsTag/SiteAnalyticsTag';

import './globals.css';

export const runtime = 'edge'; // Applies to all pages

const fontJost = Jost({ subsets: ['latin'], display: 'swap', variable: '--font-jost' });
const fontDMSans = DM_Sans({ style: ['normal', 'italic'], subsets: ['latin'], display: 'swap', variable: '--font-dm-sans' });

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
    <html lang="en" className="h-full">
      <body className={twMerge(fontDMSans.variable, fontJost.variable, 'h-full')}>
        <SiteAnalyticsTag />
        {children}
      </body>
    </html>
  );
}
