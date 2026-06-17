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
    title: "Product Designer",
    summary:
      "Product designer, founder and builder with 10 years of experience. Specialises in design systems, Next.js and Tailwind CSS sites, mobile native apps, and React applications. Currently Lead Product Designer at GetGround. While not an engineer by training, Chris takes an AI-first approach to coding, using tools like Cursor to work directly in codebases and build prototypes from scratch—demonstrating his ability to bridge design and development through modern AI-assisted workflows.",
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
      label: "Keeping investors compliant with bookkeeping",
      url: "/gg-bookkeeping",
      description:
        "Bookkeeping and MTD: Figma Make to codebase prototype, Capcom design system, code-first delivery with Cursor, and impact metrics",
    },
    {
      label: "Enabling Product Led Growth Case Study",
      url: "/gg-plg",
      description:
        "Case study on GetGround's product led growth: onboarding refactoring and design language",
    },
    {
      label: "Accounting for sole traders",
      url: "/sage-individual",
      description:
        "Case study on transaction splitting for small business owners",
    },
    {
      label: "Graphite Design System Case Study",
      url: "/sage-ds",
      description: "Case study on Sage's native mobile design system",
    },
  ],

  experience: [
    {
      employer: "GetGround",
      jobTitle: "Lead Product Designer",
      dates: "2024 to Present",
      summary: [
        "Lead Product Designer for multiple features across the GetGround platform, serving 30,000+ property investors. Designed and delivered the bookkeeping and tax submissions area end-to-end, enabled product led growth through onboarding refactoring and a consistent design language, and built and maintain the Capcom design system.",
        "Designed AI interaction models and dynamic experiences that generate actions and reports based on portfolio, market, and user context. Built business impact models to inform product decisions, integrated AI into the design process through code-first prototyping in Next.js, and created custom agents like CopyKat, a context-aware copywriting tool.",
      ],
    },
    {
      employer: "Sage",
      jobTitle: "Senior Product Designer",
      dates: "2021 to 2023",
      summary: [
        "Took a lead role in the creation and delivery of the Sage Individual native app for Android and iOS. Targeted the UK's 4.5 million small business owners, Sage Individual allowed users to track income and expenses, get paid faster using native tap to pay, send and receive invoices, and submit tax obligations.",
        "Introduced new ways of working to improve team efficiency, psychological safety, skills and quality of output. This included: team retrospectives; design feedback pathways; workshop formats for wireframing, user journey mapping and prioritisation; training on problem statement framing; design delivery templates; processes to ensure consistency and pixel perfect design delivery to developers.",
        "Accessibility Champion for native mobile, ensuring the Sage Individual product meets WCAG 2.1 standards.",
        "Introduced and led the curation of the Native Mobile Design System (Graphite). Built from the ground up to be robust and usable by all Sage's mobile products.",
      ],
    },
    {
      employer: "Football Survivor",
      jobTitle: "Founding Product Designer",
      dates: "2019 to 2021",
      summary: [
        "Football Survivor was a peer to peer iOS and Android app based on the popular game 'Last Man Standing'. As the founding Lead Product Designer responsibilities included: reimagining user needs and requirements for the game to be viable on a mobile platform; creating the UX and UI; curating the design system; content design; creating app store assets and marketing materials; supporting the development team; continual improvements, fixes and the design delivery of new features.",
        "Football Survivor grew to 15,000+ sign ups and 8,000+ active users within 18 months of launching.",
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
      slug: "gg-plg",
      url: "/gg-plg",
      businessName: "GetGround",
      projectTitle: "Enabling Product Led Growth",
      year: "2025",
      role: "Lead Product Designer",
      problemStatement:
        "GetGround's move to product led growth introduced new features, subscriptions including a free tier, and support for personal and limited company landlords. Many areas of the platform were the outcome of previous experiments and iterations that were either out of date or needed deprecating. The team needed to create a foundation for the next stage of user growth by removing what was no longer needed, bringing in a cohesive design language and user experience, and amending onboarding flows so they facilitate onward free-to-paid journeys.",
      sections: [
        {
          title: "Refactoring onboarding",
          content: [
            "Onboarding had been built sales-first, focused on landlords who had already purchased; the first-time experience did not gather the right data at the right time to guide users to the right product.",
            "End-to-end customer journey experiments with Making Tax Digital as the hook showed conversion rates dropped as users moved deeper into the funnel.",
            "Identified three areas to reduce friction and persist the correct data: marketing website (quiz cut from 7 to 4 questions, data persisted); sign-up (A/B tested sign-up wall placement); adding a property (flow updated to ask about ownership, enabling focused MTD experience and other service suggestions).",
          ],
          metrics: [
            {
              label: "22%",
              value: "through top of funnel",
              description:
                "Uplift in users making it through to sign up after reworking the quiz.",
            },
            {
              label: "38%",
              value: "more sign ups",
              description:
                "From A/B testing when the sign-up wall was later in the flow.",
            },
            {
              label: "41%",
              value: "more funnel completions",
              description: "By changing the add property flow.",
            },
          ],
        },
        {
          title: "Creating a consistent design language",
          content: [
            "Mapping the customer journey revealed inconsistency in brand, design language, and identity across touchpoints. Product led growth requires consistent brand from meta ads through to sign-up or purchase; inconsistency erodes trust and conversion.",
            "Design team split focus across top of funnel (meta ads, sales decks, marketing site) and the platform. Created a refreshed brand identity, standardising colour, dropping outdated serif fonts, and refining the logo.",
            "Chris's main focus was the platform refresh: updating the Capcom design system to reflect the new brand and introducing more consistent UI patterns and tools.",
          ],
        },
      ],
      skills: [
        "Onboarding design",
        "Conversion optimisation",
        "A/B testing",
        "Design systems",
        "Brand consistency",
        "User research",
        "Funnel design",
        "Figma",
      ],
    },
    {
      slug: "gg-bookkeeping",
      url: "/gg-bookkeeping",
      businessName: "GetGround",
      projectTitle: "Keeping investors compliant with bookkeeping",
      year: "2025",
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
            "200+ MTD sign ups in two months, 564 active banking connections, 60,000+ transactions since release.",
          ],
        },
        {
          title: "Next steps",
          content: [
            "Smarter AI-enhanced experiences in Bookkeeping; usage data supports demand.",
            "Exploring agents and subagents for research and component work; exploring usage monitoring and automated PR suggestions.",
            "MTD April 2026 cohort and HMRC recognition as an MTD developer.",
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
      projectTitle: "Accounting for sole traders",
      year: "2021-2024",
      role: "Senior Product Designer",
      problemStatement:
        "Helping small businesses handle the complexity of managing both business and personal finances from a single account, keeping these separate for accounting and tax purposes.",
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
    "UX/UI Design",
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
