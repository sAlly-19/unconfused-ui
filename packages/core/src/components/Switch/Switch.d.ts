import React from "react";
import { ViewStyle } from "react-native";
export type SwitchProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    style?: ViewStyle;
};
export declare const Switch: {
    ({ checked: propChecked, defaultChecked, onCheckedChange, disabled, label, style, }: SwitchProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Switch.d.ts.map