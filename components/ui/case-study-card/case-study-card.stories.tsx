import type { Meta, StoryObj } from "@storybook/nextjs"

import { CaseStudyCard } from "./case-study-card"

const meta: Meta<typeof CaseStudyCard> = {
  title: "Components/CaseStudyCard",
  component: CaseStudyCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    businessName: {
      control: { type: "text" },
      description: "Business or employer name",
    },
    year: {
      control: { type: "text" },
      description: "Year of the project",
    },
    projectTitle: {
      control: { type: "text" },
      description: "Project title",
    },
    imageSrc: {
      control: { type: "text" },
      description: "Image source URL",
    },
    imageAlt: {
      control: { type: "text" },
      description: "Alt text for the image",
    },
    href: {
      control: { type: "text" },
      description: "Optional link URL",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    businessName: "Acme Corporation",
    year: "2024",
    projectTitle: "E-commerce Platform Redesign",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
    imageAlt: "E-commerce platform interface",
  },
}

export const WithLink: Story = {
  args: {
    businessName: "Tech Startup",
    year: "2023",
    projectTitle: "Mobile App Development",
    imageSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=800&fit=crop",
    imageAlt: "Mobile app screens",
    href: "/case-studies/mobile-app",
  },
}

export const DesignSystem: Story = {
  args: {
    businessName: "Global Bank",
    year: "2024",
    projectTitle: "Design System Implementation",
    imageSrc: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=800&fit=crop",
    imageAlt: "Design system components",
    href: "/case-studies/design-system",
  },
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <CaseStudyCard
        businessName="Acme Corporation"
        year="2024"
        projectTitle="E-commerce Platform Redesign"
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
        imageAlt="E-commerce platform"
        href="/case-studies/ecommerce"
      />
      <CaseStudyCard
        businessName="Tech Startup"
        year="2023"
        projectTitle="Mobile App Development"
        imageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=800&fit=crop"
        imageAlt="Mobile app"
        href="/case-studies/mobile-app"
      />
      <CaseStudyCard
        businessName="Global Bank"
        year="2024"
        projectTitle="Design System Implementation"
        imageSrc="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=800&fit=crop"
        imageAlt="Design system"
        href="/case-studies/design-system"
      />
      <CaseStudyCard
        businessName="Retail Chain"
        year="2023"
        projectTitle="Customer Portal Redesign"
        imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop"
        imageAlt="Customer portal"
        href="/case-studies/portal"
      />
      <CaseStudyCard
        businessName="SaaS Company"
        year="2024"
        projectTitle="Dashboard UI Overhaul"
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop"
        imageAlt="Dashboard interface"
        href="/case-studies/dashboard"
      />
      <CaseStudyCard
        businessName="Healthcare Provider"
        year="2023"
        projectTitle="Patient Management System"
        imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop"
        imageAlt="Healthcare system"
        href="/case-studies/healthcare"
      />
    </div>
  ),
};
