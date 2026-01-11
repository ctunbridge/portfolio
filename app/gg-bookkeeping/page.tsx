/**
 * GG Bookkeeping Case Study Page
 *
 * Bookkeeping & Making Tax Digital - A comprehensive case study showcasing
 * the development of GetGround's bookkeeping and MTD features.
 */
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button/button"
import { CaseStudyLayout } from "@/components/layout/case-study-layout/case-study-layout"
import { Footer } from "@/components/ui/footer/footer"
import { TopNav } from "@/components/ui/top-nav/top-nav"
import { cn } from "@/lib/utils"

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

function ProductPrinciplesSection() {
  const [activePrinciple, setActivePrinciple] = React.useState(0)
  const sectionRef = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) {
          setIsVisible(entry.isIntersecting)
        }
      },
      {
        threshold: [0, 0.1],
        rootMargin: "-20% 0px -20% 0px",
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      const scrollableDistance = sectionHeight - viewportHeight
      const scrolledIntoSection = -rect.top

      if (scrolledIntoSection < 0) {
        setActivePrinciple(0)
        return
      }

      if (scrolledIntoSection > scrollableDistance) {
        setActivePrinciple(2)
        return
      }

      const progress = scrolledIntoSection / scrollableDistance
      const principleIndex = Math.min(2, Math.floor(progress * 3))
      setActivePrinciple(principleIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="product-principles"
      ref={sectionRef}
      className="relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Sticky title - desktop only */}
        <div className="hidden lg:block lg:col-span-4">
          <div className="sticky top-70 transition-opacity duration-500">
            <h2
              className={cn(
                "typography-h4-normal transition-opacity duration-500",
                isVisible ? "opacity-100" : "opacity-0"
              )}
            >
              Product principles
            </h2>
          </div>
        </div>

        {/* Content - Cycling principles */}
        <div className="col-span-1 lg:col-span-8">
          {/* Mobile/Tablet title */}
          <h2 className="typography-h3-demibold lg:hidden mb-8">Product principles</h2>

          <div className="sticky top-40 h-screen flex items-center">
            <div className="w-full space-y-6">
              {/* Current principle title and description */}
              <div className="relative min-h-[200px]">
                {principles.map((principle, index) => (
                  <div
                    key={principle.number}
                    className={cn(
                      "absolute top-0 left-0 right-0 transition-all duration-500 space-y-4",
                      activePrinciple === index
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    )}
                  >
                    <h3 className="typography-h4-demibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="typography-body text-foreground">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress indicators */}
              <div className="flex gap-2">
                {principles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePrinciple(index)}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      activePrinciple === index
                        ? "w-12 bg-foreground"
                        : "w-8 bg-muted-foreground/30"
                    )}
                    aria-label={`Go to principle ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function GGBookkeepingPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Product principles", id: "product-principles" },
    { label: "Impact model", id: "impact-model" },
    { label: "Discovery", id: "discovery" },
    { label: "Ideation", id: "ideation" },
    { label: "Delivery", id: "delivery" },
    { label: "Build", id: "build" },
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
      id: "impact-model",
      title: "Impact model",
      content: (
        <>
          <div className="space-y-4 mb-8">
            <h3 className="typography-h4-demibold">Data-backed decisions</h3>
            <p className="typography-body text-foreground">
              Maximising the impact of a large project is essential for
              GetGround&apos;s short-term and long-term business ambitions. Working with
              our product managers, we built a model to understand how many
              users we could capture (conservatively and aggressively) and the
              resulting revenue. Using real market data helped us present a
              strong value proposition to business leaders.
            </p>
          </div>
          <Image
            src="/images/case-studies/gg-bookkeeping/mtd-model.jpg"
            alt="Making Tax Digital impact model showing revenue projections"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mb-8"
          />
        </>
      ),
    },
    {
      id: "discovery",
      title: "Discovery",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Current frustrations and new needs
            </h3>
            <p className="typography-body text-foreground">
              We&apos;d established that the market was there for a more
              comprehensive bookkeeping experience that included Making Tax
              Digital. Next, we needed to understand the current frustrations
              users face with tax and bookkeeping and the new technical and
              user-facing requirements this would bring.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/ballpark.jpg"
            alt="Discovery research and user insights"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="space-y-12">
            <div className="space-y-4 mt-30 lg:mt-45">
              <h3 className="typography-h4-demibold">User sentiment</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    80% of landlords still rely on spreadsheets (not compatible
                    with MTD)
                  </p>
                  <p className="typography-body text-foreground">
                    Landlords want clarity without complexity when making tax
                    submissions. Common pain points centred around lack of
                    correct figures, which figures to use, and how to find them
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    60% of users handle their own self assessments
                  </p>
                  <p className="typography-body text-foreground">
                    The majority of landlords prefer to manage much of their
                    bookkeeping and tax themselves, rather than appoint an
                    accountant
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    35% said they were not aware of Making Tax Digital
                  </p>
                  <p className="typography-body text-foreground">
                    MTD is not on every landlord&apos;s radar, and not well
                    understood, of those who were familiar, there was mixed
                    understanding of what was required from them.
                  </p>
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
                    The current transactions list is too basic to provide
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
          </div>
        </>
      ),
    },
    {
      id: "ideation",
      title: "Ideation and testing",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Journey mapping & technical implementation
            </h3>
            <p className="typography-body text-foreground">
              As a full product team, engineering included, we mapped out each
              journey for both bookkeeping and MTD to understand how to bring
              together the identified user needs and technical constraints at
              the same time.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <Image
              src="/images/case-studies/gg-bookkeeping/technical-whiteboard.jpg"
              alt="Technical whiteboard showing journey mapping and user flows"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-bookkeeping/service-blueprint.jpg"
              alt="Service blueprint mapping the bookkeeping experience"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="space-y-4 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">Interactive prototyping</h3>
            <p className="typography-body text-foreground">
              We move fast at GetGround, so ideation, prototyping, and
              testing had to be efficient. I focused on the largest unknown,
              Making Tax Digital submissions, and created a code-first
              prototype to test with users.
            </p>
            <p className="typography-body text-foreground">
              I wanted to understand how users would find the quarterly
              submission cadence, and test how sentiment changed towards MTD
              before and after making submissions within the prototype.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/ut-make.jpg"
            alt="User testing the Making Tax Digital prototype"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mb-20"
          />

          <div className="space-y-8">
            <div className="space-y-2">
              <p className="typography-h5-demibold text-foreground">
                40% confidence uplift
              </p>
              <p className="typography-body text-foreground">
                Before using the prototype only 20% of participants said they
                were confident with MTD changes, after 60% said they were
                confident with the MTD changes, a jump of 40%.
              </p>
            </div>
            <div className="space-y-2">
              <p className="typography-h5-demibold text-foreground">
                90% clarity
              </p>
              <p className="typography-body text-foreground">
                90% of participants said it was clear what needed to be
                submitted and when while looking at the Personal Tax screen
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "delivery",
      title: "Code first delivery",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">
              Next.js & Tailwind, directly in our codebase
            </h3>
            <p className="typography-body text-foreground">
              Using Cursor, I created the core Bookkeeping and MTD front-end in
              our codebase. This approach let me craft the experience beyond what's
              possible in Figma, use real data and staging accounts to validate
              design decisions, save engineering time, and raise the
              quality of our overall output.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <Image
              src="/images/case-studies/gg-bookkeeping/codebaseui.jpg"
              alt="Bookkeeping UI built directly in the codebase"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-bookkeeping/codebaseuimobile.jpg"
              alt="Mobile view of the codebase UI"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-bookkeeping/cursor-ci.jpg"
              alt="Using Cursor and CI for development"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="space-y-4 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">Supplementary designs</h3>
            <p className="typography-body text-foreground">
              Alongside the feature branch, I delivered a comprehensive set of
              designs in Figma to fill in the gaps, giving engineers a full
              understanding of the experience from both a technical and design
              perspective.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10 mt-8">
            <Image
              src="/images/case-studies/gg-bookkeeping/figmadesign2.jpg"
              alt="Additional Figma design specifications"
              width={1280}
              height={500}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-bookkeeping/figmadesign1.jpg"
              alt="Supplementary Figma designs for bookkeeping"
              width={640}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </>
      ),
    },
    {
      id: "build",
      title: "Build",
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">Developer support</h3>
            <p className="typography-body text-foreground">
              With the feature branch and comprehensive designs in place,
              I focused support during build on smaller, more deliberate
              decision-making, enabling higher quality output compared to
              previous features.
            </p>
          </div>
          <div className="space-y-4 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">UXQA</h3>
            <p className="typography-body text-foreground">
              This approach delivered significantly higher quality output in UXQA,
              with fewer UI bugs and differences from the intended design.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "impact",
      title: "Impact",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="typography-h4-demibold">Initial usage</h3>
            <p className="typography-body text-foreground">
              We broke delivery into phases to provide value without overwhelming
              users, launching Bookkeeping first with MTD to follow.
            </p>
            <p className="typography-body text-foreground">
              We're tracking organic traffic to understand how landlords use
              the feature compared to the old transactions list. Bookkeeping
              usage is steadily increasing while the previous transactions page
              remains static.
            </p>
            <p className="typography-body text-foreground">
              Combined with NPS capture, the data shows the feature gaining
              steady adoption.
            </p>
            <p className="typography-body text-foreground">
              We've also seen strong appetite for Making Tax Digital, with
              a ~9% CTR on emails and ~35% of recipients signing up to the MTD
              waitlist.
            </p>
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/mixpanel.jpg"
            alt="Analytics dashboard showing bookkeeping feature usage"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mb-8"
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
            <h3 className="typography-h4-demibold">Bookkeeping x AI</h3>
            <p className="typography-body text-foreground">
              Combined with other foundational features, including open
              banking, enhanced transaction management, and insight
              improvements, we are now in the position to start bringing
              smarter, AI-enhanced, experiences into the Bookkeeping
              experience. Discovery work is ongoing, but user data is showing
              a desire for deeper and more personal experiences powered by
              AI.
            </p>
          </div>
          <div className="space-y-4 mt-30 lg:mt-45">
            <h3 className="typography-h4-demibold">MTD April 2026</h3>
            <p className="typography-body text-foreground">
              The first cohort of landlords who must use MTD starts in April 2026 (income over £50k). The design and engineering work we have done so far means we are now recognised as an MTD developer by HMRC, the next step is to put our MTD solution into the hands of our users.
            </p>
          </div>
          <div className="mt-30 lg:mt-45 flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/sage-individual">Next project</Link>
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
        {/* Introduction Section */}
        <section id="introduction" className="space-y-8">
          <h1 className="typography-h2-demibold">
            Bookkeeping & Tax
          </h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Problem Statement</span> ·{" "}
                As a landlord, I need to keep track of and manage my income and
                expenses, understand my tax obligations, and submit my self-assessment
                online according to HMRC&apos;s Making Tax Digital rules.
              </p>

              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead Product
                Designer
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/gg-hero-bk.jpg"
            alt="GetGround Bookkeeping and Making Tax Digital overview"
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
