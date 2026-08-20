"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakpointOrder = exports.breakpoints = void 0;
/**
 * Default breakpoints for responsive design
 */
exports.breakpoints = {
    base: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
};
/** Ordered breakpoint keys from smallest to largest */
exports.breakpointOrder = ["base", "sm", "md", "lg", "xl"];
