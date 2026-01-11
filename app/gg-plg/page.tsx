/**
 * GG PLG Case Study Page
 *
 * Enabling Product Led Growth - A comprehensive case study showcasing
 * GetGround's shift to product-led growth through onboarding optimization
 * and consistent design language.
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
    { label: "Refactoring onboarding", id: "refactoring-onboarding" },
    { label: "Design language", id: "design-language" },
  ]

  const caseStudySections = [
    {
      id: "refactoring-onboarding",
      title: "Refactoring onboarding",
      content: (
        <>
          <div className="space-y-4 mb-20">
            <h3 className="typography-h4-demibold">Identifying the problem</h3>
            <p className="typography-body text-foreground">
              Onboarding onto the GetGround platform had been built sales first, with the focus being on landlords who had already purchased a product, and simply setting up their account.
            </p>
            <p className="typography-body text-foreground">
              After running end to end customer journey experiments with Making Tax Digital as the hook, it quickly became obvious that the current first time use experience did not gather the right data at the right time to allow us to guide the user to the right product for them.
            </p>
            <p className="typography-body text-foreground">
              Conversion rates dropped as we asked users to find their own way as they moved deeper into the funnel.
            </p>
            <Image
              src="/images/case-studies/gg-plg/mtd-cx.jpg"
              alt="Customer experience data"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-plg/mtd-mixpanel.jpg"
              alt="Mixpanel analytics data"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="space-y-4 mb-20">
            <h3 className="typography-h4-demibold">Solving the problem</h3>
            <p className="typography-body text-foreground">
              Myself and the Growth team identified 3 areas we could reduce friction, steps, and collect and persist the correct data to create a more effective funnel.
            </p>
            <div className="space-y-4">
              <div>
                <p className="typography-body-bold text-foreground">Marketing website</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="typography-body text-foreground">
                    In the initial flow we would show users a quiz where they could determine MTD readiness. We cut this down from 7 vague questions to 4 that were more relevant and easier to complete. We also stored and persisted this data so it could be used later in the flow (such as the number of properties they own).
                  </li>
                </ul>
              </div>
              <div>
                <p className="typography-body-bold text-foreground">Sign up</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="typography-body text-foreground">
                    We a/b tested the sign up wall in different places within the flow, from the first thing a user sees when moving from the website into the app, to later in the flow when they are more engaged and committed.
                  </li>
                </ul>
              </div>
              <div>
                <p className="typography-body-bold text-foreground">Adding a property</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="typography-body text-foreground">
                    The previous flow was created to cater for limited company users, and so did not ask the most relevant question, the ownership of the property.
                  </li>
                  <li className="typography-body text-foreground">
                    This simple change allowed us to cut down and focus the MTD experience later in the funnel, and also allow us to suggest other services to users if MTD is not relevant to them, rather than disqualifying them completely
                  </li>
                </ul>
              </div>
            </div>
            <Image
              src="/images/case-studies/gg-plg/mtd-newflow1.jpg"
              alt="New onboarding flow - part 1"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-plg/mtd-newflow2.jpg"
              alt="New onboarding flow - part 2"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="space-y-6 mb-20">
            <h3 className="typography-h4-demibold">Outcomes</h3>
            <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-3">
              <div className="space-y-3">
                <h5 className="typography-h5-demibold">22% through top of funnel</h5>
                <p className="typography-body text-foreground">
                  After reworking the top of funnel quiz we noticed a 22% uplift in users making it through to sign up. Fewer and more relevant questions kept users engaged.
                </p>
              </div>
              <div className="space-y-3">
                <h5 className="typography-h5-demibold">38% more sign ups</h5>
                <p className="typography-body text-foreground">
                  From A/B testing we saw 30% more sign ups when the sign up wall was later in the flow, catching users when they are more invested.
                </p>
              </div>
              <div className="space-y-3">
                <h5 className="typography-h5-demibold">41% more funnel completions</h5>
                <p className="typography-body text-foreground">
                  By changing the add property flow we saw 41% more completions of the full flow, and of those users that didn't we were able to capture them elsewhere.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "design-language",
      title: "Creating a consistent design language",
      content: (
        <>
          <div className="space-y-4 mb-20">
            <h3 className="typography-h4-demibold">Current inconsistency</h3>
            <p className="typography-body text-foreground">
              When mapping out the customer journey on all the potential touch-points, we became alarmingly aware of the inconsistency in terms of brand, design language, and identity.
            </p>
            <p className="typography-body text-foreground">
              Product led growth requires a consistent brand awareness from meta ads, all the way through to the sign up or purchase point. Inconsistent identify erodes trust rapidly, leading to a fall in conversion throughout the funnel.
            </p>
            <Image
              src="/images/case-studies/gg-plg/brand-inconsistency1.jpg"
              alt="Brand inconsistency examples - part 1"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-plg/brand-inconsistency2.jpg"
              alt="Brand inconsistency examples - part 2"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <h3 className="typography-h4-demibold">Consistency, step by step</h3>
            <p className="typography-body text-foreground">
              We're still in this process, but as a design team we split focus across top of funnel - meta ads, sales decks, and the marketing site, and the platform. We first created a refreshed, stronger, and more recognisable brand identity, standardising the use of colour, dropping our outdated serif fonts, and refining the logo mark and text.
            </p>
            <p className="typography-body text-foreground">
              My main focus was on the platform refresh, updating the design system I curated to reflect the new brand, and introducing more consistent UI patterns and tools.
            </p>
            <Image
              src="/images/case-studies/gg-plg/capcom-ds.jpg"
              alt="Capcom design system"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-plg/brand-consistency1.jpg"
              alt="Brand consistency examples - part 1"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-plg/brand-consistency2.jpg"
              alt="Brand consistency examples - part 2"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </>
      ),
    },
  ]

  return (
    <>
      <TopNav items={navItems} />

      <div className="space-y-100 pt-40">
        {/* Introduction Section */}
        <section id="introduction" className="space-y-8">
          <h1 className="typography-h2-demibold">Enabling Product Led Growth</h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <div className="space-y-4">
                <p className="typography-body text-foreground">
                  <span className="typography-body-bold">Background</span> ·{" "}
                  GetGround is a prop-tech SAAS, aiming to democratise property ownership by offering both personal and limited company services such as financial management, lettings, mortgages, and portfolio optimisation.
                </p>
                <p className="typography-body text-foreground">
                  <span className="typography-body-bold">Problem Statement</span> ·{" "}
                  With the move to product led growth we introduced a number of new features, new subscriptions including a free tier, and opened up the platform to both personal and limited company landlords, supporting an end to end investment journey
                </p>
                <p className="typography-body text-foreground">
                  Many areas of the platform are the outcome of previous experiments and iterations, that are either out of date or need deprecating. We needed to create a foundation for the next stage of user growth by removing what is no longer needed, bringing in a cohesive design language and user experience, and crucially amending onboarding flows that do not facilitate onward free to paid journeys.
                </p>
              </div>

              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead Product Designer
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/gg-plg/gg-plg-intro.jpg"
            alt="GetGround Platform Refresh overview showing before and after UI designs"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg"
          />
        </section>

        {/* Case Study Sections with Fixed Left Title */}
        <CaseStudyLayout sections={caseStudySections} />

        {/* Next Project Button */}
        <div className="flex justify-center mt-30 lg:mt-45">
          <Button variant="outline" asChild>
            <Link href="/gg-bookkeeping">Next project</Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-12 mt-80 pb-40">
        <div className="col-span-12 lg:col-span-9 lg:col-start-3">
          <Footer />
        </div>
      </div>
    </>
  )
}
