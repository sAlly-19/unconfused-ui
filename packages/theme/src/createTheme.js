"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
exports.createTheme = createTheme;
const tokens_1 = require("@unconfused-ui/tokens");
const seedEngine_1 = require("./seedEngine");
function createTheme(options = {}) {
    const name = options.name ?? (options.seed ? `Theme-${options.seed}` : "default");
    const neutralFamily = options.neutralFamily ?? "auto";
    // Determine base colors (seed-driven or default baseColors)
    const initialColors = options.seed
        ? (0, seedEngine_1.seedToColors)(options.seed, neutralFamily)
        : tokens_1.baseColors;
    const tokens = {
        colors: { ...initialColors, ...options.tokens?.colors },
        spacing: { ...tokens_1.spacing, ...options.tokens?.spacing },
        radii: { ...tokens_1.radii, ...options.tokens?.radii },
        fontSizes: { ...tokens_1.fontSizes, ...options.tokens?.fontSizes },
        lineHeights: { ...tokens_1.lineHeights, ...options.tokens?.lineHeights },
        fontWeights: { ...tokens_1.fontWeights, ...options.tokens?.fontWeights },
        shadows: { ...tokens_1.shadows, ...options.tokens?.shadows },
        motion: { ...tokens_1.motion, ...options.tokens?.motion },
        zIndices: { ...tokens_1.zIndices, ...options.tokens?.zIndices },
    };
    // Determine initial semantic tokens
    const initialLight = options.seed
        ? (0, seedEngine_1.seedToSemanticTokens)(options.seed, "light", neutralFamily)
        : tokens_1.lightSemanticTokens;
    const initialDark = options.seed
        ? (0, seedEngine_1.seedToSemanticTokens)(options.seed, "dark", neutralFamily)
        : tokens_1.darkSemanticTokens;
    const initialOled = options.seed
        ? (0, seedEngine_1.seedToSemanticTokens)(options.seed, "oled", neutralFamily)
        : (0, seedEngine_1.seedToSemanticTokens)("#000000", "oled", neutralFamily);
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
        const lightAudit = (0, tokens_1.auditSemanticPairs)(light);
        const darkAudit = (0, tokens_1.auditSemanticPairs)(dark);
        const failingLight = lightAudit.filter((r) => !r.pass);
        const failingDark = darkAudit.filter((r) => !r.pass);
        if (failingLight.length > 0 || failingDark.length > 0) {
            console.warn(`[Unconfused UI Theme Audit] Theme "${name}" has APCA contrast issues:`, { lightFailures: failingLight, darkFailures: failingDark });
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
exports.defaultTheme = createTheme();
