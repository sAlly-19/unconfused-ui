"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitView = SplitView;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const hooks_1 = require("@unconfused-ui/hooks");
const theme_1 = require("@unconfused-ui/theme");
const Box_1 = require("./Box");
const Pressable_1 = require("./Pressable");
const Text_1 = require("./Text");
/**
 * Universal Responsive SplitView (Master-Detail layout primitive):
 * Displays side-by-side master/detail panels on desktop/tablet (md, lg, xl)
 * and an accessible stacked navigation view on mobile (base, sm).
 */
function SplitView({ master, detail, masterWidth = 320, showDetailOnMobile = false, onBackToMaster, style, }) {
    const breakpoint = (0, hooks_1.useBreakpoint)();
    const { semanticColors } = (0, theme_1.useTheme)();
    const isWide = breakpoint === "md" || breakpoint === "lg" || breakpoint === "xl";
    if (isWide) {
        return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
                {
                    flex: 1,
                    flexDirection: "row",
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: semanticColors.border,
                    overflow: "hidden",
                    backgroundColor: semanticColors.surface,
                },
                style,
            ], children: [(0, jsx_runtime_1.jsx)(Box_1.Box, { style: {
                        width: typeof masterWidth === "number" ? masterWidth : undefined,
                        flex: typeof masterWidth === "string" ? 1 : undefined,
                        borderRightWidth: 1,
                        borderRightColor: semanticColors.border,
                        backgroundColor: semanticColors.surfaceSubtle,
                    }, children: master }), (0, jsx_runtime_1.jsx)(Box_1.Box, { style: { flex: 2, backgroundColor: semanticColors.surface }, children: detail })] }));
    }
    // Mobile mode (stacked)
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [{ flex: 1, backgroundColor: semanticColors.surface }, style], children: showDetailOnMobile ? ((0, jsx_runtime_1.jsxs)(Box_1.Box, { style: { flex: 1 }, children: [onBackToMaster && ((0, jsx_runtime_1.jsx)(Pressable_1.Pressable, { onPress: onBackToMaster, style: {
                        paddingVertical: 10,
                        paddingHorizontal: 16,
                        borderBottomWidth: 1,
                        borderBottomColor: semanticColors.border,
                        backgroundColor: semanticColors.surfaceSubtle,
                    }, children: (0, jsx_runtime_1.jsx)(Text_1.Text, { size: "sm", weight: "bold", color: semanticColors.primary, children: "\u2190 Voltar" }) })), detail] })) : ((0, jsx_runtime_1.jsx)(Box_1.Box, { style: { flex: 1 }, children: master })) }));
}
SplitView.displayName = "SplitView";
