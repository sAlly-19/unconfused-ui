import React from "react";
import { ViewStyle } from "react-native";
import { Box, HStack, Inline, Stack, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";
import { Skeleton, SkeletonProps } from "./Skeleton";

export * from "./Skeleton";

// 1. SkeletonText (Multi-line text skeleton)
export type SkeletonTextProps = SkeletonProps & {
  lines?: number;
  gap?: number;
};

export const SkeletonText = ({ lines = 3, gap = 8, height = 12, style }: SkeletonTextProps) => (
  <VStack gap={gap as any} style={style}>
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton
        key={index}
        height={height}
        width={index === 0 ? "100%" : index === lines - 1 ? "60%" : "85%"}
        radius={4}
      />
    ))}
  </VStack>
);
SkeletonText.displayName = "SkeletonText";

// 2. SkeletonAvatar (Circular avatar skeleton)
export type SkeletonAvatarProps = {
  size?: number;
  style?: ViewStyle;
};

export const SkeletonAvatar = ({ size = 44, style }: SkeletonAvatarProps) => (
  <Skeleton width={size} height={size} radius={size / 2} style={style} />
);
SkeletonAvatar.displayName = "SkeletonAvatar";

// 3. SkeletonCard (Rich compound skeleton card)
export type SkeletonCardProps = {
  hasAvatar?: boolean;
  style?: ViewStyle;
};

export const SkeletonCard = ({ hasAvatar = true, style }: SkeletonCardProps) => {
  const { baseTokens } = useTheme();
  return (
    <Box
      style={[
        {
          padding: 18,
          borderRadius: 16,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.8),
          borderWidth: 1,
          borderColor: withAlpha(baseTokens.colors.white, 0.08),
        },
        style,
      ]}
    >
      <VStack gap={3}>
        <Inline align="center" gap={3}>
          {hasAvatar && <SkeletonAvatar size={40} />}
          <VStack gap={1} style={{ flex: 1 }}>
            <Skeleton height={14} width="55%" radius={4} />
            <Skeleton height={10} width="35%" radius={4} />
          </VStack>
        </Inline>

        <SkeletonText lines={3} height={10} />

        <Inline justify="space-between" align="center" style={{ marginTop: 4 }}>
          <Skeleton height={18} width={64} radius={6} />
          <Skeleton height={24} width={80} radius={6} />
        </Inline>
      </VStack>
    </Box>
  );
};
SkeletonCard.displayName = "SkeletonCard";

// 4. SkeletonTableRow (Table row skeleton)
export type SkeletonTableRowProps = {
  columns?: number;
  height?: number;
  style?: ViewStyle;
};

export const SkeletonTableRow = ({ columns = 4, height = 16, style }: SkeletonTableRowProps) => {
  const { baseTokens } = useTheme();
  return (
    <Inline
      align="center"
      justify="space-between"
      style={[{ paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: withAlpha(baseTokens.colors.white, 0.05) }, style]}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <Skeleton key={index} height={height} width={`${80 / columns}%` as any} radius={4} />
      ))}
    </Inline>
  );
};
SkeletonTableRow.displayName = "SkeletonTableRow";

// Compound export
export const SkeletonCompound = Object.assign(Skeleton, {
  Text: SkeletonText,
  Avatar: SkeletonAvatar,
  Card: SkeletonCard,
  TableRow: SkeletonTableRow,
});

export const Shimmer = SkeletonCompound;
