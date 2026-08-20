import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { Spacing } from "@unconfused-ui/tokens";
export type InlineProps = ViewProps & {
    gap?: keyof Spacing | number;
    align?: ViewStyle["alignItems"];
    justify?: ViewStyle["justifyContent"];
    wrap?: boolean;
    children?: React.ReactNode;
};
export declare const Inline: React.ForwardRefExoticComponent<ViewProps & {
    gap?: keyof Spacing | number;
    align?: ViewStyle["alignItems"];
    justify?: ViewStyle["justifyContent"];
    wrap?: boolean;
    children?: React.ReactNode;
} & React.RefAttributes<View>>;
//# sourceMappingURL=Inline.d.ts.map