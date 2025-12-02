/**
 * GG UI Page
 *
 * Test page for navigation routing.
 */
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GG UI",
  description: "GG UI test page",
}

export default function GGUIPage() {
  return (
    <div className="space-y-8 px-14">
      <h1 className="typography-h1-demibold">GG UI</h1>
      <p className="typography-body text-muted-foreground">
        This is a test page for navigation routing. Click the name in the
        navigation to return home.
      </p>
    </div>
  )
}

