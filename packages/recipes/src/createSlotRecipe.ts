import { StyleSheet } from "react-native";
import { StyleObject } from "./createRecipe";

export type SlotStyles<S extends string> = Partial<Record<S, StyleObject>>;

export type SlotVariantDefinitions<S extends string> = {
  [variantName: string]: {
    [optionName: string]: SlotStyles<S>;
  };
};

export type SlotCompoundVariant<S extends string, V extends SlotVariantDefinitions<S>> = {
  variants: { [K in keyof V]?: keyof V[K] };
  style: SlotStyles<S>;
};

export type SlotRecipeConfig<S extends string, V extends SlotVariantDefinitions<S>> = {
  slots: readonly S[];
  base?: SlotStyles<S>;
  variants?: V;
  defaultVariants?: { [K in keyof V]?: keyof V[K] };
  compoundVariants?: SlotCompoundVariant<S, V>[];
};

export type SlotRecipeSelection<V extends SlotVariantDefinitions<any>> = {
  [K in keyof V]?: keyof V[K];
};

/**
 * Creates a high-performance multi-part slot recipe function that resolves
 * React Native styles with zero re-allocation and deterministic cache.
 */
export function createSlotRecipe<S extends string, V extends SlotVariantDefinitions<S>>(
  config: SlotRecipeConfig<S, V>
) {
  const cache = new Map<string, Record<S, StyleObject[]>>();

  // Pre-compile static base styles with StyleSheet
  const compiledBaseStyles = {} as Partial<Record<S, StyleObject>>;
  if (config.base) {
    const rawSheet = {} as Record<string, any>;
    for (const slot of config.slots) {
      if (config.base[slot as S]) {
        rawSheet[slot as string] = config.base[slot as S];
      }
    }
    const createdSheet = StyleSheet.create(rawSheet);
    for (const slot of config.slots) {
      if (createdSheet[slot as string]) {
        compiledBaseStyles[slot as S] = createdSheet[slot as string];
      }
    }
  }

  return function resolveStyles(
    selections?: SlotRecipeSelection<V>
  ): Record<S, StyleObject[]> {
    const activeSelections = { ...config.defaultVariants, ...selections };

    // Generate deterministic cache key
    const sortedKeys = Object.keys(activeSelections).sort();
    let cacheKey = "";
    for (let i = 0; i < sortedKeys.length; i++) {
      const k = sortedKeys[i];
      cacheKey += `${k}:${String((activeSelections as any)[k])}|`;
    }

    const cached = cache.get(cacheKey);
    if (cached) return cached;

    // Initialize slot styles arrays
    const result = {} as Record<S, StyleObject[]>;
    for (const slot of config.slots) {
      result[slot as S] = [];
    }

    // Apply pre-compiled base styles
    for (const slot of config.slots) {
      const baseStyle = compiledBaseStyles[slot as S];
      if (baseStyle) {
        result[slot as S].push(baseStyle);
      }
    }

    // Apply variant styles
    if (config.variants) {
      for (const variantName in activeSelections) {
        const optionName = activeSelections[variantName];
        if (optionName !== undefined) {
          const variantOptions = config.variants[variantName];
          if (variantOptions) {
            const variantStyle = variantOptions[optionName as string];
            if (variantStyle) {
              for (const slot of config.slots) {
                const style = variantStyle[slot as S];
                if (style) {
                  result[slot as S].push(style);
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
            const style = cv.style[slot as S];
            if (style) {
              result[slot as S].push(style);
            }
          }
        }
      }
    }

    cache.set(cacheKey, result);
    return result;
  };
}
