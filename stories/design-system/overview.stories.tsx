import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from '@/components/ui/button/button';
import { Input } from '@/components/ui/input/input';
import { Textarea } from '@/components/ui/textarea/textarea';
import { Card } from '@/components/ui/card/card';

const meta: Meta = {
  title: 'Design System/Overview',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DesignSystemOverview: Story = {
  render: () => (
    <div className="max-w-6xl space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="typography-display text-foreground">
          App Template Design System
        </h1>
        <p className="typography-body-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive design system built with shadcn/ui, Tailwind CSS, and modern best practices.
        </p>
      </header>

      {/* Typography Section */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Typography</h2>
        <div className="space-y-4">
          <div>
            <h1 className="typography-h1">Heading 1 - The quick brown fox</h1>
          </div>
          <div>
            <h2 className="typography-h2">Heading 2 - The quick brown fox</h2>
          </div>
          <div>
            <h3 className="typography-h3">Heading 3 - The quick brown fox</h3>
          </div>
          <div>
            <h4 className="typography-h4">Heading 4 - The quick brown fox</h4>
          </div>
          <div>
            <p className="typography-body-lg">Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <p className="typography-body">Body Regular - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <p className="typography-body-sm">Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Color System */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Color System</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-primary text-primary-foreground p-4 rounded-lg text-center">
            <div className="typography-small font-semibold">Primary</div>
            <div className="typography-caption opacity-90">Brand Color</div>
          </div>
          <div className="bg-secondary text-secondary-foreground p-4 rounded-lg text-center">
            <div className="typography-small font-semibold">Secondary</div>
            <div className="typography-caption opacity-90">Support Color</div>
          </div>
          <div className="bg-muted text-muted-foreground p-4 rounded-lg text-center">
            <div className="typography-small font-semibold">Muted</div>
            <div className="typography-caption opacity-90">Subdued</div>
          </div>
          <div className="bg-destructive text-destructive-foreground p-4 rounded-lg text-center">
            <div className="typography-small font-semibold">Destructive</div>
            <div className="typography-caption opacity-90">Error State</div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Components</h2>
        
        {/* Buttons */}
        <div className="mb-8">
          <h3 className="typography-h3 text-foreground mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mb-8">
          <h3 className="typography-h3 text-foreground mb-4">Form Elements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <Input placeholder="Enter your name" />
            <Input type="email" placeholder="Enter your email" />
            <div className="md:col-span-2">
              <Textarea placeholder="Enter your message" rows={3} />
            </div>
          </div>
        </div>

        {/* Card */}
        <div>
          <h3 className="typography-h3 text-foreground mb-4">Card</h3>
          <Card className="p-6 max-w-md">
            <h4 className="typography-h4 mb-2">Card Title</h4>
            <p className="typography-body text-muted-foreground">
              This is a card component with border and padding. Perfect for grouping related content.
            </p>
          </Card>
        </div>
      </section>

      {/* Layout Examples */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">12-Column Grid System</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 bg-muted p-4 rounded text-center">
              <span className="typography-caption font-mono">12 columns</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 bg-muted p-4 rounded text-center">
              <span className="typography-caption font-mono">6 columns</span>
            </div>
            <div className="col-span-6 bg-muted p-4 rounded text-center">
              <span className="typography-caption font-mono">6 columns</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 bg-muted p-4 rounded text-center">
              <span className="typography-caption font-mono">4 columns</span>
            </div>
            <div className="col-span-4 bg-muted p-4 rounded text-center">
              <span className="typography-caption font-mono">4 columns</span>
            </div>
            <div className="col-span-4 bg-muted p-4 rounded text-center">
              <span className="typography-caption font-mono">4 columns</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};

