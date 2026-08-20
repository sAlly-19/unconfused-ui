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
exports.MaskedInput = exports.CurrencyInput = exports.CodeInput = exports.PinInput = exports.OTPInput = exports.PhoneInput = exports.EmailInput = exports.NumberInput = exports.PasswordInput = exports.SearchInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Input_1 = require("./Input");
__exportStar(require("../Textarea"), exports);
const SearchInput = ({ placeholder = "Search anything...", clearable = true, leftIcon = (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", children: "\uD83D\uDD0D" }), ...rest }) => ((0, jsx_runtime_1.jsx)(Input_1.Input, { placeholder: placeholder, clearable: clearable, leftIcon: leftIcon, returnKeyType: "search", ...rest }));
exports.SearchInput = SearchInput;
exports.SearchInput.displayName = "SearchInput";
const PasswordInput = ({ placeholder = "Enter secure password", showStrengthMeter = false, value = "", onChangeText, ...rest }) => {
    const [secure, setSecure] = (0, react_1.useState)(true);
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const getStrength = () => {
        if (value.length === 0)
            return 0;
        if (value.length < 6)
            return 1;
        if (value.length < 10)
            return 2;
        return 3;
    };
    const strength = getStrength();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { secureTextEntry: secure, placeholder: placeholder, value: value, onChangeText: onChangeText, leftIcon: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", children: "\uD83D\uDD12" }), rightIcon: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setSecure(!secure), accessibilityLabel: "Toggle Password Visibility", children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, weight: "bold", children: secure ? "SHOW" : "HIDE" }) }), ...rest }), showStrengthMeter && value.length > 0 && ((0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, children: [(0, jsx_runtime_1.jsxs)(primitives_1.HStack, { gap: 1, style: { width: "100%", height: 3 }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { flex: 1, rounded: "sm", bg: strength >= 1 ? semanticColors.danger : "rgba(255,255,255,0.1)" }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { flex: 1, rounded: "sm", bg: strength >= 2 ? baseTokens.colors.warning[500] : "rgba(255,255,255,0.1)" }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { flex: 1, rounded: "sm", bg: strength >= 3 ? baseTokens.colors.success[500] : "rgba(255,255,255,0.1)" })] }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: strength === 1 ? "Weak password" : strength === 2 ? "Moderate security" : "Strong protection" })] }))] }));
};
exports.PasswordInput = PasswordInput;
exports.PasswordInput.displayName = "PasswordInput";
const NumberInput = ({ value = 0, onChangeValue, min = 0, max = 100, step = 1, ...rest }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const handleDecrement = () => {
        const next = Math.max(min, value - step);
        onChangeValue?.(next);
    };
    const handleIncrement = () => {
        const next = Math.min(max, value + step);
        onChangeValue?.(next);
    };
    return ((0, jsx_runtime_1.jsx)(Input_1.Input, { keyboardType: "numeric", value: String(value), leftIcon: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: handleDecrement, disabled: value <= min, style: { paddingHorizontal: 6 }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", weight: "bold", color: value <= min ? semanticColors.foregroundSubtle : semanticColors.primary, children: "\u2212" }) }), rightIcon: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: handleIncrement, disabled: value >= max, style: { paddingHorizontal: 6 }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", weight: "bold", color: value >= max ? semanticColors.foregroundSubtle : semanticColors.primary, children: "\uFF0B" }) }), inputStyle: { textAlign: "center", fontWeight: "bold" }, ...rest }));
};
exports.NumberInput = NumberInput;
exports.NumberInput.displayName = "NumberInput";
const EmailInput = ({ placeholder = "name@company.com", leftIcon = (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", children: "\u2709\uFE0F" }), ...props }) => ((0, jsx_runtime_1.jsx)(Input_1.Input, { keyboardType: "email-address", autoCapitalize: "none", autoCorrect: false, placeholder: placeholder, leftIcon: leftIcon, ...props }));
exports.EmailInput = EmailInput;
exports.EmailInput.displayName = "EmailInput";
const PhoneInput = ({ countryPrefix = "+1", placeholder = "(555) 000-0000", leftIcon, ...props }) => ((0, jsx_runtime_1.jsx)(Input_1.Input, { keyboardType: "phone-pad", placeholder: placeholder, prefix: countryPrefix, leftIcon: leftIcon ?? (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", children: "\uD83D\uDCDE" }), ...props }));
exports.PhoneInput = PhoneInput;
exports.PhoneInput.displayName = "PhoneInput";
const OTPInput = ({ length = 6, value = "", mask = false, onChangeText, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const digits = value.padEnd(length, "").split("").slice(0, length);
    return ((0, jsx_runtime_1.jsx)(primitives_1.Inline, { gap: 2, align: "center", style: style, children: Array.from({ length }).map((_, index) => {
            const rawChar = digits[index] || "";
            const isFilled = rawChar.length > 0;
            const isCurrent = index === Math.min(value.length, length - 1);
            const displayChar = mask && isFilled ? "●" : rawChar;
            return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    width: 44,
                    height: 52,
                    borderRadius: 10,
                    borderWidth: isCurrent && !isFilled ? 2 : 1.5,
                    borderColor: isFilled
                        ? semanticColors.primary
                        : isCurrent
                            ? semanticColors.primary
                            : semanticColors.border,
                    backgroundColor: "rgba(16, 18, 30, 0.85)",
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: isCurrent ? semanticColors.primary : "transparent",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: isCurrent ? 0.4 : 0,
                    shadowRadius: 6,
                }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: isFilled ? semanticColors.foreground : semanticColors.foregroundSubtle, children: displayChar }) }, index));
        }) }));
};
exports.OTPInput = OTPInput;
exports.OTPInput.displayName = "OTPInput";
const PinInput = ({ length = 4, ...props }) => ((0, jsx_runtime_1.jsx)(exports.OTPInput, { length: length, mask: true, ...props }));
exports.PinInput = PinInput;
exports.PinInput.displayName = "PinInput";
const CodeInput = ({ length = 6, ...props }) => ((0, jsx_runtime_1.jsx)(exports.OTPInput, { length: length, ...props }));
exports.CodeInput = CodeInput;
exports.CodeInput.displayName = "CodeInput";
const CurrencyInput = ({ currencySymbol = "$", placeholder = "0.00", ...props }) => ((0, jsx_runtime_1.jsx)(Input_1.Input, { keyboardType: "decimal-pad", prefix: currencySymbol, placeholder: placeholder, inputStyle: { fontWeight: "bold" }, ...props }));
exports.CurrencyInput = CurrencyInput;
exports.CurrencyInput.displayName = "CurrencyInput";
const MaskedInput = ({ mask, placeholder, ...props }) => ((0, jsx_runtime_1.jsx)(Input_1.Input, { placeholder: placeholder ?? mask, ...props }));
exports.MaskedInput = MaskedInput;
exports.MaskedInput.displayName = "MaskedInput";
