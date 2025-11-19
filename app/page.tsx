import { Button } from "@/components/ui/button/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card/card";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Your App Template</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A production-ready Next.js template with shadcn/ui, Tailwind CSS, and a complete design system.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">View Components</Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Design System</CardTitle>
            <CardDescription>
              Comprehensive color and typography tokens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              View the complete design system in Storybook with colors, typography, and component documentation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>
              Pre-built shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Button, Card, Input, Label, and Textarea are ready to use. Add more with <code className="text-xs bg-muted px-1 py-0.5 rounded">npx shadcn add</code>
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Example Form</CardTitle>
            <CardDescription>See components in action</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <Button className="w-full">Submit</Button>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Ready to Build?</h2>
        <p className="text-muted-foreground">
          Check out the <a href="http://localhost:6006" className="text-primary hover:underline">Storybook</a> for component docs,
          or start editing <code className="text-sm bg-muted px-2 py-1 rounded">app/page.tsx</code>
        </p>
      </section>
    </div>
  );
}

