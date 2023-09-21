import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: ReactNode;
  as?: Extract<keyof JSX.IntrinsicElements, 'div' | 'section'>;
  slim?: boolean;
}

const Container = ({ children, as, slim }: ContainerProps) => {
  const Element = as || 'div';
  return (
    <Element
      className={twMerge(
        'w-full py-16 mb-0 bg-tdn-primary text-tdn-highlight-pale',
        slim && 'py-0',
      )}
    >
      {children}
    </Element>
  );
};

export default Container;
