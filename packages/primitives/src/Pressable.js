"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pressable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const Slot_1 = require("./Slot");
exports.Pressable = react_1.default.forwardRef(({ asChild, style, children, disabled, onPressIn, onPressOut, onFocus, onBlur, ...rest }, ref) => {
    const { isPressed, isHovered, isFocused, pressableProps } = (0, hooks_1.usePressableState)({
        disabled,
        onPressIn,
        onPressOut,
        onFocus: onFocus ? () => onFocus({}) : null,
        onBlur: onBlur ? () => onBlur({}) : null,
    });
    const state = {
        pressed: isPressed,
        hovered: isHovered,
        focused: isFocused,
    };
    const resolvedStyle = typeof style === "function" ? style(state) : style;
    const resolvedChildren = typeof children === "function" ? children(state) : children;
    const Component = asChild ? Slot_1.Slot : react_native_1.Pressable;
    const styleProp = asChild
        ? [resolvedStyle, isPressed && { opacity: 0.8 }]
        : ({ pressed }) => [resolvedStyle, pressed && { opacity: 0.8 }];
    return ((0, jsx_runtime_1.jsx)(Component, { ref: ref, disabled: disabled, accessibilityRole: "button", accessibilityState: { disabled }, ...pressableProps, ...rest, style: styleProp, children: resolvedChildren }));
});
exports.Pressable.displayName = "Pressable";
