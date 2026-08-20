import React from "react";
import { View, ViewStyle } from "react-native";
import { HapticFeedbackType } from "@unconfused-ui/hooks";
export type ButtonVariant = "primary" | "secondary" | "destructive" | "outline" | "ghost" | "glass" | "subtle";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonRadius = "sm" | "md" | "lg" | "full";
export type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRadius;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    badge?: React.ReactNode;
    style?: ViewStyle | ((state: {
        pressed: boolean;
    }) => ViewStyle);
    children?: React.ReactNode;
    onPress?: () => void;
    accessibilityLabel?: string;
    asChild?: boolean;
    haptic?: HapticFeedbackType | boolean;
};
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<View>>;
//# sourceMappingURL=Button.d.ts.map