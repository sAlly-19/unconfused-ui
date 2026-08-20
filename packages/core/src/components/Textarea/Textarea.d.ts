import React from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, ViewStyle } from "react-native";
export type TextareaProps = Omit<RNTextInputProps, "multiline"> & {
    label?: string;
    error?: string;
    helperText?: string;
    showCount?: boolean;
    minHeight?: number;
    rows?: number;
    containerStyle?: ViewStyle;
};
export declare const Textarea: React.ForwardRefExoticComponent<Omit<RNTextInputProps, "multiline"> & {
    label?: string;
    error?: string;
    helperText?: string;
    showCount?: boolean;
    minHeight?: number;
    rows?: number;
    containerStyle?: ViewStyle;
} & React.RefAttributes<RNTextInput>>;
//# sourceMappingURL=Textarea.d.ts.map