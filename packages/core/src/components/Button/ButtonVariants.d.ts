import React from "react";
import { ViewStyle } from "react-native";
import { ButtonProps } from "./Button";
export type ButtonGroupProps = {
    attached?: boolean;
    orientation?: "horizontal" | "vertical";
    gap?: number;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const ButtonGroup: {
    ({ attached, orientation, gap, style, children, }: ButtonGroupProps): React.JSX.Element;
    displayName: string;
};
export type FloatingActionButtonProps = ButtonProps & {
    label?: string;
    icon?: React.ReactNode;
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
};
export declare const FloatingActionButton: {
    ({ label, icon, position, style, children, ...rest }: FloatingActionButtonProps): React.JSX.Element;
    displayName: string;
};
export type LinkButtonProps = ButtonProps & {
    underline?: boolean;
};
export declare const LinkButton: {
    ({ underline, style, children, ...rest }: LinkButtonProps): React.JSX.Element;
    displayName: string;
};
export type CloseButtonProps = Omit<ButtonProps, "children"> & {
    size?: "sm" | "md" | "lg";
};
export declare const CloseButton: {
    ({ size, style, ...rest }: CloseButtonProps): React.JSX.Element;
    displayName: string;
};
export type BackButtonProps = Omit<ButtonProps, "children"> & {
    label?: string;
    showLabel?: boolean;
};
export declare const BackButton: {
    ({ label, showLabel, style, ...rest }: BackButtonProps): React.JSX.Element;
    displayName: string;
};
export type SubmitButtonProps = ButtonProps & {
    submitting?: boolean;
};
export declare const SubmitButton: {
    ({ submitting, loading, fullWidth, children, ...rest }: SubmitButtonProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ButtonVariants.d.ts.map