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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastProvider = void 0;
exports.useToast = useToast;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
const toastStore_1 = require("./toastStore");
__exportStar(require("./toastStore"), exports);
function useToast() {
    return {
        show: toastStore_1.toastStore.show,
        toast: toastStore_1.toastStore.show,
    };
}
const ToastProvider = ({ children }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const toasts = (0, toastStore_1.useToasts)();
    const getVariantStyle = (variant) => {
        switch (variant) {
            case "success":
                return {
                    backgroundColor: (0, tokens_1.withAlpha)("#10B981", 0.15),
                    borderColor: (0, tokens_1.withAlpha)("#10B981", 0.4),
                };
            case "danger":
            case "destructive":
                return {
                    backgroundColor: (0, tokens_1.withAlpha)(semanticColors.danger, 0.15),
                    borderColor: (0, tokens_1.withAlpha)(semanticColors.danger, 0.4),
                };
            case "warning":
                return {
                    backgroundColor: (0, tokens_1.withAlpha)("#F59E0B", 0.15),
                    borderColor: (0, tokens_1.withAlpha)("#F59E0B", 0.4),
                };
            case "default":
            default:
                return {
                    backgroundColor: semanticColors.surface,
                    borderColor: semanticColors.borderBold,
                };
        }
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, position: "relative" }, children: [children, toasts.length > 0 && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                    position: "absolute",
                    top: 40,
                    left: 20,
                    right: 20,
                    zIndex: 2000,
                    gap: 10,
                    alignItems: "center",
                }, pointerEvents: "box-none", children: toasts.map((toastItem) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { accessibilityLiveRegion: toastItem.variant === "danger" || toastItem.variant === "destructive" ? "assertive" : "polite", style: [
                        {
                            maxWidth: 420,
                            width: "100%",
                            borderRadius: 12,
                            borderWidth: 1,
                            padding: 14,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.25,
                            shadowRadius: 10,
                            elevation: 6,
                        },
                        getVariantStyle(toastItem.variant),
                    ], children: (0, jsx_runtime_1.jsxs)(primitives_1.Stack, { gap: 1, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.foreground, children: toastItem.title }), toastItem.description && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, children: toastItem.description }))] }) }, toastItem.id))) }))] }));
};
exports.ToastProvider = ToastProvider;
exports.ToastProvider.displayName = "ToastProvider";
