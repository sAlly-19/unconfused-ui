"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inline = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
exports.Inline = react_1.default.forwardRef(({ gap = 2, align = "center", justify = "flex-start", wrap = false, style, children, ...rest }, ref) => {
    const { theme } = (0, theme_1.useTheme)();
    const resolveGap = typeof gap === "number" ? gap : theme.spacing[gap];
    const inlineStyle = {
        flexDirection: "row",
        gap: resolveGap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : "nowrap",
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { ref: ref, style: [inlineStyle, style], ...rest, children: children }));
});
exports.Inline.displayName = "Inline";
