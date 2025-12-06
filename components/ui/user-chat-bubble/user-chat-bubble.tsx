/**
 * User Chat Bubble Component
 *
 * A chat bubble component for displaying user messages in the AI assistant chat.
 * Features a card-style design with rounded corners and border.
 *
 * @example
 * <UserChatBubble>Hello, can you help me with something?</UserChatBubble>
 */
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface UserChatBubbleProps {
  /** The message content to display */
  children: React.ReactNode
  /** Additional class names for the bubble */
  className?: string
}

function UserChatBubble({ children, className }: UserChatBubbleProps) {
  return (
    <div
      data-slot="user-chat-bubble"
      className={cn(
        "min-w-80 max-w-120 bg-background border border-border rounded-2xl rounded-br-none px-4 py-3",
        "typography-body text-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}

export { UserChatBubble }
export type { UserChatBubbleProps }
