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

function HomeIntro({ onComplete, className }: HomeIntroProps) {
  const [isExiting, setIsExiting] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [hasBeenShown, setHasBeenShown] = React.useState<boolean | null>(null);

  // Check sessionStorage on mount
  React.useEffect(() => {
    const shown = sessionStorage.getItem(INTRO_SHOWN_KEY) === "true";
    setHasBeenShown(shown);

    if (shown) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [onComplete]);

  React.useEffect(() => {
    // Skip animation if already shown this session or still checking
    if (hasBeenShown !== false) return;

    // Start exit animation after initial display
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1000);

    // Complete the intro after exit animation finishes
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      sessionStorage.setItem(INTRO_SHOWN_KEY, "true");
      onComplete?.();
    }, 2000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [hasBeenShown, onComplete]);

  // Don't render while checking sessionStorage or after complete
  if (hasBeenShown === null || isComplete) {
    return null;
  }

  return (
    <div
      data-slot="home-intro"
      className={cn(
        "fixed inset-0 z-50 bg-background pt-[120px] md:pt-[200px] lg:pt-[280px] px-8",
        isExiting && "pointer-events-none",
        className
      )}
    >
      <div className="grid grid-cols-12 gap-4">
        <div
          className={cn(
            "col-span-12 lg:col-start-4 lg:col-span-9 flex flex-col items-start text-left",
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

export { HomeIntro };

