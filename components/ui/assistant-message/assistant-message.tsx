/**
 * Assistant Message Component
 *
 * Renders AI assistant message content with markdown formatting.
 * Handles text formatting, links, lists, headings, and code blocks.
 * Works seamlessly with streaming responses.
 *
 * @example
 * <AssistantMessage content="Here's a **bold** statement with a [link](https://example.com)" />
 */
"use client"

import * as React from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

interface AssistantMessageProps {
  /** The message content (supports markdown) */
  content: string
  /** Additional class names for the text container */
  className?: string
}

function AssistantMessage({ content, className }: AssistantMessageProps) {
  if (!content) {
    return (
      <div className={cn("flex items-center gap-2 w-full max-w-225", className)}>
        <div className="pb-0.5">
          <Loader2 className="size-3 text-muted-foreground animate-spin" />
        </div>
        <span className="typography-body-sm text-muted-foreground">
          Thinking...
        </span>
      </div>
    )
  }

  return (
    <div className={cn("space-y-3 typography-body w-full max-w-225", className)}>
      <ReactMarkdown
        components={{
          // Style links with accent color
          a: ({ href, children }) => (
            <Link
              href={href || "#"}
              className="text-accent underline hover:no-underline"
            >
              {children}
            </Link>
          ),
          // Style bold text
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          // Style lists - no extra margins
          ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
          ol: ({ children }) => (
            <ol className="list-decimal pl-5">{children}</ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          // Style headings
          h1: ({ children }) => (
            <h1 className="typography-h5-demibold">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="typography-body-bold">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="typography-body-bold">{children}</h3>
          ),
          // Style paragraphs - no margin, natural flow
          p: ({ children }) => <p>{children}</p>,
          // Style code
          code: ({ children }) => (
            <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export { AssistantMessage }
export type { AssistantMessageProps }
