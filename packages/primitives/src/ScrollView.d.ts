import React from "react";
import { ScrollView as RNScrollView, ScrollViewProps as RNScrollViewProps, ViewStyle } from "react-native";
export type ScrollViewProps = RNScrollViewProps & {
    padding?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    gap?: number;
    hideIndicator?: boolean;
    onPullToRefresh?: () => Promise<void> | void;
    refreshing?: boolean;
    contentContainerStyle?: ViewStyle;
    style?: ViewStyle;
    children?: React.ReactNode;
};
/**
 * Universal ScrollView primitive with theme token support, elastic pull-to-refresh
 * and simplified scroll indicator controls.
 */
export declare const ScrollView: React.ForwardRefExoticComponent<RNScrollViewProps & {
    padding?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    gap?: number;
    hideIndicator?: boolean;
    onPullToRefresh?: () => Promise<void> | void;
    refreshing?: boolean;
    contentContainerStyle?: ViewStyle;
    style?: ViewStyle;
    children?: React.ReactNode;
} & React.RefAttributes<RNScrollView>>;
//# sourceMappingURL=ScrollView.d.ts.map