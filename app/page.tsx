import Image from 'next/image';

import Section from '@/components/Section/Section';
import { H2 } from '@/components/Heading/Heading';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';

import tdnLogoHero from '@/public/tdn-logo-hero.png';
import tdnHeroSamples from '@/public/tdn-hero-samples.png';

export default function Home() {
  return (
    <>
      <Hero
        expanded
        heading={<Image src={tdnLogoHero} alt="Welcome to The Dreamy Nails" quality={100} />}
        subtitle="BIAB & GELX manicures, nail art & press-ons in Sydney's Inner West"
        feature={
          <Image
            src={tdnHeroSamples}
            alt="Photos of beautiful hand-painted nail art designs by The Dreamy Nails"
            priority
            quality={100}
            placeholder="blur"
          />
        }
      />

      <Container>
        <Section>
          <Section.Column>
            <H2 variant="h1">About The Dreamy Nails</H2>
            <p>
              Conveniently-located in Erskineville, in Sydney&apos;s Inner West, we transform your
              nails into works of art!
            </p>
          </Section.Column>
          <Section.Column>
            <div className="image-placeholder" />
          </Section.Column>
        </Section>
      </Container>

      <Section>
        <div id='booking' />
        <H2>Ready to make your nail dreams come true?</H2>
        <Section as="div">
          <Section.Column doubleWidth>
            <p>
              Please bear with us while we finish building our website - we&apos;ll be introducing a
              booking system very soon!
            </p>
            <p>
              In the meantime, all bookings are done via our Instagram page - send us a DM telling
              us what you&apos;d like and your preferred date and time, and we&apos;ll get you
              booked in ASAP.
            </p>
          </Section.Column>
          <Section.Column>
            <ul className="self-center flex flex-col items-stretch w-full p-0 my-0 list-none">
              <li className="block py-2">
                <ButtonLink href="/prices">Price Menu</ButtonLink>
              </li>
              <li className="block py-2">
                <ButtonLink href="/faq">Booking FAQ</ButtonLink>
              </li>
              <li className="block py-2">
                <ButtonLink href="https://instagram.com/thedreamynails" variant="cta">
                  Book now
                </ButtonLink>
              </li>
            </ul>
          </Section.Column>
        </Section>
      </Section>
    </>
  );
}
