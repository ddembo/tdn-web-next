import type { Metadata } from 'next/types';
import Image from 'next/image';

import Section from '@/components/Section/Section';
import { H2 } from '@/components/Heading/Heading';
import Hero from '@/components/Hero/Hero';

import imgSelina from '@/public/selina-about-me.webp';

export const metadata: Metadata = {
  title: 'About The Dreamy Nails',
  description:
    "About my home nail salon journey. Understand why creating a safe space to express yourself is so important to me",
};

export default function AboutMe() {
  return (
    <div className="grow">
      <Hero
        contained
        flipped
        // FIXME: fix types for heading prop so I don't need a Fragment
        heading={<>About me</>}
        subtitle="Hello and welcome to The Dreamy Nails: my little oasis away from the stresses of life! I'm Selina 🤗"
        feature={
          <Image
            src={imgSelina}
            alt="Photo of Selina, from The Dreamy Nails in Erskineville, with beautiful hand-painted nail art"
            priority
            quality={100}
            placeholder="blur"
          />
        }
      />
      <Section as='article'>
        <Section.Column>
          <p>
            I&apos;ve always been creative from a young age, but especially growing up in an Asian
            family, I never thought that a career in Arts would be an option for me.
          </p>
          <p>
            I tried to be the perfect daughter, which led me down the path of studying primary
            teaching, then counselling, and working 9-5 office jobs.
          </p>
          <p>
            But it wasn&apos;t until my knee injury in 2020 that I really started thinking about
            what I was doing with my life.
          </p>
          <p>
            I was bed-ridden for weeks - I literally had to learn how to walk and run again. For the
            first time in 7 years I took a break from working. I had a lot of time to focus on my
            health and think about the things that bring me joy.
          </p>
          <p>
            Art has always been a form of therapy for me, and doing my own nails and creating lots
            of fun nail art really lifted my spirits during my recovery. Not to mention during all
            of the COVID lockdowns that followed!
          </p>
          <p>
            These events made me realise that I needed to start living life for myself instead of
            doing what everyone expected of me, so I did the unspeakable, and started to pursue my
            hobby of creating beautiful things that bring joy as a full time career. And so, The
            Dreamy Nails was born!
          </p>
          <p>
            When I thought about the kind of person that I am, and my core values, I knew I wanted
            to do things a little differently to some other Sydney nail studios.
          </p>
          <H2 variant="h3">Creating a safe space</H2>
          <p>
            I want every client to feel like they are going to a friend&apos;s house to get their
            nails done. Somewhere that you can relax and be your authentic self, no matter what that
            means for you. If you need any accommodations made to feel comfortable, please send me a
            message and I&apos;ll be happy to discuss them with you!
          </p>
          <H2 variant="h3">An island of calm</H2>
          <p>
            As an introvert with anxiety I would dread every time I needed to get my nails done at a
            busy, noisy shopping mall. You can get pampered in my private, clean and
            professionally-equipped home salon — away from all the chaos.
          </p>
          <H2 variant="h3">Personalised nail designs</H2>
          <p>
            You&apos;re unique, and your nail art should celebrate that fact. I tailor every design
            based on things like your specific style, interests, inspo pics and skin tone, so that
            you walk out loving your nails.
          </p>
        </Section.Column>
      </Section>
    </div>
  );
}
