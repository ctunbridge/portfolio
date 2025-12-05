/**
 * Chat Input Component
 *
 * A pill-shaped input for the AI chat assistant.
 * Supports home screen integration and chat panel usage.
 *
 * @example
 * <ChatInput placeholder="Ask something..." onSubmit={handleSubmit} />
 */
"use client"

import * as React from "react"
import { ArrowUp, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

interface ChatInputProps {
  /** Placeholder text for the input */
  placeholder?: string
  /** Current value of the input */
  value?: string
  /** Callback when the value changes */
  onChange?: (value: string) => void
  /** Callback when the form is submitted */
  onSubmit?: (value: string) => void
  /** Callback when the input is focused */
  onFocus?: () => void
  /** Callback when the input loses focus */
  onBlur?: () => void
  /** Whether the input is in a loading state */
  isLoading?: boolean
  /** Whether the input is disabled */
  disabled?: boolean
  /** Additional class names for the container */
  className?: string
  /** Auto focus the input on mount */
  autoFocus?: boolean
}

function ChatInput({
  placeholder = "Ask something...",
  value,
  onChange,
  onSubmit,
  onFocus,
  onBlur,
  isLoading = false,
  disabled = false,
  className,
  autoFocus = false,
}: ChatInputProps) {
  const [internalValue, setInternalValue] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Use controlled or uncontrolled value
  const inputValue = value !== undefined ? value : internalValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onChange?.(newValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading || disabled) return

    onSubmit?.(inputValue.trim())

    // Clear internal value if uncontrolled
    if (value === undefined) {
      setInternalValue("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const canSubmit = inputValue.trim().length > 0 && !isLoading && !disabled

  return (
    <form
      onSubmit={handleSubmit}
      data-slot="chat-input"
      className={cn(
        "relative flex items-center w-full rounded-full bg-card border border-border transition-all",
        "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled || isLoading}
        autoFocus={autoFocus}
        className={cn(
          "flex-1 h-11 pl-4 pr-2 py-2 bg-transparent typography-body",
          "placeholder:text-muted-foreground",
          "outline-none border-none",
          "disabled:cursor-not-allowed"
        )}
        aria-label="Chat input"
      />
      <button
        type="submit"
        disabled={!canSubmit}
        className={cn(
          "flex items-center justify-center size-7 mr-2 rounded-full transition-all",
          "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          canSubmit
            ? "bg-muted-foreground text-card hover:bg-foreground"
            : "bg-muted text-muted-foreground cursor-not-allowed"
        )}
        aria-label={isLoading ? "Sending message" : "Send message"}
      >
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <ArrowUp className="size-4" />
        )}
      </button>
    </form>
  )
}

export { ChatInput }
export type { ChatInputProps }
