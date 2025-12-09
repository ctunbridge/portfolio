/**
 * Sage Design System Case Study Page
 *
 * Sage Design System - A comprehensive case study showcasing
 * the development of Sage's design system across web and mobile platforms.
 */
"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button/button"
import { Footer } from "@/components/ui/footer/footer"
import { TopNav } from "@/components/ui/top-nav/top-nav"

export default function SageDSPage() {
  const navItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Foundations", id: "foundations" },
    { label: "Components", id: "components" },
    { label: "Documentation", id: "documentation" },
  ]

  return (
    <>
      <TopNav items={navItems} />

      <div className="space-y-45 md:space-y-65 lg:space-y-80 pt-40">
        {/* Introduction Section */}
        <section id="introduction" className="space-y-8">
          <h1 className="typography-h2-demibold">Graphite Design System</h1>

          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Platform</span> · Native iOS/Android
              </p>

              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Team</span> · Built in Figma, documented using Zeroheight
              </p>

              <p className="typography-body text-foreground">
                <span className="typography-body-bold">Role</span> · Lead Product Designer
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-ds/SageDSHero.jpg"
            alt="Sage Design System overview showing components, navigation, and design tokens"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg"
          />
        </section>

        {/* Foundations Section */}
        <section id="foundations" className="space-y-8">
          <h2 className="typography-h3-demibold">Foundations</h2>

          {/* Foundations Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colour Variables */}
            <div className="space-y-4">
              <h3 className="typography-h4-demibold">Colour Variables</h3>
              <p className="typography-body text-foreground">
                Colour variables establish the foundational colour palette and semantic tokens
                used throughout the design system; primary, secondary, and functional colours
                that maintain accessibility standards and brand consistency.
              </p>
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <h3 className="typography-h4-demibold">Typography</h3>
              <p className="typography-body text-foreground">
                Typography systems define the hierarchy, scale, and styling of text across
                all platforms, ensuring readability and consistency in how information
                is presented to users.
              </p>
            </div>

            {/* Icons */}
            <div className="space-y-4">
              <h3 className="typography-h4-demibold">Icons</h3>
              <p className="typography-body text-foreground">
                Icons help users clearly communicate actions, navigate products, and understand
                information. Designed to be accessible, consistent, and recognizable across all
                platforms.
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-ds/Foundations 1.jpg"
            alt="Design system foundations showing colour variables, typography, and icon library"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />
        </section>

        {/* Components Section */}
        <section id="components" className="space-y-8">
          <h2 className="typography-h3-demibold">Components</h2>

          {/* Components Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Native */}
            <div className="space-y-4">
              <h3 className="typography-h4-demibold">Native</h3>
              <p className="typography-body text-foreground">
                Native components for iOS and Android use platform-specific technologies,
                designed to feel natural on each platform while maintaining the Sage brand
                and experience. These components work with the shared iOS/Android library
                of variables.
              </p>
            </div>

            {/* Bespoke */}
            <div className="space-y-4">
              <h3 className="typography-h4-demibold">Bespoke</h3>
              <p className="typography-body text-foreground">
                Bespoke components are custom-built for specific use cases within Sage products,
                created for Sage.com and custom web services using React. These components work
                with the web library of variables, allowing teams to create bespoke components
                suited to their products.
              </p>
            </div>
          </div>

          <Image
            src="/images/case-studies/sage-ds/Components 1.jpg"
            alt="Design system components showing native and bespoke implementations"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />
        </section>

        {/* Documentation Section */}
        <section id="documentation" className="space-y-8">
          <h2 className="typography-h3-demibold">Documentation</h2>

          <Image
            src="/images/case-studies/sage-ds/Zeroheight 1.jpg"
            alt="Documentation platforms showing Figma and Zeroheight implementation"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg mt-12 mb-15"
          />

          {/* Documentation Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Figma */}
            <div className="space-y-4">
              <h3 className="typography-h4-demibold">Figma</h3>
              <p className="typography-body text-foreground">
                All components, styles, and variables are documented in Figma with guidelines
                for designers. Each component includes usage guidelines, variants, and best
                practices to ensure consistent implementation across designs.
              </p>
            </div>

            {/* Zeroheight */}
            <div className="space-y-4">
              <h3 className="typography-h4-demibold">Zeroheight</h3>
              <p className="typography-body text-foreground">
                Comprehensive end-to-end documentation in Zeroheight for developers. Developers
                can access all components, usage guidelines, code examples, and design token
                values to ensure accurate implementation. Zeroheight acts as the single source
                of truth for the design system.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Next Project Button */}
      <div className="mt-60 flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/gg-bookkeeping">Next project</Link>
        </Button>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-12 mt-40 pb-40">
        <div className="col-span-12 lg:col-span-9 lg:col-start-3">
          <Footer />
        </div>
      </div>
    </>
  )
}
