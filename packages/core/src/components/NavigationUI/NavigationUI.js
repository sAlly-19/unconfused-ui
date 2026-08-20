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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stepper = exports.Pagination = exports.Toolbar = exports.Header = exports.Navbar = exports.NavigationRail = exports.AppBar = exports.NavigationBar = exports.Breadcrumb = exports.BottomTabs = exports.TopTabs = exports.TabBar = exports.Tab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const Breadcrumbs_1 = require("../Breadcrumbs");
const Tabs_1 = require("../Tabs");
__exportStar(require("../Tabs"), exports);
__exportStar(require("../Breadcrumbs"), exports);
__exportStar(require("../Sidebar"), exports);
// 1. Tab, TabBar, TopTabs, BottomTabs aliases & components
exports.Tab = Tabs_1.TabsTrigger;
exports.TabBar = Tabs_1.Tabs.List;
exports.TopTabs = Tabs_1.Tabs;
const BottomTabs = ({ items, activeKey = items[0]?.key, onSelect, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                height: 64,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.98),
                borderTopWidth: 1,
                borderTopColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                paddingHorizontal: 8,
                paddingBottom: 4,
            },
            style,
        ], children: items.map((tab) => {
            const isActive = tab.key === activeKey;
            return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => onSelect?.(tab.key), style: {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    paddingVertical: 6,
                }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: { position: "relative" }, children: [tab.icon, tab.badge !== undefined && ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                    position: "absolute",
                                    top: -4,
                                    right: -10,
                                    backgroundColor: semanticColors.primary,
                                    borderRadius: 10,
                                    paddingHorizontal: 5,
                                    paddingVertical: 1,
                                }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: baseTokens.colors.white, children: tab.badge }) }))] }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: isActive ? "bold" : "medium", color: isActive ? semanticColors.primary : semanticColors.foregroundMuted, children: tab.label })] }, tab.key));
        }) }));
};
exports.BottomTabs = BottomTabs;
exports.BottomTabs.displayName = "BottomTabs";
// 2. Breadcrumb
exports.Breadcrumb = Breadcrumbs_1.Breadcrumbs;
const NavigationBar = ({ title, subtitle, leftAction, rightAction, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", style: [
            {
                height: 60,
                paddingHorizontal: 16,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.95),
                borderBottomWidth: 1,
                borderBottomColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
            },
            style,
        ], children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { minWidth: 40, justifyContent: "center" }, children: leftAction }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0, align: "center", style: { flex: 1 }, children: [title && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", weight: "bold", color: semanticColors.foreground, children: title })), subtitle && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: subtitle }))] }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { minWidth: 40, alignItems: "flex-end", justifyContent: "center" }, children: rightAction })] }));
};
exports.NavigationBar = NavigationBar;
exports.NavigationBar.displayName = "NavigationBar";
exports.AppBar = exports.NavigationBar;
const NavigationRail = ({ items, activeKey = items[0]?.key, onSelect, header, footer, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [
            {
                width: 72,
                height: "100%",
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.98),
                borderRightWidth: 1,
                borderRightColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
                paddingVertical: 16,
                alignItems: "center",
                justifyContent: "space-between",
            },
            style,
        ], children: [header && (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { marginBottom: 16 }, children: header }), (0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: 3, align: "center", style: { flex: 1 }, children: items.map((item) => {
                    const isActive = item.key === activeKey;
                    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => onSelect?.(item.key), style: {
                            width: 52,
                            height: 52,
                            borderRadius: 14,
                            backgroundColor: isActive ? (0, tokens_1.withAlpha)(baseTokens.colors.brand[500], 0.25) : "transparent",
                            borderWidth: isActive ? 1 : 0,
                            borderColor: isActive ? semanticColors.primary : "transparent",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                        }, children: [item.icon, (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: isActive ? "bold" : "medium", color: isActive ? semanticColors.primary : semanticColors.foregroundMuted, style: { fontSize: 10 }, children: item.label })] }, item.key));
                }) }), footer && (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { marginTop: 16 }, children: footer })] }));
};
exports.NavigationRail = NavigationRail;
exports.NavigationRail.displayName = "NavigationRail";
const Navbar = ({ brand, links = [], searchSlot, actions, style }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", style: [
            {
                height: 64,
                paddingHorizontal: 20,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.95),
                borderBottomWidth: 1,
                borderBottomColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
                gap: 16,
            },
            style,
        ], children: [(0, jsx_runtime_1.jsxs)(primitives_1.HStack, { gap: 6, align: "center", children: [brand, links.length > 0 && ((0, jsx_runtime_1.jsx)(primitives_1.HStack, { gap: 4, align: "center", children: links.map((link, idx) => ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: link.onPress, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: link.active ? "bold" : "medium", color: link.active ? semanticColors.primary : semanticColors.foregroundMuted, children: link.label }) }, idx))) }))] }), (0, jsx_runtime_1.jsxs)(primitives_1.HStack, { gap: 4, align: "center", children: [searchSlot, actions] })] }));
};
exports.Navbar = Navbar;
exports.Navbar.displayName = "Navbar";
const Header = ({ breadcrumbs, title, description, badge, actions, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, style: [{ paddingVertical: 16 }, style], children: [breadcrumbs && (0, jsx_runtime_1.jsx)(Breadcrumbs_1.Breadcrumbs, { items: breadcrumbs }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsxs)(primitives_1.HStack, { gap: 3, align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "2xl", weight: "bold", color: semanticColors.foreground, children: title }), badge] }), actions && (0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, children: actions })] }), description && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundMuted, lineHeight: "sm", children: description }))] }));
};
exports.Header = Header;
exports.Header.displayName = "Header";
const Toolbar = ({ children, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, align: "center", style: [
            {
                padding: 8,
                backgroundColor: semanticColors.surfaceSubtle,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: semanticColors.border,
            },
            style,
        ], children: children }));
};
exports.Toolbar = Toolbar;
exports.Toolbar.displayName = "Toolbar";
const Pagination = ({ page, totalPages, onPageChange, showPageNumbers = true, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const getVisiblePages = () => {
        const pages = [];
        const maxVisible = 5;
        let start = Math.max(1, page - 2);
        let end = Math.min(totalPages, start + maxVisible - 1);
        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { gap: 2, align: "center", justify: "center", style: style, children: [(0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => page > 1 && onPageChange?.(page - 1), disabled: page <= 1, style: {
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 8,
                    backgroundColor: semanticColors.surfaceSubtle,
                    opacity: page <= 1 ? 0.4 : 1,
                }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", children: "\u2190 Prev" }) }), showPageNumbers &&
                getVisiblePages().map((p) => {
                    const isCurrent = p === page;
                    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => onPageChange?.(p), style: {
                            width: 36,
                            height: 36,
                            borderRadius: 8,
                            backgroundColor: isCurrent ? semanticColors.primary : "transparent",
                            borderWidth: isCurrent ? 0 : 1,
                            borderColor: semanticColors.border,
                            alignItems: "center",
                            justifyContent: "center",
                        }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: isCurrent ? "#FFFFFF" : semanticColors.foreground, children: p }) }, p));
                }), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => page < totalPages && onPageChange?.(page + 1), disabled: page >= totalPages, style: {
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 8,
                    backgroundColor: semanticColors.surfaceSubtle,
                    opacity: page >= totalPages ? 0.4 : 1,
                }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", children: "Next \u2192" }) })] }));
};
exports.Pagination = Pagination;
exports.Pagination.displayName = "Pagination";
const Stepper = ({ steps, currentStep, totalSteps = steps?.length ?? 4, onStepPress, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: 3, style: style, children: (0, jsx_runtime_1.jsx)(primitives_1.Inline, { align: "center", justify: "space-between", style: { position: "relative" }, children: Array.from({ length: totalSteps }).map((_, index) => {
                const isCompleted = index < currentStep;
                const isCurrent = index === currentStep;
                return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => onStepPress?.(index), style: {
                                alignItems: "center",
                                gap: 6,
                                zIndex: 2,
                            }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                        width: 32,
                                        height: 32,
                                        borderRadius: 16,
                                        backgroundColor: isCompleted || isCurrent ? semanticColors.primary : semanticColors.surfaceSubtle,
                                        borderWidth: 2,
                                        borderColor: isCurrent ? "#FFFFFF" : isCompleted ? semanticColors.primary : semanticColors.border,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: "#FFFFFF", children: isCompleted ? "✓" : index + 1 }) }), steps?.[index] && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: isCurrent ? "bold" : "medium", color: isCurrent ? semanticColors.primary : semanticColors.foregroundMuted, children: steps[index].title }))] }), index < totalSteps - 1 && ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                flex: 1,
                                height: 2,
                                backgroundColor: index < currentStep ? semanticColors.primary : semanticColors.border,
                                marginHorizontal: 8,
                                marginBottom: steps ? 20 : 0,
                            } }))] }, index));
            }) }) }));
};
exports.Stepper = Stepper;
exports.Stepper.displayName = "Stepper";
