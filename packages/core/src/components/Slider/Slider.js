"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Slider = ({ value: propValue, defaultValue = 50, onValueChange, min = 0, max = 100, label, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [value, setValue] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    const percentage = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
    const handleTrackPress = (e) => {
        // Basic step increment/decrement toggle for touch testing
        const nextValue = value >= max ? min : value + 10;
        setValue(Math.min(max, nextValue));
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [{ gap: 8 }, style], children: [label && ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.2, color: semanticColors.foregroundMuted }, children: label }), (0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, children: [value, "%"] })] })), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: handleTrackPress, style: { paddingVertical: 8 }, accessibilityRole: "adjustable", accessibilityValue: { min, max, now: value, text: `${value}` }, accessibilityActions: [{ name: "increment" }, { name: "decrement" }], onAccessibilityAction: (event) => {
                    const stepValue = 10;
                    if (event.nativeEvent.actionName === 'increment') {
                        setValue(Math.min(max, value + stepValue));
                    }
                    else if (event.nativeEvent.actionName === 'decrement') {
                        setValue(Math.max(min, value - stepValue));
                    }
                }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        height: 8,
                        width: "100%",
                        borderRadius: 4,
                        backgroundColor: semanticColors.surfaceSubtle,
                        overflow: "hidden",
                        position: "relative",
                    }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                            height: "100%",
                            width: `${percentage}%`,
                            backgroundColor: semanticColors.primary,
                            borderRadius: 4,
                        } }) }) })] }));
};
exports.Slider = Slider;
exports.Slider.displayName = "Slider";
