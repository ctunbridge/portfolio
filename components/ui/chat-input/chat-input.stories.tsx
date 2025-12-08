import type { Meta, StoryObj } from "@storybook/nextjs"

import { ChatInput } from "./chat-input"

const meta: Meta<typeof ChatInput> = {
  title: "Components/ChatInput",
  component: ChatInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#faf9f5" },
        { name: "dark", value: "#151413" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] max-w-full p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ChatInput>

/**
 * Default state with placeholder text
 */
export const Default: Story = {
  args: {
    placeholder: "Ask something...",
  },
}

/**
 * With pre-filled value
 */
export const WithValue: Story = {
  args: {
    value: "Tell me about Chris's experience",
    placeholder: "Ask something...",
  },
}

/**
 * Loading state while waiting for response
 */
export const Loading: Story = {
  args: {
    value: "What projects has Chris worked on?",
    isLoading: true,
    placeholder: "Ask something...",
  },
}

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Ask something...",
  },
}

/**
 * Custom placeholder for chat context
 */
export const ChatMode: Story = {
  args: {
    placeholder: "Ask about Chris's work...",
  },
}

/**
 * Full width variant for embedded use
 */
export const FullWidth: Story = {
  args: {
    placeholder: "Ask something...",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl p-8">
        <Story />
      </div>
    ),
  ],
}
