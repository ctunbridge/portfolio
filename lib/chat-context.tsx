/**
 * Chat Context
 *
 * Provides global state management for the chat panel.
 * Used at the layout level so all pages can access chat state.
 */
"use client"

import * as React from "react"

interface ChatContextValue {
  /** Whether the chat panel is currently open */
  isOpen: boolean
  /** Function to set the chat panel open state */
  setIsOpen: (open: boolean) => void
  /** Function to toggle the chat panel */
  toggle: () => void
}

const ChatContext = React.createContext<ChatContextValue | undefined>(undefined)

interface ChatProviderProps {
  children: React.ReactNode
}

function ChatProvider({ children }: ChatProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const value = React.useMemo(
    () => ({ isOpen, setIsOpen, toggle }),
    [isOpen, toggle]
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

function useChatContext() {
  const context = React.useContext(ChatContext)
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider")
  }
  return context
}

export { ChatProvider, useChatContext }
export type { ChatContextValue }

