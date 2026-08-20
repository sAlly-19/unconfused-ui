import React from "react";
import { ViewStyle } from "react-native";
export type ColumnDef<T> = {
    header: string;
    accessorKey: keyof T;
    width?: number;
    align?: "left" | "center" | "right";
    sortable?: boolean;
    cell?: (props: {
        value: any;
        row: T;
        index: number;
    }) => React.ReactNode;
};
export type DataTableProps<T> = {
    columns: ColumnDef<T>[];
    data: T[];
    rowHeight?: number;
    keyExtractor?: (item: T, index: number) => string;
    sortColumn?: keyof T;
    sortDirection?: "asc" | "desc";
    onSort?: (column: keyof T, direction: "asc" | "desc") => void;
    selectedKeys?: string[];
    onRowSelect?: (item: T, index: number) => void;
    emptyText?: string;
    maxHeight?: number;
    virtualizeColumns?: boolean;
    style?: ViewStyle;
};
export declare function DataTable<T extends Record<string, any>>({ columns, data, rowHeight, keyExtractor, sortColumn, sortDirection, onSort, selectedKeys, onRowSelect, emptyText, maxHeight, virtualizeColumns, style, }: DataTableProps<T>): React.JSX.Element;
export declare namespace DataTable {
    var displayName: string;
}
//# sourceMappingURL=DataTable.d.ts.map