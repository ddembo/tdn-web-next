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
import tdnFeatureImg from '@/public/pastel-princess-nail-design.jpg';

export const metadata: Metadata = {
  title: 'The Dreamy Nails Sydney | BIAB, nail art, manicures and press-on nails',
  description:
    "I'm a nail artist creating beautiful hand-painted nail designs from my private home salon in Erskineville",
};

export default function Home() {
  return (
    <div className="grow">
      <Hero
        expanded
        heading={
          <Image
            src={tdnLogoHero}
            alt="Logo for The Dreamy Nails Sydney nail salon, providing BIAB, nail art, manicures and press-on nails services"
            quality={100}
            className="mx-auto lg:mx-0"
          />
        }
        subtitle="I'm creating beautiful hand-painted nail designs from my private home salon in Erskineville. My services include BIAB, GELX, e-file manicure, press-on nails, and more."
        feature={
          <Image
            src={tdnHeroSamples}
            alt="Photos of beautiful hand-painted nail designs by Selina from The Dreamy Nails nail salon, Sydney"
            priority
            quality={100}
            placeholder="blur"
          />
        }
      />

      <Container>
        <Section>
          <Section.Column doubleWidth>
            <H2 variant="h1">Welcome to The Dreamy Nails</H2>
            <p>
              Hello! I&apos;m Selina, a nail artist working from my private and comfortable home
              studio. I love turning ordinary nails into works of art!
            </p>
            <p>
              I&apos;m conveniently-located in Erskineville, Sydney — close to public transport, and
              walking distance from Newtown and Redfern.
            </p>
            <p>Do you want to know more about my salon and my journey with nail art?</p>
            <div>
              <ButtonLink href="/about" variant="subtle">
                Read more
              </ButtonLink>
            </div>
          </Section.Column>
          <Section.Column>
            <Image
              src={tdnFeatureImg}
              alt="Pastel princess-themed hand painted nail designs by The Dreamy Nails in Sydney"
              width={350}
              height={350}
              className="mx-auto"
            />
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
