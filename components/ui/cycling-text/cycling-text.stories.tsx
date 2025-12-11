import type { Meta, StoryObj } from "@storybook/nextjs"

import { CyclingText } from "./cycling-text"

const meta: Meta<typeof CyclingText> = {
  title: "Components/CyclingText",
  component: CyclingText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    texts: {
      control: { type: "object" },
      description: "Array of text options to cycle through",
    },
    duration: {
      control: { type: "number" },
      description: "Duration each text is displayed in milliseconds",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    texts: ["this portfolio", "design systems", "next.js sites"],
    duration: 1500,
  },
}

export const SingleText: Story = {
  args: {
    texts: ["single text item"],
  },
}

export const FastCycling: Story = {
  args: {
    texts: ["quick", "cycling", "text", "example"],
    duration: 800,
  },
}

export const SlowCycling: Story = {
  args: {
    texts: ["slow", "cycling", "text"],
    duration: 3000,
  },
}

export const ManyItems: Story = {
  args: {
    texts: [
      "this portfolio",
      "design systems",
      "next.js and tailwind.css sites",
      "mobile native apps",
      "react apps",
      "web applications",
      "user interfaces",
    ],
    duration: 1500,
  },
}

export const InContext: Story = {
  render: () => (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-semibold">
        I&apos;m a product designer, founder and builder of things, like{" "}
        <CyclingText
          texts={[
            "this portfolio",
            "design systems",
            "next.js and tailwind.css sites",
            "mobile native apps",
            "react apps",
          ]}
        />
        .
      </h1>
    </div>
  ),
}
