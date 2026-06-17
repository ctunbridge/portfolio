/**
 * Home Intro Component
 *
 * Full-screen password gate that keeps the intro text visible until the
 * correct password is entered, then animates up and out to reveal the site.
 */
"use client";

import * as React from "react";

import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { cn } from "@/lib/utils";

interface HomeIntroProps {
  onComplete?: () => void;
  className?: string;
}

const INTRO_UNLOCKED_KEY = "portfolio-password-unlocked";
const INTRO_PASSWORD = "CTPortfolio26";
const EXIT_ANIMATION_DURATION_MS = 1000;

function HomeIntro({ onComplete, className }: HomeIntroProps) {
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isExiting, setIsExiting] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [isUnlocked, setIsUnlocked] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const unlocked = sessionStorage.getItem(INTRO_UNLOCKED_KEY) === "true";
    setIsUnlocked(unlocked);

    if (unlocked) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [onComplete]);

  React.useEffect(() => {
    if (!isExiting) {
      return;
    }

    const completeTimer = window.setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, EXIT_ANIMATION_DURATION_MS);

    return () => {
      window.clearTimeout(completeTimer);
    };
  }, [isExiting, onComplete]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== INTRO_PASSWORD) {
      setError("Incorrect password");
      return;
    }

    sessionStorage.setItem(INTRO_UNLOCKED_KEY, "true");
    setError("");
    setIsUnlocked(true);
    setIsExiting(true);
  };

  if (isUnlocked === null || isComplete) {
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
            "col-span-12 flex flex-col items-start gap-8 text-left lg:col-start-4 lg:col-span-9",
            isExiting && "animate-fade-out-up"
          )}
        >
          <div>
            <h1 className="typography-h1-demibold text-foreground">
              Chris Tunbridge
            </h1>
            <p className="typography-h1-normal text-secondary">
              Product Designer
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-80 space-y-4">
            <div className="space-y-2">
              <label htmlFor="portfolio-password" className="typography-small text-foreground">
                Enter password to view portfolio
              </label>
              <Input
                id="portfolio-password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (error) {
                    setError("");
                  }
                }}
                autoComplete="current-password"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "portfolio-password-error" : undefined}
              />
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit">Enter portfolio</Button>
              {error ? (
                <p
                  id="portfolio-password-error"
                  className="typography-small text-destructive"
                >
                  {error}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { HomeIntro, EXIT_ANIMATION_DURATION_MS, INTRO_UNLOCKED_KEY };

