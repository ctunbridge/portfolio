import type { Meta, StoryObj } from "@storybook/nextjs"

import { ExperienceCard } from "./experience-card"

const meta: Meta<typeof ExperienceCard> = {
  title: "Components/ExperienceCard",
  component: ExperienceCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    employer: {
      control: { type: "text" },
      description: "Employer name",
    },
    dates: {
      control: { type: "text" },
      description: "Employment dates",
    },
    jobTitle: {
      control: { type: "text" },
      description: "Job title",
    },
    summary: {
      control: { type: "text" },
      description: "Job description/summary",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    employer: "Acme Corporation",
    dates: "2020 - 2023",
    jobTitle: "Senior Product Designer",
    summary: "Led design initiatives for the core product suite, establishing design systems and processes that improved team efficiency by 40%. Collaborated with cross-functional teams to deliver user-centered solutions.",
  },
}

export const CurrentRole: Story = {
  args: {
    employer: "Tech Startup",
    dates: "2023 - Present",
    jobTitle: "Lead UX Designer",
    summary: "Driving design strategy and execution for a fast-growing SaaS platform. Managing a team of designers and implementing user research practices that directly informed product decisions.",
  },
}

export const DesignRole: Story = {
  args: {
    employer: "Creative Design Agency",
    dates: "2018 - 2020",
    jobTitle: "UI/UX Designer",
    summary: "Designed digital experiences for clients across various industries including healthcare, finance, and e-commerce. Contributed to multiple award-winning projects.",
  },
}

export const EarlyCareer: Story = {
  args: {
    employer: "Innovation Labs",
    dates: "2017 - 2018",
    jobTitle: "Junior Designer",
    summary: "Supported senior designers in creating wireframes, prototypes, and visual designs for web and mobile applications.",
  },
}

export const Timeline: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-3xl">
      <ExperienceCard
        employer="Tech Innovations Inc."
        dates="2023 - Present"
        jobTitle="Lead Product Designer"
        summary="Driving design strategy for a B2B SaaS platform serving 10,000+ users. Established design operations and mentored a team of 5 designers."
      />
      <ExperienceCard
        employer="Digital Solutions Co."
        dates="2020 - 2023"
        jobTitle="Senior UX Designer"
        summary="Led end-to-end design for mobile and web applications. Conducted user research and usability testing that improved conversion rates by 35%."
      />
      <ExperienceCard
        employer="Creative Studio"
        dates="2018 - 2020"
        jobTitle="Product Designer"
        summary="Collaborated with product teams to design and ship features for consumer-facing applications. Contributed to the company's design system."
      />
      <ExperienceCard
        employer="Design Agency"
        dates="2016 - 2018"
        jobTitle="Junior Designer"
        summary="Created user interfaces and marketing materials for diverse clients. Developed skills in user research, prototyping, and visual design."
      />
    </div>
  ),
};
