/**
 * Footer Component
 *
 * Footer with portrait image, title, supporting text, and contact links
 */
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FooterProps {
  /** Additional CSS classes */
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "grid grid-cols-9",
        className
      )}
    >
      {/* Portrait Image */}
      <div className="col-span-9 md:col-span-3 md:col-start-2 relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src="/images/footer/footerimage.jpg"
          alt="Chris Tunbridge portrait"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="col-span-9 md:col-span-5 md:col-start-5 flex flex-col justify-between md:ml-15 md:h-full pt-6">
        <div>
          <h2 className="typography-body-bold">Built by Chris Tunbridge</h2>
          <p className="typography-body-sm text-muted-foreground">
            In next.js and tailwind.css from the ground up.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 mt-8 md:mt-0 pb-6">
          <div className="typography-body-sm">
            <Link
              href="https://www.linkedin.com/in/chris-tunbridge/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <span className="text-secondary"> • </span>
            <Link
              href="https://github.com/ctunbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </div>
          <a
            href="mailto:hello@christunbridge.co.uk"
            className="typography-body-sm text-secondary hover:text-foreground transition-colors"
          >
            hello@christunbridge.co.uk
          </a>
        </div>
      </div>
    </footer>
  );
}
