import type { Metadata } from 'next/types';
import Link from 'next/link';

import { H1 } from '@/components/Heading/Heading';
import SiteLogoFull from '@/components/icons/SiteLogoFull';

import PageStructuredData from './PageStructuredData';

export const metadata: Metadata = {
  title: 'Book an appointment - The Dreamy Nails',
  description: 'Select from my available services to craft your unique experience.',
};

export default function BookingPage() {
  return (
    <>
      <PageStructuredData />
      <div className="h-full w-full max-w-3xl flex flex-col mx-auto my-4 gap-4 text-center justify-center">
        <div className="self-center max-w-[176px] md:max-w-none">
          <SiteLogoFull />
        </div>
        <H1 variant="h2">Book an appointment</H1>
        <div className="bg-tdn-highlight-pale flex flex-col gap-4 md:rounded-3xl grow p-4 md:p-6 md:pb-4">
          <iframe
            id="timelyWidget"
            src="https://bookings.gettimely.com/dreamynails/bb/book"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              padding: '0 4px'
            }}
          />
          <Link href="/" className="self-center font-light text-sm no-underline hover:underline">
            Back to Home
          </Link>
        </div>
        <small className="w-full font-extralight">&copy; 2023 The Dreamy Nails</small>
      </div>
    </>
  );
}
