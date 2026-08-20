import React from "react";
import { PressableProps as RNPressableProps, StyleProp, View, ViewStyle } from "react-native";
export type PressableState = {
    pressed: boolean;
    hovered: boolean;
    focused: boolean;
};
export type PressableProps = Omit<RNPressableProps, "style" | "children"> & {
    asChild?: boolean;
    style?: StyleProp<ViewStyle> | ((state: PressableState) => StyleProp<ViewStyle>);
    children?: React.ReactNode | ((state: PressableState) => React.ReactNode);
    disabled?: boolean;
};
export declare const Pressable: React.ForwardRefExoticComponent<Omit<RNPressableProps, "children" | "style"> & {
    asChild?: boolean;
    style?: StyleProp<ViewStyle> | ((state: PressableState) => StyleProp<ViewStyle>);
    children?: React.ReactNode | ((state: PressableState) => React.ReactNode);
    disabled?: boolean;
} & React.RefAttributes<View>>;
//# sourceMappingURL=Pressable.d.ts.map