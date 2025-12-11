import type { Meta, StoryObj } from "@storybook/nextjs"

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./card"
import { Button } from "../button/button"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any content.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <h3 className="text-lg font-semibold mb-2">Simple Card</h3>
      <p className="text-muted-foreground">
        A simple card with just padding and content.
      </p>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Enter your details to create an account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <input 
            className="w-full p-2 border border-input rounded-md bg-background" 
            placeholder="John Doe" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input 
            className="w-full p-2 border border-input rounded-md bg-background" 
            type="email"
            placeholder="john@example.com" 
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create Account</Button>
      </CardFooter>
    </Card>
  ),
};

