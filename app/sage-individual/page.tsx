/**
 * Sage Individual Page
 */
"use client"

import { SideNav } from "@/components/ui/side-nav/side-nav"

export default function SageIndividualPage() {
  const navItems = [
    { label: "Overview", id: "overview" },
    { label: "Approach", id: "approach" },
    { label: "Results", id: "results" },
  ]

  return (
    <div className="grid grid-cols-12 gap-4">
      <SideNav items={navItems} />

      <div className="col-span-12 space-y-8 pt-45 lg:col-span-9">
        {/* Overview Section */}
        <section id="overview" className="min-h-screen">
          <h1 className="typography-h1-demibold mb-6">Sage Individual</h1>
          <p className="typography-body text-secondary">
            Overview section content goes here.
          </p>
        </section>

        {/* Approach Section */}
        <section id="approach" className="min-h-screen">
          <h2 className="typography-h2-demibold mb-6">Approach</h2>
          <p className="typography-body text-secondary">
            Approach section content goes here.
          </p>
        </section>

        {/* Results Section */}
        <section id="results" className="min-h-screen">
          <h2 className="typography-h2-demibold mb-6">Results</h2>
          <p className="typography-body text-secondary">
            Results section content goes here.
          </p>
        </section>
      </div>
    </div>
  )
}
