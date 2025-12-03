/**
 * Sage Design System Page
 */
"use client"

import { TopNav } from "@/components/ui/top-nav/top-nav"

export default function SageDSPage() {
  const navItems = [
    { label: "Overview", id: "overview" },
    { label: "Components", id: "components" },
    { label: "Guidelines", id: "guidelines" },
  ]

  return (
    <>
      <TopNav items={navItems} />
      <div className="space-y-8">
        {/* Overview Section */}
        <section id="overview" className="min-h-screen">
          <h1 className="typography-h1-demibold mb-6">Sage Design System</h1>
          <p className="typography-body text-secondary">
            Overview section content goes here.
          </p>
        </section>

        {/* Components Section */}
        <section id="components" className="min-h-screen">
          <h2 className="typography-h2-demibold mb-6">Components</h2>
          <p className="typography-body text-secondary">
            Components section content goes here.
          </p>
        </section>

        {/* Guidelines Section */}
        <section id="guidelines" className="min-h-screen">
          <h2 className="typography-h2-demibold mb-6">Guidelines</h2>
          <p className="typography-body text-secondary">
            Guidelines section content goes here.
          </p>
        </section>
      </div>
    </>
  )
}
