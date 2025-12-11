/**
 * Top Navigation Component
 *
 * A sticky navigation displaying the site name with a link to home,
 * and optional horizontal scrolling page section links.
 */
"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export interface TopNavItem {
  label: string
  id?: string
  action?: () => void
}

interface TopNavProps extends React.ComponentProps<"nav"> {
  /** The name to display in the navigation */
  name?: string
  /** Optional navigation items for page sections */
  items?: TopNavItem[]
}

function TopNav({ className, name = "CT", items = [], ...props }: TopNavProps) {
  const [activeSection, setActiveSection] = React.useState<string>("")
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  // Scroll active item into view on mobile/tablet (horizontal scroll only)
  React.useEffect(() => {
    if (!activeSection || !scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const activeButton = container.querySelector(
      `[data-section-id="${activeSection}"]`
    ) as HTMLElement

    if (activeButton) {
      // Calculate scroll position to center the button in the container
      const containerRect = container.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()
      const scrollLeft =
        buttonRect.left -
        containerRect.left +
        container.scrollLeft -
        containerRect.width / 2 +
        buttonRect.width / 2

      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      })
    }
  }, [activeSection])

  // Scroll-based active state
  React.useEffect(() => {
    if (items.length === 0) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Trigger point at 70% down from top of viewport (30% up from bottom)
      // This triggers earlier when scrolling down
      const triggerPoint = viewportHeight * 0.7

      // If at or near the top of the page (within 100px), set to first section
      if (scrollY < 100) {
        const firstItem = items.find((item) => item.id && !item.action)
        if (firstItem?.id) {
          setActiveSection(firstItem.id)
        }
        return
      }

      // Find the last section whose top has passed the trigger point
      let activeId = ""

      items.forEach((item) => {
        if (!item.id || item.action) return

        const element = document.getElementById(item.id)
        if (!element) return

        const rect = element.getBoundingClientRect()
        
        // Section becomes active when its top passes the trigger point
        if (rect.top <= triggerPoint) {
          activeId = item.id
        }
      })

      if (activeId) {
        setActiveSection(activeId)
      }
    }

    // Set initial state
    const timer = setTimeout(() => {
      handleScroll()
    }, 100)

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [items])

  const handleItemClick = (item: TopNavItem, index: number) => {
    if (item.action) {
      // Execute the action callback
      item.action()
    } else if (item.id) {
      // First item scrolls to absolute top (0), others scroll with 80px offset
      if (index === 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        const element = document.getElementById(item.id)
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - 100

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }
  }

  return (
    <nav
      data-slot="top-nav"
      className={cn(
        "sticky top-0 z-50 bg-background",
        // Height: 60px mobile, 80px tablet, auto on desktop with pt-10 pb-6
        "h-15 md:h-20 lg:h-auto lg:pt-10 lg:pb-6",
        // Full-bleed on mobile/tablet using negative margins (same as SideNav)
        "-mx-6 md:-mx-8 lg:mx-0",
        className
      )}
      {...props}
    >
      <div className="relative flex h-full items-center lg:h-auto">
        {/* Fixed CT link with background - matches column padding on mobile/tablet */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center bg-background pl-6 pr-4 md:pl-8 md:pr-6 lg:static lg:pl-0 lg:pr-8">
          <Link
            href="/"
            className="typography-body-bold pointer-events-auto text-secondary"
          >
            {name}
          </Link>
        </div>
        {/* Scrollable section items */}
        {items.length > 0 && (
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex h-full w-full items-center gap-6 overflow-x-auto pl-16 pr-6 md:gap-8 md:pl-20 md:pr-8 lg:h-auto lg:justify-end lg:pl-0 lg:pr-0"
          >
            {items.map((item, index) => (
              <button
                key={`${item.id || item.label}-${index}`}
                data-section-id={item.id}
                onClick={() => handleItemClick(item, index)}
                className={cn(
                  "typography-body whitespace-nowrap text-secondary transition-colors hover:text-foreground",
                  !item.action &&
                    activeSection === item.id &&
                    "typography-body-bold text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export { TopNav }
export type { TopNavProps }
