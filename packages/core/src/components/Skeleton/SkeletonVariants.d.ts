import React from "react";
import { ViewStyle } from "react-native";
import { SkeletonProps } from "./Skeleton";
export * from "./Skeleton";
export type SkeletonTextProps = SkeletonProps & {
    lines?: number;
    gap?: number;
};
export declare const SkeletonText: {
    ({ lines, gap, height, style }: SkeletonTextProps): React.JSX.Element;
    displayName: string;
};
export type SkeletonAvatarProps = {
    size?: number;
    style?: ViewStyle;
};
export declare const SkeletonAvatar: {
    ({ size, style }: SkeletonAvatarProps): React.JSX.Element;
    displayName: string;
};
export type SkeletonCardProps = {
    hasAvatar?: boolean;
    style?: ViewStyle;
};
export declare const SkeletonCard: {
    ({ hasAvatar, style }: SkeletonCardProps): React.JSX.Element;
    displayName: string;
};
export type SkeletonTableRowProps = {
    columns?: number;
    height?: number;
    style?: ViewStyle;
};
export declare const SkeletonTableRow: {
    ({ columns, height, style }: SkeletonTableRowProps): React.JSX.Element;
    displayName: string;
};
export declare const SkeletonCompound: (({ width, height, radius, rounded, animated, style, children, }: SkeletonProps) => React.JSX.Element) & {
    Group: ({ loading, children }: import("./Skeleton").SkeletonGroupProps) => React.JSX.Element;
} & {
    Text: {
        ({ lines, gap, height, style }: SkeletonTextProps): React.JSX.Element;
        displayName: string;
    };
    Avatar: {
        ({ size, style }: SkeletonAvatarProps): React.JSX.Element;
        displayName: string;
    };
    Card: {
        ({ hasAvatar, style }: SkeletonCardProps): React.JSX.Element;
        displayName: string;
    };
    TableRow: {
        ({ columns, height, style }: SkeletonTableRowProps): React.JSX.Element;
        displayName: string;
    };
};
export declare const Shimmer: (({ width, height, radius, rounded, animated, style, children, }: SkeletonProps) => React.JSX.Element) & {
    Group: ({ loading, children }: import("./Skeleton").SkeletonGroupProps) => React.JSX.Element;
} & {
    Text: {
        ({ lines, gap, height, style }: SkeletonTextProps): React.JSX.Element;
        displayName: string;
    };
    Avatar: {
        ({ size, style }: SkeletonAvatarProps): React.JSX.Element;
        displayName: string;
    };
    Card: {
        ({ hasAvatar, style }: SkeletonCardProps): React.JSX.Element;
        displayName: string;
    };
    TableRow: {
        ({ columns, height, style }: SkeletonTableRowProps): React.JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=SkeletonVariants.d.ts.map