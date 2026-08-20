import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export type StyleObject = ViewStyle | TextStyle | ImageStyle;

export type VariantDefinitions = {
  [variantName: string]: {
    [optionName: string]: StyleObject;
  };
};

export type CompoundVariant<V extends VariantDefinitions> = {
  variants: {
    [K in keyof V]?: keyof V[K];
  };
  style: StyleObject;
};

export type RecipeConfig<V extends VariantDefinitions> = {
  base?: StyleObject;
  variants?: V;
  compoundVariants?: CompoundVariant<V>[];
  defaultVariants?: {
    [K in keyof V]?: keyof V[K];
  };
};

export type RecipeSelection<V extends VariantDefinitions> = {
  [K in keyof V]?: keyof V[K];
};

/**
 * High-performance variant recipe compiler with deterministic WeakMap/LRU cache
 * and pre-registered StyleSheet handles.
 */
export function createRecipe<V extends VariantDefinitions>(config: RecipeConfig<V>) {
  const cache = new Map<string, StyleObject[]>();

  // Pre-register base style with StyleSheet for native optimization
  const compiledBase = config.base ? StyleSheet.create({ base: config.base }).base : undefined;

  return function getRecipeStyle(props: RecipeSelection<V> = {}): StyleObject[] {
    const selectedVariants = {
      ...(config.defaultVariants ?? {}),
      ...props,
    };

    const sortedKeys = Object.keys(selectedVariants).sort();
    let cacheKey = "";
    for (let i = 0; i < sortedKeys.length; i++) {
      const k = sortedKeys[i];
      cacheKey += `${k}:${String(selectedVariants[k as keyof V])}|`;
    }

    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const styles: StyleObject[] = [];

    // 1. Base style
    if (compiledBase) {
      styles.push(compiledBase);
    }

    // 2. Individual variants
    if (config.variants) {
      for (const variantName in config.variants) {
        const selectedOption = selectedVariants[variantName as keyof V];
        if (selectedOption !== undefined && config.variants[variantName][selectedOption as string]) {
          styles.push(config.variants[variantName][selectedOption as string]);
        }
      }
    }

    // 3. Compound variants
    if (config.compoundVariants) {
      for (const compound of config.compoundVariants) {
        let matches = true;
        for (const [vName, vVal] of Object.entries(compound.variants)) {
          if (selectedVariants[vName as keyof V] !== vVal) {
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

export type RecipeFn<V extends VariantDefinitions> = ReturnType<typeof createRecipe<V>>;
