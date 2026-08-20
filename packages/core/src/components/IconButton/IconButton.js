"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const IconButton_styles_1 = require("./IconButton.styles");
exports.IconButton = react_1.default.forwardRef(({ icon, variant = "primary", size = "md", shape = "circle", badge, disabled = false, style, onPress, accessibilityLabel, asChild, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const recipe = (0, IconButton_styles_1.getIconButtonRecipe)(semanticColors);
    const { isPressed, pressableProps } = (0, hooks_1.usePressableState)({ disabled });
    const recipeStyles = recipe({ variant, size });
    const getBorderRadius = () => {
        switch (shape) {
            case "square":
                return 0;
            case "rounded":
                return size === "xs" ? 6 : size === "sm" ? 8 : 12;
            case "circle":
            default:
                return 9999;
        }
    };
    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { ref: ref, disabled: disabled, onPress: onPress, accessibilityRole: "button", accessibilityLabel: accessibilityLabel, accessibilityState: { disabled }, style: [
            ...recipeStyles,
            { borderRadius: getBorderRadius(), position: "relative" },
            isPressed && { opacity: 0.85, transform: [{ scale: 0.94 }] },
            style,
        ], asChild: asChild, ...pressableProps, ...rest, children: asChild ? (icon) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [icon, badge && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { position: "absolute", top: -4, right: -4, zIndex: 10 }, children: badge }))] })) }));
});
exports.IconButton.displayName = "IconButton";
