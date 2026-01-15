"use client";

/**
 * Reveal - Luxury scroll-triggered animation component
 *
 * Uses whileInView to fade in content as it scrolls into viewport.
 * Respects prefers-reduced-motion for accessibility.
 *
 * IMPORTANT: Only use this component for below-the-fold content.
 * Do NOT wrap critical above-the-fold content (H1, hero sections)
 * as the initial opacity is 0 and requires JavaScript to animate in.
 *
 * Usage examples:
 * - <Reveal>...</Reveal>
 * - <Reveal delay={0.12}>...</Reveal>
 * - <Reveal delay={0.24} width="fit-content">...</Reveal>
 * - <Reveal className="custom-class">...</Reveal>
 *
 * Performance strategy:
 * - Above-the-fold: Do not wrap H1 or LCP elements
 * - Below-the-fold: Safe to use
 * - Staggering: delay = index * 0.12
 * - Grids: Prefer wrapping container vs many children
 */

import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { DUR_SCROLL, EASE_LUXE, VIEWPORT_CONFIG } from "@/lib/motionTokens";

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
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // Accessibility: If user prefers reduced motion, render static content
  // Use a plain div (not motion) to avoid any animation overhead
  if (prefersReducedMotion) {
    return (
      <div style={{ width }} className={className}>
        {children}
      </div>
    );
  }

  // Standard animation path for users without motion preferences
  // Fixed values (no mobile branching) to guarantee SSR stability
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: DUR_SCROLL,
        ease: EASE_LUXE,
        delay,
      }}
      style={{ width }}
      className={className}
    >
      {children}
    </m.div>
  );
}
