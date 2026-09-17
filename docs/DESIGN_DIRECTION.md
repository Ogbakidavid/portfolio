# DESIGN_DIRECTION.md

# David Ogbaki --- Portfolio Design Direction

**Status:** Pre-build design specification\
**Primary implementation:** Next.js\
**Design system:** shadcn/ui + custom visual system\
**Animation:** Motion\
**Ambient visual system:** tsParticles\
**Smooth scrolling:** Lenis, only where genuine scrolling exists\
**Browser validation:** Playwright MCP\
**Design research:** Inspo MCP\
**Design refinement:** Impeccable

------------------------------------------------------------------------

## 1. Purpose

This document defines the visual, interaction, motion, content, and
responsive direction for David Ogbaki's new portfolio website.

The portfolio is not intended to be a conventional long-form personal
website where visitors continuously scroll through stacked sections.

The intended experience is a **full-viewport, interactive portfolio
application**.

The browser viewport should function as the primary visual canvas.
Navigation changes the active view/state inside that canvas, with
transitions creating a sense of spatial continuity between views.

The site should feel:

-   Technical
-   Editorial
-   Intentional
-   Modern
-   Human-designed
-   Interactive
-   Premium
-   Distinctive
-   Fast
-   Professionally credible

It must not feel like a generic AI-generated developer portfolio.

------------------------------------------------------------------------

# 2. Primary Design Reference

## Juan Mora Romero

Reference:

https://www.juanmoraromero.com/

Juan Mora Romero is the primary reference for the **experience model and
full-viewport composition**, not a visual template to reproduce.

The portfolio should study and adapt principles such as:

-   Treating the viewport as a composed scene
-   Strong typographic identity
-   Spatial rather than purely document-like composition
-   Minimal navigation
-   Interactive project presentation
-   Motion as part of the visual identity
-   Experimental visual elements used with purpose
-   Strong negative space
-   Projects presented as destinations rather than ordinary cards

### Critical rule

Do not reproduce Juan Mora Romero's:

-   Exact typography
-   Copy
-   Layout
-   Project ordering
-   Color treatment
-   Distinctive visual motifs
-   WebGL/shader effects
-   Project-card geometry
-   Transition choreography
-   Custom visual identity

The goal is to extract **design principles**, then create an original
visual language for David Ogbaki.

------------------------------------------------------------------------

# 3. Secondary Design Principles

Research identified several useful principles from other portfolio
experiences.

## Editorial project presentation

Use the editorial qualities associated with portfolios such as Niccolò
Miranda:

-   Large display typography
-   Strong typographic hierarchy
-   Curated project presentation
-   Varied project treatments
-   Persistent, understandable navigation
-   Projects presented as stories rather than identical cards

Adapt the principle without reproducing the visual identity.

## Work-first clarity

Use the clarity associated with design-engineer portfolios such as
Jesper Landberg:

-   Work remains easy to discover
-   Project taxonomy is understandable
-   Technical information remains accessible
-   Motion enriches hierarchy instead of replacing it

## Generative visual environment

Use the principle identified in the Wise Slang / Common Studio
reference:

-   Prefer one coherent generative background system
-   Let that system subtly respond to the current view/state
-   Avoid adding unrelated decorative effects to every component

## Immersive interaction

Use the broader principle demonstrated by immersive portfolios such as
Robin Payot and Bruno Simon:

> Interaction can demonstrate technical ability.

However, David's portfolio must remain substantially easier to navigate
than a game or experimental playground.

## Performance restraint

Use the restraint demonstrated by lightweight interactive portfolios:

-   Keep the particle system subtle
-   Avoid unnecessary WebGL
-   Avoid excessive DOM animation
-   Avoid animation that delays access to important content
-   Preserve semantic HTML and accessible navigation

------------------------------------------------------------------------

# 4. Core Experience Model

## Viewport-as-Canvas

The desktop experience should behave like an interactive application
shell.

Conceptually:

``` text
┌─────────────────────────────────────────────────────────────┐
│ DAVID OGBAKI                              WORK  ABOUT ...   │
│                                                             │
│                                                             │
│                                                             │
│                      ACTIVE VIEW                            │
│                                                             │
│                                                             │
│                                                             │
│                                              PARTICLES      │
│                                                             │
│                                                             │
│                                                             │
│              navigation / interaction hint                 │
└─────────────────────────────────────────────────────────────┘
```

The viewport remains approximately `100dvh`.

The site should not be designed as:

``` text
Hero 100vh
↓
Projects 100vh
↓
Experience 100vh
↓
Skills 100vh
↓
Education 100vh
↓
Certificates 100vh
```

That would still be a conventional scrolling website with oversized
sections.

Instead:

``` text
HOME
  ↓ transition
WORK
  ↓ select project
PROJECT DETAIL
  ↓ back
WORK
  ↓ transition
EXPERIENCE
```

The user moves between **views/states**, not merely between vertical
sections.

------------------------------------------------------------------------

# 5. Site Information Architecture

Primary views:

1.  Home
2.  Work
3.  Experience
4.  Stack
5.  About
6.  Contact

The following can be represented as viewport states rather than
independent pages.

## Home

Purpose:

-   Establish identity immediately
-   Communicate professional positioning
-   Establish the visual language
-   Introduce the interactive nature of the site
-   Provide an obvious path to Work

Primary content:

**David Ogbaki**

**Full Stack Developer \| Backend Engineer \| Implementation & Solutions
Engineer**

Supporting positioning should communicate that David builds software
systems, integrates APIs, works with AI/RAG systems, and delivers
technical solutions.

Do not use generic copy such as:

> "Hi, I'm David, a passionate developer..."

The introduction should be concise and professionally specific.

------------------------------------------------------------------------

# 6. Navigation

Navigation should be minimal and persistent.

Suggested structure:

``` text
DAVID OGBAKI

WORK
EXPERIENCE
STACK
ABOUT

CONTACT
```

Navigation must remain understandable even when the visual presentation
is unconventional.

Requirements:

-   Persistent or easily recoverable navigation
-   Clear active-state indication
-   Keyboard accessible
-   Visible focus states
-   No hover-only navigation
-   Mobile-friendly
-   Should not consume excessive viewport space

Navigation transitions should feel integrated into the visual system
rather than behaving like unrelated UI components.

------------------------------------------------------------------------

# 7. Work / Projects

Work is the central portfolio experience.

The project index should feel curated and typographic rather than like a
generic three-column SaaS card grid.

Current project order:

1.  BillAm
2.  Dayle
3.  AetherSearch
4.  PLP Alumni Learning Platform

The project descriptions below are the authoritative content basis for
the current design specification.

------------------------------------------------------------------------

## 7.1 BillAm

### Title

**BillAm**

### Category

AI Quoting & Operations Platform

### Description

BillAm is an autonomous background AI agent for informal SMEs. It turns
messy English/Pidgin client briefs into structured requirements, asks
smart follow-up questions, checks price catalogs, and drafts
contingency-aware quotes. Owners review, edit, and approve quotes in one
dashboard---reducing back-and-forth and underpricing.

### Technical story to emphasize

The CV additionally describes BillAm as a team project involving:

-   TypeScript / Node.js backend
-   Strands Agents SDK orchestration
-   Deterministic required-field validation
-   Structured state transitions
-   Anthropic model integration
-   React / Next.js dashboard
-   Client personas
-   Live chat simulation
-   Jobs
-   Briefs
-   Quotes
-   SME review workflows
-   Cost-aware agent controls
-   Structured inter-agent data
-   API integrations
-   Real-time dashboard updates

### Portfolio treatment

BillAm should receive one of the strongest visual treatments because it
demonstrates:

-   AI systems
-   Backend architecture
-   Agent orchestration
-   Structured state management
-   Product UI
-   Business workflow automation

Avoid reducing it to "an AI chatbot."

------------------------------------------------------------------------

## 7.2 Dayle

### Title

**Dayle**

### Category

Cross-Border Contractor Payment Platform

### Description

Dayle is a structured settlement layer and milestone vault platform for
outcome-based contractor and freelance work. It eliminates invoice
chasing, scope ambiguity, and payment risk by ensuring funds are locked
in an isolated vault before work begins and released instantly upon
deliverable approval or mediated dispute resolution.

### Technical story to emphasize

The CV identifies:

-   NestJS
-   Redis
-   AWS
-   Smart contracts on Celo
-   Paycrest
-   Partna APIs
-   Privy identity/authentication
-   Milestone-locked payouts
-   Vault-based payment architecture

### Important narrative constraint

The CV states that the startup did not reach commercial launch due to
business model constraints, while retaining technical ownership of a
non-trivial fintech backend.

Do not imply that Dayle became a commercially launched product.

### Portfolio treatment

Dayle should communicate:

-   Financial infrastructure
-   Settlement logic
-   Risk reduction
-   Milestone-based workflows
-   Backend architecture
-   Systems thinking

Avoid making blockchain the visual identity.

The user-facing portfolio should describe the product and technical
architecture clearly without turning the project into a crypto/Web3
showcase.

------------------------------------------------------------------------

## 7.3 AetherSearch

### Title

**AetherSearch**

### Category

AI Semantic Search & Retrieval-Augmented Generation

### Description

AetherSearch is an AI-powered semantic search and retrieval-augmented
generation engine. It combines Voyage AI embeddings, Pinecone vector
search, PostgreSQL document storage, and Anthropic Claude to understand
natural-language questions, retrieve relevant document content, and
generate contextual answers with cited sources.

### Technical story to emphasize

The CV additionally supports:

-   NestJS
-   LangChain
-   Pinecone
-   PostgreSQL
-   Docker
-   Anthropic API
-   Swagger/OpenAPI
-   Document-grounded response generation
-   RAG architecture

### Portfolio treatment

This project should visually communicate:

-   Search
-   Retrieval
-   Documents
-   Context
-   Knowledge
-   AI infrastructure

A subtle data-flow or particle relationship could be appropriate, but
avoid turning it into a generic "AI glowing network."

------------------------------------------------------------------------

## 7.4 PLP Alumni Learning Platform

### Title

**PLP Alumni Learning Platform**

### Category

Peer-to-Peer Learning Platform

### Available information

The CV states that David:

-   Joined a team of 6 PLP alumni
-   Built a peer-to-peer learning platform for alumni to teach and learn
    from one another
-   Applied MERN-stack fundamentals from the Full Stack Web Development
    track
-   Focused on frontend as part of the team's build-and-ship process

### Source-code constraint

Source code is no longer available.

Therefore:

-   Do not invent technical implementation details
-   Do not invent features not supported by available information
-   Do not fabricate screenshots
-   Do not claim current deployment status
-   Do not present unsupported metrics

This project can remain in the portfolio as a smaller project entry
based on the documented experience.

------------------------------------------------------------------------

# 8. Project Interaction Model

The Work view should not primarily look like:

``` text
┌─────────┐ ┌─────────┐ ┌─────────┐
│ BILLAM  │ │ DAYLE   │ │ AETHER  │
│ image   │ │ image   │ │ image   │
│ text    │ │ text    │ │ text    │
└─────────┘ └─────────┘ └─────────┘
```

Instead, consider a typographic/project-index composition:

``` text
WORK

01  BILLAM
    AI QUOTING & OPERATIONS

02  DAYLE
    CONTRACTOR SETTLEMENT

03  AETHERSEARCH
    SEMANTIC SEARCH / RAG

04  PLP
    PEER LEARNING
```

Hover/focus/selection should reveal additional project context.

Selecting a project should transition into a project-detail state.

------------------------------------------------------------------------

# 9. Project Detail State

A project detail view should remain within the same application shell.

Conceptually:

``` text
WORK / 01

BILLAM
AI QUOTING & OPERATIONS PLATFORM

[visual project area]

DESCRIPTION

TECHNOLOGY
Node.js / TypeScript / Strands / Anthropic
React / Next.js

ROLE / CONTRIBUTION

[BACK TO WORK]
```

The transition from the project index to the project detail should feel
spatial.

Possible motion:

-   project title expands
-   project metadata slides/repositions
-   background state changes
-   visual layer moves with the selected project
-   index elements recede rather than simply disappear

Do not use excessive animation.

------------------------------------------------------------------------

# 10. Experience View

Current documented experience:

### Enov8 Technologies

**Implementation & Solutions Engineer**\
May 2026 -- Present

Documented responsibilities include:

-   Leading end-to-end implementation of enterprise solutions
-   Zoho One modules
-   Pickcel Digital Signage deployments
-   API integrations
-   Business workflow automation
-   ERP implementation proposals
-   Solution design
-   Technical delivery
-   Client support
-   Zoho partner technical workshop and certification

### Enov8 Technologies

**Frontend Engineer**\
Mar 2025 -- Apr 2026

Documented responsibilities include:

-   Frontend implementation
-   Client requirements
-   Practical business solution delivery
-   Designing and building Enov8's company website in Next.js
-   Responsive user-facing interfaces

### Experience presentation

Prefer a timeline/index/system view over a generic résumé card.

Example:

``` text
EXPERIENCE

2026 — NOW
IMPLEMENTATION & SOLUTIONS ENGINEER
ENOV8 TECHNOLOGIES

2025 — 2026
FRONTEND ENGINEER
ENOV8 TECHNOLOGIES
```

Selecting an entry can reveal responsibilities and context.

------------------------------------------------------------------------

# 11. Stack View

Technical stack from the CV:

### Backend

-   Node.js
-   NestJS
-   Express
-   REST API design & integration
-   Redis
-   PostgreSQL
-   MongoDB

### Cloud & Infrastructure

-   AWS
-   Docker
-   Swagger/OpenAPI

### AI / ML

-   LangChain
-   RAG pipelines
-   Pinecone
-   Anthropic API
-   Strands Agents SDK

### Frontend

-   React
-   Next.js
-   TypeScript
-   HTML5
-   CSS3

### Other

-   Zoho One
-   Git
-   Cross-functional delivery
-   Business process automation

### Presentation rule

Do not create a giant wall of technology logos.

The Stack view should communicate capability and relationships between
technologies.

Possible interaction:

``` text
BACKEND

Node.js
NestJS
Express
PostgreSQL
Redis
MongoDB
```

Hover/focus can reveal where a technology has been used.

For example:

``` text
NestJS
Used in:
AetherSearch
Dayle
```

Only make relationships that are supported by the documented project
information.

------------------------------------------------------------------------

# 12. About View

The About view should not duplicate the entire résumé.

It should communicate the professional through-line:

-   Full-stack development
-   Backend engineering
-   AI/RAG systems
-   Enterprise implementation
-   API integration
-   Automation
-   Technical delivery

The tone should be concise and professional.

Avoid exaggerated self-description.

------------------------------------------------------------------------

# 13. Education

Documented education:

### Bachelor of Science, Business Administration

National Open University of Nigeria, Lagos

Aug 2024 -- Present

### Full Stack Web Development

Power Learn Project (PLP)

Graduated November 2025

Education can live inside About or as a supporting section/state if the
composition requires it.

------------------------------------------------------------------------

# 14. Certifications

Documented certifications:

-   Zoho Partner Technical Workshop --- Certified
-   Full Stack Web Development --- MERN, Certified
-   Frontend Development at MicroSoft Student Chapter --- Certified

Do not fabricate issuing dates, certificate IDs, grades, or credential
URLs.

------------------------------------------------------------------------

# 15. Visual System

## Primary background

``` text
Obsidian
#0A0A14
```

The background should be the dominant environmental color.

A related dark surface such as:

``` text
#1C1C2E
```

may be used sparingly for separation, panels, or elevated UI.

Avoid making the interface a collection of floating rounded cards.

------------------------------------------------------------------------

## Primary text

``` text
#FFFFFF
```

Use white primarily for major typography and high-priority information.

------------------------------------------------------------------------

## Secondary text

Initial neutral:

``` text
#A1A1AA
```

Use for metadata, descriptions, timestamps, labels, and secondary
information.

------------------------------------------------------------------------

## Experimental accent system

Initial accent:

``` text
#A8FF00
```

Initial secondary accent:

``` text
#00FFEF
```

These are provisional.

The implementation must centralize colors in design tokens/CSS variables
so the accent palette can be changed globally after visual review.

Do not hard-code accent colors throughout components.

------------------------------------------------------------------------

# 16. Typography

Typography should carry a significant portion of the visual identity.

Direction:

-   Large editorial/display typography for major statements
-   Clear sans-serif body typography
-   Strong contrast between display and metadata
-   Deliberate tracking/letter spacing
-   Generous negative space
-   Short labels and technical metadata
-   Avoid excessive text density

Typography should function as both:

-   Information hierarchy
-   Visual composition

Avoid default-looking dashboard typography.

Do not use typography merely because it is trendy. It must remain highly
readable.

------------------------------------------------------------------------

# 17. Layout Philosophy

The layout should favor:

-   Large negative space
-   Strong alignment
-   Asymmetry where useful
-   Oversized typography
-   Deliberate focal points
-   Clear visual hierarchy
-   Spatial relationships

Avoid:

-   Generic centered hero layouts
-   Excessive card grids
-   Repeated rounded rectangles
-   Excessive glassmorphism
-   Arbitrary gradients
-   Random floating elements
-   Decorative UI without a purpose

------------------------------------------------------------------------

# 18. Particle System

The particle system is a global visual environment.

It should not be treated as independent decoration inside every section.

Architecture:

``` text
GLOBAL VIEWPORT
│
├── UI / CONTENT
│
└── PARTICLE ENVIRONMENT
```

The particle environment should:

-   remain behind the content
-   be subtle
-   avoid reducing text readability
-   react to pointer movement where appropriate
-   adapt to the current application view
-   reduce density on smaller screens
-   respect reduced-motion preferences

Potential state behavior:

### Home

Sparse and atmospheric.

### Work

Slightly more responsive to pointer movement.

### Project detail

More focused around the selected project.

### Experience

Subtle and structured.

### Stack

Potentially respond to technology relationships.

These are directional ideas, not mandatory effects.

The particle system should never become the main content.

------------------------------------------------------------------------

# 19. Motion System

Use Motion as the primary animation library.

Motion should create a consistent language rather than a collection of
unrelated effects.

## Motion hierarchy

### Level 1 --- Atmospheric

Examples:

-   particle movement
-   subtle background interpolation
-   ambient opacity changes

Characteristics:

-   slow
-   continuous
-   low amplitude

### Level 2 --- Interaction

Examples:

-   hover
-   focus
-   cursor response
-   buttons
-   project selection

Characteristics:

-   fast
-   responsive
-   tactile

### Level 3 --- View transitions

Examples:

-   Home → Work
-   Work → Experience
-   Experience → About

Characteristics:

-   deliberate
-   directional
-   spatial

### Level 4 --- Project transitions

Examples:

-   Work index → BillAm
-   Work index → Dayle
-   Work index → AetherSearch

Characteristics:

-   most expressive
-   project-specific where useful
-   still consistent with the global motion grammar

### Level 5 --- Content reveals

Typography and metadata should enter as part of the larger composition.

Avoid independently animating every line of text.

------------------------------------------------------------------------

# 20. Motion Rules

Prefer:

-   opacity + transform combinations
-   shared layout transitions
-   spatial continuity
-   spring-based interaction where appropriate
-   controlled easing
-   coordinated composition

Avoid:

-   constant bouncing
-   excessive parallax
-   random stagger on every element
-   excessive blur transitions
-   long loading animations
-   animation that blocks navigation
-   scroll-jacking
-   motion solely for decoration

Animation must communicate:

-   hierarchy
-   state
-   direction
-   relationship
-   interaction

------------------------------------------------------------------------

# 21. Cursor System

Do not install a generic custom-cursor library.

A custom cursor can be implemented with Motion.

The cursor should communicate state.

Examples:

``` text
NORMAL

VIEW

OPEN

DRAG

BACK
```

The exact visual treatment should be restrained.

The cursor must never become more visually dominant than the
project/content.

On touch devices, cursor behavior disappears and equivalent interaction
must remain available.

------------------------------------------------------------------------

# 22. Lenis / Scrolling

Lenis is optional within the viewport-based architecture.

Do not use smooth scrolling as the foundation of navigation.

The application should not become:

``` text
Home
↓
Projects
↓
Experience
↓
Stack
↓
About
```

just because Lenis is installed.

Use Lenis only where genuine scrollable content exists, such as:

-   project detail content
-   longer case studies
-   mobile content
-   overflow panels

Navigation between major views should be state/view based.

------------------------------------------------------------------------

# 23. Responsive Strategy

## Desktop

Desktop is the primary expression of the viewport-as-canvas concept.

Use:

-   full viewport composition
-   spatial layout
-   pointer interaction
-   custom cursor
-   ambient particles
-   animated transitions
-   large typography

## Mobile

Do not attempt to squeeze the desktop composition into a small viewport.

Mobile should become:

-   readable
-   touch-friendly
-   simpler
-   lower-motion
-   lower particle density
-   content-first

Replace hover interactions with:

-   tap
-   focus
-   visible controls

No essential information may depend on hover.

------------------------------------------------------------------------

# 24. Accessibility

Accessibility is part of the design, not a later patch.

Requirements:

-   semantic HTML
-   keyboard navigation
-   visible focus states
-   sufficient text contrast
-   accessible navigation labels
-   reduced-motion support
-   no hover-only information
-   sensible tab order
-   usable touch targets
-   meaningful button/link semantics

Implement `prefers-reduced-motion` behavior.

When reduced motion is enabled:

-   minimize or disable large view transitions
-   reduce particle movement
-   remove unnecessary cursor effects
-   preserve navigation and content
-   avoid replacing information with animation

------------------------------------------------------------------------

# 25. Performance

The site is intentionally interactive, but performance must remain a
first-class constraint.

Requirements:

-   Avoid unnecessary dependencies
-   Avoid WebGL unless a clear visual requirement emerges
-   Keep particle counts conservative
-   Pause/reduce background work when appropriate
-   Avoid expensive animation of layout properties
-   Prefer transform/opacity animation
-   Lazy-load non-critical project media
-   Avoid oversized assets
-   Avoid animation that consumes CPU continuously without visible value
-   Test the actual rendered experience with Playwright

Do not add GSAP, Three.js, React Three Fiber, or other heavy visual
dependencies unless a specific requirement cannot be implemented cleanly
with the current stack.

------------------------------------------------------------------------

# 26. Component Architecture Direction

The implementation should separate the application shell from individual
views.

Conceptually:

``` text
app/
├── page
│
components/
├── portfolio-shell
├── navigation
├── custom-cursor
├── particle-environment
├── view-transition
│
├── views/
│   ├── home-view
│   ├── work-view
│   ├── project-view
│   ├── experience-view
│   ├── stack-view
│   └── about-view
│
├── projects/
│   ├── project-index
│   ├── project-preview
│   └── project-detail
│
└── ui/
    └── shadcn components
```

This is a conceptual direction, not a requirement to reproduce this
exact directory tree.

The key architectural rule is:

> Major portfolio views should be components/states within a persistent
> application shell.

------------------------------------------------------------------------

# 27. Content Integrity

The portfolio must not invent professional history.

Use the CV and the project descriptions supplied for this design
direction as the content source.

If information is unavailable:

-   omit it
-   label it as unavailable
-   or ask for the information

Do not fabricate:

-   project metrics
-   client names
-   revenue
-   user counts
-   performance improvements
-   production deployments
-   awards
-   source repositories
-   technical features
-   project screenshots
-   certificate metadata

------------------------------------------------------------------------

# 28. Visual Anti-Patterns

The implementation must explicitly avoid the following:

-   Generic AI portfolio template
-   Generic SaaS landing page
-   Excessive glassmorphism
-   Giant glowing gradient blob
-   Random neon gradients
-   Fake terminal window as hero
-   Code rain
-   Excessive technology logos
-   Floating cards everywhere
-   Excessive rounded corners
-   Excessive shadows
-   Stock developer imagery
-   Generic 3D robot/AI graphics
-   Unnecessary Web3/blockchain visual language
-   Excessive particle density
-   Scroll-jacking
-   Animation overload
-   Hidden navigation
-   Poor mobile adaptation

------------------------------------------------------------------------

# 29. Human-Designed Requirement

The portfolio should not look like a collection of default AI design
decisions.

Codex should actively evaluate:

-   Why an element exists
-   Whether the layout has a clear focal point
-   Whether spacing creates hierarchy
-   Whether motion communicates state
-   Whether an interaction is useful
-   Whether a visual effect improves the experience
-   Whether a component is generic or specific to this portfolio

Prefer fewer, stronger design decisions.

A visually simple composition with excellent typography, spacing,
motion, and interaction is preferable to a visually crowded composition
containing many effects.

------------------------------------------------------------------------

# 30. Reference Research Principle

The following references informed the direction:

### Primary

**Juan Mora Romero**\
https://www.juanmoraromero.com/

Primary lesson: - viewport-led composition - typography as visual
material - interaction and motion as identity - projects as destinations

### Secondary

**Niccolò Miranda**\
https://www.niccolomiranda.com/

Lesson: - editorial project indexing - typographic personality - curated
project presentation

**Jesper Landberg**\
https://jesperlandberg.com/

Lesson: - work-first clarity - design-engineer presentation - motion
supporting hierarchy

**Robin Payot**\
https://robinpayot.com/

Lesson: - immersive entry - spatial project movement

**Bruno Simon**\
https://bruno-simon.com/

Lesson: - viewport can itself become the interface - interaction can
demonstrate technical ability

Use these references as sources of principles, not templates.

------------------------------------------------------------------------

# 31. Initial Design Thesis

The portfolio should communicate the following idea through its design:

> **David Ogbaki builds and connects software systems that turn complex
> requirements into working solutions.**

This is a design thesis, not necessarily final website copy.

The visual system should therefore lean toward:

``` text
SYSTEMS
+
STRUCTURE
+
INTERACTION
+
TYPOGRAPHY
+
MOTION
```

rather than:

``` text
CODE
+
NEON
+
TERMINAL
+
GENERIC AI
```

------------------------------------------------------------------------

# 32. Initial Experience Map

``` text
                         HOME
                          │
              ┌───────────┼───────────┐
              │           │           │
             WORK    EXPERIENCE     ABOUT
              │           │           │
        ┌─────┼─────┐     │       EDUCATION
        │     │     │     │       CERTIFICATES
     BILLAM DAYLE AETHER  │
        │     │     │     │
        └─────┼─────┘     │
              │           │
        PROJECT DETAIL    │
              │           │
              └──────┬────┘
                     │
                    STACK
                     │
                  CONTACT
```

The actual navigation model may evolve during implementation, but it
must preserve the central concept of a persistent viewport and coherent
transitions between states.

------------------------------------------------------------------------

# 33. Implementation Priorities

Build in this order:

1.  Application shell
2.  Full-viewport layout
3.  Navigation/state architecture
4.  Home composition
5.  Work/project index
6.  Project detail transition
7.  Experience
8.  Stack
9.  About / education / certifications
10. Contact
11. Particle environment
12. Motion system
13. Cursor interaction
14. Responsive behavior
15. Accessibility/reduced motion
16. Performance refinement
17. Browser validation

Do not begin by adding decorative animations.

Establish composition and interaction architecture first.

------------------------------------------------------------------------

# 34. Definition of a Successful First Version

The first implementation is successful if:

-   The site immediately feels like a designed interactive portfolio
    rather than a template.
-   The viewport behaves as the primary canvas.
-   Navigation between major views feels intentional.
-   Work is discoverable within seconds.
-   Projects feel like destinations rather than generic cards.
-   Typography carries significant visual identity.
-   Particles are atmospheric rather than distracting.
-   Motion creates spatial continuity.
-   The site remains usable without motion.
-   Mobile is intentionally designed rather than merely responsive.
-   The content is grounded in David's actual CV and project history.
-   The visual system can be refined without restructuring the entire
    application.
-   No major dependency has been added solely for decorative effect.

------------------------------------------------------------------------

# 35. Final Instruction to Codex

Before implementing the portfolio:

1.  Read this entire document.
2.  Inspect the existing Next.js project structure.
3.  Preserve the existing project setup unless a change is genuinely
    necessary.
4.  Do not immediately start generating components from assumptions.
5.  Establish the application-shell/state architecture first.
6.  Use the reference principles described here rather than copying any
    reference site.
7.  Use the supplied CV/project information as the content source.
8.  Keep the color system tokenized so the accent palette can be changed
    later.
9.  Use Motion for animation.
10. Use tsParticles for the ambient particle environment.
11. Use shadcn/ui where appropriate, but do not let shadcn defaults
    determine the portfolio's visual identity.
12. Use Playwright for browser validation after meaningful
    implementation milestones.
13. Use Impeccable to critique and refine the visual result.
14. Do not introduce GSAP, Three.js, React Three Fiber, or other heavy
    animation/3D dependencies without first establishing a concrete
    requirement.
15. Do not treat 100vh as six stacked full-screen sections.
16. Treat the portfolio as a persistent full-viewport application with
    navigable views/states.
17. Prioritize hierarchy, typography, composition, interaction, and
    performance over decorative effects.

The first implementation should establish the **visual system and
interaction architecture**. Fine visual tuning will happen after the
first rendered version is inspected.
