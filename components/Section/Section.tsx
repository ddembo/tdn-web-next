import clsx from 'clsx';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  /** Renders as section by default, but can be optionally overridden */
  as?: Extract<keyof JSX.IntrinsicElements, 'div' | 'section'>;
  /** Reverse the visual order of child items on desktop breakpoints */
  reverseColumns?: boolean;
}

/** Used to style the content of TDN pages, ensuring it is constrained sensibly. Also contains a
 *  child component, `<Section.Column>`, for arranging any number of blocks side-by-side.
 */
const Section = ({ children, as, reverseColumns }: SectionProps) => {
  const Element = as || 'section';
  return (
    <Element className={clsx("tdn-section", "flex flex-col gap-4 items-start justify-space p-1 mx-auto max-w-section lg:flex-row lg:flex-wrap lg:w-[978px]", reverseColumns && "lg:flex-row-reverse")}>
      {children}
    </Element>
  );
};

interface ColumnProps {
  children: ReactNode;
  /** Make the column double width (i.e. `flex-grow: 2`). */
  doubleWidth?: boolean;
}
const Column = ({ children, doubleWidth }: ColumnProps) => (
  <div
    className={clsx(
      'w-100 flex flex-col basis-full shrink-0 lg:grow-1 lg:basis-auto',
      doubleWidth && 'grow-2 lg:grow-2 lg:basis-auto',
    )}
  >
    {children}
  </div>
);

Section.Column = Column;

export default Section;