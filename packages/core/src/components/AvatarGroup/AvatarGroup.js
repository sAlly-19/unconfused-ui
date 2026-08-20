"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const AvatarGroup = ({ max = 3, size = "md", style, children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const childrenArray = react_1.default.Children.toArray(children);
    const visibleChildren = childrenArray.slice(0, max);
    const excessCount = childrenArray.length - max;
    const dimension = size === "sm" ? 34 : size === "lg" ? 56 : 44;
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", style: style, children: [visibleChildren.map((child, index) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { marginLeft: index === 0 ? 0 : -12, zIndex: childrenArray.length - index }, children: child }, index))), excessCount > 0 && ((0, jsx_runtime_1.jsx)(primitives_1.Center, { style: {
                    width: dimension,
                    height: dimension,
                    borderRadius: dimension / 2,
                    backgroundColor: semanticColors.surfaceSubtle,
                    borderWidth: 2,
                    borderColor: semanticColors.background,
                    marginLeft: -12,
                    zIndex: 0,
                }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, children: ["+", excessCount] }) }))] }));
};
exports.AvatarGroup = AvatarGroup;
exports.AvatarGroup.displayName = "AvatarGroup";
