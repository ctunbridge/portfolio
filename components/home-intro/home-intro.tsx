/**
 * Home Intro Component
 *
 * Full-screen intro/loading state that displays name and title,
 * then animates up and out to reveal the main content.
 */
"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface HomeIntroProps {
  onComplete?: () => void;
  className?: string;
}

const INTRO_SHOWN_KEY = "home-intro-shown";
const EXIT_ANIMATION_DURATION_MS = 1000;
const INTRO_DURATION_MS = 1000;

function HomeIntro({ onComplete, className }: HomeIntroProps) {
  const [isExiting, setIsExiting] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [hasBeenShown, setHasBeenShown] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const shown = sessionStorage.getItem(INTRO_SHOWN_KEY) === "true";
    setHasBeenShown(shown);

    if (shown) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [onComplete]);

  React.useEffect(() => {
    if (hasBeenShown !== false) {
      return;
    }

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, INTRO_DURATION_MS);

    const completeTimer = window.setTimeout(() => {
      setIsComplete(true);
      sessionStorage.setItem(INTRO_SHOWN_KEY, "true");
      onComplete?.();
    }, INTRO_DURATION_MS + EXIT_ANIMATION_DURATION_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [hasBeenShown, onComplete]);

  if (hasBeenShown === null || isComplete) {
    return null;
  }

  return (
    <div
      data-slot="home-intro"
      className={cn(
        "fixed inset-0 z-50 bg-background px-8 pt-[120px] md:pt-[200px] lg:pt-[280px]",
        isExiting && "pointer-events-none",
        className
      )}
    >
      <div className="grid grid-cols-12 gap-4">
        <div
          className={cn(
            "col-span-12 flex flex-col items-start text-left lg:col-start-4 lg:col-span-9",
            isExiting ? "animate-fade-out-up" : "animate-fade-in"
          )}
        >
          <h1 className="typography-h1-demibold text-foreground">
            Chris Tunbridge
          </h1>
          <p className="typography-h1-normal text-secondary">
            Product Designer
          </p>
        </div>
      </div>
    </div>
  );
}

export { HomeIntro, EXIT_ANIMATION_DURATION_MS };

