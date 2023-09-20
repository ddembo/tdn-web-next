import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  as?: Extract<keyof JSX.IntrinsicElements, 'div' | 'section'>;
}

const Container = ({ children, as }: ContainerProps) => {
  const Element = as || 'div';
  return (
    <Element className="w-full py-16 mb-8 bg-tdn-primary text-tdn-highlight-pale">
      {children}
    </Element>
  );
};

export default Container;
