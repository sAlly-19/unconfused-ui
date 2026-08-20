import React from "react";
import { ViewStyle } from "react-native";
export type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "outline";
export type BadgeSize = "sm" | "md";
export type BadgeProps = {
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    radius?: number;
    style?: ViewStyle;
    children: React.ReactNode;
    asChild?: boolean;
};
export declare const Badge: {
    ({ variant, size, dot, radius, style, children, asChild, }: BadgeProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Badge.d.ts.map