/**
 * GG PLG Case Study Page
 *
 * Intent-led onboarding and mortgage growth case study for GetGround.
 */
"use client"

import Image from "next/image"
import Link from "next/link"

import { CaseStudyLayout } from "@/components/layout/case-study-layout/case-study-layout"
import { Button } from "@/components/ui/button/button"
import { Footer } from "@/components/ui/footer/footer"
import { TopNav } from "@/components/ui/top-nav/top-nav"

const onboardingDecisions = [
  "Capture enough property context to understand the user’s investment stage.",
  "Avoid forcing a long data-entry flow before users see value.",
  "Personalise onward journeys based on ownership type and buying/refinancing intent.",
  "Use property and mortgage details to create product-led mortgage opportunities.",
]

export default function GGPLGPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Problem", id: "problem" },
    { label: "Flow", id: "flow" },
    { label: "Mortgages", id: "mortgages" },
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
              Users were adding an address, not a useful property profile
            </h3>
            <p className="typography-body text-foreground">
              GetGround knew landlords usually hold more than one property, but the platform’s cohort of one-property users did not match that reality. Users often added an address and then stopped before adding the details needed to understand what the property meant to them, how they owned it, or what stage of the investment journey they were in.
            </p>
            <p className="typography-body text-foreground">
              That meant the product could not personalise next steps properly, and GetGround was missing mortgage intent and portfolio context that could create higher-quality product-led opportunities.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-plg/mtd-cx.jpg"
            alt="Customer journey and funnel analysis for property onboarding"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
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
              From generic onboarding to intent-led journeys
            </h3>
            <p className="typography-body text-foreground">
              The old onboarding treated users too generically and showed too many possible next steps to everyone. The redesign moved from “add an address” to “understand the user’s property context”: capture the minimum details needed to identify intent, then show clearer onward journeys based on investment stage and ownership type.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {onboardingDecisions.map((decision) => (
              <div key={decision} className="rounded-lg border border-border p-6">
                <p className="typography-body text-foreground">{decision}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Image
              src="/images/case-studies/gg-plg/mtd-newflow1.jpg"
              alt="Intent-led onboarding flow part 1"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <Image
              src="/images/case-studies/gg-plg/mtd-newflow2.jpg"
              alt="Intent-led onboarding flow part 2"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="space-y-4">
            <h4 className="typography-h5-demibold">One trade-off, kept simple</h4>
            <p className="typography-body text-foreground">
              We considered gathering more property detail upfront, but chose the minimum detail needed to identify user intent and defer the rest until it became contextually relevant. This avoided turning onboarding into a long data-entry flow while still giving the product enough signal to personalise next steps.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "mortgages",
      title: "Mortgages",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Turning property context into mortgage intent
            </h3>
            <p className="typography-body text-foreground">
              The redesigned flow created two product-led mortgage opportunity paths: existing users with mortgage details could receive remortgage nudges, while users adding a property they were buying could book a mortgage call at the moment their intent was clearest.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border p-6 space-y-3">
              <h4 className="typography-h5-demibold">Remortgage engine</h4>
              <p className="typography-body text-foreground">
                Encourage users who already had a mortgage to add details, then use that information to surface relevant remortgage nudges.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6 space-y-3">
              <h4 className="typography-h5-demibold">Buying journey</h4>
              <p className="typography-body text-foreground">
                When a user added a property they were buying, the product could route them into a book-a-mortgage-call journey.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "impact",
      title: "Impact",
      content: (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="typography-h4-demibold">1.71 → 2.31</h3>
            <p className="typography-body text-foreground">
              Average properties per user increased after the March 2026 release.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="typography-h4-demibold">40%</h3>
            <p className="typography-body text-foreground">
              Increase in property additions after the onboarding changes.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="typography-h4-demibold">50%</h3>
            <p className="typography-body text-foreground">
              More HubSpot mortgage deals from product-led journeys than current sales-led channels.
            </p>
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
            If revisiting this today, I’d push the intent-led model further by testing more distinct paths for users who are buying, refinancing, or simply managing an existing portfolio, rather than relying on one primary onboarding structure.
          </p>
          <div className="mt-30 lg:mt-45 flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/gg-bookkeeping">Next project</Link>
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
            Intent-led Onboarding for Property and Mortgage Growth
          </h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Problem statement</span> · Users were adding properties without enough context for GetGround to understand their ownership type, buying stage, or mortgage opportunity. The redesign captured the minimum useful details earlier, then routed users into clearer next steps.
              </p>
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead Product Designer and product manager for the feature team. I set the roadmap, defined the delivery plan, and led the design work across problem framing, journey design, onboarding interaction design, and product-led mortgage opportunity mapping.
              </p>
            </div>
          </div>

          <div className="animate-stagger-2">
            <Image
              src="/images/case-studies/gg-plg/gg-plg-intro.jpg"
              alt="GetGround intent-led onboarding overview"
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
