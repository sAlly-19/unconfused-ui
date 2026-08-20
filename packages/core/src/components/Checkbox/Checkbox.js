"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Checkbox = ({ checked: propChecked, defaultChecked = false, onCheckedChange, disabled = false, label, style, }) => {
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
    const boxStyle = {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: isChecked ? semanticColors.primary : semanticColors.borderBold,
        backgroundColor: isChecked ? semanticColors.primary : "transparent",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: isChecked ? semanticColors.primary : "transparent",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: isChecked ? 2 : 0,
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: handlePress, disabled: disabled, accessibilityRole: "checkbox", accessibilityState: { checked: isChecked, disabled }, style: [
            {
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                minHeight: 44, // 44pt touch target
                opacity: disabled ? 0.5 : 1,
            },
            style,
        ], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: boxStyle, children: isChecked && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primaryForeground, children: "\u2713" })) }), label && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "medium", color: semanticColors.foreground, children: label }))] }));
};
exports.Checkbox = Checkbox;
exports.Checkbox.displayName = "Checkbox";
