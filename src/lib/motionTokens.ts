/**
 * Motion Tokens - Single source of truth for animation values
 *
 * These constants match CSS custom properties in globals.css
 * and are used by the Reveal component to ensure consistency
 * across the design system.
 */

// Duration in seconds (for motion package)
export const DUR_SCROLL = 0.45 as const;

// Easing curve matching CSS --ease-luxe
export const EASE_LUXE = [0.16, 1, 0.3, 1] as const;

// Viewport configuration for scroll-triggered animations
export const VIEWPORT_CONFIG = {
  once: true,           // Animate only on first scroll into view
  amount: 0.2,          // Trigger when 20% of element is visible
  margin: "0px 0px -100px 0px", // Start animation 100px before entering viewport
} as const;

// Type definitions
export type EasingArray = readonly [number, number, number, number];

// Compile-time type check to ensure EASE_LUXE matches EasingArray
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _typeCheck: EasingArray = EASE_LUXE;
