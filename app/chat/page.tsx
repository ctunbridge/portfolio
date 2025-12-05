/**
 * Chat Page (Temporary)
 *
 * Test page for the AI portfolio assistant.
 * This can be moved to a modal, sidebar, or embedded component later.
 */
"use client"

import * as React from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { ArrowLeft, Sparkles, AlertCircle } from "lucide-react"

import { ChatInput } from "@/components/ui/chat-input/chat-input"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = React.useState<Message[]>([])
  const [input, setInput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (value: string) => {
    if (!value.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: value.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `Error: ${response.status}`)
      }

      // Handle streaming response (plain text)
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error("No response body")
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      }

      setMessages((prev) => [...prev, assistantMessage])

      let fullContent = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        // Plain text streaming - just append the chunk
        const chunk = decoder.decode(value, { stream: true })
        fullContent += chunk

        // Update the assistant message with accumulated content
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessage.id ? { ...m, content: fullContent } : m
          )
        )
      }
    } catch (err) {
      console.error("Chat error:", err)
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span className="typography-body">Back to portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-accent" />
            <span className="typography-body-bold">Portfolio Assistant</span>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto py-8">
        <div className="space-y-6">
          {messages.length === 0 && !error && (
            <div className="text-center py-20 animate-fade-in">
              <Sparkles className="size-12 text-accent mx-auto mb-6" />
              <h1 className="typography-h4-demibold mb-3">
                Hi, I&apos;m Chris&apos;s portfolio assistant
              </h1>
              <p className="typography-body text-muted-foreground max-w-md mx-auto mb-8">
                Ask me anything about Chris&apos;s work, experience, skills, or
                projects. I can help you explore the portfolio.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "What projects has Chris worked on?",
                  "Tell me about his design system work",
                  "What's his experience with AI?",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 rounded-full border border-border bg-card hover:bg-muted/50 typography-body-sm transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex animate-fade-in",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border"
                )}
              >
                {message.role === "assistant" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="size-3 text-accent" />
                    <span className="typography-caption text-muted-foreground">
                      Assistant
                    </span>
                  </div>
                )}
                <div
                  className={cn(
                    "typography-body",
                    message.role === "user"
                      ? "text-primary-foreground"
                      : "text-foreground"
                  )}
                >
                  {message.content ? (
                    <div className="space-y-3">
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
                        ul: ({ children }) => (
                          <ul className="list-disc pl-5">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal pl-5">{children}</ol>
                        ),
                        li: ({ children }) => (
                          <li>{children}</li>
                        ),
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
                        p: ({ children }) => (
                          <p>{children}</p>
                        ),
                        // Style code
                        code: ({ children }) => (
                          <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
                            {children}
                          </code>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                    </div>
                  ) : (
                    <span className="text-muted-foreground italic">
                      Thinking...
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-card border border-border rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-3 text-accent animate-pulse" />
                  <span className="typography-caption text-muted-foreground">
                    Thinking...
                  </span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="flex justify-center animate-fade-in">
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl px-4 py-3 max-w-md">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="size-4" />
                  <span className="typography-body-bold">Error</span>
                </div>
                <p className="typography-body-sm text-destructive mt-1">
                  {error}
                </p>
                <button
                  onClick={() => setError(null)}
                  className="typography-body-sm text-muted-foreground underline mt-2 hover:text-foreground"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t border-border py-4">
        <ChatInput
          value={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          placeholder="Ask about Chris's work..."
        />
        {isLoading && (
          <p className="typography-caption text-muted-foreground text-center mt-2">
            Generating response...
          </p>
        )}
      </div>
    </div>
  )
}
