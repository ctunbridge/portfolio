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
      "Product designer, founder and builder with 10 years of experience. Specialises in design systems, Next.js and Tailwind CSS sites, mobile native apps, and React applications. Currently Lead Product Designer at GetGround.",
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
      label: "Bookkeeping & MTD Case Study",
      url: "/gg-bookkeeping",
      description:
        "Detailed case study on GetGround's bookkeeping and Making Tax Digital feature",
    },
    {
      label: "Platform UI Refresh Case Study",
      url: "/gg-ui",
      description:
        "Case study on GetGround's platform redesign and AI integration",
    },
    {
      label: "Sage Individual Case Study",
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
        "Responsible for multiple features across the GetGround customer platform, allowing 30,000 investors to manage their property from sourcing, to bookkeeping, to tax submissions and portfolio optimisation, and owner of our Capcom design system.",
        "Most recently delivered the new Bookkeeping and tax submissions area from end to end, whilst pioneering new ways of working to embed AI into our workflow. This included: business impact modelling; AI enabled prototyping directly in our codebase; synthesising test results and research in Notion to create a searchable resource database; creation of bespoke agents such as CopyKat, a copywriting agent with GetGround context and tone of voice baked into a Slackbot.",
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
      slug: "gg-bookkeeping",
      url: "/gg-bookkeeping",
      businessName: "GetGround",
      projectTitle: "Bookkeeping & Making Tax Digital",
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
          title: "Impact Model",
          content: [
            "Maximising the impact of large projects is essential for GetGround's short and long term business ambitions.",
            "Working with product managers to produce a model to understand how many users we could capture, conservatively and aggressively, and how this could result in revenue for the business.",
            "Used real market data to create the model which played a huge role in putting forward a strong value proposition to leaders within the business.",
          ],
        },
        {
          title: "Discovery",
          content: [
            "Established that the market was there for a more comprehensive bookkeeping experience that included Making Tax Digital.",
            "Needed to understand current frustrations users face with tax and bookkeeping and the new technical and user facing requirements this would bring.",
          ],
          metrics: [
            {
              label: "80%",
              value: "of landlords still rely on spreadsheets",
              description:
                "Not compatible with MTD. Landlords want clarity without complexity when making tax submissions. Common pain-points centred around lack of correct figures, which figures to use, and how to find them.",
            },
            {
              label: "60%",
              value: "of users handle their own self assessments",
              description:
                "The majority of landlords prefer to manage much of their bookkeeping and tax themselves, rather than appoint an accountant.",
            },
            {
              label: "35%",
              value: "said they were not aware of Making Tax Digital",
              description:
                "MTD is not on every landlord's radar, and not well understood. Of those that were familiar there was a mixed understanding of what was required from them.",
            },
          ],
        },
        {
          title: "Platform Requirements",
          content: [
            "Bookkeeping: A new and improved transaction, tax deadline, and submission management tool. The current transactions list experience was too basic to provide value. Users need to see their property income and expenses from all sources, manage these transactions efficiently, and see and submit their tax obligations.",
            "HMRC Compliance: To build an effective Making Tax Digital solution, needed a solid understanding of HMRC's full requirements to allow users to send a complete and compliant tax submission via MTD APIs.",
          ],
        },
        {
          title: "Ideation and Testing",
          content: [
            "As a full product team, engineering included, mapped out each journey for both bookkeeping and MTD to understand how to bring together the identified user needs and technical constraints at the same time.",
            "Created code-first prototype in Next.js to test the largest unknown: Making Tax Digital submissions.",
            "Tested with users to understand how they would find the quarterly submission cadence, and how sentiment changed towards MTD before and after making submissions.",
          ],
          metrics: [
            {
              label: "40%",
              value: "confidence uplift",
              description:
                "Before using the prototype only 20% of participants said they were confident with MTD changes, after 60% said they were confident - a jump of 40%.",
            },
            {
              label: "90%",
              value: "clarity",
              description:
                "90% of participants said it was clear what needed to be submitted and when while looking at the Personal Tax screen.",
            },
          ],
        },
        {
          title: "Code First Delivery",
          content: [
            "Using Cursor, created the core Bookkeeping and MTD front-end directly in the GetGround codebase using Next.js and Tailwind.",
            "Benefits: Craft the experience to a level not possible through Figma frames, use real data and staging accounts to validate design decisions, save precious engineering time, and raise the quality of overall output.",
            "Alongside the feature branch, delivered a comprehensive set of supplementary designs in Figma to fill in the gaps, giving engineers full understanding from both technical and design perspective.",
          ],
        },
        {
          title: "Build & UXQA",
          content: [
            "Feature branch and comprehensive designs enabled more focused support during build - smaller, more deliberate decision making.",
            "Higher quality output confirmed in UXQA with significantly less UI bugs and differences from the intended design.",
          ],
        },
        {
          title: "Impact",
          content: [
            "Delivery broken up to ensure continued value without overwhelming users: Bookkeeping first, MTD later.",
            "Tracking organic traffic shows positive results with bookkeeping usage steadily increasing while previous transactions page remains static.",
            "Healthy appetite for Making Tax Digital with ~9% CTR on emails and ~35% of those signing up to the MTD waitlist.",
          ],
        },
        {
          title: "Next Steps",
          content: [
            "Bookkeeping x AI: Now positioned to bring smarter, AI-enhanced experiences into Bookkeeping. Discovery work ongoing with user data showing desire for deeper, more personal AI-powered experiences.",
            "MTD April 2026: Continuing to build towards full MTD compliance ahead of the April 2026 deadline.",
          ],
        },
      ],
      skills: [
        "Impact modelling",
        "User research",
        "Journey mapping",
        "Code-first prototyping",
        "Next.js",
        "Tailwind CSS",
        "Cursor",
        "Figma",
        "HMRC API integration",
        "UXQA",
      ],
    },
    {
      slug: "gg-ui",
      url: "/gg-ui",
      businessName: "GetGround",
      projectTitle: "Platform UI Refresh",
      year: "2025",
      role: "Lead Product Designer",
      problemStatement:
        "As GetGround aims for product led growth by pivoting to a subscription based model with AI enhanced features, many areas of the platform are out of date or need deprecating. The refresh aims to create a foundation for the next stage of GetGround.",
      sections: [
        {
          title: "Portfolio Page",
          content: [
            "The portfolio page is where users land after logging in. It needs to direct users to what they need, when they need it, and alert them of anything needing attention.",
            "Asked users what was most important, looked at data to understand current usage, and looked ahead for scalability.",
            "Found: quick actions were most used elements, investment goals and taxes were top of mind, needed to scale for dynamic AI-driven experiences.",
          ],
        },
        {
          title: "GetGround AI",
          content: [
            "Current AI experience was a simple chat for property investment questions, GetGround services info, and basic tasks like downloading bank statements.",
            "Completely reimagined how AI surfaces in the platform as AI is woven into the foundations.",
            "Created scalable and dynamic UI patterns: contextual surfaces, dynamic UI in side panels within transactions, modal experiences that generate actions and reports based on portfolio, market and user context.",
          ],
        },
        {
          title: "Transactions",
          content: [
            "Functionality was still relevant but needed updating to align with the rest of the platform.",
            "Made subtle changes to use new design patterns and brand colours.",
          ],
        },
        {
          title: "Property Details",
          content: [
            "One of the most important pages - where users manage day-to-day investment, understand performance, and see cashflow.",
            "Previous iteration was overwhelmed with old experiments, creating a noisy and overwhelming experience.",
            "Refresh focused on keeping what works, removing the unnecessary, and creating a cleaner, more deliberate interface.",
          ],
        },
        {
          title: "Financial Accounts",
          content: [
            "Design was out of date and much functionality (like profit per account) was not relevant and even misleading.",
            "User recordings and usage data showed the screen was used for frequent, specific actions: depositing/sending money, downloading statements.",
            "Refresh focused on utility - making actions clear and easy to find while removing noise.",
          ],
        },
      ],
      skills: [
        "UI design",
        "Design systems",
        "AI integration",
        "User research",
        "Data analysis",
        "Figma",
        "Product strategy",
      ],
    },
    {
      slug: "sage-individual",
      url: "/sage-individual",
      businessName: "Sage",
      projectTitle: "Sage Individual - Transaction Splitting",
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
      "This portfolio site - built from scratch using Next.js, Tailwind CSS, and Cursor to showcase both design and technical skills",
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
