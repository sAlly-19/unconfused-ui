"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
const Spacer = ({ size, horizontal = false, flex = 1, style }) => {
    const { theme } = (0, theme_1.useTheme)();
    if (size !== undefined) {
        const dimension = typeof size === "number" ? size : theme.spacing[size];
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
                horizontal
                    ? { width: dimension, height: 1 }
                    : { height: dimension, width: 1 },
                style,
            ] }));
    }
    return (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [{ flex }, style] });
};
exports.Spacer = Spacer;
exports.Spacer.displayName = "Spacer";
