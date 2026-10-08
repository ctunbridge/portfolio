"use client"

import * as React from "react"
import { ArrowUpRight, Mail } from "lucide-react"
import { createLibrary, defineComponent } from "@openuidev/react-lang"
import { z } from "zod"

import { Button } from "@/components/ui/button/button"
import { Input } from "@/components/ui/input/input"

const CaseStudyCard = defineComponent({
  name: "CaseStudyCard",
  description:
    "A linked case-study card. Use it when a visitor asks about a relevant project. Keep the summary factual and concise.",
  props: z.object({
    title: z.string().describe("Case study or project title"),
    organisation: z.string().describe("Organisation or product name"),
    summary: z.string().describe("One or two factual sentences about the work"),
    href: z.string().describe("Internal portfolio URL beginning with /"),
    role: z.string().optional().describe("Chris's role on the project"),
    tags: z.array(z.string()).max(4).optional().describe("Up to four relevant capability tags"),
  }),
  component: ({ props: { title, organisation, summary, href, role, tags } }) => (
    <a
      href={href}
      className="group block rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="typography-caption-reg text-muted-foreground">{organisation}</p>
          <h3 className="mt-1 typography-body-bold text-foreground">{title}</h3>
        </div>
        <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      {role ? <p className="mt-3 typography-caption-reg text-muted-foreground">{role}</p> : null}
      <p className="mt-2 typography-body-sm text-foreground">{summary}</p>
      {tags?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Relevant capabilities">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full bg-muted px-2.5 py-1 typography-caption-reg text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </a>
  ),
})

const CapabilityList = defineComponent({
  name: "CapabilityList",
  description:
    "A compact list of relevant capabilities, experience themes, or ways Chris has worked. Use no more than five items.",
  props: z.object({
    heading: z.string().describe("Short heading for the list"),
    items: z.array(z.string()).min(2).max(5).describe("Concise, factual items"),
  }),
  component: ({ props: { heading, items } }) => (
    <section className="rounded-2xl border border-border bg-card p-5">
      <h3 className="typography-body-bold text-foreground">{heading}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 typography-body-sm text-foreground">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  ),
})

const TextInput = defineComponent({
  name: "TextInput",
  description:
    "A single-line text input for a low-friction follow-up, such as a visitor's name, email address, or short message. This only collects text locally in the browser; it does not send anything by itself.",
  props: z.object({
    label: z.string().describe("Visible label for the input"),
    placeholder: z.string().describe("Helpful example text"),
    type: z.enum(["text", "email"]).optional().describe("Use email only for email addresses"),
    helpText: z.string().optional().describe("Optional explanation below the input"),
  }),
  component: ({ props: { label, placeholder, type = "text", helpText } }) => {
    const id = React.useId()
    const [value, setValue] = React.useState("")

    return (
      <div className="rounded-2xl border border-border bg-card p-5">
        <label htmlFor={id} className="typography-body-sm-bold text-foreground">
          {label}
        </label>
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          className="mt-2"
        />
        {helpText ? <p className="mt-2 typography-caption-reg text-muted-foreground">{helpText}</p> : null}
      </div>
    )
  },
})

const ContactCard = defineComponent({
  name: "ContactCard",
  description:
    "A contact card that lets a visitor write a short message and opens their email application with a prefilled draft. Use only when the visitor asks how to contact Chris or wants to send a message.",
  props: z.object({
    heading: z.string().describe("Short, direct heading"),
    body: z.string().describe("Brief factual explanation"),
    email: z.string().email().describe("Destination email address"),
    subject: z.string().describe("Prefilled email subject"),
  }),
  component: ({ props: { heading, body, email, subject } }) => {
    const [message, setMessage] = React.useState("")
    const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

    return (
      <section className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
            <Mail className="size-4" />
          </span>
          <div>
            <h3 className="typography-body-bold text-foreground">{heading}</h3>
            <p className="mt-1 typography-body-sm text-muted-foreground">{body}</p>
          </div>
        </div>
        <label className="mt-4 block typography-body-sm-bold text-foreground" htmlFor="portfolio-contact-message">
          Message
        </label>
        <textarea
          id="portfolio-contact-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="What would you like to discuss?"
          rows={3}
          className="mt-2 flex w-full resize-y rounded-md border border-border bg-input px-3 py-2 typography-body-sm outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <Button asChild className="mt-3 w-full">
          <a href={href}>Open email draft</a>
        </Button>
      </section>
    )
  },
})

const PortfolioSummary = defineComponent({
  name: "PortfolioSummary",
  description:
    "A concise framing card for an answer before one or more more-specific components. Use it for short factual context, not marketing copy.",
  props: z.object({
    title: z.string().describe("Short factual title"),
    body: z.string().describe("One or two concise paragraphs of plain text"),
  }),
  component: ({ props: { title, body } }) => (
    <section className="rounded-2xl bg-muted p-5">
      <h3 className="typography-body-bold text-foreground">{title}</h3>
      <p className="mt-2 whitespace-pre-line typography-body-sm text-foreground">{body}</p>
    </section>
  ),
})

const PortfolioResponse = defineComponent({
  name: "PortfolioResponse",
  description:
    "The required root container for every portfolio assistant response. Put the other response components in items, in their intended display order.",
  props: z.object({
    items: z.array(
      z.union([
        PortfolioSummary.ref,
        CaseStudyCard.ref,
        CapabilityList.ref,
        TextInput.ref,
        ContactCard.ref,
      ])
    ).min(1).max(3).describe("One to three response components in display order"),
  }),
  component: ({ props: { items }, renderNode }) => (
    <div className="space-y-3">
      {items.map((item, index) => (
        <React.Fragment key={index}>{renderNode(item)}</React.Fragment>
      ))}
    </div>
  ),
})

export const portfolioOpenUILibrary = createLibrary({
  components: [PortfolioResponse, PortfolioSummary, CaseStudyCard, CapabilityList, TextInput, ContactCard],
  root: "PortfolioResponse",
})
