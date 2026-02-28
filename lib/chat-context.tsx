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
  /** Message queued from the home input before the panel opened */
  pendingMessage: string | null
  /** Open the panel and queue a message to be submitted */
  openWithMessage: (message: string) => void
  /** Clear the pending message after it has been processed */
  clearPendingMessage: () => void
}

const ChatContext = React.createContext<ChatContextValue | undefined>(undefined)

interface ChatProviderProps {
  children: React.ReactNode
}

function ChatProvider({ children }: ChatProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [pendingMessage, setPendingMessage] = React.useState<string | null>(null)

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const openWithMessage = React.useCallback((message: string) => {
    setPendingMessage(message)
    setIsOpen(true)
  }, [])

  const clearPendingMessage = React.useCallback(() => {
    setPendingMessage(null)
  }, [])

  const value = React.useMemo(
    () => ({ isOpen, setIsOpen, toggle, pendingMessage, openWithMessage, clearPendingMessage }),
    [isOpen, toggle, pendingMessage, openWithMessage, clearPendingMessage]
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

