import Image from 'next/image';
import type { Metadata } from 'next/types';

import Section from '@/components/Section/Section';
import { H2 } from '@/components/Heading/Heading';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';

import tdnLogoHero from '@/public/tdn-logo-hero.png';
import tdnHeroSamples from '@/public/tdn-hero-samples.png';

export const metadata: Metadata = {
  title: 'The Dreamy Nails | Home',
};

export default function Home() {
  return (
    <div className="grow">
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
    </div>
  );
}
