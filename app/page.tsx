import Image from 'next/image';
import type { Metadata } from 'next/types';

import Section from '@/components/Section/Section';
import { H2 } from '@/components/Heading/Heading';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import SiteInstagramGallery from '@/components/SiteInstagramGallery/SiteInstagramGallery';

import tdnLogoHero from '@/public/tdn-logo-hero.png';
import tdnHeroSamples from '@/public/tdn-hero-samples.png';

export const metadata: Metadata = {
  title: 'The Dreamy Nails | Sydney nail artist (Erskineville)',
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
            alt="Photos of beautiful hand-painted nail art designs by Selina from The Dreamy Nails in Erskineville"
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
              Hello! I&apos;m Selina, a nail technician working from my private and comfortable home
              studio, turning nails into art. I&apos;m conveniently-located in Erskineville, between
              Newtown and Alexandria, close to public transport.
            </p>
            <p>
              Are you curious about what kind of person I am and how I got started with nail art?
            </p>
            <div>
              <ButtonLink href="/about" variant="subtle">
                Read more
              </ButtonLink>
            </div>
          </Section.Column>
          <Section.Column>
            <div className="image-placeholder" />
          </Section.Column>
        </Section>
      </Container>
      <Section>
        <Section.Column>
          <H2>My latest nail art</H2>
          <SiteInstagramGallery />
        </Section.Column>
      </Section>
    </div>
  );
}
