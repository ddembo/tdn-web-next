import type { ReactNode } from 'react';
import {twMerge} from 'tailwind-merge';

import NavButtonLink from './NavButtonLink'; // CLIENT COMPONENT

const INTERNAL_LINK_REGEX = /^(\.|\.\.)?\//; // Match ./, ../, or / at start of string

type ButtonLinkVariant = 'cta' | 'subtle';

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  variant?: ButtonLinkVariant;
  /** Shrink to fit `ButtonLink` content */
  inline?: boolean;
  /** Make this a nav link with active styling */
  nav?: boolean;
}

/* Renders a link styled as a button. Underlying element is determiend by `href`:
  - if href starts with `/` or `./` or `../`, it is an internal routing link, so use a NextJS `<Link>` with
    option to style active nav routes.
  - otherwise, it is an external link (http, mailto, tel, etc) so we use an `<a target="_blank">`

  This separation ensures a client component is only used when absolutely necessary.
 */
const ButtonLink = ({ children, href, variant, inline, nav }: ButtonLinkProps) => {
  const isExternal = !INTERNAL_LINK_REGEX.test(href);

  const baseStyles =
    "relative block py-3 px-8 mx-auto font-heading font-normal text-center uppercase tracking-wider no-underline bg-neutral-100 transition-all duration-300 before:content-[''] before:absolute before:block before:w-full before:h-0.5 before:bottom-0 before:left-0 before:bg-tdn-primary before:scale-x-0 before:transition-transform before:duration-300 before:ease-linear hover:bg-white hover:shadow-md hover:before:scale-x-100 lg:max-w-[200px]";
  const variantStyles: { [k in ButtonLinkVariant]?: string } = {
    cta: 'bg-tdn-highlight font-bold before:h-1 before:bg-tdn-highlight-dark hover:bg-tdn-highlight-pale',
    subtle: 'underline bg-transparent shadow-none before:bg-tdn-highlight hover:bg-tdn-secondary hover:shadow-none hover:no-underline',
  };
  const inlineStyles = ' inline-block p-2 pt-1';

  // Conditionally apply variant / inline styling
  const className = twMerge(baseStyles, variant && variantStyles[variant], inline && inlineStyles);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <NavButtonLink href={href} className={className} nav={nav}>
      {children}
    </NavButtonLink>
  );
};

export default ButtonLink;
