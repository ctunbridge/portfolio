import type { Meta, StoryObj } from "@storybook/react"

import { TopNav } from "./top-nav"

const meta: Meta<typeof TopNav> = {
  title: "Components/TopNav",
  component: TopNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof TopNav>

// Case study content section component
const CaseStudySection = ({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) => (
  <section id={id} className="min-h-screen scroll-mt-24">
    <h2 className="typography-h2-demibold mb-6">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
)

// Layout wrapper that mimics the actual app layout
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <main className="flex-1 px-6 md:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">{children}</div>
    </main>
  </div>
)

/**
 * Default navigation displaying "CT" with a link to home.
 * The navigation sticks to the top of the viewport when scrolling.
 */
export const Default: Story = {
  decorators: [
    (Story) => (
      <LayoutWrapper>
        <Story />
        <div className="space-y-8">
          <h1 className="typography-h1-demibold">Case Study Title</h1>
          <p className="typography-body text-secondary">
            Scroll down to see the sticky navigation behavior.
          </p>
          <div className="mt-8 space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-20 rounded-lg bg-muted" />
            ))}
          </div>
        </div>
      </LayoutWrapper>
    ),
  ],
}

/**
 * Case study navigation with realistic section items.
 * Mimics the GG Bookkeeping case study page structure.
 */
export const CaseStudy: Story = {
  args: {
    items: [
      { label: "Overview", id: "overview" },
      { label: "Challenge", id: "challenge" },
      { label: "Solution", id: "solution" },
      { label: "Results", id: "results" },
    ],
  },
  decorators: [
    (Story) => (
      <LayoutWrapper>
        <Story />
        <div className="space-y-16">
          <CaseStudySection id="overview" title="Overview">
            <p className="typography-body text-secondary">
              GG Bookkeeping is a comprehensive financial management platform designed
              to simplify bookkeeping for small businesses and freelancers.
            </p>
            <p className="typography-body text-secondary">
              The project involved creating an intuitive interface that makes complex
              financial tasks accessible to users without accounting backgrounds.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="typography-h4-demibold">6 months</p>
                <p className="typography-small text-secondary">Duration</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="typography-h4-demibold">Lead Designer</p>
                <p className="typography-small text-secondary">Role</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="typography-h4-demibold">Web App</p>
                <p className="typography-small text-secondary">Platform</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="typography-h4-demibold">Fintech</p>
                <p className="typography-small text-secondary">Industry</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection id="challenge" title="The Challenge">
            <p className="typography-body text-secondary">
              Small business owners often struggle with financial management due to
              complex software interfaces and overwhelming feature sets.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="typography-body text-secondary">
                  Users found existing solutions too complex for their needs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="typography-body text-secondary">
                  Manual data entry was time-consuming and error-prone
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="typography-body text-secondary">
                  Lack of real-time insights made financial planning difficult
                </p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection id="solution" title="The Solution">
            <p className="typography-body text-secondary">
              We designed a streamlined interface that prioritizes the most common
              tasks while keeping advanced features accessible but unobtrusive.
            </p>
            <div className="mt-8 rounded-lg bg-muted p-6">
              <h3 className="typography-h5-demibold mb-4">Key Design Decisions</h3>
              <ul className="space-y-2">
                <li className="typography-body text-secondary">
                  • Progressive disclosure to reduce cognitive load
                </li>
                <li className="typography-body text-secondary">
                  • Automated categorization using machine learning
                </li>
                <li className="typography-body text-secondary">
                  • Visual dashboards for quick financial overview
                </li>
                <li className="typography-body text-secondary">
                  • Mobile-first responsive design
                </li>
              </ul>
            </div>
          </CaseStudySection>

          <CaseStudySection id="results" title="Results">
            <p className="typography-body text-secondary">
              The redesigned platform achieved significant improvements in user
              engagement and task completion rates.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border p-6">
                <p className="typography-display text-primary">45%</p>
                <p className="typography-body text-secondary">
                  Reduction in time to complete common tasks
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <p className="typography-display text-primary">3x</p>
                <p className="typography-body text-secondary">
                  Increase in daily active users
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <p className="typography-display text-primary">92%</p>
                <p className="typography-body text-secondary">
                  User satisfaction rating
                </p>
              </div>
            </div>
          </CaseStudySection>
        </div>
      </LayoutWrapper>
    ),
  ],
}

/**
 * Design system case study with more sections.
 * Demonstrates horizontal scrolling on mobile/tablet.
 */
export const DesignSystemCaseStudy: Story = {
  args: {
    items: [
      { label: "Overview", id: "ds-overview" },
      { label: "Research", id: "ds-research" },
      { label: "Foundation", id: "ds-foundation" },
      { label: "Components", id: "ds-components" },
      { label: "Documentation", id: "ds-documentation" },
      { label: "Adoption", id: "ds-adoption" },
    ],
  },
  decorators: [
    (Story) => (
      <LayoutWrapper>
        <Story />
        <div className="space-y-16">
          <CaseStudySection id="ds-overview" title="Overview">
            <p className="typography-body text-secondary">
              Building a comprehensive design system from the ground up to ensure
              consistency across multiple products and teams.
            </p>
          </CaseStudySection>

          <CaseStudySection id="ds-research" title="Research">
            <p className="typography-body text-secondary">
              We conducted extensive audits of existing UI patterns and interviewed
              stakeholders to understand pain points and requirements.
            </p>
          </CaseStudySection>

          <CaseStudySection id="ds-foundation" title="Foundation">
            <p className="typography-body text-secondary">
              Establishing core design tokens including colors, typography, spacing,
              and motion principles that form the basis of the system.
            </p>
          </CaseStudySection>

          <CaseStudySection id="ds-components" title="Components">
            <p className="typography-body text-secondary">
              Designing and building a library of reusable components with clear
              documentation and usage guidelines.
            </p>
          </CaseStudySection>

          <CaseStudySection id="ds-documentation" title="Documentation">
            <p className="typography-body text-secondary">
              Creating comprehensive documentation including usage examples, best
              practices, and accessibility guidelines.
            </p>
          </CaseStudySection>

          <CaseStudySection id="ds-adoption" title="Adoption">
            <p className="typography-body text-secondary">
              Rolling out the design system across teams with training sessions,
              support channels, and iterative improvements based on feedback.
            </p>
          </CaseStudySection>
        </div>
      </LayoutWrapper>
    ),
  ],
}

/**
 * Mobile viewport to demonstrate horizontal scrolling behavior.
 */
export const MobileView: Story = {
  args: {
    items: [
      { label: "Overview", id: "mobile-overview" },
      { label: "Challenge", id: "mobile-challenge" },
      { label: "Solution", id: "mobile-solution" },
      { label: "Results", id: "mobile-results" },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      <LayoutWrapper>
        <Story />
        <div className="space-y-8">
          <div className="rounded-md border border-accent bg-accent/10 p-4">
            <p className="typography-body-sm text-accent">
              Scroll horizontally on the navigation to see all items →
            </p>
          </div>
          <CaseStudySection id="mobile-overview" title="Overview">
            <p className="typography-body text-secondary">
              Overview section content for mobile viewport demonstration.
            </p>
          </CaseStudySection>
          <CaseStudySection id="mobile-challenge" title="Challenge">
            <p className="typography-body text-secondary">
              Challenge section content for mobile viewport demonstration.
            </p>
          </CaseStudySection>
          <CaseStudySection id="mobile-solution" title="Solution">
            <p className="typography-body text-secondary">
              Solution section content for mobile viewport demonstration.
            </p>
          </CaseStudySection>
          <CaseStudySection id="mobile-results" title="Results">
            <p className="typography-body text-secondary">
              Results section content for mobile viewport demonstration.
            </p>
          </CaseStudySection>
        </div>
      </LayoutWrapper>
    ),
  ],
}

/**
 * Tablet viewport to demonstrate responsive behavior.
 */
export const TabletView: Story = {
  args: {
    items: [
      { label: "Overview", id: "tablet-overview" },
      { label: "Challenge", id: "tablet-challenge" },
      { label: "Solution", id: "tablet-solution" },
      { label: "Results", id: "tablet-results" },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  decorators: [
    (Story) => (
      <LayoutWrapper>
        <Story />
        <div className="space-y-8">
          <CaseStudySection id="tablet-overview" title="Overview">
            <p className="typography-body text-secondary">
              Overview section content for tablet viewport demonstration.
            </p>
          </CaseStudySection>
          <CaseStudySection id="tablet-challenge" title="Challenge">
            <p className="typography-body text-secondary">
              Challenge section content for tablet viewport demonstration.
            </p>
          </CaseStudySection>
          <CaseStudySection id="tablet-solution" title="Solution">
            <p className="typography-body text-secondary">
              Solution section content for tablet viewport demonstration.
            </p>
          </CaseStudySection>
          <CaseStudySection id="tablet-results" title="Results">
            <p className="typography-body text-secondary">
              Results section content for tablet viewport demonstration.
            </p>
          </CaseStudySection>
        </div>
      </LayoutWrapper>
    ),
  ],
}
