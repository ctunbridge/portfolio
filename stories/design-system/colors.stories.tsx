import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ 
  name, 
  className, 
  description 
}: { 
  name: string; 
  className: string; 
  description: string;
}) => (
  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
    <div className={`w-12 h-12 rounded-md border border-border ${className}`} />
    <div>
      <code className="text-sm font-mono">{name}</code>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const ColorSection = ({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode;
}) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {children}
    </div>
  </section>
);

export const ColorSystem: Story = {
  render: () => (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-8">Semantic Color System</h1>
      
      <ColorSection title="Base Colors">
        <ColorSwatch 
          name="background" 
          className="bg-background border-2" 
          description="Main background color"
        />
        <ColorSwatch 
          name="foreground" 
          className="bg-foreground" 
          description="Main text color"
        />
        <ColorSwatch 
          name="muted" 
          className="bg-muted" 
          description="Muted background"
        />
        <ColorSwatch 
          name="muted-foreground" 
          className="bg-muted-foreground" 
          description="Muted text"
        />
        <ColorSwatch 
          name="accent" 
          className="bg-accent" 
          description="Accent background"
        />
        <ColorSwatch 
          name="accent-foreground" 
          className="bg-accent-foreground" 
          description="Accent text"
        />
      </ColorSection>

      <ColorSection title="Primary Colors">
        <ColorSwatch 
          name="primary" 
          className="bg-primary" 
          description="Primary brand color"
        />
        <ColorSwatch 
          name="primary-foreground" 
          className="bg-primary-foreground" 
          description="Text on primary"
        />
        <ColorSwatch 
          name="secondary" 
          className="bg-secondary" 
          description="Secondary color"
        />
        <ColorSwatch 
          name="secondary-foreground" 
          className="bg-secondary-foreground" 
          description="Text on secondary"
        />
      </ColorSection>

      <ColorSection title="Status Colors">
        <ColorSwatch 
          name="destructive" 
          className="bg-destructive" 
          description="Error/destructive state"
        />
        <ColorSwatch 
          name="destructive-foreground" 
          className="bg-destructive-foreground" 
          description="Text on destructive"
        />
      </ColorSection>

      <ColorSection title="Border & Focus">
        <ColorSwatch 
          name="border" 
          className="bg-border" 
          description="Default border color"
        />
        <ColorSwatch 
          name="input" 
          className="bg-input border-2" 
          description="Input background"
        />
        <ColorSwatch 
          name="ring" 
          className="bg-ring" 
          description="Focus ring color"
        />
      </ColorSection>

      <ColorSection title="UI Components">
        <ColorSwatch 
          name="card" 
          className="bg-card border-2" 
          description="Card background"
        />
        <ColorSwatch 
          name="card-foreground" 
          className="bg-card-foreground" 
          description="Text on card"
        />
        <ColorSwatch 
          name="popover" 
          className="bg-popover border-2" 
          description="Popover background"
        />
        <ColorSwatch 
          name="popover-foreground" 
          className="bg-popover-foreground" 
          description="Text on popover"
        />
      </ColorSection>
    </div>
  ),
};

export const ColorInContext: Story = {
  render: () => (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-bold mb-6">Colors in Context</h1>
      
      <div className="bg-primary text-primary-foreground p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Primary Color</h2>
        <p>This demonstrates primary color usage with appropriate foreground text.</p>
      </div>

      <div className="bg-card border border-border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-foreground">Card Background</h2>
        <p className="text-muted-foreground mb-4">
          This card uses the semantic card background with muted foreground text.
        </p>
        <div className="flex space-x-2">
          <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded text-sm">
            Error
          </div>
          <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm">
            Secondary
          </div>
        </div>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-foreground">Muted Background</h2>
        <p className="text-muted-foreground">
          This section uses a muted background color for subtle differentiation.
        </p>
      </div>
    </div>
  ),
};

