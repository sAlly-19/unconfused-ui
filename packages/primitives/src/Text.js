"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const TRACKING_MAP = {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    widest: 1.5,
};
const LEADING_MAP = {
    none: 1,
    tight: 1.2,
    snug: 1.35,
    normal: 1.5,
    relaxed: 1.65,
    loose: 1.8,
};
exports.Text = react_1.default.forwardRef(({ size = "md", weight = "regular", lineHeight, leading, color, align, transform, decoration, italic = false, tracking, muted = false, contrast = false, fluid = false, allowFontScaling, maxFontSizeMultiplier, style, children, ...rest }, ref) => {
    const { theme, semanticColors } = (0, theme_1.useTheme)();
    const baseFontSize = typeof size === "number" ? size : theme.fontSizes[size];
    const resolveFontSize = () => {
        if (!fluid)
            return baseFontSize;
        const windowWidth = typeof react_native_1.Dimensions !== "undefined" ? react_native_1.Dimensions.get("window").width : 768;
        if (Array.isArray(fluid)) {
            return (0, tokens_1.calculateFluidSize)(fluid[0], fluid[1], 360, 1280, windowWidth);
        }
        return (0, tokens_1.calculateFluidSize)(Math.round(baseFontSize * 0.85), Math.round(baseFontSize * 1.3), 360, 1280, windowWidth);
    };
    const fontSize = resolveFontSize();
    const resolveLineHeight = () => {
        if (lineHeight !== undefined) {
            return typeof lineHeight === "number" ? lineHeight : theme.lineHeights[lineHeight];
        }
        if (leading !== undefined) {
            return Math.round(fontSize * LEADING_MAP[leading]);
        }
        return typeof size === "string" ? theme.lineHeights[size] : Math.round(fontSize * 1.4);
    };
    const resolveColor = () => {
        if (muted)
            return semanticColors.foregroundMuted;
        if (contrast)
            return semanticColors.primary;
        if (color) {
            if (color in semanticColors) {
                return semanticColors[color];
            }
            return color;
        }
        return semanticColors.foreground;
    };
    const resolveTracking = () => {
        if (tracking === undefined)
            return undefined;
        if (typeof tracking === "number")
            return tracking;
        return TRACKING_MAP[tracking];
    };
    const textStyle = {
        fontSize,
        fontWeight: theme.fontWeights[weight],
        lineHeight: resolveLineHeight(),
        color: resolveColor(),
        textAlign: align,
        textTransform: transform,
        textDecorationLine: decoration,
        fontStyle: italic ? "italic" : "normal",
        letterSpacing: resolveTracking(),
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { ref: ref, allowFontScaling: allowFontScaling ?? true, maxFontSizeMultiplier: maxFontSizeMultiplier ?? (typeof size === "string" && (size.startsWith("3") || size.startsWith("4")) ? 1.3 : 1.5), style: [textStyle, style], ...rest, children: children }));
});
exports.Text.displayName = "Text";
