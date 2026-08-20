"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalScroll = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
exports.HorizontalScroll = react_1.default.forwardRef(({ gap, contentPadding, contentContainerStyle, style, children, ...rest }, ref) => {
    const { theme } = (0, theme_1.useTheme)();
    const resolvedGap = gap !== undefined ? (typeof gap === "number" ? gap : theme.spacing[gap]) : undefined;
    const resolvedPadding = contentPadding !== undefined
        ? typeof contentPadding === "number"
            ? contentPadding
            : theme.spacing[contentPadding]
        : undefined;
    return ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { ref: ref, horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: [
            {
                flexDirection: "row",
                alignItems: "center",
                gap: resolvedGap,
                padding: resolvedPadding,
            },
            contentContainerStyle,
        ], style: style, ...rest, children: children }));
});
exports.HorizontalScroll.displayName = "HorizontalScroll";
