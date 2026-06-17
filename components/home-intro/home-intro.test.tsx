import { act, fireEvent, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  EXIT_ANIMATION_DURATION_MS,
  HomeIntro,
} from "@/components/home-intro/home-intro"

describe("HomeIntro", () => {
  beforeEach(() => {
    vi.useRealTimers()
  })

  it("shows an error for an incorrect password", () => {
    render(<HomeIntro />)

    fireEvent.change(screen.getByPlaceholderText(/enter password/i), {
      target: { value: "wrong-password" },
    })
    fireEvent.click(screen.getByRole("button", { name: /^enter$/i }))

    expect(
      screen.getByText(/email hello@christunbridge\.co\.uk for the password/i)
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/enter password/i)).toBeInTheDocument()
  })

  it("completes after the exit animation when the password is correct", () => {
    vi.useFakeTimers()
    const onComplete = vi.fn()

    render(<HomeIntro onComplete={onComplete} />)

    fireEvent.change(screen.getByPlaceholderText(/enter password/i), {
      target: { value: "CTPortfolio26" },
    })
    fireEvent.submit(screen.getByRole("button", { name: /^enter$/i }).closest("form")!)

    expect(onComplete).not.toHaveBeenCalled()

    act(() => {
      vi.advanceTimersByTime(EXIT_ANIMATION_DURATION_MS)
    })

    expect(onComplete).toHaveBeenCalledTimes(1)
    expect(screen.queryByPlaceholderText(/enter password/i)).not.toBeInTheDocument()
  })
})
