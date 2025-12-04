/**
 * GG UI Case Study Page
 *
 * GetGround Platform Refresh - A comprehensive UI redesign case study
 * showcasing the modernization of GetGround's user platform.
 */
"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button/button"
import { Footer } from "@/components/ui/footer/footer"
import { TopNav } from "@/components/ui/top-nav/top-nav"

export default function GGUIPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Portfolio", id: "portfolio" },
    { label: "GetGround AI", id: "getground-ai" },
    { label: "Transactions", id: "transactions" },
    { label: "Property Details", id: "property-details" },
    { label: "Financial Accounts", id: "financial-accounts" },
  ]

  return (
    <>
      <TopNav items={navItems} />

      <div className="space-y-45 md:space-y-65 lg:space-y-80 pt-40">
        {/* Introduction Section */}
        <section id="introduction" className="space-y-8">
          <h1 className="typography-h2-demibold">GetGround Platform Refresh</h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <div className="space-y-4">
                <p className="typography-body text-foreground">
                  <span className="typography-body-bold">Problem Statement</span> ·{" "}
                  As GetGround aims for product led growth by pivoting to a
                  subscription based model, with AI enhanced features to support
                  the end to end investment journey, the user platform is becoming
                  an increasingly important part of our customer experience.
                </p>
                <p className="typography-body text-foreground">
                  Many areas of the platform are the product of previous
                  experiments and iterations, that are either out of date or need
                  deprecating. The refresh aims to create a foundation for the
                  next stage of GetGround by removing what is no longer needed,
                  and bringing a cohesive design language and user experience to
                  what will be kept and built on for the future.
                </p>
              </div>

              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead Product Designer
              </p>
            </div>
          </div>

          <img
            src="/images/case-studies/gg-ui/GG-UI-Intro.jpg"
            alt="GetGround Platform Refresh overview showing before and after UI designs"
            className="w-full h-auto rounded-lg"
          />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="space-y-8">
          <h2 className="typography-h3-demibold">Portfolio</h2>

          <img
            src="/images/case-studies/gg-ui/Portfolio UI Refresh.jpg"
            alt="Portfolio page UI refresh showing the new dashboard design"
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
              <p className="typography-body text-foreground">
                The portfolio page is where the user lands after logging in. It
                needs to direct the user to what they need, when they need it, and
                alert them of anything that may need their attention.
              </p>
              <p className="typography-body text-foreground">
                When rethinking the portfolio experience we asked users what was
                most important to them, looked at the data to understand current
                usage, and looked ahead in order to create a scalable experience.
                We found that the current quick actions were the most used
                elements of the screen, investment goals, and taxes were top of
                mind, and we needed to scale for the introduction of dynamic AI
                driven experiences.
              </p>
            </div>
          </div>
        </section>

        {/* GetGround AI Section */}
        <section id="getground-ai" className="space-y-8">
          <h2 className="typography-h3-demibold">GetGround AI</h2>

          <div className="space-y-6 lg:space-y-10 mt-12 mb-15">
            <img
              src="/images/case-studies/gg-ui/GGAI 1.jpg"
              alt="GetGround AI chat interface"
              className="w-full h-auto rounded-lg"
            />
            <div className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2">
              <img
                src="/images/case-studies/gg-ui/GG AI 2.jpg"
                alt="GetGround AI contextual suggestions"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="/images/case-studies/gg-ui/GG AI 3.jpg"
                alt="GetGround AI dynamic UI panel"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
              <p className="typography-body text-foreground">
                The current AI experience is a simple chat where the user can ask
                about property investment, the services GetGround can provide, and
                perform basic tasks such as downloading a bank statement. As we
                weave AI into the foundations of the platform we need scalable and
                dynamic UI to allow for this.
              </p>
              <p className="typography-body text-foreground">
                We have therefore completely reimagined how AI surfaces in the
                platform, starting with simple patterns that can surface in
                context, dynamic UI, from the side panel within transactions, to
                model experience that generates actions and reports based on
                portfolio, market and user context.
              </p>
            </div>
          </div>
        </section>

        {/* Transactions Section */}
        <section id="transactions" className="space-y-8">
          <h2 className="typography-h3-demibold">Transactions</h2>

          <img
            src="/images/case-studies/gg-ui/Transactions UI Refresh.jpg"
            alt="Transactions screen UI refresh"
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
              <p className="typography-body text-foreground">
                The transactions screen functionality was still relevant in the
                new world, however the feature needed updating to bring it in line
                with the rest of the platform. Subtle changes have been made to
                use the new design patterns and brand colours.
              </p>
            </div>
          </div>
        </section>

        {/* Property Details Section */}
        <section id="property-details" className="space-y-8">
          <h2 className="typography-h3-demibold">Property Details</h2>

          <img
            src="/images/case-studies/gg-ui/Property UI Refresh.jpg"
            alt="Property details page UI refresh"
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
              <p className="typography-body text-foreground">
                Property details is one of the most important pages in the
                platform, it is where the user can manage the day to day of their
                investment, understand performance, and understand their cashflow.
              </p>
              <p className="typography-body text-foreground">
                The previous iteration was overwhelmed with previous experiments,
                leading to a noisy and overwhelming experience. The refresh
                focussed on keeping what works, removing what was unnecessary, and
                creating a cleaner more deliberate interface.
              </p>
            </div>
          </div>
        </section>

        {/* Financial Accounts Section */}
        <section id="financial-accounts" className="space-y-8">
          <h2 className="typography-h3-demibold">Financial Accounts</h2>

          <img
            src="/images/case-studies/gg-ui/Financial Account UI Refresh.jpg"
            alt="Financial accounts screen UI refresh"
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">What&apos;s changed?</h3>
              <p className="typography-body text-foreground">
                Other than the design of the financial account screen being out of
                date in terms of design, much of the functionality, such as seeing
                profit per account, was not relevant and even misleading.
              </p>
              <p className="typography-body text-foreground">
                User screen recordings and usage data showed that the financial
                account screen was used for frequent and specific actions such as
                depositing and sending money, and downloading statements, rather
                than viewing insights. The refresh therefore focussed on the
                utility of the screen, making actions clear and easy to find, and
                removing noise.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Next Project Button */}
      <div className="mt-60 flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/sage-individual">Next project</Link>
        </Button>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-12 mt-40 pb-40">
        <div className="col-span-12 lg:col-span-9 lg:col-start-3">
          <Footer />
        </div>
      </div>
    </>
  )
}
