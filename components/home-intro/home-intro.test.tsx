import { act, fireEvent, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  EXIT_ANIMATION_DURATION_MS,
  HomeIntro,
  INTRO_UNLOCKED_KEY,
} from "@/components/home-intro/home-intro"

describe("HomeIntro", () => {
  beforeEach(() => {
    sessionStorage.clear()
    vi.useRealTimers()
  })

  it("shows an error for an incorrect password", () => {
    render(<HomeIntro />)

    fireEvent.change(screen.getByLabelText(/enter password to view portfolio/i), {
      target: { value: "wrong-password" },
    })
    fireEvent.click(screen.getByRole("button", { name: /enter portfolio/i }))

    expect(screen.getByText(/incorrect password/i)).toBeInTheDocument()
    expect(sessionStorage.getItem(INTRO_UNLOCKED_KEY)).toBeNull()
  })

  it("stores the unlocked state and completes after the exit animation", () => {
    vi.useFakeTimers()
    const onComplete = vi.fn()

    render(<HomeIntro onComplete={onComplete} />)

    fireEvent.change(screen.getByLabelText(/enter password to view portfolio/i), {
      target: { value: "CTPortfolio26" },
    })
    fireEvent.submit(screen.getByRole("button", { name: /enter portfolio/i }).closest("form")!)

    expect(sessionStorage.getItem(INTRO_UNLOCKED_KEY)).toBe("true")
    expect(onComplete).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(EXIT_ANIMATION_DURATION_MS)
    })

    expect(onComplete).toHaveBeenCalledTimes(1)
    expect(screen.queryByLabelText(/enter password to view portfolio/i)).not.toBeInTheDocument()
  })

  it("skips the gate when the session is already unlocked", () => {
    sessionStorage.setItem(INTRO_UNLOCKED_KEY, "true")
    const onComplete = vi.fn()

    render(<HomeIntro onComplete={onComplete} />)

    expect(onComplete).toHaveBeenCalledTimes(1)
    expect(screen.queryByLabelText(/enter password to view portfolio/i)).not.toBeInTheDocument()
  })
})
