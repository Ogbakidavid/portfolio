"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

export function ViewTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const isProjectRoute = pathname.startsWith("/work/");

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.div
        key={pathname}
        className="view-transition"
        initial={reducedMotion ? false : { opacity: 0, x: isProjectRoute ? -10 : 0, y: isProjectRoute ? 0 : 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={reducedMotion ? { opacity: 1 } : { opacity: 0, x: isProjectRoute ? 10 : 0, y: isProjectRoute ? 0 : -5 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
