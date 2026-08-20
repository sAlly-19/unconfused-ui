"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Switch = ({ checked: propChecked, defaultChecked = false, onCheckedChange, disabled = false, label, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [isChecked, setIsChecked] = (0, hooks_1.useControllableState)({
        value: propChecked,
        defaultValue: defaultChecked,
        onChange: onCheckedChange,
    });
    const handlePress = () => {
        if (disabled)
            return;
        setIsChecked(!isChecked);
    };
    const trackStyle = {
        width: 48,
        height: 26,
        borderRadius: 13,
        backgroundColor: isChecked ? semanticColors.primary : semanticColors.surfaceSubtle,
        borderWidth: 1,
        borderColor: isChecked ? semanticColors.primary : semanticColors.border,
        padding: 2,
        justifyContent: "center",
        shadowColor: isChecked ? semanticColors.primary : "transparent",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: isChecked ? 3 : 0,
    };
    const thumbStyle = {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        alignSelf: isChecked ? "flex-end" : "flex-start",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: handlePress, disabled: disabled, accessibilityRole: "switch", accessibilityState: { checked: isChecked, disabled }, style: [
            {
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                minHeight: 44, // 44pt touch target
                opacity: disabled ? 0.5 : 1,
            },
            style,
        ], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: trackStyle, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: thumbStyle }) }), label && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "medium", color: semanticColors.foreground, children: label }))] }));
};
exports.Switch = Switch;
exports.Switch.displayName = "Switch";
