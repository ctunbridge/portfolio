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
      <h1 className="typography-h1 mb-8">Typography System</h1>

      <div className="space-y-6">
        <section>
          <h2 className="typography-h2 mb-4">Headings</h2>
          <TypographyShowcase className="typography-h1" name="typography-h1" description="36px - Main page heading" />
          <TypographyShowcase className="typography-h2" name="typography-h2" description="30px - Section heading" />
          <TypographyShowcase className="typography-h3" name="typography-h3" description="24px - Subsection heading" />
          <TypographyShowcase className="typography-h4" name="typography-h4" description="20px - Component heading" />
          <TypographyShowcase className="typography-h5" name="typography-h5" description="18px - Small heading" />
          <TypographyShowcase className="typography-h6" name="typography-h6" description="16px - Smallest heading" />
        </section>

        <section>
          <h2 className="typography-h2 mb-4">Body Text</h2>
          <TypographyShowcase className="typography-body-lg" name="typography-body-lg" description="18px - Large body text" />
          <TypographyShowcase className="typography-body" name="typography-body" description="16px - Regular body text" />
          <TypographyShowcase className="typography-body-sm" name="typography-body-sm" description="14px - Small body text" />
        </section>

        <section>
          <h2 className="typography-h2 mb-4">UI Text</h2>
          <TypographyShowcase className="typography-small" name="typography-small" description="14px/500 - Small UI text (buttons, labels)" />
          <TypographyShowcase className="typography-caption" name="typography-caption" description="12px - Caption text" />
        </section>

        <section>
          <h2 className="typography-h2 mb-4">Display</h2>
          <TypographyShowcase className="typography-display" name="typography-display" description="56px - Large display text" />
        </section>

        <section>
          <h2 className="typography-h2 mb-4">Text Colors</h2>
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

