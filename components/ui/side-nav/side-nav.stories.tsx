import type { Meta, StoryObj } from "@storybook/nextjs"
import { SideNav } from "./side-nav"
import { useState } from "react"

const meta: Meta<typeof SideNav> = {
  title: "Components/SideNav",
  component: SideNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Dummy content section component
const ContentSection = ({ id, title, number }: { id: string; title: string; number: number }) => (
  <section
    id={id}
    className="min-h-screen scroll-mt-24 rounded-lg border border-muted bg-background p-8"
  >
    <h2 className="typography-h2-demibold mb-6">
      Section {number}: {title}
    </h2>
    <div className="space-y-4">
      <p className="typography-body text-secondary">
        This is the content for section {number}. Scroll down to see how the navigation
        automatically updates based on which section is in view.
      </p>
      <p className="typography-body text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="typography-body text-secondary">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="mt-8 rounded-md bg-muted p-6">
        <h3 className="typography-h5-demibold mb-3">Key Points</h3>
        <ul className="typography-body space-y-2 text-secondary">
          <li>• Point one about section {number}</li>
          <li>• Point two about section {number}</li>
          <li>• Point three about section {number}</li>
        </ul>
      </div>
    </div>
  </section>
)

const defaultItems = [
  { label: "Section 1", id: "section-1" },
  { label: "Section 2", id: "section-2" },
  { label: "Section 3", id: "section-3" },
  { label: "Section 4", id: "section-4" },
  { label: "Section 5", id: "section-5" },
]

export const Default: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => (
    <div className="min-h-screen bg-background p-6 md:p-8 lg:p-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          <SideNav {...args} />
          <div className="col-span-12 space-y-8 lg:col-span-9">
            <ContentSection id="section-1" title="Introduction" number={1} />
            <ContentSection id="section-2" title="Overview" number={2} />
            <ContentSection id="section-3" title="Details" number={3} />
            <ContentSection id="section-4" title="Analysis" number={4} />
            <ContentSection id="section-5" title="Conclusion" number={5} />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const ThreeSections: Story = {
  args: {
    items: [
      { label: "Section 1", id: "three-section-1" },
      { label: "Section 2", id: "three-section-2" },
      { label: "Section 3", id: "three-section-3" },
    ],
  },
  render: (args) => (
    <div className="min-h-screen bg-background p-6 md:p-8 lg:p-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          <SideNav {...args} />
          <div className="col-span-12 space-y-8 lg:col-span-9">
            <ContentSection id="three-section-1" title="Introduction" number={1} />
            <ContentSection id="three-section-2" title="Content" number={2} />
            <ContentSection id="three-section-3" title="Summary" number={3} />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const ManySections: Story = {
  args: {
    items: [
      { label: "Section 1", id: "many-section-1" },
      { label: "Section 2", id: "many-section-2" },
      { label: "Section 3", id: "many-section-3" },
      { label: "Section 4", id: "many-section-4" },
      { label: "Section 5", id: "many-section-5" },
      { label: "Section 6", id: "many-section-6" },
      { label: "Section 7", id: "many-section-7" },
    ],
  },
  render: (args) => (
    <div className="min-h-screen bg-background p-6 md:p-8 lg:p-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          <SideNav {...args} />
          <div className="col-span-12 space-y-8 lg:col-span-9">
            <ContentSection id="many-section-1" title="Introduction" number={1} />
            <ContentSection id="many-section-2" title="Background" number={2} />
            <ContentSection id="many-section-3" title="Methodology" number={3} />
            <ContentSection id="many-section-4" title="Results" number={4} />
            <ContentSection id="many-section-5" title="Discussion" number={5} />
            <ContentSection id="many-section-6" title="Conclusion" number={6} />
            <ContentSection id="many-section-7" title="References" number={7} />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const MobileView: Story = {
  args: {
    items: [
      { label: "Section 1", id: "mobile-section-1" },
      { label: "Section 2", id: "mobile-section-2" },
      { label: "Section 3", id: "mobile-section-3" },
      { label: "Section 4", id: "mobile-section-4" },
      { label: "Section 5", id: "mobile-section-5" },
      { label: "Download CV", action: () => alert("Download CV") },
      { label: "Send enquiry", action: () => alert("Send enquiry") },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: (args) => (
    <div className="min-h-screen bg-background p-6 md:p-8 lg:p-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-4 rounded-md border border-accent bg-accent/10 p-4">
            <p className="typography-body-sm text-accent">
              Scroll horizontally on the navigation bar to see all items →
            </p>
          </div>
          <SideNav {...args} />
          <div className="col-span-12 space-y-8 lg:col-span-9">
            <ContentSection id="mobile-section-1" title="Introduction" number={1} />
            <ContentSection id="mobile-section-2" title="Overview" number={2} />
            <ContentSection id="mobile-section-3" title="Details" number={3} />
            <ContentSection id="mobile-section-4" title="Analysis" number={4} />
            <ContentSection id="mobile-section-5" title="Conclusion" number={5} />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const TabletView: Story = {
  args: {
    items: defaultItems,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  render: (args) => (
    <div className="min-h-screen bg-background p-6 md:p-8 lg:p-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-4">
          <SideNav {...args} />
          <div className="col-span-12 space-y-8 lg:col-span-9">
            <ContentSection id="section-1" title="Introduction" number={1} />
            <ContentSection id="section-2" title="Overview" number={2} />
            <ContentSection id="section-3" title="Details" number={3} />
            <ContentSection id="section-4" title="Analysis" number={4} />
            <ContentSection id="section-5" title="Conclusion" number={5} />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const WithActions: Story = {
  render: () => {
    const WithActionsDemo = () => {
      const [modalOpen, setModalOpen] = useState(false)
      const [downloadCount, setDownloadCount] = useState(0)

      const items = [
        { label: "Section 1", id: "action-section-1" },
        { label: "Section 2", id: "action-section-2" },
        { label: "Section 3", id: "action-section-3" },
        {
          label: "Download CV",
          action: () => {
            setDownloadCount((prev) => prev + 1)
            alert("CV downloaded! (This is a demo action)")
          },
        },
        {
          label: "Send enquiry",
          action: () => {
            setModalOpen(true)
          },
        },
      ]

      return (
        <div className="min-h-screen bg-background p-6 md:p-8 lg:p-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-12 gap-4">
              <SideNav items={items} />
              <div className="col-span-12 space-y-8 lg:col-span-9">
                <div className="rounded-lg border border-accent bg-accent/5 p-6">
                  <h3 className="typography-h5-demibold mb-2">Demo Status</h3>
                  <p className="typography-body text-secondary">
                    Downloads: {downloadCount}
                  </p>
                  <p className="typography-body text-secondary">
                    Modal Open: {modalOpen ? "Yes" : "No"}
                  </p>
                </div>
                <ContentSection id="action-section-1" title="Introduction" number={1} />
                <ContentSection id="action-section-2" title="Portfolio" number={2} />
                <ContentSection id="action-section-3" title="Contact" number={3} />
              </div>
            </div>
          </div>

          {/* Demo Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50">
              <div className="rounded-lg border border-muted bg-background p-8 shadow-lg">
                <h2 className="typography-h3-demibold mb-4">Enquiry Form</h2>
                <p className="typography-body mb-6 text-secondary">
                  This is a demo modal triggered by the action item.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="typography-button rounded-md bg-primary px-4 py-2 text-background transition-colors hover:bg-primary/90"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )
    }

    return <WithActionsDemo />
  },
}

export const MixedActionsAndSections: Story = {
  render: () => {
    const MixedDemo = () => {
      const [status, setStatus] = useState<string>("")

      const items = [
        { label: "Section 1", id: "mixed-section-1" },
        { label: "Section 2", id: "mixed-section-2" },
        {
          label: "Export PDF",
          action: () => setStatus("PDF exported successfully!"),
        },
        { label: "Section 3", id: "mixed-section-3" },
        {
          label: "Share page",
          action: () => setStatus("Share dialog opened!"),
        },
        { label: "Section 4", id: "mixed-section-4" },
      ]

      return (
        <div className="min-h-screen bg-background p-6 md:p-8 lg:p-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-12 gap-4">
              <SideNav items={items} />
              <div className="col-span-12 space-y-8 lg:col-span-9">
                {status && (
                  <div className="rounded-lg border border-accent bg-accent/10 p-4">
                    <p className="typography-body text-accent">{status}</p>
                  </div>
                )}
                <ContentSection id="mixed-section-1" title="Overview" number={1} />
                <ContentSection id="mixed-section-2" title="Details" number={2} />
                <ContentSection id="mixed-section-3" title="Analysis" number={3} />
                <ContentSection id="mixed-section-4" title="Summary" number={4} />
              </div>
            </div>
          </div>
        </div>
      )
    }

    return <MixedDemo />
  },
}
