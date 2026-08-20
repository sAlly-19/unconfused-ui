import React from "react";
import { ViewStyle } from "react-native";
export type ProgressProps = {
    value: number;
    max?: number;
    variant?: "primary" | "success" | "warning" | "danger";
    label?: string;
    showValue?: boolean;
    style?: ViewStyle;
};
export declare const Progress: {
    ({ value, max, variant, label, showValue, style, }: ProgressProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Progress.d.ts.map