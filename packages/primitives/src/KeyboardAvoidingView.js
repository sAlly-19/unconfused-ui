"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardAvoidingView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
exports.KeyboardAvoidingView = react_1.default.forwardRef(({ behavior, keyboardVerticalOffset = 0, style, children, ...rest }, ref) => {
    const defaultBehavior = react_native_1.Platform.OS === "ios" ? "padding" : undefined;
    return ((0, jsx_runtime_1.jsx)(react_native_1.KeyboardAvoidingView, { ref: ref, behavior: behavior ?? defaultBehavior, keyboardVerticalOffset: keyboardVerticalOffset, style: [{ flex: 1 }, style], ...rest, children: children }));
});
exports.KeyboardAvoidingView.displayName = "KeyboardAvoidingView";
