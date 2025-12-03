import type { Meta, StoryObj } from "@storybook/react"

import { TopNav } from "./top-nav"

const meta: Meta<typeof TopNav> = {
  title: "Components/TopNav",
  component: TopNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-[200vh] bg-muted">
        <Story />
        <div className="p-14">
          <p className="typography-body text-muted-foreground">
            Scroll down to see the sticky navigation behavior.
          </p>
          <div className="mt-8 space-y-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-20 rounded-lg bg-background" />
            ))}
          </div>
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TopNav>

/**
 * Default navigation displaying "CT" with a link to home.
 * The navigation sticks to the top of the viewport when scrolling.
 */
export const Default: Story = {}

/**
 * Navigation with a custom name.
 */
export const CustomName: Story = {
  args: {
    name: "John Doe",
  },
}

/**
 * Navigation with page section items for horizontal scrolling.
 * Clicking an item scrolls to the corresponding section.
 */
export const WithItems: Story = {
  args: {
    items: [
      { label: "Overview", id: "overview" },
      { label: "Features", id: "features" },
      { label: "Process", id: "process" },
    ],
  },
  decorators: [
    (Story) => (
      <div className="min-h-[400vh] bg-muted">
        <Story />
        <div className="space-y-8 p-14">
          <section id="overview" className="min-h-screen">
            <h1 className="typography-h1-demibold mb-6">Overview</h1>
            <p className="typography-body text-muted-foreground">
              Overview section content. Scroll down to see active states change.
            </p>
          </section>
          <section id="features" className="min-h-screen">
            <h2 className="typography-h2-demibold mb-6">Features</h2>
            <p className="typography-body text-muted-foreground">
              Features section content.
            </p>
          </section>
          <section id="process" className="min-h-screen">
            <h2 className="typography-h2-demibold mb-6">Process</h2>
            <p className="typography-body text-muted-foreground">
              Process section content.
            </p>
          </section>
        </div>
      </div>
    ),
  ],
}

/**
 * Navigation with many items to demonstrate horizontal scrolling.
 */
export const ManyItems: Story = {
  args: {
    items: [
      { label: "Overview", id: "overview" },
      { label: "Background", id: "background" },
      { label: "Research", id: "research" },
      { label: "Design", id: "design" },
      { label: "Development", id: "development" },
      { label: "Testing", id: "testing" },
      { label: "Results", id: "results" },
    ],
  },
}
