"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const SESSION_KEY = "portfolio-intro-seen";

export function IntroLoader() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const shell = document.querySelector<HTMLElement>(".portfolio-shell");
    const suppressed = document.documentElement.dataset.introSuppressed === "true";

    if (suppressed) {
      const hideTimer = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(hideTimer);
    }

    try {
      window.sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // If storage is unavailable, the intro still remains a safe visual overlay.
    }

    shell?.setAttribute("inert", "");
    const exitTimer = window.setTimeout(() => setExiting(true), reducedMotion ? 40 : 680);
    const removeTimer = window.setTimeout(() => {
      shell?.removeAttribute("inert");
      setVisible(false);
    }, reducedMotion ? 90 : 1280);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      shell?.removeAttribute("inert");
    };
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-loader"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="intro-loader__mark">
            <motion.span
              className="intro-loader__circle"
              initial={{ opacity: 0, scale: 0.72, x: -12 }}
              animate={reducedMotion ? { opacity: 1, scale: 1, x: 0 } : { opacity: 1, scale: 1, x: 0, rotate: 360 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="intro-loader__triangle"
              initial={{ opacity: 0, scale: 0.72, x: 12 }}
              animate={reducedMotion ? { opacity: 1, scale: 1, x: 0 } : { opacity: 1, scale: 1, x: 0, rotate: -180 }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
