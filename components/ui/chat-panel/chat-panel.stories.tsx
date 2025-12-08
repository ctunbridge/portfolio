import type { Meta, StoryObj } from "@storybook/nextjs"
import { Sparkles, Bike, Send } from "lucide-react"

import { ChatPanel } from "./chat-panel"

const meta: Meta<typeof ChatPanel> = {
  title: "Components/ChatPanel",
  component: ChatPanel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#faf9f5" },
        { name: "dark", value: "#151413" },
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatPanel>

/**
 * Default state showing suggestions
 */
export const Default: Story = {
  args: {
    isOpen: true,
    title: "What would you like to do?",
    placeholder: "Ask something...",
    suggestions: [
      {
        icon: <Sparkles className="size-5" />,
        label: "Tell me about recent work...",
        onClick: () => console.log("Suggestion 1 clicked"),
      },
      {
        icon: <Bike className="size-5" />,
        label: "What does Chris do outside of design...?",
        onClick: () => console.log("Suggestion 2 clicked"),
      },
      {
        icon: <Send className="size-5" />,
        label: "Get in touch",
        onClick: () => console.log("Suggestion 3 clicked"),
      },
    ],
  },
}

/**
 * With conversation messages
 */
export const WithMessages: Story = {
  args: {
    isOpen: true,
    title: "What would you like to do?",
    placeholder: "Ask something...",
    messages: [
      {
        id: "1",
        role: "user",
        content: "Tell me about recent work",
      },
      {
        id: "2",
        role: "assistant",
        content:
          "I'd be happy to tell you about Chris's recent work! He has been involved in several interesting projects including:\n\n- **Product design** for various tech companies\n- **UX research** and user testing\n- **Design systems** development\n\nWould you like to know more about any specific project?",
      },
      {
        id: "3",
        role: "user",
        content: "What about his design system work?",
      },
      {
        id: "4",
        role: "assistant",
        content:
          "Chris has extensive experience building and maintaining design systems. His work includes creating reusable component libraries, establishing design tokens, and collaborating with engineering teams to ensure seamless implementation.",
      },
    ],
  },
}

/**
 * Loading state while assistant is thinking
 */
export const Loading: Story = {
  args: {
    isOpen: true,
    title: "What would you like to do?",
    placeholder: "Ask something...",
    isLoading: true,
    messages: [
      {
        id: "1",
        role: "user",
        content: "What are Chris's main skills?",
      },
    ],
  },
}

/**
 * Empty state with no suggestions
 */
export const Empty: Story = {
  args: {
    isOpen: true,
    title: "What would you like to do?",
    placeholder: "Ask something...",
    suggestions: [],
    messages: [],
  },
}

/**
 * Closed state (hidden)
 */
export const Closed: Story = {
  args: {
    isOpen: false,
    title: "What would you like to do?",
    placeholder: "Ask something...",
    suggestions: [
      {
        icon: <Sparkles className="size-5" />,
        label: "Tell me about recent work...",
      },
    ],
  },
}

/**
 * Long conversation to test scrolling
 */
export const LongConversation: Story = {
  args: {
    isOpen: true,
    title: "What would you like to do?",
    placeholder: "Ask something...",
    messages: [
      {
        id: "1",
        role: "user",
        content: "Tell me about your experience",
      },
      {
        id: "2",
        role: "assistant",
        content:
          "I have extensive experience in product design, UX research, and design systems. I've been working in the industry for several years now.",
      },
      {
        id: "3",
        role: "user",
        content: "What tools do you use?",
      },
      {
        id: "4",
        role: "assistant",
        content:
          "I primarily use **Figma** for design work, along with various prototyping and research tools. I also use tools like Miro for workshops and collaboration.",
      },
      {
        id: "5",
        role: "user",
        content: "What about development?",
      },
      {
        id: "6",
        role: "assistant",
        content:
          "I work with modern web technologies including React, TypeScript, and Next.js. I'm comfortable with CSS frameworks like Tailwind and component libraries.",
      },
      {
        id: "7",
        role: "user",
        content: "Can you tell me more about your projects?",
      },
      {
        id: "8",
        role: "assistant",
        content:
          "I've worked on numerous projects across various industries including:\n\n- E-commerce platforms\n- Healthcare applications\n- Financial services\n- Educational technology\n\nEach project involved close collaboration with cross-functional teams.",
      },
      {
        id: "9",
        role: "user",
        content: "What's your design philosophy?",
      },
      {
        id: "10",
        role: "assistant",
        content:
          "I believe in **user-centered design** with a focus on accessibility, simplicity, and creating delightful experiences. Every decision should be backed by research and user feedback.",
      },
      {
        id: "11",
        role: "user",
        content: "How do you approach a new project?",
      },
      {
        id: "12",
        role: "assistant",
        content:
          "I typically start with discovery and research to understand the problem space. This includes:\n\n1. **Stakeholder interviews** to understand business goals\n2. **User research** to understand needs and pain points\n3. **Competitive analysis** to see what's already out there\n4. **Journey mapping** to visualize the current experience",
      },
      {
        id: "13",
        role: "user",
        content: "What about collaboration with developers?",
      },
      {
        id: "14",
        role: "assistant",
        content:
          "Collaboration with developers is crucial! I like to involve engineering early in the design process. We do regular design reviews, and I ensure all designs are documented with clear specs. I also work directly with code when needed.",
      },
      {
        id: "15",
        role: "user",
        content: "Do you have experience with design systems?",
      },
      {
        id: "16",
        role: "assistant",
        content:
          "Yes! Design systems are one of my specialties. I've built and maintained systems that include:\n\n- **Component libraries** with full documentation\n- **Design tokens** for colors, typography, and spacing\n- **Pattern libraries** for common UI patterns\n- **Accessibility guidelines** baked into every component\n\nA good design system saves time and ensures consistency across products.",
      },
      {
        id: "17",
        role: "user",
        content: "How do you handle feedback on your designs?",
      },
      {
        id: "18",
        role: "assistant",
        content:
          "I welcome feedback as an essential part of the design process. I find it helpful to:\n\n- Present designs with clear rationale\n- Ask specific questions to guide feedback\n- Separate subjective opinions from user-backed insights\n- Iterate quickly based on valid concerns",
      },
      {
        id: "19",
        role: "user",
        content: "What industries have you worked in?",
      },
      {
        id: "20",
        role: "assistant",
        content:
          "I've had the opportunity to work across diverse industries including fintech, healthcare, e-commerce, and SaaS products. Each industry brings unique challenges and user needs that keep the work interesting.",
      },
      {
        id: "21",
        role: "user",
        content: "What's your favorite part of the design process?",
      },
      {
        id: "22",
        role: "assistant",
        content:
          "I love the early discovery phase where you're uncovering insights and the problem space is wide open. There's something exciting about connecting the dots between user needs and business goals to find elegant solutions.",
      },
      {
        id: "23",
        role: "user",
        content: "Do you do any prototyping?",
      },
      {
        id: "24",
        role: "assistant",
        content:
          "Absolutely! Prototyping is essential for testing ideas quickly. I create everything from low-fidelity paper sketches to high-fidelity interactive prototypes in Figma. The fidelity depends on what we're testing and where we are in the process.",
      },
      {
        id: "25",
        role: "user",
        content: "How do you stay up to date with design trends?",
      },
      {
        id: "26",
        role: "assistant",
        content:
          "I stay current through a mix of:\n\n- Following design leaders on social media\n- Reading articles on Medium and design blogs\n- Attending conferences and meetups\n- Experimenting with new tools and techniques\n- Learning from the amazing design community",
      },
    ],
  },
}

/**
 * With new chat button (only visible when there are messages)
 */
export const WithNewChatButton: Story = {
  args: {
    isOpen: true,
    title: "What would you like to do?",
    placeholder: "Ask something...",
    onNewChat: () => console.log("New chat clicked"),
    messages: [
      {
        id: "1",
        role: "user",
        content: "Tell me about your experience",
      },
      {
        id: "2",
        role: "assistant",
        content:
          "I have extensive experience in product design, UX research, and design systems.",
      },
    ],
  },
}
