"use client"
// TODO: consider how to refactor so menu state can be a route/history item, this will enable parts of header to be server component

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import ButtonLink from '../ButtonLink/ButtonLink';
import SiteHeaderToggle from './SiteHeaderToggle';
import tdnLogoOnly from '@/public/tdn-logo-only.png';

export default function SiteHeader() {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <header className="z-50 sticky flex items-center justify-between bg-white top-0 w-full py-2 px-4 mx-auto">
      <Link href="/">
        <Image
          src={tdnLogoOnly}
          alt="The Dreamy Nails Premium BIAB, GELX & Press-ons logo"
        />
      </Link>
      <SiteHeaderToggle isExpanded={isExpanded} onClick={() => setExpanded((prev) => !prev)} />
      <div
        className={twMerge(
          'fixed top-[59px] right-[-100%] w-full min-h-[calc(100vh_-_59px)] flex flex-col pt-4 bg-tdn-highlight-pale transition-all duration-200',
          isExpanded && 'right-0',
        )}
      >
        <nav className="max-w-[350px] mx-auto" onClick={() => setExpanded(false)}>
          {/* TODO: extract list component (duplicated in page.tsx) */}
          <ul className="self-center flex flex-col items-stretch w-full p-0 my-0 list-none">
            <li className="block py-2">
              <ButtonLink nav href=".">
                Home
              </ButtonLink>
            </li>
            <li className="block py-2">
              <ButtonLink nav href="prices">
                Price Menu
              </ButtonLink>
            </li>
            <li className="block py-2">
              <ButtonLink nav href="faq">
                FAQ
              </ButtonLink>
            </li>
            <li className="block py-2">
              <ButtonLink href="#booking" variant="cta">
                Book now
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
