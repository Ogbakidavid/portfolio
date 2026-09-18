"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CSSProperties, useEffect, useState } from "react";

const SESSION_KEY = "portfolio-intro-seen";
const ENTRY_STAGGER = 0.03;
const RESOLUTION_START = 900;
const OPENING_START = 1650;
const REMOVE_AT = 2100;

type ShapeDefinition = {
  type: "circle" | "triangle";
  x: number;
  y: number;
  size: number;
  opacity: number;
  entryX: number;
  entryY: number;
  final?: boolean;
  finalX?: number;
  finalY?: number;
};

const SHAPES: ShapeDefinition[] = [
  { type: "circle", x: 4, y: 4, size: 13, opacity: 0.82, entryX: -5, entryY: -6 },
  { type: "triangle", x: 21, y: 3, size: 13, opacity: 0.7, entryX: -2, entryY: -7 },
  { type: "circle", x: 38, y: 5, size: 14, opacity: 0.92, entryX: 0, entryY: -7 },
  { type: "triangle", x: 56, y: 2, size: 13, opacity: 0.78, entryX: 3, entryY: -7 },
  { type: "circle", x: 74, y: 4, size: 12, opacity: 0.64, entryX: 6, entryY: -6 },
  { type: "triangle", x: 91, y: 5, size: 14, opacity: 0.84, entryX: 8, entryY: -5 },
  { type: "triangle", x: 3, y: 21, size: 12, opacity: 0.68, entryX: -7, entryY: -2 },
  { type: "circle", x: 20, y: 20, size: 14, opacity: 0.9, entryX: -4, entryY: 0, final: true, finalX: 45, finalY: 29 },
  { type: "circle", x: 38, y: 22, size: 12, opacity: 0.76, entryX: -1, entryY: 3 },
  { type: "triangle", x: 55, y: 20, size: 14, opacity: 0.88, entryX: 2, entryY: 2 },
  { type: "circle", x: 74, y: 21, size: 13, opacity: 0.58, entryX: 4, entryY: 2 },
  { type: "triangle", x: 91, y: 22, size: 12, opacity: 0.76, entryX: 8, entryY: 4 },
  { type: "circle", x: 4, y: 39, size: 12, opacity: 0.58, entryX: -8, entryY: 5 },
  { type: "triangle", x: 21, y: 38, size: 13, opacity: 0.86, entryX: -4, entryY: 5 },
  { type: "circle", x: 39, y: 40, size: 14, opacity: 0.72, entryX: -1, entryY: 6 },
  { type: "triangle", x: 56, y: 38, size: 13, opacity: 0.66, entryX: 3, entryY: 5 },
  { type: "circle", x: 74, y: 40, size: 13, opacity: 0.9, entryX: 5, entryY: 6 },
  { type: "triangle", x: 91, y: 39, size: 14, opacity: 0.74, entryX: 8, entryY: 5 },
  { type: "circle", x: 4, y: 57, size: 13, opacity: 0.74, entryX: -7, entryY: 9 },
  { type: "triangle", x: 21, y: 56, size: 12, opacity: 0.6, entryX: -4, entryY: 8 },
  { type: "circle", x: 39, y: 58, size: 13, opacity: 0.84, entryX: 0, entryY: 9 },
  { type: "triangle", x: 56, y: 56, size: 14, opacity: 0.7, entryX: 3, entryY: 8 },
  { type: "circle", x: 74, y: 58, size: 12, opacity: 0.62, entryX: 6, entryY: 9 },
  { type: "triangle", x: 91, y: 57, size: 13, opacity: 0.8, entryX: 8, entryY: 8, final: true, finalX: 68, finalY: 29 },
];

export function IntroLoader() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [resolving, setResolving] = useState(false);
  const [opening, setOpening] = useState(false);

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
    const resolutionTimer = window.setTimeout(
      () => setResolving(true),
      reducedMotion ? 0 : RESOLUTION_START,
    );
    const openingTimer = window.setTimeout(
      () => setOpening(true),
      reducedMotion ? 40 : OPENING_START,
    );
    const removeTimer = window.setTimeout(() => {
      shell?.removeAttribute("inert");
      setVisible(false);
    }, reducedMotion ? 90 : REMOVE_AT);

    return () => {
      window.clearTimeout(resolutionTimer);
      window.clearTimeout(openingTimer);
      window.clearTimeout(removeTimer);
      shell?.removeAttribute("inert");
    };
  }, [reducedMotion]);

  const shapes = reducedMotion ? SHAPES.filter((shape) => shape.final) : SHAPES;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-loader"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: opening ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="intro-loader__mark">
            {shapes.map((shape, index) => {
              const resolved = reducedMotion || resolving;
              const targetX = resolved && shape.final ? (shape.finalX ?? shape.x) - shape.x : 0;
              const targetY = resolved && shape.final ? (shape.finalY ?? shape.y) - shape.y : 0;
              const openingX = shape.type === "circle" ? "-45vw" : "45vw";
              const shapeStyle = {
                left: shape.x,
                top: shape.y,
                opacity: shape.opacity,
                "--shape-size": `${shape.size}px`,
              } as CSSProperties;

              return (
                <motion.span
                  key={`${shape.type}-${index}`}
                  className={`intro-loader__shape intro-loader__shape--${shape.type}${shape.final ? " intro-loader__shape--final" : ""}`}
                  style={shapeStyle}
                  initial={{ opacity: 0, scale: 0.72, x: shape.entryX, y: shape.entryY }}
                  animate={
                    resolved
                      ? shape.final
                        ? { opacity: shape.opacity, scale: opening ? 1.55 : 1.5, x: opening ? openingX : targetX, y: targetY }
                        : { opacity: 0, scale: 0.72, x: -shape.x + 72, y: -shape.y + 44 }
                      : { opacity: shape.opacity, scale: 1, x: 0, y: 0 }
                  }
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : resolved
                        ? { duration: opening ? 0.26 : 0.2, ease: [0.65, 0, 0.35, 1] }
                        : { duration: 0.18, delay: index * ENTRY_STAGGER, ease: [0.22, 1, 0.36, 1] }
                  }
                />
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
