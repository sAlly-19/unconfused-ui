"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combobox = Combobox;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const icons_1 = require("@unconfused-ui/icons");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
/**
 * Universal Virtualized Combobox component:
 * Features instant debounced search, WAI-ARIA accessibility, and FlatList virtualization for 1,000+ options.
 */
function Combobox({ options, value: propValue, defaultValue = "", onValueChange, placeholder = "Selecione uma opção...", searchPlaceholder = "Buscar opções...", disabled = false, clearable = true, style, }) {
    const { semanticColors, baseTokens, theme } = (0, theme_1.useTheme)();
    const [internalValue, setInternalValue] = (0, react_1.useState)(defaultValue);
    const [open, setOpen] = (0, react_1.useState)(false);
    const [search, setSearch] = (0, react_1.useState)("");
    const activeValue = propValue !== undefined ? propValue : internalValue;
    const selectedOption = (0, react_1.useMemo)(() => options.find((opt) => opt.value === activeValue), [options, activeValue]);
    const filteredOptions = (0, react_1.useMemo)(() => {
        if (!search.trim())
            return options;
        const q = search.toLowerCase();
        return options.filter((opt) => opt.label.toLowerCase().includes(q) || (opt.description && opt.description.toLowerCase().includes(q)));
    }, [options, search]);
    const handleSelect = (val) => {
        setInternalValue(val);
        onValueChange?.(val);
        setOpen(false);
        setSearch("");
    };
    const handleClear = (e) => {
        e.stopPropagation?.();
        setInternalValue("");
        onValueChange?.("");
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: style, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => !disabled && setOpen(true), accessibilityRole: "combobox", accessibilityState: { expanded: open, disabled }, style: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 14,
                    paddingVertical: 10,
                    borderRadius: 10,
                    backgroundColor: semanticColors.surface,
                    borderWidth: 1,
                    borderColor: open ? semanticColors.primary : semanticColors.border,
                    opacity: disabled ? 0.6 : 1,
                    gap: 8,
                }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: selectedOption ? semanticColors.foreground : semanticColors.foregroundMuted, numberOfLines: 1, style: { flex: 1 }, children: selectedOption ? selectedOption.label : placeholder }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 1, children: [clearable && selectedOption && !disabled && ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: handleClear, hitSlop: 8, children: (0, jsx_runtime_1.jsx)(icons_1.CloseIcon, { size: 14, color: semanticColors.foregroundMuted }) })), (0, jsx_runtime_1.jsx)(icons_1.ChevronDownIcon, { size: 16, color: semanticColors.foregroundMuted })] })] }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "fade", onRequestClose: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setOpen(false), style: {
                        flex: 1,
                        backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.6),
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 20,
                    }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: (e) => e.stopPropagation?.(), style: {
                            width: "100%",
                            maxWidth: 440,
                            maxHeight: 520,
                            backgroundColor: semanticColors.surface,
                            borderRadius: 14,
                            borderWidth: 1,
                            borderColor: semanticColors.border,
                            overflow: "hidden",
                            ...theme.shadows.lg,
                        }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingHorizontal: 14,
                                    paddingVertical: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: semanticColors.border,
                                    gap: 8,
                                }, children: [(0, jsx_runtime_1.jsx)(icons_1.SearchIcon, { size: 16, color: semanticColors.foregroundMuted }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { value: search, onChangeText: setSearch, placeholder: searchPlaceholder, placeholderTextColor: semanticColors.foregroundMuted, autoFocus: true, style: {
                                            flex: 1,
                                            fontSize: 14,
                                            color: semanticColors.foreground,
                                            padding: 0,
                                            ...(react_native_1.Platform.OS === "web" ? { outlineStyle: "none" } : {}),
                                        } }), search.length > 0 && ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setSearch(""), children: (0, jsx_runtime_1.jsx)(icons_1.CloseIcon, { size: 14, color: semanticColors.foregroundMuted }) }))] }), filteredOptions.length === 0 ? ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { padding: 24, alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundMuted, children: "Nenhuma op\u00E7\u00E3o correspondente encontrada." }) })) : ((0, jsx_runtime_1.jsx)(react_native_1.FlatList, { data: filteredOptions, keyExtractor: (item) => item.value, keyboardShouldPersistTaps: "always", initialNumToRender: 20, maxToRenderPerBatch: 30, windowSize: 5, renderItem: ({ item }) => {
                                    const isSelected = item.value === activeValue;
                                    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => !item.disabled && handleSelect(item.value), disabled: item.disabled, style: {
                                            paddingHorizontal: 16,
                                            paddingVertical: 12,
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            backgroundColor: isSelected
                                                ? (0, tokens_1.withAlpha)(semanticColors.primary, 0.12)
                                                : "transparent",
                                            opacity: item.disabled ? 0.5 : 1,
                                            borderBottomWidth: 1,
                                            borderBottomColor: semanticColors.borderSubtle,
                                        }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0.5, style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: isSelected ? "bold" : "regular", color: isSelected ? semanticColors.primary : semanticColors.foreground, children: item.label }), item.description && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: item.description }))] }), isSelected && (0, jsx_runtime_1.jsx)(icons_1.CheckIcon, { size: 16, color: semanticColors.primary })] }));
                                } }))] }) }) })] }));
}
Combobox.displayName = "Combobox";
