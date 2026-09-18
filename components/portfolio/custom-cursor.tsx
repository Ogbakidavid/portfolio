"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CursorState = "default" | "link" | "project" | "external";

function stateForTarget(target: EventTarget | null): { state: CursorState; label: string } {
  if (!(target instanceof Element)) return { state: "default", label: "" };

  const element = target.closest<HTMLElement>("[data-cursor], a, button");
  if (!element || element.getAttribute("aria-disabled") === "true") {
    return { state: "default", label: "" };
  }

  const explicitState = element.dataset.cursor as CursorState | undefined;
  if (explicitState === "project") return { state: "project", label: "VIEW" };
  if (explicitState === "external") return { state: "external", label: "OPEN" };
  if (element instanceof HTMLAnchorElement && /^https?:\/\//.test(element.href)) {
    return { state: "external", label: "OPEN" };
  }

  return { state: "link", label: "" };
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: -100, y: -100 });
  const positionRef = useRef({ x: -100, y: -100 });
  const frameRef = useRef<number | undefined>(undefined);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!cursor || !finePointer.matches) return;

    const root = document.documentElement;
    root.dataset.customCursor = "true";

    const updateState = (target: EventTarget | null) => {
      const { state, label } = stateForTarget(target);
      cursor.dataset.state = state;
      const labelElement = cursor.querySelector<HTMLElement>("[data-cursor-label]");
      if (labelElement) labelElement.textContent = label;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      cursor.dataset.visible = "true";
      if (reducedMotion) {
        cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      updateState(event.target);
    };

    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType !== "touch") updateState(event.target);
    };

    const hide = () => {
      cursor.dataset.visible = "false";
      cursor.dataset.state = "default";
    };

    const animate = () => {
      const target = pointerRef.current;
      const position = positionRef.current;
      if (reducedMotion) {
        position.x = target.x;
        position.y = target.y;
      } else {
        position.x += (target.x - position.x) * 0.62;
        position.y += (target.y - position.y) * 0.62;
      }
      cursor.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("blur", hide);
    document.documentElement.addEventListener("mouseleave", hide);
    if (!reducedMotion) frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("blur", hide);
      document.documentElement.removeEventListener("mouseleave", hide);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      delete root.dataset.customCursor;
    };
  }, [reducedMotion]);

  return (
    <div ref={cursorRef} className="custom-cursor" data-state="default" data-visible="false" aria-hidden="true">
      <span className="custom-cursor__dot" />
      <span className="custom-cursor__label" data-cursor-label />
    </div>
  );
}
