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
 *     { icon: <Icon />, label: "Tell me about recent work..." },
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
  /** Icon element to display */
  icon: React.ReactNode
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
  title = "What would you like to do?",
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
          // Desktop: side panel anchored to bottom, fills to max height
          "lg:top-auto lg:right-4 lg:bottom-4 lg:h-[min(1200px,calc(100vh-32px))]",
          "lg:w-[356px] lg:rounded-3xl lg:border lg:border-border",
          "lg:shadow-panel",
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

        {/* Content area */}
        <div 
          className={cn(
            "flex-1 overflow-y-auto px-6 scrollbar-hide",
            showSuggestions && "flex flex-col justify-center"
          )}
          onScroll={handleScroll}
        >
          {showSuggestions ? (
            // Suggestions view - centered empty state
            <div className="space-y-6">
              <h2 className="typography-h5-demibold text-foreground">
                {title}
              </h2>
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={suggestion.onClick}
                    className={cn(
                      "w-full flex items-center gap-2 p-3",
                      "bg-background rounded-2xl",
                      "hover:bg-muted/50 transition-colors",
                      "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                      "text-left"
                    )}
                  >
                    <div className="flex-shrink-0 text-muted-foreground [&_svg]:size-4 pb-0.5">
                      {suggestion.icon}
                    </div>
                    <span className="typography-body-sm text-foreground">
                      {suggestion.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Messages view
            <div className="space-y-6 pb-6">
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

        {/* Input area */}
        <div className="flex-shrink-0 relative">
          {/* Gradient fade overlay */}
          <div 
            className="absolute inset-x-0 -top-8 h-8 pointer-events-none bg-gradient-to-t from-white to-transparent"
            aria-hidden="true"
          />
          <div className="p-4 bg-white/80 backdrop-blur-sm lg:rounded-b-3xl">
            <ChatInput
              placeholder={placeholder}
              onSubmit={onSubmit}
              isLoading={isLoading}
              autoFocus={shouldAutoFocus}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export { ChatPanel }
export type { ChatPanelProps, Suggestion, Message }
