# Luxury Scroll Reveal System

Production-grade, accessible scroll-triggered animations using the motion package.

## Architecture

This implementation follows best practices for Next.js 15+ with App Router and React 19:

- **Server Component Compatibility**: `app/layout.tsx` remains a Server Component
- **LazyMotion**: Reduces initial bundle size by lazy-loading animation features
- **No Hydration Mismatches**: Fixed animation values guarantee SSR stability
- **Accessibility First**: Respects `prefers-reduced-motion` with static fallback
- **Performance Conscious**: Guidelines prevent harming Core Web Vitals

## Components

### `<MotionProvider>`

Client-side wrapper that enables motion features across the app.

**Location**: `src/components/providers/MotionProvider.tsx`

**Usage**: Already integrated in `app/layout.tsx` - no additional setup needed.

### `<Reveal>`

Scroll-triggered animation component that fades in content as it enters the viewport.

**Location**: `src/components/motion/Reveal.tsx`

**Props**:
- `children`: React.ReactNode - Content to animate
- `delay`: number (default: 0) - Delay in seconds before animation starts
- `width`: "fit-content" | "100%" (default: "100%") - Container width
- `className`: string - Additional CSS classes

## Usage Examples

### Basic Reveal

```tsx
import { Reveal } from "@/components/motion/Reveal";

export default function MyPage() {
  return (
    <section>
      <h2>Always Visible (no animation)</h2>

      <Reveal>
        <p>This paragraph fades in when scrolled into view.</p>
      </Reveal>
    </section>
  );
}
```

### Staggered Animations

```tsx
import { Reveal } from "@/components/motion/Reveal";

const items = ["First", "Second", "Third"];

export default function StaggeredList() {
  return (
    <div>
      {items.map((item, index) => (
        <Reveal key={item} delay={index * 0.12}>
          <div className="card">{item}</div>
        </Reveal>
      ))}
    </div>
  );
}
```

### Grid Animation (Performance Optimized)

```tsx
import { Reveal } from "@/components/motion/Reveal";

// ✅ Good: Animate the container once
export default function OptimizedGrid() {
  return (
    <Reveal>
      <div className="grid grid-cols-3 gap-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
    </Reveal>
  );
}

// ❌ Avoid: Animating many children creates overhead
export default function SlowGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Reveal><div>Item 1</div></Reveal>
      <Reveal><div>Item 2</div></Reveal>
      <Reveal><div>Item 3</div></Reveal>
    </div>
  );
}
```

### Custom Width and Styling

```tsx
import { Reveal } from "@/components/motion/Reveal";

export default function CustomReveal() {
  return (
    <Reveal
      width="fit-content"
      className="mx-auto"
      delay={0.2}
    >
      <button>Animated Button</button>
    </Reveal>
  );
}
```

## Performance Guidelines

### ✅ DO:
- Use for **below-the-fold content** only
- Wrap grid/list **containers** instead of individual children
- Use stagger delays: `delay={index * 0.12}`
- Keep animations subtle and purposeful

### ❌ DON'T:
- Wrap H1 or hero sections (harms LCP)
- Animate critical above-the-fold content
- Create excessive animation observers (hundreds of elements)
- Use for content that must be visible without JavaScript

## Accessibility

The `Reveal` component automatically handles accessibility:

1. **Reduced Motion**: When `prefers-reduced-motion` is enabled, renders a static `<div>` with no animations
2. **No-JS Fallback**: Content starts hidden (opacity: 0), so only use for non-critical content
3. **Keyboard Navigation**: Animations don't interfere with focus or keyboard interaction

## Motion Tokens

Animation values are centralized in `src/lib/motionTokens.ts` and match CSS custom properties:

- **Duration**: 450ms (`--dur-scroll`)
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1) (`--ease-luxe`)
- **Viewport Config**: Triggers at 20% visibility, 100px before entering viewport

## Technical Details

### Bundle Optimization

Uses `motion/react-m` (LazyMotion-compatible) instead of full motion components:

```tsx
import * as m from "motion/react-m";  // ✅ Smaller bundle
import { motion } from "motion/react"; // ❌ Larger bundle
```

### Hydration Safety

Fixed animation values prevent hydration mismatches:

```tsx
// ✅ Safe: Fixed values
initial={{ opacity: 0, y: 20 }}

// ❌ Unsafe: Dynamic values cause hydration errors
initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
```

### Server Component Pattern

Layout remains a Server Component by isolating client-side code:

```tsx
// app/layout.tsx (Server Component)
import { MotionProvider } from "@/components/providers/MotionProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
```

## Troubleshooting

**Issue**: Content flashes unstyled before animating
**Solution**: Only use `<Reveal>` for below-the-fold content

**Issue**: Animations not working
**Solution**: Ensure `<MotionProvider>` wraps your app in `layout.tsx`

**Issue**: Hydration mismatch warnings
**Solution**: Don't use dynamic animation values (e.g., `isMobile` checks)

**Issue**: Slow performance on mobile
**Solution**: Reduce number of animated elements, prefer animating containers

## Further Reading

- [Motion.dev Documentation](https://motion.dev/)
- [LazyMotion Guide](https://motion.dev/docs/react-lazy-motion)
- [Accessibility Best Practices](https://motion.dev/docs/react-reduced-motion)
