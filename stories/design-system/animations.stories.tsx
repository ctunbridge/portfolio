import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import { Button } from '@/components/ui/button/button';
import { Card } from '@/components/ui/card/card';

const meta: Meta = {
  title: 'Design System/Animations',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component to replay animations
function AnimationDemo({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className: string;
}) {
  const [key, setKey] = useState(0);
  
  return (
    <div className="space-y-3">
      <div key={key} className={className}>
        {children}
      </div>
      <Button 
        size="sm" 
        variant="outline" 
        onClick={() => setKey(k => k + 1)}
        className="w-full"
      >
        Replay Animation
      </Button>
    </div>
  );
}

// Interactive example showing animations with state
function InteractiveToggleExample() {
  const [showNotification, setShowNotification] = useState(false);
  
  return (
    <div className="space-y-3">
      <h3 className="typography-h3">Interactive Example</h3>
      <p className="text-sm text-muted-foreground">
        Animations typically appear when elements mount (show/hide, conditional rendering)
      </p>
      <Button onClick={() => {
        setShowNotification(false);
        setTimeout(() => setShowNotification(true), 10);
      }}>
        Show Notification
      </Button>
      {showNotification && (
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg animate-slide-in-right">
          <div className="flex items-center gap-2">
            <span className="text-2xl">ℹ</span>
            <span className="font-medium">This notification slides in from the right!</span>
          </div>
        </div>
      )}
      <code className="text-xs bg-muted px-2 py-1 rounded block">
        {'{showNotification && <div className="animate-slide-in-right">...</div>}'}
      </code>
    </div>
  );
}

export const AnimationShowcase: Story = {
  render: () => (
    <div className="max-w-6xl space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="typography-h1 text-foreground">
          Animation System
        </h1>
        <p className="typography-body-lg text-muted-foreground max-w-2xl mx-auto">
          Pre-configured animations via tw-animate-css. Add life and polish to your UI with these ready-to-use animations.
        </p>
      </header>

      {/* Fade Animations */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Fade Animations</h2>
        <p className="typography-body text-muted-foreground mb-6">
          Click "Replay Animation" to see the effect. These are entrance animations - they play once when elements appear.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="typography-h4 mb-3">Fade In</h3>
            <AnimationDemo className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-fade-in">
              animate-fade-in
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-fade-in"</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Fade In Up</h3>
            <AnimationDemo className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-fade-in-up">
              animate-fade-in-up
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-fade-in-up"</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Fade In Down</h3>
            <AnimationDemo className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-fade-in-down">
              animate-fade-in-down
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-fade-in-down"</code>
          </div>
        </div>
      </section>

      {/* Slide Animations */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Slide Animations</h2>
        <p className="typography-body text-muted-foreground mb-6">
          Perfect for notifications, modals, or drawers entering the screen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="typography-h4 mb-3">Slide In Left</h3>
            <AnimationDemo className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-slide-in-left text-2xl">
              ←
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-slide-in-left"</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Slide In Right</h3>
            <AnimationDemo className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-slide-in-right text-2xl">
              →
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-slide-in-right"</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Slide In Up</h3>
            <AnimationDemo className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-slide-in-up text-2xl">
              ↑
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-slide-in-up"</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Slide In Down</h3>
            <AnimationDemo className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-slide-in-down text-2xl">
              ↓
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-slide-in-down"</code>
          </div>
        </div>
      </section>

      {/* Scale Animations */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Scale Animations</h2>
        <p className="typography-body text-muted-foreground mb-6">
          Great for modals, tooltips, or emphasizing important elements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="typography-h4 mb-3">Scale In</h3>
            <AnimationDemo className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-scale-in">
              animate-scale-in
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-scale-in"</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Zoom In</h3>
            <AnimationDemo className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-zoom-in">
              animate-zoom-in
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-zoom-in"</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Flip In</h3>
            <AnimationDemo className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-flip-in">
              animate-flip-in
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">className="animate-flip-in"</code>
          </div>
        </div>
      </section>

      {/* Attention Seekers */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Attention Seekers</h2>
        <p className="typography-body text-muted-foreground mb-6">
          These animations loop continuously - perfect for loading states or drawing attention.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3">
            <h3 className="typography-h4">Bounce</h3>
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-bounce">
              ⬆
            </div>
            <code className="text-xs bg-muted px-2 py-1 rounded block">className="animate-bounce"</code>
          </div>

          <div className="space-y-3">
            <h3 className="typography-h4">Pulse</h3>
            <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-pulse">
              ◉
            </div>
            <code className="text-xs bg-muted px-2 py-1 rounded block">className="animate-pulse"</code>
          </div>

          <div className="space-y-3">
            <h3 className="typography-h4">Ping</h3>
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-ping">
              ⊙
            </div>
            <code className="text-xs bg-muted px-2 py-1 rounded block">className="animate-ping"</code>
          </div>

          <div className="space-y-3">
            <h3 className="typography-h4">Spin</h3>
            <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-spin">
              ⟳
            </div>
            <code className="text-xs bg-muted px-2 py-1 rounded block">className="animate-spin"</code>
          </div>
        </div>
      </section>

      {/* Speed & Timing */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Speed & Timing Control</h2>
        <p className="typography-body text-muted-foreground mb-6">
          Customize animation speed and delay using Tailwind utilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="typography-h4 mb-3">Fast (300ms)</h3>
            <AnimationDemo className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-fade-in duration-300">
              Quick
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">duration-300</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Normal (500ms)</h3>
            <AnimationDemo className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-fade-in duration-500">
              Normal
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">duration-500</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Slow (1000ms)</h3>
            <AnimationDemo className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-fade-in duration-1000">
              Slow
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">duration-1000</code>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="typography-h4 mb-3">Delayed (200ms)</h3>
            <AnimationDemo className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-fade-in delay-200">
              Delayed
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">delay-200</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Delayed (500ms)</h3>
            <AnimationDemo className="bg-primary text-primary-foreground p-6 rounded-lg text-center animate-fade-in delay-500">
              More Delay
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">delay-500</code>
          </div>

          <div>
            <h3 className="typography-h4 mb-3">Delayed (1000ms)</h3>
            <AnimationDemo className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center animate-fade-in delay-1000">
              Long Delay
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">delay-1000</code>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Practical Examples</h2>
        <div className="space-y-8">
          {/* Success Message */}
          <div>
            <h3 className="typography-h3 mb-3">Success Notification</h3>
            <AnimationDemo className="bg-green-100 text-green-800 p-4 rounded-lg animate-slide-in-right">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-medium">Changes saved successfully!</span>
              </div>
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">
              className="animate-slide-in-right"
            </code>
          </div>

          {/* Loading State */}
          <div className="space-y-3">
            <h3 className="typography-h3">Loading Button</h3>
            <Button disabled className="gap-3">
              <span className="animate-spin">⟳</span>
              Loading...
            </Button>
            <code className="text-xs bg-muted px-2 py-1 rounded block">
              {'<span className="animate-spin">⟳</span>'}
            </code>
            <p className="text-sm text-muted-foreground">
              Note: Looping animations like spin, bounce, pulse run continuously
            </p>
          </div>

          {/* Card Entrance */}
          <div>
            <h3 className="typography-h3 mb-3">Card Entrance</h3>
            <AnimationDemo className="animate-fade-in-up">
              <Card className="p-6">
                <h4 className="typography-h4 mb-2">Welcome!</h4>
                <p className="typography-body text-muted-foreground">
                  This card fades in and slides up for a polished entrance effect.
                </p>
              </Card>
            </AnimationDemo>
            <code className="text-xs bg-muted px-2 py-1 rounded block mt-2">
              className="animate-fade-in-up"
            </code>
          </div>

          {/* Interactive Toggle Example */}
          <InteractiveToggleExample />
        </div>
      </section>

      {/* Usage Tips */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Usage Tips</h2>
        <div className="space-y-4 typography-body text-muted-foreground">
          <div className="flex gap-3">
            <span className="text-primary">•</span>
            <p>
              <strong className="text-foreground">Use sparingly:</strong> Too many animations can be distracting. Use them to guide attention or provide feedback.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">•</span>
            <p>
              <strong className="text-foreground">Consider accessibility:</strong> Some users prefer reduced motion. Use <code className="text-xs bg-muted px-1 py-0.5 rounded">motion-safe:</code> prefix for optional animations.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">•</span>
            <p>
              <strong className="text-foreground">Combine with state:</strong> Add animations conditionally based on component state for dynamic effects.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-primary">•</span>
            <p>
              <strong className="text-foreground">Test performance:</strong> Complex animations on many elements can affect performance on slower devices.
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="bg-card border border-border rounded-lg p-8">
        <h2 className="typography-h2 text-foreground mb-6">Code Example</h2>
        <div className="bg-slate-950 text-slate-50 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`// Basic animation
<div className="animate-fade-in">
  I fade in!
</div>

// With speed control
<div className="animate-fade-in duration-500">
  I fade in slower
</div>

// With delay
<div className="animate-fade-in delay-300">
  I wait before animating
</div>

// Combining multiple utilities
<div className="animate-slide-in-up duration-700 delay-200">
  I slide up slowly after a delay
</div>

// Conditional animation (React example)
<div className={isVisible ? "animate-fade-in" : "opacity-0"}>
  Conditionally animated
</div>

// Respect user preferences
<div className="motion-safe:animate-fade-in">
  Only animates if user hasn't reduced motion
</div>`}</pre>
        </div>
      </section>
    </div>
  ),
};

// Individual animation stories for easier testing
export const FadeIn: Story = {
  render: () => {
    const [key, setKey] = useState(0);
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <div key={key} className="bg-primary text-primary-foreground p-8 rounded-lg animate-fade-in">
          Fade In Animation
        </div>
        <Button onClick={() => setKey(k => k + 1)} variant="outline">
          Replay
        </Button>
      </div>
    );
  },
};

export const SlideInLeft: Story = {
  render: () => {
    const [key, setKey] = useState(0);
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <div key={key} className="bg-primary text-primary-foreground p-8 rounded-lg animate-slide-in-left">
          Slide In Left Animation
        </div>
        <Button onClick={() => setKey(k => k + 1)} variant="outline">
          Replay
        </Button>
      </div>
    );
  },
};

export const Bounce: Story = {
  render: () => (
    <div className="flex items-center justify-center h-64">
      <div className="bg-primary text-primary-foreground p-8 rounded-lg animate-bounce">
        Bouncing! (Loops continuously)
      </div>
    </div>
  ),
};

