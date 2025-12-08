/**
 * Client Layout
 *
 * Provides the main layout structure with chat panel support.
 * Uses container queries so page content responds to available space.
 */
"use client"

import * as React from "react"
import { Sparkles, Bike, Send } from "lucide-react"
import { track } from "@vercel/analytics"

import { cn } from "@/lib/utils"
import { ChatProvider, useChatContext } from "@/lib/chat-context"
import { ChatPanel, type Message } from "@/components/ui/chat-panel/chat-panel"

interface ClientLayoutProps {
  children: React.ReactNode
}

function LayoutContent({ children }: ClientLayoutProps) {
  const { isOpen, setIsOpen } = useChatContext()
  const [messages, setMessages] = React.useState<Message[]>([])
  const [isLoading, setIsLoading] = React.useState(false)

  // Track when chat panel is opened
  React.useEffect(() => {
    if (isOpen) {
      try {
        track("assistant_panel_opened", {
          location: "home_page",
        })
      } catch (error) {
        // Silently fail if analytics is blocked
        console.debug("Analytics tracking failed:", error)
      }
    }
  }, [isOpen])

  const handleSubmit = async (content: string) => {
    // Track message sent
    const questionPreview = content.length > 50 
      ? `${content.substring(0, 50)}...` 
      : content
    
    try {
      track("assistant_message_sent", {
        location: "home_page",
        question_preview: questionPreview,
        question_length: content.length,
        message_count: messages.length + 1,
      })
    } catch (error) {
      // Silently fail if analytics is blocked
      console.debug("Analytics tracking failed:", error)
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)

    try {
      // Call the AI assistant API
      const response = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      // Create assistant message placeholder
      const assistantMessageId = (Date.now() + 1).toString()
      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: "assistant", content: "" },
      ])

      // Handle streaming response
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (reader) {
        let content = ""
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          content += chunk

          // Update the assistant message with streamed content
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMessageId ? { ...m, content } : m
            )
          )
        }
        
        // Track successful response
        try {
          track("assistant_response_completed", {
            location: "home_page",
            response_length: content.length,
          })
        } catch (error) {
          // Silently fail if analytics is blocked
          console.debug("Analytics tracking failed:", error)
        }
      }
    } catch (error) {
      console.error("Chat error:", error)
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleNewChat = () => {
    setMessages([])
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSubmit(suggestion)
  }

  return (
    <div className="flex min-h-screen">
      {/* Main content area with container queries */}
      <main
        className={cn(
          "@container flex-1 flex flex-col",
          "transition-[margin] duration-300 ease-in-out",
          // On lg+ screens, add margin when panel is open
          // Panel width (356px) + edge padding (16px) = 372px
          isOpen && "lg:mr-[372px]"
        )}
      >
        <div className="flex-1 px-6 @3xl:px-8 @5xl:px-14">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </div>
      </main>

      {/* Chat Panel */}
      <ChatPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNewChat={handleNewChat}
        title="What would you like to do?"
        placeholder="Ask something..."
        messages={messages}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        suggestions={[
          {
            icon: <Sparkles className="size-5" />,
            label: "Tell me about recent work...",
            onClick: () => handleSuggestionClick("Tell me about recent work"),
          },
          {
            icon: <Bike className="size-5" />,
            label: "What does Chris do outside of design...?",
            onClick: () => handleSuggestionClick("What does Chris do outside of design?"),
          },
          {
            icon: <Send className="size-5" />,
            label: "Get in touch",
            onClick: () => handleSuggestionClick("How can I get in touch with Chris?"),
          },
        ]}
      />
    </div>
  )
}

function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ChatProvider>
      <LayoutContent>{children}</LayoutContent>
    </ChatProvider>
  )
}

export { ClientLayout }

