"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sheet = exports.SheetFooter = exports.SheetContent = exports.SheetDescription = exports.SheetTitle = exports.SheetHeader = exports.SheetRoot = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const SheetRoot = ({ open = false, onOpenChange, style, children }) => {
    const { semanticColors, activeColorScheme } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "slide", onRequestClose: () => onOpenChange?.(false), children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                justifyContent: "flex-end",
                alignItems: "center",
                zIndex: 99999,
            }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                    }, onPress: () => onOpenChange?.(false) }), (0, jsx_runtime_1.jsx)(primitives_1.FocusTrap, { active: open, onRequestClose: () => onOpenChange?.(false), style: { width: "100%", maxWidth: 640, zIndex: 10, alignSelf: "center" }, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
                            {
                                backgroundColor: activeColorScheme === "dark" || activeColorScheme === "oled" ? "#121422" : semanticColors.surface,
                                borderTopLeftRadius: 28,
                                borderTopRightRadius: 28,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderWidth: 1,
                                borderBottomWidth: 0,
                                borderColor: semanticColors.border,
                                maxHeight: "85%",
                                padding: 24,
                                paddingBottom: 32,
                                gap: 16,
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: -12 },
                                shadowOpacity: 0.5,
                                shadowRadius: 36,
                                elevation: 24,
                                width: "100%",
                            },
                            style,
                        ], children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                                    width: 44,
                                    height: 5,
                                    borderRadius: 3,
                                    backgroundColor: semanticColors.borderBold,
                                    alignSelf: "center",
                                    marginBottom: 6,
                                } }), children] }) })] }) }));
};
exports.SheetRoot = SheetRoot;
exports.SheetRoot.displayName = "Sheet";
const SheetHeader = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Stack, { gap: 1, style: style, children: children }));
exports.SheetHeader = SheetHeader;
exports.SheetHeader.displayName = "Sheet.Header";
const SheetTitle = ({ children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xl", weight: "bold", color: semanticColors.foreground, children: children })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));
};
exports.SheetTitle = SheetTitle;
exports.SheetTitle.displayName = "Sheet.Title";
const SheetDescription = ({ children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return typeof children === "string" ? ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundMuted, children: children })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));
};
exports.SheetDescription = SheetDescription;
exports.SheetDescription.displayName = "Sheet.Description";
const SheetContent = ({ children, style }) => ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { style: [{ flexGrow: 0 }, style], children: (0, jsx_runtime_1.jsx)(primitives_1.Box, { children: children }) }));
exports.SheetContent = SheetContent;
exports.SheetContent.displayName = "Sheet.Content";
const SheetFooter = ({ children, style }) => ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [{ paddingTop: 12, flexDirection: "row", justifyContent: "flex-end", gap: 12 }, style], children: children }));
exports.SheetFooter = SheetFooter;
exports.SheetFooter.displayName = "Sheet.Footer";
exports.Sheet = Object.assign(exports.SheetRoot, {
    Header: exports.SheetHeader,
    Title: exports.SheetTitle,
    Description: exports.SheetDescription,
    Content: exports.SheetContent,
    Footer: exports.SheetFooter,
});
