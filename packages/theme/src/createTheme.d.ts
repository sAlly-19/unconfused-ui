import { SemanticTokens, ThemeTokens, NeutralFamily } from "@unconfused-ui/tokens";
export type CreateThemeOptions = {
    name?: string;
    seed?: string;
    neutralFamily?: NeutralFamily;
    audit?: boolean;
    tokens?: Partial<Omit<ThemeTokens, "semantic">>;
    semanticTokens?: {
        light?: Partial<SemanticTokens>;
        dark?: Partial<SemanticTokens>;
        oled?: Partial<SemanticTokens>;
    };
};
export type UnconfusedTheme = {
    name: string;
    tokens: Omit<ThemeTokens, "semantic">;
    light: SemanticTokens;
    dark: SemanticTokens;
    oled: SemanticTokens;
};
export declare function createTheme(options?: CreateThemeOptions): UnconfusedTheme;
export declare const defaultTheme: UnconfusedTheme;
//# sourceMappingURL=createTheme.d.ts.map