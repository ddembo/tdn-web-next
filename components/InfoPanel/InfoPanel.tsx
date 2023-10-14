'use client';

import { useState, type ReactNode } from 'react';

interface InfoPanelProps {
  children: ReactNode;
  title?: string;
}

export default function InfoPanel({ children, title = 'Important information' }: InfoPanelProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  return (
    <div className="bg-[#d8e1ff] text-left md:rounded-3xl p-2 md:p-4">
      <div className="m-0 flex justify-between">
        <strong className="text-tdn-secondary">{title}</strong>
        {isDismissed && (
          <button className="underline underline-offset-2" onClick={() => setIsDismissed(false)}>
            Show
          </button>
        )}
      </div>
      {!isDismissed && (
        <>
          {children}
          <button className="underline underline-offset-2 p-4" onClick={() => setIsDismissed(true)}>
            Got it
          </button>
        </>
      )}
    </div>
  );
}
