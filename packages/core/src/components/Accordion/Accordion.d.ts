import React from "react";
import { ViewStyle } from "react-native";
export type AccordionProps = {
    type?: "single" | "multiple";
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    variant?: "default" | "bordered" | "subtle";
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const AccordionRoot: {
    ({ type, value: propValue, defaultValue, onValueChange, variant, style, children, }: AccordionProps): React.JSX.Element;
    displayName: string;
};
export type AccordionItemProps = {
    value: string;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const AccordionItem: {
    ({ value, style, children }: AccordionItemProps): React.JSX.Element;
    displayName: string;
};
export type AccordionTriggerProps = {
    title: string;
    style?: ViewStyle;
};
export declare const AccordionTrigger: {
    ({ title, style }: AccordionTriggerProps): React.JSX.Element;
    displayName: string;
};
export declare const AccordionContent: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element | null;
    displayName: string;
};
export declare const Accordion: {
    ({ type, value: propValue, defaultValue, onValueChange, variant, style, children, }: AccordionProps): React.JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ value, style, children }: AccordionItemProps): React.JSX.Element;
        displayName: string;
    };
    Trigger: {
        ({ title, style }: AccordionTriggerProps): React.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element | null;
        displayName: string;
    };
};
//# sourceMappingURL=Accordion.d.ts.map