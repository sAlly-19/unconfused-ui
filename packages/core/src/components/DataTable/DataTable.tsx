import React, { useCallback, useMemo, useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";
import { Box, Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type ColumnDef<T> = {
  header: string;
  accessorKey: keyof T;
  width?: number;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  cell?: (props: { value: any; row: T; index: number }) => React.ReactNode;
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

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  rowHeight = 48,
  keyExtractor = (_, index) => String(index),
  sortColumn,
  sortDirection = "asc",
  onSort,
  selectedKeys = [],
  onRowSelect,
  emptyText = "Nenhum registro encontrado.",
  maxHeight = 480,
  virtualizeColumns = false,
  style,
}: DataTableProps<T>) {
  const { semanticColors } = useTheme();
  const [scrollX, setScrollX] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(800);

  // Calculate total table width and column offset map
  const { totalWidth, columnOffsets } = useMemo(() => {
    let offset = 0;
    const offsets: number[] = [];
    for (const col of columns) {
      offsets.push(offset);
      offset += col.width ?? 140;
    }
    return { totalWidth: offset, columnOffsets: offsets };
  }, [columns]);

  // Compute visible column window slice for horizontal virtualization
  const visibleColumnIndices = useMemo(() => {
    if (!virtualizeColumns && columns.length < 25) {
      return columns.map((_, i) => i);
    }
    const buffer = 300; // px buffer
    const minX = Math.max(0, scrollX - buffer);
    const maxX = scrollX + viewportWidth + buffer;

    const indices: number[] = [];
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
  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: rowHeight,
      offset: rowHeight * index,
      index,
    }),
    [rowHeight]
  );

  const handleHeaderPress = (col: ColumnDef<T>) => {
    if (!col.sortable || !onSort) return;
    const nextDir = sortColumn === col.accessorKey && sortDirection === "asc" ? "desc" : "asc";
    onSort(col.accessorKey, nextDir);
  };

  const handleHorizontalScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    setScrollX(x);
  }, []);

  const renderRow = useCallback(
    ({ item, index }: ListRenderItemInfo<T>) => {
      const isSelected = selectedKeys.includes(keyExtractor(item, index));

      return (
        <Pressable
          onPress={() => onRowSelect?.(item, index)}
          disabled={!onRowSelect}
          style={{
            height: rowHeight,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            borderBottomWidth: index === data.length - 1 ? 0 : 1,
            borderBottomColor: semanticColors.borderSubtle,
            backgroundColor: isSelected
              ? withAlpha(semanticColors.primary, 0.12)
              : index % 2 === 1
              ? withAlpha(semanticColors.foreground, 0.02)
              : "transparent",
          }}
        >
          {columns.map((col, colIndex) => {
            const isVisible = visibleColumnIndices.includes(colIndex);
            const val = item[col.accessorKey];
            const align = col.align ?? "left";
            const colWidth = col.width ?? 140;

            if (!isVisible) {
              return <View key={colIndex} style={{ width: colWidth }} />;
            }

            return (
              <View
                key={colIndex}
                style={{
                  width: colWidth,
                  alignItems: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
                  justifyContent: "center",
                }}
              >
                {col.cell ? (
                  col.cell({ value: val, row: item, index })
                ) : (
                  <Text size="sm" color={semanticColors.foreground} numberOfLines={1}>
                    {val !== undefined && val !== null ? String(val) : "—"}
                  </Text>
                )}
              </View>
            );
          })}
        </Pressable>
      );
    },
    [columns, visibleColumnIndices, data.length, onRowSelect, rowHeight, selectedKeys, keyExtractor, semanticColors]
  );

  return (
    <View
      onLayout={(e) => setViewportWidth(e.nativeEvent.layout.width)}
      style={[
        {
          borderRadius: 14,
          borderWidth: 1,
          borderColor: semanticColors.border,
          overflow: "hidden",
          backgroundColor: semanticColors.surface,
        },
        style,
      ]}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleHorizontalScroll}
      >
        <Box style={{ minWidth: totalWidth }}>
          {/* Table Header */}
          <Inline
            style={{
              backgroundColor: semanticColors.surfaceSubtle,
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderBottomWidth: 1,
              borderBottomColor: semanticColors.border,
            }}
          >
            {columns.map((col, idx) => {
              const isSorted = sortColumn === col.accessorKey;
              const align = col.align ?? "left";

              return (
                <Pressable
                  key={idx}
                  onPress={() => handleHeaderPress(col)}
                  disabled={!col.sortable}
                  style={{
                    width: col.width ?? 140,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
                    gap: 6,
                  }}
                >
                  <Text
                    size="xs"
                    weight="bold"
                    color={isSorted ? semanticColors.primary : semanticColors.foregroundMuted}
                    style={{ textTransform: "uppercase", letterSpacing: 1 }}
                  >
                    {col.header}
                  </Text>
                  {col.sortable && isSorted && (
                    <Text size="xs" color={semanticColors.primary}>
                      {sortDirection === "asc" ? "▲" : "▼"}
                    </Text>
                  )}
                </Pressable>
              );
            })}
          </Inline>

          {/* Virtualized Table Body */}
          {data.length === 0 ? (
            <Box style={{ padding: 24, alignItems: "center", justifyContent: "center" }}>
              <Text size="sm" color={semanticColors.foregroundMuted}>
                {emptyText}
              </Text>
            </Box>
          ) : (
            <FlatList
              data={data}
              renderItem={renderRow}
              keyExtractor={keyExtractor}
              getItemLayout={getItemLayout}
              initialNumToRender={15}
              maxToRenderPerBatch={20}
              windowSize={5}
              removeClippedSubviews={Platform.OS !== "web"}
              style={{ maxHeight }}
              showsVerticalScrollIndicator={true}
            />
          )}
        </Box>
      </ScrollView>
    </View>
  );
}

DataTable.displayName = "DataTable";
