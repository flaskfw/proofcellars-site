# Proof Cellars Design System
## Heritage / Private Client Aesthetic

---

## Philosophy

This design system embodies **restraint, typography, whitespace, and consistency**—the hallmarks of heritage luxury brands. The system prioritizes:

- **Editorial elegance** over app-like interfaces
- **Quiet sophistication** over flashy effects
- **Typographic hierarchy** as the primary design tool
- **Generous whitespace** as a luxury signal
- **Muted, warm tones** that evoke trust and heritage

**No scaling hover animations. No bouncy motion. No layout shift.**

---

## 1. Design Tokens (CSS Variables)

All design tokens are defined in `src/app/globals.css` using CSS variables and mapped to Tailwind v4's `@theme inline` configuration.

### Surfaces

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#F9F8F4` | Alabaster - global body background |
| `--color-surface` | `#FFFFFF` | Soft White - cards, inputs, panels |
| `--color-surface-2` | `#FCFBF8` | Warm Tint - disabled fields, subtle depth |
| `--color-divider` | `#E0DBD2` | Section dividers |

### Borders (Semantic)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-border` | `#E6E1D8` | Hairline Sand - default borders for cards, inputs, dividers |
| `--color-border-strong` | `#D8D1C6` | Hover states, emphasized dividers |
| `--color-accent` | `#D4AF37` | Antique Gold - focus rings, primary hover borders **(use sparingly ~1% of UI)** |

### Text

| Token | Value | Usage |
|-------|-------|-------|
| `--color-text` | `#2C2C2C` | Warm Charcoal - body text |
| `--color-text-muted` | `#6B6258` | Soft Charcoal - secondary text, labels |
| `--color-heading` | `#1A1A1A` | Deep Charcoal - headings (H1-H6) |

### Brand and Actions

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#1B2A41` | Midnight Navy - primary CTA backgrounds |
| `--color-primary-hover` | `#15212F` | Slightly darker navy for hover states |

### Semantic States (Muted)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#3A5A40` | Muted Forest - success states, checkmarks |
| `--color-danger` | `#6B2737` | Subdued Burgundy - error states |
| `--color-info` | `#3E4A59` | Muted Slate - informational states |

### Shadows (Explicit & Restrained)

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card` | `0 1px 2px rgba(0,0,0,0.06)` | Default card shadow |
| `--shadow-card-hover` | `0 4px 14px rgba(0,0,0,0.08)` | Card hover shadow |

**Rules:**
- Shadows are **only** for cards and elevated panels
- **Never** apply shadows to buttons

### Motion (Explicit)

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-luxe` | `cubic-bezier(0.16, 1, 0.3, 1)` | Custom luxury easing |
| `--dur-fast` | `180ms` | Inputs, focus states |
| `--dur-base` | `220ms` | Buttons, links, general transitions |
| `--dur-slow` | `260ms` | Large layout transitions (avoid) |

**Reduced Motion:**
All durations drop to `10ms` when `prefers-reduced-motion: reduce` is detected.

### Border Radius (Restrained)

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `2px` | Buttons |
| `--radius-md` | `6px` | Cards, inputs (max border radius) |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-section-mobile` | `64px` | Section padding on mobile (`py-16`) |
| `--spacing-section-desktop` | `96px` | Section padding on desktop (`py-24`) |

---

## 2. Typography

### Font Loading (Next.js `next/font`)

Fonts are self-hosted via `next/font/google` in `src/app/layout.tsx`:

```typescript
import { Inter, Libre_Baskerville } from "next/font/google";

const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-baskerville",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  adjustFontFallback: true,
});
```

Applied to `<html>` element:
```tsx
<html className={`${baskerville.variable} ${inter.variable}`}>
```

### Typography Hierarchy

#### Serif (Libre Baskerville) — H1-H3 Only

**H1 - Editorial Focal Point**
- Mobile: `34px / 1.2` line-height
- Tablet (md): `38px / 1.18`
- Desktop (lg+): `44px / 1.15`
- Letter-spacing: `-0.02em`

**H2 - Section Headings**
- Mobile: `24px / 1.25`
- Tablet (md): `27px / 1.22`
- Desktop (lg+): `30px / 1.2`

**H3 - Subsection Headings**
- Mobile: `18px / 1.3`
- Tablet (md): `20px / 1.28`
- Desktop (lg+): `22px / 1.25`

#### Sans-serif (Inter) — Body, H4-H6, UI

**Body Text**
- Mobile: `15px / 1.6`
- Tablet (md): `16px / 1.65`
- Desktop (lg+): `17px / 1.7`

**H4-H6**
- Use sans-serif (`--font-sans`)
- Font-weight: `600`
- Color: `--color-heading`

**Usage:**
```tsx
// ✅ DO: Let global styles handle headings
<h1>Direct buyer of collectible wine and spirits.</h1>

// ❌ DON'T: Override with inline classes
<h1 className="text-4xl md:text-5xl font-semibold text-primary">...</h1>
```

---

## 3. Component Patterns

### Buttons

#### Primary Button
```tsx
<button className="
  inline-flex items-center justify-center
  px-6 py-3 min-h-[44px]
  text-base font-medium
  bg-[var(--color-primary)] text-white
  border border-transparent rounded-sm
  hover:border-[var(--color-accent)]
  transition-[color,border-color,background-color]
  duration-[var(--dur-base)]
  [transition-timing-function:var(--ease-luxe)]
">
  Get an Offer
</button>
```

**Key principles:**
- `border: 1px solid transparent` prevents hover reflow
- `min-h-[44px]` ensures touch target compliance
- Hover changes **border color** to `--color-accent`, not background
- No scaling, no bouncing

#### Secondary Button
```tsx
<button className="
  inline-flex items-center justify-center
  px-6 py-3 min-h-[44px]
  text-base font-medium
  bg-transparent
  text-[var(--color-heading)]
  border border-[var(--color-border)] rounded-sm
  hover:border-[var(--color-accent)]
  transition-[color,border-color,background-color]
  duration-[var(--dur-base)]
  [transition-timing-function:var(--ease-luxe)]
">
  Learn More
</button>
```

#### Disabled State
```tsx
<button disabled className="
  opacity-40
  cursor-not-allowed
">
  Disabled Button
</button>
```

- Remove all hover/focus effects via CSS
- Opacity: `0.4`

#### Loading State (Primary Button)
```tsx
<button className="
  bg-[var(--color-primary)]
  opacity-85
  cursor-progress
">
  <Spinner className="h-4 w-4 text-white mr-2" />
  Processing...
</button>
```

- Maintain button width to prevent reflow
- Show spinner (white, 18px) positioned left or center
- Prevent double-clicks

---

### Links

#### Global Link Styles (in globals.css)
```css
a {
  color: var(--color-heading);
  text-decoration: underline;
  text-decoration-color: var(--color-border-strong);
  text-underline-offset: 0.2em;
  transition: text-decoration-color var(--dur-base) var(--ease-luxe),
              color var(--dur-base) var(--ease-luxe);
}

a:hover {
  text-decoration-color: var(--color-accent);
}

a:visited {
  opacity: 0.75;
}
```

**Usage:**
```tsx
// ✅ DO: Use minimal or no classes (global styles apply)
<Link href="/faq">See all questions</Link>

// ❌ DON'T: Override with old color tokens
<Link href="/faq" className="text-accent hover:text-accent-hover">...</Link>
```

---

### Cards

#### Base Card Class (in globals.css)
```css
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  transition: box-shadow var(--dur-base) var(--ease-luxe),
              border-color var(--dur-base) var(--ease-luxe);
}

.card:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-card-hover);
}
```

**Usage:**
```tsx
<div className="card p-8">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

---

### Forms

#### Input Base (in globals.css)
```css
input[type="text"],
input[type="email"],
textarea,
select {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 15px;
  border-radius: var(--radius-md);
  padding: 12px 16px;
  min-height: 44px;
  transition: border-color var(--dur-fast) var(--ease-luxe),
              box-shadow var(--dur-fast) var(--ease-luxe);
}

input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(27, 42, 65, 0.12);
  outline: none;
}

input.error {
  border-color: var(--color-danger);
}
```

**Usage:**
```tsx
<input
  type="email"
  placeholder="your@email.com"
  className={error ? 'error' : ''}
/>
{error && <p className="form-error">{error}</p>}
```

---

## 4. Layout & Spacing

### Content Max-Width Constraints

**Editorial content (articles, forms):**
- Max-width: `720px`
- Class: `.content-editorial`

**Product grids and dense lists:**
- Max-width: `1280px`
- Class: `.content-grid`

**Full-width hero:**
- May span full width, but inner content respects `max-w-7xl` (1280px)

### Spacing Rhythm

**Section padding:**
```tsx
<section className="py-16 md:py-24">
  {/* 64px mobile, 96px desktop */}
</section>
```

**Section dividers:**
```tsx
<section className="section-divider">
  {/* Adds 1px top border using --color-divider */}
</section>
```

**Component gaps:**
- Use `gap-8` for sections
- Use `gap-3` for inline lists

---

## 5. Focus States (Accessibility)

**Global focus ring:**
```css
button:focus-visible,
input:focus-visible,
a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  transition: outline var(--dur-fast) var(--ease-luxe);
}
```

**Never remove focus outlines.** They are critical for keyboard navigation.

---

## 6. Touch Targets (Mobile Accessibility)

**Minimum dimensions:**
- Buttons: `min-h-[44px]`, `min-w-[44px]`
- Links (mobile menu): `min-h-[44px]`
- Clickable cards: `min-h-[56px]`

**Comfortable padding:**
- Buttons: `px-6` or `px-8`
- Inputs: `px-4` (with `min-height: 44px`)

---

## 7. Icon Usage

**Muted tones only:**
- Checkmarks: `text-[var(--color-success)]`
- X marks / errors: `text-[var(--color-danger)]`
- General icons: `text-[var(--color-text-muted)]`

**No bright UI colors** (avoid neon green, bright blue, etc.)

---

## 8. Prefers-Reduced-Motion

All motion durations are **automatically reduced** to `10ms` when the user has `prefers-reduced-motion: reduce` enabled:

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-fast: 10ms;
    --dur-base: 10ms;
    --dur-slow: 10ms;
  }
  html {
    scroll-behavior: auto;
  }
}
```

**Test in DevTools:**
- Chrome: DevTools → Rendering → Emulate CSS media feature `prefers-reduced-motion`

---

## 9. Do's and Don'ts

### ✅ DO

- Use CSS variables for all colors: `bg-[var(--color-primary)]`
- Let global typography styles handle headings (`<h1>`, `<h2>`, etc.)
- Apply `no-underline` to buttons and nav links that shouldn't have underlines
- Use `rounded-sm` for buttons, `rounded-md` for cards/inputs
- Use `--color-accent` sparingly (roughly 1% of UI surface area)
- Keep shadows minimal and only on cards
- Ensure all interactive elements have `min-h-[44px]` on mobile

### ❌ DON'T

- Don't use hardcoded hex values in components
- Don't add inline font-size/weight to headings (e.g., `text-4xl`, `font-semibold`)
- Don't use `rounded-full` or oversized border-radius
- Don't add shadows to buttons
- Don't use bright, saturated colors (e.g., `#00FF00`, `#0000FF`)
- Don't create scaling hover animations (`hover:scale-105`)
- Don't add borders on hover that cause layout shift (always include `border: 1px solid transparent`)

---

## 10. Key Components Reference

| Component | File | Key Classes |
|-----------|------|-------------|
| CTAButton | `src/components/CTAButton.tsx` | Heritage button styles (primary/secondary) |
| TrackedLink | `src/components/TrackedLink.tsx` | Uses global link styles (no custom classes needed) |
| Header | `src/components/Header.tsx` | Muted nav links, heritage button for CTA |
| Footer | `src/components/Footer.tsx` | Muted footer links |
| SellerTestimonials | `src/components/SellerTestimonials.tsx` | `.card`, muted success color for badges |
| FAQItem | `src/components/FAQItem.tsx` | Accordion with `--color-divider` borders |
| ProcessSteps | `src/components/ProcessSteps.tsx` | Bordered circles (not filled) |
| GetOfferSidebar | `src/components/GetOfferPageClient.tsx` | Sticky card with heritage buttons |

---

## 11. Migration Checklist

When refactoring a page or component:

1. ✅ Replace old color tokens:
   - `bg-surface` → `bg-[var(--color-surface)]`
   - `text-primary` → `text-[var(--color-heading)]` (or remove if applied to headings)
   - `text-secondary` → `text-[var(--color-text-muted)]`
   - `border-border` → `border-[var(--color-border)]`
   - `text-accent` → `text-[var(--color-accent)]` (use sparingly!)
   - `bg-accent` → `bg-[var(--color-primary)]` (for buttons)

2. ✅ Remove inline typography classes from headings:
   - `<h1 className="text-4xl font-semibold text-primary">` → `<h1>`

3. ✅ Update button styles to heritage patterns (see Section 3)

4. ✅ Verify touch targets: `min-h-[44px]`

5. ✅ Test focus states with keyboard navigation (Tab key)

6. ✅ Test hover states: no layout shift, no scaling

7. ✅ Test reduced motion in DevTools

---

## 12. Accessibility Standards

**Target:**
- Lighthouse Accessibility Score: **95+**

**Checklist:**
- All interactive elements: `min-h-[44px]` on mobile
- Focus visible on all buttons, links, inputs
- Color contrast: WCAG AA minimum
  - `--color-text` on `--color-bg`: 8.5:1 (AAA)
  - `--color-text-muted` on `--color-surface`: 4.8:1 (AA)
  - `--color-heading` on `--color-surface`: 12.6:1 (AAA)
- Keyboard navigation: all interactive elements reachable via Tab
- Reduced motion: respected via `prefers-reduced-motion: reduce`

---

## 13. Design System Maintenance

**When adding new components:**
1. Use existing design tokens (never add new CSS variables without discussion)
2. Follow spacing rhythm (`py-16 md:py-24` for sections)
3. Use `.card` class for cards
4. Ensure touch target compliance
5. Test focus states
6. Document in this file if it's a new pattern

**When updating tokens:**
1. Update `src/app/globals.css`
2. Update this documentation
3. Test across all pages
4. Run Lighthouse accessibility audit

---

## Contact

For questions or design system updates, please reach out to the design/engineering team.
