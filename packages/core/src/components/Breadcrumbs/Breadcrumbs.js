"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Breadcrumbs = ({ items, separator = "/", style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { align: "center", gap: 2, style: style, children: items.map((item, index) => {
            const isLast = index === items.length - 1;
            return ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: item.onPress, disabled: isLast || !item.onPress, accessibilityRole: "button", children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: isLast ? "bold" : "medium", color: isLast ? semanticColors.foreground : semanticColors.foregroundMuted, children: item.label }) }), !isLast && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: separator }))] }, index));
        }) }));
};
exports.Breadcrumbs = Breadcrumbs;
exports.Breadcrumbs.displayName = "Breadcrumbs";
