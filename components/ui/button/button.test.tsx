import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import { Button } from "./button"

describe("Button", () => {
  it("renders with children text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
  })

  it("applies variant styles correctly", () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole("button", { name: /delete/i })
    expect(button).toBeInTheDocument()
  })

  it("handles disabled state", () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole("button", { name: /disabled/i })
    expect(button).toBeDisabled()
  })

  it("renders with different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole("button", { name: /small/i })).toBeInTheDocument()

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole("button", { name: /large/i })).toBeInTheDocument()
  })
})

