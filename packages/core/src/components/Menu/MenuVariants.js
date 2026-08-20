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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandMenu = exports.CommandPalette = exports.Dropdown = exports.Menu = exports.MenuSeparator = exports.MenuGroup = exports.MenuItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const MenuItem = ({ label, icon, shortcut, onPress, destructive = false, disabled = false, style, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: onPress, disabled: disabled || !onPress, accessibilityRole: "menuitem", accessibilityState: { disabled }, style: [
            {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 8,
                backgroundColor: "transparent",
                opacity: disabled ? 0.4 : 1,
            },
            style,
        ], children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 3, children: [icon, (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "medium", color: destructive ? semanticColors.danger : semanticColors.foreground, children: label })] }), shortcut && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, weight: "bold", children: shortcut }))] }));
};
exports.MenuItem = MenuItem;
exports.MenuItem.displayName = "MenuItem";
// 2. MenuGroup
const MenuGroup = ({ title, children }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 1, children: [title && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.1, paddingHorizontal: 12, paddingVertical: 4 }, color: semanticColors.foregroundMuted, children: title })), children] }));
};
exports.MenuGroup = MenuGroup;
exports.MenuGroup.displayName = "MenuGroup";
// 3. MenuSeparator
const MenuSeparator = () => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { height: 1, backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.08), marginVertical: 4 } });
};
exports.MenuSeparator = MenuSeparator;
exports.MenuSeparator.displayName = "MenuSeparator";
// 4. Menu
exports.Menu = Object.assign(({ children, style }) => {
    const { baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 1, style: [
            {
                padding: 6,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.95),
                borderRadius: 14,
                borderWidth: 1,
                borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
            },
            style,
        ], children: children }));
}, {
    Item: exports.MenuItem,
    Group: exports.MenuGroup,
    Separator: exports.MenuSeparator,
});
const Dropdown = ({ trigger, children }) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: { position: "relative" }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setOpen(!open), children: trigger }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "fade", onRequestClose: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: { flex: 1, backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.35), justifyContent: "center", alignItems: "center" }, onPress: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.FocusTrap, { active: open, onRequestClose: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: (e) => e.stopPropagation?.(), style: { width: 240 }, children: (0, jsx_runtime_1.jsx)(exports.Menu, { children: children }) }) }) }) })] }));
};
exports.Dropdown = Dropdown;
exports.Dropdown.displayName = "Dropdown";
/**
 * Fuzzy score calculator for spotlight command search.
 * Returns score > 0 if match found, higher is more relevant.
 */
function fuzzyScore(query, text) {
    if (!query)
        return 1;
    const q = query.toLowerCase();
    const t = text.toLowerCase();
    // Exact match
    if (t === q)
        return 100;
    // Prefix match
    if (t.startsWith(q))
        return 80;
    // Substring match
    if (t.includes(q))
        return 50;
    // Fuzzy sequential character match
    let score = 0;
    let qIdx = 0;
    for (let tIdx = 0; tIdx < t.length && qIdx < q.length; tIdx++) {
        if (t[tIdx] === q[qIdx]) {
            score += 10;
            if (tIdx === 0 || t[tIdx - 1] === " " || t[tIdx - 1] === "/" || t[tIdx - 1] === "-") {
                score += 15; // Bonus for start of words
            }
            qIdx++;
        }
    }
    return qIdx === q.length ? score : 0;
}
const CommandPalette = ({ open = false, onOpenChange, items, placeholder = "Type a command or search...", }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const [query, setQuery] = (0, react_1.useState)("");
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(0);
    const scoredItems = react_1.default.useMemo(() => {
        if (!query.trim())
            return items;
        return items
            .map((item) => {
            const labelScore = fuzzyScore(query, item.label);
            const categoryScore = item.category ? fuzzyScore(query, item.category) * 0.6 : 0;
            const totalScore = Math.max(labelScore, categoryScore);
            return { item, score: totalScore };
        })
            .filter((entry) => entry.score > 0)
            .sort((a, b) => b.score - a.score)
            .map((entry) => entry.item);
    }, [items, query]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "fade", onRequestClose: () => onOpenChange?.(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => onOpenChange?.(false), style: {
                flex: 1,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.75),
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: 80,
                paddingHorizontal: 20,
            }, children: (0, jsx_runtime_1.jsx)(primitives_1.FocusTrap, { active: open, onRequestClose: () => onOpenChange?.(false), children: (0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: (e) => e.stopPropagation?.(), style: {
                        width: "100%",
                        maxWidth: 540,
                        backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.98),
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.15),
                        overflow: "hidden",
                        shadowColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.8),
                        shadowOffset: { width: 0, height: 12 },
                        shadowOpacity: 0.5,
                        shadowRadius: 24,
                        elevation: 16,
                    }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 3, style: {
                                paddingHorizontal: 16,
                                paddingVertical: 14,
                                borderBottomWidth: 1,
                                borderBottomColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.1),
                            }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", children: "\uD83D\uDD0D" }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { placeholder: placeholder, placeholderTextColor: semanticColors.foregroundSubtle, value: query, onChangeText: (text) => {
                                        setQuery(text);
                                        setSelectedIndex(0);
                                    }, autoFocus: true, style: {
                                        flex: 1,
                                        fontSize: 15,
                                        color: semanticColors.foreground,
                                        backgroundColor: "transparent",
                                        borderWidth: 0,
                                        paddingVertical: 0,
                                        paddingHorizontal: 0,
                                        // @ts-ignore Web reset
                                        outlineStyle: "none",
                                        // @ts-ignore Web reset
                                        outline: "none",
                                    } }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, weight: "bold", children: "ESC" })] }), (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { style: { maxHeight: 320, padding: 8 }, children: (0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: 1, children: scoredItems.length > 0 ? (scoredItems.map((item, idx) => {
                                    const isSelected = idx === selectedIndex;
                                    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => {
                                            onOpenChange?.(false);
                                            item.onSelect?.();
                                        }, style: {
                                            paddingHorizontal: 12,
                                            paddingVertical: 10,
                                            borderRadius: 8,
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            backgroundColor: isSelected ? (0, tokens_1.withAlpha)(baseTokens.colors.brand[500], 0.15) : "transparent",
                                        }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 3, children: [item.icon, (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: isSelected ? "bold" : "medium", color: isSelected ? semanticColors.primary : semanticColors.foreground, children: item.label }), item.category && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: item.category }))] })] }), item.shortcut && ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                                    paddingHorizontal: 6,
                                                    paddingVertical: 2,
                                                    borderRadius: 4,
                                                    backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.08),
                                                }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, weight: "bold", children: item.shortcut }) }))] }, item.id));
                                })) : ((0, jsx_runtime_1.jsx)(primitives_1.Box, { p: 6, style: { alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundMuted, children: "No matching commands found." }) })) }) })] }) }) }) }));
};
exports.CommandPalette = CommandPalette;
exports.CommandPalette.displayName = "CommandPalette";
exports.CommandMenu = exports.CommandPalette;
