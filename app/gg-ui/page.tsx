/**
 * GG UI Page
 *
 * Test page for navigation routing.
 */
"use client"

import { TopNav } from "@/components/ui/top-nav/top-nav"

export default function GGUIPage() {
  const navItems = [
    { label: "Overview", id: "overview" },
    { label: "Components", id: "components" },
    { label: "Examples", id: "examples" },
  ]

  return (
    <>
      <TopNav items={navItems} />
      <div className="space-y-8">
        <section id="overview" className="min-h-screen">
          <h1 className="typography-h1-demibold mb-6">GG UI</h1>
          <p className="typography-body text-muted-foreground">
            This is a test page for navigation routing. Click the name in the
            navigation to return home.
          </p>
        </section>

        <section id="components" className="min-h-screen">
          <h2 className="typography-h2-demibold mb-6">Components</h2>
          <p className="typography-body text-secondary">
            Components section content goes here.
          </p>
        </section>

        <section id="examples" className="min-h-screen">
          <h2 className="typography-h2-demibold mb-6">Examples</h2>
          <p className="typography-body text-secondary">
            Examples section content goes here.
          </p>
        </section>
      </div>
    </>
  )
}
