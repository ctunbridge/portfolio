# Portfolio

A personal portfolio website showcasing product design work and professional experience. Built with modern web technologies and a custom design system.

## Overview

This is the codebase for my personal portfolio site, featuring case studies from my work at GetGround and Sage, along with an interactive AI assistant that can answer questions about my experience and projects.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Accessible component primitives
- **Vercel AI SDK** - AI assistant integration
- **Storybook** - Component development and documentation
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing utilities

## Design System

The portfolio uses a custom design system built on semantic tokens and CSS variables:

- **Color System**: Two-layer token system with primitive colors mapped to semantic tokens
- **Typography**: Pre-styled HTML elements with CSS variable-based sizing
- **Animations**: Custom CSS animations for entrance effects (fade, slide, scale)
- **Spacing**: 4px grid system using Tailwind utilities
- **Icons**: Lucide React icons (tree-shakeable)

All design tokens are defined in `app/tokens.css` and `app/globals.css`, ensuring consistency across components.

## Architecture Decisions

### Component Structure
- Components follow the shadcn/ui pattern with variants using `class-variance-authority`
- Co-located stories and tests with components
- Semantic HTML and accessibility built-in

### Layout System
- Centered container (max-width: 1280px) with responsive viewport margins
- 12-column grid system for responsive layouts
- Mobile-first approach with breakpoints at 768px and 1024px

### AI Assistant
- Server-side streaming responses using Vercel AI SDK
- Context-aware system prompts for portfolio-specific information
- Client-side chat interface with message history

### Performance
- Next.js Image optimization for all assets
- Tree-shakeable icon imports
- Bundle analysis available via `npm run analyze`

## Project Structure

```
app/
├── api/portfolio-chat/    # AI assistant API endpoint
├── chat/                   # Chat interface page
├── [case-studies]/         # Individual case study pages
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page
├── globals.css             # Global styles and typography
└── tokens.css              # Design system color tokens

components/
├── ui/                     # Reusable UI components
├── home-intro/             # Home page intro animation
└── layout/                 # Layout components

lib/
├── ai-assistant/           # AI assistant configuration
├── chat-context.tsx        # Chat state management
└── utils.ts                # Utility functions

stories/
└── design-system/          # Storybook documentation
```

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Component Development

```bash
# Run Storybook
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to browse components in isolation.

### Testing

```bash
# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui
```

## License

MIT License - see [LICENSE](LICENSE) file for details.
