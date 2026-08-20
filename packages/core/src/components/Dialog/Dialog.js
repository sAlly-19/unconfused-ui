"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = exports.DialogFooter = exports.DialogContent = exports.DialogDescription = exports.DialogTitle = exports.DialogHeader = exports.DialogRoot = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const DialogRoot = ({ open = false, onOpenChange, style, children }) => {
    const { semanticColors, baseTokens, theme } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "fade", onRequestClose: () => onOpenChange?.(false), children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                flex: 1,
                backgroundColor: (0, tokens_1.withAlpha)(baseTokens.colors.black, 0.75),
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                zIndex: 99999,
            }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                    }, onPress: () => onOpenChange?.(false) }), (0, jsx_runtime_1.jsx)(primitives_1.FocusTrap, { active: open, onRequestClose: () => onOpenChange?.(false), style: { width: "100%", maxWidth: 480, zIndex: 10 }, children: (0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 4, style: [
                            {
                                width: "100%",
                                backgroundColor: semanticColors.surface,
                                borderRadius: 22,
                                borderWidth: 1,
                                borderColor: semanticColors.border,
                                padding: 24,
                                ...(theme.shadows ? theme.shadows.lg : {}),
                            },
                            style,
                        ], children: children }) })] }) }));
};
exports.DialogRoot = DialogRoot;
exports.DialogRoot.displayName = "Dialog";
const DialogHeader = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 1, style: style, children: children }));
exports.DialogHeader = DialogHeader;
exports.DialogHeader.displayName = "Dialog.Header";
const DialogTitle = ({ children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xl", weight: "bold", color: semanticColors.foreground, children: children })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));
};
exports.DialogTitle = DialogTitle;
exports.DialogTitle.displayName = "Dialog.Title";
const DialogDescription = ({ children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundMuted, children: children })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));
};
exports.DialogDescription = DialogDescription;
exports.DialogDescription.displayName = "Dialog.Description";
const DialogContent = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: style, children: children }));
exports.DialogContent = DialogContent;
exports.DialogContent.displayName = "Dialog.Content";
const DialogFooter = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [{ paddingTop: 12, flexDirection: "row", justifyContent: "flex-end", gap: 12 }, style], children: children }));
exports.DialogFooter = DialogFooter;
exports.DialogFooter.displayName = "Dialog.Footer";
exports.Dialog = Object.assign(exports.DialogRoot, {
    Header: exports.DialogHeader,
    Title: exports.DialogTitle,
    Description: exports.DialogDescription,
    Content: exports.DialogContent,
    Footer: exports.DialogFooter,
});
