"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveResponsiveValue = resolveResponsiveValue;
exports.useBreakpoint = useBreakpoint;
const react_1 = require("react");
const react_native_1 = require("react-native");
const BREAKPOINTS = {
    base: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
};
const ORDERED = ["xl", "lg", "md", "sm", "base"];
/**
 * Resolves a responsive value based on the current breakpoint
 * @param value The responsive value to resolve
 * @param breakpoint The current breakpoint key
 * @returns The resolved value
 */
function resolveResponsiveValue(value, breakpoint) {
    if (typeof value !== "object" || value === null) {
        return value;
    }
    const record = value;
    // Fast path for exact match
    if (record[breakpoint] !== undefined) {
        return record[breakpoint];
    }
    // Find the largest matching breakpoint that is <= current breakpoint
    const currentIndex = ORDERED.indexOf(breakpoint);
    for (let i = currentIndex; i < ORDERED.length; i++) {
        const bp = ORDERED[i];
        if (record[bp] !== undefined) {
            return record[bp];
        }
    }
    // Fallback if not found (should theoretically never happen if base is provided, but just in case)
    return Object.values(record)[0];
}
/**
 * Hook to get the current active breakpoint based on window width
 * @returns The active breakpoint key
 */
function useBreakpoint() {
    const [windowWidth, setWindowWidth] = (0, react_1.useState)(react_native_1.Dimensions.get("window").width);
    (0, react_1.useEffect)(() => {
        let timeoutId;
        const subscription = react_native_1.Dimensions.addEventListener("change", ({ window }) => {
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
