"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeArea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
exports.SafeArea = react_1.default.forwardRef(({ bg, style, children, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.SafeAreaView, { ref: ref, style: [
            {
                flex: 1,
                backgroundColor: bg ?? semanticColors.background,
            },
            style,
        ], ...rest, children: children }));
});
exports.SafeArea.displayName = "SafeArea";
