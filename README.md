# Next.js App Template

A production-ready Next.js template with a complete design system, shadcn/ui components, and Storybook documentation. Built to scale from simple websites to full applications.

## 🚀 Using This Template

### First Steps After Cloning

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update project metadata:**
   - [ ] `package.json` - Change the `name` field to your project name
   - [ ] `app/layout.tsx` - Update `metadata` object with your app's title, description, and URLs
   - [ ] `LICENSE` - Update the copyright holder with your name or organization
   - [ ] `README.md` - Replace this template README with your own (or keep what's useful!)

3. **Configure environment variables (optional):**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Customize the design system:**
   - Colors: Edit `app/tokens.css` to change primitive colors (lines 26-89)
   - Typography: Adjust values in `app/globals.css` (lines 144-227)
   - All components will automatically inherit your changes

5. **Replace the demo homepage:**
   - `app/page.tsx` contains example content - replace it with your actual landing page
   - Or keep the examples as a reference and start building!

6. **Start developing:**
   ```bash
   npm run dev          # Development server on http://localhost:3000
   npm run storybook    # Storybook on http://localhost:6006
   ```

### What to Keep vs. Delete

**Keep these:**
- `components/ui/` - Your component library
- `app/error.tsx`, `app/loading.tsx`, `app/not-found.tsx` - Error handling
- `app/globals.css`, `app/tokens.css` - Design system
- All config files - They're all necessary
- `stories/design-system/` - Useful reference for your design tokens

**Delete these when ready:**
- `app/page.tsx` demo content - Replace with your actual homepage
- Any example components you don't need
- This README section - Replace with your project-specific docs

## What's Included

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS v4** for styling
- ✅ **shadcn/ui** components (Button, Card, Input, Label, Textarea)
- ✅ **Lucide Icons** - 1000+ beautiful icons ready to use
- ✅ **Complete Design System** with customizable colors and typography
- ✅ **Custom CSS Animations** (fade, slide, scale effects)
- ✅ **Storybook** for component development and documentation
- ✅ **Testing Setup** with Vitest and React Testing Library
- ✅ **Error Handling** (loading states, error boundaries, 404 page)
- ✅ **SEO Ready** with proper metadata structure
- ✅ **Responsive Layout** with 12-column grid system
- ✅ **Bundle Analyzer** for performance monitoring

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

Open [http://localhost:3000](http://localhost:3000) to see your app.

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

Example tests are included for the Button component and utility functions.

## Design System

### Customizing Colors

Colors are defined in `app/globals.css` with a two-layer system:

**1. Primitive Colors** (lines 26-89) - Raw color scales:
```css
--blue-500: #3b82f6;
--blue-600: #2563eb;
```

**2. Semantic Tokens** (lines 96-140) - Mapped to primitives:
```css
--primary: var(--blue-600);
--primary-foreground: var(--white);
```

**To change your brand color:**
1. Update the primitive color values (e.g., change `--blue-*`)
2. Semantic tokens automatically update
3. All components inherit the changes

### Typography

Typography is defined with CSS variables in `app/globals.css` (lines 144-227):

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

**Important:** Entrance animations (fade-in, slide-in, etc.) play once when an element mounts. Use them with conditional rendering:

```tsx
// Show/hide with animation
{isVisible && (
  <div className="animate-fade-in">
    This fades in when isVisible becomes true
  </div>
)}

// Notification example
<div className="animate-slide-in-right">
  Changes saved successfully!
</div>

// Looping animations (bounce, pulse, spin)
<button disabled>
  <span className="animate-spin">⟳</span> Loading...
</button>

// Control speed and delay
<div className="animate-fade-in duration-500 delay-200">
  Slower, delayed animation
</div>
```

See the full showcase in Storybook with interactive examples and replay buttons.

### Icons

The template includes [Lucide Icons](https://lucide.dev) - a beautiful set of 1000+ consistent icons. Tree-shakeable, so only the icons you use are bundled.

```tsx
import { Search, User, Settings, ChevronRight } from 'lucide-react'

export function MyComponent() {
  return (
    <div>
      <Search className="w-6 h-6 text-primary" />
      <User size={24} color="red" />
      <Settings className="w-4 h-4" strokeWidth={1.5} />
      <ChevronRight size={16} />
    </div>
  )
}
```

Browse all available icons at [lucide.dev/icons](https://lucide.dev/icons).

### Using the Grid

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
npx shadcn@latest add select
```

Browse available components at [ui.shadcn.com](https://ui.shadcn.com).

## Performance Monitoring

Analyze your bundle size to identify optimization opportunities:

```bash
npm run analyze
```

This will build your app and open an interactive visualization showing what's in your JavaScript bundles.

## Project Structure

```
app/
├── layout.tsx          # Root layout with SEO metadata
├── page.tsx            # Home page
├── loading.tsx         # Loading UI (Suspense)
├── error.tsx           # Error boundary
├── not-found.tsx       # 404 page
└── globals.css         # Design system tokens

components/
└── ui/                 # shadcn components
    ├── button.tsx
    ├── card.tsx
    └── ...

stories/
└── design-system/      # Storybook docs
    ├── overview.stories.tsx
    ├── colors.stories.tsx
    └── typography.stories.tsx

lib/
└── utils.ts            # cn() utility
```

## What's NOT Included (And When to Add It)

This template is intentionally minimal. Add these as your project needs them:

### Environment Variables
**When:** You need API keys, database URLs, or configuration
**How:** Create `.env.local`:
```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=your-database-url
```

### Authentication
**When:** You need user login/signup
**How:** Add NextAuth.js, Clerk, or Supabase Auth
```bash
npm install next-auth
```

### Database
**When:** You need to store data
**How:** Add Prisma, Drizzle, or connect to Supabase
```bash
npm install @prisma/client
```

### API Routes
**When:** You need backend endpoints
**How:** Create files in `app/api/`:
```tsx
// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: 'Hello' })
}
```

### Custom Hooks
**When:** You have reusable logic across components
**How:** Create `hooks/` directory:
```tsx
// hooks/use-media-query.ts
export function useMediaQuery(query: string) { ... }
```

### TypeScript Types
**When:** You have shared types across features
**How:** Create `types/` directory:
```tsx
// types/index.ts
export interface User { ... }
```

### More Testing
**When:** You need more comprehensive test coverage
**How:** Testing is already set up! Just add more test files:
```bash
# Tests are automatically discovered (*.test.ts, *.test.tsx)
npm test
```

### State Management
**When:** Props drilling becomes painful
**How:** Add Zustand, Jotai, or React Context
```bash
npm install zustand
```

## Customizing Metadata

Update SEO in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: {
    default: 'Your App Name',
    template: '%s | Your App Name',
  },
  description: 'Your app description',
  // ... update other fields
};
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

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)

## Philosophy

**Start simple, add what you need.** This template gives you a solid foundation without overwhelming you with features you might not use. Every addition should be intentional and driven by your specific requirements.
