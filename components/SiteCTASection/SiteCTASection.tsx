import Link from 'next/link';

import ButtonLink from '@/components/ButtonLink/ButtonLink';
import { H2, H3 } from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';

const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '/';

interface SiteCTASectionProps {
  hideServiceMenu?: boolean;
}

export default function SiteCTASection({ hideServiceMenu = false }: SiteCTASectionProps) {
  return (
    <Section>
      <Section.Column>
        <H2>Book your dreamy experience</H2>
        <Section as="div">
          <Section.Column doubleWidth>
            <p>
              Let me take care of you in my private, clean home salon — away from all
              the hustle and bustle — with a beautiful nail design tailored just for you.
            </p>
            <p>
              If you have any issues, questions, or to book an after-hours appointment, please{' '}
              <Link href={INSTAGRAM_URL}>DM me on Instagram</Link> and let me know how I can help.
            </p>
          </Section.Column>
          <Section.Column>
            <div className="w-full md:w-10/12 mx-auto my-4 md:my-0 text-center flex flex-col gap-6 md:gap-4 items-stretch">
              <ul className="self-center flex flex-col items-stretch w-full p-0 my-0 list-none">
                {!hideServiceMenu && (
                  <li className="block py-2">
                    <ButtonLink href="/services">Service menu</ButtonLink>
                  </li>
                )}
                <li className="block py-2">
                  <ButtonLink href="/book" variant="cta">
                    Book now
                  </ButtonLink>
                </li>
                <li className="block py-2">
                  <H3 variant="h4">Opening hours</H3>
                  <p className="px-4">
                    <strong>Mon - Sat</strong>: 9:00am - late
                    <br />
                    (5:30pm last appointment)
                  </p>
                </li>
              </ul>
            </div>
          </Section.Column>
        </Section>
      </Section.Column>
    </Section>
  );
}
