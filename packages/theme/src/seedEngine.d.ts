import { type NeutralFamily } from "@unconfused-ui/tokens";
import type { SemanticTokens, BaseColors } from "@unconfused-ui/tokens";
export declare function generateComplementaryHue(hue: number): number;
export declare function generateWarningHue(): number;
export declare function generateDangerHue(hue: number): number;
export declare function seedToColors(seed: string, neutralFamily?: NeutralFamily): BaseColors;
export declare function seedToSemanticTokens(seed: string, mode: "light" | "dark" | "oled", neutralFamily?: NeutralFamily): SemanticTokens;
export type SeedThemeOptions = {
    seed: string;
    radius?: "sharp" | "rounded" | "pill";
    density?: "compact" | "comfortable" | "spacious";
    neutralFamily?: NeutralFamily;
};
export declare function seedToTheme(options: SeedThemeOptions): {
    name: string;
    colors: BaseColors;
    light: SemanticTokens;
    dark: SemanticTokens;
    oled: SemanticTokens;
    radiusPreset: Record<string, number>;
    densityPreset: Record<string, number>;
};
//# sourceMappingURL=seedEngine.d.ts.map