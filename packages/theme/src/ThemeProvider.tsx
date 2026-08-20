import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useColorScheme as useRNColorScheme } from "react-native";
import { SemanticTokens } from "@unconfused-ui/tokens";
import { defaultTheme, UnconfusedTheme } from "./createTheme";

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

const ThemeContext = createContext<ThemeContextValue | null>(null);

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: UnconfusedTheme;
  colorScheme?: ColorSchemeMode;
};

export function ThemeProvider({
  children,
  theme = defaultTheme,
  colorScheme: initialMode = "system",
}: ThemeProviderProps): React.ReactElement {
  const systemScheme = useRNColorScheme() === "dark" ? "dark" : "light";
  const [colorSchemeMode, setColorSchemeMode] = useState<ColorSchemeMode>(initialMode);

  useEffect(() => {
    setColorSchemeMode(initialMode);
  }, [initialMode]);

  const activeColorScheme: ActiveColorScheme =
    colorSchemeMode === "system" ? systemScheme : colorSchemeMode;

  const activeSemantic =
    activeColorScheme === "oled"
      ? (theme.oled ?? theme.dark)
      : activeColorScheme === "dark"
      ? theme.dark
      : theme.light;

  const mergedTheme: ResolvedTheme = useMemo(() => {
    const { colors: _baseColors, ...restTokens } = theme.tokens;
    return {
      ...restTokens,
      colors: activeSemantic,
    };
  }, [theme.tokens, activeSemantic]);

  const toggleColorScheme = () => {
    setColorSchemeMode((prev) => {
      if (prev === "dark") return "oled";
      if (prev === "oled") return "light";
      return "dark";
    });
  };

  const value: ThemeContextValue = useMemo(
    () => ({
      theme: mergedTheme,
      baseTokens: theme.tokens,
      semanticColors: activeSemantic,
      colorScheme: colorSchemeMode,
      activeColorScheme,
      setColorScheme: setColorSchemeMode,
      toggleColorScheme,
      rawTheme: theme,
    }),
    [mergedTheme, theme, activeSemantic, colorSchemeMode, activeColorScheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    const activeSemantic = defaultTheme.light;
    const { colors: _baseColors, ...restTokens } = defaultTheme.tokens;
    return {
      theme: { ...restTokens, colors: activeSemantic },
      baseTokens: defaultTheme.tokens,
      semanticColors: activeSemantic,
      colorScheme: "light",
      activeColorScheme: "light",
      setColorScheme: () => {},
      toggleColorScheme: () => {},
      rawTheme: defaultTheme,
    };
  }
  return context;
}
