import type { ReactNode } from "react"

interface Section {
  id: string
  title: string
  content: ReactNode
}

interface CaseStudyLayoutProps {
  sections: Section[]
}

export function CaseStudyLayout({ sections }: CaseStudyLayoutProps) {
  return (
    <div className="space-y-[400px]">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-[200px]"
        >
          <h2 className="typography-h5-normal mb-8">{section.title}</h2>
          {section.content}
        </section>
      ))}
    </div>
  )
}
