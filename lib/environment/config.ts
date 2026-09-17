import { getProject } from "@/lib/content/projects";

export type EnvironmentState =
  | "home"
  | "work"
  | "project"
  | "experience"
  | "stack"
  | "about"
  | "contact";

export type ProjectEnvironment =
  | "billam"
  | "dayle"
  | "aethersearch"
  | "plp-alumni";

export type EnvironmentConfig = {
  density: number;
  movement: number;
  connectionDistance: number;
  connectionOpacity: number;
  accentProbability: number;
  pointerRadius: number;
  clustering: number;
};

const configurations: Record<EnvironmentState, EnvironmentConfig> = {
  home: { density: 16, movement: 0.18, connectionDistance: 105, connectionOpacity: 0.08, accentProbability: 0.002, pointerRadius: 55, clustering: 0.05 },
  work: { density: 32, movement: 0.24, connectionDistance: 125, connectionOpacity: 0.13, accentProbability: 0.005, pointerRadius: 65, clustering: 0.18 },
  project: { density: 24, movement: 0.2, connectionDistance: 110, connectionOpacity: 0.1, accentProbability: 0.004, pointerRadius: 58, clustering: 0.16 },
  experience: { density: 24, movement: 0.27, connectionDistance: 115, connectionOpacity: 0.1, accentProbability: 0.003, pointerRadius: 55, clustering: 0.1 },
  stack: { density: 38, movement: 0.21, connectionDistance: 120, connectionOpacity: 0.12, accentProbability: 0.005, pointerRadius: 62, clustering: 0.2 },
  about: { density: 14, movement: 0.14, connectionDistance: 100, connectionOpacity: 0.06, accentProbability: 0.001, pointerRadius: 48, clustering: 0.04 },
  contact: { density: 10, movement: 0.1, connectionDistance: 90, connectionOpacity: 0.05, accentProbability: 0.001, pointerRadius: 44, clustering: 0.02 },
};

const projectConfigurations: Record<ProjectEnvironment, EnvironmentConfig> = {
  billam: { ...configurations.project, movement: 0.24, connectionDistance: 120, clustering: 0.2 },
  dayle: { ...configurations.project, movement: 0.16, connectionDistance: 96, clustering: 0.1 },
  aethersearch: { ...configurations.project, movement: 0.22, connectionDistance: 128, clustering: 0.18 },
  "plp-alumni": { ...configurations.project, movement: 0.18, connectionDistance: 116, clustering: 0.22 },
};

export function resolveEnvironment(pathname: string) {
  if (pathname === "/") return { state: "home" as const, config: configurations.home };
  if (pathname === "/work") return { state: "work" as const, config: configurations.work };
  if (pathname.startsWith("/work/")) {
    const slug = pathname.slice("/work/".length) as ProjectEnvironment;
    const project = getProject(slug);
    return {
      state: "project" as const,
      project: project ? project.slug as ProjectEnvironment : undefined,
      config: project ? projectConfigurations[project.slug as ProjectEnvironment] : configurations.project,
    };
  }
  const state = pathname.slice(1) as Exclude<EnvironmentState, "home" | "work" | "project">;
  return { state: state in configurations ? state : "home", config: configurations[state] ?? configurations.home };
}
