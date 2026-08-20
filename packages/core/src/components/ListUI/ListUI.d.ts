import React from "react";
import { FlatListProps as RNFlatListProps, SectionListProps as RNSectionListProps, ViewStyle } from "react-native";
import { BoxProps } from "@unconfused-ui/primitives";
export type ListItemProps = {
    title: string;
    subtitle?: string;
    leftIcon?: React.ReactNode;
    rightAction?: React.ReactNode;
    onPress?: () => void;
    showChevron?: boolean;
    selected?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
};
export declare const ListItem: {
    ({ title, subtitle, leftIcon, rightAction, onPress, showChevron, selected, disabled, style, }: ListItemProps): React.JSX.Element;
    displayName: string;
};
export declare const ListHeader: {
    ({ title, count }: {
        title: string;
        count?: number;
    }): React.JSX.Element;
    displayName: string;
};
export declare const ListFooter: {
    ({ children, style }: {
        children: React.ReactNode;
        style?: ViewStyle;
    }): React.JSX.Element;
    displayName: string;
};
export declare const ListSection: {
    ({ title, count, children, }: {
        title: string;
        count?: number;
        children: React.ReactNode;
    }): React.JSX.Element;
    displayName: string;
};
export declare const List: (({ children, style }: {
    children: React.ReactNode;
    style?: ViewStyle;
}) => React.JSX.Element) & {
    Item: {
        ({ title, subtitle, leftIcon, rightAction, onPress, showChevron, selected, disabled, style, }: ListItemProps): React.JSX.Element;
        displayName: string;
    };
    Header: {
        ({ title, count }: {
            title: string;
            count?: number;
        }): React.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children, style }: {
            children: React.ReactNode;
            style?: ViewStyle;
        }): React.JSX.Element;
        displayName: string;
    };
    Section: {
        ({ title, count, children, }: {
            title: string;
            count?: number;
            children: React.ReactNode;
        }): React.JSX.Element;
        displayName: string;
    };
};
export declare function FlatList<T>(props: RNFlatListProps<T>): React.JSX.Element;
export declare function SectionList<T, SectionT>(props: RNSectionListProps<T, SectionT>): React.JSX.Element;
export type VirtualListProps<T> = Omit<RNFlatListProps<T>, "getItemLayout"> & {
    itemHeight?: number;
};
export declare function VirtualList<T>({ itemHeight, ...props }: VirtualListProps<T>): React.JSX.Element;
export type GridProps = {
    columns?: number;
    gap?: number;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const Grid: {
    ({ columns, gap, style, children }: GridProps): React.JSX.Element;
    displayName: string;
};
export declare const GridItem: {
    (props: BoxProps): React.JSX.Element;
    displayName: string;
};
export type TableProps = {
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const Table: {
    ({ style, children }: TableProps): React.JSX.Element;
    displayName: string;
};
export type TableRowProps = {
    isHeader?: boolean;
    zebra?: boolean;
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const TableRow: {
    ({ isHeader, zebra, style, children }: TableRowProps): React.JSX.Element;
    displayName: string;
};
export type TableHeaderProps = {
    label: string;
    flex?: number;
    align?: "left" | "center" | "right";
    style?: ViewStyle;
};
export declare const TableHeader: {
    ({ label, flex, align, style }: TableHeaderProps): React.JSX.Element;
    displayName: string;
};
export type TableCellProps = {
    flex?: number;
    align?: "left" | "center" | "right";
    style?: ViewStyle;
    children: React.ReactNode;
};
export declare const TableCell: {
    ({ flex, align, style, children }: TableCellProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ListUI.d.ts.map