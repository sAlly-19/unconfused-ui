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
export declare const breakpoints: Breakpoints;
/** Ordered breakpoint keys from smallest to largest */
export declare const breakpointOrder: BreakpointKey[];
/** Responsive value type - maps breakpoints to values */
export type ResponsiveValue<T> = T | Partial<Record<BreakpointKey, T>>;
//# sourceMappingURL=breakpoints.d.ts.map