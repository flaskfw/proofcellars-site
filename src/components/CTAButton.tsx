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
  const baseStyles =
    'inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors';

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary:
      'border border-accent text-accent hover:bg-accent hover:text-white',
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
