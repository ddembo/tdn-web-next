import type { ReactElement } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import HeroScrollIcon from './HeroScrollIcon';

interface HeroProps {
  expanded?: boolean;
  heading: ReactElement;
  subtitle: string;
  feature: ReactElement;
}

const Hero = ({ expanded, heading, subtitle, feature }: HeroProps) => {
  return (
    <header
      className={twMerge(
        'flex flex-col items-center justify-between gap-4 mx-auto mb-6 p-4 lg:flex-row lg:w-[978px] lg:min-h-[450px]',
        expanded && 'lg:mt-[-60px] lg:h-screen',
      )}
    >
      <div className="grow-0 max-w-[296px]"> 
        <h1>{heading}</h1>
        <p className="font-heading text-[1.75rem] font-light text-center lg:text-left" role="doc-subtitle">
          {subtitle}
        </p>
      </div>

      {React.cloneElement(feature, {
        // Preserve feature element's tailwind classes
        className: twMerge(feature.props.className, 'grow-0 object-contain max-w-full'),
      })}

      {expanded && <HeroScrollIcon />}
    </header>
  );
};

export default Hero;
