import React from "react";
import { ViewStyle } from "react-native";
export type RadioGroupProps = {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const RadioGroup: ({ value: propValue, defaultValue, onValueChange, disabled, style, children, }: RadioGroupProps) => React.JSX.Element;
export type RadioProps = {
    value: string;
    label?: string;
    disabled?: boolean;
    style?: ViewStyle;
};
export declare const Radio: ({ value: radioValue, label, disabled: itemDisabled, style }: RadioProps) => React.JSX.Element;
//# sourceMappingURL=Radio.d.ts.map