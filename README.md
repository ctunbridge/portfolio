# Design Portfolio

A personal design portfolio showcasing product work and experience, built with Next.js 15 and a custom design system.

## ✨ Features

**Current:**
- Showcase product work and experience
- Contact/enquiry via email

**Tech Stack:**
- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS v4** for styling
- ✅ **shadcn/ui** components
- ✅ **Lucide Icons** - 1000+ beautiful icons
- ✅ **Custom Design System** with customizable colors and typography
- ✅ **CSS Animations** (fade, slide, scale effects)
- ✅ **Storybook** for component development
- ✅ **Testing** with Vitest and React Testing Library
- ✅ **Responsive Layout** with 12-column grid system

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Storybook

View and develop components in isolation:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to browse the component library.

### Testing

Run tests with Vitest:

```bash
npm test              # Run tests in watch mode
npm run test:ui       # Run tests with UI
```

## Design System

### Customizing Colors

Colors are defined in `app/tokens.css` with a two-layer system:

**1. Primitive Colors** - Raw color scales:
```css
--blue-500: #3b82f6;
--blue-600: #2563eb;
```

**2. Semantic Tokens** - Mapped to primitives:
```css
--primary: var(--blue-600);
--primary-foreground: var(--white);
```

**To change brand colors:**
1. Update the primitive color values in `app/tokens.css`
2. Semantic tokens automatically update
3. All components inherit the changes

### Typography

Typography is defined with CSS variables in `app/globals.css`:

```css
--typography-h1-font-size: 2.25rem;
--typography-h1-line-height: 2.5rem;
--typography-h1-font-weight: 700;
```

HTML elements are pre-styled:
```tsx
<h1>This is automatically styled</h1>
<p>Body text is also pre-styled</p>
```

### Animations

Custom CSS animations built into the design system. View all animations in Storybook under "Design System > Animations".

```tsx
// Show/hide with animation
{isVisible && (
  <div className="animate-fade-in">
    This fades in when isVisible becomes true
  </div>
)}

// Control speed and delay
<div className="animate-fade-in duration-500 delay-200">
  Slower, delayed animation
</div>
```

### Icons

Uses [Lucide Icons](https://lucide.dev) - tree-shakeable, so only icons you use are bundled.

```tsx
import { Search, User, Settings } from 'lucide-react'

<Search className="w-6 h-6 text-primary" />
```

Browse all available icons at [lucide.dev/icons](https://lucide.dev/icons).

### Grid System

Standard 12-column Tailwind grid:

```tsx
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 md:col-span-6">Half width on tablet+</div>
  <div className="col-span-12 md:col-span-6">Half width on tablet+</div>
</div>
```

## Adding Components

Add more shadcn components as needed:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

Browse available components at [ui.shadcn.com](https://ui.shadcn.com).

## Project Structure

```
app/
├── layout.tsx          # Root layout with SEO metadata
├── page.tsx            # Home page
├── loading.tsx         # Loading UI (Suspense)
├── error.tsx           # Error boundary
├── not-found.tsx       # 404 page
├── globals.css         # Global styles & typography
└── tokens.css          # Design system color tokens

components/
└── ui/                 # shadcn components
    ├── button/
    ├── card/
    ├── input/
    ├── label/
    └── textarea/

stories/
└── design-system/      # Storybook docs
    ├── overview.stories.tsx
    ├── colors.stories.tsx
    ├── typography.stories.tsx
    └── animations.stories.tsx

lib/
└── utils.ts            # cn() utility
```

## Performance Monitoring

Analyze bundle size:

```bash
npm run analyze
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build for production:

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
