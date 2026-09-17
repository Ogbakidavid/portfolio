export type ExperienceEntry = {
  number: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  areas: string[];
};

export const experience: ExperienceEntry[] = [
  {
    number: "01",
    role: "Implementation & Solutions Engineer",
    company: "Enov8 Technologies",
    period: "May 2026 — Present",
    summary:
      "End-to-end implementation and technical delivery across enterprise business systems, integrations, and automation.",
    areas: [
      "Zoho One modules",
      "Pickcel Digital Signage deployments",
      "API integrations",
      "Business workflow automation",
      "ERP implementation proposals",
      "Solution design and client support",
      "Zoho partner technical workshop / certification",
    ],
  },
  {
    number: "02",
    role: "Frontend Engineer",
    company: "Enov8 Technologies",
    period: "Mar 2025 — Apr 2026",
    summary:
      "Frontend implementation shaped by client requirements and practical business solution delivery.",
    areas: [
      "Next.js website development",
      "Responsive user-facing interfaces",
      "Frontend implementation",
      "Client requirements",
    ],
  },
];

export type StackGroup = {
  name: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    name: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST API design & integration", "Redis", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Cloud / Infrastructure",
    items: ["AWS", "Docker", "Swagger / OpenAPI"],
  },
  {
    name: "AI / ML",
    items: ["LangChain", "RAG pipelines", "Pinecone", "Anthropic API", "Strands Agents SDK"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML5", "CSS3"],
  },
  {
    name: "Business systems / implementation",
    items: ["Zoho One", "Business process automation", "Cross-functional delivery"],
  },
  {
    name: "Tools",
    items: ["Git"],
  },
];

export const education = [
  {
    title: "BSc Business Administration",
    institution: "National Open University of Nigeria",
    period: "Aug 2024 — Present",
  },
  {
    title: "Full Stack Web Development",
    institution: "Power Learn Project (PLP)",
    period: "Graduated Nov 2025",
  },
];

export const certifications = [
  "Zoho Partner Technical Workshop — Certified",
  "Full Stack Web Development — MERN — Certified",
  "Frontend Development at Microsoft Student Chapter — Certified",
];
