import type { Transition, TargetAndTransition } from "motion/react";

type AnimationPreset = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition?: Transition;
};

/* ────────────────────────────────────────────────
 * Mobile-optimised easing: avoid heavy spring
 * physics; use CSS-friendly cubic-bezier curves.
 * GPU-friendly: only animate transform + opacity.
 * ──────────────────────────────────────────────── */

const smooth = [0.22, 1, 0.36, 1] as const;
const snappy = [0.16, 1, 0.3, 1] as const;

export const presets = {
  fadeUp: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: smooth, delay },
  }),

  fadeIn: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.45, delay },
  }),

  slideLeft: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: snappy, delay },
  }),

  slideRight: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: snappy, delay },
  }),

  scalePop: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: smooth, delay },
  }),

  /**
   * Lighter spring — lower stiffness + higher damping
   * means fewer recalculations per frame on mobile.
   */
  springPop: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, scale: 0.88 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 180, damping: 22, delay },
  }),

  /**
   * ⚡  Replaced blur filter animation with simple fade.
   * `filter: blur()` is extremely expensive on mobile GPUs
   * because it forces rasterisation every frame.
   */
  blurIn: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: smooth, delay },
  }),

  /**
   * ⚡  Removed rotateX — 3D perspective transforms
   * cause recompositing jank on low-end mobile GPUs.
   * Replaced with a simpler vertical slide.
   */
  rotateX: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: snappy, delay },
  }),

  /** ⚡  Same rationale as rotateX — removed 3D rotation. */
  rotateY: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: snappy, delay },
  }),

  springUp: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 160, damping: 22, delay },
  }),
} as const;

export const viewport = { once: true, margin: "-60px" as const };
