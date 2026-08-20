"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Tooltip = ({ content, style, children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [visible, setVisible] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { position: "relative" }, children: [visible && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
                    {
                        position: "absolute",
                        bottom: "100%",
                        marginBottom: 8,
                        alignSelf: "center",
                        backgroundColor: "rgba(12, 14, 24, 0.95)",
                        borderWidth: 1,
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 6,
                        zIndex: 1500,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 8,
                        elevation: 6,
                    },
                    style,
                ], children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "medium", color: semanticColors.foreground, children: content }) })), (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPressIn: () => setVisible(true), onPressOut: () => setVisible(false), onHoverIn: () => setVisible(true), onHoverOut: () => setVisible(false), children: children })] }));
};
exports.Tooltip = Tooltip;
exports.Tooltip.displayName = "Tooltip";
