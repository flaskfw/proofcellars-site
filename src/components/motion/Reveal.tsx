/**
 * Reveal - CSS-only scroll animation component
 *
 * PERFORMANCE-OPTIMIZED: Pure CSS, zero JavaScript, no render blocking.
 * Uses CSS animations only - no motion package dependency.
 *
 * IMPORTANT: Only use this component for below-the-fold content.
 * Do NOT wrap critical above-the-fold content (H1, hero sections).
 *
 * Usage examples:
 * - <Reveal>...</Reveal>
 * - <Reveal delay={0.12}>...</Reveal>
 * - <Reveal delay={0.24} width="fit-content">...</Reveal>
 * - <Reveal className="custom-class">...</Reveal>
 *
 * Performance:
 * - Zero JavaScript in critical path
 * - No Client Component hydration cost
 * - Pure CSS animations (GPU-accelerated)
 * - Respects prefers-reduced-motion automatically
 */

interface RevealProps {
  children: React.ReactNode;
  /** Delay in seconds before animation starts (default: 0) */
  delay?: number;
  /** Width of the reveal container (default: "100%") */
  width?: "fit-content" | "100%";
  /** Additional CSS classes */
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  width = "100%",
  className = "",
}: RevealProps) {
  // Pure CSS solution - no JavaScript, no hydration cost
  // Animation defined in globals.css
  return (
    <div
      className={`reveal-animate ${className}`}
      style={{
        width,
        // CSS custom property for stagger delay
        ["--reveal-delay" as string]: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
