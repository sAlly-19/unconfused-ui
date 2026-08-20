"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const Avatar = ({ src, fallback = "?", size = "md", status, style }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const dimension = size === "sm" ? 34 : size === "lg" ? 56 : size === "xl" ? 72 : 44;
    const fontSize = size === "sm" ? "xs" : size === "lg" ? "lg" : size === "xl" ? "2xl" : "md";
    const dotSize = size === "sm" ? 8 : size === "lg" ? 14 : size === "xl" ? 16 : 10;
    const containerStyle = {
        width: dimension,
        height: dimension,
        borderRadius: dimension / 2,
        backgroundColor: semanticColors.surfaceSubtle,
        borderWidth: 1.5,
        borderColor: (0, tokens_1.withAlpha)(semanticColors.primary, 0.4), // Violet Ring Accent
        overflow: "hidden",
    };
    const getStatusColor = () => {
        switch (status) {
            case "online":
                return baseTokens.colors.success[500];
            case "busy":
                return baseTokens.colors.danger[500];
            case "away":
                return baseTokens.colors.warning[500];
            case "offline":
            default:
                return baseTokens.colors.neutral[500];
        }
    };
    const imageSource = typeof src === "string" ? { uri: src } : src;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [{ position: "relative" }, style], children: [(0, jsx_runtime_1.jsx)(primitives_1.Center, { style: containerStyle, children: src ? ((0, jsx_runtime_1.jsx)(react_native_1.Image, { source: imageSource, style: { width: "100%", height: "100%" }, resizeMode: "cover" })) : ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: fontSize, weight: "bold", color: baseTokens.colors.brand[400], children: fallback.substring(0, 2).toUpperCase() })) }), status && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: dotSize,
                    height: dotSize,
                    borderRadius: dotSize / 2,
                    backgroundColor: getStatusColor(),
                    borderWidth: 2,
                    borderColor: semanticColors.background,
                } }))] }));
};
exports.Avatar = Avatar;
exports.Avatar.displayName = "Avatar";
