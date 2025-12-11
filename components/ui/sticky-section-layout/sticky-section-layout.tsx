"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StickySectionLayoutProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export function StickySectionLayout({
  id,
  title,
  children,
  className,
}: StickySectionLayoutProps) {
  const sectionRef = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Section is visible when any part of it is in the viewport
        const entry = entries[0]
        if (entry) {
          setIsVisible(entry.isIntersecting)
        }
      },
      {
        // Trigger when section enters viewport
        threshold: [0, 0.1],
        rootMargin: "-20% 0px -20% 0px",
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn("relative min-h-screen", className)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Sticky title - desktop only */}
        <div className="hidden lg:block lg:col-span-4">
          <div className="sticky top-70 transition-opacity duration-500">
            <h2
              className={cn(
                "typography-h4-normal transition-opacity duration-500",
                isVisible ? "opacity-100" : "opacity-0"
              )}
            >
              {title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="col-span-1 lg:col-span-8 space-y-8">
          {/* Mobile/Tablet title */}
          <h2 className="typography-h3-demibold lg:hidden">{title}</h2>

          {children}
        </div>
      </div>
    </section>
  )
}
