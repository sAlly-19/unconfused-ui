import React from "react";
import { ViewStyle } from "react-native";
export type SelectOption = {
    label: string;
    value: string;
};
export type SelectProps = {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    style?: ViewStyle;
};
export declare const Select: {
    ({ options, value: propValue, defaultValue, onValueChange, placeholder, label, disabled, style, }: SelectProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Select.d.ts.map