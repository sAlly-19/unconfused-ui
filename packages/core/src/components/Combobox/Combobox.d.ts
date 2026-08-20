import React from "react";
import { ViewStyle } from "react-native";
export type ComboboxOption = {
    label: string;
    value: string;
    description?: string;
    disabled?: boolean;
};
export type ComboboxProps = {
    options: ComboboxOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    style?: ViewStyle;
};
/**
 * Universal Virtualized Combobox component:
 * Features instant debounced search, WAI-ARIA accessibility, and FlatList virtualization for 1,000+ options.
 */
export declare function Combobox({ options, value: propValue, defaultValue, onValueChange, placeholder, searchPlaceholder, disabled, clearable, style, }: ComboboxProps): React.JSX.Element;
export declare namespace Combobox {
    var displayName: string;
}
//# sourceMappingURL=Combobox.d.ts.map