import React from "react";
import { StatusBarProps as RNStatusBarProps, ViewStyle } from "react-native";
import { ButtonProps } from "../Button";
export type StatusBarProps = RNStatusBarProps;
export declare const StatusBar: {
    (props: StatusBarProps): React.JSX.Element;
    displayName: string;
};
export type KeyboardAccessoryProps = {
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const KeyboardAccessory: {
    ({ style, children }: KeyboardAccessoryProps): React.JSX.Element;
    displayName: string;
};
export type BottomTabBarProps = {
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const BottomTabBar: {
    ({ style, children }: BottomTabBarProps): React.JSX.Element;
    displayName: string;
};
export type ShareButtonProps = ButtonProps & {
    shareContent?: {
        message: string;
        title?: string;
        url?: string;
    };
};
export declare const ShareButton: {
    ({ shareContent, onPress, children, ...rest }: ShareButtonProps): React.JSX.Element;
    displayName: string;
};
export declare const HapticButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<import("react-native").View>>;
//# sourceMappingURL=MobileUI.d.ts.map