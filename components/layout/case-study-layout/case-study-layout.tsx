"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Section {
  id: string
  title: string
  content: React.ReactNode
}

interface CaseStudyLayoutProps {
  sections: Section[]
}

export function CaseStudyLayout({ sections }: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Trigger point at 70% down from top of viewport (30% up from bottom)
      // This triggers earlier when scrolling down
      const triggerPoint = viewportHeight * 0.7

      // If at or near the top of the page (within 100px), set to first section
      if (scrollY < 100) {
        setActiveSection(0)
        return
      }

      // Find the last section whose top has passed the trigger point
      let activeIndex = 0

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (!element) return

        const rect = element.getBoundingClientRect()
        
        // Section becomes active when its top passes the trigger point
        if (rect.top <= triggerPoint) {
          activeIndex = index
        }
      })

      setActiveSection(activeIndex)
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
  }, [sections])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      {/* Fixed title column - desktop only */}
      <div className="hidden lg:block lg:col-span-4">
        <div className="sticky" style={{ top: '280px' }}>
          <div className="relative min-h-[3rem]">
            {sections.map((section, index) => (
              <h2
                key={section.id}
                className={cn(
                  "typography-h4-normal absolute top-0 left-0 right-0 transition-opacity duration-500",
                  activeSection === index
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                )}
              >
                {section.title}
              </h2>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling content column */}
      <div className="col-span-1 lg:col-span-8 space-y-[400px]">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-[200px]"
          >
            {/* Mobile/Tablet title */}
            <h2 className="typography-h3-demibold lg:hidden mb-8">
              {section.title}
            </h2>

            {section.content}
          </section>
        ))}
      </div>
    </div>
  )
}

