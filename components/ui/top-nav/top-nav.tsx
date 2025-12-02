/**
 * Top Navigation Component
 *
 * A simple sticky navigation displaying the site name with a link to home.
 */
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface TopNavProps extends React.ComponentProps<"nav"> {
  /** The name to display in the navigation */
  name?: string
}

function TopNav({ className, name = "Chris Tunbridge", ...props }: TopNavProps) {
  return (
    <nav
      data-slot="top-nav"
      className={cn(
        "sticky top-0 z-50 flex h-20 w-full items-center bg-transparent px-6 md:px-8 lg:px-14",
        className
      )}
      {...props}
    >
      <Link href="/" className="typography-body-bold text-secondary">
        {name}
      </Link>
    </nav>
  )
}

export { TopNav }

