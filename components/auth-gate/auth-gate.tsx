/**
 * Auth Gate Component
 *
 * Full-screen password gate that blocks access to the site until
 * the correct password is entered. Uses sessionStorage so the
 * password is required again when the browser is closed.
 */
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";

interface AuthGateProps {
  children: React.ReactNode;
}

const AUTH_KEY = "site-authenticated";

function AuthGate({ children }: AuthGateProps) {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // Check sessionStorage on mount
  React.useEffect(() => {
    const authenticated = sessionStorage.getItem(AUTH_KEY) === "true";
    setIsAuthenticated(authenticated);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem(AUTH_KEY, "true");
        setIsAuthenticated(true);
      } else {
        setError("Incorrect password");
        setPassword("");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Show nothing while checking auth state
  if (isAuthenticated === null) {
    return null;
  }

  // Show children if authenticated
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Show password gate
  return (
    <div
      data-slot="auth-gate"
      className={cn(
        "fixed inset-0 z-[100] bg-background pt-[120px] md:pt-[200px] lg:pt-[280px] px-8"
      )}
    >
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-start-4 lg:col-span-9 flex flex-col items-start text-left animate-fade-in">
          <h1 className="typography-h1-demibold text-foreground">
            Chris Tunbridge
          </h1>
          <p className="typography-h1-normal text-secondary mb-10">
            Product Designer
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                autoFocus
                className="h-12 text-base"
              />
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLoading || !password}
              className="w-full"
            >
              {isLoading ? "Verifying..." : "Enter"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { AuthGate };
