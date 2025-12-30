'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  eventName: string;
  eventParams?: Record<string, unknown>;
  className?: string;
  children: React.ReactNode;
  target?: '_blank' | '_self';
  rel?: string;
}

/**
 * A link component that tracks clicks via GA4
 * Tracks on click, then allows normal navigation
 */
export default function TrackedLink({
  href,
  eventName,
  eventParams,
  className,
  children,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, eventParams);
  };

  // External links, sms:, and tel: use anchor tags
  if (
    href.startsWith('http') ||
    href.startsWith('sms:') ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:') ||
    target === '_blank'
  ) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    );
  }

  // Internal links use Next.js Link
  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
