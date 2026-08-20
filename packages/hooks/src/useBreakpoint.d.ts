export type BreakpointKey = "base" | "sm" | "md" | "lg" | "xl";
/**
 * Resolves a responsive value based on the current breakpoint
 * @param value The responsive value to resolve
 * @param breakpoint The current breakpoint key
 * @returns The resolved value
 */
export declare function resolveResponsiveValue<T>(value: T | Partial<Record<BreakpointKey, T>>, breakpoint: BreakpointKey): T;
/**
 * Hook to get the current active breakpoint based on window width
 * @returns The active breakpoint key
 */
export declare function useBreakpoint(): BreakpointKey;
//# sourceMappingURL=useBreakpoint.d.ts.map