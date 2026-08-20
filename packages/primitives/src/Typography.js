"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradientText = exports.TruncatedText = exports.Blockquote = exports.Code = exports.Link = exports.Paragraph = exports.Caption = exports.Label = exports.Subtitle = exports.Title = exports.Heading = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@unconfused-ui/theme");
const Box_1 = require("./Box");
const Inline_1 = require("./Inline");
const Pressable_1 = require("./Pressable");
const Text_1 = require("./Text");
exports.Heading = react_1.default.forwardRef(({ level = 1, accentBar = false, gradient = false, style, children, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const getLevelConfig = () => {
        switch (level) {
            case 1:
                return { size: "4xl", weight: "bold", tracking: "tight" };
            case 2:
                return { size: "3xl", weight: "bold", tracking: "tight" };
            case 3:
                return { size: "2xl", weight: "bold", tracking: "normal" };
            case 4:
                return { size: "xl", weight: "bold", tracking: "normal" };
            case 5:
                return { size: "lg", weight: "semibold", tracking: "normal" };
            case 6:
            default:
                return { size: "md", weight: "semibold", tracking: "normal" };
        }
    };
    const config = getLevelConfig();
    const headingElement = ((0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: config.size, weight: config.weight, tracking: config.tracking, color: gradient ? semanticColors.primary : semanticColors.foreground, style: style, accessibilityRole: "header", ...rest, children: children }));
    if (accentBar) {
        return ((0, jsx_runtime_1.jsxs)(Inline_1.Inline, { align: "center", gap: 3, children: [(0, jsx_runtime_1.jsx)(Box_1.Box, { style: {
                        width: 4,
                        height: "80%",
                        minHeight: 20,
                        backgroundColor: semanticColors.primary,
                        borderRadius: 2,
                    } }), headingElement] }));
    }
    return headingElement;
});
exports.Heading.displayName = "Heading";
exports.Title = react_1.default.forwardRef(({ variant = "section", style, children, ...rest }, ref) => {
    const size = variant === "hero" ? "3xl" : variant === "section" ? "xl" : "lg";
    return ((0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: size, weight: "bold", tracking: variant === "hero" ? "tight" : "normal", style: style, ...rest, children: children }));
});
exports.Title.displayName = "Title";
exports.Subtitle = react_1.default.forwardRef(({ variant = "muted", style, children, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const color = variant === "subtle"
        ? semanticColors.foregroundSubtle
        : variant === "accent"
            ? semanticColors.primary
            : semanticColors.foregroundMuted;
    return ((0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: "md", weight: "medium", color: color, style: style, ...rest, children: children }));
});
exports.Subtitle.displayName = "Subtitle";
exports.Label = react_1.default.forwardRef(({ required = false, optional = false, uppercase = false, style, children, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Inline_1.Inline, { align: "center", gap: 1, children: [(0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: "xs", weight: "bold", color: semanticColors.foregroundMuted, style: [
                    uppercase && { textTransform: "uppercase", letterSpacing: 1.2 },
                    style,
                ], ...rest, children: children }), required && ((0, jsx_runtime_1.jsx)(Text_1.Text, { size: "xs", weight: "bold", color: semanticColors.danger, children: "*" })), optional && ((0, jsx_runtime_1.jsx)(Text_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: "(optional)" }))] }));
});
exports.Label.displayName = "Label";
exports.Caption = react_1.default.forwardRef(({ style, children, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: "xs", color: semanticColors.foregroundSubtle, leading: "normal", style: style, ...rest, children: children }));
});
exports.Caption.displayName = "Caption";
exports.Paragraph = react_1.default.forwardRef(({ lead = false, prose = true, style, children, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: lead ? "lg" : "sm", leading: prose ? "relaxed" : "normal", color: lead ? semanticColors.foreground : semanticColors.foregroundMuted, style: style, ...rest, children: children }));
});
exports.Paragraph.displayName = "Paragraph";
exports.Link = react_1.default.forwardRef(({ href, external = false, variant = "underline", onPress, style, children, asChild, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const handlePress = () => {
        if (href) {
            react_native_1.Linking.openURL(href).catch(() => { });
        }
        onPress?.();
    };
    return ((0, jsx_runtime_1.jsx)(Pressable_1.Pressable, { onPress: handlePress, accessibilityRole: "link", style: { alignSelf: "flex-start" }, asChild: asChild, children: asChild ? (children) : ((0, jsx_runtime_1.jsxs)(Inline_1.Inline, { align: "center", gap: 1, children: [(0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: "sm", weight: "semibold", color: variant === "subtle" ? semanticColors.foregroundMuted : semanticColors.primary, style: [
                        variant === "underline" && { textDecorationLine: "underline" },
                        style,
                    ], ...rest, children: children }), external && ((0, jsx_runtime_1.jsx)(Text_1.Text, { size: "xs", color: semanticColors.primary, children: "\u2197" }))] })) }));
});
exports.Link.displayName = "Link";
exports.Code = react_1.default.forwardRef(({ block = false, style, children, ...rest }, ref) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    if (block) {
        return ((0, jsx_runtime_1.jsx)(Box_1.Box, { p: 4, rounded: "lg", borderWidth: 1, borderColor: semanticColors.border, bg: semanticColors.surface, style: { width: "100%", overflow: "hidden" }, children: (0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: "xs", color: semanticColors.foreground, style: [{ fontFamily: "monospace", lineHeight: 20 }, style], ...rest, children: children }) }));
    }
    return ((0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: "xs", color: semanticColors.primaryForeground, style: [
            {
                fontFamily: "monospace",
                backgroundColor: semanticColors.surface,
                paddingHorizontal: 7,
                paddingVertical: 3,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: semanticColors.border,
                overflow: "hidden",
            },
            style,
        ], ...rest, children: children }));
});
exports.Code.displayName = "Code";
const Blockquote = ({ author, cite, variant = "primary", style, children, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const borderColor = variant === "subtle"
        ? semanticColors.borderBold
        : variant === "accent"
            ? baseTokens.colors.warning[500]
            : semanticColors.primary;
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, { style: [
            {
                borderLeftWidth: 3.5,
                borderLeftColor: borderColor,
                paddingLeft: 16,
                paddingVertical: 8,
                backgroundColor: semanticColors.surfaceSubtle,
                borderRadius: 4,
                gap: 4,
            },
            style,
        ], children: [typeof children === "string" ? ((0, jsx_runtime_1.jsxs)(Text_1.Text, { size: "sm", italic: true, leading: "relaxed", color: semanticColors.foreground, children: ["\"", children, "\""] })) : (children), (author || cite) && ((0, jsx_runtime_1.jsxs)(Inline_1.Inline, { align: "center", gap: 1.5, style: { marginTop: 2 }, children: [(0, jsx_runtime_1.jsxs)(Text_1.Text, { size: "xs", weight: "bold", color: semanticColors.foregroundMuted, children: ["\u2014 ", author] }), cite && ((0, jsx_runtime_1.jsxs)(Text_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: ["(", cite, ")"] }))] }))] }));
};
exports.Blockquote = Blockquote;
exports.Blockquote.displayName = "Blockquote";
exports.TruncatedText = react_1.default.forwardRef(({ lines = 1, expandable = false, style, children, ...rest }, ref) => {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(Box_1.Box, { gap: 1, children: [(0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, numberOfLines: expandable && expanded ? undefined : lines, style: style, ...rest, children: children }), expandable && ((0, jsx_runtime_1.jsx)(Pressable_1.Pressable, { onPress: () => setExpanded(!expanded), style: { alignSelf: "flex-start" }, children: (0, jsx_runtime_1.jsx)(Text_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, children: expanded ? "Show less ↑" : "Show more ↓" }) }))] }));
});
exports.TruncatedText.displayName = "TruncatedText";
exports.GradientText = react_1.default.forwardRef(({ variant = "violet", style, children, ...rest }, ref) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const getColor = () => {
        switch (variant) {
            case "cyan":
                return "#38BDF8";
            case "emerald":
                return baseTokens.colors.success[500];
            case "amber":
                return baseTokens.colors.warning[500];
            case "violet":
            default:
                return semanticColors.primary;
        }
    };
    return ((0, jsx_runtime_1.jsx)(Text_1.Text, { ref: ref, size: "2xl", weight: "bold", tracking: "tight", color: getColor(), style: [{ letterSpacing: 0.5 }, style], ...rest, children: children }));
});
exports.GradientText.displayName = "GradientText";
