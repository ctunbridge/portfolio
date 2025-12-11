import type { Meta, StoryObj } from "@storybook/nextjs"

import { Footer } from "./footer"

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
};

export const InContainer: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto px-4">
      <Footer />
    </div>
  ),
};
