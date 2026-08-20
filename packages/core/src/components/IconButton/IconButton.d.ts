import React from "react";
import { View, ViewStyle } from "react-native";
export type IconButtonVariant = "primary" | "secondary" | "destructive" | "outline" | "ghost" | "glass";
export type IconButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconButtonShape = "circle" | "rounded" | "square";
export type IconButtonProps = {
    icon: React.ReactNode;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    shape?: IconButtonShape;
    badge?: React.ReactNode;
    disabled?: boolean;
    style?: ViewStyle;
    onPress?: () => void;
    accessibilityLabel: string;
    asChild?: boolean;
};
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<View>>;
//# sourceMappingURL=IconButton.d.ts.map