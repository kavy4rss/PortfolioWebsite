/**
 * useCopyrightYear — returns the current calendar year as a number.
 * This runs at render time, so the year is always accurate without
 * any manual edits or deployments needed.
 *
 * Usage:
 *   import { useCopyrightYear } from '../hooks/useCopyrightYear';
 *   const year = useCopyrightYear();
 *   // → 2026, 2027, …
 */
export function useCopyrightYear() {
  return new Date().getFullYear();
}

/**
 * CURRENT_YEAR — a plain constant for use outside of React components
 * (e.g. in meta-tag strings, sitemap generators, or utility scripts).
 *
 * Usage:
 *   import { CURRENT_YEAR } from '../hooks/useCopyrightYear';
 */
export const CURRENT_YEAR = new Date().getFullYear();
