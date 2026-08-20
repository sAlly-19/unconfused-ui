"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@unconfused-ui/icons");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
/**
 * Official Brand Logo for Unconfused UI
 * Concept: "The Untangling Prism" — Transforming chaotic interface complexity into pure, effortless geometric clarity ("U").
 * Signed by Café - Sistemas & Softwares.
 */
const Logo = ({ size = "md", showSignature = true, style }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const getDimensions = () => {
        switch (size) {
            case "xs":
                return { iconBox: 22, iconSize: 13, titleSize: "xs", badge: 8, gap: 1.5 };
            case "sm":
                return { iconBox: 28, iconSize: 16, titleSize: "sm", badge: 9, gap: 2 };
            case "lg":
                return { iconBox: 44, iconSize: 26, titleSize: "xl", badge: 12, gap: 3 };
            case "xl":
                return { iconBox: 56, iconSize: 34, titleSize: "2xl", badge: 14, gap: 3.5 };
            case "md":
            default:
                return { iconBox: 36, iconSize: 21, titleSize: "md", badge: 10, gap: 2.5 };
        }
    };
    const dim = getDimensions();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: dim.gap, style: style, children: [(0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                    width: dim.iconBox,
                    height: dim.iconBox,
                    borderRadius: size === "xs" || size === "sm" ? 7 : 12,
                    backgroundColor: semanticColors.primary,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: semanticColors.primary,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 10,
                    elevation: 6,
                    borderWidth: 1,
                    borderColor: (0, tokens_1.withAlpha)("#FFFFFF", 0.25),
                }, children: (0, jsx_runtime_1.jsx)(icons_1.SvgIcon, { size: dim.iconSize, color: "#FFFFFF", strokeWidth: 2.4, paths: [
                        // The Untangled "U" Clarity Glyph:
                        // Two curved inputs uniting into a crisp vertical aperture U
                        { d: "M5 3v8a7 7 0 0 0 14 0V3" },
                        { d: "M9 3v8a3 3 0 0 0 6 0V3" },
                        { d: "M2 19l4-4 4 4" },
                        { d: "M22 19l-4-4-4 4" },
                    ] }) }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 0, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 1.5, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: dim.titleSize, weight: "bold", color: semanticColors.foreground, style: { letterSpacing: -0.5 }, children: "UNCONFUSED" }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: dim.titleSize, weight: "regular", color: semanticColors.primary, style: { letterSpacing: -0.5 }, children: "UI" }), (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: {
                                    paddingHorizontal: 5,
                                    paddingVertical: 1.5,
                                    borderRadius: 4,
                                    backgroundColor: (0, tokens_1.withAlpha)(semanticColors.primary, 0.15),
                                    borderWidth: 1,
                                    borderColor: (0, tokens_1.withAlpha)(semanticColors.primary, 0.3),
                                }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, style: { fontSize: dim.badge, letterSpacing: 0.5 }, children: "PRO" }) })] }), showSignature && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, style: { fontSize: dim.badge, letterSpacing: 0.5 }, children: "by Caf\u00E9 - Sistemas & Softwares" }))] })] }));
};
exports.Logo = Logo;
exports.Logo.displayName = "Logo";
