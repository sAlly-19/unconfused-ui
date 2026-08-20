import { ImageStyle, TextStyle, ViewStyle } from "react-native";
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
export declare function createRecipe<V extends VariantDefinitions>(config: RecipeConfig<V>): (props?: RecipeSelection<V>) => StyleObject[];
export type RecipeFn<V extends VariantDefinitions> = ReturnType<typeof createRecipe<V>>;
//# sourceMappingURL=createRecipe.d.ts.map