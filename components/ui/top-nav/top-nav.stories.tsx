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
 * Default navigation displaying "Chris Tunbridge" with a link to home.
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

