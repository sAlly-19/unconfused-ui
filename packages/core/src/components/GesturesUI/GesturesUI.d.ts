import React from "react";
import { RefreshControlProps as RNRefreshControlProps, ViewStyle } from "react-native";
import { PressableProps } from "@unconfused-ui/primitives";
export declare const Touchable: {
    (props: PressableProps): React.JSX.Element;
    displayName: string;
};
export type SwipeableProps = {
    leftActions?: React.ReactNode;
    rightActions?: React.ReactNode;
    children: React.ReactNode;
    style?: ViewStyle;
};
export declare const Swipeable: {
    ({ leftActions, rightActions, children, style }: SwipeableProps): React.JSX.Element;
    displayName: string;
};
export declare const SwipeActions: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export type LongPressProps = {
    onLongPress?: () => void;
    delayLongPress?: number;
    children: React.ReactNode;
    style?: ViewStyle;
};
export declare const LongPress: {
    ({ onLongPress, delayLongPress, children, style }: LongPressProps): React.JSX.Element;
    displayName: string;
};
export type DoubleTapProps = {
    onDoubleTap?: () => void;
    delay?: number;
    children: React.ReactNode;
    style?: ViewStyle;
};
export declare const DoubleTap: {
    ({ onDoubleTap, delay, children, style }: DoubleTapProps): React.JSX.Element;
    displayName: string;
};
export type DraggableProps = {
    children: React.ReactNode;
    style?: ViewStyle;
};
export declare const Draggable: {
    ({ children, style }: DraggableProps): React.JSX.Element;
    displayName: string;
};
export declare const Droppable: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const Resizable: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const PanGesture: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const PinchZoom: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export type PullToRefreshProps = RNRefreshControlProps;
export declare const PullToRefresh: {
    (props: PullToRefreshProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=GesturesUI.d.ts.map