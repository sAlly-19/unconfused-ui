import React from "react";
import { LayoutChangeEvent, View, ViewProps, ViewStyle } from "react-native";
export type ContainerDimensions = {
    width: number;
    height: number;
};
export type ContainerQueryProps = Omit<ViewProps, "children"> & {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    children: React.ReactNode | ((state: {
        matches: boolean;
        dimensions: ContainerDimensions;
    }) => React.ReactNode);
    style?: ViewStyle;
};
/**
 * High-performance ContainerQuery primitive that responds to its own bounding box dimensions
 * rather than the full viewport/window width. Uses microtask debouncing to eliminate layout thrashing.
 */
export declare const ContainerQuery: React.ForwardRefExoticComponent<Omit<ViewProps, "children"> & {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    children: React.ReactNode | ((state: {
        matches: boolean;
        dimensions: ContainerDimensions;
    }) => React.ReactNode);
    style?: ViewStyle;
} & React.RefAttributes<View>>;
/**
 * Hook for component-level container queries.
 */
export declare function useContainerQuery(options: {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
}): {
    matches: boolean;
    dimensions: ContainerDimensions;
    onLayout: (e: LayoutChangeEvent) => void;
};
//# sourceMappingURL=ContainerQuery.d.ts.map