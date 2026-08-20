"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = exports.PopoverContent = exports.PopoverTrigger = exports.PopoverRoot = void 0;
exports.usePopoverContext = usePopoverContext;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const PopoverContext = (0, react_1.createContext)(null);
function usePopoverContext() {
    const context = (0, react_1.useContext)(PopoverContext);
    if (!context) {
        throw new Error("<Popover> subcomponents must be used within <Popover>");
    }
    return context;
}
const PopoverRoot = ({ open: propOpen, defaultOpen = false, onOpenChange, children }) => {
    const [open, setOpen] = (0, react_1.useState)(defaultOpen);
    const isControlled = propOpen !== undefined;
    const currentOpen = isControlled ? propOpen : open;
    const handleOpenChange = (nextOpen) => {
        if (!isControlled) {
            setOpen(nextOpen);
        }
        onOpenChange?.(nextOpen);
    };
    return ((0, jsx_runtime_1.jsx)(PopoverContext.Provider, { value: { open: currentOpen, setOpen: handleOpenChange }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { position: "relative" }, children: children }) }));
};
exports.PopoverRoot = PopoverRoot;
exports.PopoverRoot.displayName = "Popover";
const PopoverTrigger = ({ children }) => {
    const { open, setOpen } = usePopoverContext();
    return (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => setOpen(!open), children: children });
};
exports.PopoverTrigger = PopoverTrigger;
exports.PopoverTrigger.displayName = "Popover.Trigger";
const PopoverContent = ({ style, children }) => {
    const { open, setOpen } = usePopoverContext();
    const { semanticColors } = (0, theme_1.useTheme)();
    if (!open)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "fade", onRequestClose: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { style: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center" }, onPress: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.FocusTrap, { active: open, onRequestClose: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: (e) => e.stopPropagation?.(), style: [
                        {
                            width: 280,
                            backgroundColor: semanticColors.surface,
                            borderRadius: 14,
                            borderWidth: 1,
                            borderColor: semanticColors.borderBold,
                            padding: 16,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 6 },
                            shadowOpacity: 0.25,
                            shadowRadius: 12,
                            elevation: 8,
                        },
                        style,
                    ], children: children }) }) }) }));
};
exports.PopoverContent = PopoverContent;
exports.PopoverContent.displayName = "Popover.Content";
exports.Popover = Object.assign(exports.PopoverRoot, {
    Trigger: exports.PopoverTrigger,
    Content: exports.PopoverContent,
});
