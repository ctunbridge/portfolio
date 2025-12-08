/**
 * ExperienceCard Component
 *
 * An accordion-style card component for displaying career experience with employer,
 * dates, job title, and expandable summary.
 */
"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExperienceCardProps {
  /** Employer name */
  employer: string;
  /** Employment dates (e.g., "2020 - 2023" or "2023 - Present") */
  dates: string;
  /** Job title */
  jobTitle: string;
  /** Job description/summary - can be a string or array of strings for multiple paragraphs */
  summary: string | string[];
  /** Additional CSS classes */
  className?: string;
  /** If true, disables interactivity and hides the expand/collapse icon */
  nonInteractive?: boolean;
}

export function ExperienceCard({
  employer,
  dates,
  jobTitle,
  summary,
  className,
  nonInteractive = false,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={cn(
        "flex flex-col",
        className
      )}
    >
      {/* Header with Job Title and Toggle Button */}
      {nonInteractive ? (
        <h4 className="typography-h4-demibold text-foreground mb-1">{jobTitle}</h4>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between gap-4 mb-1 w-full text-left hover:opacity-80 transition-opacity"
          aria-label={isOpen ? "Collapse details" : "Expand details"}
        >
          <h4 className="typography-h4-demibold text-foreground flex-1">{jobTitle}</h4>
          <div className="flex-shrink-0">
            {isOpen ? (
              <Minus className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Plus className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </button>
      )}

      {/* Employer and Dates */}
      <div className="flex items-baseline gap-3 mb-6">
        <span className="typography-body-bold text-muted-foreground">{employer}</span>
        <span className="typography-body text-muted-foreground">{dates}</span>
      </div>

      {/* Summary - Expandable */}
      {isOpen && (
        <div className="flex flex-col gap-4">
          {Array.isArray(summary) ? (
            summary.map((paragraph, index) => (
              <p key={index} className="typography-body text-foreground">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="typography-body text-foreground whitespace-pre-line">{summary}</p>
          )}
        </div>
      )}
    </div>
  );
}
