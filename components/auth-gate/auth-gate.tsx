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
const INTRO_SHOWN_KEY = "home-intro-shown";

function AuthGate({ children }: AuthGateProps) {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);
  const [isExiting, setIsExiting] = React.useState(false);
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
        sessionStorage.setItem(INTRO_SHOWN_KEY, "true");
        setIsExiting(true);
        setTimeout(() => {
          setIsAuthenticated(true);
        }, 800);
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

  // Render children in background (hidden) so they're preloaded
  // Show password gate on top
  return (
    <>
      {isExiting && (
        <div className="opacity-0">
          {children}
        </div>
      )}
      <div
        data-slot="auth-gate"
        className={cn(
          "fixed inset-0 z-[100] bg-background pt-[120px] md:pt-[200px] lg:pt-[280px] px-8"
        )}
      >
        <div className="grid grid-cols-12 gap-4">
          <div className={cn(
            "col-span-12 lg:col-start-4 lg:col-span-9 flex flex-col items-start text-left",
            isExiting && "animate-fade-out-up"
          )}>
            <h1 className="typography-h1-demibold text-foreground">
              Chris Tunbridge
            </h1>
            <p className="typography-h1-normal text-secondary">
              Product Designer
            </p>

            {!isExiting && (
              <form onSubmit={handleSubmit} className="flex flex-col mt-10">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                  <div className="flex flex-col">
                    <Input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                      autoFocus
                      className="w-80"
                    />
                    <p className={cn(
                      "typography-caption mt-2 w-80",
                      error ? "text-destructive" : "text-secondary"
                    )}>
                      {error ? (
                        <>Incorrect password, contact <a href="mailto:hello@christunbridge.co.uk">hello@christunbridge.co.uk</a></>
                      ) : (
                        <>Contact <a href="mailto:hello@christunbridge.co.uk">hello@christunbridge.co.uk</a> to receive a password</>
                      )}
                    </p>
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading || !password}
                    className="w-30"
                  >
                    {isLoading ? "Verifying..." : "Enter"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export { AuthGate };
