"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeSlider = exports.Picker = exports.Autocomplete = exports.Combobox = exports.MultiSelect = exports.SegmentedControl = exports.ToggleGroup = exports.Toggle = exports.CheckboxGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const Badge_1 = require("../Badge");
const Checkbox_1 = require("../Checkbox");
const CheckboxGroup = ({ options, value: propValue, defaultValue = [], onValueChange, orientation = "vertical", style, }) => {
    const [selected, setSelected] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    const toggleOption = (val) => {
        const next = selected.includes(val) ? selected.filter((v) => v !== val) : [...selected, val];
        setSelected(next);
    };
    const Container = orientation === "horizontal" ? primitives_1.HStack : primitives_1.Stack;
    return ((0, jsx_runtime_1.jsx)(Container, { gap: orientation === "horizontal" ? 4 : 2, style: style, children: options.map((opt) => ((0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { label: opt.label, disabled: opt.disabled, checked: selected.includes(opt.value), onCheckedChange: () => toggleOption(opt.value) }, opt.value))) }));
};
exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxGroup.displayName = "CheckboxGroup";
const Toggle = ({ pressed: propPressed, defaultPressed = false, onPressedChange, disabled = false, size = "md", style, children, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const [pressed, setPressed] = (0, hooks_1.useControllableState)({
        value: propPressed,
        defaultValue: defaultPressed,
        onChange: onPressedChange,
    });
    const height = size === "sm" ? 32 : size === "lg" ? 48 : 40;
    const padding = size === "sm" ? 8 : size === "lg" ? 16 : 12;
    return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => !disabled && setPressed(!pressed), disabled: disabled, accessibilityRole: "button", accessibilityState: { selected: pressed, disabled }, style: [
            {
                height,
                paddingHorizontal: padding,
                borderRadius: 8,
                backgroundColor: pressed ? (0, tokens_1.withAlpha)(semanticColors.primary, 0.2) : (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.05),
                borderWidth: 1,
                borderColor: pressed ? semanticColors.primary : semanticColors.border,
                alignItems: "center",
                justifyContent: "center",
                opacity: disabled ? 0.5 : 1,
            },
            style,
        ], children: typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: size === "sm" ? "xs" : "sm", weight: pressed ? "bold" : "medium", color: pressed ? semanticColors.primary : semanticColors.foreground, children: children })) : (children) }));
};
exports.Toggle = Toggle;
exports.Toggle.displayName = "Toggle";
const ToggleGroup = ({ type = "single", options, value: propValue, defaultValue = type === "single" ? options[0]?.value ?? "" : [], onValueChange, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [val, setVal] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    const handleSelect = (optionValue) => {
        if (type === "single") {
            setVal(optionValue);
        }
        else {
            const arr = Array.isArray(val) ? val : [];
            const next = arr.includes(optionValue) ? arr.filter((v) => v !== optionValue) : [...arr, optionValue];
            setVal(next);
        }
    };
    const isSelected = (optVal) => {
        if (type === "single")
            return val === optVal;
        return Array.isArray(val) && val.includes(optVal);
    };
    return ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 1, style: [
            {
                backgroundColor: semanticColors.surfaceSubtle,
                padding: 3,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: semanticColors.border,
            },
            style,
        ], children: options.map((opt) => {
            const active = isSelected(opt.value);
            return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => handleSelect(opt.value), style: {
                    paddingHorizontal: 12,
                    paddingVertical: 7,
                    borderRadius: 7,
                    backgroundColor: active ? semanticColors.surface : "transparent",
                    borderWidth: active ? 1 : 0,
                    borderColor: active ? semanticColors.borderBold : "transparent",
                    alignItems: "center",
                    justifyContent: "center",
                }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 1.5, children: [opt.icon, (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: active ? "bold" : "medium", color: active ? semanticColors.foreground : semanticColors.foregroundMuted, children: opt.label })] }) }, opt.value));
        }) }));
};
exports.ToggleGroup = ToggleGroup;
exports.ToggleGroup.displayName = "ToggleGroup";
const SegmentedControl = ({ options, value: propValue, defaultValue = options[0]?.value ?? "", onValueChange, size = "md", style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [value, setValue] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    return ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 1, style: [
            {
                backgroundColor: semanticColors.surfaceSubtle,
                padding: 4,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: semanticColors.border,
                width: "100%",
            },
            style,
        ], children: options.map((opt) => {
            const isSelected = opt.value === value;
            return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setValue(opt.value), style: {
                    flex: 1,
                    paddingVertical: size === "sm" ? 6 : 9,
                    borderRadius: 8,
                    backgroundColor: isSelected ? semanticColors.surface : "transparent",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: isSelected ? 1 : 0,
                    borderColor: isSelected ? semanticColors.borderBold : "transparent",
                    shadowColor: isSelected ? "#000" : "transparent",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: isSelected ? 0.2 : 0,
                    shadowRadius: 3,
                }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: isSelected ? "bold" : "medium", color: isSelected ? semanticColors.foreground : semanticColors.foregroundMuted, children: opt.label }) }, opt.value));
        }) }));
};
exports.SegmentedControl = SegmentedControl;
exports.SegmentedControl.displayName = "SegmentedControl";
const MultiSelect = ({ options, value: propValue, defaultValue = [], onValueChange, placeholder = "Select multiple...", label, disabled = false, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [selected, setSelected] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    const toggleOption = (optVal) => {
        const next = selected.includes(optVal)
            ? selected.filter((v) => v !== optVal)
            : [...selected, optVal];
        setSelected(next);
    };
    const selectedLabels = options.filter((o) => selected.includes(o.value));
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [{ gap: 6 }, style], children: [label && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.1, color: semanticColors.foregroundMuted }, children: label })), (0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => !disabled && setIsOpen(true), disabled: disabled, accessibilityRole: "combobox", style: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(16, 18, 30, 0.85)",
                    borderWidth: 1.5,
                    borderColor: isOpen ? semanticColors.primary : semanticColors.border,
                    borderRadius: 12,
                    paddingHorizontal: 12,
                    minHeight: 48,
                    paddingVertical: 6,
                    opacity: disabled ? 0.5 : 1,
                }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 6 }, children: selectedLabels.length > 0 ? (selectedLabels.map((item) => ((0, jsx_runtime_1.jsx)(Badge_1.Badge, { variant: "primary", size: "sm", children: item.label }, item.value)))) : ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundSubtle, children: placeholder })) }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: isOpen ? "▲" : "▼" })] }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: isOpen, transparent: true, animationType: "fade", onRequestClose: () => setIsOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setIsOpen(false), style: {
                        flex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 24,
                    }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            width: "100%",
                            maxWidth: 360,
                            backgroundColor: semanticColors.surface,
                            borderRadius: 16,
                            borderWidth: 1,
                            borderColor: semanticColors.borderBold,
                            maxHeight: 340,
                            padding: 12,
                        }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", style: { marginBottom: 8, paddingHorizontal: 4 }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "sm", weight: "bold", children: ["Select Items (", selected.length, ")"] }), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setIsOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, children: "Done" }) })] }), (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { style: { flex: 1 }, children: (0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 1, children: options.map((opt) => {
                                        const isChecked = selected.includes(opt.value);
                                        return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => toggleOption(opt.value), style: {
                                                paddingHorizontal: 12,
                                                paddingVertical: 10,
                                                borderRadius: 8,
                                                backgroundColor: isChecked ? "rgba(124, 58, 237, 0.15)" : "transparent",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foreground, children: opt.label }), isChecked && (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, children: "\u2713" })] }, opt.value));
                                    }) }) })] }) }) })] }));
};
exports.MultiSelect = MultiSelect;
exports.MultiSelect.displayName = "MultiSelect";
const Combobox = ({ options, value: propValue, defaultValue = "", onValueChange, placeholder = "Search and pick...", label, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [query, setQuery] = (0, react_1.useState)("");
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [value, setValue] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
    const handlePick = (opt) => {
        setValue(opt.value);
        setQuery(opt.label);
        setIsOpen(false);
    };
    const selectedOpt = options.find((o) => o.value === value);
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [{ gap: 6 }, style], children: [label && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.1, color: semanticColors.foregroundMuted }, children: label })), (0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: { position: "relative" }, children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            borderWidth: 1,
                            borderColor: isOpen ? semanticColors.primary : "rgba(255, 255, 255, 0.08)",
                            borderRadius: 8,
                            paddingHorizontal: 12,
                            height: 42,
                            gap: 8,
                        }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", children: "\uD83D\uDD0D" }), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { placeholder: placeholder, placeholderTextColor: semanticColors.foregroundSubtle, value: query.length > 0 ? query : (selectedOpt?.label ?? ""), onChangeText: (t) => {
                                    setQuery(t);
                                    setIsOpen(true);
                                }, onFocus: () => setIsOpen(true), style: {
                                    flex: 1,
                                    color: semanticColors.foreground,
                                    fontSize: 14,
                                    backgroundColor: "transparent",
                                    borderWidth: 0,
                                    paddingVertical: 0,
                                    paddingHorizontal: 0,
                                    // @ts-ignore Web reset
                                    outlineStyle: "none",
                                    // @ts-ignore Web reset
                                    outline: "none",
                                } })] }), isOpen && filtered.length > 0 && ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                            marginTop: 4,
                            backgroundColor: semanticColors.surface,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: semanticColors.borderBold,
                            maxHeight: 180,
                            overflow: "hidden",
                            zIndex: 100,
                        }, children: (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { style: { flex: 1 }, children: filtered.map((item) => ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => handlePick(item), style: {
                                    paddingHorizontal: 14,
                                    paddingVertical: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: semanticColors.border,
                                }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", children: item.label }) }, item.value))) }) }))] })] }));
};
exports.Combobox = Combobox;
exports.Combobox.displayName = "Combobox";
exports.Autocomplete = exports.Combobox;
exports.Picker = exports.SegmentedControl;
const RangeSlider = ({ min = 0, max = 100, value: propValue, defaultValue = [20, 80], onValueChange, label, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [range, setRange] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    const minPercent = Math.max(0, Math.min(100, ((range[0] - min) / (max - min)) * 100));
    const maxPercent = Math.max(0, Math.min(100, ((range[1] - min) / (max - min)) * 100));
    const handleStep = () => {
        // Interactive cycle step for previewing state
        const nextLow = range[0] >= 40 ? 10 : range[0] + 10;
        const nextHigh = range[1] <= 60 ? 90 : range[1] - 10;
        setRange([nextLow, nextHigh]);
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [{ gap: 8 }, style], children: [label && ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.1, color: semanticColors.foregroundMuted }, children: label }), (0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, children: [range[0], " - ", range[1]] })] })), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: handleStep, style: { paddingVertical: 8 }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        height: 8,
                        width: "100%",
                        borderRadius: 4,
                        backgroundColor: semanticColors.surfaceSubtle,
                        position: "relative",
                        overflow: "hidden",
                    }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                            position: "absolute",
                            left: `${minPercent}%`,
                            width: `${maxPercent - minPercent}%`,
                            height: "100%",
                            backgroundColor: semanticColors.primary,
                            borderRadius: 4,
                        } }) }) })] }));
};
exports.RangeSlider = RangeSlider;
exports.RangeSlider.displayName = "RangeSlider";
