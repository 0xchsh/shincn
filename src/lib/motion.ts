/**
 * charles.md motion presets — Framer Motion defaults
 *
 * Only animate transform and opacity (GPU-composited).
 * Never animate height, width, padding, or margin.
 * Every animation must support prefers-reduced-motion.
 */

export const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;
export const easeOutQuart = [0.165, 0.84, 0.44, 1] as const;
export const easeInOutCubic = [0.645, 0.045, 0.355, 1] as const;

/** Enter/exit — elements appearing or disappearing */
export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 4 },
  transition: { duration: 0.2, ease: easeOutCubic },
} as const;

/** Subtle fade — for less dramatic transitions */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.15, ease: easeOutCubic },
} as const;

/** Spring — for drag and playful interactions only */
export const spring = {
  type: "spring" as const,
  duration: 0.5,
  bounce: 0.15,
} as const;

/** Duration presets (ms) */
export const duration = {
  micro: 0.1,       // hover, color changes: 100ms
  tooltip: 0.15,    // dropdowns, tooltips: 150ms
  dropdown: 0.2,    // dropdowns: 200ms
  modal: 0.25,      // modals, drawers: 250ms
  page: 0.35,       // page transitions: 350ms
} as const;
