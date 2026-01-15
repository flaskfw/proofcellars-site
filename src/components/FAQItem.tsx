'use client';

import { useState } from 'react';
import type { FAQ } from '@/lib/types';

interface FAQItemProps {
  faq: FAQ;
  defaultOpen?: boolean;
}

export default function FAQItem({ faq, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--color-divider)]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left min-h-[44px] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)] hover:text-[var(--color-heading)]"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-[var(--color-heading)] pr-4">
          {faq.question}
        </span>
        <span className="flex-shrink-0 text-[var(--color-text-muted)]">
          {isOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-[var(--color-text)]">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
