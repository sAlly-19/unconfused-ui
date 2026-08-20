import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { PressableProps } from "@unconfused-ui/primitives";
export type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonSlots = {
    leftIcon?: React.ComponentType<{
        size: number;
        color: string;
    }>;
    rightIcon?: React.ComponentType<{
        size: number;
        color: string;
    }>;
    loadingSpinner?: React.ComponentType<{
        color: string;
    }>;
};
export type ButtonProps = Omit<PressableProps, "children"> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    slots?: ButtonSlots;
    contentStyle?: ViewStyle;
    labelStyle?: TextStyle;
    children?: React.ReactNode;
};
//# sourceMappingURL=Button.types.d.ts.map