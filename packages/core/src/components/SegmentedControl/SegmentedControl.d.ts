import React from "react";
import { ViewStyle } from "react-native";
export type SegmentOption = {
    label: string;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
};
export type SegmentedControlProps = {
    options: SegmentOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    style?: ViewStyle;
};
/**
 * Universal Animated SegmentedControl:
 * Fluid sliding pill indicator with token-bound geometry and full keyboard/touch ergonomics.
 */
export declare function SegmentedControl({ options, value: propValue, defaultValue, onValueChange, size, fullWidth, style, }: SegmentedControlProps): React.JSX.Element;
export declare namespace SegmentedControl {
    var displayName: string;
}
//# sourceMappingURL=SegmentedControl.d.ts.map