/**
 * CaseStudyCard Component
 *
 * A card component for displaying case study information with business name,
 * year, project title, and a 1:1 aspect ratio image.
 */
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CaseStudyCardProps {
  /** Business or employer name */
  businessName: string;
  /** Year of the project */
  year: string;
  /** Project title */
  projectTitle: string;
  /** Short impact statement focusing on metrics */
  impact: string;
  /** Image source URL */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt: string;
  /** Optional link URL */
  href?: string;
  /** Additional CSS classes */
  className?: string;
  /** Priority loading for above-the-fold images */
  priority?: boolean;
  /** Optional stagger animation class for coordinated page load animations */
  staggerClass?: string;
}

export function CaseStudyCard({
  businessName,
  year,
  projectTitle,
  impact,
  imageSrc,
  imageAlt,
  href,
  className,
  priority,
  staggerClass,
}: CaseStudyCardProps) {
  const content = (
    <div
      className={cn(
        "group flex flex-col gap-1",
        href && "cursor-pointer",
        className,
        staggerClass
      )}
    >
      {/* Project title */}
      <h3 className="typography-h5-demibold">{projectTitle}</h3>

      {/* Impact statement - min height keeps images level across cards */}
      <div className="typography-body text-muted-foreground mb-4 min-h-[2lh]">
        {impact}
      </div>

      {/* Image container with overlay */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />

        {/* Solid background overlay with business name and year - shown on hover */}
        <div className="absolute bottom-0 left-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="bg-black/60 px-4 py-4">
            <div className="flex items-baseline gap-2">
              <span className="typography-body-bold text-white">{businessName}</span>
              <span className="typography-body text-white">{year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
