import {
  baseColors,
  darkSemanticTokens,
  fontSizes,
  fontWeights,
  lightSemanticTokens,
  lineHeights,
  motion,
  radii,
  shadows,
  spacing,
  SemanticTokens,
  ThemeTokens,
  zIndices,
  auditSemanticPairs,
  NeutralFamily,
} from "@unconfused-ui/tokens";
import { seedToColors, seedToSemanticTokens } from "./seedEngine";

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

export function createTheme(options: CreateThemeOptions = {}): UnconfusedTheme {
  const name = options.name ?? (options.seed ? `Theme-${options.seed}` : "default");
  const neutralFamily = options.neutralFamily ?? "auto";

  // Determine base colors (seed-driven or default baseColors)
  const initialColors = options.seed
    ? seedToColors(options.seed, neutralFamily)
    : baseColors;

  const tokens = {
    colors: { ...initialColors, ...options.tokens?.colors },
    spacing: { ...spacing, ...options.tokens?.spacing },
    radii: { ...radii, ...options.tokens?.radii },
    fontSizes: { ...fontSizes, ...options.tokens?.fontSizes },
    lineHeights: { ...lineHeights, ...options.tokens?.lineHeights },
    fontWeights: { ...fontWeights, ...options.tokens?.fontWeights },
    shadows: { ...shadows, ...options.tokens?.shadows },
    motion: { ...motion, ...options.tokens?.motion },
    zIndices: { ...zIndices, ...options.tokens?.zIndices },
  };

  // Determine initial semantic tokens
  const initialLight = options.seed
    ? seedToSemanticTokens(options.seed, "light", neutralFamily)
    : lightSemanticTokens;
  const initialDark = options.seed
    ? seedToSemanticTokens(options.seed, "dark", neutralFamily)
    : darkSemanticTokens;
  const initialOled = options.seed
    ? seedToSemanticTokens(options.seed, "oled", neutralFamily)
    : seedToSemanticTokens("#000000", "oled", neutralFamily);

  const light = {
    ...initialLight,
    ...options.semanticTokens?.light,
  };

  const dark = {
    ...initialDark,
    ...options.semanticTokens?.dark,
  };

  const oled = {
    ...initialOled,
    ...options.semanticTokens?.oled,
  };

  // Optional APCA contrast audit in development
  if (options.audit) {
    const lightAudit = auditSemanticPairs(light as Record<string, string>);
    const darkAudit = auditSemanticPairs(dark as Record<string, string>);
    const failingLight = lightAudit.filter((r) => !r.pass);
    const failingDark = darkAudit.filter((r) => !r.pass);

    if (failingLight.length > 0 || failingDark.length > 0) {
      console.warn(
        `[Unconfused UI Theme Audit] Theme "${name}" has APCA contrast issues:`,
        { lightFailures: failingLight, darkFailures: failingDark }
      );
    }
  }

  return {
    name,
    tokens,
    light,
    dark,
    oled,
  };
}

export const defaultTheme = createTheme();
