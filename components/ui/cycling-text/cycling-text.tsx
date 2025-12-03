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
  /** Duration each text is displayed in milliseconds (default: 2000) */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
}

type Phase = "visible" | "hidden";

const NUM_CYCLES = 2;

export function CyclingText({
  texts,
  duration = 1500,
  className,
}: CyclingTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [phase, setPhase] = React.useState<Phase>("visible");
  const [isComplete, setIsComplete] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const transitionCountRef = React.useRef(0);

  // Total transitions needed: (number of texts × cycles) - 1
  // e.g., 5 texts × 2 cycles = 10 shows, but first show is free, so 9 transitions
  const maxTransitions = texts.length * NUM_CYCLES - 1;

  // Start the fade-out timer when visible
  React.useEffect(() => {
    if (texts.length <= 1) return;
    if (phase !== "visible") return;
    if (isComplete) return;

    timeoutRef.current = setTimeout(() => {
      setPhase("hidden");
    }, duration);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [phase, duration, texts.length, isComplete]);

  // When fade-out transition completes, change text and fade back in
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLSpanElement>) => {
    // Only respond to opacity transitions
    if (e.propertyName !== "opacity") return;

    if (phase === "hidden") {
      transitionCountRef.current += 1;

      // Check if we've completed all cycles
      if (transitionCountRef.current >= maxTransitions) {
        setCurrentIndex(0);
        setPhase("visible");
        setIsComplete(true);
        return;
      }

      setCurrentIndex((prev) => (prev + 1) % texts.length);
      setPhase("visible");
    }
  };

  // If only one text, don't animate
  if (texts.length <= 1) {
    return (
      <span className={cn("underline", className)}>
        {texts[0] ?? ""}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "transition-opacity duration-300",
        phase === "visible" ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
        textDecorationThickness: "5%",
        textUnderlineOffset: "25%",
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      {texts[currentIndex]}
    </span>
  );
}
