/**
 * CyclingText Component
 *
 * Cycles through an array of text options with smooth fade in/out animation.
 * Uses CSS transitions with onTransitionEnd for reliable timing.
 */
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CyclingTextProps {
  /** Array of text options to cycle through */
  texts: string[];
  /** Duration each text is displayed in milliseconds (default: 1500) */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
}

type Phase = "visible" | "hidden";

export function CyclingText({
  texts,
  duration = 1500,
  className,
}: CyclingTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [phase, setPhase] = React.useState<Phase>("visible");
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Start the fade-out timer when visible
  React.useEffect(() => {
    if (texts.length <= 1) return;
    if (phase !== "visible") return;

    timeoutRef.current = setTimeout(() => {
      setPhase("hidden");
    }, duration);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [phase, duration, texts.length]);

  // When fade-out transition completes, change text and fade back in
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLSpanElement>) => {
    // Only respond to opacity transitions
    if (e.propertyName !== "opacity") return;

    if (phase === "hidden") {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      setPhase("visible");
    }
  };

  // If only one text, don't animate
  if (texts.length <= 1) {
    return (
      <span className={cn(className)}>
        {texts[0] ?? ""}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "transition-opacity duration-300 ease-out-quart",
        phase === "visible" ? "opacity-100" : "opacity-0",
        className
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      {texts[currentIndex]}
    </span>
  );
}
