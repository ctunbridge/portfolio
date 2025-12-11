import { describe, it, expect } from "vitest"

import { cn } from "./utils"

describe('cn utility', () => {
  it('merges class names correctly', () => {
    const result = cn('foo', 'bar');
    expect(result).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    const result = cn('foo', false && 'bar', 'baz');
    expect(result).toBe('foo baz');
  });

  it('merges Tailwind classes without conflicts', () => {
    const result = cn('p-4', 'p-8');
    // tailwind-merge should keep only p-8 (last one wins)
    expect(result).toBe('p-8');
  });

  it('handles undefined and null values', () => {
    const result = cn('foo', undefined, null, 'bar');
    expect(result).toBe('foo bar');
  });
});

