'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  eventName?: string;
  eventParams?: Record<string, unknown>;
}

export default function CTAButton({
  href,
  variant = 'primary',
  children,
  className = '',
  external = false,
  eventName,
  eventParams,
}: CTAButtonProps) {
  // Heritage design: Restrained, architectural button styling
  // Touch target: min-height 44px, comfortable padding
  // No layout shift: border always present (transparent on primary)
  // btn-primary/btn-secondary classes ensure link styles don't bleed through
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 min-h-[44px] text-base font-medium no-underline';

  const variantStyles = {
    // Primary: Midnight Navy background, Antique Gold border on hover
    // btn-primary class prevents global link styles from overriding button appearance
    primary:
      'btn-primary bg-[var(--color-primary)] text-white border border-transparent rounded-sm ' +
      'hover:border-[var(--color-accent)] ' +
      'transition-[color,border-color,background-color] duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]',

    // Secondary: Transparent background, border emphasis on hover
    // btn-secondary class prevents global link styles from overriding button appearance
    secondary:
      'btn-secondary bg-transparent text-[var(--color-heading)] border border-[var(--color-border)] rounded-sm ' +
      'hover:border-[var(--color-accent)] ' +
      'transition-[color,border-color,background-color] duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const handleClick = () => {
    if (eventName) {
      trackEvent(eventName, eventParams);
    }
  };

  if (external) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith('sms:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={combinedStyles} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedStyles} onClick={handleClick}>
      {children}
    </Link>
  );
}
