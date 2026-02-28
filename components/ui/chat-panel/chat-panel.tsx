/**
 * Chat Panel Component
 *
 * A responsive panel for the AI chat assistant interface.
 * On desktop/tablet: Displayed as a side panel with page content adjusting.
 * On mobile: Displayed as a full-screen overlay.
 *
 * Includes conversation history, suggested prompts, and chat input.
 *
 * @example
 * <ChatPanel
 *   isOpen={true}
 *   onClose={() => setIsOpen(false)}
 *   suggestions={[
 *     { label: "Tell me about recent work...", onClick: () => {} },
 *   ]}
 * />
 */
"use client"

import * as React from "react"
import { X, SquarePen } from "lucide-react"

import { AssistantMessage } from "@/components/ui/assistant-message/assistant-message"
import { ChatInput } from "@/components/ui/chat-input/chat-input"
import { UserChatBubble } from "@/components/ui/user-chat-bubble/user-chat-bubble"
import { cn } from "@/lib/utils"

interface Suggestion {
  /** Label text for the suggestion */
  label: string
  /** Optional callback when suggestion is clicked */
  onClick?: () => void
}

interface Message {
  /** Message ID */
  id: string
  /** Message role - user or assistant */
  role: "user" | "assistant"
  /** Message content */
  content: string
}

interface ChatPanelProps {
  /** Whether the panel is open */
  isOpen?: boolean
  /** Callback when the panel should close */
  onClose?: () => void
  /** Callback when the new chat button is clicked */
  onNewChat?: () => void
  /** Title text for the panel */
  title?: string
  /** Array of suggested prompts */
  suggestions?: Suggestion[]
  /** Array of messages in the conversation */
  messages?: Message[]
  /** Callback when a message is submitted */
  onSubmit?: (message: string) => void
  /** Whether the assistant is currently responding */
  isLoading?: boolean
  /** Placeholder text for the input */
  placeholder?: string
  /** Additional class names for the panel */
  className?: string
}

function ChatPanel({
  isOpen = false,
  onClose,
  onNewChat,
  title = "What would you like to know?",
  suggestions = [],
  messages = [],
  onSubmit,
  isLoading = false,
  placeholder = "Ask something...",
  className,
}: ChatPanelProps) {
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const [shouldAutoFocus, setShouldAutoFocus] = React.useState(false)
  const [hasScrolled, setHasScrolled] = React.useState(false)

  // Auto-focus input when panel opens
  React.useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the panel is fully rendered
      setTimeout(() => setShouldAutoFocus(true), 100)
    } else {
      setShouldAutoFocus(false)
    }
  }, [isOpen])

  // Handle scroll to show/hide header border
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setHasScrolled(e.currentTarget.scrollTop > 0)
  }

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  if (!isOpen) return null

  const showSuggestions = messages.length === 0 && suggestions.length > 0

  return (
    <>
      {/* Mobile overlay backdrop - only closes on mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden",
          "transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => {
          // Only allow closing via backdrop on mobile
          if (window.innerWidth < 1024) {
            onClose?.()
          }
        }}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        data-slot="chat-panel"
        className={cn(
          // Base styles - mobile full screen
          "fixed top-0 right-0 h-screen w-full bg-white",
          "flex flex-col",
          "z-50",
          // Desktop: side panel anchored to bottom, starts at 600px and grows with content
          "lg:top-auto lg:right-4 lg:bottom-4 lg:h-auto lg:min-h-[600px] lg:max-h-[min(1200px,calc(100vh-32px))]",
          "lg:w-[356px] lg:rounded-3xl lg:border lg:border-border",
          "lg:shadow-panel lg:overflow-hidden",
          // Transitions
          "transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
          className
        )}
      >
        {/* Header */}
        <div className={cn(
          "flex items-center justify-end py-3 px-4 flex-shrink-0 lg:rounded-t-3xl",
          "border-b transition-colors duration-200",
          !showSuggestions && hasScrolled ? "border-border" : "border-transparent"
        )}>
          <div className="flex items-center gap-2">
            {!showSuggestions && (
              <button
                onClick={onNewChat}
                className={cn(
                  "flex items-center justify-center size-9 rounded-full",
                  "hover:bg-muted transition-colors",
                  "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                )}
                aria-label="Start new chat"
              >
                <SquarePen className="size-4 text-foreground" />
              </button>
            )}
            <button
              onClick={onClose}
              className={cn(
                "flex items-center justify-center size-9 rounded-full",
                "hover:bg-muted transition-colors",
                "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]"
              )}
              aria-label="Close panel"
            >
              <X className="size-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Content area - scrollable, takes all remaining flex space */}
        <div
          className={cn(
            "flex-1 overflow-y-auto px-6 pb-24 scrollbar-hide",
            showSuggestions && "flex flex-col justify-end"
          )}
          onScroll={handleScroll}
        >
          {showSuggestions ? (
            <div className="space-y-3">
              <h2 className="typography-body-sm-bold text-foreground">
                {title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={suggestion.onClick}
                    className={cn(
                      "flex items-center px-3 py-2",
                      "bg-background rounded-full border border-border",
                      "hover:bg-muted/50 transition-colors",
                      "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                      "text-left"
                    )}
                  >
                    <span className="typography-body-sm text-foreground">
                      {suggestion.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "user" ? (
                    <UserChatBubble>{message.content}</UserChatBubble>
                  ) : (
                    <AssistantMessage content={message.content} />
                  )}
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <AssistantMessage content="" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Progressive blur overlay - absolute on panel, overlaps content bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to bottom, color-mix(in srgb, var(--background) 0%, transparent) 0%, color-mix(in srgb, var(--background) 85%, transparent) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Input pinned at bottom - above overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 pt-2 lg:rounded-b-3xl">
          <ChatInput
            placeholder={placeholder}
            onSubmit={onSubmit}
            isLoading={isLoading}
            autoFocus={shouldAutoFocus}
          />
        </div>
      </div>
    </>
  )
}

export { ChatPanel }
export type { ChatPanelProps, Suggestion, Message }
