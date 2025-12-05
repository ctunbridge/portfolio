/**
 * AI Assistant Types
 *
 * TypeScript interfaces for the portfolio AI assistant.
 * Framework-agnostic - can be used with any AI provider.
 */

/**
 * Chat message structure compatible with most AI SDKs
 */
export interface Message {
  id?: string
  role: "user" | "assistant" | "system"
  content: string
  createdAt?: Date
}

/**
 * Configuration for creating an AI assistant instance
 */
export interface AssistantConfig {
  /** OpenAI model to use (e.g., 'gpt-4o', 'gpt-4o-mini') */
  model?: string
  /** Custom system prompt (overrides default) */
  systemPrompt?: string
  /** Additional context to inject into the prompt */
  additionalContext?: string
  /** Temperature for response generation (0-2) */
  temperature?: number
  /** Maximum tokens in response */
  maxTokens?: number
}

/**
 * Portfolio owner biographical information
 */
export interface Bio {
  name: string
  title: string
  summary: string
  email: string
  location?: string
}

/**
 * Work experience entry
 */
export interface Experience {
  employer: string
  jobTitle: string
  dates: string
  summary: string[]
}

/**
 * Case study section (e.g., Discovery, Ideation, Delivery)
 */
export interface CaseStudySection {
  title: string
  content: string[]
  metrics?: { label: string; value: string; description?: string }[]
}

/**
 * Design principle
 */
export interface DesignPrinciple {
  title: string
  description: string
}

/**
 * Case study/project entry
 */
export interface CaseStudy {
  slug: string
  url: string
  businessName: string
  projectTitle: string
  year: string
  role: string
  problemStatement: string
  principles?: DesignPrinciple[]
  sections: CaseStudySection[]
  skills: string[]
}

/**
 * Site navigation link
 */
export interface SiteLink {
  label: string
  url: string
  description: string
}

/**
 * Complete portfolio context for the AI
 */
export interface PortfolioContext {
  bio: Bio
  experience: Experience[]
  caseStudies: CaseStudy[]
  skills: string[]
  availability: string
  siteLinks: SiteLink[]
}
