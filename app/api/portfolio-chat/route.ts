/**
 * Portfolio Chat API Route
 *
 * POST /api/portfolio-chat
 *
 * Streaming chat endpoint for the portfolio AI assistant.
 * Uses Vercel AI SDK for SSE streaming responses.
 */

import { openai } from "@ai-sdk/openai"
import { streamText, type CoreMessage } from "ai"

import { portfolioOpenUILibrary } from "@/components/openui/portfolio-openui-library"
import { getAssistantConfig } from "@/lib/ai-assistant/assistant"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

export async function POST(req: Request) {
  try {
    // Check for API key
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY is not set")
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    const body = await req.json()
    const messages: ChatMessage[] = body.messages

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "messages array is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    const validMessages = messages.filter(
      (msg) => typeof msg.content === "string" && msg.content.trim().length > 0
    )

    if (validMessages.length === 0) {
      return new Response(
        JSON.stringify({ error: "At least one non-empty message is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    // Get assistant configuration with system prompt
    const config = getAssistantConfig()
    const openUISystemPrompt = portfolioOpenUILibrary.prompt({
      preamble: `${config.systemPrompt}\n\n## Generative UI response format\nYou can now return a small interactive portfolio surface instead of Markdown. Use the supplied OpenUI components when they make the answer easier to scan or act on. Use CaseStudyCard for relevant project recommendations, CapabilityList for a concise skills/experience comparison, and ContactCard only when the visitor asks to contact Chris or wants to draft a message. TextInput is optional and never sends data by itself.\n\nReturn only valid OpenUI Lang. Every response must start with root = PortfolioResponse([summary]), with referenced component definitions on following lines using positional arguments, for example: root = PortfolioResponse([summary, project]), summary = PortfolioSummary(\"Title\", \"Body\"), project = CaseStudyCard(\"Project\", \"Organisation\", \"Summary\", \"/project\"). Prefer PortfolioSummary first. Never invent project URLs, outcomes, organisations, or contact details.`,
      additionalRules: [
        "Use at most three components per response.",
        "Use only internal portfolio URLs supplied in the portfolio context.",
        "Do not create contact forms unless the visitor explicitly asks to contact Chris or send a message.",
      ],
    })
    console.log("Chat request received, messages:", validMessages.length)

    // Convert simple messages to CoreMessage format
    const coreMessages: CoreMessage[] = validMessages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }))

    const result = streamText({
      model: openai.chat(config.model),
      system: openUISystemPrompt,
      messages: coreMessages,
      temperature: config.temperature,
      maxOutputTokens: config.maxTokens,
    })

    // Use toTextStreamResponse for simple plain text streaming
    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Portfolio chat error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}

