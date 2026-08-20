import React from "react";
import { ViewStyle } from "react-native";
import { Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

export type BreadcrumbItem = {
  label: string;
  onPress?: () => void;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  separator?: string;
  style?: ViewStyle;
};

export const Breadcrumbs = ({ items, separator = "/", style }: BreadcrumbsProps) => {
  const { semanticColors } = useTheme();

  return (
    <Inline align="center" gap={2} style={style}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Inline key={index} align="center" gap={2}>
            <Pressable
              onPress={item.onPress}
              disabled={isLast || !item.onPress}
              accessibilityRole="button"
            >
              <Text
                size="xs"
                weight={isLast ? "bold" : "medium"}
                color={isLast ? semanticColors.foreground : semanticColors.foregroundMuted}
              >
                {item.label}
              </Text>
            </Pressable>

            {!isLast && (
              <Text size="xs" color={semanticColors.foregroundSubtle}>
                {separator}
              </Text>
            )}
          </Inline>
        );
      })}
    </Inline>
  );
};

Breadcrumbs.displayName = "Breadcrumbs";
