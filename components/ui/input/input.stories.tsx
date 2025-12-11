import type { Meta, StoryObj } from "@storybook/nextjs"

import { Input } from "./input"
import { Label } from "../label/label"
import { Textarea } from "../textarea/textarea"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[350px]">
      <Input placeholder="Enter text..." />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="john@example.com" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[350px]">
      <Input placeholder="Disabled input" disabled />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <Label htmlFor="error-input">Username</Label>
      <Input 
        id="error-input" 
        placeholder="Enter username" 
        className="border-destructive"
      />
      <p className="text-sm text-destructive">Username is required</p>
    </div>
  ),
};

export const TextareaDefault: Story = {
  render: () => (
    <div className="w-[350px]">
      <Textarea placeholder="Enter your message..." />
    </div>
  ),
};

export const TextareaWithLabel: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea 
        id="message" 
        placeholder="Type your message here..." 
        rows={4}
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-[400px] space-y-6 p-6 border border-border rounded-lg">
      <h3 className="text-lg font-semibold">Contact Form</h3>
      
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email-form">Email</Label>
        <Input id="email-form" type="email" placeholder="john@example.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message-form">Message</Label>
        <Textarea 
          id="message-form" 
          placeholder="How can we help you?" 
          rows={4}
        />
      </div>
    </div>
  ),
};

