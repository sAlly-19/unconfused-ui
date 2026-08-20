"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = DataTable;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const primitives_1 = require("@unconfused-ui/primitives");
const theme_1 = require("@unconfused-ui/theme");
const tokens_1 = require("@unconfused-ui/tokens");
function DataTable({ columns, data, rowHeight = 48, keyExtractor = (_, index) => String(index), sortColumn, sortDirection = "asc", onSort, selectedKeys = [], onRowSelect, emptyText = "Nenhum registro encontrado.", maxHeight = 480, virtualizeColumns = false, style, }) {
    const { semanticColors } = (0, theme_1.useTheme)();
    const [scrollX, setScrollX] = (0, react_1.useState)(0);
    const [viewportWidth, setViewportWidth] = (0, react_1.useState)(800);
    // Calculate total table width and column offset map
    const { totalWidth, columnOffsets } = (0, react_1.useMemo)(() => {
        let offset = 0;
        const offsets = [];
        for (const col of columns) {
            offsets.push(offset);
            offset += col.width ?? 140;
        }
        return { totalWidth: offset, columnOffsets: offsets };
    }, [columns]);
    // Compute visible column window slice for horizontal virtualization
    const visibleColumnIndices = (0, react_1.useMemo)(() => {
        if (!virtualizeColumns && columns.length < 25) {
            return columns.map((_, i) => i);
        }
        const buffer = 300; // px buffer
        const minX = Math.max(0, scrollX - buffer);
        const maxX = scrollX + viewportWidth + buffer;
        const indices = [];
        for (let i = 0; i < columns.length; i++) {
            const colStart = columnOffsets[i];
            const colEnd = colStart + (columns[i].width ?? 140);
            if (colEnd >= minX && colStart <= maxX) {
                indices.push(i);
            }
        }
        return indices.length > 0 ? indices : columns.map((_, i) => i);
    }, [virtualizeColumns, columns, columnOffsets, scrollX, viewportWidth]);
    // Fixed vertical layout calculation for O(1) virtual scrolling
    const getItemLayout = (0, react_1.useCallback)((_, index) => ({
        length: rowHeight,
        offset: rowHeight * index,
        index,
    }), [rowHeight]);
    const handleHeaderPress = (col) => {
        if (!col.sortable || !onSort)
            return;
        const nextDir = sortColumn === col.accessorKey && sortDirection === "asc" ? "desc" : "asc";
        onSort(col.accessorKey, nextDir);
    };
    const handleHorizontalScroll = (0, react_1.useCallback)((e) => {
        const x = e.nativeEvent.contentOffset.x;
        setScrollX(x);
    }, []);
    const renderRow = (0, react_1.useCallback)(({ item, index }) => {
        const isSelected = selectedKeys.includes(keyExtractor(item, index));
        return ((0, jsx_runtime_1.jsx)(primitives_1.Pressable, { onPress: () => onRowSelect?.(item, index), disabled: !onRowSelect, style: {
                height: rowHeight,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 16,
                borderBottomWidth: index === data.length - 1 ? 0 : 1,
                borderBottomColor: semanticColors.borderSubtle,
                backgroundColor: isSelected
                    ? (0, tokens_1.withAlpha)(semanticColors.primary, 0.12)
                    : index % 2 === 1
                        ? (0, tokens_1.withAlpha)(semanticColors.foreground, 0.02)
                        : "transparent",
            }, children: columns.map((col, colIndex) => {
                const isVisible = visibleColumnIndices.includes(colIndex);
                const val = item[col.accessorKey];
                const align = col.align ?? "left";
                const colWidth = col.width ?? 140;
                if (!isVisible) {
                    return (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { width: colWidth } }, colIndex);
                }
                return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: {
                        width: colWidth,
                        alignItems: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
                        justifyContent: "center",
                    }, children: col.cell ? (col.cell({ value: val, row: item, index })) : ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foreground, numberOfLines: 1, children: val !== undefined && val !== null ? String(val) : "—" })) }, colIndex));
            }) }));
    }, [columns, visibleColumnIndices, data.length, onRowSelect, rowHeight, selectedKeys, keyExtractor, semanticColors]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { onLayout: (e) => setViewportWidth(e.nativeEvent.layout.width), style: [
            {
                borderRadius: 14,
                borderWidth: 1,
                borderColor: semanticColors.border,
                overflow: "hidden",
                backgroundColor: semanticColors.surface,
            },
            style,
        ], children: (0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, scrollEventThrottle: 16, onScroll: handleHorizontalScroll, children: (0, jsx_runtime_1.jsxs)(primitives_1.Box, { style: { minWidth: totalWidth }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Inline, { style: {
                            backgroundColor: semanticColors.surfaceSubtle,
                            paddingVertical: 12,
                            paddingHorizontal: 16,
                            borderBottomWidth: 1,
                            borderBottomColor: semanticColors.border,
                        }, children: columns.map((col, idx) => {
                            const isSorted = sortColumn === col.accessorKey;
                            const align = col.align ?? "left";
                            return ((0, jsx_runtime_1.jsxs)(primitives_1.Pressable, { onPress: () => handleHeaderPress(col), disabled: !col.sortable, style: {
                                    width: col.width ?? 140,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
                                    gap: 6,
                                }, children: [(0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", weight: "bold", color: isSorted ? semanticColors.primary : semanticColors.foregroundMuted, style: { textTransform: "uppercase", letterSpacing: 1 }, children: col.header }), col.sortable && isSorted && ((0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "xs", color: semanticColors.primary, children: sortDirection === "asc" ? "▲" : "▼" }))] }, idx));
                        }) }), data.length === 0 ? ((0, jsx_runtime_1.jsx)(primitives_1.Box, { style: { padding: 24, alignItems: "center", justifyContent: "center" }, children: (0, jsx_runtime_1.jsx)(primitives_1.Text, { size: "sm", color: semanticColors.foregroundMuted, children: emptyText }) })) : ((0, jsx_runtime_1.jsx)(react_native_1.FlatList, { data: data, renderItem: renderRow, keyExtractor: keyExtractor, getItemLayout: getItemLayout, initialNumToRender: 15, maxToRenderPerBatch: 20, windowSize: 5, removeClippedSubviews: react_native_1.Platform.OS !== "web", style: { maxHeight }, showsVerticalScrollIndicator: true }))] }) }) }));
}
DataTable.displayName = "DataTable";
