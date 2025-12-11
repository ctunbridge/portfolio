import Link from "next/link"

import { Button } from "@/components/ui/button/button"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Button asChild>
          <Link href="/">
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
}

