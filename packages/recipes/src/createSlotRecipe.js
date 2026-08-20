"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlotRecipe = createSlotRecipe;
const react_native_1 = require("react-native");
/**
 * Creates a high-performance multi-part slot recipe function that resolves
 * React Native styles with zero re-allocation and deterministic cache.
 */
function createSlotRecipe(config) {
    const cache = new Map();
    // Pre-compile static base styles with StyleSheet
    const compiledBaseStyles = {};
    if (config.base) {
        const rawSheet = {};
        for (const slot of config.slots) {
            if (config.base[slot]) {
                rawSheet[slot] = config.base[slot];
            }
        }
        const createdSheet = react_native_1.StyleSheet.create(rawSheet);
        for (const slot of config.slots) {
            if (createdSheet[slot]) {
                compiledBaseStyles[slot] = createdSheet[slot];
            }
        }
    }
    return function resolveStyles(selections) {
        const activeSelections = { ...config.defaultVariants, ...selections };
        // Generate deterministic cache key
        const sortedKeys = Object.keys(activeSelections).sort();
        let cacheKey = "";
        for (let i = 0; i < sortedKeys.length; i++) {
            const k = sortedKeys[i];
            cacheKey += `${k}:${String(activeSelections[k])}|`;
        }
        const cached = cache.get(cacheKey);
        if (cached)
            return cached;
        // Initialize slot styles arrays
        const result = {};
        for (const slot of config.slots) {
            result[slot] = [];
        }
        // Apply pre-compiled base styles
        for (const slot of config.slots) {
            const baseStyle = compiledBaseStyles[slot];
            if (baseStyle) {
                result[slot].push(baseStyle);
            }
        }
        // Apply variant styles
        if (config.variants) {
            for (const variantName in activeSelections) {
                const optionName = activeSelections[variantName];
                if (optionName !== undefined) {
                    const variantOptions = config.variants[variantName];
                    if (variantOptions) {
                        const variantStyle = variantOptions[optionName];
                        if (variantStyle) {
                            for (const slot of config.slots) {
                                const style = variantStyle[slot];
                                if (style) {
                                    result[slot].push(style);
                                }
                            }
                        }
                    }
                }
            }
        }
        // Apply compound variant styles
        if (config.compoundVariants) {
            for (const cv of config.compoundVariants) {
                let isMatch = true;
                for (const variantName in cv.variants) {
                    if (activeSelections[variantName] !== cv.variants[variantName]) {
                        isMatch = false;
                        break;
                    }
                }
                if (isMatch) {
                    for (const slot of config.slots) {
                        const style = cv.style[slot];
                        if (style) {
                            result[slot].push(style);
                        }
                    }
                }
            }
        }
        cache.set(cacheKey, result);
        return result;
    };
}
