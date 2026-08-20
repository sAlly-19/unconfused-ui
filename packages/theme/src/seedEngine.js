"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComplementaryHue = generateComplementaryHue;
exports.generateWarningHue = generateWarningHue;
exports.generateDangerHue = generateDangerHue;
exports.seedToColors = seedToColors;
exports.seedToSemanticTokens = seedToSemanticTokens;
exports.seedToTheme = seedToTheme;
const tokens_1 = require("@unconfused-ui/tokens");
function generateComplementaryHue(hue) {
    return (hue + 130) % 360;
}
function generateWarningHue() {
    return 85;
}
function generateDangerHue(hue) {
    return 25;
}
function seedToColors(seed, neutralFamily = "auto") {
    const oklch = (0, tokens_1.hexToOklch)(seed);
    const hue = oklch.h;
    return {
        brand: (0, tokens_1.generateScale)({ seed }),
        neutral: (0, tokens_1.generateNeutralScale)(neutralFamily, hue),
        success: (0, tokens_1.generateScale)({ seed: (0, tokens_1.oklchToHex)(0.65, 0.15, generateComplementaryHue(hue)) }),
        warning: (0, tokens_1.generateScale)({ seed: (0, tokens_1.oklchToHex)(0.75, 0.15, generateWarningHue()) }),
        danger: (0, tokens_1.generateScale)({ seed: (0, tokens_1.oklchToHex)(0.6, 0.2, generateDangerHue(hue)) }),
        white: "#FFFFFF",
        black: "#000000",
        transparent: "transparent",
    };
}
function seedToSemanticTokens(seed, mode, neutralFamily = "auto") {
    const colors = seedToColors(seed, neutralFamily);
    if (mode === "oled") {
        return {
            background: "#000000",
            surface: "#0D0E15",
            surfaceSubtle: (0, tokens_1.withAlpha)("#FFFFFF", 0.05),
            surfaceHover: "#161824",
            surfacePressed: "#202334",
            foreground: "#FAFAFA",
            foregroundMuted: colors.neutral[300] ?? "#CBD5E1",
            foregroundSubtle: colors.neutral[500] ?? "#94A3B8",
            border: (0, tokens_1.withAlpha)("#FFFFFF", 0.14),
            borderSubtle: (0, tokens_1.withAlpha)("#FFFFFF", 0.07),
            borderBold: (0, tokens_1.withAlpha)(colors.brand[500], 0.55),
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
            focusRing: (0, tokens_1.withAlpha)(colors.brand[500], 0.65),
        };
    }
    else if (mode === "dark") {
        return {
            background: "#090A10",
            surface: colors.neutral[900] ?? "#111320",
            surfaceSubtle: (0, tokens_1.withAlpha)(colors.neutral[800] ?? "#181B2C", 0.65),
            surfaceHover: colors.neutral[800] ?? "#20243B",
            surfacePressed: colors.neutral[700] ?? "#282E4B",
            foreground: colors.neutral[50] ?? "#F8FAFC",
            foregroundMuted: colors.neutral[400] ?? "#CBD5E1",
            foregroundSubtle: colors.neutral[500] ?? "#94A3B8",
            border: (0, tokens_1.withAlpha)(colors.neutral[600] ?? "#FFFFFF", 0.12),
            borderSubtle: (0, tokens_1.withAlpha)(colors.neutral[700] ?? "#FFFFFF", 0.06),
            borderBold: (0, tokens_1.withAlpha)(colors.brand[600], 0.45),
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
            focusRing: (0, tokens_1.withAlpha)(colors.brand[600], 0.55),
        };
    }
    else {
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
            borderBold: (0, tokens_1.withAlpha)(colors.brand[600], 0.45),
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
            focusRing: (0, tokens_1.withAlpha)(colors.brand[600], 0.45),
        };
    }
}
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
function seedToTheme(options) {
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
