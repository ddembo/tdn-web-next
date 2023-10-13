import type { Metadata } from 'next/types';

import { H1 } from '@/components/Heading/Heading';
import SiteLogoFull from '@/components/icons/SiteLogoFull';
import PromptLink from '@/components/PromptLink/PromptLink';
import InfoPanel from '@/components/InfoPanel/InfoPanel';

import PageStructuredData from './PageStructuredData';

export const metadata: Metadata = {
  title: 'Book an appointment - The Dreamy Nails',
  description: 'Select from my available services to craft your unique experience.',
};
/*
TODO
* TEST THE WIDGET THOROUGHLY & tweak calendar/booking settings
  -- custom confirmation page/email?
  -- optional customer login?
  -- calendar view
  -- deposits!! connect stripe (BLOCKED: waiting for not-so-Timely support)
*/
export default function BookingPage() {
  return (
    <>
      <PageStructuredData />
      <div className="h-full w-full max-w-3xl flex flex-col mx-auto my-4 gap-4 text-center ">
        <div className="self-center max-w-[176px] md:max-w-none">
          <SiteLogoFull />
        </div>
        <H1 variant="h2">Book an appointment</H1>
        <InfoPanel>
          <ul className="list-disc pl-4">
            <li>
              <p className="text-sm mb-1">The booking system may limit available times to prevent overbooking. If you don&apos;t see your preferred time, I may still be able to accommodate you. DM @thedreamynails on Instagram and I&apos;ll do my best.</p>
            </li>
            <li>
              <p className="text-sm mb-1">A deposit of <b>$30</b> is required for all appointments to be confirmed. The deposit amount will be deducted from the total price of service on the day.</p>
            </li>
            <li>
              <p className="text-sm mb-1">Appointments after 5.30pm Mon-Fri, or any time on a weekend or public holiday, will incur an additional fee of <b>$20</b>.</p>
            </li>
            <li>
              <p className="text-sm mb-1">Vegan, cruelty-free and natural cuticle oil pens are available to purchase on the day for <b>$10</b>.</p>
            </li>
            <li>
              <p className="text-sm mb-1">The price displayed during booking is an estimate only based on services you select. The final price and services performed will be confirmed prior to starting work on the day of your appointment.</p>
            </li>
          </ul>
        </InfoPanel>
        <div className="bg-tdn-highlight-pale flex flex-col gap-4 md:rounded-3xl grow p-4 md:p-6 md:pb-4">
          <iframe
            id="timelyWidget"
            src="https://bookings.gettimely.com/dreamynails/bb/book"
            style={{
              width: '100%',
              height: '80vh',
              border: 'none',
              maxWidth: '698px', // Keep it single-column
              margin: '0 auto',
            }}
          />
          <PromptLink prompt="Are you sure you want to abort the booking process?">
            Back to Home
          </PromptLink>
        </div>
        <small className="w-full font-extralight">&copy; 2023 The Dreamy Nails</small>
      </div>
    </>
  );
}
