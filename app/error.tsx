"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="max-w-md text-center space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Something went wrong!
        </h2>
        <p className="text-muted-foreground">
          An error occurred while loading this page. Please try again.
        </p>
        <Button onClick={reset}>
          Try again
        </Button>
      </div>
    </div>
  );
}

