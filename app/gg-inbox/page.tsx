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
      "Help users focus by surfacing what matters most in the moment. Prioritise clarity over completeness — not everything needs to be shown.",
  },
  {
    number: "2",
    title: "Build confidence with every interaction",
    description:
      "Make it easy to understand, hard to get lost, and reassuring to use. Guide naturally, place support where it's needed, and use data-led insights where possible to build trust and confidence.",
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
    description: "For when the user tells us directly what they need in that moment",
    bullets: [
      "We assemble the UI required to complete that job",
      "Includes both adaptive (dynamic) and stable (static) content",
    ],
  },
  {
    label: "Push",
    description:
      "For when the system detects something meaningful and surfaces it proactively.",
    bullets: [
      "Surfaces insights in predictable locations",
      "UI structure never moves, only the content adapts",
      "Driven by scenario detection (portfolio changes, compliance needs, market shifts and patterns)",
    ],
  },
  {
    label: "Persistent",
    description:
      "For when the user is exploring, reviewing, or seeking understanding, without asking a question or reacting to a scenario.",
    bullets: [
      "Stable surfaces like tables, documents, navigation, asset overviews",
      "Accessible regardless of scenario, giving users reliable anchors",
    ],
  },
]

const impactMetrics = [
  {
    title: "34% more transactions categorised",
    body: "In the first 2 weeks the proportion of categorised transactions increased due to Inbox nudges and suggested categorisations",
  },
  {
    title: "21% increase in property details added",
    body: "We saw more users adding property details after we surfaced these tasks in the inbox rather than on the property details page.",
  },
  {
    title: "43% increase in transactions linked to documents",
    body: "With suggested linking we saw a big increase in document and transaction linking, vital for clean bookkeeping data.",
  },
]

const noteItems = [
  {
    title: "Better curation of To dos",
    body: "We were not diligent enough in stripping out current tasks and so everything made it into the inbox. We've noticed some users have too many To dos, diluting the impact of the Inbox",
  },
  {
    title: "Refine agent instruction earlier",
    body: "We've had some feedback that the agent is suggesting changes based on previous documents such as mortgage statements and receipts from previous tax years. We should have done a better job at training the agent to understand what is current, and what is previous.",
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
              The work started as an in-year bookkeeping improvement. The business needed users to keep records cleaner throughout the year so our in-house accounting process could become more efficient, and the old end-of-year accounting flow could carry less burden.
            </p>
            <p className="typography-body text-foreground">
              Early Bookkeeping discovery showed the issue was wider than Bookkeeping. Actions lived across Tasks, Bookkeeping, and future assistant-led jobs that did not yet have a clear home. Refactoring Bookkeeping into an inbox-style experience would have created two competing task systems.
            </p>
            <p className="typography-body text-foreground">
              We also found that usage of Bookkeeping was low (only 24% of log-ins visited), users were not finding value in the current screens, so the question became if we even needed it, rather than should we refactor it. Tasks on the other hand had more than double the usage (55%).
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
              Pull, push and persistent UI. An agent first interaction model.
            </h3>
            <p className="typography-body text-foreground">
              As part of the wider discovery work, I led the creation of a platform wide interaction model that could enable agentic ai and existing functionality to live alongside each other. It was based on primary, secondary and tertiary user needs, and how a user can interact with agentic and deterministic UI to complete them without favouring one or the other and therefore giving the user freedom to choose.
            </p>
          </div>

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
              Using the interaction model, I mapped out our core jobs to be done and how each interaction might solve for them, whether that&apos;s through a chat conversation, dynamic task, or deterministic flow that always exists in the same place.
            </p>
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
              I used a design/playground branch in our monorepo to prototype with production-like components and real product patterns rather than static screens. This made the information architecture problem visible earlier: Inbox needed to be a broader action surface, not just a Bookkeeping refactor.
            </p>
            <p className="typography-body text-foreground">
              We tested comprehension of the new surfaces and removal of Bookkeeping face to face with 5 existing users to overall positive feedback. The standout finding from the testing was a consensus on having the final action when updating information, especially when it comes to finances.
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
              Supporting existing tasks & setting a framework
            </h3>
            <p className="typography-body text-foreground">
              The first release of Inbox needed to do two things. First was to migrate all existing tasks to the new inbox, second was to set a framework for how agentic actions appeared, and whether that was as a To Do or Activity.
            </p>
            <h4 className="typography-h5-demibold text-foreground">
              Skills, for us, and the agent
            </h4>
            <p className="typography-body text-foreground">
              To migrate over existing tasks I built a skill based on the design principles we set out for the Inbox. The skill is able to take either an existing task, or a description of a feature, and advise on Inbox content, including whether it&apos;s a To do, activity.
            </p>
            <p className="typography-body text-foreground">
              By creating a skill for team members to use, we were able to tweak it based on output, and then inject it straight into our existing ai assistant so it can now reliably decide how to surface actions.
            </p>
            <p className="typography-body text-foreground">
              I used it to look through our monorepo and create documentation for engineers to migrate all existing tasks into the new Inbox surface.
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
            <h3 className="typography-h4-demibold">Setting the Framework</h3>
            <p className="typography-body text-foreground">
              A key but simple element to the Inbox was the UI framework. How does a To do appear vs Activity, what does the detail show, and when does it show, and how do media vs container queries work within the inbox, what happens when the side chat is open. These questions were worked through in static designs and I then built our components in the ui package ready to be used.
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
              Enabling parallel work-streams: First Agentic Actions
            </h3>
            <p className="typography-body text-foreground">
              I was also leading our document extraction project at the time, which fed straight into inbox, as the primary surface where users would review suggested actions based on data extracted from documents and user context. The first two use cased were updating property details, and linking suggested transactions to documents, both of which ladder up to the ultimate goal of gathering better data from users to build context, and improve user facing and internal flows such as end of year accounting.
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
            <h3 className="typography-h4-demibold">Populate the Activity Feed</h3>
            <p className="typography-body text-foreground">
              Currently the activity feed is fairly sparse and does not push context aware suggestions and insights to users. The next step is engage more users with the aim of increasing WAU and MAU.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="typography-h4-demibold">Introduce True Agency</h3>
            <p className="typography-body text-foreground">
              Currently the assistant acts based on user input, chat, uploading a document, adding a transaction. Next we want to give the agent a heartbeat, and have it act without user triggers.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "note",
      title: "A note on what I would change...",
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
            Creating an Inbox to Enable Agentic Actions
          </h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 space-y-6 lg:col-span-9">
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Problem statement</span>{" "}
                · GetGround needed to improve in-year bookkeeping and create a
                clearer home for assistant-led actions. The solution became a
                broader Inbox; one persistent surface for users to understand,
                review, and complete high-intent actions across their portfolio.
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
