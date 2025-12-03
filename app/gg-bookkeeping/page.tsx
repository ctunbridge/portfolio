/**
 * GG Bookkeeping Page
 */
"use client"

import { TopNav } from "@/components/ui/top-nav/top-nav"

export default function GGBookkeepingPage() {
  const navItems = [
    { label: "Overview", id: "overview" },
    { label: "Features", id: "features" },
    { label: "Process", id: "process" },
  ]

  return (
    <>
      <TopNav items={navItems} />
      <div className="space-y-8">
        {/* Overview Section */}
        <section id="overview" className="min-h-screen">
          <h1 className="typography-h1-demibold mb-6">GG Bookkeeping</h1>
          <p className="typography-body text-secondary">
            Overview section content goes here.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="min-h-screen">
          <h2 className="typography-h2-demibold mb-6">Features</h2>
          <p className="typography-body text-secondary">
            Features section content goes here.
          </p>
        </section>

        {/* Process Section */}
        <section id="process" className="min-h-screen">
          <h2 className="typography-h2-demibold mb-6">Process</h2>
          <p className="typography-body text-secondary">
            Process section content goes here.
          </p>
        </section>
      </div>
    </>
  )
}
