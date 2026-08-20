import React from "react";
import { ViewStyle } from "react-native";
import { ProgressProps } from "../Progress";
export * from "../Toast";
export * from "../Skeleton";
export type AlertVariant = "info" | "success" | "warning" | "danger" | "glass";
export type AlertProps = {
    title?: string;
    description?: string;
    variant?: AlertVariant;
    icon?: React.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    action?: React.ReactNode;
    style?: ViewStyle;
    children?: React.ReactNode;
};
export declare const Alert: {
    ({ title, description, variant, icon, dismissible, onDismiss, action, style, children, }: AlertProps): React.JSX.Element | null;
    displayName: string;
};
export type ConfirmDialogProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "primary" | "destructive";
    onConfirm?: () => void;
    onCancel?: () => void;
};
export declare const ConfirmDialog: {
    ({ open, onOpenChange, title, description, confirmText, cancelText, variant, onConfirm, onCancel, }: ConfirmDialogProps): React.JSX.Element;
    displayName: string;
};
export declare const AlertDialog: {
    ({ open, onOpenChange, title, description, confirmText, cancelText, variant, onConfirm, onCancel, }: ConfirmDialogProps): React.JSX.Element;
    displayName: string;
};
export type SnackbarProps = {
    visible?: boolean;
    message: string;
    actionLabel?: string;
    onAction?: () => void;
    style?: ViewStyle;
};
export declare const Snackbar: {
    ({ visible, message, actionLabel, onAction, style, }: SnackbarProps): React.JSX.Element | null;
    displayName: string;
};
export type BannerProps = AlertProps;
export declare const Banner: {
    ({ style, ...props }: BannerProps): React.JSX.Element;
    displayName: string;
};
export type CalloutProps = AlertProps;
export declare const Callout: {
    ({ style, variant, ...props }: CalloutProps): React.JSX.Element;
    displayName: string;
};
export type NoticeProps = {
    label: string;
    variant?: AlertVariant;
    style?: ViewStyle;
};
export declare const Notice: {
    ({ label, variant, style }: NoticeProps): React.JSX.Element;
    displayName: string;
};
export declare const ErrorMessage: ({ message, children }: {
    message?: string;
    children?: React.ReactNode;
}) => React.JSX.Element;
export declare const SuccessMessage: ({ message, children }: {
    message?: string;
    children?: React.ReactNode;
}) => React.JSX.Element;
export declare const WarningMessage: ({ message, children }: {
    message?: string;
    children?: React.ReactNode;
}) => React.JSX.Element;
export declare const InfoMessage: ({ message, children }: {
    message?: string;
    children?: React.ReactNode;
}) => React.JSX.Element;
export declare const ProgressBar: {
    ({ value, max, variant, label, showValue, style, }: ProgressProps): React.JSX.Element;
    displayName: string;
};
export type ProgressCircleProps = {
    value?: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    style?: ViewStyle;
};
export declare const ProgressCircle: {
    ({ value, size, strokeWidth, color, style, }: ProgressCircleProps): React.JSX.Element;
    displayName: string;
};
export type SpinnerProps = {
    size?: "small" | "large";
    color?: string;
};
export declare const Spinner: {
    ({ size, color }: SpinnerProps): React.JSX.Element;
    displayName: string;
};
export declare const ActivityIndicator: {
    ({ size, color }: SpinnerProps): React.JSX.Element;
    displayName: string;
};
export declare const LoadingIndicator: {
    ({ label, size, }: {
        label?: string;
        size?: "small" | "large";
    }): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=FeedbackVariants.d.ts.map