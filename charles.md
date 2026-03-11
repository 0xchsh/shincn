# charles.md `v2.0`

> Drop this file in any project root. Claude Code will read it and produce UI that matches this design system, aesthetic, and decision-making process exactly.

---

## Who This Is For

This is the personal design system document for ch.sh. It encodes visual style, component philosophy, motion principles, and explicit anti-patterns. When building any UI in this project, treat this file as ground truth.

---

## Stack (Non-Negotiable)

| Layer | Library |
|---|---|
| Framework | React |
| Styling | Tailwind CSS |
| Components | shadcn/ui (Radix primitives under the hood) |
| Animation | Framer Motion |
| Icons | Phosphor Icons (`@phosphor-icons/react`) |
| Utility | `clsx` + `tailwind-merge` via `cn()` |

Never suggest replacing these. Never use Lucide, Heroicons, or other icon sets. Never use CSS-in-JS, styled-components, or Emotion.

---

## Pre-Build Protocol (Before Writing Any Code)

The biggest failure mode in AI-generated UI is skipping the aesthetic decision and jumping straight to code. The result is distributional convergence — predictable fonts, gradient fills on white, soft card shadows, standard grid layouts. Statistically safe and visually invisible.

Before building any component or screen, answer these four questions first:

1. **What problem does this interface solve, and who uses it?** The answer should change every visual decision downstream.
2. **What's the tonal register?** Pick a clear position: utilitarian and dense, warm and approachable, minimal and precise, editorial, etc. Don't land in the middle — the middle is where generic lives.
3. **What's the one spatial idea?** Every good screen has a compositional thesis — a dominant element, a clear reading order, an asymmetry that creates tension. Name it before you build it.
4. **What would the wrong version look like?** Articulate the AI default for this specific UI, then do the opposite.

Only after answering these should code be written.

---

## Typography

### Font Stack

```css
/* Default — everywhere */
font-family: "SF Pro Rounded", -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace — code snippets, addresses, hashes, technical strings only */
font-family: "SF Mono", ui-monospace, monospace;
```

SF Pro Rounded is the only sans-serif. Every heading, label, body text, button, and caption uses it. There is no secondary sans-serif option. Use SF Mono exclusively for code snippets, wallet addresses, hashes, CLI output, or numeric strings that need tabular alignment.

### Type Scale

Use Tailwind's default type scale. Avoid custom font sizes unless absolutely necessary.

**Hierarchy rules:**
- Page titles: `text-2xl font-semibold` or `text-3xl font-semibold`
- Section headings: `text-lg font-medium` or `text-xl font-semibold`
- Body: `text-sm` or `text-base` — never go below `text-xs` for readable content
- Labels, captions, helper text: `text-xs text-muted-foreground`
- Never use `font-bold` for UI labels — `font-medium` or `font-semibold` only
- Never change font weight on hover/selected states — it causes layout shift
- Use `font-variant-numeric: tabular-nums` for any column of numbers

---

## Color Philosophy

Light-first always. No dark mode unless explicitly requested.

**Neutral base + brand color system.** Colors are functional, not decorative. Every use of color should communicate something — status, hierarchy, interactivity, or brand.

**Palette approach:**
- Base: white/zinc/slate neutrals via Tailwind + shadcn tokens
- One primary brand accent per project, applied sparingly
- Use `text-muted-foreground` for secondary text, not custom grays
- Borders: `border` (default shadcn token) — never hand-roll border colors
- Destructive states: use shadcn's `destructive` token, not custom red

**Color anti-patterns:**
- Never use color purely for decoration (gradient backgrounds on cards "just because")
- Never use 3+ accent colors in the same UI
- Never use color to convey the only distinction — always pair with shape or label

---

## Spacing & Density

Balanced — comfortable but not wasteful. The goal is breathing room with purpose.

**Mental model:** Every gap should feel intentional. If you can remove 4px and nothing feels cramped, remove it. If something feels tight, add 4px before adding 8px.

### Spacing Table

| Context | Value | Tailwind |
|---|---|---|
| Between related items in a group | 4–8px | `gap-1` to `gap-2` |
| Between sections or card internals | 12–16px | `gap-3` to `gap-4` |
| Page section spacing | 24–32px | `gap-6` to `gap-8` |
| Page container padding | 16px | `px-4` |
| Card internal padding | 16–20px | `p-4` to `p-5` |
| Button padding | `px-4 py-2` (default), `px-3 py-1.5` (small) | — |

### Container Defaults

```tsx
// Default page container
<div className="mx-auto max-w-2xl px-4">
// or max-w-3xl for wider content — never go above max-w-3xl for text
```

---

## Border Radius

Restrained and consistent. Radius values should feel quiet, not bubbly.

| Element | Value | Tailwind |
|---|---|---|
| Buttons, inputs, select | 6px | `rounded-md` |
| Cards, panels | 8px | `rounded-lg` |
| Modals, dialogs | 12px | `rounded-xl` |
| Avatars, status dots | 50% | `rounded-full` |

Never use `rounded-2xl` or `rounded-3xl` on buttons or inputs. Never use `rounded-full` on rectangular cards. Don't give every element in the UI the same radius value — the variation between `md`, `lg`, and `xl` creates subtle hierarchy.

---

## Components

### Buttons

Use shadcn `Button` variants. Don't create custom button components.

```tsx
// Primary action
<Button>Save changes</Button>

// Secondary
<Button variant="outline">Cancel</Button>

// Destructive — always behind a confirmation dialog
<Button variant="destructive">Delete</Button>

// Ghost — for toolbar-style actions
<Button variant="ghost" size="icon" aria-label="Settings">
  <GearSix />
</Button>
```

**Button rules:**
- One primary button per view section — if everything is primary, nothing is
- Icon-only buttons always need `aria-label`
- Destructive actions always need a confirmation Dialog
- Loading state: disable the button and show a spinner — prevent double submissions

### Inputs

```tsx
// Always wrap in a proper label
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

- Input font size must be ≥ 16px to prevent iOS Safari zoom on focus
- Placeholder text is not a label — ever
- Error messages go directly below the input, not in a toast

### Modals / Dialogs

- Use shadcn `Dialog` — Radix-based, accessible by default
- Autofocus first input on open (desktop only)
- Confirm before any destructive action — use a proper Dialog, not `window.confirm()`
- Modal + overlay: same easing, same duration

---

## Motion (Emil Kowalski Principles)

Motion should feel native, not performative. Product UI is fast and purposeful. Marketing pages can be more expressive.

### Easing Blueprint

```css
/* Elements entering or exiting → ease-out */
--ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
--ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);

/* Elements moving while on screen → ease-in-out */
--ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);

/* Hover / color transitions → ease */
transition: background-color 150ms ease;
```

### Duration Guidelines

| Element | Duration |
|---|---|
| Micro-interactions (hover, color) | 100–150ms |
| Dropdowns, tooltips | 150–200ms |
| Modals, drawers | 200–300ms |
| Page transitions | 300–400ms max |

**Frequency rule:** If a user will see this 100+ times a day, don't animate it. Raycast doesn't animate its menu toggle. Follow that instinct.

### Framer Motion Defaults

```tsx
// Enter/exit pattern
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 4 }}
  transition={{ duration: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
/>

// Spring — for drag and playful interactions only
{ type: "spring", duration: 0.5, bounce: 0.15 }

// Reduced motion — always
const shouldReduceMotion = useReducedMotion();
initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
```

### Motion Rules

1. Only animate `transform` and `opacity` — these run on the GPU and skip layout/paint
2. Never animate `height`, `width`, `padding`, or `margin` directly
3. Paired elements (modal + overlay, tooltip + arrow) must share the same easing and duration
4. Every animation needs `prefers-reduced-motion` support
5. Use `AnimatePresence` with `mode="wait"` for route transitions
6. Don't use `transition: all` — specify exact properties

---

## Layout

- `max-w-2xl` to `max-w-3xl` for content pages — never let text go full width
- Left-align content by default — centered layouts only for empty states and marketing heroes
- Use CSS Grid for two-dimensional layouts, Flexbox for one-dimensional
- Sidebar + main: prefer fixed sidebar width (`w-64` or `w-72`) + `flex-1` main
- Sticky headers: `sticky top-0 z-10 bg-background/80 backdrop-blur-sm`

**Spatial composition — what most AI UI skips:**
Every screen should have a compositional thesis — a dominant element that draws the eye first, a clear reading hierarchy, and intentional use of negative space. Don't arrange elements in a grid just because it's easy; arrange them based on importance and flow. Generous negative space OR controlled density — pick one and commit. The middle is mud.

---

## Interactive States (All Required)

| State | Required |
|---|---|
| Default | ✓ |
| Hover | ✓ — `@media (hover: hover)` only |
| Focus-visible | ✓ — never remove, always style |
| Active / pressed | ✓ — `scale(0.97)` on buttons |
| Disabled | ✓ — `opacity-50 cursor-not-allowed pointer-events-none` |
| Loading | ✓ — spinner or skeleton, button disabled |
| Error | ✓ — inline message below the field |
| Empty state | ✓ — don't leave blank space, write helpful copy |

AI-generated UI almost always skips active, error, and empty states. These are non-negotiable.

---

## Anti-Patterns (Never Do These)

These are the things that make me immediately want to rewrite output:

**Radius crimes:**
- `rounded-2xl` or `rounded-3xl` on buttons or inputs
- `rounded-full` on rectangular cards
- Everything in the UI having the same radius value

**Shadow abuse:**
- `shadow-xl` or `shadow-2xl` on standard cards
- Shadows AND borders on the same element
- Inner shadows for no reason

**Layout crimes:**
- Content area `max-w-7xl` or wider — text lines become unreadable
- Everything centered, nothing left-aligned
- Padding applied at every nesting level instead of at the container

**Generic SaaS patterns:**
- Hero sections with a headline, subheadline, two CTA buttons, and a screenshot — rethink the structure
- Feature grids with icons and 3-word labels
- Pricing tables that look like every other pricing table
- `bg-gradient-to-br from-purple-500 to-blue-500` as a section background

**Color as decoration:**
- Gradient fills on cards just to add visual interest
- Colorful icon backgrounds (the `bg-blue-100 rounded-lg p-2` icon wrapper pattern)
- Using 3+ accent colors in the same view

**Typography mistakes:**
- `font-bold` on UI labels (use `font-medium` or `font-semibold`)
- All caps labels for everything
- Font weight changing on hover — causes layout shift
- Line length over ~70 characters for body text

**Motion mistakes:**
- `transition: all` — always specify properties
- Scroll-triggered fade-ups on every section
- Animations on frequently-used UI (tabs, nav items, toggles)
- No `prefers-reduced-motion` support

---

## Accessibility (WCAG 2.1 AA — Non-Negotiable)

Issues are ranked CRITICAL → SERIOUS → MODERATE. Fix in that order.

### CRITICAL — Ship blockers

**Missing accessible names (WCAG 4.1.2)**
Every icon-only button needs `aria-label`. No exceptions.
```tsx
// Wrong
<button><X /></button>

// Right
<button aria-label="Close dialog"><X /></button>
```

**Color contrast — text (WCAG 1.4.3)**
Normal text: 4.5:1 minimum. Large text (18px+ or 14px+ bold): 3:1 minimum. If shadcn tokens are used correctly, this is handled. The moment you hand-roll a color, verify contrast.

**Color as the only differentiator (WCAG 1.4.1)**
Never use color alone to communicate state, error, or category. Always pair color with an icon, label, or pattern.

**Form inputs without labels (WCAG 1.3.1)**
Every input must have an associated label via `htmlFor` or wrapping element. Placeholder text is not a label.

### SERIOUS — Fix before review

**Focus outline removed (WCAG 2.4.7)**
`outline-none` without a replacement focus style is a blocking accessibility failure.
```tsx
// Wrong — destroys keyboard navigation
className="focus:outline-none"

// Right — custom focus ring that matches the design
className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

**Keyboard navigation broken**
Tab order must follow visual reading order. Every interactive element must be reachable and operable by keyboard.

### MODERATE — Polish pass

**Missing `aria-live` for dynamic content**
Toast notifications, status updates, and async results need `role="status"` or `aria-live="polite"`.

**`prefers-reduced-motion` not respected**
Every animation must have a reduced-motion alternative. Including opacity transitions.

**iOS zoom on input focus**
Input font size must be ≥ 16px or iOS Safari will zoom the viewport on focus.

---

## Design Decision Framework

When Claude Code faces an ambiguous design decision, apply this hierarchy:

1. **Does shadcn already have this component?** Use it. Don't reinvent.
2. **Does the pattern exist in the project already?** Match it for consistency.
3. **Is this a product UI or a marketing surface?** Product = fast and minimal. Marketing = can be more expressive.
4. **Will the user see this 100+ times?** If yes, make it invisible — no animation, low visual weight.
5. **Is this the primary action?** If yes, it gets visual weight. If no, it's ghost/outline/muted.
6. **When in doubt, do less.** Remove the shadow. Remove the gradient. Remove the extra color. Restraint is the design.

---

## Design Review Protocol

When reviewing any UI output, run these passes in order:

**Pass 1 — CRITICAL (accessibility failures)**
- [ ] Any `<button>` or icon element missing an accessible name?
- [ ] Any `focus:outline-none` without `focus-visible:ring-*` replacement?
- [ ] Color contrast verified for all text on non-white backgrounds?
- [ ] Color used as the ONLY differentiator for any state?
- [ ] Any form input missing an associated `<label>`?

**Pass 2 — SERIOUS (UX failures)**
- [ ] All interactive states implemented (hover, focus, active, disabled, loading, error, empty)?
- [ ] Keyboard navigation flows logically — tested with Tab key?
- [ ] Dynamic content (toasts, status) announced with `aria-live`?

**Pass 3 — MODERATE (polish)**
- [ ] `prefers-reduced-motion` applied to all animations?
- [ ] No layout shift on state changes (loading → content, number updates)?
- [ ] Error messages colocated with the field that caused them?
- [ ] Loading states prevent duplicate form submissions?

**Pass 4 — Aesthetic (taste check)**
- [ ] Does this look like I made it, or does it look like an AI made it?
- [ ] Did the pre-build protocol get followed — is there a clear spatial thesis?
- [ ] Border radius consistent and restrained?
- [ ] No shadow + border on the same card?
- [ ] Content width ≤ `max-w-3xl`?
- [ ] Phosphor icons at consistent size and weight?
- [ ] SF Pro Rounded applied everywhere?

---

## Quick Checklist Before Shipping UI

**Accessibility (CRITICAL)**
- [ ] No icon buttons without `aria-label`
- [ ] No `outline-none` without `focus-visible:ring-*` replacement
- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] Color never the only differentiator for state
- [ ] All inputs have associated labels

**Interaction completeness**
- [ ] Hover, focus, active, disabled, loading, error, and empty states all implemented
- [ ] Forms submit on Enter; textareas on Cmd+Enter
- [ ] Submit button disabled during loading to prevent duplicate requests

**Layout & Typography**
- [ ] No layout shift on dynamic content (`font-variant-numeric: tabular-nums` for numbers)
- [ ] Content width ≤ `max-w-3xl`
- [ ] Input font size ≥ 16px
- [ ] SF Pro Rounded applied throughout — SF Mono only on code/hashes

**Motion**
- [ ] All animations have `prefers-reduced-motion` support
- [ ] No `transition: all` — specific properties only
- [ ] Hover effects wrapped in `@media (hover: hover) and (pointer: fine)`

**Visual**
- [ ] No `shadow-xl` on standard cards
- [ ] Border radius consistent and intentional
- [ ] No border + shadow on same element
- [ ] Phosphor icons only — consistent weight throughout
- [ ] Pre-build aesthetic direction followed — no generic AI defaults
