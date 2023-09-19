'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface NavButtonLinkProps {
  children: ReactNode;
  href: string;
  className: string;
  inline?: boolean;
}

/** A ButtonLink with an internal href becomes a client component due to usePathname */
export default function NavButtonLink({ children, href, inline, className }: NavButtonLinkProps) {
  const isCurrentRoute = usePathname() === href;
  
  // Conditionally apply active styling
  const activeStyles = isCurrentRoute
    ? ' bg-white shadow-md text-tdn-secondary font-normal shadow-none before:bg-tdn-secondary before:scale-x-100 hover:text-tdn-secondary hover:font-normal hover:shadow-none'
    : '';
  
  const btnLinkStyle = className + activeStyles;

  return (
    <Link href={href} className={btnLinkStyle}>
      {children}
    </Link>
  );
}
