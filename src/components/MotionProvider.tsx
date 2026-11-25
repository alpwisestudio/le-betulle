"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Rispetta "riduci movimento" del sistema operativo per tutte le animazioni. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
