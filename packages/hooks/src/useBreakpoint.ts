import { useState, useEffect, useCallback } from "react";
import { Dimensions } from "react-native";

export type BreakpointKey = "base" | "sm" | "md" | "lg" | "xl";

const BREAKPOINTS: Record<BreakpointKey, number> = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const ORDERED: BreakpointKey[] = ["xl", "lg", "md", "sm", "base"];

/**
 * Resolves a responsive value based on the current breakpoint
 * @param value The responsive value to resolve
 * @param breakpoint The current breakpoint key
 * @returns The resolved value
 */
export function resolveResponsiveValue<T>(
  value: T | Partial<Record<BreakpointKey, T>>,
  breakpoint: BreakpointKey
): T {
  if (typeof value !== "object" || value === null) {
    return value as T;
  }

  const record = value as Partial<Record<BreakpointKey, T>>;

  // Fast path for exact match
  if (record[breakpoint] !== undefined) {
    return record[breakpoint] as T;
  }

  // Find the largest matching breakpoint that is <= current breakpoint
  const currentIndex = ORDERED.indexOf(breakpoint);
  for (let i = currentIndex; i < ORDERED.length; i++) {
    const bp = ORDERED[i];
    if (record[bp] !== undefined) {
      return record[bp] as T;
    }
  }

  // Fallback if not found (should theoretically never happen if base is provided, but just in case)
  return Object.values(record)[0] as T;
}

/**
 * Hook to get the current active breakpoint based on window width
 * @returns The active breakpoint key
 */
export function useBreakpoint(): BreakpointKey {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get("window").width);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      // Debounce width changes to prevent render storms
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.width);
      }, 100);
    });

    return () => {
      clearTimeout(timeoutId);
      subscription?.remove();
    };
  }, []);

  // Determine current breakpoint
  for (const bp of ORDERED) {
    if (windowWidth >= BREAKPOINTS[bp]) {
      return bp;
    }
  }

  return "base";
}
