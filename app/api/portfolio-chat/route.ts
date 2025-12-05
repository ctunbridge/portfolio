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

import { getAssistantConfig } from "@/lib/ai-assistant/assistant"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const messages: ChatMessage[] = body.messages

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "messages array is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    // Get assistant configuration with system prompt
    const config = getAssistantConfig()

    // Convert simple messages to CoreMessage format
    const coreMessages: CoreMessage[] = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }))

    const result = streamText({
      model: openai(config.model),
      system: config.systemPrompt,
      messages: coreMessages,
      temperature: config.temperature,
      maxOutputTokens: config.maxTokens,
    })

    // Use toTextStreamResponse for simple plain text streaming
    return result.toTextStreamResponse()
  } catch (error) {
    console.error("Portfolio chat error:", error)
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}

