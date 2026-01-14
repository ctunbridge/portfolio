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
        href && "cursor-pointer hover:scale-[1.005] transition-transform duration-300 ease-out",
        className,
        staggerClass
      )}
    >
      {/* Project title */}
      <h3 className="typography-h5-demibold">{projectTitle}</h3>

      {/* Business name and year */}
      <div className="flex items-baseline gap-2 mb-4">
        <span className="typography-body-bold text-muted-foreground">{businessName}</span>
        <span className="typography-body text-muted-foreground">{year}</span>
      </div>

      {/* 1:1 aspect ratio image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
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
