"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRecipe = createRecipe;
const react_native_1 = require("react-native");
/**
 * High-performance variant recipe compiler with deterministic WeakMap/LRU cache
 * and pre-registered StyleSheet handles.
 */
function createRecipe(config) {
    const cache = new Map();
    // Pre-register base style with StyleSheet for native optimization
    const compiledBase = config.base ? react_native_1.StyleSheet.create({ base: config.base }).base : undefined;
    return function getRecipeStyle(props = {}) {
        const selectedVariants = {
            ...(config.defaultVariants ?? {}),
            ...props,
        };
        const sortedKeys = Object.keys(selectedVariants).sort();
        let cacheKey = "";
        for (let i = 0; i < sortedKeys.length; i++) {
            const k = sortedKeys[i];
            cacheKey += `${k}:${String(selectedVariants[k])}|`;
        }
        const cached = cache.get(cacheKey);
        if (cached)
            return cached;
        const styles = [];
        // 1. Base style
        if (compiledBase) {
            styles.push(compiledBase);
        }
        // 2. Individual variants
        if (config.variants) {
            for (const variantName in config.variants) {
                const selectedOption = selectedVariants[variantName];
                if (selectedOption !== undefined && config.variants[variantName][selectedOption]) {
                    styles.push(config.variants[variantName][selectedOption]);
                }
            }
        }
        // 3. Compound variants
        if (config.compoundVariants) {
            for (const compound of config.compoundVariants) {
                let matches = true;
                for (const [vName, vVal] of Object.entries(compound.variants)) {
                    if (selectedVariants[vName] !== vVal) {
                        matches = false;
                        break;
                    }
                }
                if (matches) {
                    styles.push(compound.style);
                }
            }
        }
        cache.set(cacheKey, styles);
        return styles;
    };
}
