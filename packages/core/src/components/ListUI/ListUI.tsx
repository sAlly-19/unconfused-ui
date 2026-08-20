import React from "react";
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  ScrollView,
  SectionList as RNSectionList,
  SectionListProps as RNSectionListProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Box, BoxProps, HStack, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

// 1. ListItem
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

export const ListItem = ({
  title,
  subtitle,
  leftIcon,
  rightAction,
  onPress,
  showChevron = false,
  selected = false,
  disabled = false,
  style,
}: ListItemProps) => {
  const { semanticColors, baseTokens } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || !onPress}
      accessibilityRole="button"
      accessibilityState={{ selected, disabled }}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 14,
          paddingHorizontal: 16,
          backgroundColor: selected ? withAlpha(baseTokens.colors.brand[500], 0.15) : "transparent",
          borderBottomWidth: 1,
          borderBottomColor: withAlpha(baseTokens.colors.white, 0.06),
          minHeight: 52,
          opacity: disabled ? 0.4 : 1,
        },
        style,
      ]}
    >
      <Inline align="center" gap={3} style={{ flex: 1 }}>
        {leftIcon}
        <VStack gap={0.5} style={{ flex: 1 }}>
          <Text size="sm" weight="semibold" color={semanticColors.foreground}>
            {title}
          </Text>
          {subtitle && (
            <Text size="xs" color={semanticColors.foregroundMuted}>
              {subtitle}
            </Text>
          )}
        </VStack>
      </Inline>

      <Inline align="center" gap={2}>
        {rightAction}
        {showChevron && (
          <Text size="xs" color={semanticColors.foregroundSubtle}>
            ›
          </Text>
        )}
      </Inline>
    </Pressable>
  );
};
ListItem.displayName = "ListItem";

// 2. ListHeader, ListFooter, ListSection
export const ListHeader = ({ title, count }: { title: string; count?: number }) => {
  const { semanticColors, baseTokens } = useTheme();
  return (
    <Inline
      justify="space-between"
      align="center"
      style={{
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: withAlpha(baseTokens.colors.white, 0.03),
        borderBottomWidth: 1,
        borderBottomColor: withAlpha(baseTokens.colors.white, 0.08),
      }}
    >
      <Text
        size="xs"
        weight="bold"
        style={{ textTransform: "uppercase", letterSpacing: 1.2 }}
        color={semanticColors.primary}
      >
        {title}
      </Text>
      {count !== undefined && (
        <Text size="xs" color={semanticColors.foregroundSubtle} weight="bold">
          {count}
        </Text>
      )}
    </Inline>
  );
};
ListHeader.displayName = "ListHeader";

export const ListFooter = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => {
  const { baseTokens } = useTheme();

  return (
    <Box style={[{ padding: 14, backgroundColor: withAlpha(baseTokens.colors.white, 0.02) }, style]}>
      {typeof children === "string" ? (
        <Text size="xs" color={withAlpha(baseTokens.colors.white, 0.5)}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Box>
  );
};
ListFooter.displayName = "ListFooter";

export const ListSection = ({
  title,
  count,
  children,
}: {
  title: string;
  count?: number;
  children: React.ReactNode;
}) => {
  const { baseTokens } = useTheme();

  return (
    <VStack gap={0} style={{ borderBottomWidth: 1, borderBottomColor: withAlpha(baseTokens.colors.white, 0.08) }}>
      <ListHeader title={title} count={count} />
      {children}
    </VStack>
  );
};
ListSection.displayName = "ListSection";

// 3. List
export const List = Object.assign(
  ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => {
    const { baseTokens } = useTheme();

    return (
      <Box
        style={[
          {
            borderRadius: 14,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: withAlpha(baseTokens.colors.white, 0.1),
            backgroundColor: withAlpha(baseTokens.colors.black, 0.8),
          },
          style,
        ]}
      >
        {children}
      </Box>
    );
  },
  {
    Item: ListItem,
    Header: ListHeader,
    Footer: ListFooter,
    Section: ListSection,
  }
);

// 4. FlatList & SectionList
export function FlatList<T>(props: RNFlatListProps<T>): React.JSX.Element {
  return <RNFlatList showsVerticalScrollIndicator={false} {...props} />;
}

export function SectionList<T, SectionT>(props: RNSectionListProps<T, SectionT>): React.JSX.Element {
  return <RNSectionList showsVerticalScrollIndicator={false} {...props} />;
}

export type VirtualListProps<T> = Omit<RNFlatListProps<T>, "getItemLayout"> & {
  itemHeight?: number;
};

export function VirtualList<T>({ itemHeight, ...props }: VirtualListProps<T>): React.JSX.Element {
  const getItemLayout = itemHeight
    ? (_: any, index: number) => ({
        length: itemHeight,
        offset: itemHeight * index,
        index,
      })
    : undefined;

  return (
    <RNFlatList
      showsVerticalScrollIndicator={false}
      initialNumToRender={props.initialNumToRender ?? 15}
      maxToRenderPerBatch={props.maxToRenderPerBatch ?? 20}
      windowSize={props.windowSize ?? 5}
      getItemLayout={getItemLayout}
      {...props}
    />
  );
}

// 5. Grid & GridItem
export type GridProps = {
  columns?: number;
  gap?: number;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Grid = ({ columns = 2, gap = 12, style, children }: GridProps): React.JSX.Element => (
  <Inline gap={gap} wrap style={style}>
    {React.Children.map(children, (child) => (
      <Box style={{ width: `${100 / columns - 2.5}%` }}>{child}</Box>
    ))}
  </Inline>
);
Grid.displayName = "Grid";

export const GridItem = (props: BoxProps): React.JSX.Element => <Box {...props} />;
GridItem.displayName = "GridItem";

// 6. Table, TableRow, TableCell, TableHeader
export type TableProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Table = ({ style, children }: TableProps) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <Box
      style={[
        {
          minWidth: 560,
          borderRadius: 14,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          backgroundColor: "rgba(16, 18, 30, 0.85)",
        },
        style,
      ]}
    >
      {children}
    </Box>
  </ScrollView>
);
Table.displayName = "Table";

export type TableRowProps = {
  isHeader?: boolean;
  zebra?: boolean;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const TableRow = ({ isHeader = false, zebra = false, style, children }: TableRowProps) => {
  const { semanticColors } = useTheme();

  return (
    <Box
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: isHeader ? 12 : 14,
          paddingHorizontal: 16,
          backgroundColor: isHeader
            ? "rgba(255, 255, 255, 0.05)"
            : zebra
            ? "rgba(255, 255, 255, 0.02)"
            : "transparent",
          borderBottomWidth: 1,
          borderBottomColor: isHeader ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.05)",
        },
        style,
      ]}
    >
      {children}
    </Box>
  );
};
TableRow.displayName = "TableRow";

export type TableHeaderProps = {
  label: string;
  flex?: number;
  align?: "left" | "center" | "right";
  style?: ViewStyle;
};

export const TableHeader = ({ label, flex = 1, align = "left", style }: TableHeaderProps) => {
  const { semanticColors } = useTheme();

  return (
    <Box style={[{ flex, alignItems: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start" }, style]}>
      <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 1.1 }} color={semanticColors.primary}>
        {label}
      </Text>
    </Box>
  );
};
TableHeader.displayName = "TableHeader";

export type TableCellProps = {
  flex?: number;
  align?: "left" | "center" | "right";
  style?: ViewStyle;
  children: React.ReactNode;
};

export const TableCell = ({ flex = 1, align = "left", style, children }: TableCellProps) => (
  <Box style={[{ flex, alignItems: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start" }, style]}>
    {typeof children === "string" ? <Text size="sm">{children}</Text> : children}
  </Box>
);
TableCell.displayName = "TableCell";
