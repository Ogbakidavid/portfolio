"use client";

import Particles from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { ParticlesProvider } from "@tsparticles/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { resolveEnvironment, type EnvironmentConfig } from "@/lib/environment/config";

const baseOptions: ISourceOptions = {
  fullScreen: { enable: true, zIndex: 1 },
  fpsLimit: 30,
  detectRetina: true,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  particles: {
    color: { value: ["#ffffff", "#a1a1aa"] },
    number: { value: 16, density: { enable: true, width: 1200, height: 900 } },
    opacity: { value: { min: 0.16, max: 0.34 } },
    size: { value: { min: 0.7, max: 1.7 } },
    move: { enable: true, speed: 0.18, outModes: { default: "out" } },
    links: { enable: true, distance: 105, opacity: 0.08, width: 0.5, frequency: 0.42, color: "#a1a1aa" },
  },
  interactivity: {
    detectsOn: "window",
    events: { onHover: { enable: true, mode: "repulse" }, resize: { enable: true } },
    modes: { repulse: { distance: 55, duration: 0.25, speed: 0.35 } },
  },
  responsive: [
    { maxWidth: 760, options: { fpsLimit: 20, particles: { number: { value: 9 }, move: { speed: 0.1 }, links: { enable: false } }, interactivity: { events: { onHover: { enable: false } } } } },
  ],
};

function applyConfig(container: Container, config: EnvironmentConfig) {
  container.options.load({
    particles: {
      number: { value: config.density },
      move: { speed: config.movement },
      links: {
        distance: config.connectionDistance,
        opacity: config.connectionOpacity,
        frequency: 0.25 + config.clustering,
      },
    },
    interactivity: { modes: { repulse: { distance: config.pointerRadius } } },
  });

  const difference = config.density - container.particles.count;
  if (difference > 0) container.particles.push(difference);
  if (difference < 0) container.particles.removeQuantity(Math.abs(difference));
}

function interpolateConfig(container: Container, from: EnvironmentConfig, to: EnvironmentConfig, reducedMotion: boolean) {
  if (reducedMotion) {
    applyConfig(container, to);
    return () => undefined;
  }

  let frame = 0;
  const startedAt = performance.now();
  const duration = 280;
  const tick = (now: number) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = (key: keyof EnvironmentConfig) => from[key] + (to[key] - from[key]) * eased;
    applyConfig(container, {
      density: Math.round(current("density")),
      movement: current("movement"),
      connectionDistance: current("connectionDistance"),
      connectionOpacity: current("connectionOpacity"),
      pointerRadius: current("pointerRadius"),
      clustering: current("clustering"),
    });
    if (progress < 1) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
}

function EnvironmentCanvas() {
  const pathname = usePathname();
  const containerRef = useRef<Container | undefined>(undefined);
  const activeConfigRef = useRef<EnvironmentConfig | undefined>(undefined);
  const transitionRef = useRef<(() => void) | undefined>(undefined);
  const reducedMotion = useReducedMotion();
  const { config } = useMemo(() => resolveEnvironment(pathname), [pathname]);
  const init = useCallback((engine: Parameters<typeof loadSlim>[0]) => loadSlim(engine), []);
  const options = useMemo<ISourceOptions>(() => ({
    ...baseOptions,
    particles: {
      color: { value: ["#ffffff", "#a1a1aa"] },
      number: { value: 16, density: { enable: true, width: 1200, height: 900 } },
      opacity: { value: { min: 0.16, max: 0.34 } },
      size: { value: { min: 0.7, max: 1.7 } },
      move: { enable: reducedMotion !== true, speed: 0.18, outModes: { default: "out" } },
      links: { enable: true, distance: 105, opacity: 0.08, width: 0.5, frequency: 0.42, color: "#a1a1aa" },
    },
    interactivity: {
      detectsOn: "window",
      events: { onHover: { enable: reducedMotion !== true, mode: "repulse" }, resize: { enable: true } },
      modes: { repulse: { distance: 55, duration: 0.25, speed: 0.35 } },
    },
  }), [reducedMotion]);
  const handleParticlesLoaded = useCallback((container?: Container) => {
    if (container) {
      containerRef.current = container;
      const config = resolveEnvironment(window.location.pathname).config;
      applyConfig(container, config);
      activeConfigRef.current = config;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    transitionRef.current?.();
    const previous = activeConfigRef.current ?? config;
    transitionRef.current = interpolateConfig(container, previous, config, reducedMotion === true);
    activeConfigRef.current = config;

    return () => transitionRef.current?.();
  }, [config, reducedMotion]);

  return (
    <ParticlesProvider init={init}>
      <div className="persistent-environment" aria-hidden="true">
        <Particles id="portfolio-environment" options={options} particlesLoaded={handleParticlesLoaded} />
      </div>
    </ParticlesProvider>
  );
}

export function PersistentEnvironment() {
  return <EnvironmentCanvas />;
}
