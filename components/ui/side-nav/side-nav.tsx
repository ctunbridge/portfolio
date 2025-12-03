"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface SideNavItem {
  label: string
  id?: string
  action?: () => void
}

export interface SideNavProps extends React.ComponentProps<"nav"> {
  items: SideNavItem[]
  name?: string
}

function SideNav({ items, name = "CT", className, ...props }: SideNavProps) {
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

  // Intersection Observer for scroll-based active state
  React.useEffect(() => {
    // Handle scroll to detect when at top of page
    const handleScroll = () => {
      const scrollY = window.scrollY

      // If at or near the top of the page (within 100px), set to first section
      if (scrollY < 100) {
        const firstItem = items.find(item => item.id && !item.action)
        if (firstItem?.id) {
          setActiveSection(firstItem.id)
        }
        return
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 100) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-10% 0px -80% 0px",
        threshold: 0,
      }
    )

    items.forEach((item) => {
      // Only observe items with section IDs (not action items)
      if (item.id && !item.action) {
        const element = document.getElementById(item.id)
        if (element) {
          observer.observe(element)
        }
      }
    })

    // Set initial state
    handleScroll()

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])


  const handleItemClick = (item: SideNavItem, index: number) => {
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
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
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
    <>
      {/* Mobile/Tablet Horizontal Scrollable Navigation */}
      <nav
        data-slot="side-nav-mobile"
        className={cn(
          "sticky top-0 z-10 col-span-12 h-15 md:h-20 lg:hidden",
          "-mx-6 md:-mx-8 lg:mx-0",
          "bg-background",
          className
        )}
        {...props}
      >
        <div className="relative flex h-full items-center">
          {/* Fixed CT link with background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center bg-background pl-6 pr-4 md:pl-8 md:pr-6">
            <Link href="/" className="typography-body-bold pointer-events-auto text-secondary">
              {name}
            </Link>
          </div>
          {/* Scrollable section items */}
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex h-full w-full items-center gap-6 overflow-x-auto pl-16 pr-6 md:gap-8 md:pl-20 md:pr-8"
          >
            {items.map((item, index) => (
              <button
                key={`${item.id || item.label}-${index}`}
                data-section-id={item.id}
                onClick={() => handleItemClick(item, index)}
                className={cn(
                  "typography-body whitespace-nowrap text-secondary transition-colors hover:text-foreground",
                  !item.action && activeSection === item.id && "typography-body-bold text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop Side Navigation */}
      <nav
        data-slot="side-nav-desktop"
        className={cn(
          "hidden lg:flex lg:flex-col",
          "col-span-3 gap-3",
          "sticky top-0 h-fit",
          "pt-10",
          className
        )}
        {...props}
      >
        <Link href="/" className="typography-body-bold mb-50 text-secondary">
          {name}
        </Link>
        {items.map((item, index) => (
          <button
            key={`${item.id || item.label}-${index}`}
            onClick={() => handleItemClick(item, index)}
            className={cn(
              "typography-body text-left text-secondary transition-colors hover:text-primary",
              !item.action && activeSection === item.id && "typography-body-bold text-primary"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  )
}

export { SideNav }
