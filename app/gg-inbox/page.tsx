/**
 * GG Inbox Case Study Page
 *
 * Scaffold for the GetGround Inbox / Agentic Assistant case study.
 */
"use client"

import Image from "next/image"
import Link from "next/link"

import { CaseStudyLayout } from "@/components/layout/case-study-layout/case-study-layout"
import { Button } from "@/components/ui/button/button"
import { Footer } from "@/components/ui/footer/footer"
import { TopNav } from "@/components/ui/top-nav/top-nav"

const assistantActions = [
  "Suggest transaction links and property edits from uploaded documents.",
  "Categorise and split transactions for user review.",
  "Prepare MTD quarter submission actions for one-click confirmation.",
  "Surface external changes that could affect a landlord’s portfolio, such as legislation changes.",
]

const productDecisions = [
  "Do not create a second task system inside Bookkeeping.",
  "Remove Bookkeeping as a standalone destination and use Inbox as the persistent surface for high-intent actions.",
  "Keep the first release focused on comprehension and confirmation, not calendar/task management breadth.",
  "Require review before the agent can take action, especially where financial information is involved.",
]

export default function GGInboxPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Problem", id: "problem" },
    { label: "Discovery", id: "discovery" },
    { label: "Flow", id: "flow" },
    { label: "Impact", id: "impact" },
    { label: "Hindsight", id: "hindsight" },
  ]

  const caseStudySections = [
    {
      id: "problem",
      title: "Problem",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              A bookkeeping problem became an action-system problem
            </h3>
            <p className="typography-body text-foreground">
              The work started as an in-year bookkeeping improvement. The business needed users to keep records cleaner throughout the year so our in-house accounting process could become more efficient, and the old end-of-year accounting flow could carry less burden.
            </p>
            <p className="typography-body text-foreground">
              But early prototyping showed the issue was wider than Bookkeeping. Actions lived across Tasks, Bookkeeping, and future assistant-led jobs that did not yet have a clear home. Refactoring Bookkeeping into an inbox-style experience would have created two competing task systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border p-6 space-y-3">
              <p className="typography-body-bold text-foreground">Pull</p>
              <p className="typography-body-sm text-muted-foreground">
                The user asks for something and the product provides the right UI.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6 space-y-3">
              <p className="typography-body-bold text-foreground">Push</p>
              <p className="typography-body-sm text-muted-foreground">
                The product knows or suspects something is relevant and surfaces it.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6 space-y-3">
              <p className="typography-body-bold text-foreground">Persistent</p>
              <p className="typography-body-sm text-muted-foreground">
                Familiar surfaces users can return to when they want to know what needs doing.
              </p>
            </div>
          </div>

          <p className="typography-body text-foreground">
            Inbox became the persistent surface for agentic actions. WhatsApp became a strategic push/pull channel for interacting with an assistant that understood the user’s portfolio context, without requiring them to log into the app.
          </p>
        </div>
      ),
    },
    {
      id: "discovery",
      title: "Discovery",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Prototyping in the real codebase
            </h3>
            <p className="typography-body text-foreground">
              I used a design/playground branch in our monorepo to prototype with production-like components and real product patterns rather than static screens. This made the information architecture problem visible earlier: Inbox needed to be a broader action surface, not just a Bookkeeping refactor.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/codebaseui.jpg"
            alt="Code-first prototype showing GetGround product UI patterns"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="typography-h5-demibold">Research format</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li className="typography-body text-foreground">
                  5–6 face-to-face “show and listen” sessions with engaged current users.
                </li>
                <li className="typography-body text-foreground">
                  Async usability testing with 20 users.
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="typography-h5-demibold">Tested actions</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li className="typography-body text-foreground">
                  Confirm suggested property edits from uploaded documents.
                </li>
                <li className="typography-body text-foreground">
                  Review and confirm transaction categories.
                </li>
                <li className="typography-body text-foreground">
                  One-click submit an MTD quarter.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="typography-h4-demibold">What changed through testing</h3>
            <p className="typography-body text-foreground">
              We explored a calendar-style view of upcoming to-dos, but testing showed it was not necessary for the first release. The bigger learning was that agentic automations needed clearer explanation: users had to understand why an action was suggested, what the assistant would do, and where they stayed in control.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "flow",
      title: "Flow",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Focused first release: review, confirm, complete
            </h3>
            <p className="typography-body text-foreground">
              The first release scaffold is deliberately centred on high-intent actions: a user sees a relevant nudge, opens Inbox, reviews the assistant’s recommendation, then accepts, edits, or rejects before anything changes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {productDecisions.map((decision) => (
              <div key={decision} className="rounded-lg border border-border p-6">
                <p className="typography-body text-foreground">{decision}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="typography-h5-demibold">Assistant actions this surface supports</h4>
            <ul className="list-disc pl-6 space-y-2">
              {assistantActions.map((action) => (
                <li key={action} className="typography-body text-foreground">
                  {action}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/codebaseuimobile.jpg"
            alt="Mobile code-first prototype for review and confirmation flows"
            width={960}
            height={720}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      id: "impact",
      title: "Impact",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="typography-h4-demibold">50% → 64%</h3>
              <p className="typography-body text-foreground">
                Categorised transactions increased through Inbox nudges encouraging users to review uncategorised transactions.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="typography-h4-demibold">80%</h3>
              <p className="typography-body text-foreground">
                Read rate for WhatsApp assistant/contextual nudges since release in April 2026.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="typography-h4-demibold">75%</h3>
              <p className="typography-body text-foreground">
                Reply rate for WhatsApp assistant/contextual nudges since release in April 2026.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "hindsight",
      title: "Hindsight",
      content: (
        <div className="space-y-4">
          <h3 className="typography-h4-demibold">What I would sharpen next</h3>
          <p className="typography-body text-foreground">
            If revisiting this today, I’d spend more time earlier on how agentic automations are explained. The core pattern worked, but user testing showed that comprehension and trust are the hard parts: users need to know why the assistant is suggesting something, what will happen next, and where they remain in control.
          </p>
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
            Designing an Inbox for Agentic Property Management
          </h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Problem statement</span> · GetGround needed to improve in-year bookkeeping and create a clearer home for assistant-led actions. The solution became a broader Inbox: one persistent surface for users to understand, review, and complete high-intent actions across their portfolio.
              </p>
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead Product Designer and product manager for the feature team. I owned the product framing, roadmap, delivery plan, code-first prototyping, user testing synthesis, and first-release interaction model.
              </p>
            </div>
          </div>

          <div className="animate-stagger-2">
            <Image
              src="/images/case-studies/gg-home-bk.jpg"
              alt="GetGround Inbox and assistant action case study hero"
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
        <div className="col-span-12 lg:col-span-9 lg:col-start-3">
          <Footer staggerClass="animate-stagger-7" />
        </div>
      </div>
    </>
  )
}
