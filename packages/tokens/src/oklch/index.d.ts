/**
 * OKLCH Perceptual Color Engine & Color-Aware Elevation
 * Pure TypeScript implementation, zero dependencies.
 */
import type { ColorScale } from "../types";
export type NeutralFamily = "auto" | "zinc" | "slate" | "warm" | "pure";
/**
 * Converts a hex or rgb color to an rgba string with specified alpha (0-1).
 * @param color Hex (3 or 6 chars) or rgb string
 * @param alpha Opacity from 0 to 1
 * @returns Standard rgba(r, g, b, alpha) string
 */
export declare function withAlpha(color: string, alpha: number): string;
/**
 * Calculates fluid typography size with linear viewport interpolation and boundary clamping.
 */
export declare function calculateFluidSize(minPx: number, maxPx: number, minViewport?: number, maxViewport?: number, currentViewport?: number): number;
/**
 * Color-Aware Perceptual Elevation generator.
 * Computes natural shadow properties tinted with the environment's OKLCH chromatic tone.
 */
export declare function createPerceptualElevation(level: 1 | 2 | 3 | 4 | 5, baseColorHex?: string, mode?: "light" | "dark" | "oled"): {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
};
/**
 * Parses a hex string to 0-1 RGB array.
 */
export declare function hexToRgb(hex: string): [number, number, number];
/**
 * Converts 0-1 RGB to a hex string.
 */
export declare function rgbToHex(r: number, g: number, b: number): string;
export declare function linearize(c: number): number;
export declare function delinearize(c: number): number;
export declare function rgbToOklch(r: number, g: number, b: number): {
    L: number;
    C: number;
    h: number;
};
export declare function oklchToRgb(L: number, C: number, h: number): [number, number, number];
export declare function hexToOklch(hex: string): {
    L: number;
    C: number;
    h: number;
};
export declare function oklchToHex(L: number, C: number, h: number): string;
export declare function generateScale(options: {
    seed: string;
    steps?: number;
    chromaPreserve?: number;
}): ColorScale;
/**
 * Generates neutral scales for diverse branded neutral families.
 */
export declare function generateNeutralScale(familyOrHue?: NeutralFamily | number, seedHue?: number): ColorScale;
//# sourceMappingURL=index.d.ts.map