"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "article";
  delay?: number;
  group?: boolean;
};

/** Fa entrare il contenuto quando arriva nel viewport. Con `group` anima i figli Item in sequenza. */
export function Reveal({ children, className, as = "div", delay = 0, group = false }: Props) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={group ? stagger : fadeUp}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Tag>
  );
}

export function Item({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
