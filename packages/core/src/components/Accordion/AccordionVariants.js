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
exports.Tree = exports.TreeItem = exports.Expandable = exports.DisclosureGroup = exports.Disclosure = exports.Collapsible = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Accordion_1 = require("./Accordion");
__exportStar(require("./Accordion"), exports);
const Collapsible = ({ title, subtitle, defaultOpen = false, style, children, }) => {
    const [open, setOpen] = (0, react_1.useState)(defaultOpen);
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [
            {
                borderRadius: 14,
                backgroundColor: semanticColors.surface,
                borderWidth: 1,
                borderColor: open ? semanticColors.borderBold : semanticColors.border,
                overflow: "hidden",
            },
            style,
        ], children: [(0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => setOpen(!open), accessibilityRole: "button", accessibilityState: { expanded: open }, style: {
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0.5, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "semibold", color: semanticColors.foreground, children: title }), subtitle && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: subtitle }))] }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, weight: "bold", children: open ? "▲" : "▼" })] }), open && ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                    paddingTop: 4,
                    borderTopWidth: 1,
                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                }, children: typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, lineHeight: "sm", children: children })) : (children) }))] }));
};
exports.Collapsible = Collapsible;
exports.Collapsible.displayName = "Collapsible";
// 2. Disclosure & DisclosureGroup
exports.Disclosure = exports.Collapsible;
exports.DisclosureGroup = Accordion_1.Accordion;
const Expandable = ({ text, limit = 120, style }) => {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const { semanticColors } = (0, theme_1.useTheme)();
    const isOverLimit = text.length > limit;
    const displayed = expanded || !isOverLimit ? text : `${text.substring(0, limit)}...`;
    return ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, style: style, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foreground, lineHeight: "sm", children: displayed }), isOverLimit && ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setExpanded(!expanded), children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, children: expanded ? "Show Less ↑" : "Show More ↓" }) }))] }));
};
exports.Expandable = Expandable;
exports.Expandable.displayName = "Expandable";
const TreeItem = ({ label, icon, depth = 0, defaultOpen = false, children, onPress, style, }) => {
    const [open, setOpen] = (0, react_1.useState)(defaultOpen);
    const { semanticColors } = (0, theme_1.useTheme)();
    const hasChildren = Boolean(children);
    return ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0.5, style: [{ paddingLeft: depth * 18 }, style], children: [(0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => {
                    if (hasChildren)
                        setOpen(!open);
                    onPress?.();
                }, style: {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                    paddingVertical: 8,
                    paddingHorizontal: 10,
                    borderRadius: 8,
                }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: hasChildren ? (open ? "📂" : "📁") : (icon ?? "📄") }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: hasChildren ? "semibold" : "regular", color: semanticColors.foreground, children: label }), hasChildren && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, style: { fontSize: 10 }, children: open ? "▼" : "▶" }))] }), hasChildren && open && (0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: 0.5, children: children })] }));
};
exports.TreeItem = TreeItem;
exports.TreeItem.displayName = "TreeItem";
const Tree = ({ children, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                padding: 12,
                borderRadius: 14,
                backgroundColor: semanticColors.surface,
                borderWidth: 1,
                borderColor: semanticColors.border,
            },
            style,
        ], children: (0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: 1, children: children }) }));
};
exports.Tree = Tree;
exports.Tree.displayName = "Tree";
