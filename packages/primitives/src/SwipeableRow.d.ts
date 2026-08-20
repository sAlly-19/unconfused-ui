import React from "react";
import { ViewStyle } from "react-native";
export type SwipeableRowProps = {
    children: React.ReactNode;
    leftAction?: React.ReactNode;
    rightAction?: React.ReactNode;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    threshold?: number;
    style?: ViewStyle;
};
/**
 * Universal Swipeable Row Primitive:
 * Supports native touch and pointer gestures to reveal actions or dismiss rows.
 */
export declare function SwipeableRow({ children, leftAction, rightAction, onSwipeLeft, onSwipeRight, threshold, style, }: SwipeableRowProps): React.JSX.Element;
export declare namespace SwipeableRow {
    var displayName: string;
}
//# sourceMappingURL=SwipeableRow.d.ts.map