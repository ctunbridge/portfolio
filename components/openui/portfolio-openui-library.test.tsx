import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { AssistantMessage } from "@/components/ui/assistant-message/assistant-message"
import { Renderer } from "@openuidev/react-lang"

import { portfolioOpenUILibrary } from "./portfolio-openui-library"

const portfolioResponse = `root = PortfolioResponse([summary, project, contact])
summary = PortfolioSummary("Relevant work", "Chris has worked on AI-assisted workflows.")
project = CaseStudyCard("Inbox", "GetGround", "Designed a unified action surface.", "/gg-inbox", "Principal Designer", ["AI workflows", "Design systems"])
contact = ContactCard("Discuss a role", "Write a note and open an email draft.", "hello@christunbridge.co.uk", "Portfolio enquiry")`

describe("portfolioOpenUILibrary", () => {
  it("renders a streamed-style portfolio response with a case-study card and email action", () => {
    render(<AssistantMessage content={portfolioResponse} />)

    expect(screen.getByText("Relevant work")).toBeTruthy()
    expect(screen.getByRole("link", { name: /inbox/i }).getAttribute("href")).toBe("/gg-inbox")
    expect(screen.getByRole("link", { name: /open email draft/i }).getAttribute("href")).toContain(
      "mailto:hello@christunbridge.co.uk"
    )
  })

  it("renders a local-only text input when the model requests one", () => {
    const textInputResponse = `root = PortfolioResponse([input])
input = TextInput("Your email", "you@example.com", "email", "Only used in this browser until you choose to send a message.")`

    render(<Renderer response={textInputResponse} library={portfolioOpenUILibrary} />)

    const input = screen.getByLabelText("Your email") as HTMLInputElement
    expect(input.type).toBe("email")
    expect(screen.getByText(/only used in this browser/i)).toBeTruthy()
  })
})
