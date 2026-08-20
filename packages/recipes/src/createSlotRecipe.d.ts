import { StyleObject } from "./createRecipe";
export type SlotStyles<S extends string> = Partial<Record<S, StyleObject>>;
export type SlotVariantDefinitions<S extends string> = {
    [variantName: string]: {
        [optionName: string]: SlotStyles<S>;
    };
};
export type SlotCompoundVariant<S extends string, V extends SlotVariantDefinitions<S>> = {
    variants: {
        [K in keyof V]?: keyof V[K];
    };
    style: SlotStyles<S>;
};
export type SlotRecipeConfig<S extends string, V extends SlotVariantDefinitions<S>> = {
    slots: readonly S[];
    base?: SlotStyles<S>;
    variants?: V;
    defaultVariants?: {
        [K in keyof V]?: keyof V[K];
    };
    compoundVariants?: SlotCompoundVariant<S, V>[];
};
export type SlotRecipeSelection<V extends SlotVariantDefinitions<any>> = {
    [K in keyof V]?: keyof V[K];
};
/**
 * Creates a high-performance multi-part slot recipe function that resolves
 * React Native styles with zero re-allocation and deterministic cache.
 */
export declare function createSlotRecipe<S extends string, V extends SlotVariantDefinitions<S>>(config: SlotRecipeConfig<S, V>): (selections?: SlotRecipeSelection<V>) => Record<S, StyleObject[]>;
//# sourceMappingURL=createSlotRecipe.d.ts.map