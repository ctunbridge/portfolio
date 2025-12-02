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

  // Intersection Observer for scroll-based active state
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -70% 0px",
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

    return () => observer.disconnect()
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
          const offsetPosition = elementPosition - 80

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
          "sticky top-0 z-10 col-span-12 min-h-16 overflow-x-auto overflow-y-hidden lg:hidden",
          "scrollbar-hide",
          "-mx-6 md:-mx-8 lg:mx-0",
          "bg-background",
          className
        )}
        {...props}
      >
        <div className="flex h-full items-center gap-6 px-6 pt-0 md:gap-8 md:px-8">
          <Link href="/" className="typography-body-bold mr-1 text-secondary md:mr-2">
            {name}
          </Link>
          {items.map((item, index) => (
            <button
              key={`${item.id || item.label}-${index}`}
              onClick={() => handleItemClick(item, index)}
              className={cn(
                "typography-body whitespace-nowrap text-secondary transition-colors hover:text-primary",
                !item.action && activeSection === item.id && "typography-body-bold text-primary"
              )}
            >
              {item.label}
            </button>
          ))}
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
