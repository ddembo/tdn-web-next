import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

// TODO: finish implementing styles
type HeadingVariant = 'h1' | 'h2' | 'h3';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  variant?: HeadingVariant; 
  as?: Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
}

/* Heading component with configurable level/element, defaults to <h2>. Comes with convenience
   subcomponents e.g. this would render an <h2> that looks like an h4:
   ```
   <H2 variant="h4">My heading</H2>
   ```
*/
const Heading = ({ variant = 'h2', children, as = 'h2', className: mergeClasses }: HeadingProps) => {
  const Element = as || 'h2';
  const baseStyles = 'font-heading mb-5 tracking-wide lg:max-w-[66%]'
  const variantStyles: { [k in HeadingVariant]?: string } = {
    h1: 'font-normal text-5xl uppercase leading-tight lg:max-w-[75%]',
    h2: 'font-normal text-4xl',
    h3: 'font-light text-4xl',
  };
  const className = twMerge(baseStyles, variantStyles[variant], mergeClasses);
  return <Element className={className}>{children}</Element>;
};

export const H1 = ({ children, variant, ...restProps }: Omit<HeadingProps, 'as'>) => (
  <Heading as='h1' variant={variant || 'h1'} {...restProps}>
    {children}
  </Heading>
);

export const H2 = ({ children, variant, ...restProps }: Omit<HeadingProps, 'as'>) => (
  <Heading as='h2' variant={variant || 'h2'} {...restProps}>
    {children}
  </Heading>
);

export default Heading;
