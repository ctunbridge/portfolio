/**
 * GG PLG Case Study Page
 *
 * Intent-led onboarding and product led growth case study for GetGround.
 */
"use client"

import Image from "next/image"
import Link from "next/link"

import { CaseStudyLayout } from "@/components/layout/case-study-layout/case-study-layout"
import { Button } from "@/components/ui/button/button"
import { Footer } from "@/components/ui/footer/footer"
import { TopNav } from "@/components/ui/top-nav/top-nav"

export default function GGPLGPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Problem", id: "problem" },
    { label: "Rethinking adding a property", id: "rethinking-adding-a-property" },
    { label: "Impact", id: "impact" },
    { label: "What's next", id: "whats-next" },
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
              Landlords typically hold two or more properties; GetGround users averaged 1.7. Users added an address and stopped before sharing ownership type or investment stage, so the product could not personalise next steps or create product-led opportunities in mortgage, insurance, or lettings.
            </p>
            <p className="typography-body text-foreground">
              I analysed the onboarding journey and found two issues: no value exchange after adding a property, and cognitive overload on the property details screen with no clear onward journey.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-plg/PLGProblem.jpg"
            alt="Current journey analysis alongside current property details screen"
            width={2560}
            height={1452}
            className="h-auto w-full rounded-lg"
            unoptimized
            loading="lazy"
          />

          <div className="!mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4 lg:pt-10">
              <h5 className="typography-h5-demibold text-foreground">
                Digging into the data
              </h5>
              <p className="typography-body text-foreground">
                Between Jan 2025 and Jan 2026, only 39% of signups confirmed how they owned their property.
              </p>
              <p className="typography-body text-foreground">
                73% never confirmed ownership.
              </p>
              <p className="typography-body text-foreground">
                Of the 952 who confirmed, 95% incorporated a company, a required step.
              </p>
              <p className="typography-body text-foreground">
                Only 16.6% of confirmed users connected open banking or HMRC.
              </p>
              <p className="typography-body text-foreground">
                Just 142 users (3.9% of signups) completed all five journey stages.
              </p>
              <p className="typography-body text-foreground">
                Without property context, we cannot convert free users to paying users.
              </p>
            </div>
            <Image
              src="/images/case-studies/gg-plg/PLGData.jpg"
              alt="Signup to confirmed ownership conversion rate and post-confirmation user funnel"
              width={1560}
              height={1528}
              className="h-auto w-full rounded-lg"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      id: "rethinking-adding-a-property",
      title: "Rethinking adding a property",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Creating an intent-led adding experience
            </h3>
            <p className="typography-body text-foreground">
              The old empty portfolio flow treated every user the same and surfaced too many next steps. The redesign moved from adding an address to understanding property context: capture the minimum details to identify intent, then route users into clearer journeys based on investment stage and ownership type.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-plg/PLGPortfolioDesign.jpg"
            alt="Old empty portfolio flow compared to redesigned intent-led dashboard"
            width={2560}
            height={1452}
            className="h-auto w-full rounded-lg"
            unoptimized
            loading="lazy"
          />

          <div className="mt-30 lg:mt-45">
            <Image
              src="/images/case-studies/gg-plg/PLGGetStartedDesign.jpg"
              alt="Intent-led get started flow with investment journey segmentation"
              width={2560}
              height={2282}
              className="h-auto w-full rounded-lg"
              unoptimized
              loading="lazy"
            />
          </div>

          <div className="mt-30 lg:mt-45 space-y-4">
            <h3 className="typography-h4-demibold">Gathering data in context</h3>
            <p className="typography-body text-foreground">
              As a fast follow to the main engineering work, I shipped a data-gathering experiment for users adding a property they were buying: test whether they would add financing details, or book a call if not yet financed. This was the start of context-led follow-on journeys that create value for users and the business.
            </p>
            <Image
              src="/images/case-studies/gg-plg/PLGBuyingCards.jpg"
              alt="Buying property card implementation in code alongside portfolio with mortgage call CTAs"
              width={2560}
              height={1452}
              className="mt-8 h-auto w-full rounded-lg"
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="typography-h4-demibold">
              Properties per user increased by 30%
            </h3>
            <p className="typography-body text-foreground">
              After a mid-March release, properties per user rose from 1.7 to 2.2.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="typography-h4-demibold">
              Financial data connection rate increased by 100%
            </h3>
            <p className="typography-body text-foreground">
              Financial data connections doubled: from 8% between Jan 2025 and Jan 2026 to 17.5% after March.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "whats-next",
      title: "What's next",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="typography-h4-demibold">
                Experiment with the data we have
              </h3>
              <p className="typography-body text-foreground">
                We will test what data matters most through in-product experiments: remortgage nudges, income and expense reviews, and insurance renewals. Once we know what captures users, we can build a more complete experience.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="typography-h4-demibold">Encourage data gathering</h3>
              <p className="typography-body text-foreground">
                We know which data points matter and how they map to jobs to be done, but we need to collect them better. Only 10% of properties have mortgage fixed-term end dates, a crucial input for mortgage services.
              </p>
            </div>
          </div>
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
            Product led growth through intent-led onboarding
          </h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 space-y-6 lg:col-span-9">
              <p className="typography-body text-foreground">
                GetGround is a prop-tech SaaS democratising property ownership through financial management, lettings, mortgages, and portfolio optimisation for personal and limited company landlords.
              </p>
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Problem statement</span>{" "}
                · Users were adding properties without enough context for GetGround to understand ownership type, buying stage, or mortgage opportunity. The redesign captured minimum useful details earlier, then routed users into clearer next steps.
              </p>
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead Product
                Designer and Product Manager
              </p>
            </div>
          </div>

          <div className="animate-stagger-2">
            <Image
              src="/images/case-studies/gg-plg/GG-PLG-Intro.jpg"
              alt="GetGround intent-led onboarding dashboard with ownership type modal"
              width={5120}
              height={3200}
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
