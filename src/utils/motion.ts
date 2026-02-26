import type { Transition, TargetAndTransition } from "motion/react";

type AnimationPreset = {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition?: Transition;
};

export const presets = {
  fadeUp: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
  fadeIn: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay },
  }),
  slideLeft: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  }),
  slideRight: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  }),
  scalePop: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: "easeOut", delay },
  }),
  springPop: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 300, damping: 20, delay },
  }),
  blurIn: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.5, delay },
  }),
  rotateX: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, y: 30, rotateX: 10 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
  rotateY: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, y: 30, rotateY: 15 },
    animate: { opacity: 1, y: 0, rotateY: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
  springUp: (delay = 0): AnimationPreset => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 200, damping: 20, delay },
  }),
} as const;

export const viewport = { once: true, margin: "-50px" as const };
