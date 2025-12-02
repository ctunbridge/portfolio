/**
 * Home Page
 *
 * Landing page with intro animation and main content.
 */
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { HomeIntro } from "@/components/home-intro/home-intro";

export default function Home() {
  const [showContent, setShowContent] = React.useState(false);

  const handleIntroComplete = React.useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      <HomeIntro onComplete={handleIntroComplete} />

      <main
        className={cn(
          "min-h-screen p-8 transition-opacity duration-500",
          showContent ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="space-y-8">
          <h1 className="typography-h1-demibold">Portfolio</h1>
        </div>
      </main>
    </>
  );
}
