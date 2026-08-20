"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Badge_styles_1 = require("./Badge.styles");
const Badge = ({ variant = "primary", size = "md", dot = false, radius, style, children, asChild, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const recipe = (0, Badge_styles_1.getBadgeRecipe)(semanticColors);
    const recipeStyles = recipe({ variant, size });
    const getDotColor = () => {
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
    const getTextColor = () => {
        switch (variant) {
            case "primary":
                return semanticColors.primaryForeground;
            case "outline":
                return semanticColors.foreground;
            default:
                return semanticColors.foreground;
        }
    };
    const Component = asChild ? primitives_1.Slot : react_native_1.View;
    return ((0, jsx_runtime_1.jsx)(Component, { style: [...recipeStyles, radius !== undefined && { borderRadius: radius }, style], children: asChild ? (children) : ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 1.5, children: [dot && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        width: 6,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: getDotColor(),
                    } })), typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: size === "sm" ? "xs" : "sm", weight: "bold", color: getTextColor(), children: children })) : (children)] })) }));
};
exports.Badge = Badge;
exports.Badge.displayName = "Badge";
