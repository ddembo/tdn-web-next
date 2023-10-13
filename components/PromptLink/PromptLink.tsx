'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

interface PromptLinkProps {
  prompt: string;
  children: ReactNode;
  href?: string;
}

export default function PromptLink({ href = '/', prompt, children }: PromptLinkProps) {
  return (
    <Link
      href={href}
      className="self-center font-light text-sm no-underline hover:underline"
      onClick={(event) => {
        const isConfirmed = confirm(prompt);
        if (isConfirmed) {
          return;
        } else {
          event.preventDefault();
        }
      }}
    >
      {children}
    </Link>
  );
}
