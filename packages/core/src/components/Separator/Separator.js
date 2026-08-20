"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = exports.Separator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
const Separator = ({ orientation = "horizontal", style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const separatorStyle = orientation === "horizontal"
        ? { height: 1, width: "100%", backgroundColor: semanticColors.border }
        : { width: 1, height: "100%", backgroundColor: semanticColors.border };
    return (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [separatorStyle, style], accessibilityRole: "none" });
};
exports.Separator = Separator;
exports.Separator.displayName = "Separator";
exports.Divider = exports.Separator;
