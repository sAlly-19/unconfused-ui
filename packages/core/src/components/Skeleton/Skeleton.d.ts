import React from "react";
import { ViewStyle } from "react-native";
type SkeletonGroupContextValue = {
    loading: boolean;
};
export declare function useSkeletonGroup(): SkeletonGroupContextValue;
export type SkeletonGroupProps = {
    loading?: boolean;
    children: React.ReactNode;
};
export declare const SkeletonGroup: ({ loading, children }: SkeletonGroupProps) => React.JSX.Element;
export type SkeletonProps = {
    width?: number | `${number}%` | "100%";
    height?: number;
    radius?: number;
    rounded?: "sm" | "md" | "lg" | "full";
    animated?: boolean;
    style?: ViewStyle;
    children?: React.ReactNode;
};
export declare const SkeletonBox: ({ width, height, radius, rounded, animated, style, children, }: SkeletonProps) => React.JSX.Element;
export declare const Skeleton: (({ width, height, radius, rounded, animated, style, children, }: SkeletonProps) => React.JSX.Element) & {
    Group: ({ loading, children }: SkeletonGroupProps) => React.JSX.Element;
};
export {};
//# sourceMappingURL=Skeleton.d.ts.map