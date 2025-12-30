import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  variant = 'primary',
  children,
  className = '',
  external = false,
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors';

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'border border-accent text-accent hover:bg-accent hover:text-white',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith('sms:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  );
}
