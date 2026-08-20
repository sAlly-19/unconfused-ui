import React from "react";
import { ViewStyle } from "react-native";
type TabsContextValue = {
    value: string;
    setValue: (value: string) => void;
    styles: Record<string, any[]>;
};
export declare function useTabsContext(): TabsContextValue;
export type TabsProps = {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    variant?: "default" | "pills";
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const TabsRoot: {
    ({ value: propValue, defaultValue, onValueChange, variant, style, children, }: TabsProps): React.JSX.Element;
    displayName: string;
};
export declare const TabsList: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export type TabsTriggerProps = {
    value: string;
    label?: string;
    style?: ViewStyle;
    children?: React.ReactNode;
};
export declare const TabsTrigger: {
    ({ value: triggerValue, label, style, children }: TabsTriggerProps): React.JSX.Element;
    displayName: string;
};
export type TabsContentProps = {
    value: string;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const TabsContent: {
    ({ value: contentValue, style, children }: TabsContentProps): React.JSX.Element | null;
    displayName: string;
};
export declare const Tabs: {
    ({ value: propValue, defaultValue, onValueChange, variant, style, children, }: TabsProps): React.JSX.Element;
    displayName: string;
} & {
    List: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
    Trigger: {
        ({ value: triggerValue, label, style, children }: TabsTriggerProps): React.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ value: contentValue, style, children }: TabsContentProps): React.JSX.Element | null;
        displayName: string;
    };
};
export {};
//# sourceMappingURL=Tabs.d.ts.map