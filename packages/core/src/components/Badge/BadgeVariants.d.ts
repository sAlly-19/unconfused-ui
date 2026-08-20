import React from "react";
import { ViewStyle } from "react-native";
import { BadgeProps } from "./Badge";
export * from "./Badge";
export type StatusBadgeProps = Omit<BadgeProps, "children"> & {
    status?: "online" | "busy" | "away" | "offline";
    label?: string;
    children?: React.ReactNode;
};
export declare const StatusBadge: {
    ({ status, label, children, ...props }: StatusBadgeProps): React.JSX.Element;
    displayName: string;
};
export type TagProps = BadgeProps & {
    onRemove?: () => void;
};
export declare const Tag: {
    ({ onRemove, children, ...props }: TagProps): React.JSX.Element;
    displayName: string;
};
export type ChipProps = {
    label: string;
    icon?: React.ReactNode;
    selected?: boolean;
    onPress?: () => void;
    style?: ViewStyle;
};
export declare const Chip: {
    ({ label, icon, selected, onPress, style }: ChipProps): React.JSX.Element;
    displayName: string;
};
export type PillProps = BadgeProps;
export declare const Pill: {
    (props: PillProps): React.JSX.Element;
    displayName: string;
};
export type DotProps = {
    color?: string;
    size?: number;
    pulse?: boolean;
    style?: ViewStyle;
};
export declare const Dot: {
    ({ color, size, pulse, style }: DotProps): React.JSX.Element;
    displayName: string;
};
export declare const Indicator: {
    ({ color, size, pulse, style }: DotProps): React.JSX.Element;
    displayName: string;
};
export type CounterProps = {
    count: number;
    max?: number;
    variant?: "danger" | "primary" | "neutral";
    style?: ViewStyle;
};
export declare const Counter: {
    ({ count, max, variant, style }: CounterProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=BadgeVariants.d.ts.map