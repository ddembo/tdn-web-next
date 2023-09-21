import type { ReactElement } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import HeroScrollIcon from './HeroScrollIcon';
import { H1 } from '../Heading/Heading';

interface HeroProps {
  expanded?: boolean;
  heading: ReactElement;
  subtitle?: string;
  feature?: ReactElement;
}

const Hero = ({ expanded, heading, subtitle, feature }: HeroProps) => {
  return (
    <header
      className={twMerge(
        'flex flex-col items-center justify-between gap-4 mx-auto px-4 py-8 lg:flex-row lg:w-[978px] lg:py-16',
        expanded && 'lg:mt-[-59px] lg:h-screen',
      )}
    >
      <div
        className={twMerge(
          'grow-0 text-tdn-primary w-full',
          feature ? 'max-w-[296px]' : 'max-w-full', // Full width content area if no feature
        )}
      >
        <H1
          className={feature ? '' : 'lg:max-w-[66%]'} // 2/3 width title if no feature
        >
          {heading}
        </H1>
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

export default Hero;
