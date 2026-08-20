"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = exports.BackButton = exports.CloseButton = exports.LinkButton = exports.FloatingActionButton = exports.ButtonGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const Button_1 = require("./Button");
const ButtonGroup = ({ attached = false, orientation = "horizontal", gap = 2, style, children, }) => {
    const childrenArray = react_1.default.Children.toArray(children).filter(Boolean);
    if (attached) {
        return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { flexDirection: orientation === "horizontal" ? "row" : "column", style: [
                {
                    borderRadius: 12,
                    overflow: "hidden",
                },
                style,
            ], children: childrenArray.map((child, index) => {
                const isFirst = index === 0;
                const isLast = index === childrenArray.length - 1;
                let borderPatch = { borderRadius: 0 };
                if (orientation === "horizontal") {
                    if (isFirst)
                        borderPatch = { borderTopLeftRadius: 12, borderBottomLeftRadius: 12, borderRightWidth: 0.5 };
                    else if (isLast)
                        borderPatch = { borderTopRightRadius: 12, borderBottomRightRadius: 12, borderLeftWidth: 0.5 };
                    else
                        borderPatch = { borderRadius: 0, borderLeftWidth: 0.5, borderRightWidth: 0.5 };
                }
                if (react_1.default.isValidElement(child)) {
                    const childStyle = child.props.style;
                    return react_1.default.cloneElement(child, {
                        key: index,
                        style: (state) => ({
                            ...borderPatch,
                            ...(typeof childStyle === "function" ? childStyle(state) : childStyle),
                        }),
                    });
                }
                return child;
            }) }));
    }
    if (orientation === "vertical") {
        return ((0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: gap, style: style, children: children }));
    }
    return ((0, jsx_runtime_1.jsx)(primitives_1.HStack, { gap: gap, align: "center", style: style, children: children }));
};
exports.ButtonGroup = ButtonGroup;
exports.ButtonGroup.displayName = "ButtonGroup";
const FloatingActionButton = ({ label, icon, position = "bottom-right", style, children, ...rest }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const resolvedIcon = icon ?? (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", color: baseTokens.colors.white, children: "\uFF0B" });
    const getPosStyle = () => {
        switch (position) {
            case "bottom-left":
                return { position: "absolute", bottom: 24, left: 24, zIndex: 1000 };
            case "top-right":
                return { position: "absolute", top: 24, right: 24, zIndex: 1000 };
            case "top-left":
                return { position: "absolute", top: 24, left: 24, zIndex: 1000 };
            case "bottom-right":
            default:
                return { position: "absolute", bottom: 24, right: 24, zIndex: 1000 };
        }
    };
    const isExtended = !!label;
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "primary", size: isExtended ? "md" : "lg", rounded: "full", style: {
            ...getPosStyle(),
            width: isExtended ? undefined : 56,
            height: 56,
            paddingHorizontal: isExtended ? 20 : 0,
            paddingVertical: 0,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: semanticColors.primary,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.45,
            shadowRadius: 14,
            elevation: 8,
            ...style,
        }, leftIcon: resolvedIcon, accessibilityLabel: label ?? "Floating Action", ...rest, children: label ?? children }));
};
exports.FloatingActionButton = FloatingActionButton;
exports.FloatingActionButton.displayName = "FloatingActionButton";
const LinkButton = ({ underline = false, style, children, ...rest }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "ghost", size: "sm", style: {
            paddingHorizontal: 4,
            paddingVertical: 2,
            minHeight: 24,
            ...style,
        }, ...rest, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "semibold", color: semanticColors.primary, style: underline ? { textDecorationLine: "underline" } : undefined, children: children }) }));
};
exports.LinkButton = LinkButton;
exports.LinkButton.displayName = "LinkButton";
const CloseButton = ({ size = "md", style, ...rest }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const dimension = size === "sm" ? 32 : size === "lg" ? 44 : 36;
    const fontSize = size === "sm" ? "sm" : size === "lg" ? "xl" : "md";
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "ghost", rounded: "full", accessibilityLabel: "Close", style: {
            width: dimension,
            height: dimension,
            minHeight: dimension,
            paddingHorizontal: 0,
            paddingVertical: 0,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.white, 0.05),
            ...style,
        }, ...rest, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: fontSize, weight: "bold", color: semanticColors.foreground, children: "\u2715" }) }));
};
exports.CloseButton = CloseButton;
exports.CloseButton.displayName = "CloseButton";
const BackButton = ({ label = "Back", showLabel = true, style, ...rest }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "ghost", size: "sm", accessibilityLabel: "Go Back", style: {
            paddingHorizontal: 10,
            paddingVertical: 6,
            ...style,
        }, leftIcon: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.foreground, children: "\u2190" }), ...rest, children: showLabel ? label : undefined }));
};
exports.BackButton = BackButton;
exports.BackButton.displayName = "BackButton";
const SubmitButton = ({ submitting = false, loading, fullWidth = true, children = "Submit Form", ...rest }) => ((0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "primary", size: "md", loading: submitting || loading, loadingText: "Submitting...", fullWidth: fullWidth, ...rest, children: children }));
exports.SubmitButton = SubmitButton;
exports.SubmitButton.displayName = "SubmitButton";
