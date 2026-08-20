export type Breakpoints = {
  base: 0;
  sm: 640;
  md: 768;
  lg: 1024;
  xl: 1280;
};

export type BreakpointKey = keyof Breakpoints;

/**
 * Default breakpoints for responsive design
 */
export const breakpoints: Breakpoints = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

/** Ordered breakpoint keys from smallest to largest */
export const breakpointOrder: BreakpointKey[] = ["base", "sm", "md", "lg", "xl"];

/** Responsive value type - maps breakpoints to values */
export type ResponsiveValue<T> = T | Partial<Record<BreakpointKey, T>>;
