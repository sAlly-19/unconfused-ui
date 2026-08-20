"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Select = ({ options, value: propValue, defaultValue = "", onValueChange, placeholder = "Select option...", label, disabled = false, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [value, setValue] = (0, hooks_1.useControllableState)({
        value: propValue,
        defaultValue,
        onChange: onValueChange,
    });
    const selectedOption = options.find((opt) => opt.value === value);
    const handleSelect = (optionValue) => {
        setValue(optionValue);
        setIsOpen(false);
    };
    const triggerStyle = {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(16, 18, 30, 0.8)",
        borderWidth: 1.5,
        borderColor: isOpen ? semanticColors.primary : semanticColors.border,
        borderRadius: 12,
        paddingHorizontal: 14,
        height: 48,
        opacity: disabled ? 0.5 : 1,
        shadowColor: isOpen ? semanticColors.primary : "transparent",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: isOpen ? 3 : 0,
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [{ gap: 6 }, style], children: [label && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 1.2, color: semanticColors.foregroundMuted }, children: label })), (0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => !disabled && setIsOpen(true), disabled: disabled, accessibilityRole: "combobox", accessibilityState: { expanded: isOpen, disabled }, style: triggerStyle, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: selectedOption ? semanticColors.foreground : semanticColors.foregroundSubtle, children: selectedOption ? selectedOption.label : placeholder }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: isOpen ? "▲" : "▼" })] }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: isOpen, transparent: true, animationType: "fade", onRequestClose: () => setIsOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setIsOpen(false), style: {
                        flex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 24,
                    }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                            width: "100%",
                            maxWidth: 360,
                            backgroundColor: semanticColors.surface,
                            borderRadius: 16,
                            borderWidth: 1,
                            borderColor: semanticColors.borderBold,
                            maxHeight: 300,
                            overflow: "hidden",
                            padding: 8,
                        }, children: (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { style: { flex: 1 }, children: (0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 1, children: options.map((opt) => {
                                    const isSelected = opt.value === value;
                                    return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => handleSelect(opt.value), style: {
                                            paddingHorizontal: 14,
                                            paddingVertical: 12,
                                            borderRadius: 10,
                                            backgroundColor: isSelected ? "rgba(124, 58, 237, 0.2)" : "transparent",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: isSelected ? "bold" : "regular", color: isSelected ? semanticColors.primaryForeground : semanticColors.foreground, children: opt.label }), isSelected && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, children: "\u2713" }))] }, opt.value));
                                }) }) }) }) }) })] }));
};
exports.Select = Select;
exports.Select.displayName = "Select";
