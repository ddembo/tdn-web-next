import type { Metadata } from 'next/types';

import Section from '@/components/Section/Section';
import { H1, H2 } from '@/components/Heading/Heading';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';

import tdnLogoHero from '@/public/tdn-logo-hero.png';
import tdnHeroSamples from '@/public/tdn-hero-samples.png';

export const metadata: Metadata = {
  title: 'The Dreamy Nails | Service menu',
  description: 'Get an idea of my current nail services, and how much your appointment will cost.',
};

export default function Home() {
  return (
    <div className="grow">
      {/* FIXME: fix types for heading prop so I don't need a Fragment */}
      <Hero heading={<>Service menu</>} />
    </div>
  );
}
