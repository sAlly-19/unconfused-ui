import React from "react";
import { SemanticTokens } from "@unconfused-ui/tokens";
import { UnconfusedTheme } from "./createTheme";
export type ColorSchemeMode = "light" | "dark" | "oled" | "system";
export type ActiveColorScheme = "light" | "dark" | "oled";
export type ResolvedTheme = Omit<UnconfusedTheme["tokens"], "colors"> & {
    colors: SemanticTokens;
};
export type ThemeContextValue = {
    theme: ResolvedTheme;
    baseTokens: UnconfusedTheme["tokens"];
    semanticColors: SemanticTokens;
    colorScheme: ColorSchemeMode;
    activeColorScheme: ActiveColorScheme;
    setColorScheme: (mode: ColorSchemeMode) => void;
    toggleColorScheme: () => void;
    rawTheme: UnconfusedTheme;
};
export type ThemeProviderProps = {
    children: React.ReactNode;
    theme?: UnconfusedTheme;
    colorScheme?: ColorSchemeMode;
};
export declare function ThemeProvider({ children, theme, colorScheme: initialMode, }: ThemeProviderProps): React.ReactElement;
export declare function useTheme(): ThemeContextValue;
//# sourceMappingURL=ThemeProvider.d.ts.map