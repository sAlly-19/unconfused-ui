"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const theme_1 = require("@unconfused-ui/theme");
const Box_1 = require("./Box");
const Text_1 = require("./Text");
exports.Divider = react_1.default.forwardRef(({ orientation = "horizontal", dividerVariant = "solid", color, thickness = 1, label, labelPosition = "center", style, children, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const dividerColor = color ?? semanticColors.border;
    const resolvedBorderStyle = dividerVariant;
    const labelContent = label ?? children;
    if (orientation === "vertical") {
        return ((0, jsx_runtime_1.jsx)(Box_1.Box, { ref: ref, style: [
                {
                    width: thickness,
                    height: "100%",
                    minHeight: 16,
                    borderLeftWidth: thickness,
                    borderLeftColor: dividerColor,
                    borderStyle: resolvedBorderStyle,
                    alignSelf: "stretch",
                },
                style,
            ], accessibilityRole: "summary", ...rest }));
    }
    if (labelContent) {
        return ((0, jsx_runtime_1.jsxs)(Box_1.Box, { ref: ref, style: [
                {
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 12,
                },
                style,
            ], accessibilityRole: "summary", ...rest, children: [(0, jsx_runtime_1.jsx)(Box_1.Box, { style: {
                        flex: labelPosition === "left" ? 0.15 : 1,
                        height: thickness,
                        borderBottomWidth: thickness,
                        borderBottomColor: dividerColor,
                        borderStyle: resolvedBorderStyle,
                    } }), (0, jsx_runtime_1.jsx)(Box_1.Box, { style: { paddingHorizontal: 12 }, children: typeof labelContent === "string" ? ((0, jsx_runtime_1.jsx)(Text_1.Text, { size: "xs", weight: "bold", color: semanticColors.foregroundMuted, children: labelContent })) : (labelContent) }), (0, jsx_runtime_1.jsx)(Box_1.Box, { style: {
                        flex: labelPosition === "right" ? 0.15 : 1,
                        height: thickness,
                        borderBottomWidth: thickness,
                        borderBottomColor: dividerColor,
                        borderStyle: resolvedBorderStyle,
                    } })] }));
    }
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, { ref: ref, style: [
            {
                width: "100%",
                height: thickness,
                borderBottomWidth: thickness,
                borderBottomColor: dividerColor,
                borderStyle: resolvedBorderStyle,
            },
            style,
        ], accessibilityRole: "summary", ...rest }));
});
exports.Divider.displayName = "Divider";
