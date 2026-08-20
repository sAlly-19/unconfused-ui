import React from "react";
import { ViewStyle } from "react-native";
import { BreadcrumbsProps } from "../Breadcrumbs";
export * from "../Tabs";
export * from "../Breadcrumbs";
export * from "../Sidebar";
export declare const Tab: {
    ({ value: triggerValue, label, style, children }: import("../Tabs").TabsTriggerProps): React.JSX.Element;
    displayName: string;
};
export declare const TabBar: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const TopTabs: {
    ({ value: propValue, defaultValue, onValueChange, variant, style, children, }: import("../Tabs").TabsProps): React.JSX.Element;
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
        ({ value: triggerValue, label, style, children }: import("../Tabs").TabsTriggerProps): React.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ value: contentValue, style, children }: import("../Tabs").TabsContentProps): React.JSX.Element | null;
        displayName: string;
    };
};
export type BottomTabItem = {
    key: string;
    label: string;
    icon: React.ReactNode;
    badge?: number | string;
};
export type BottomTabsProps = {
    items: BottomTabItem[];
    activeKey?: string;
    onSelect?: (key: string) => void;
    style?: ViewStyle;
};
export declare const BottomTabs: {
    ({ items, activeKey, onSelect, style, }: BottomTabsProps): React.JSX.Element;
    displayName: string;
};
export declare const Breadcrumb: {
    ({ items, separator, style }: BreadcrumbsProps): React.JSX.Element;
    displayName: string;
};
export type NavigationBarProps = {
    title?: string;
    subtitle?: string;
    leftAction?: React.ReactNode;
    rightAction?: React.ReactNode;
    style?: ViewStyle;
};
export declare const NavigationBar: {
    ({ title, subtitle, leftAction, rightAction, style, }: NavigationBarProps): React.JSX.Element;
    displayName: string;
};
export declare const AppBar: {
    ({ title, subtitle, leftAction, rightAction, style, }: NavigationBarProps): React.JSX.Element;
    displayName: string;
};
export type NavigationRailItem = {
    key: string;
    label: string;
    icon: React.ReactNode;
};
export type NavigationRailProps = {
    items: NavigationRailItem[];
    activeKey?: string;
    onSelect?: (key: string) => void;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    style?: ViewStyle;
};
export declare const NavigationRail: {
    ({ items, activeKey, onSelect, header, footer, style, }: NavigationRailProps): React.JSX.Element;
    displayName: string;
};
export type NavbarProps = {
    brand: React.ReactNode;
    links?: {
        label: string;
        href?: string;
        active?: boolean;
        onPress?: () => void;
    }[];
    searchSlot?: React.ReactNode;
    actions?: React.ReactNode;
    style?: ViewStyle;
};
export declare const Navbar: {
    ({ brand, links, searchSlot, actions, style }: NavbarProps): React.JSX.Element;
    displayName: string;
};
export type HeaderProps = {
    breadcrumbs?: BreadcrumbsProps["items"];
    title: string;
    description?: string;
    badge?: React.ReactNode;
    actions?: React.ReactNode;
    style?: ViewStyle;
};
export declare const Header: {
    ({ breadcrumbs, title, description, badge, actions, style, }: HeaderProps): React.JSX.Element;
    displayName: string;
};
export type ToolbarProps = {
    children: React.ReactNode;
    style?: ViewStyle;
};
export declare const Toolbar: {
    ({ children, style }: ToolbarProps): React.JSX.Element;
    displayName: string;
};
export type PaginationProps = {
    page: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
    showPageNumbers?: boolean;
    style?: ViewStyle;
};
export declare const Pagination: {
    ({ page, totalPages, onPageChange, showPageNumbers, style, }: PaginationProps): React.JSX.Element;
    displayName: string;
};
export type StepItem = {
    title: string;
    description?: string;
};
export type StepperProps = {
    steps?: StepItem[];
    currentStep: number;
    totalSteps?: number;
    onStepPress?: (step: number) => void;
    style?: ViewStyle;
};
export declare const Stepper: {
    ({ steps, currentStep, totalSteps, onStepPress, style, }: StepperProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=NavigationUI.d.ts.map