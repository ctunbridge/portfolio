/**
 * Portfolio Context
 *
 * Comprehensive data about Chris Tunbridge's portfolio.
 * This data is used to give the AI assistant deep context about the portfolio owner.
 */

import type { PortfolioContext } from "./types"

export const portfolioContext: PortfolioContext = {
  bio: {
    name: "Chris Tunbridge",
    title: "Lead Product Designer",
    summary:
      "Lead product designer and founder with 10 years of experience across start-up, agency, and enterprise environments. Currently at GetGround, where Chris leads product design and product management across core platform areas serving 30,000+ property investors. Specialises in agentic-first experiences, complex product flows, scalable design systems, and native mobile apps. Uses a code-first approach with Cursor, Next.js, and Tailwind CSS to move from strategy to production in days, not weeks.",
    email: "hello@christunbridge.co.uk",
    location: "United Kingdom",
    personalLife:
      "Originally from the Warwickshire countryside, Chris now lives in east London. Having always asked why and how things work, a career in product design seemed inevitable. Outside of work, Chris enjoys long cycles through the city and countryside, exploring London's food scene, and spending weekends watching sports - particularly F1 and football. He's also a keen traveller, always planning the next adventure. Beyond personal interests, Chris channels his design and building skills into side projects, including developing digital products for his partner's therapy practice - applying the same user-centred approach to help small businesses thrive.",
  },

  siteLinks: [
    {
      label: "Home",
      url: "/",
      description: "Portfolio homepage with overview of work and experience",
    },
    {
      label: "Building an Inbox for user tasks and agentic actions",
      url: "/gg-inbox",
      description:
        "GetGround Inbox: unified surface for user and agentic actions, pull/push/persistent interaction model, code-first prototyping, and impact metrics",
    },
    {
      label: "Product led growth through intent-led onboarding",
      url: "/gg-plg",
      description:
        "Intent-led onboarding at GetGround: capturing property context earlier to drive product-led growth",
    },
    {
      label: "Keeping investors compliant with bookkeeping",
      url: "/gg-bookkeeping",
      description:
        "Bookkeeping and MTD: impact modelling, Figma Make prototyping, Capcom design system, and code-first delivery",
    },
    {
      label: "Accounting, tax, and invoicing for sole traders",
      url: "/sage-individual",
      description:
        "Sage Individual native app and transaction splitting for UK sole traders",
    },
    {
      label: "Graphite Design System",
      url: "/sage-ds",
      description: "Sage's native mobile design system for iOS and Android",
    },
  ],

  experience: [
    {
      employer: "GetGround",
      jobTitle: "Lead Product Designer",
      dates: "2024 to Present",
      summary: [
        "Lead Product Designer and product manager across core areas of the GetGround platform, serving 30,000+ property investors. Sets feature roadmaps, shapes team delivery, and uses code-first prototyping to move from strategy to production in days, not weeks.",
        "Designed AI-assisted interaction models and dynamic experiences that generate actions and reports based on portfolio, market, and user context. Built business impact models to inform product decisions, used code-first prototyping in Next.js to speed up validation, and created tools like CopyKat, a context-aware copywriting agent.",
      ],
    },
    {
      employer: "Sage",
      jobTitle: "Senior Product Designer",
      dates: "2021 to 2023",
      summary: [
        "Created and delivered the Sage Individual native app for Android and iOS, designed for the UK's 4.5 million small business owners with features for expense tracking, tap to pay, and tax submissions.",
        "Established team practices including retrospectives and design feedback pathways, served as Accessibility Champion for native mobile (WCAG 2.1), and helped build the Native Mobile Design System (Graphite) from the ground up.",
      ],
    },
    {
      employer: "Football Survivor",
      jobTitle: "Founding Product Designer",
      dates: "2019 to 2021",
      summary: [
        "Founding Product Designer for a peer-to-peer iOS and Android betting app based on Last Man Standing. Designed the end-to-end experience across UX, UI, design systems, content, and marketing materials.",
        "Grew to 15,000+ sign-ups and 8,000+ active users within 18 months of launch.",
      ],
    },
    {
      employer: "Hogarth WPP",
      jobTitle: "Product Designer",
      dates: "2019 to 2020",
      summary: [
        "Worked on a range of projects, from client facing landing pages and micro-sites to internal web applications. This included the creation of robust design systems for ZONZA, a Digital Asset Management platform, and Hoxton, a marketing tool for generating variations of full HTML banner ads.",
      ],
    },
    {
      employer: "Maverick",
      jobTitle: "Product Designer",
      dates: "2018 to 2019",
      summary: [
        "Part of the digital transformation team increasing employee engagement at DHL. Built a React Native mobile app from the ground up, enabling DHL employees to discover worldwide community events and updates, perform various admin tasks and update employee details.",
      ],
    },
    {
      employer: "Ayima",
      jobTitle: "Junior UX Designer",
      dates: "2017 to 2019",
      summary: [
        "Involved in the full design process for Ayima's SEO tools and web products, including: the creation and implementation of design systems; prototyping; communicating designs to in house developers.",
      ],
    },
    {
      employer: "Boots",
      jobTitle: "UX Design Student",
      dates: "2014 to 2015",
      summary: [],
    },
    {
      employer: "Loughborough University",
      jobTitle: "BSc Product Design",
      dates: "2012 to 2016",
      summary: [
        "Graduated with a 2:1 degree. Final year project focused on a system to help patients with tendon injuries recover. The system consisted of a wearable muscle sensor to track exercises and repetitions, and a companion app that both the patient and physio could use to track progress.",
      ],
    },
  ],

  caseStudies: [
    {
      slug: "gg-inbox",
      url: "/gg-inbox",
      businessName: "GetGround",
      projectTitle: "Building an Inbox for user tasks and agentic actions",
      year: "2026",
      role: "Lead Product Designer and Product Manager",
      problemStatement:
        "GetGround needed cleaner in-year bookkeeping and a single home for assistant-led actions. The team built an Inbox: one persistent surface where users understand, review, and complete high-intent actions across their portfolio.",
      principles: [
        {
          title: "Show the right thing, not everything",
          description:
            "Help users focus by surfacing what matters most in the moment. Prioritise clarity over completeness; not everything needs to be shown.",
        },
        {
          title: "Build confidence with every interaction",
          description:
            "Make it easy to understand, hard to get lost, and reassuring to use. Guide naturally, place support where it's needed, and use data-led insights to build trust.",
        },
        {
          title: "Make it useful every time, not just the first time",
          description:
            "Create features that are clear, intuitive, and valuable every time they're used. If it needs constant explanation, it's not intuitive enough.",
        },
      ],
      sections: [
        {
          title: "Problem",
          content: [
            "The work started as an in-year bookkeeping improvement, but discovery showed actions lived across Tasks, Bookkeeping, and assistant-led jobs with no clear home.",
            "Refactoring Bookkeeping into an inbox would have created two competing task systems. Bookkeeping had low reach (24% of logins); Tasks had more than double the usage (55%).",
            "The question was not how to refactor Bookkeeping, but whether a broader action surface was needed.",
          ],
        },
        {
          title: "Shaping the solution",
          content: [
            "Led a platform-wide interaction model mapping pull, push, and persistent UI so agentic AI and existing functionality could live side by side.",
            "Pull: user tells the system what they need; UI assembles to complete the job. Push: system detects something meaningful and surfaces it proactively in predictable locations. Persistent: stable surfaces like tables and navigation that stay accessible regardless of scenario.",
            "Prototyped on a design/playground branch in the monorepo with production-like components. Tested with 5 existing users; consensus was that users should keep final control when updating financial information.",
          ],
        },
        {
          title: "Release",
          content: [
            "First release migrated existing tasks into the Inbox and defined how agentic actions appeared as to-dos or activity items.",
            "Built an inbox-classifier skill based on design principles to advise on Inbox content and wired it into the AI assistant.",
            "Resolved UI framework for to-dos and activity items, then built components in the shared UI package for production.",
            "Led document extraction feeding into the Inbox as the primary surface for reviewing suggested actions from extracted document data.",
          ],
        },
        {
          title: "Impact",
          content: [
            "Inbox nudges and suggested categorisations increased the proportion of categorised transactions by 34% in the first two weeks.",
            "Surfacing property-detail tasks in the Inbox drove a 21% increase in users adding property details.",
            "Suggested linking increased document-transaction links by 43%, improving bookkeeping data quality.",
          ],
          metrics: [
            {
              label: "34%",
              value: "more transactions categorised",
              description:
                "Inbox nudges and suggested categorisations in the first two weeks.",
            },
            {
              label: "21%",
              value: "increase in property details added",
              description:
                "Surfacing property-detail tasks in the Inbox rather than on the property page.",
            },
            {
              label: "43%",
              value: "increase in transactions linked to documents",
              description:
                "Suggested linking improved bookkeeping data quality.",
            },
          ],
        },
        {
          title: "Next steps",
          content: [
            "Populate the activity feed with context-aware suggestions to grow weekly and monthly active users.",
            "Give the agent a heartbeat so it can act without explicit user triggers.",
          ],
        },
      ],
      skills: [
        "Agentic UI design",
        "Interaction models",
        "Product management",
        "User research",
        "Code-first prototyping",
        "Design systems",
        "Component architecture",
        "Next.js",
        "Cursor",
        "AI skills and agents",
        "Document extraction",
      ],
    },
    {
      slug: "gg-plg",
      url: "/gg-plg",
      businessName: "GetGround",
      projectTitle: "Product led growth through intent-led onboarding",
      year: "2026",
      role: "Lead Product Designer and Product Manager",
      problemStatement:
        "Users were adding properties without enough context for GetGround to understand ownership type, buying stage, or mortgage opportunity. The redesign captured minimum useful details earlier, then routed users into clearer next steps.",
      sections: [
        {
          title: "Problem",
          content: [
            "Landlords typically hold two or more properties; GetGround users averaged 1.7. Users added an address and stopped before sharing ownership type or investment stage.",
            "Without property context, the product could not personalise next steps or create product-led opportunities in mortgage, insurance, or lettings.",
            "Between Jan 2025 and Jan 2026, only 39% of signups confirmed how they owned their property; 73% never confirmed ownership.",
            "Only 16.6% of confirmed users connected open banking or HMRC. Just 142 users (3.9% of signups) completed all five journey stages.",
          ],
        },
        {
          title: "Rethinking adding a property",
          content: [
            "The old empty portfolio flow treated every user the same and surfaced too many next steps.",
            "The redesign moved from adding an address to understanding property context: capture minimum details to identify intent, then route users into clearer journeys based on investment stage and ownership type.",
            "Shipped a data-gathering experiment for users adding a property they were buying to test whether they would add financing details or book a call.",
          ],
        },
        {
          title: "Impact",
          content: [
            "After a mid-March release, properties per user rose from 1.7 to 2.2, a 30% increase.",
            "Financial data connections doubled from 8% between Jan 2025 and Jan 2026 to 17.5% after March.",
          ],
          metrics: [
            {
              label: "30%",
              value: "more properties per user",
              description:
                "Properties per user rose from 1.7 to 2.2 after a mid-March release.",
            },
            {
              label: "100%",
              value: "increase in financial data connection rate",
              description:
                "Connections doubled from 8% to 17.5% after March.",
            },
          ],
        },
        {
          title: "What's next",
          content: [
            "Test what data matters most through in-product experiments: remortgage nudges, income and expense reviews, and insurance renewals.",
            "Improve data gathering; only 10% of properties have mortgage fixed-term end dates, a crucial input for mortgage services.",
          ],
        },
      ],
      skills: [
        "Onboarding design",
        "Product led growth",
        "Conversion optimisation",
        "User research",
        "Funnel design",
        "Data-led experimentation",
        "Figma",
        "Code-first prototyping",
      ],
    },
    {
      slug: "gg-bookkeeping",
      url: "/gg-bookkeeping",
      businessName: "GetGround",
      projectTitle: "Keeping investors compliant with bookkeeping",
      year: "2025/26",
      role: "Lead Product Designer",
      problemStatement:
        "As a landlord I need to keep track of and manage my income and expenses, understand my tax obligations, and submit my self assessment online according to HMRC's Making Tax Digital rules.",
      principles: [
        {
          title: "Show the right thing, not everything",
          description:
            "Help users focus by surfacing what matters most in the moment. Prioritise clarity over completeness — not everything needs to be shown.",
        },
        {
          title: "Build confidence with every interaction",
          description:
            "Make it easy to understand, hard to get lost, and reassuring to use. Guide naturally, place support where it's needed, and use data led insights where possible to build trust and confidence.",
        },
        {
          title: "Make it useful every time, not just the first time",
          description:
            "Create features that are clear, intuitive, and valuable every time they're used. If it needs constant explanation, it's not intuitive enough.",
        },
      ],
      sections: [
        {
          title: "Product principles",
          content: [
            "Show the right thing, not everything; build confidence with every interaction; make it useful every time, not just the first time.",
          ],
        },
        {
          title: "Problem context",
          content: [
            "Lightweight validation of frustrations and requirements, not a multi-week discovery phase.",
            "Impact model with product managers: user capture scenarios and revenue, using real market data to support leadership decisions.",
            "Market sizing and sentiment: spreadsheets vs MTD, self-assessment habits, awareness of MTD.",
            "Platform needs: richer bookkeeping and transactions; HMRC-compliant MTD submissions via APIs.",
          ],
          metrics: [
            {
              label: "80%",
              value: "of landlords still rely on spreadsheets",
              description:
                "Not compatible with MTD; landlords want clarity without complexity for tax submissions.",
            },
            {
              label: "60%",
              value: "of users handle their own self assessments",
              description:
                "Most landlords prefer to manage bookkeeping and tax themselves rather than use an accountant.",
            },
            {
              label: "35%",
              value: "said they were not aware of Making Tax Digital",
              description:
                "MTD is not on every landlord's radar; mixed understanding of requirements among those aware.",
            },
          ],
        },
        {
          title: "Problem to prototype",
          content: [
            "Figma Make: testable prototype for transaction management and quarterly submissions in a couple of days, put in front of users for feedback.",
            "Cut design and testing time by half; more comprehensive test; spotted journey gaps faster than traditional user flow mapping or working through each scenario in isolation.",
          ],
          metrics: [
            {
              label: "40%",
              value: "confidence uplift",
              description:
                "Before the prototype 20% of participants were confident with MTD changes; after, 60% were confident.",
            },
            {
              label: "90%",
              value: "clarity",
              description:
                "90% of participants said it was clear what needed to be submitted and when on the Personal Tax screen.",
            },
          ],
        },
        {
          title: "Feasibility mapping",
          content: [
            "Mapped the user journey we were about to prototype (bookkeeping and MTD) against HMRC rules, MTD APIs, and platform constraints.",
            "Whiteboard and service blueprint sessions in days with engineering to surface feasibility, engineering spikes, and compliance trade-offs.",
          ],
        },
        {
          title: "Design system",
          content: [
            "Capcom: Figma library, variables, and components; maintain parity with UI components in the codebase.",
            "Reusable patterns so other squads ship faster.",
          ],
        },
        {
          title: "Code-first delivery",
          content: [
            "Cursor, Next.js, and Tailwind in the GetGround codebase; compose from shared components and tokens.",
            "Real data and staging validation; AI-augmented production workflow.",
            "Detailed Figma specs for edge flows so engineers see where the shared system stops and feature-specific UI begins.",
          ],
        },
        {
          title: "Impact",
          content: [
            "New user sign-ups increased by 56%, driven in part by the free MTD solution for personal landlords.",
            "564 active open banking connections since release, with more adoption from new users than older cohorts.",
            "60,000+ transactions added since release; transactions per user per month increased by 27%.",
            "Recognised as an MTD developer by HMRC; preparing for the April 2026 cohort (landlords with income over £50k).",
          ],
          metrics: [
            {
              label: "56%",
              value: "increase in new user sign-ups",
              description:
                "Driven in part by the free MTD solution for personal landlords.",
            },
            {
              label: "564",
              value: "active open banking connections",
              description:
                "Steady increase since release, with more adoption from new users.",
            },
            {
              label: "60,000+",
              value: "transactions added since release",
              description:
                "Transactions per user per month increased by 27% with open banking.",
            },
          ],
        },
        {
          title: "Next steps",
          content: [
            "Smarter AI-enhanced experiences in Bookkeeping; usage data supports demand.",
            "Exploring agents and subagents for research and component work; exploring usage monitoring and automated PR suggestions.",
            "MTD April 2026 cohort and putting the HMRC-recognised MTD solution into users' hands.",
          ],
        },
      ],
      skills: [
        "Impact modelling",
        "User research",
        "Feasibility mapping",
        "Figma Make",
        "Design systems",
        "Component architecture",
        "Code-first prototyping",
        "Next.js",
        "Tailwind CSS",
        "Cursor",
        "Figma",
        "HMRC API integration",
        "UXQA",
        "AI-augmented design",
      ],
    },
    {
      slug: "sage-individual",
      url: "/sage-individual",
      businessName: "Sage",
      projectTitle: "Accounting, tax, and invoicing for sole traders",
      year: "2021-2024",
      role: "Senior Product Designer",
      problemStatement:
        "Helping self-employed individuals run their business, track income and expenses, get paid by customers faster, and submit self-assessment. A key feature was transaction splitting: helping sole traders manage business and personal finances from a single account while keeping them separate for accounting and tax purposes.",
      principles: [
        {
          title: "Let simplicity build confidence and understanding",
          description:
            "Sage Individual is designed for users without an accountant. The app needs to be simple to understand and use, making accounting accessible for those unfamiliar with financial terminology and principles.",
        },
        {
          title: "Accessibility is mandatory",
          description:
            "Building for accessibility improves the experience for all users, not just those with specific needs. Good accessibility is good design.",
        },
        {
          title: "Improvement is iterative, start small and build",
          description:
            "To avoid over-complication and feature bloat, we build iteratively. Start by solving core user needs first, then iterate based on research and feedback.",
        },
      ],
      sections: [
        {
          title: "Initial Research & Value Proposition",
          content: [
            "Kicked off user research with sole traders to understand current behaviours, pain points, and needs around managing mixed business and personal transactions.",
            "Through interviews and surveys, validated that transaction splitting was a significant pain point and would provide clear value.",
          ],
          metrics: [
            {
              label: "78%",
              value: "of sole traders use a single account",
              description:
                "Most sole traders manage both business and personal finances from one bank account, making it difficult to separate spending for tax and accounting purposes.",
            },
            {
              label: "63%",
              value: "rely on manual workarounds",
              description:
                "Sole traders commonly use spreadsheets, separate bank accounts, or memory to track which transactions are business vs personal.",
            },
          ],
        },
        {
          title: "Business Needs",
          content: [
            "Increase product stickiness and engagement by solving a core pain point, leading to higher retention.",
            "Competitive differentiation from traditional business banking and accounting solutions.",
            "Foundation for future features like tax estimates, expense categorisation, and reporting.",
          ],
        },
        {
          title: "Design Sprint",
          content: [
            "Ran a design sprint to rapidly explore different approaches to transaction splitting.",
            "Brought together designers, product managers, and engineers to sketch, prototype, and test ideas with users in just a few days.",
            "Fast-paced, collaborative approach allowed quick validation and identification of promising interaction patterns.",
          ],
        },
        {
          title: "User Journey Mapping",
          content: [
            "Worked with wider product team to map out end-to-end user journey for splitting transactions.",
            "Helped understand all touchpoints, edge cases, and opportunities to guide users through the experience.",
          ],
        },
        {
          title: "Wireframes & Prototyping",
          content: [
            "Created low and mid-fidelity wireframes to explore different UI patterns.",
            "Helped quickly iterate on interaction model and information architecture before committing to high-fidelity designs.",
          ],
        },
        {
          title: "User Testing",
          content: [
            "Conducted moderated usability testing sessions with sole traders to validate design direction.",
            "Testing revealed key insights that shaped final design, including simplifying the split interface and providing clearer feedback after splitting.",
          ],
        },
        {
          title: "Service Blueprint",
          content: [
            "Created service blueprint mapping frontstage user experience to backstage technical requirements and processes.",
            "Helped engineering understand full scope and identify technical dependencies.",
          ],
        },
        {
          title: "Design System & UI",
          content: [
            "All designs created using Sage's Graphite design system components and patterns.",
            "Where new patterns were needed, worked with design system team to create reusable components.",
            "Pixel perfect UI created in Figma in collaboration with Content Design.",
            "Developer reviews and refinements happened often to validate feasibility.",
          ],
        },
        {
          title: "Accessibility",
          content: [
            "Comprehensive accessibility considerations including resize text, focus order, dark mode, and landscape orientation.",
            "Ensured product meets WCAG 2.1 standards as Accessibility Champion for native mobile.",
          ],
        },
        {
          title: "Build",
          content: [
            "Provided ongoing support to engineers during development - answering questions, clarifying edge cases, making small design adjustments as technical constraints emerged.",
            "Conducted thorough UI/UX reviews throughout development to ensure implementation matched designs and met quality standards.",
          ],
        },
      ],
      skills: [
        "User research",
        "Design sprints",
        "Journey mapping",
        "Service blueprints",
        "Wireframing",
        "Usability testing",
        "Accessibility (WCAG 2.1)",
        "iOS/Android native design",
        "Figma",
        "Design systems",
      ],
    },
    {
      slug: "sage-ds",
      url: "/sage-ds",
      businessName: "Sage",
      projectTitle: "Graphite Design System",
      year: "2021-2024",
      role: "Lead Product Designer",
      problemStatement:
        "Create and maintain a comprehensive design system for Sage's native mobile applications across iOS and Android.",
      sections: [
        {
          title: "Foundations",
          content: [
            "Colour Variables: Define foundational colour palette and semantic tokens. Includes primary, secondary, and functional colours maintaining accessibility standards and brand consistency.",
            "Typography: Define hierarchy, scale, and styling of text across all platforms ensuring readability and consistency.",
            "Icons: Designed to help users clearly communicate actions, navigate products, and understand information. Created to be accessible, consistent, and recognizable across all platforms.",
          ],
        },
        {
          title: "Native Components",
          content: [
            "Designed and implemented for iOS and Android using platform-specific technologies.",
            "Built to feel natural on each platform while maintaining Sage brand and experience.",
            "Work with shared iOS/Android library of variables.",
          ],
        },
        {
          title: "Bespoke Components",
          content: [
            "Custom-built for specific use cases within Sage products.",
            "Built for Sage.com and custom web services using React.",
            "Work with web library of variables allowing teams to create bespoke components suited to their products.",
          ],
        },
        {
          title: "Figma Documentation",
          content: [
            "All components, styles and variables documented in Figma with guidelines for designers.",
            "Each component fully documented with usage guidelines, variants, and best practices.",
          ],
        },
        {
          title: "Zeroheight Documentation",
          content: [
            "Comprehensive end-to-end documentation for developers.",
            "Access to all components, usage guidelines, code examples and design token values.",
            "Acts as the single source of truth for the design system.",
          ],
        },
      ],
      skills: [
        "Design systems",
        "Figma",
        "Zeroheight",
        "iOS design",
        "Android design",
        "React",
        "Design tokens",
        "Documentation",
        "Component architecture",
      ],
    },
  ],

  skills: [
    "Product Design",
    "Product Management",
    "UX/UI Design",
    "Agentic UI Design",
    "Design Systems",
    "User Research",
    "Usability Testing",
    "Journey Mapping",
    "Service Blueprints",
    "Wireframing",
    "Prototyping",
    "Design Sprints",
    "Impact Modelling",
    "Accessibility (WCAG 2.1)",
    "iOS Native Design",
    "Android Native Design",
    "React",
    "React Native",
    "Next.js",
    "Tailwind CSS",
    "Figma",
    "Zeroheight",
    "Cursor",
    "AI Integration",
    "Code-first Design",
  ],

  availability:
    "Currently employed as Lead Product Designer at GetGround. Open to discussing interesting opportunities and collaborations.",

  personalLife: {
    background:
      "Originally from the Warwickshire countryside, Chris now lives in east London. Having always asked why and how things work—taking apart gadgets as a kid and questioning every design decision as an adult—a career in product design seemed inevitable.",
    interests: [
      "Cycling - enjoys long rides through the countryside and exploring new routes, a great way to clear the head and think through design problems",
      "Food - an enthusiast of all cuisines, always on the hunt for the best local spots and happy to travel for a great meal",
      "Sports - a keen follower of F1, football, rugby, and cricket, with weekends often spent watching live sport or catching up on the latest races and matches",
      "Travel - enjoys the odd holiday to recharge, experience new cultures, and find design inspiration in unexpected places",
    ],
    sideProjects: [
      "Building digital products for his partner's therapy practice - applying product design skills to help small businesses, from booking systems to client communication tools",
      "This portfolio site - built entirely from scratch using an AI-first approach with Cursor, Next.js, and Tailwind CSS. As a designer (not an engineer), Chris leverages AI coding assistants to work directly in codebases, enabling him to prototype and build functional products that showcase both design and technical execution",
      "Experimenting with AI tools and integrations - always exploring new ways to incorporate AI into design workflows and products",
    ],
  },
}

/**
 * Get the full portfolio context
 */
export function getPortfolioContext(): PortfolioContext {
  return portfolioContext
}

/**
 * Get a specific case study by slug
 */
export function getCaseStudyBySlug(slug: string) {
  return portfolioContext.caseStudies.find((cs) => cs.slug === slug)
}

/**
 * Get relevant links for a topic
 */
export function getRelevantLinks(topic: string): string[] {
  const topicLower = topic.toLowerCase()
  const links: string[] = []

  // Check case studies for relevance
  for (const cs of portfolioContext.caseStudies) {
    const searchText = `${cs.projectTitle} ${cs.businessName} ${cs.problemStatement} ${cs.skills.join(" ")}`.toLowerCase()
    if (searchText.includes(topicLower)) {
      links.push(cs.url)
    }
  }

  return links
}
