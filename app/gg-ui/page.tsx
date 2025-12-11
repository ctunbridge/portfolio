/**
 * GG UI Case Study Page
 *
 * GetGround Platform Refresh - A comprehensive UI redesign case study
 * showcasing the modernization of GetGround's user platform.
 */
"use client"

import Image from "next/image"
import Link from "next/link"

import { CaseStudyLayout } from "@/components/layout/case-study-layout/case-study-layout"
import { Button } from "@/components/ui/button/button"
import { Footer } from "@/components/ui/footer/footer"
import { TopNav } from "@/components/ui/top-nav/top-nav"

export default function GGUIPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Portfolio", id: "portfolio" },
    { label: "GetGround AI", id: "getground-ai" },
    { label: "Transactions", id: "transactions" },
    { label: "Property details", id: "property-details" },
    { label: "Financial accounts", id: "financial-accounts" },
  ]

  const caseStudySections = [
    {
      id: "portfolio",
      title: "Portfolio",
      content: (
        <>
          <Image
            src="/images/case-studies/gg-ui/Portfolio UI Refresh.jpg"
            alt="Portfolio page UI refresh showing the new dashboard design"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mb-20"
          />

          <div className="space-y-4">
            <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
            <p className="typography-body text-foreground">
              The portfolio page is where the user lands after logging in. It
              needs to direct the user to what they need, when they need it, and
              alert them of anything that may need their attention.
            </p>
            <p className="typography-body text-foreground">
              To rethink the portfolio experience, we asked users what was
              most important to them, analyzed usage data, and planned for
              scalability. Quick actions were the most used elements,
              investment goals and taxes were top of mind, and we needed to
              scale for dynamic AI-driven experiences.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "getground-ai",
      title: "GetGround AI",
      content: (
        <>
          <div className="space-y-6 mb-20">
            <Image
              src="/images/case-studies/gg-ui/GGAI 1.jpg"
              alt="GetGround AI chat interface"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Image
                src="/images/case-studies/gg-ui/GG AI 2.jpg"
                alt="GetGround AI contextual suggestions"
                width={960}
                height={720}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/images/case-studies/gg-ui/GG AI 3.jpg"
                alt="GetGround AI dynamic UI panel"
                width={960}
                height={720}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
            <p className="typography-body text-foreground">
              The current AI experience is a simple chat where users can ask
              about property investment, GetGround's services, and perform basic
              tasks like downloading bank statements. As we integrate AI into
              the platform foundations, we need scalable and dynamic UI.
            </p>
            <p className="typography-body text-foreground">
              We reimagined how AI surfaces in the platform, starting with
              simple contextual patterns and dynamic UI; from side panels within
              transactions to model experiences that generate actions and reports
              based on portfolio, market, and user context.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "transactions",
      title: "Transactions",
      content: (
        <>
          <Image
            src="/images/case-studies/gg-ui/Transactions UI Refresh.jpg"
            alt="Transactions screen UI refresh"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mb-20"
          />

          <div className="space-y-4">
            <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
            <p className="typography-body text-foreground">
              The transactions screen functionality was still relevant in the
              new world, but needed updating to align with the rest of the
              platform. We made subtle changes to adopt the new design patterns
              and brand colours.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "property-details",
      title: "Property details",
      content: (
        <>
          <Image
            src="/images/case-studies/gg-ui/Property UI Refresh.jpg"
            alt="Property details page UI refresh"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mb-20"
          />

          <div className="space-y-4">
            <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
            <p className="typography-body text-foreground">
              Property details is one of the most important pages in the
              platform. It's where users manage the day-to-day of their
              investment, understand performance, and track their cashflow.
            </p>
            <p className="typography-body text-foreground">
              The previous iteration was overwhelmed with past experiments,
              leading to a noisy experience. The refresh focused on keeping what
              works, removing what was unnecessary, and creating a cleaner, more
              deliberate interface.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "financial-accounts",
      title: "Financial accounts",
      content: (
        <>
          <Image
            src="/images/case-studies/gg-ui/Financial Account UI Refresh.jpg"
            alt="Financial accounts screen UI refresh"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mb-20"
          />

          <div className="space-y-4">
            <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
            <p className="typography-body text-foreground">
              The financial account screen design was outdated, and much of the
              functionality (like profit per account) was irrelevant or even
              misleading.
            </p>
            <p className="typography-body text-foreground">
              User screen recordings and usage data showed the financial account
              screen was used for specific actions like depositing and sending
              money and downloading statements, rather than viewing insights. The
              refresh focused on utility, making actions clear and easy to find
              while removing noise.
            </p>
          </div>
          <div className="mt-30 lg:mt-45 flex">
            <Button variant="outline" asChild>
              <Link href="/sage-individual">Next project</Link>
            </Button>
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
          <h1 className="typography-h2-demibold">Platform UI refresh</h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <div className="space-y-4">
                <p className="typography-body text-foreground">
                  <span className="typography-body-bold">Problem Statement</span> ·{" "}
                  As GetGround aims for product-led growth by pivoting to a
                  subscription-based model with AI-enhanced features to support
                  the end-to-end investment journey, the user platform is becoming
                  an increasingly important part of our customer experience.
                </p>
                <p className="typography-body text-foreground">
                  Many areas of the platform are outdated or need deprecating,
                  products of previous experiments and iterations. The refresh
                  creates a foundation for GetGround's next stage by removing
                  what's no longer needed and bringing a cohesive design language
                  and user experience to what we'll keep and build on.
                </p>
              </div>

              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead Product Designer
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/gg-ui/GG-UI-Intro.jpg"
            alt="GetGround Platform Refresh overview showing before and after UI designs"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg"
          />
        </section>

        {/* Case Study Sections with Fixed Left Title */}
        <CaseStudyLayout sections={caseStudySections} />
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
