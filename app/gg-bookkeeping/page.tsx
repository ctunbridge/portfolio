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
import { cn } from "@/lib/utils"
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

function ProductPrinciplesSection() {
  const [activePrinciple, setActivePrinciple] = React.useState(0)
  const sectionRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate how far we've scrolled through the section
      // Section starts when top of section reaches top of viewport
      // Section ends when bottom of section reaches top of viewport
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

      // Calculate progress (0 to 1) through the scrollable area
      const progress = scrolledIntoSection / scrollableDistance
      // Map to principle index (0, 1, or 2)
      const principleIndex = Math.min(2, Math.floor(progress * 3))
      setActivePrinciple(principleIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="product-principles"
      ref={sectionRef}
      className="relative my-20 md:my-30 lg:my-40 h-[120vh] md:h-[150vh] lg:h-[200vh]"
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full">

          <div className="grid grid-cols-12 gap-8">
            {/* Left side - Principle titles */}
            <div className="col-span-12 lg:col-span-7 space-y-6">
              {principles.map((principle, index) => (
                <button
                  key={principle.number}
                  onClick={() => setActivePrinciple(index)}
                  className={cn(
                    "block text-left transition-all duration-300",
                    activePrinciple === index
                      ? "typography-h5-demibold text-foreground"
                      : "typography-h5-normal text-muted-foreground"
                  )}
                >
                  {principle.title}
                </button>
              ))}
            </div>

            {/* Right side - Active principle description */}
            <div className="col-span-12 lg:col-span-5">
              <div className="relative min-h-[120px]">
                {principles.map((principle, index) => (
                  <p
                    key={principle.number}
                    className={cn(
                      "typography-body text-foreground absolute top-0 left-0 right-0 transition-all duration-500",
                      activePrinciple === index
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    )}
                  >
                    {principle.description}
                  </p>
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
    { label: "Product Principles", id: "product-principles" },
    { label: "Impact Model", id: "impact-model" },
    { label: "Discovery", id: "discovery" },
    { label: "Ideation", id: "ideation" },
    { label: "Delivery", id: "delivery" },
    { label: "Build", id: "build" },
    { label: "Impact", id: "impact" },
    { label: "Next Steps", id: "next-steps" },
  ]

  return (
    <>
      <TopNav items={navItems} />

      <div className="space-y-45 md:space-y-65 lg:space-y-80 pt-40">
        {/* Introduction Section */}
        <section id="introduction" className="space-y-8">
          <h1 className="typography-h2-demibold">
            Bookkeeping & Making Tax Digital
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
            src="/images/case-studies/gg-bookkeeping/GG Hero - BK.jpg"
            alt="GetGround Bookkeeping and Making Tax Digital overview"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg"
          />
        </section>

        {/* Product Principles Section */}
        <ProductPrinciplesSection />

        {/* Impact Model Section */}
        <section id="impact-model" className="space-y-8">
          <h2 className="typography-h3-demibold">Impact Model</h2>

          <Image
            src="/images/case-studies/gg-bookkeeping/MTD Model.jpg"
            alt="Making Tax Digital impact model showing revenue projections"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
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
          </div>
        </section>

        {/* Discovery Section */}
        <section id="discovery" className="space-y-8">
          <h2 className="typography-h3-demibold">Discovery</h2>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
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
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/Ballpark.jpg"
            alt="Discovery research and user insights"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />

          {/* User Sentiment & Platform Requirements - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Sentiment Stats */}
            <div className="space-y-4">
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

            {/* Platform Requirements */}
            <div className="space-y-4">
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
        </section>

        {/* Ideation and Testing Section */}
        <section id="ideation" className="space-y-8">
          <h2 className="typography-h3-demibold">Ideation and Testing</h2>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
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
          </div>

          {/* Journey Mapping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-12 mb-40">
            <Image
              src="/images/case-studies/gg-bookkeeping/Technical Whiteboard.jpg"
              alt="Technical whiteboard showing journey mapping and user flows"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/gg-bookkeeping/Service Blueprint.jpg"
              alt="Service blueprint mapping the bookkeeping experience"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Interactive Prototyping */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
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
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/UT Make.jpg"
            alt="User testing the Making Tax Digital prototype"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />

          {/* Data Points */}
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 space-y-2">
              <p className="typography-h5-demibold text-foreground">
                40% confidence uplift
              </p>
              <p className="typography-body text-foreground">
                Before using the prototype only 20% of participants said they
                were confident with MTD changes, after 60% said they were
                confident with the MTD changes, a jump of 40%.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 space-y-2">
              <p className="typography-h5-demibold text-foreground">
                90% clarity
              </p>
              <p className="typography-body text-foreground">
                90% of participants said it was clear what needed to be
                submitted and when while looking at the Personal Tax screen
              </p>
            </div>
          </div>
        </section>

        {/* Code First Delivery Section */}
        <section id="delivery" className="space-y-8">
          <h2 className="typography-h3-demibold">Code first delivery</h2>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
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
          </div>

          {/* Codebase Images */}
          <div className="space-y-6 lg:space-y-10 mt-12 mb-40">
            <Image
              src="/images/case-studies/gg-bookkeeping/CodebaseUI.jpg"
              alt="Bookkeeping UI built directly in the codebase"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
            />
            <div className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2">
              <Image
                src="/images/case-studies/gg-bookkeeping/CodebaseUIMobile.jpg"
                alt="Mobile view of the codebase UI"
                width={960}
                height={720}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/images/case-studies/gg-bookkeeping/Cursor&CI.jpg"
                alt="Using Cursor and CI for development"
                width={960}
                height={720}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Supplementary Designs */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">Supplementary designs</h3>
              <p className="typography-body text-foreground">
                Alongside the feature branch, I delivered a comprehensive set of
                designs in Figma to fill in the gaps, giving engineers a full
                understanding of the experience from both a technical and design
                perspective.
              </p>
            </div>
          </div>

          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-12 mb-15">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
              <Image
                src="/images/case-studies/gg-bookkeeping/FigmaDesign2.jpg"
                alt="Additional Figma design specifications"
                width={1280}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <Image
                src="/images/case-studies/gg-bookkeeping/FigmaDesign1.jpg"
                alt="Supplementary Figma designs for bookkeeping"
                width={640}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Build Section */}
        <section id="build" className="space-y-8">
          <h2 className="typography-h3-demibold">Build</h2>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 space-y-4">
              <h3 className="typography-h4-demibold">Developer Support</h3>
              <p className="typography-body text-foreground">
                With the feature branch and comprehensive designs in place,
                I focused support during build on smaller, more deliberate
                decision-making, enabling higher quality output compared to
                previous features.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 space-y-4">
              <h3 className="typography-h4-demibold">UXQA</h3>
              <p className="typography-body text-foreground">
                This approach delivered significantly higher quality output in UXQA,
                with fewer UI bugs and differences from the intended design.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="space-y-8">
          <h2 className="typography-h3-demibold">Impact</h2>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">Initial Usage</h3>
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
          </div>

          <Image
            src="/images/case-studies/gg-bookkeeping/Analytics-Dashboard.jpg"
            alt="Analytics dashboard showing bookkeeping feature usage"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />
        </section>

        {/* Next Steps Section */}
        <section id="next-steps" className="space-y-8">
          <h2 className="typography-h3-demibold">Next steps</h2>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 space-y-4">
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

            <div className="col-span-12 md:col-span-6 space-y-4">
              <h3 className="typography-h4-demibold">MTD April 2026</h3>
              <p className="typography-body text-foreground">
                The first cohort of landlords who must use MTD starts in April 2026 (income over £50k). The design and engineering work we have done so far means we are now recognised as an MTD developer by HMRC, the next step is to put our MTD solution into the hands of our users.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Next Project Button */}
      <div className="mt-60 flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/gg-ui">Next project</Link>
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
