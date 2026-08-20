import React from "react";
import { ViewStyle } from "react-native";
export type BreadcrumbItem = {
    label: string;
    onPress?: () => void;
};
export type BreadcrumbsProps = {
    items: BreadcrumbItem[];
    separator?: string;
    style?: ViewStyle;
};
export declare const Breadcrumbs: {
    ({ items, separator, style }: BreadcrumbsProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Breadcrumbs.d.ts.map