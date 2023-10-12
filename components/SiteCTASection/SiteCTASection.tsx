import Link from 'next/link';

import ButtonLink from '@/components/ButtonLink/ButtonLink';
import { H2, H3 } from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';

const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '/';

export default function SiteCTASection() {
  return (
    <Section>
      <H2>Book your dreamy experience</H2>
      <Section as="div">
        <Section.Column doubleWidth>
          <p>
            Let me take care of you in my private, clean home salon — away from all the hustle and
            bustle — with a beautiful nail design tailored just for you.
          </p>
          <p>
            If you have any issues, questions, or to book an after-hours appointment, please{' '}
            <Link href={INSTAGRAM_URL}>DM me on Instagram</Link> and let me know how I can help.
          </p>
          <H3 variant="h4">Opening hours: Mon - Sat, 9:00am - late (6pm last appointment)</H3>
          <p>Appointments outside these hours will incur a small fee.</p>
        </Section.Column>
        <Section.Column>
          <ul className="self-center flex flex-col items-stretch w-full p-0 my-0 list-none">
            <li className="block py-2">
              <ButtonLink href="/services">Service menu</ButtonLink>
            </li>
            <li className="block py-2">
              <ButtonLink href="/book" variant="cta">
                Book now
              </ButtonLink>
            </li>
          </ul>
        </Section.Column>
      </Section>
    </Section>
  );
}
