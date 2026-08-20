"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = exports.Indicator = exports.Dot = exports.Pill = exports.Chip = exports.Tag = exports.StatusBadge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const Badge_1 = require("./Badge");
__exportStar(require("./Badge"), exports);
const StatusBadge = ({ status = "online", label, children, ...props }) => {
    const getVariant = () => {
        switch (status) {
            case "online":
                return "success";
            case "busy":
                return "danger";
            case "away":
                return "warning";
            case "offline":
            default:
                return "outline";
        }
    };
    return (0, jsx_runtime_1.jsx)(Badge_1.Badge, { variant: getVariant(), dot: true, ...props, children: children ?? label ?? status.toUpperCase() });
};
exports.StatusBadge = StatusBadge;
exports.StatusBadge.displayName = "StatusBadge";
const Tag = ({ onRemove, children, ...props }) => {
    const { baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(Badge_1.Badge, { ...props, children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 1.5, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "medium", children: children }), onRemove && ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: onRemove, accessibilityLabel: "Remove Tag", children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.6), children: "\u2715" }) }))] }) }));
};
exports.Tag = Tag;
exports.Tag.displayName = "Tag";
const Chip = ({ label, icon, selected = false, onPress, style }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: onPress, disabled: !onPress, accessibilityRole: "button", accessibilityState: { selected }, style: [
            {
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 20,
                backgroundColor: selected ? (0, tokens_1.withAlpha)(baseTokens.colors.brand[500], 0.25) : (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.05),
                borderWidth: 1,
                borderColor: selected ? semanticColors.primary : (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.12),
            },
            style,
        ], children: [icon, (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: selected ? "bold" : "medium", color: selected ? semanticColors.primary : semanticColors.foreground, children: label })] }));
};
exports.Chip = Chip;
exports.Chip.displayName = "Chip";
const Pill = (props) => (0, jsx_runtime_1.jsx)(Badge_1.Badge, { radius: 999, ...props });
exports.Pill = Pill;
exports.Pill.displayName = "Pill";
const Dot = ({ color, size = 8, pulse = false, style }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const activeColor = color ?? semanticColors.primary;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: activeColor,
                shadowColor: pulse ? (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.8) : "transparent",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: pulse ? 1 : 0,
                shadowRadius: 6,
                elevation: pulse ? 3 : 0,
            },
            style,
        ] }));
};
exports.Dot = Dot;
exports.Dot.displayName = "Dot";
exports.Indicator = exports.Dot;
const Counter = ({ count, max = 99, variant = "danger", style }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const display = count > max ? `${max}+` : count.toString();
    const bg = variant === "danger"
        ? semanticColors.danger
        : variant === "primary"
            ? semanticColors.primary
            : semanticColors.surfaceSubtle;
    return ((0, jsx_runtime_1.jsx)(primitives_1.Center, { accessibilityRole: "adjustable", accessibilityValue: { min: 0, max, now: count, text: `${count}` }, style: [
            {
                minWidth: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: bg,
                paddingHorizontal: 6,
            },
            style,
        ], children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: baseTokens.colors.white, style: { fontSize: 10 }, children: display }) }));
};
exports.Counter = Counter;
exports.Counter.displayName = "Counter";
