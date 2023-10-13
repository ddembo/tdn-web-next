'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

export default function PromptLink({ prompt, children }: { prompt: string; children: ReactNode }) {
  return (
    <Link
      href="/"
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
