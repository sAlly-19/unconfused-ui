import React from "react";
import { ViewStyle } from "react-native";
import { InputProps } from "./Input";
export * from "../Textarea";
export type SearchInputProps = InputProps & {
    onSearch?: (query: string) => void;
};
export declare const SearchInput: {
    ({ placeholder, clearable, leftIcon, ...rest }: SearchInputProps): React.JSX.Element;
    displayName: string;
};
export type PasswordInputProps = InputProps & {
    showStrengthMeter?: boolean;
};
export declare const PasswordInput: {
    ({ placeholder, showStrengthMeter, value, onChangeText, ...rest }: PasswordInputProps): React.JSX.Element;
    displayName: string;
};
export type NumberInputProps = Omit<InputProps, "value" | "onChangeText"> & {
    value?: number;
    onChangeValue?: (val: number) => void;
    min?: number;
    max?: number;
    step?: number;
};
export declare const NumberInput: {
    ({ value, onChangeValue, min, max, step, ...rest }: NumberInputProps): React.JSX.Element;
    displayName: string;
};
export type EmailInputProps = InputProps;
export declare const EmailInput: {
    ({ placeholder, leftIcon, ...props }: EmailInputProps): React.JSX.Element;
    displayName: string;
};
export type PhoneInputProps = InputProps & {
    countryPrefix?: string;
};
export declare const PhoneInput: {
    ({ countryPrefix, placeholder, leftIcon, ...props }: PhoneInputProps): React.JSX.Element;
    displayName: string;
};
export type OTPInputProps = {
    length?: number;
    value?: string;
    onChangeText?: (text: string) => void;
    mask?: boolean;
    style?: ViewStyle;
};
export declare const OTPInput: {
    ({ length, value, mask, onChangeText, style, }: OTPInputProps): React.JSX.Element;
    displayName: string;
};
export declare const PinInput: {
    ({ length, ...props }: OTPInputProps): React.JSX.Element;
    displayName: string;
};
export declare const CodeInput: {
    ({ length, ...props }: OTPInputProps): React.JSX.Element;
    displayName: string;
};
export type CurrencyInputProps = InputProps & {
    currencySymbol?: string;
};
export declare const CurrencyInput: {
    ({ currencySymbol, placeholder, ...props }: CurrencyInputProps): React.JSX.Element;
    displayName: string;
};
export type MaskedInputProps = InputProps & {
    mask?: string;
};
export declare const MaskedInput: {
    ({ mask, placeholder, ...props }: MaskedInputProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=InputVariants.d.ts.map