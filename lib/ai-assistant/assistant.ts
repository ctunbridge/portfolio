/**
 * Portfolio Assistant Core Logic
 *
 * Framework-agnostic assistant factory and utilities.
 * Can be used with any AI provider that supports the Vercel AI SDK.
 */

import type { AssistantConfig, PortfolioContext } from "./types"
import { getPortfolioContext } from "./context"
import { buildSystemPrompt } from "./prompts"

/**
 * Default configuration for the portfolio assistant
 */
export const defaultConfig: Required<
  Pick<AssistantConfig, "model" | "temperature" | "maxTokens">
> = {
  model: "gpt-4o-mini",
  temperature: 0.7,
  maxTokens: 1024,
}

/**
 * Create the system prompt for the portfolio assistant
 * This is the main entry point for getting the configured prompt
 */
export function createSystemPrompt(config?: AssistantConfig): string {
  const context: PortfolioContext = getPortfolioContext()

  if (config?.systemPrompt) {
    return config.systemPrompt
  }

  return buildSystemPrompt(context, config?.additionalContext)
}

/**
 * Get the full assistant configuration with defaults applied
 */
export function getAssistantConfig(
  config?: AssistantConfig
): Required<Pick<AssistantConfig, "model" | "temperature" | "maxTokens">> & {
  systemPrompt: string
} {
  return {
    model: config?.model ?? defaultConfig.model,
    temperature: config?.temperature ?? defaultConfig.temperature,
    maxTokens: config?.maxTokens ?? defaultConfig.maxTokens,
    systemPrompt: createSystemPrompt(config),
  }
}

