import React from "react";
import { ViewStyle } from "react-native";
export type CheckboxProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    style?: ViewStyle;
};
export declare const Checkbox: {
    ({ checked: propChecked, defaultChecked, onCheckedChange, disabled, label, style, }: CheckboxProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Checkbox.d.ts.map