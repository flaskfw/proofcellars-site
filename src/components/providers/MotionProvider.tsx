"use client";

/**
 * MotionProvider - Client-side wrapper for LazyMotion
 *
 * This component enables lazy-loading of motion features to reduce
 * initial bundle size. It must be rendered as a Client Component
 * but can be wrapped by Server Components in the layout hierarchy.
 *
 * Usage: Wrap your app content in layout.tsx with <MotionProvider>
 */

import { LazyMotion, domAnimation } from "motion/react";

interface MotionProviderProps {
  children: React.ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
