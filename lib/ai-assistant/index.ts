/**
 * AI Assistant
 *
 * Portable AI assistant logic for Chris Tunbridge's portfolio.
 * Framework-agnostic core with no Next.js-specific dependencies.
 *
 * @example
 * ```ts
 * import { getPortfolioContext, buildSystemPrompt } from '@/lib/ai-assistant'
 *
 * const context = getPortfolioContext()
 * const systemPrompt = buildSystemPrompt(context)
 * ```
 */

// Types
export type {
  Message,
  AssistantConfig,
  Bio,
  Experience,
  CaseStudy,
  CaseStudySection,
  DesignPrinciple,
  PortfolioContext,
  SiteLink,
} from "./types"

// Context
export {
  portfolioContext,
  getPortfolioContext,
  getCaseStudyBySlug,
  getRelevantLinks,
} from "./context"

// Prompts
export {
  formatContextAsMarkdown,
  buildSystemPrompt,
  buildCompactSystemPrompt,
} from "./prompts"

// Assistant
export {
  defaultConfig,
  createSystemPrompt,
  getAssistantConfig,
} from "./assistant"
