"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Button_styles_1 = require("./Button.styles");
exports.Button = react_1.default.forwardRef(({ variant = "primary", size = "md", rounded, disabled = false, loading = false, loadingText, fullWidth = false, leftIcon, rightIcon, badge, style, children, onPress, accessibilityLabel, asChild, haptic, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const recipe = (0, Button_styles_1.getButtonRecipe)(semanticColors);
    const { trigger: triggerHaptic } = (0, hooks_1.useHaptics)();
    const { isPressed, pressableProps } = (0, hooks_1.usePressableState)({ disabled: disabled || loading });
    const { isFocusVisible, focusProps, focusRingStyle } = (0, hooks_1.useFocusRing)();
    const recipeStyles = recipe({ variant, size });
    const getTextColor = () => {
        if (disabled)
            return semanticColors.foregroundSubtle;
        switch (variant) {
            case "primary":
                return semanticColors.primaryForeground;
            case "secondary":
                return semanticColors.foreground;
            case "destructive":
                return "#FFFFFF";
            case "outline":
            case "ghost":
            case "glass":
            case "subtle":
                return semanticColors.primary;
            default:
                return semanticColors.foreground;
        }
    };
    const getBorderRadius = () => {
        if (!rounded)
            return undefined;
        switch (rounded) {
            case "sm":
                return 6;
            case "md":
                return 10;
            case "lg":
                return 16;
            case "full":
                return 9999;
        }
    };
    const getTextSize = () => {
        switch (size) {
            case "xs":
                return "xs";
            case "sm":
                return "xs";
            case "lg":
                return "md";
            case "xl":
                return "lg";
            case "md":
            default:
                return "sm";
        }
    };
    const handlePress = () => {
        if (haptic) {
            triggerHaptic(typeof haptic === "string" ? haptic : "light");
        }
        onPress?.();
    };
    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { ref: ref, disabled: disabled || loading, onPress: handlePress, accessibilityRole: "button", accessibilityLabel: accessibilityLabel, accessibilityState: { disabled: disabled || loading, busy: loading }, style: (state) => [
            ...recipeStyles,
            rounded && { borderRadius: getBorderRadius() },
            fullWidth && { width: "100%" },
            isPressed && { opacity: 0.85, transform: [{ scale: 0.97 }] },
            focusRingStyle,
            typeof style === "function" ? style(state) : style,
        ], asChild: asChild, ...pressableProps, ...focusProps, ...rest, children: asChild ? (children) : ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { align: "center", justify: "center", gap: 2, children: loading ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: "small", color: getTextColor() }), loadingText && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: getTextSize(), weight: "bold", color: getTextColor(), children: loadingText }))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [leftIcon, typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: getTextSize(), weight: "bold", color: getTextColor(), children: children })) : (children), rightIcon, badge] })) })) }));
});
exports.Button.displayName = "Button";
