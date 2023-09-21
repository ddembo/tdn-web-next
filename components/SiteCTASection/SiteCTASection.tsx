import Section from '@/components/Section/Section';
import { H2 } from '@/components/Heading/Heading';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import Link from 'next/link';

export default function SiteCTASection() {
  return (
    <Section>
      <div id="booking" className="hidden" />
      <H2>I can bring your nail dreams to life</H2>
      <Section as="div">
        <Section.Column doubleWidth>
          <p>
            Please bear with me while my developer finishes my website - I&apos;ll be introducing a
            booking system very soon!
          </p>
          <p>
            In the meantime, bookings can be made on{' '}
            <Link href="https://instagram.com/thedreamynails">my Instagram profile</Link> - send me
            a DM telling me what you&apos;d like and your preferred date and time, and I&apos;ll get
            you booked in ASAP.
          </p>
        </Section.Column>
        <Section.Column>
          <ul className="self-center flex flex-col items-stretch w-full p-0 my-0 list-none">
            <li className="block py-2">
              <ButtonLink href="/services">Service menu</ButtonLink>
            </li>
            {/* <li className="block py-2">
                <ButtonLink href="/faq">Booking FAQ</ButtonLink>
              </li> */}
            <li className="block py-2">
              <ButtonLink href="https://instagram.com/thedreamynails" variant="cta">
                Book now
              </ButtonLink>
            </li>
          </ul>
        </Section.Column>
      </Section>
    </Section>
  );
}
