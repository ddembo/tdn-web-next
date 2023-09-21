import type { ReactElement } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { H1 } from '@/components/Heading/Heading';
import Container from '@/components/Container/Container';

import HeroScrollIcon from './HeroScrollIcon';

interface HeroInnerProps {
  expanded?: boolean;
  flipped?: boolean;
  heading: ReactElement;
  subtitle?: string;
  feature?: ReactElement;
}

interface HeroWrapperProps {
  contained?: boolean;
}

const HeroInner = ({ expanded, flipped, heading, subtitle, feature }: HeroInnerProps) => {
  return (
    <header
      className={twMerge(
        'flex flex-col items-center justify-between gap-4 mx-auto px-8 py-8 lg:flex-row lg:w-[978px] lg:px-4 lg:py-16',
        expanded && 'lg:mt-[-56px] lg:h-screen',
      )}
    >
      <div
        className={twMerge(
          'grow-0 w-full text-center lg:text-left',
          feature ? 'max-w-xs' : 'max-w-full', // Full width content area if no feature
          feature && flipped && 'lg:order-last' // Put content after feature if flag true
        )}
      >
        <H1 className={feature ? 'lg:max-w-full' : 'lg:max-w-lg'}>{heading}</H1>
        {subtitle && (
          <p
            className="pt-6 font-heading tracking-wide text-2xl font-normal text-center lg:text-left"
            role="doc-subtitle"
          >
            {subtitle}
          </p>
        )}
      </div>

      {feature &&
        React.cloneElement(feature, {
          // Preserve feature element's tailwind classes
          className: twMerge(feature.props.className, 'grow-0 object-contain max-w-full'),
        })}

      {expanded && <HeroScrollIcon />}
    </header>
  );
};

const Hero = ({ contained, ...heroProps }: HeroWrapperProps & HeroInnerProps) => {
  if (contained) {
    return (
      <Container slim>
        <HeroInner {...heroProps} />
      </Container>
    );
  }

  return <HeroInner {...heroProps} />;
};

export default Hero;
