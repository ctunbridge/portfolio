import { act, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  EXIT_ANIMATION_DURATION_MS,
  HomeIntro,
} from "@/components/home-intro/home-intro"

describe("HomeIntro", () => {
  beforeEach(() => {
    sessionStorage.clear()
    vi.useRealTimers()
  })

  it("shows the intro immediately, then completes after the intro and exit animation", () => {
    vi.useFakeTimers()
    const onComplete = vi.fn()

    render(<HomeIntro onComplete={onComplete} />)

    expect(screen.getByText(/chris tunbridge/i)).toBeInTheDocument()
    expect(onComplete).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(EXIT_ANIMATION_DURATION_MS)
    })

    expect(onComplete).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(EXIT_ANIMATION_DURATION_MS)
    })

    expect(onComplete).toHaveBeenCalledTimes(1)
    expect(sessionStorage.getItem("home-intro-shown")).toBe("true")
    expect(screen.queryByText(/chris tunbridge/i)).not.toBeInTheDocument()
  })

  it("skips the intro when it has already been shown this session", () => {
    sessionStorage.setItem("home-intro-shown", "true")
    const onComplete = vi.fn()

    render(<HomeIntro onComplete={onComplete} />)

    expect(onComplete).toHaveBeenCalledTimes(1)
    expect(screen.queryByText(/chris tunbridge/i)).not.toBeInTheDocument()
  })
})
