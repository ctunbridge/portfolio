import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const TypographyShowcase = ({
  className,
  name,
  description,
  children,
}: {
  className: string;
  name: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="border-b border-border pb-4 mb-4">
      <div className="flex items-baseline justify-between mb-2">
        <code className="typography-caption bg-muted px-2 py-1 rounded">{name}</code>
        <span className="typography-caption text-muted-foreground">{description}</span>
      </div>
      <div className={className}>{children || 'The quick brown fox jumps over the lazy dog'}</div>
    </div>
  );
};

export const AllTypographyStyles: Story = {
  render: () => (
    <div className="max-w-4xl">
      <h1 className="typography-h1-demibold mb-8">Typography System</h1>

      <div className="space-y-6">
        <section>
          <h2 className="typography-h3-demibold mb-4">Headings - Demi Bold</h2>
          <TypographyShowcase className="typography-h1-demibold" name="typography-h1-demibold" description="56px - Main page heading" />
          <TypographyShowcase className="typography-h2-demibold" name="typography-h2-demibold" description="50px - Section heading" />
          <TypographyShowcase className="typography-h3-demibold" name="typography-h3-demibold" description="44px - Subsection heading" />
          <TypographyShowcase className="typography-h4-demibold" name="typography-h4-demibold" description="32px - Component heading" />
          <TypographyShowcase className="typography-h5-demibold" name="typography-h5-demibold" description="24px - Small heading" />
        </section>

        <section>
          <h2 className="typography-h3-demibold mb-4">Headings - Normal</h2>
          <TypographyShowcase className="typography-h1-normal" name="typography-h1-normal" description="56px - Main page heading" />
          <TypographyShowcase className="typography-h2-normal" name="typography-h2-normal" description="50px - Section heading" />
          <TypographyShowcase className="typography-h3-normal" name="typography-h3-normal" description="44px - Subsection heading" />
          <TypographyShowcase className="typography-h4-normal" name="typography-h4-normal" description="32px - Component heading" />
          <TypographyShowcase className="typography-h5-normal" name="typography-h5-normal" description="24px - Small heading" />
        </section>

        <section>
          <h2 className="typography-h3-demibold mb-4">Body Text - Normal</h2>
          <TypographyShowcase className="typography-body" name="typography-body" description="16px - Regular body text" />
          <TypographyShowcase className="typography-body-sm" name="typography-body-sm" description="14px - Small body text" />
        </section>

        <section>
          <h2 className="typography-h3-demibold mb-4">Body Text - Bold</h2>
          <TypographyShowcase className="typography-body-bold" name="typography-body-bold" description="16px - Bold body text" />
          <TypographyShowcase className="typography-body-sm-bold" name="typography-body-sm-bold" description="14px - Small bold body text" />
        </section>

        <section>
          <h2 className="typography-h3-demibold mb-4">UI Text</h2>
          <TypographyShowcase className="typography-button" name="typography-button" description="14px/20px - Button text (medium)" />
          <TypographyShowcase className="typography-caption" name="typography-caption" description="12px - Caption text" />
        </section>

        <section>
          <h2 className="typography-h3-demibold mb-4">Code</h2>
          <TypographyShowcase className="typography-code" name="typography-code" description="14px - Monospace code" />
        </section>

        <section>
          <h2 className="typography-h3-demibold mb-4">Text Colors</h2>
          <div className="space-y-3">
            <p className="typography-body text-foreground">Default Foreground Text</p>
            <p className="typography-body text-muted-foreground">Muted Foreground Text</p>
            <p className="typography-body text-primary">Primary Color Text</p>
            <p className="typography-body text-secondary-foreground">Secondary Foreground Text</p>
            <p className="typography-body text-destructive">Destructive/Error Text</p>
          </div>
        </section>
      </div>
    </div>
  ),
};

