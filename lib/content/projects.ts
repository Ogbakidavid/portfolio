export type ProjectVisualMode =
  | "orchestration"
  | "settlement"
  | "retrieval"
  | "collaboration";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  systemApproach: string;
  technologies: string[];
  visualMode: ProjectVisualMode;
  visualLanguage: [string, string, string];
  keyContributions?: string[];
  contribution?: string;
  status?: string;
  notes?: string;
  github?: {
    frontend?: string;
    backend?: string;
  };
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "billam",
    number: "01",
    title: "BillAm",
    category: "AI systems / operations",
    shortDescription:
      "An autonomous background AI agent for informal SMEs that turns messy English/Pidgin briefs into structured requirements, follow-up questions, and contingency-aware quotes.",
    overview:
      "BillAm helps business owners move from an informal client brief to a reviewed quote without treating the workflow as a simple chatbot. Owners can review, edit, and approve structured work in one dashboard, reducing back-and-forth and the risk of underpricing a job.",
    systemApproach:
      "The system combines TypeScript and Node.js with the Strands Agents SDK, deterministic required-field validation, structured state transitions, Anthropic models, and a React/Next dashboard. Structured inter-agent data, API integrations, client personas, live chat simulation, and cost-aware controls keep the operational workflow inspectable.",
    technologies: [
      "TypeScript / Node.js",
      "Strands Agents SDK",
      "Anthropic",
      "React / Next.js",
      "API integrations",
    ],
    visualMode: "orchestration",
    visualLanguage: ["brief", "state", "review"],
    keyContributions: [
      "Agent tools and bounded capabilities",
      "Agent skills and steering logic",
      "Session and state management",
      "Backend API implementation",
      "TypeScript types and workflow contracts",
    ],
    status: "Not commercially launched",
    github: {
      frontend: "https://github.com/Ogbakidavid/billam-dashboard.git",
      backend: "https://github.com/Ogbakidavid/BillAm-agent.git",
    },
  },
  {
    slug: "dayle",
    number: "02",
    title: "Dayle",
    category: "Settlement / infrastructure",
    shortDescription:
      "A structured settlement layer and milestone vault for outcome-based contractor and freelance work.",
    overview:
      "Dayle was designed around a clear settlement sequence: funds enter an isolated vault before work begins, then move through milestone approval or a mediated dispute path. The product explored how contractual confidence could be expressed as a backend workflow.",
    systemApproach:
      "The implementation connected a NestJS service layer with Redis, AWS, Celo smart contracts, Paycrest, Partna APIs, and Privy. The emphasis was on coordinating payment, identity, milestone, and dispute states across the system boundary.",
    technologies: [
      "NestJS",
      "Redis",
      "AWS",
      "Celo smart contracts",
      "Paycrest / Partna APIs",
      "Privy",
    ],
    visualMode: "settlement",
    visualLanguage: ["deposit", "milestone", "release"],
    keyContributions: [
      "Backend architecture and system design",
      "API design and implementation",
      "Privy integration",
      "Backend smart-contract integration",
      "Backend settlement workflow",
    ],
    status: "Not commercially launched",
    notes:
      "The startup did not reach commercial launch due to business-model constraints; technical ownership of the backend was retained.",
    github: {
      backend: "https://github.com/Ogbakidavid/dayle-backend.git",
      frontend: "https://github.com/Ogbakidavid/dayle-frontend.git",
    },
  },
  {
    slug: "aethersearch",
    number: "03",
    title: "Aether Search",
    category: "Retrieval / RAG",
    shortDescription:
      "An AI semantic search and retrieval-augmented generation engine for finding relationships across documents and producing grounded answers.",
    overview:
      "AetherSearch treats search as a context problem. Documents are embedded, stored, and retrieved for semantic relationships before Anthropic Claude generates a contextual answer grounded in the available material.",
    systemApproach:
      "The system used Voyage AI embeddings, Pinecone for vector retrieval, PostgreSQL for document storage, and Anthropic Claude for generation. NestJS, LangChain, Docker, and Swagger/OpenAPI provided the service and integration surface around that retrieval path.",
    technologies: [
      "NestJS",
      "LangChain",
      "Voyage AI",
      "Pinecone",
      "PostgreSQL",
      "Anthropic Claude",
      "Docker / Swagger",
    ],
    visualMode: "retrieval",
    visualLanguage: ["documents", "semantic links", "context"],
    keyContributions: [
      "End-to-end backend and frontend implementation",
      "Semantic search and RAG pipeline",
      "Embedding and vector-search integration",
      "PostgreSQL document integration",
      "Anthropic Claude integration",
      "API implementation and documentation",
    ],
    github: {
      frontend: "https://github.com/Ogbakidavid/ai-semantic-search-frontend.git",
      backend: "https://github.com/Ogbakidavid/ai-semantic-search-engine.git",
    },
  },
  {
    slug: "powerhub",
    number: "04",
    title: "Power Hub",
    category: "Peer learning",
    shortDescription:
      "A team-built peer-to-peer learning platform created by six PLP alumni during the Full Stack Web Development track.",
    overview:
      "Power Hub explored a peer-to-peer learning model where alumni could teach and learn from one another. I joined a team of six alumni and contributed to the frontend within a collaborative build-and-ship process.",
    systemApproach:
      "The work was grounded in MERN-stack fundamentals and the practical constraints of a team project: shared implementation, frontend contribution, and shipping a coherent platform together.",
    technologies: ["MERN-stack fundamentals", "Frontend development"],
    visualMode: "collaboration",
    visualLanguage: ["learn", "share", "ship"],
    contribution: "Frontend contribution within the team’s build-and-ship process.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSiblings(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
