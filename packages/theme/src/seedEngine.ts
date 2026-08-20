import {
  generateScale,
  generateNeutralScale,
  hexToOklch,
  oklchToHex,
  withAlpha,
  type NeutralFamily,
} from "@unconfused-ui/tokens";
import type { SemanticTokens, BaseColors } from "@unconfused-ui/tokens";

export function generateComplementaryHue(hue: number): number {
  return (hue + 130) % 360;
}

export function generateWarningHue(): number {
  return 85;
}

export function generateDangerHue(hue: number): number {
  return 25;
}

export function seedToColors(seed: string, neutralFamily: NeutralFamily = "auto"): BaseColors {
  const oklch = hexToOklch(seed);
  const hue = oklch.h;

  return {
    brand: generateScale({ seed }),
    neutral: generateNeutralScale(neutralFamily, hue),
    success: generateScale({ seed: oklchToHex(0.65, 0.15, generateComplementaryHue(hue)) }),
    warning: generateScale({ seed: oklchToHex(0.75, 0.15, generateWarningHue()) }),
    danger: generateScale({ seed: oklchToHex(0.6, 0.2, generateDangerHue(hue)) }),
    white: "#FFFFFF",
    black: "#000000",
    transparent: "transparent",
  };
}

export function seedToSemanticTokens(
  seed: string,
  mode: "light" | "dark" | "oled",
  neutralFamily: NeutralFamily = "auto"
): SemanticTokens {
  const colors = seedToColors(seed, neutralFamily);

  if (mode === "oled") {
    return {
      background: "#000000",
      surface: "#0D0E15",
      surfaceSubtle: withAlpha("#FFFFFF", 0.05),
      surfaceHover: "#161824",
      surfacePressed: "#202334",
      foreground: "#FAFAFA",
      foregroundMuted: colors.neutral[300] ?? "#CBD5E1",
      foregroundSubtle: colors.neutral[500] ?? "#94A3B8",
      border: withAlpha("#FFFFFF", 0.14),
      borderSubtle: withAlpha("#FFFFFF", 0.07),
      borderBold: withAlpha(colors.brand[500], 0.55),
      primary: colors.brand[500],
      primaryForeground: "#FFFFFF",
      primaryHover: colors.brand[600],
      primaryPressed: colors.brand[700],
      secondary: "#12141F",
      secondaryForeground: colors.neutral[200] ?? "#E2E8F0",
      secondaryHover: "#1A1D2D",
      secondaryPressed: "#24283D",
      danger: colors.danger[500],
      dangerForeground: "#FFFFFF",
      dangerHover: colors.danger[600],
      dangerPressed: colors.danger[700],
      focusRing: withAlpha(colors.brand[500], 0.65),
    };
  } else if (mode === "dark") {
    return {
      background: "#090A10",
      surface: colors.neutral[900] ?? "#111320",
      surfaceSubtle: withAlpha(colors.neutral[800] ?? "#181B2C", 0.65),
      surfaceHover: colors.neutral[800] ?? "#20243B",
      surfacePressed: colors.neutral[700] ?? "#282E4B",
      foreground: colors.neutral[50] ?? "#F8FAFC",
      foregroundMuted: colors.neutral[400] ?? "#CBD5E1",
      foregroundSubtle: colors.neutral[500] ?? "#94A3B8",
      border: withAlpha(colors.neutral[600] ?? "#FFFFFF", 0.12),
      borderSubtle: withAlpha(colors.neutral[700] ?? "#FFFFFF", 0.06),
      borderBold: withAlpha(colors.brand[600], 0.45),
      primary: colors.brand[600],
      primaryForeground: "#FFFFFF",
      primaryHover: colors.brand[700],
      primaryPressed: colors.brand[800],
      secondary: colors.neutral[800] ?? "#181B2C",
      secondaryForeground: colors.neutral[300] ?? "#E2E8F0",
      secondaryHover: colors.neutral[700] ?? "#20243B",
      secondaryPressed: colors.neutral[600] ?? "#282E4B",
      danger: colors.danger[600],
      dangerForeground: "#FFFFFF",
      dangerHover: colors.danger[700],
      dangerPressed: colors.danger[800],
      focusRing: withAlpha(colors.brand[600], 0.55),
    };
  } else {
    return {
      background: "#F8FAFC",
      surface: "#FFFFFF",
      surfaceSubtle: "#F1F5F9",
      surfaceHover: "#E2E8F0",
      surfacePressed: "#CBD5E1",
      foreground: "#0F172A",
      foregroundMuted: "#475569",
      foregroundSubtle: "#64748B",
      border: "#E2E8F0",
      borderSubtle: "#F1F5F9",
      borderBold: withAlpha(colors.brand[600], 0.45),
      primary: colors.brand[600],
      primaryForeground: "#FFFFFF",
      primaryHover: colors.brand[700],
      primaryPressed: colors.brand[800],
      secondary: "#F1F5F9",
      secondaryForeground: "#0F172A",
      secondaryHover: "#E2E8F0",
      secondaryPressed: "#CBD5E1",
      danger: colors.danger[600],
      dangerForeground: "#FFFFFF",
      dangerHover: colors.danger[700],
      dangerPressed: colors.danger[800],
      focusRing: withAlpha(colors.brand[600], 0.45),
    };
  }
}

export type SeedThemeOptions = {
  seed: string;
  radius?: "sharp" | "rounded" | "pill";
  density?: "compact" | "comfortable" | "spacious";
  neutralFamily?: NeutralFamily;
};

const radiusPresets = {
  sharp: { none: 0, sm: 2, md: 4, lg: 6, xl: 8, "2xl": 12, full: 9999 },
  rounded: { none: 0, sm: 4, md: 8, lg: 12, xl: 16, "2xl": 24, full: 9999 },
  pill: { none: 0, sm: 8, md: 16, lg: 24, xl: 32, "2xl": 48, full: 9999 },
};

const densityPresets = {
  compact: {
    paddingScale: 0.75,
    gapScale: 0.75,
    fontScale: 0.9,
    controlHeight: 32,
  },
  comfortable: {
    paddingScale: 1.0,
    gapScale: 1.0,
    fontScale: 1.0,
    controlHeight: 40,
  },
  spacious: {
    paddingScale: 1.25,
    gapScale: 1.25,
    fontScale: 1.05,
    controlHeight: 48,
  },
};

export function seedToTheme(options: SeedThemeOptions): {
  name: string;
  colors: BaseColors;
  light: SemanticTokens;
  dark: SemanticTokens;
  oled: SemanticTokens;
  radiusPreset: Record<string, number>;
  densityPreset: Record<string, number>;
} {
  const { seed, radius = "rounded", density = "comfortable", neutralFamily = "auto" } = options;

  return {
    name: `theme-${seed.replace("#", "")}`,
    colors: seedToColors(seed, neutralFamily),
    light: seedToSemanticTokens(seed, "light", neutralFamily),
    dark: seedToSemanticTokens(seed, "dark", neutralFamily),
    oled: seedToSemanticTokens(seed, "oled", neutralFamily),
    radiusPreset: radiusPresets[radius],
    densityPreset: densityPresets[density],
  };
}
