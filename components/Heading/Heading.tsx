import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

// TODO: add h5 & h6 if used anywhere.
type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  variant?: HeadingVariant;
  as?: Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'>;
}

/* Heading component with configurable level/element, defaults to <h2>. Comes with convenience
   subcomponents that are more readable, e.g. this would render an <h2> that looks like an h4:
   ```
   <H2 variant="h4">Looks like H4</H2>
   ```
   Or use the direct component for more options, e.g. a paragraph that looks like an H3:
   ```
   <Heading as='p' variant='h3'>Looks like H3</Heading>
   ```
*/
const Heading = ({
  variant = 'h2',
  children,
  as = 'h2',
  className: mergeClasses,
}: HeadingProps) => {
  const Element = as || 'h2';
  const baseStyles = 'font-heading mb-5 tracking-wide leading-none md:leading-tight';
  const variantStyles: { [k in HeadingVariant]?: string } = {
    h1: 'font-normal text-4xl uppercase md:text-5xl',
    h2: 'font-normal mb-2 text-3xl md:mb-3 md:text-4xl',
    h3: 'font-light mb-2 text-xl md:mb-3 md:text-2xl',
    h4: 'font-normal mb-1 text-sm uppercase md:mb-2 md:text-base',
  };
  const className = twMerge(baseStyles, variantStyles[variant], mergeClasses);
  return <Element className={className}>{children}</Element>;
};

export const H1 = ({ variant, ...restProps }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h1" variant={variant || 'h1'} {...restProps} />
);

export const H2 = ({ variant, ...restProps }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h2" variant={variant || 'h2'} {...restProps} />
);

export const H3 = ({ variant, ...restProps }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h3" variant={variant || 'h3'} {...restProps} />
);

export const H4 = ({ variant, ...restProps }: Omit<HeadingProps, 'as'>) => (
  <Heading as="h4" variant={variant || 'h4'} {...restProps} />
);

export default Heading;
