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
exports.Textarea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
exports.Textarea = react_1.default.forwardRef(({ label, error, helperText, showCount = false, minHeight = 100, rows, maxLength, value, defaultValue, onChangeText, containerStyle, style, onFocus, onBlur, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const [internalValue, setInternalValue] = (0, react_1.useState)(defaultValue ?? "");
    const resolvedMinHeight = rows ? Math.max(90, rows * 22) : minHeight;
    const currentValue = value !== undefined ? value : internalValue;
    const currentLength = currentValue.length;
    const handleChangeText = (text) => {
        if (value === undefined) {
            setInternalValue(text);
        }
        onChangeText?.(text);
    };
    const textareaContainerStyle = {
        backgroundColor: semanticColors.surfaceSubtle,
        borderWidth: 1,
        borderColor: error
            ? semanticColors.danger
            : isFocused
                ? semanticColors.primary
                : semanticColors.borderSubtle,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        minHeight: resolvedMinHeight,
        shadowColor: isFocused ? semanticColors.primary : "transparent",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: isFocused ? 0.25 : 0,
        shadowRadius: 6,
        elevation: isFocused ? 2 : 0,
    };
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [{ gap: 6 }, containerStyle], children: [label && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", style: { textTransform: "uppercase", letterSpacing: 0.8, fontSize: 11, color: semanticColors.foregroundMuted }, children: label })), (0, jsx_runtime_1.jsx)(react_native_1.View, { style: textareaContainerStyle, children: (0, jsx_runtime_1.jsx)(react_native_1.TextInput, { ref: ref, multiline: true, textAlignVertical: "top", maxLength: maxLength, value: value, defaultValue: defaultValue, onChangeText: handleChangeText, placeholderTextColor: semanticColors.foregroundSubtle, onFocus: (e) => {
                        setIsFocused(true);
                        onFocus?.(e);
                    }, onBlur: (e) => {
                        setIsFocused(false);
                        onBlur?.(e);
                    }, style: [
                        {
                            flex: 1,
                            color: semanticColors.foreground,
                            fontSize: 14,
                            lineHeight: 20,
                            paddingVertical: 0,
                            paddingHorizontal: 0,
                            backgroundColor: "transparent",
                            borderWidth: 0,
                            // @ts-ignore Web reset
                            outlineStyle: "none",
                            // @ts-ignore Web reset
                            outline: "none",
                        },
                        style,
                    ], ...rest }) }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "space-between", align: "center", children: [error ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.danger, weight: "medium", children: error })) : helperText ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: helperText })) : ((0, jsx_runtime_1.jsx)(primitives_1.Box, {})), showCount && maxLength !== undefined && ((0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: [currentLength, " / ", maxLength] }))] })] }));
});
exports.Textarea.displayName = "Textarea";
