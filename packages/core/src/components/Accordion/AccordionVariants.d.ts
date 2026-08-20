import React from "react";
import { ViewStyle } from "react-native";
import { AccordionItemProps, AccordionProps } from "./Accordion";
export * from "./Accordion";
export type CollapsibleProps = {
    title: string;
    subtitle?: string;
    defaultOpen?: boolean;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const Collapsible: {
    ({ title, subtitle, defaultOpen, style, children, }: CollapsibleProps): React.JSX.Element;
    displayName: string;
};
export declare const Disclosure: {
    ({ title, subtitle, defaultOpen, style, children, }: CollapsibleProps): React.JSX.Element;
    displayName: string;
};
export declare const DisclosureGroup: {
    ({ type, value: propValue, defaultValue, onValueChange, variant, style, children, }: AccordionProps): React.JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ value, style, children }: AccordionItemProps): React.JSX.Element;
        displayName: string;
    };
    Trigger: {
        ({ title, style }: import("./Accordion").AccordionTriggerProps): React.JSX.Element;
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
export type ExpandableProps = {
    text: string;
    limit?: number;
    style?: ViewStyle;
};
export declare const Expandable: {
    ({ text, limit, style }: ExpandableProps): React.JSX.Element;
    displayName: string;
};
export type TreeItemProps = {
    label: string;
    icon?: string;
    depth?: number;
    defaultOpen?: boolean;
    children?: React.ReactNode;
    onPress?: () => void;
    style?: ViewStyle;
};
export declare const TreeItem: {
    ({ label, icon, depth, defaultOpen, children, onPress, style, }: TreeItemProps): React.JSX.Element;
    displayName: string;
};
export declare const Tree: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=AccordionVariants.d.ts.map