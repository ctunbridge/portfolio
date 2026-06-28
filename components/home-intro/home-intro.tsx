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

const INTRO_PASSWORD = "CTPortfolio26";
const PASSWORD_ERROR_MESSAGE = "Email hello@christunbridge.co.uk for the password";
const EXIT_ANIMATION_DURATION_MS = 1000;

function HomeIntro({ onComplete, className }: HomeIntroProps) {
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isExiting, setIsExiting] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);

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
      setError(PASSWORD_ERROR_MESSAGE);
      return;
    }

    setError("");
    setIsExiting(true);
  };

  if (isComplete) {
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
              <Input
                id="portfolio-password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (error) {
                    setError("");
                  }
                }}
                autoComplete="current-password"
                aria-label="Enter password"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "portfolio-password-error" : undefined}
                className="typography-body py-0 leading-10"
              />

              {error ? (
                <p
                  id="portfolio-password-error"
                  className="typography-caption text-destructive"
                >
                  {error}
                </p>
              ) : null}
            </div>

            <Button type="submit">Enter</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { HomeIntro, EXIT_ANIMATION_DURATION_MS };

