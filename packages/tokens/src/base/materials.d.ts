export type MaterialToken = {
    blur: number;
    tint: string;
    tintOpacity: number;
    borderLuminance: number;
    saturation: number;
    specularHighlight?: boolean;
};
export type Materials = {
    glass: MaterialToken;
    frosted: MaterialToken;
    matte: MaterialToken;
    liquid: MaterialToken;
    solid: MaterialToken;
};
/**
 * Material definitions for surfaces
 */
export declare const materials: Materials;
//# sourceMappingURL=materials.d.ts.map