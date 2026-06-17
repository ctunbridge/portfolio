/**
 * GG Making Tax Digital Case Study Page
 *
 * Supporting case study for GetGround's Making Tax Digital work.
 */
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button/button"
import { CaseStudyLayout } from "@/components/layout/case-study-layout/case-study-layout"
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

export default function GGBookkeepingPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Product principles", id: "product-principles" },
    { label: "Problem context", id: "problem-context" },
    { label: "Problem to prototype", id: "problem-to-prototype" },
    { label: "Feasibility mapping", id: "feasibility-mapping" },
    { label: "Design system", id: "design-system" },
    { label: "Code-first delivery", id: "code-first-delivery" },
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
      id: "problem-context",
      title: "Problem context",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              What we already knew, and what we validated quickly
            </h3>
            <p className="typography-body text-foreground">
              The introduction of Making Tax Digital represented a huge business opportunity for us to acquire new landlords through a free solution, whilst also solving user needs we'd already identified through the holistic bookkeeping solution.
            </p>
            <p className="typography-body text-foreground">
              To maximise the impact of this project, we needed to understand the market size and user sentiment. We built a model to understand how many users we could capture (conservatively and aggressively) and the resulting revenue. Using real market data helped us present a strong value proposition to business leaders.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Image
                src="/images/case-studies/gg-bookkeeping/ballpark.jpg"
                alt="Research summary and sizing for bookkeeping and MTD"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              <Image
                src="/images/case-studies/gg-bookkeeping/mtd-model.jpg"
                alt="Making Tax Digital impact model showing revenue projections"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    80% of landlords still rely on spreadsheets (not compatible
                    with MTD)
                  </p>
                  <p className="typography-body text-foreground">
                    Landlords want clarity without complexity when making tax
                    submissions. Common pain points centred around lack of
                    correct figures, which figures to use, and how to find them.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    60% of users handle their own self assessments
                  </p>
                  <p className="typography-body text-foreground">
                    The majority of landlords prefer to manage much of their
                    bookkeeping and tax themselves, rather than appoint an
                    accountant.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    35% said they were not aware of Making Tax Digital
                  </p>
                  <p className="typography-body text-foreground">
                    MTD is not on every landlord&apos;s radar, and not well
                    understood; of those who were familiar, there was mixed
                    understanding of what was required from them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-30 lg:mt-45">
              <h3 className="typography-h4-demibold">
                What does this mean for the platform?
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    Bookkeeping: a comprehensive transaction, tax deadline,
                    and submission management tool
                  </p>
                  <p className="typography-body text-foreground">
                    The current transactions list was too basic to provide
                    real value. Users need to see their property income and
                    expenses from all sources, manage these transactions
                    efficiently, and submit their tax obligations.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    Complying with HMRC rules and integrating with APIs
                  </p>
                  <p className="typography-body text-foreground">
                    To build an effective Making Tax Digital solution, we needed
                    a solid understanding of HMRC&apos;s requirements to enable
                    complete and compliant tax submissions via their MTD APIs.
                  </p>
                </div>
              </div>
            </div>
        </>
      ),
    },
    {
      id: "problem-to-prototype",
      title: "Problem to prototype",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Rapid AI-enabled prototyping and user testing
            </h3>
            <p className="typography-body text-foreground">
              I used{" "}
              <span className="font-semibold">Figma Make</span> to spin up a testable prototype for{" "}
              <span className="font-semibold">transaction management</span> and{" "}
              <span className="font-semibold">quarterly submissions</span> in a couple of days, which we then put in front of users for feedback. Building this way{" "}
              <span className="font-semibold">cut design and testing time by half</span>, gave us a more comprehensive test, and let me spot journey gaps faster than traditional user flow mapping or working through each scenario in isolation.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/ut-make.jpg"
            alt="User feedback on the Figma Make prototype for transaction management and quarterly submissions"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mb-12 mt-8"
            loading="lazy"
          />

          <div className="space-y-8">
            <div className="space-y-2">
              <p className="typography-h5-demibold text-foreground">
                40% confidence uplift
              </p>
              <p className="typography-body text-foreground">
                Before using the prototype only 20% of participants said they
                were confident with MTD changes; after, 60% said they were
                confident with the MTD changes, a jump of 40%.
              </p>
            </div>
            <div className="space-y-2">
              <p className="typography-h5-demibold text-foreground">
                90% clarity
              </p>
              <p className="typography-body text-foreground">
                90% of participants said it was clear what needed to be
                submitted and when while looking at the Personal Tax screen.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "feasibility-mapping",
      title: "Feasibility mapping",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Mapping the prototype to technical requirements
            </h3>
            <p className="typography-body text-foreground">
              As a full product team, engineering included, we mapped an iteration of the prototype against HMRC requirements, APIs, and our platform constraints. The whiteboard and blueprint sessions made it obvious where the flow was feasible, where engineering needed spikes, and where the experience had to flex to stay compliant.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <Image
              src="/images/case-studies/gg-bookkeeping/technical-whiteboard.jpg"
              alt="Technical whiteboard mapping the prototype journey against technical requirements"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <Image
              src="/images/case-studies/gg-bookkeeping/service-blueprint.jpg"
              alt="Service blueprint aligning the bookkeeping journey with MTD and platform capabilities"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </>
      ),
    },
    {
      id: "design-system",
      title: "Design system",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Enabling fast and consistent delivery
            </h3>
            <p className="typography-body text-foreground">
              I built and maintain our design system both in Figma and our component library within the monorepo. This enables new screens to reuse tokens and patterns instead of one-off layouts, allowing engineers to ship faster, and myself to build directly in the codebase without waiting for design handoffs.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/design-system-figma-library.jpg"
            alt="Capcom design system library in Figma: components and variables"
            width={1920}
            height={1080}
            className="mt-8 w-full h-auto rounded-lg"
            loading="lazy"
          />
        </>
      ),
    },
    {
      id: "code-first-delivery",
      title: "Code-first delivery",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Next.js and Tailwind, directly in our codebase
            </h3>
            <p className="typography-body text-foreground">
              Using Cursor, I built the core Bookkeeping and MTD front-end in
              our codebase, creating and using existing components to keep design consistency with the rest of the platform. This approach let me go beyond static frames, use real data and staging accounts to validate decisions, save engineering time, and raise the quality of what we shipped.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10 mt-8">
            <Image
              src="/images/case-studies/gg-bookkeeping/codebaseui.jpg"
              alt="Bookkeeping UI built directly in the codebase"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <Image
              src="/images/case-studies/gg-bookkeeping/codebaseuimobile.jpg"
              alt="Mobile view of the codebase UI"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <Image
              src="/images/case-studies/gg-bookkeeping/cursor-ci.jpg"
              alt="Using Cursor and CI for development"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">Specs and coverage</h3>
            <p className="typography-body text-foreground">
            Instead of a comprehensive set of designs, as would have been the case with a traditional design handoff, I delivered targeted Figma designs only where they added value, focusing on component variants and key scenarios, while using the front-end implementation itself to define the majority of flows.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10 mt-8">
            <Image
              src="/images/case-studies/gg-bookkeeping/figmadesign2.jpg"
              alt="Figma specifications for bookkeeping flows and components"
              width={1280}
              height={500}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <Image
              src="/images/case-studies/gg-bookkeeping/figmadesign1.jpg"
              alt="Figma library and supplementary bookkeeping screens"
              width={640}
              height={500}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </>
      ),
    },
    {
      id: "impact",
      title: "Impact",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">Engagement</h3>
            <p className="typography-body text-foreground min-h-[2lh]">
              To measure engagement, we tracked how many users were tracking income and expenses through open banking and how many signed up for Making Tax Digital. We&apos;ve seen a significant uptake in both features:{" "}
              <span className="font-bold">1000+ sign ups</span> from new users in 2 months,{" "}
              <span className="font-bold">564 active banking connections</span>, and nearly{" "}
              <span className="font-bold">60,000+ transactions</span> added since release.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/mixpanel.jpg"
            alt="Analytics dashboard showing bookkeeping feature usage"
            width={1920}
            height={1080}
            className="mt-8 w-full h-auto rounded-lg mb-8"
            loading="lazy"
          />
        </>
      ),
    },
    {
      id: "next-steps",
      title: "Next steps",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">A personal accounting agent</h3>
            <p className="typography-body text-foreground">
              Combined with open banking, transaction management, and insight
              improvements, we are positioned to bring smarter, AI-enhanced experiences into Bookkeeping. Usage data already points to demand for deeper, more personal help inside the product.
            </p>
          </div>
          <div className="space-y-4 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">Exploring automated improvements</h3>
            <p className="typography-body text-foreground">
              We are currently looking at how{" "}
              <span className="font-semibold">agents and subagents</span> can speed up research and component creation, and whether {" "}
              <span className="font-semibold">AI systems can monitor usage in the background</span>, suggest improvements, and open pull requests automatically when changes are safe.
            </p>
          </div>
          <div className="space-y-4 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">MTD April 2026</h3>
            <p className="typography-body text-foreground">
              The first cohort of landlords who must use MTD starts in April 2026 (income over £50k). The design and engineering work we have done so far means we are now recognised as an MTD developer by HMRC; the next step is to put our MTD solution into the hands of our users.
            </p>
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
            Making Tax Digital
          </h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Problem statement</span> ·{" "}
                As a landlord, I need to keep track of and manage my income and
                expenses, understand my tax obligations, and submit my self-assessment
                online according to HMRC&apos;s Making Tax Digital rules.
              </p>

              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead Product
                Designer
              </p>

              <p className="typography-body text-foreground">
                <span className="typography-body-bold">How we worked</span> · We validated the market and user needs quickly, then used Figma Make to get a testable prototype for transaction management and quarterly submissions in days and put it in front of users for feedback. The design system in Figma and shared components in code kept delivery fast and consistent across squads.
              </p>
            </div>
          </div>

          <div className="animate-stagger-2">
            <Image
              src="/images/case-studies/gg-bookkeeping/gg-hero-bk.jpg"
              alt="GetGround Bookkeeping and Making Tax Digital overview"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </section>

        <div className="animate-stagger-3">
          <CaseStudyLayout sections={caseStudySections} />
        </div>
      </div>

      <div className="grid grid-cols-12 mt-80 pb-40">
        <div className="col-span-12">
          <Footer staggerClass="animate-stagger-7" />
        </div>
      </div>
    </>
  )
}
