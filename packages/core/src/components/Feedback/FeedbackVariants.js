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
exports.LoadingIndicator = exports.ActivityIndicator = exports.Spinner = exports.ProgressCircle = exports.ProgressBar = exports.InfoMessage = exports.WarningMessage = exports.SuccessMessage = exports.ErrorMessage = exports.Notice = exports.Callout = exports.Banner = exports.Snackbar = exports.AlertDialog = exports.ConfirmDialog = exports.Alert = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const Button_1 = require("../Button");
const Progress_1 = require("../Progress");
__exportStar(require("../Toast"), exports);
__exportStar(require("../Skeleton"), exports);
const Alert = ({ title, description, variant = "info", icon, dismissible = false, onDismiss, action, style, children, }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const [visible, setVisible] = (0, react_1.useState)(true);
    if (!visible)
        return null;
    const getVariantStyles = () => {
        switch (variant) {
            case "success":
                return {
                    bg: "rgba(16, 185, 129, 0.12)",
                    border: "rgba(16, 185, 129, 0.35)",
                    defaultIcon: "✓",
                    iconColor: baseTokens.colors.success[500],
                };
            case "warning":
                return {
                    bg: "rgba(245, 158, 11, 0.12)",
                    border: "rgba(245, 158, 11, 0.35)",
                    defaultIcon: "⚠️",
                    iconColor: baseTokens.colors.warning[500],
                };
            case "danger":
                return {
                    bg: "rgba(244, 63, 94, 0.12)",
                    border: "rgba(244, 63, 94, 0.35)",
                    defaultIcon: "🛑",
                    iconColor: semanticColors.danger,
                };
            case "glass":
                return {
                    bg: "rgba(16, 18, 30, 0.75)",
                    border: "rgba(255, 255, 255, 0.15)",
                    defaultIcon: "⚡",
                    iconColor: semanticColors.primary,
                };
            case "info":
            default:
                return {
                    bg: "rgba(124, 58, 237, 0.12)",
                    border: "rgba(124, 58, 237, 0.35)",
                    defaultIcon: "ℹ️",
                    iconColor: semanticColors.primary,
                };
        }
    };
    const currentVariant = getVariantStyles();
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                borderRadius: 14,
                borderWidth: 1,
                borderColor: currentVariant.border,
                backgroundColor: currentVariant.bg,
                padding: 16,
            },
            style,
        ], accessibilityRole: "alert", children: (0, jsx_runtime_1.jsxs)(primitives_1.HStack, { gap: 3, align: "flex-start", children: [icon ?? (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "md", color: currentVariant.iconColor, children: currentVariant.defaultIcon }), (0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 1, style: { flex: 1 }, children: [title && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", weight: "bold", color: semanticColors.foreground, children: title })), description && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, lineHeight: "sm", children: description })), children, action && (0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { marginTop: 6 }, children: action })] }), dismissible && ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => {
                        setVisible(false);
                        onDismiss?.();
                    }, accessibilityLabel: "Dismiss Alert", children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundSubtle, children: "\u2715" }) }))] }) }));
};
exports.Alert = Alert;
exports.Alert.displayName = "Alert";
const ConfirmDialog = ({ open = false, onOpenChange, title, description, confirmText = "Confirm", cancelText = "Cancel", variant = "primary", onConfirm, onCancel, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, transparent: true, animationType: "fade", onRequestClose: () => onOpenChange?.(false), children: (0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => onOpenChange?.(false), style: {
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.65)",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
            }, children: (0, jsx_runtime_1.jsxs)(primitives_1.Box, { p: 6, rounded: "xl", bg: semanticColors.surface, borderWidth: 1, borderColor: semanticColors.borderBold, style: { width: "100%", maxWidth: 400, gap: 16 }, children: [(0, jsx_runtime_1.jsxs)(primitives_1.VStack, { gap: 2, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "lg", weight: "bold", color: semanticColors.foreground, children: title }), (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, lineHeight: "sm", children: description })] }), (0, jsx_runtime_1.jsxs)(primitives_1.Inline, { justify: "flex-end", gap: 3, children: [(0, jsx_runtime_1.jsx)(Button_1.Button, { size: "sm", variant: "ghost", onPress: () => {
                                    onCancel?.();
                                    onOpenChange?.(false);
                                }, children: cancelText }), (0, jsx_runtime_1.jsx)(Button_1.Button, { size: "sm", variant: variant === "destructive" ? "destructive" : "primary", onPress: () => {
                                    onConfirm?.();
                                    onOpenChange?.(false);
                                }, children: confirmText })] })] }) }) }));
};
exports.ConfirmDialog = ConfirmDialog;
exports.ConfirmDialog.displayName = "ConfirmDialog";
exports.AlertDialog = exports.ConfirmDialog;
const Snackbar = ({ visible = true, message, actionLabel = "UNDO", onAction, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    if (!visible)
        return null;
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: [
            {
                backgroundColor: "rgba(16, 18, 30, 0.95)",
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: 12,
                paddingHorizontal: 16,
                paddingVertical: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 10,
            },
            style,
        ], children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foreground, weight: "medium", children: message }), actionLabel && ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: onAction, style: { paddingLeft: 12 }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.primary, children: actionLabel }) }))] }));
};
exports.Snackbar = Snackbar;
exports.Snackbar.displayName = "Snackbar";
const Banner = ({ style, ...props }) => ((0, jsx_runtime_1.jsx)(exports.Alert, { style: {
        borderRadius: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: "100%",
        ...style,
    }, ...props }));
exports.Banner = Banner;
exports.Banner.displayName = "Banner";
const Callout = ({ style, variant = "info", ...props }) => {
    const { semanticColors, baseTokens } = (0, theme_1.useTheme)();
    const accentColor = variant === "danger"
        ? semanticColors.danger
        : variant === "warning"
            ? baseTokens.colors.warning[500]
            : variant === "success"
                ? baseTokens.colors.success[500]
                : semanticColors.primary;
    return ((0, jsx_runtime_1.jsx)(exports.Alert, { variant: variant, style: {
            borderLeftWidth: 4,
            borderLeftColor: accentColor,
            ...style,
        }, ...props }));
};
exports.Callout = Callout;
exports.Callout.displayName = "Callout";
const Notice = ({ label, variant = "info", style }) => ((0, jsx_runtime_1.jsx)(exports.Alert, { variant: variant, style: { paddingVertical: 8, paddingHorizontal: 12, ...style }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", children: label }) }));
exports.Notice = Notice;
exports.Notice.displayName = "Notice";
// 7. Message items (ErrorMessage, SuccessMessage, WarningMessage, InfoMessage)
const ErrorMessage = ({ message, children }) => ((0, jsx_runtime_1.jsx)(exports.Alert, { variant: "danger", title: message ?? (typeof children === "string" ? children : undefined), children: typeof children !== "string" ? children : null }));
exports.ErrorMessage = ErrorMessage;
const SuccessMessage = ({ message, children }) => ((0, jsx_runtime_1.jsx)(exports.Alert, { variant: "success", title: message ?? (typeof children === "string" ? children : undefined), children: typeof children !== "string" ? children : null }));
exports.SuccessMessage = SuccessMessage;
const WarningMessage = ({ message, children }) => ((0, jsx_runtime_1.jsx)(exports.Alert, { variant: "warning", title: message ?? (typeof children === "string" ? children : undefined), children: typeof children !== "string" ? children : null }));
exports.WarningMessage = WarningMessage;
const InfoMessage = ({ message, children }) => ((0, jsx_runtime_1.jsx)(exports.Alert, { variant: "info", title: message ?? (typeof children === "string" ? children : undefined), children: typeof children !== "string" ? children : null }));
exports.InfoMessage = InfoMessage;
// 8. ProgressBar & ProgressCircle
exports.ProgressBar = Progress_1.Progress;
const ProgressCircle = ({ value = 65, size = 64, strokeWidth = 6, color, style, }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    const activeColor = color ?? semanticColors.primary;
    return ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: [
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: strokeWidth,
                borderColor: "rgba(255, 255, 255, 0.1)",
                borderTopColor: activeColor,
                borderRightColor: value > 50 ? activeColor : "rgba(255, 255, 255, 0.1)",
                alignItems: "center",
                justifyContent: "center",
            },
            style,
        ], children: (0, jsx_runtime_1.jsxs)(primitives_1.Text, { size: "xs", weight: "bold", color: semanticColors.foreground, children: [Math.round(value), "%"] }) }));
};
exports.ProgressCircle = ProgressCircle;
exports.ProgressCircle.displayName = "ProgressCircle";
const Spinner = ({ size = "small", color }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: size, color: color ?? semanticColors.primary });
};
exports.Spinner = Spinner;
exports.Spinner.displayName = "Spinner";
exports.ActivityIndicator = exports.Spinner;
const LoadingIndicator = ({ label = "Loading assets...", size = "small", }) => {
    const { semanticColors } = (0, theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(primitives_1.Inline, { align: "center", gap: 2, children: [(0, jsx_runtime_1.jsx)(exports.Spinner, { size: size }), label && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.foregroundMuted, weight: "medium", children: label }))] }));
};
exports.LoadingIndicator = LoadingIndicator;
exports.LoadingIndicator.displayName = "LoadingIndicator";
