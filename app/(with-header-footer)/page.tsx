import Image from 'next/image';
import type { Metadata } from 'next/types';

import Section from '@/components/Section/Section';
import { H2 } from '@/components/Heading/Heading';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import SiteInstagramGallery from '@/components/SiteInstagramGallery/SiteInstagramGallery';
import SiteLogoFull from '@/components/icons/SiteLogoFull';

import tdnHeroSamples from '@/public/tdn-hero-samples.webp';
import tdnFeatureImg from '@/public/pastel-princess-nail-design.webp';

import RootStructuredData from '../RootStructuredData';

export const metadata: Metadata = {
  title: 'Sydney BIAB nail art, manicures & press-ons - The Dreamy Nails',
  description:
    "I'm creating unique hand-painted nail designs from my private home nail salon in Sydney",
};

export default function Home() {
  return (
    <>
      <RootStructuredData />
      <div className="grow">
        <Hero
          expanded
          heading={<SiteLogoFull />}
          subtitle="BIAB nail art, manicures & press-ons - creating unique hand-painted nail designs from my private home nail salon in Sydney."
          feature={
            <Image
              src={tdnHeroSamples}
              alt="Photos of beautiful hand-painted nail designs by Selina from The Dreamy Nails salon in Sydney"
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
                I&apos;m conveniently-located in Erskineville, Sydney — close to public transport,
                and walking distance from Newtown and Redfern.
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
    </>
  );
}
