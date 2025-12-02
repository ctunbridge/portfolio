/**
 * Sage Design System Page
 */
"use client"

import { SideNav } from "@/components/ui/side-nav/side-nav"

export default function SageDSPage() {
  const navItems = [
    { label: "Overview", id: "overview" },
    { label: "Components", id: "components" },
    { label: "Guidelines", id: "guidelines" },
  ]

  return (
    <div className="grid grid-cols-12 gap-4">
      <SideNav items={navItems} />

      <div className="col-span-12 space-y-8 pt-45 lg:col-span-9">
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
    </div>
  )
}
