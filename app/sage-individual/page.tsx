/**
 * Sage Individual Case Study Page
 *
 * Sage Individual - A comprehensive case study showcasing
 * the development of splitting transactions for small business owners.
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
    title: "Let simplicity build confidence and understanding",
    description:
      "Sage Individual is designed for users without an accountant. The app needs to be simple to understand and use, making accounting accessible for those unfamiliar with financial terminology and principles. By reducing complexity we help users feel in control and confident in their decisions.",
  },
  {
    number: "2",
    title: "Accessibility is mandatory",
    description:
      "Building for accessibility improves the experience for all users, not just those with specific needs. Good accessibility is good design — it ensures everyone can use the app effectively regardless of ability, device, or context.",
  },
  {
    number: "3",
    title: "Improvement is iterative, start small and build",
    description:
      "To avoid over-complication and feature bloat, we build iteratively. Start by solving core user needs first, then iterate based on research and feedback. This approach keeps the app focused and ensures each feature genuinely adds value.",
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

export default function SageIndividualPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Product Principles", id: "product-principles" },
    { label: "Empathise", id: "empathise" },
    { label: "Ideation", id: "ideation" },
    { label: "Design, Test & Deliver", id: "delivery" },
    { label: "Build", id: "build" },
    { label: "Next Steps", id: "next-steps" },
  ]

  return (
    <>
      <TopNav items={navItems} />

      <div className="space-y-45 md:space-y-65 lg:space-y-80 pt-40">
        {/* Introduction Section */}
        <section id="introduction" className="space-y-8">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h1 className="typography-h2-demibold">Sage Individual</h1>
              <p className="typography-h4-normal text-foreground">
                Helping self-employed individuals run their business, track income and expenses,
                get paid by their customers faster, and submit their self assessment.
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-individual/IndividualHero.jpg"
            alt="Sage Individual app showing transaction splitting interface"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-10"
          />
        </section>

        {/* Splitting Transactions Section */}
        <section className="space-y-8">
          <h2 className="typography-h3-demibold">Splitting Transactions</h2>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Problem Statement</span> ·{" "}
                Helping small businesses handle the complexity of managing both business and
                personal finances from all of their transactions from a single account, and
                keeping these separate for accounting and tax purposes.
              </p>

              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Senior Product Designer
              </p>
            </div>
          </div>

        </section>

        {/* Product Principles Section */}
        <ProductPrinciplesSection />

        {/* Empathise Section */}
        <section id="empathise" className="space-y-8">
          <h2 className="typography-h3-demibold">Empathise</h2>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">
                Initial Research & Value Proposition
              </h3>
              <p className="typography-body text-foreground">
                I kicked off user research with sole traders to understand their current behaviours,
                pain points, and needs around managing mixed business and personal transactions. Through
                interviews and surveys, we validated that transaction splitting was a significant pain
                point and would provide clear value.
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-individual/Value Prop Image.jpg"
            alt="Initial research findings and value proposition"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />

          {/* Initial Research & Business Needs - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Initial Research */}
            <div className="space-y-4">
              <h3 className="typography-h4-demibold">Initial Research & Value Proposition</h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    78% of sole traders use a single account
                  </p>
                  <p className="typography-body text-foreground">
                    Most sole traders manage both business and personal finances from one bank account,
                    making it difficult to separate spending for tax and accounting purposes.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    63% rely on manual workarounds
                  </p>
                  <p className="typography-body text-foreground">
                    Sole traders commonly use spreadsheets, separate bank accounts, or memory to track
                    which transactions are business vs personal - all time consuming approaches.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    Clear appetite for in-app solution
                  </p>
                  <p className="typography-body text-foreground">
                    Research showed strong demand for an integrated solution that would save time and
                    reduce the complexity of managing mixed transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Needs */}
            <div className="space-y-4">
              <h3 className="typography-h4-demibold">Business Needs</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    Increase product stickiness & engagement
                  </p>
                  <p className="typography-body text-foreground">
                    By solving a core pain point for sole traders, we could increase regular usage
                    of the app and create more value, leading to higher retention.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    Competitive differentiation
                  </p>
                  <p className="typography-body text-foreground">
                    This feature would differentiate Sage Individual from traditional business banking
                    and accounting solutions, providing a unique selling point in the market.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="typography-body-bold text-foreground">
                    Foundation for future features
                  </p>
                  <p className="typography-body text-foreground">
                    Transaction splitting would create the foundation for more advanced features
                    like tax estimates, expense categorisation, and reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideation Section */}
        <section id="ideation" className="space-y-8">
          <h2 className="typography-h3-demibold">Ideation</h2>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">Design sprint</h3>
              <p className="typography-body text-foreground">
                We ran a design sprint to rapidly explore different approaches to transaction splitting.
                The sprint brought together designers, product managers, and engineers to sketch, prototype,
                and test ideas with users in just a few days.
              </p>
              <p className="typography-body text-foreground">
                This fast-paced, collaborative approach allowed us to quickly validate our direction and
                identify the most promising interaction patterns before investing in detailed design and
                development.
              </p>
            </div>
          </div>

          {/* Sprint Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-12 mb-15">
            <Image
              src="/images/case-studies/sage-individual/Sprint Image 1 1.jpg"
              alt="Design sprint workshop and ideation"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/images/case-studies/sage-individual/Sprint Image 2 1.jpg"
              alt="Design sprint prototyping and testing"
              width={960}
              height={720}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Design, Test & Deliver Section */}
        <section id="delivery" className="space-y-8">
          <h2 className="typography-h3-demibold">Design, Test & Deliver</h2>

          {/* User Journey Mapping */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">User journey mapping</h3>
              <p className="typography-body text-foreground">
                Working with the wider product team, we mapped out the end-to-end user journey for
                splitting transactions. This helped us understand all the touchpoints, edge cases,
                and opportunities to guide users through the experience.
              </p>
            </div>
          </div>

          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-12 mb-40">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
              <Image
                src="/images/case-studies/sage-individual/User Journey Image.jpg"
                alt="Detailed user journey map"
                width={1280}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <Image
                src="/images/case-studies/sage-individual/Journey Workshop.jpg"
                alt="Journey mapping workshop"
                width={640}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Wireframes & Prototyping */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">Wireframes & Prototyping</h3>
              <p className="typography-body text-foreground">
                I created low and mid-fidelity wireframes to explore different UI patterns for
                splitting transactions. These wireframes helped us quickly iterate on the interaction
                model and information architecture before committing to high-fidelity designs.
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-individual/Wireframe Image.jpg"
            alt="Wireframes and prototypes for transaction splitting"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-40"
          />

          {/* User Testing */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">User Testing</h3>
              <p className="typography-body text-foreground">
                I conducted moderated usability testing sessions with sole traders to validate the
                design direction. Testing revealed several key insights that shaped the final design,
                including simplifying the split interface and providing clearer feedback after splitting.
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-individual/Testing Image.jpg"
            alt="User testing sessions with sole traders"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-40"
          />

          {/* Service Blueprint */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">Service Blueprint</h3>
              <p className="typography-body text-foreground">
                To ensure seamless delivery, I created a service blueprint mapping the frontstage
                user experience to backstage technical requirements and processes. This helped
                engineering understand the full scope and identify technical dependencies.
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-individual/Blueprint Image.jpg"
            alt="Service blueprint for transaction splitting"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-40"
          />

          {/* Designer and Developer Feedback */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">Designer and Developer Feedback</h3>
              <p className="typography-body text-foreground">
                Throughout the design process, I gathered regular feedback from other designers
                and engineers. This collaborative approach helped refine the design, ensure technical
                feasibility, and maintain consistency with our design system.
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-individual/Feedback Image.jpg"
            alt="Designer and developer feedback sessions"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-40"
          />

          {/* Design System */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">Design System</h3>
              <p className="typography-body text-foreground">
                All designs were created using Sage&apos;s design system components and patterns,
                ensuring consistency with the rest of the product. Where new patterns were needed,
                I worked with the design system team to create reusable components.
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-individual/Individual DS 1.jpg"
            alt="Design system components for transaction splitting"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-40"
          />

          {/* UI */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-4">
              <h3 className="typography-h4-demibold">UI</h3>
              <p className="typography-body text-foreground">
                The pixel perfect user interface was then created in Figma in collaboration with
                Content Design, whilst also ensuring that developer reviews and refinements happened
                often to continue to validate feasibility.
              </p>
            </div>
          </div>

          {/* Final UI */}
          <Image
            src="/images/case-studies/sage-individual/User Journey 1 1.jpg"
            alt="Final split transaction UI"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12"
          />

          {/* UI Flow */}
          <Image
            src="/images/case-studies/sage-individual/Sage_Split UI.jpg"
            alt="Add Split happy paths iOS user flow"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12"
          />

          {/* Accessibility */}
          <Image
            src="/images/case-studies/sage-individual/Sage_Accessibility Guidelines.jpg"
            alt="Accessibility considerations including resize text, focus order, dark mode, and landscape"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />
        </section>

        {/* Build Section */}
        <section id="build" className="space-y-8">
          <h2 className="typography-h3-demibold">Build</h2>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 space-y-4">
              <h3 className="typography-h4-demibold">Developer Support</h3>
              <p className="typography-body text-foreground">
                During development, I provided ongoing support to engineers, answering questions,
                clarifying edge cases, and making small design adjustments as technical constraints
                emerged. This collaborative approach ensured high quality implementation.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 space-y-4">
              <h3 className="typography-h4-demibold">UI/UX</h3>
              <p className="typography-body text-foreground">
                I conducted thorough UI/UX reviews throughout development, ensuring the
                implementation matched the designs and met our quality standards. This iterative
                review process caught issues early and resulted in a polished final product.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section id="next-steps" className="space-y-8">
          <h2 className="typography-h3-demibold">Next Steps</h2>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 space-y-4">
              <h3 className="typography-h4-demibold">Iterations</h3>
              <p className="typography-body text-foreground">
                Following launch, we will monitor usage analytics and gather user feedback to
                identify opportunities for iteration. Planned improvements include smarter
                default split suggestions and bulk splitting capabilities.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 space-y-4">
              <h3 className="typography-h4-demibold">Next phase</h3>
              <p className="typography-body text-foreground">
                Transaction splitting creates the foundation for more advanced features including
                tax estimates, expense categorisation, and financial reporting. We&apos;re exploring
                these opportunities as part of the product roadmap.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Next Project Button */}
      <div className="mt-60 flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/sage-ds">Next project</Link>
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
