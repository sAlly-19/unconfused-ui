"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Progress = ({ value, max = 100, variant = "primary", label, showValue = false, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const percentage = Math.max(0, Math.min(100, (value / max) * 100));
    const getBarColor = () => {
        switch (variant) {
            case "success":
                return baseTokens.colors.success[500];
            case "warning":
                return baseTokens.colors.warning[500];
            case "danger":
                return baseTokens.colors.danger[500];
            case "primary":
            default:
                return semanticColors.primary;
        }
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [{ gap: 6 }, style], children: [(label || showValue) && ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, children: [label && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.2, color: semanticColors.foregroundMuted }, children: label })), showValue && ((0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", weight: "bold", color: getBarColor(), children: [Math.round(percentage), "%"] }))] })), (0, jsx_runtime_1.jsx)(react_native_1.View, { accessibilityRole: "progressbar", accessibilityValue: { min: 0, max, now: value, text: `${Math.round(percentage)}%` }, style: {
                    height: 10,
                    width: "100%",
                    borderRadius: 5,
                    backgroundColor: semanticColors.surfaceSubtle,
                    overflow: "hidden",
                }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        height: "100%",
                        width: `${percentage}%`,
                        backgroundColor: getBarColor(),
                        borderRadius: 5,
                    } }) })] }));
};
exports.Progress = Progress;
exports.Progress.displayName = "Progress";
