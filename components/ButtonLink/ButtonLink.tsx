import type { ReactNode } from 'react';
import clsx from 'clsx';

import NavButtonLink from './NavButtonLink';

const EXTERNAL_PREFIXES = ['http', 'mailto'];

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

/* Renders either `<a target="_blank">` (if `href` starts with an external prefix), or a NextJS
   `<Link>` that can optionally apply active styling if href === current route.
 */
const ButtonLink = ({ children, href, variant, inline, nav }: ButtonLinkProps) => {
  const isExternal = EXTERNAL_PREFIXES.some((prefix) => href.startsWith(prefix));

  const baseStyles =
    "relative block py-3 px-8 mx-auto font-heading font-light text-center uppercase tracking-wider no-underline bg-neutral-100 transition-all duration-300 before:content-[''] before:absolute before:block before:w-full before:h-0.5 before:bottom-0 before:left-0 before:bg-tdn-primary before:scale-x-0 before:transition-transform before:duration-300 before:ease-linear hover:bg-white hover:shadow-md hover:before:scale-x-100 lg:max-w-[200px]";
  const variantStyles: { [k in ButtonLinkVariant]?: string } = {
    cta: 'bg-tdn-highlight font-semibold before:h-1 before:bg-tdn-highlight-dark hover:bg-tdn-highlight-pale',
    subtle: 'bg-none shadow-none before:bg-tdn-highlight hover: bg-tdn-secondary hover:shadow-none',
  };
  const inlineStyles = ' inline-block p-2 pt-1';

  // Conditionally apply variant / inline styling
  const className = clsx(baseStyles, variant && variantStyles[variant], inline && inlineStyles);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  // If href doesn't start with an external link prefix, it is an internal nav link. NavButtonLink
  // automatically applies active styling if href === current route. Is a client component.
  return (
    <NavButtonLink href={href} className={className} nav={nav}>
      {children}
    </NavButtonLink>
  );
};

export default ButtonLink;
