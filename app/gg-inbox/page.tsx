/**
 * GG Inbox Case Study Page
 *
 * GetGround Inbox / Agentic Assistant case study.
 */
"use client"

import Image from "next/image"
import Link from "next/link"

import { CaseStudyLayout } from "@/components/layout/case-study-layout/case-study-layout"
import { Button } from "@/components/ui/button/button"
import { Footer } from "@/components/ui/footer/footer"
import { TopNav } from "@/components/ui/top-nav/top-nav"

const principles = [
  {
    number: "1",
    title: "Show the right thing, not everything",
    description:
      "Help users focus by surfacing what matters most in the moment. Prioritise clarity over completeness; not everything needs to be shown.",
  },
  {
    number: "2",
    title: "Build confidence with every interaction",
    description:
      "Make it easy to understand, hard to get lost, and reassuring to use. Guide naturally, place support where it's needed, and use data-led insights to build trust.",
  },
  {
    number: "3",
    title: "Make it useful every time, not just the first time",
    description:
      "Create features that are clear, intuitive, and valuable every time they're used. If it needs constant explanation, it's not intuitive enough.",
  },
]

const interactionModels = [
  {
    label: "Pull",
    description: "When the user tells us what they need in that moment",
    bullets: [
      "We assemble the UI required to complete that job",
      "Includes both adaptive (dynamic) and stable (static) content",
    ],
  },
  {
    label: "Push",
    description:
      "When the system detects something meaningful and surfaces it proactively.",
    bullets: [
      "Surfaces insights in predictable locations",
      "UI structure never moves, only the content adapts",
      "Driven by scenario detection (portfolio changes, compliance needs, market shifts, and patterns)",
    ],
  },
  {
    label: "Persistent",
    description:
      "When the user is exploring or reviewing without asking a question or reacting to a scenario.",
    bullets: [
      "Stable surfaces like tables, documents, navigation, asset overviews",
      "Accessible regardless of scenario, giving users reliable anchors",
    ],
  },
]

const impactMetrics = [
  {
    title: "34% more transactions categorised",
    body: "Inbox nudges and suggested categorisations increased the proportion of categorised transactions by 34% in the first two weeks.",
  },
  {
    title: "21% increase in property details added",
    body: "Surfacing property-detail tasks in the Inbox rather than on the property page drove a 21% increase in users adding property details.",
  },
  {
    title: "43% increase in transactions linked to documents",
    body: "Suggested linking increased document-transaction links by 43%, improving bookkeeping data quality.",
  },
]

const noteItems = [
  {
    title: "Better curation of to-dos",
    body: "We weren't diligent enough in filtering tasks, so too much landed in the Inbox. Some users now have long to-do lists, which dilutes the surface's impact.",
  },
  {
    title: "Refine agent instruction earlier",
    body: "Users reported the agent suggesting changes from outdated documents (mortgage statements, receipts from prior tax years). We should have trained it earlier to distinguish current from historical data.",
  },
]

export default function GGInboxPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Product principles", id: "product-principles" },
    { label: "Problem", id: "problem" },
    { label: "Shaping the solution", id: "shaping-the-solution" },
    { label: "Release", id: "release" },
    { label: "Impact", id: "impact" },
    { label: "Next steps", id: "next-steps" },
  ]

  const caseStudySections = [
    {
      id: "product-principles",
      title: "Product principles",
      content: (
        <div className="space-y-8">
          {principles.map((principle) => (
            <div key={principle.number} className="space-y-4">
              <h3 className="typography-h5-demibold text-foreground">
                {principle.title}
              </h3>
              <p className="typography-body text-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "problem",
      title: "Problem",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              A bookkeeping problem became a system problem
            </h3>
            <p className="typography-body text-foreground">
              The work started as an in-year bookkeeping improvement. Cleaner records throughout the year would make our in-house accounting more efficient and reduce burden on the end-of-year flow.
            </p>
            <p className="typography-body text-foreground">
              Discovery showed the problem was wider than Bookkeeping. Actions lived across Tasks, Bookkeeping, and assistant-led jobs with no clear home. Refactoring Bookkeeping into an inbox would have created two competing task systems.
            </p>
            <p className="typography-body text-foreground">
              Bookkeeping had low reach (24% of logins) and users weren&apos;t finding value in the screens. The question wasn&apos;t how to refactor it, but whether we needed it at all. Tasks had more than double the usage (55%).
            </p>
          </div>

          <div className="rounded-lg bg-muted/30 p-6">
            <Image
              src="/images/case-studies/gg-inbox/InboxProblem.jpg"
              alt="Deprecated Bookkeeping screen alongside main tab reach and Bookkeeping usage data"
              width={2560}
              height={1452}
              className="h-auto w-full rounded-lg"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      id: "shaping-the-solution",
      title: "Shaping the solution",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Pull, push, and persistent UI: an agent-first interaction model
            </h3>
            <p className="typography-body text-foreground">
              I led a platform-wide interaction model so agentic AI and existing functionality could live side by side. It mapped primary, secondary, and tertiary user needs to agentic and deterministic UI, without favouring either approach.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-12">
            <div className="space-y-8">
              {interactionModels.map((model) => (
                <div key={model.label} className="space-y-3">
                  <p className="typography-body-bold text-foreground">
                    {model.label}
                  </p>
                  <p className="typography-body text-foreground">
                    {model.description}
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    {model.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="typography-body text-foreground"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="typography-body text-foreground">
                I mapped core jobs to be done to each interaction type: chat, dynamic tasks, or deterministic flows that stay in the same place.
              </p>
            </div>
            <Image
              src="/images/case-studies/gg-inbox/InboxInteractionModel.jpg"
              alt="Interaction model mapping how users can interact with Bookkeeping and Inbox across pull, push, and persistent UI"
              width={1408}
              height={1360}
              className="h-auto w-full rounded-lg"
              unoptimized
              loading="lazy"
            />
          </div>

          <div className="space-y-8 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">
              Testing code-first prototypes
            </h3>
            <p className="typography-body text-foreground">
              I prototyped on a design/playground branch in our monorepo with production-like components and real product patterns, not static screens. That made the information architecture problem visible earlier: Inbox needed to be a broader action surface, not a Bookkeeping refactor.
            </p>
            <p className="typography-body text-foreground">
              We tested comprehension of the new surfaces and removal of Bookkeeping face-to-face with 5 existing users to overall positive feedback. The standout finding was consensus on keeping the final action with the user when updating financial information.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <p className="typography-body text-foreground">
                &ldquo;...getting a choice of how to be notified or how much control you can give the artificial intelligence... It&apos;s great.&rdquo;
              </p>
              <p className="typography-body text-foreground">
                &ldquo;I still want to be the decision maker.&rdquo;
              </p>
            </div>

            <Image
              src="/images/case-studies/gg-inbox/InboxPrototype.jpg"
              alt="Inbox prototype running locally alongside user research session notes"
              width={2560}
              height={1360}
              className="h-auto w-full rounded-lg"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      id: "release",
      title: "Release",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Supporting existing tasks and setting a framework
            </h3>
            <p className="typography-body text-foreground">
              The first release had two goals: migrate existing tasks into the Inbox, and define how agentic actions appeared as to-dos or activity items.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="typography-h5-demibold text-foreground">
              Skills, for us, and the agent
            </h4>
            <p className="typography-body text-foreground">
              To migrate existing tasks, I built a skill based on our Inbox design principles. It takes an existing task or feature description and advises on Inbox content, including whether it should be a to-do or activity item.
            </p>
            <p className="typography-body text-foreground">
              The team iterated on the skill from real output, then wired it into our AI assistant so it could reliably decide how to surface actions.
            </p>
            <p className="typography-body text-foreground">
              I used it to scan our monorepo and produce migration documentation for engineers.
            </p>
            <Image
              src="/images/case-studies/gg-inbox/InboxSkill.jpg"
              alt="inbox-classifier skill in AI chat alongside Tasks to Inbox classification documentation"
              width={2560}
              height={1160}
              className="h-auto w-full rounded-lg pt-4"
              unoptimized
              loading="lazy"
            />
          </div>

          <div className="space-y-4 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">Setting the framework</h3>
            <p className="typography-body text-foreground">
              A key part of the Inbox was the UI framework: how to-dos and activity items appear, what detail to show and when, how media and container queries behave, and what happens when the side chat is open. I resolved these in static designs, then built the components in our UI package for production use.
            </p>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr] lg:items-start">
                <Image
                  src="/images/case-studies/gg-inbox/InboxFramework1.jpg"
                  alt="Inbox component anatomy and Storybook documentation"
                  width={1582}
                  height={1274}
                  className="h-auto w-full rounded-lg"
                  unoptimized
                  loading="lazy"
                />
                <Image
                  src="/images/case-studies/gg-inbox/InboxFramework2.jpg"
                  alt="Mobile Inbox framework showing to-dos, activity feed, and mortgage details review"
                  width={930}
                  height={1274}
                  className="h-auto w-full rounded-lg"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <Image
                src="/images/case-studies/gg-inbox/InboxFramework3.jpg"
                alt="Desktop Inbox with mortgage details panel and side chat open"
                width={2560}
                height={1532}
                className="h-auto w-full rounded-lg"
                unoptimized
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-4 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">
              Enabling parallel work-streams: first agentic actions
            </h3>
            <p className="typography-body text-foreground">
              I was also leading document extraction, which fed directly into the Inbox as the primary surface for reviewing suggested actions from extracted document data and user context. The first two use cases were updating property details and linking transactions to documents; both gather better data to improve user-facing and internal flows, including end-of-year accounting.
            </p>
            <Image
              src="/images/case-studies/gg-inbox/AgenticActions.jpg"
              alt="First agentic actions for reviewing matched transactions and linking them to rental statements"
              width={2560}
              height={1532}
              className="h-auto w-full rounded-lg"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      id: "impact",
      title: "Impact",
      content: (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {impactMetrics.map((metric) => (
            <div key={metric.title} className="space-y-3">
              <h3 className="typography-h4-demibold">{metric.title}</h3>
              <p className="typography-body text-foreground">{metric.body}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "next-steps",
      title: "Next steps",
      content: (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="typography-h4-demibold">Populate the activity feed</h3>
            <p className="typography-body text-foreground">
              The activity feed is still sparse and doesn&apos;t push context-aware suggestions. Next: populate it with insights to grow weekly and monthly active users.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="typography-h4-demibold">Act without user triggers</h3>
            <p className="typography-body text-foreground">
              Today the assistant only acts on user input: chat, document uploads, or new transactions. Next: give the agent a heartbeat so it can act without explicit triggers.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "note",
      title: "What I would change",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {noteItems.map((item) => (
              <div key={item.title} className="space-y-3">
                <h3 className="typography-h4-demibold">{item.title}</h3>
                <p className="typography-body text-foreground">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-30 lg:mt-45 flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/gg-plg">Next project</Link>
            </Button>
          </div>
        </div>
      ),
    },
  ]

  return (
    <>
      <TopNav items={navItems} />

      <div className="space-y-100 pt-40">
        <section id="introduction" className="space-y-8 animate-stagger-1">
          <h1 className="typography-h2-demibold">
            Building an Inbox for agentic actions
          </h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 space-y-6 lg:col-span-9">
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Problem statement</span>{" "}
                · GetGround needed cleaner in-year bookkeeping and a single home
                for assistant-led actions. We built an Inbox: one persistent
                surface where users understand, review, and complete high-intent
                actions across their portfolio.
              </p>
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead
                Product Designer and Product Manager
              </p>
            </div>
          </div>

          <div className="animate-stagger-2">
            <Image
              src="/images/case-studies/gg-inbox/GG%20Hero%20-%20Inbox.jpg"
              alt="GetGround Inbox on desktop and mobile with code-first prototyping overlay"
              width={5120}
              height={3004}
              className="h-auto w-full rounded-lg"
              unoptimized
              priority
            />
          </div>
        </section>

        <div className="animate-stagger-3">
          <CaseStudyLayout sections={caseStudySections} />
        </div>
      </div>

      <div className="mt-80 grid grid-cols-12 pb-40">
        <div className="col-span-12">
          <Footer staggerClass="animate-stagger-7" />
        </div>
      </div>
    </>
  )
}
