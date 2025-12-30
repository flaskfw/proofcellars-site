'use client';

import { trackEvent } from '@/lib/analytics';

interface TrackedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  eventName: string;
  eventParams?: Record<string, unknown>;
  children: React.ReactNode;
}

/**
 * A button component that tracks clicks via GA4
 * Tracks on click, then calls the original onClick handler
 */
export default function TrackedButton({
  eventName,
  eventParams,
  onClick,
  children,
  ...props
}: TrackedButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    trackEvent(eventName, eventParams);
    onClick?.(e);
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}
