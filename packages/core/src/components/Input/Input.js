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
exports.TextInput = exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
exports.Input = react_1.default.forwardRef(({ size = "md", variant = "default", label, helperText, error, success, required = false, disabled = false, clearable = false, onClear, leftIcon, rightIcon, prefix, suffix, loading = false, value, onChangeText, containerStyle, inputStyle, style, onFocus, onBlur, ...rest }, ref) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const getHeight = () => {
        switch (size) {
            case "sm":
                return 38;
            case "lg":
                return 54;
            case "md":
            default:
                return 46;
        }
    };
    const getFontSize = () => {
        switch (size) {
            case "sm":
                return 13;
            case "lg":
                return 16;
            case "md":
            default:
                return 14;
        }
    };
    const getBgColor = () => {
        if (disabled)
            return (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.02);
        switch (variant) {
            case "glass":
                return (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.03);
            case "filled":
                return (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.05);
            case "bordered":
                return "transparent";
            case "default":
            default:
                return (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.03);
        }
    };
    const getBorderColor = () => {
        if (disabled)
            return (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.04);
        if (error)
            return semanticColors.danger;
        if (success)
            return baseTokens.colors.success[500];
        if (isFocused)
            return semanticColors.primary;
        return (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.08);
    };
    const hasValue = value !== undefined && value.length > 0;
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [{ gap: 6, opacity: disabled ? 0.6 : 1 }, containerStyle], children: [label && ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 1, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: error ? semanticColors.danger : semanticColors.foregroundMuted, style: { textTransform: "uppercase", letterSpacing: 0.8, fontSize: 11 }, children: label }), required && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.danger, children: "*" }))] })), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
                    {
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: getBgColor(),
                        borderWidth: 1,
                        borderColor: getBorderColor(),
                        borderRadius: size === "sm" ? 6 : size === "lg" ? 10 : 8,
                        paddingHorizontal: size === "sm" ? 10 : 12,
                        height: getHeight(),
                        gap: 8,
                        shadowColor: isFocused ? semanticColors.primary : "transparent",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: isFocused ? 0.25 : 0,
                        shadowRadius: 6,
                        elevation: isFocused ? 2 : 0,
                    },
                    style,
                ], children: [leftIcon, prefix && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.foregroundMuted, children: prefix })), (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { ref: ref, value: value, onChangeText: onChangeText, editable: !disabled, placeholderTextColor: semanticColors.foregroundSubtle, onFocus: (e) => {
                            setIsFocused(true);
                            onFocus?.(e);
                        }, onBlur: (e) => {
                            setIsFocused(false);
                            onBlur?.(e);
                        }, style: [
                            {
                                flex: 1,
                                color: semanticColors.foreground,
                                fontSize: getFontSize(),
                                height: "100%",
                                paddingVertical: 0,
                                paddingHorizontal: 0,
                                backgroundColor: "transparent",
                                borderWidth: 0,
                                // @ts-ignore Web reset
                                outlineStyle: "none",
                                // @ts-ignore Web reset
                                outline: "none",
                            },
                            inputStyle,
                        ], ...rest }), loading && (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: "small", color: semanticColors.primary }), clearable && hasValue && !disabled && ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => {
                            onChangeText?.("");
                            onClear?.();
                        }, accessibilityLabel: "Clear Input", children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: "\u2715" }) })), suffix && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.foregroundMuted, children: suffix })), rightIcon] }), error ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.danger, weight: "medium", children: error })) : helperText ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: helperText })) : null] }));
});
exports.Input.displayName = "Input";
exports.TextInput = exports.Input;
