import type { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3'; // TODO: finish implementing styles
  as?: Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
}

/* Heading component with configurable level/element, defaults to <h2>. Comes with convenience
   subcomponents e.g. this would render an <h2> that looks like an h4:
   ```
   <H2 variant="h4">My heading</H2>
   ```
*/
const Heading = ({ variant = 'h2', children, as = 'h2' }: HeadingProps) => {
  const Element = as || 'h2';
  const headingClass = 'heading heading--' + variant;
  return <Element className={headingClass}>{children}</Element>;
};

export const H1 = ({ children, variant }: Omit<HeadingProps, 'as'>) => (
  <Heading as='h1' variant={variant || 'h1'}>
    {children}
  </Heading>
);

export const H2 = ({ children, variant }: Omit<HeadingProps, 'as'>) => (
  <Heading as='h2' variant={variant || 'h2'}>
    {children}
  </Heading>
);

export default Heading;
