import React from "react";
import { ViewStyle } from "react-native";
import { SelectOption } from "../Select";
export type CheckboxGroupProps = {
    options: {
        label: string;
        value: string;
        disabled?: boolean;
    }[];
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    orientation?: "horizontal" | "vertical";
    style?: ViewStyle;
};
export declare const CheckboxGroup: {
    ({ options, value: propValue, defaultValue, onValueChange, orientation, style, }: CheckboxGroupProps): React.JSX.Element;
    displayName: string;
};
export type ToggleProps = {
    pressed?: boolean;
    defaultPressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const Toggle: {
    ({ pressed: propPressed, defaultPressed, onPressedChange, disabled, size, style, children, }: ToggleProps): React.JSX.Element;
    displayName: string;
};
export type ToggleGroupProps = {
    type?: "single" | "multiple";
    options: {
        label: string;
        value: string;
        icon?: React.ReactNode;
    }[];
    value?: string | string[];
    defaultValue?: string | string[];
    onValueChange?: (value: any) => void;
    style?: ViewStyle;
};
export declare const ToggleGroup: {
    ({ type, options, value: propValue, defaultValue, onValueChange, style, }: ToggleGroupProps): React.JSX.Element;
    displayName: string;
};
export type SegmentedControlProps = {
    options: {
        label: string;
        value: string;
    }[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    size?: "sm" | "md";
    style?: ViewStyle;
};
export declare const SegmentedControl: {
    ({ options, value: propValue, defaultValue, onValueChange, size, style, }: SegmentedControlProps): React.JSX.Element;
    displayName: string;
};
export type MultiSelectProps = {
    options: SelectOption[];
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    style?: ViewStyle;
};
export declare const MultiSelect: {
    ({ options, value: propValue, defaultValue, onValueChange, placeholder, label, disabled, style, }: MultiSelectProps): React.JSX.Element;
    displayName: string;
};
export type ComboboxProps = {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    style?: ViewStyle;
};
export declare const Combobox: {
    ({ options, value: propValue, defaultValue, onValueChange, placeholder, label, style, }: ComboboxProps): React.JSX.Element;
    displayName: string;
};
export declare const Autocomplete: {
    ({ options, value: propValue, defaultValue, onValueChange, placeholder, label, style, }: ComboboxProps): React.JSX.Element;
    displayName: string;
};
export declare const Picker: {
    ({ options, value: propValue, defaultValue, onValueChange, size, style, }: SegmentedControlProps): React.JSX.Element;
    displayName: string;
};
export type RangeSliderProps = {
    min?: number;
    max?: number;
    value?: [number, number];
    defaultValue?: [number, number];
    onValueChange?: (val: [number, number]) => void;
    label?: string;
    style?: ViewStyle;
};
export declare const RangeSlider: {
    ({ min, max, value: propValue, defaultValue, onValueChange, label, style, }: RangeSliderProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=SelectionVariants.d.ts.map