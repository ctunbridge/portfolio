import type { Meta, StoryObj } from "@storybook/nextjs"
import { useEffect, useState } from "react"

import { AssistantMessage } from "./assistant-message"

const meta: Meta<typeof AssistantMessage> = {
  title: "Components/AssistantMessage",
  component: AssistantMessage,
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
type Story = StoryObj<typeof AssistantMessage>

/**
 * Default assistant message with simple text
 */
export const Default: Story = {
  args: {
    content: "Hello! I'm Chris's portfolio assistant. How can I help you today?",
  },
}

/**
 * Empty content shows "Thinking..." state
 */
export const Thinking: Story = {
  args: {
    content: "",
  },
}

/**
 * Message with bold text formatting
 */
export const WithBold: Story = {
  args: {
    content:
      "Chris has **extensive experience** in building **design systems** and **component libraries**.",
  },
}

/**
 * Message with links
 */
export const WithLinks: Story = {
  args: {
    content:
      "You can view Chris's work on [GitHub](https://github.com) or check out his [portfolio](/). He's also active on [LinkedIn](https://linkedin.com).",
  },
}

/**
 * Message with unordered list
 */
export const WithBulletList: Story = {
  args: {
    content: `Chris specializes in several areas:

- Design Systems & Component Libraries
- React & TypeScript Development
- AI Integration & LLM Applications
- Frontend Architecture`,
  },
}

/**
 * Message with ordered list
 */
export const WithNumberedList: Story = {
  args: {
    content: `Here are the steps to get started:

1. Review the portfolio projects
2. Check out the case studies
3. Explore the design system work
4. Contact Chris for collaboration`,
  },
}

/**
 * Message with headings
 */
export const WithHeadings: Story = {
  args: {
    content: `## Chris's Background

Chris is a product designer and developer with experience building design systems.

### Key Skills

He specializes in React, TypeScript, and design system architecture.`,
  },
}

/**
 * Message with inline code
 */
export const WithCode: Story = {
  args: {
    content:
      "Chris works extensively with `React`, `TypeScript`, and `Next.js`. He's built components using `Tailwind CSS` and maintains codebases with `Git`.",
  },
}

/**
 * Complex message with mixed formatting
 */
export const Complex: Story = {
  args: {
    content: `## Chris's Experience

Chris has worked on several **major projects**:

1. **Design System Development** - Built comprehensive component libraries
2. **AI Integration** - Implemented LLM-powered features using [OpenAI](https://openai.com)
3. **Frontend Architecture** - Designed scalable \`React\` applications

### Technologies

He specializes in:
- React & TypeScript
- Next.js & Tailwind CSS
- Design Systems
- AI/LLM Integration

Feel free to explore the [portfolio](/) to learn more!`,
  },
}

/**
 * Long message demonstrating wrapping
 */
export const LongMessage: Story = {
  args: {
    content:
      "Chris has extensive experience in product design and development, particularly in building design systems and component libraries. He's worked on projects ranging from small startups to large enterprise applications, always focusing on creating maintainable, scalable, and accessible user interfaces. His expertise spans across frontend development, design systems architecture, and modern web technologies including React, TypeScript, and Next.js.",
  },
}

/**
 * Simulated streaming effect
 */
export const Streaming: Story = {
  render: () => {
    const fullText = `Chris is a product designer and developer with **extensive experience** in:

- Design Systems
- React & TypeScript
- AI Integration
- Frontend Architecture

Feel free to ask me anything about his work!`

    const [content, setContent] = useState("")

    useEffect(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setContent(fullText.slice(0, index))
          index += 2
        } else {
          clearInterval(interval)
        }
      }, 30)

      return () => clearInterval(interval)
    }, [])

    return <AssistantMessage content={content} />
  },
}
