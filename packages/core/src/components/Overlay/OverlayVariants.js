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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenu = exports.DropdownMenu = exports.ActionSheet = exports.BottomSheet = exports.Drawer = exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Button_1 = require("../Button");
const Dialog_1 = require("../Dialog");
const Popover_1 = require("../Popover");
const Sheet_1 = require("../Sheet");
__exportStar(require("../Dialog"), exports);
__exportStar(require("../Sheet"), exports);
__exportStar(require("../Popover"), exports);
__exportStar(require("../Tooltip"), exports);
// 1. Modal (General Modal alias)
exports.Modal = Dialog_1.Dialog;
const Drawer = ({ open = false, onOpenChange, position = "right", width = 340, style, children, }) => {
    const { semanticColors, activeColorScheme } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "fade", onRequestClose: () => onOpenChange?.(false), children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                flexDirection: "row",
                justifyContent: position === "left" ? "flex-start" : "flex-end",
                zIndex: 99999,
            }, children: [position === "right" && ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: { flex: 1, height: "100%" }, onPress: () => onOpenChange?.(false) })), (0, jsx_runtime_1.jsx)(primitives_1.FocusTrap, { active: open, onRequestClose: () => onOpenChange?.(false), style: { height: "100%", zIndex: 10 }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
                            {
                                width: width,
                                height: "100%",
                                backgroundColor: activeColorScheme === "dark" || activeColorScheme === "oled" ? "#121422" : semanticColors.surface,
                                borderLeftWidth: position === "right" ? 1 : 0,
                                borderRightWidth: position === "left" ? 1 : 0,
                                borderColor: semanticColors.border,
                                padding: 24,
                                gap: 16,
                                shadowColor: "#000",
                                shadowOffset: { width: position === "left" ? 10 : -10, height: 0 },
                                shadowOpacity: 0.5,
                                shadowRadius: 36,
                                elevation: 24,
                            },
                            style,
                        ], children: children }) }), position === "left" && ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: { flex: 1, height: "100%" }, onPress: () => onOpenChange?.(false) }))] }) }));
};
exports.Drawer = Drawer;
exports.Drawer.displayName = "Drawer";
// 3. BottomSheet (Alias and extended sheet with drag handle)
exports.BottomSheet = Sheet_1.Sheet;
const ActionSheet = ({ open = false, onOpenChange, title, description, actions, cancelText = "Cancel", }) => {
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
                padding: 16,
                paddingBottom: 24,
                zIndex: 99999,
            }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                    }, onPress: () => onOpenChange?.(false) }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 3, style: { width: "100%", maxWidth: 440, alignSelf: "center", zIndex: 10 }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: {
                                backgroundColor: activeColorScheme === "dark" || activeColorScheme === "oled" ? "#161828" : semanticColors.surface,
                                borderRadius: 20,
                                overflow: "hidden",
                                borderWidth: 1,
                                borderColor: semanticColors.border,
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: -8 },
                                shadowOpacity: 0.4,
                                shadowRadius: 24,
                                elevation: 20,
                            }, children: [(title || description) && ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { p: 4, style: { borderBottomWidth: 1, borderBottomColor: semanticColors.border, alignItems: "center" }, children: [title && (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.foreground, children: title }), description && (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, style: { marginTop: 2, textAlign: "center" }, children: description })] })), actions.map((item, index) => ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => {
                                        if (item.disabled)
                                            return;
                                        onOpenChange?.(false);
                                        item.onPress();
                                    }, disabled: item.disabled, style: {
                                        paddingVertical: 14,
                                        paddingHorizontal: 16,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "row",
                                        gap: 8,
                                        borderBottomWidth: index < actions.length - 1 ? 1 : 0,
                                        borderBottomColor: semanticColors.border,
                                        opacity: item.disabled ? 0.4 : 1,
                                    }, children: [item.icon, (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: item.destructive ? semanticColors.danger : semanticColors.foreground, children: item.label })] }, index)))] }), (0, jsx_runtime_1.jsx)(Button_1.Button, { size: "md", variant: "glass", onPress: () => onOpenChange?.(false), style: { borderRadius: 16, height: 48 }, children: cancelText })] })] }) }));
};
exports.ActionSheet = ActionSheet;
exports.ActionSheet.displayName = "ActionSheet";
const DropdownMenu = ({ trigger, items }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [open, setOpen] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(Popover_1.Popover, { open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(Popover_1.Popover.Trigger, { children: trigger }), (0, jsx_runtime_1.jsx)(Popover_1.Popover.Content, { style: { width: 200, padding: 4 }, children: (0, jsx_runtime_1.jsx)(primitives_1.VStack, { gap: 1, children: items.map((item, i) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => {
                                    setOpen(false);
                                    item.onPress?.();
                                }, style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    paddingVertical: 8,
                                    paddingHorizontal: 10,
                                    borderRadius: 6,
                                }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [item.icon, (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: item.destructive ? semanticColors.danger : semanticColors.foreground, children: item.label })] }), item.shortcut && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, style: { fontFamily: "monospace", fontSize: 10 }, children: item.shortcut }))] }), item.divider && (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { height: 1, backgroundColor: semanticColors.border, marginVertical: 2 } })] }, i))) }) })] }));
};
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenu.displayName = "DropdownMenu";
exports.ContextMenu = exports.DropdownMenu;
