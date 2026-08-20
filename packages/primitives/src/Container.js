"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const theme_1 = require("@unconfused-ui/theme");
const Box_1 = require("./Box");
const CONTAINER_MAX_WIDTHS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
    fluid: "100%",
    full: "100%",
};
exports.Container = react_1.default.forwardRef(({ size = "xl", maxWidth, center = true, gutters = true, style, children, ...rest }, ref) => {
    const { theme } = (0, theme_1.useTheme)();
    const resolvedMaxWidth = maxWidth ?? CONTAINER_MAX_WIDTHS[size];
    const containerStyle = {
        width: "100%",
        maxWidth: resolvedMaxWidth,
        alignSelf: center ? "center" : "auto",
        paddingHorizontal: gutters ? theme.spacing[4] : 0,
    };
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, { ref: ref, style: [containerStyle, style], ...rest, children: children }));
});
exports.Container.displayName = "Container";
