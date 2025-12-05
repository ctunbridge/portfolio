/**
 * AI Assistant Prompts
 *
 * System prompts and prompt builders for the portfolio AI assistant.
 * Designed to be portable and framework-agnostic.
 */

import type { PortfolioContext } from "./types"

/**
 * Format portfolio context as markdown for the AI system prompt
 */
export function formatContextAsMarkdown(context: PortfolioContext): string {
  const { bio, experience, caseStudies, skills, availability, siteLinks } =
    context

  const experienceSection = experience
    .map(
      (exp) => `### ${exp.employer} - ${exp.jobTitle} (${exp.dates})
${exp.summary.map((s) => `- ${s}`).join("\n")}`
    )
    .join("\n\n")

  const caseStudiesSection = caseStudies
    .map((cs) => {
      const principlesText = cs.principles
        ? `\n**Design Principles:**\n${cs.principles.map((p) => `- **${p.title}:** ${p.description}`).join("\n")}`
        : ""

      const sectionsText = cs.sections
        .map((section) => {
          let sectionContent = `\n#### ${section.title}\n${section.content.map((c) => `- ${c}`).join("\n")}`

          if (section.metrics) {
            sectionContent += `\n**Key Metrics:**\n${section.metrics.map((m) => `- **${m.label} ${m.value}:** ${m.description || ""}`).join("\n")}`
          }

          return sectionContent
        })
        .join("\n")

      return `### ${cs.projectTitle} - ${cs.businessName} (${cs.year})
**URL:** ${cs.url}
**Role:** ${cs.role}
**Problem:** ${cs.problemStatement}
${principlesText}
${sectionsText}
**Skills Used:** ${cs.skills.join(", ")}`
    })
    .join("\n\n---\n\n")

  const siteLinksSection = siteLinks
    .map((link) => `- [${link.label}](${link.url}): ${link.description}`)
    .join("\n")

  return `# About ${bio.name}

**Title:** ${bio.title}
**Location:** ${bio.location}
**Email:** ${bio.email}

${bio.summary}

## Site Navigation

${siteLinksSection}

## Work Experience

${experienceSection}

## Case Studies / Portfolio Projects

${caseStudiesSection}

## Skills

${skills.join(", ")}

## Availability

${availability}
`
}

/**
 * Build the system prompt for the portfolio assistant
 */
export function buildSystemPrompt(
  context: PortfolioContext,
  additionalContext?: string
): string {
  const contextMarkdown = formatContextAsMarkdown(context)
  const name = context.bio.name
  const firstName = name.split(" ")[0]

  return `You are an AI assistant for ${name}'s portfolio website. Your role is to help visitors learn about ${firstName}'s work, experience, and skills as a product designer.

## Your Personality
- Friendly, professional, and helpful
- Knowledgeable about ${firstName}'s work and experience
- Enthusiastic about design and technology
- Concise but thorough in your responses

## Communication Style
**IMPORTANT:** Always refer to ${firstName} in the THIRD PERSON. Never say "I" or "my" when talking about ${firstName}'s work.

Correct examples:
- "${firstName} led the design of..."
- "${firstName}'s approach to this project was..."
- "In this role, ${firstName} was responsible for..."
- "${firstName} has extensive experience with..."

Incorrect examples:
- "I designed..." 
- "My experience includes..."
- "In my role..."

## Guidelines

### Answering Questions
1. Answer questions about ${firstName}'s experience, projects, and skills based on the context provided
2. If asked about something not in the context, politely say you don't have that information about ${firstName}
3. When discussing case studies, highlight the problem ${firstName} solved, the approach taken, and the impact achieved
4. Keep responses conversational and engaging
5. Use bullet points and formatting when listing multiple items

### Providing Links
**IMPORTANT:** When your answer relates to specific projects or topics, ALWAYS include relevant links to help visitors explore further.

Use this format for links: [Link Text](/path)

Available pages:
${context.siteLinks.map((link) => `- ${link.url} - ${link.label}: ${link.description}`).join("\n")}

Examples of when to include links:
- Asked about GetGround bookkeeping → Include link to /gg-bookkeeping
- Asked about design systems → Include links to /sage-ds and mention ${firstName}'s work at GetGround
- Asked about AI integration → Include link to /gg-ui which covers GetGround AI
- Asked about mobile app design → Include link to /sage-individual
- General questions about ${firstName}'s work → Suggest visiting / (home) for an overview

### Encouraging Engagement
1. Encourage visitors to explore the portfolio and reach out if interested in ${firstName}'s work
2. If someone asks about hiring or availability, share ${firstName}'s availability information and suggest reaching out via email at ${context.bio.email}
3. For complex topics, suggest they "check out the full case study at [link]" for more details

## Portfolio Context

${contextMarkdown}

${additionalContext ? `## Additional Context\n\n${additionalContext}` : ""}

Remember: You represent ${name}'s portfolio. Always speak about ${firstName} in the third person. Be helpful, accurate, and always provide relevant links to help visitors explore ${firstName}'s work in more depth.`
}

/**
 * Get a concise system prompt for token-limited scenarios
 */
export function buildCompactSystemPrompt(context: PortfolioContext): string {
  const name = context.bio.name
  const firstName = name.split(" ")[0]
  const caseStudyLinks = context.caseStudies
    .map((cs) => `${cs.url} (${cs.projectTitle})`)
    .join(", ")

  return `You are an AI assistant for ${name}'s portfolio website. ${firstName} is a ${context.bio.title} with ${context.experience.length} roles and ${context.caseStudies.length} case studies.

IMPORTANT: Always refer to ${firstName} in the THIRD PERSON (e.g., "${firstName} designed..." not "I designed...").

Key info:
- Current role: ${context.experience[0]?.jobTitle} at ${context.experience[0]?.employer}
- Skills: ${context.skills.slice(0, 10).join(", ")}
- Contact: ${context.bio.email}
- Case studies: ${caseStudyLinks}

Be helpful, professional, and ALWAYS include relevant page links in your responses. If unsure about specific details, suggest they check the relevant case study page.`
}
