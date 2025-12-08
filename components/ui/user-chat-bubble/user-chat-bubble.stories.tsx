import type { Meta, StoryObj } from "@storybook/nextjs"

import { UserChatBubble } from "./user-chat-bubble"

const meta: Meta<typeof UserChatBubble> = {
  title: "Components/UserChatBubble",
  component: UserChatBubble,
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
      <div className="w-full max-w-2xl p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof UserChatBubble>

/**
 * Default user message bubble
 */
export const Default: Story = {
  args: {
    children: "Hello, can you help me with something?",
  },
}

/**
 * Short message
 */
export const ShortMessage: Story = {
  args: {
    children: "Hi!",
  },
}

/**
 * Long message that wraps
 */
export const LongMessage: Story = {
  args: {
    children:
      "This is a longer message that will wrap across multiple lines. It demonstrates how the chat bubble handles longer text content and maintains readability with proper line height and spacing.",
  },
}

/**
 * Message with question
 */
export const Question: Story = {
  args: {
    children: "Can you tell me about Chris's experience with React and TypeScript?",
  },
}

/**
 * Multi-line message
 */
export const MultiLine: Story = {
  args: {
    children: (
      <>
        I have a few questions:
        <br />
        <br />
        1. What projects has Chris worked on?
        <br />
        2. What technologies does he specialize in?
        <br />
        3. Can I see his portfolio?
      </>
    ),
  },
}

/**
 * Multiple bubbles in conversation
 */
export const Conversation: Story = {
  render: () => (
    <div className="flex flex-col gap-3 items-end">
      <UserChatBubble>Hi there!</UserChatBubble>
      <UserChatBubble>Can you tell me about Chris's work experience?</UserChatBubble>
      <UserChatBubble>What technologies does he use?</UserChatBubble>
    </div>
  ),
}
