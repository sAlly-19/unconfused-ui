import React from "react";
import { ViewStyle } from "react-native";
export type SliderProps = {
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    style?: ViewStyle;
};
export declare const Slider: {
    ({ value: propValue, defaultValue, onValueChange, min, max, label, style, }: SliderProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Slider.d.ts.map