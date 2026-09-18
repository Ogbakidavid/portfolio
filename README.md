# David Ogbaki — Portfolio

Personal portfolio for David Ogbaki, focused on software systems, technical delivery, APIs, AI/RAG workflows, and implementation.

## Tech stack

- Next.js 16.3.5 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Motion for interface transitions
- tsParticles for the ambient particle environment
- Lenis for smooth scrolling
- pnpm for package management

## Getting started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). If port `3000` is already in use, run:

```bash
pnpm dev -- -p 3001
```

## Available scripts

```bash
pnpm dev       # Start the development server
pnpm build     # Create a production build
pnpm start     # Start the production server
pnpm lint      # Run ESLint
```

For a local production check:

```bash
pnpm build
pnpm start
```

## Portfolio routes

- `/` — Home
- `/work` — Work index
- `/work/[slug]` — Individual project pages
- `/experience` — Experience
- `/stack` — Technology and implementation stack
- `/about` — About

The contact experience is provided as a slide-out panel from the navigation and home-page conversation trigger.

## Project structure

```text
app/                    # App Router routes and global styles
components/portfolio/   # Portfolio shell, views, navigation, cursor, loader, and contact panel
lib/content/            # Profile, project, experience, and contact content
lib/environment/        # Environment configuration
public/                 # Static assets
```

Most portfolio copy and project data is maintained in `lib/content/`, keeping content separate from presentation components.

## Interface details

- The portfolio uses a dark, full-viewport visual system with DM Sans and DM Mono.
- A custom circle-dot cursor is used on pointer devices and remains hidden from assistive technology.
- Ambient particles are rendered as a persistent background environment.
- The geometric intro loader appears on the initial visit and is suppressed on later visits in the same session.
- Reduced-motion preferences are respected for animated interactions.

## Validation before deployment

Run the following checks before publishing:

```bash
pnpm lint
pnpm exec tsc --noEmit
git diff --check
pnpm build
```

It is also useful to run the production server locally and manually check each route, the contact panel, keyboard navigation, responsive layouts, and reduced-motion behavior.

## Deploying to Netlify

Connect the repository to Netlify and use:

- **Build command:** `pnpm build`
- **Publish directory:** `.next`
- **Node version:** use the version supported by the project and Netlify

Netlify should detect the Next.js application and configure the required runtime automatically. Keep `.env*` files out of version control and add any required production variables through the Netlify project settings.

## Repository hygiene

Local tooling and editor metadata are ignored by Git, including `.agent/`, `.agents/`, `.codex/`, `.impeccable/`, and `.vscode/`. These folders are not required to build or run the portfolio.
