import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Accordion, AccordionItem, AccordionItemProps, AccordionProps } from "./Accordion";

export * from "./Accordion";

// 1. Collapsible (Standalone single collapsible card)
export type CollapsibleProps = {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Collapsible = ({
  title,
  subtitle,
  defaultOpen = false,
  style,
  children,
}: CollapsibleProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const { semanticColors } = useTheme();

  return (
    <Box
      style={[
        {
          borderRadius: 14,
          backgroundColor: semanticColors.surface,
          borderWidth: 1,
          borderColor: open ? semanticColors.borderBold : semanticColors.border,
          overflow: "hidden",
        },
        style,
      ]}
    >
      <Pressable
        onPress={() => setOpen(!open)}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 14,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <VStack gap={0.5}>
          <Text size="sm" weight="semibold" color={semanticColors.foreground}>
            {title}
          </Text>
          {subtitle && (
            <Text size="xs" color={semanticColors.foregroundMuted}>
              {subtitle}
            </Text>
          )}
        </VStack>
        <Text size="xs" color={semanticColors.foregroundMuted} weight="bold">
          {open ? "▲" : "▼"}
        </Text>
      </Pressable>

      {open && (
        <Box
          style={{
            paddingHorizontal: 16,
            paddingBottom: 16,
            paddingTop: 4,
            borderTopWidth: 1,
            borderTopColor: "rgba(255, 255, 255, 0.06)",
          }}
        >
          {typeof children === "string" ? (
            <Text size="xs" color={semanticColors.foregroundMuted} lineHeight="sm">
              {children}
            </Text>
          ) : (
            children
          )}
        </Box>
      )}
    </Box>
  );
};
Collapsible.displayName = "Collapsible";

// 2. Disclosure & DisclosureGroup
export const Disclosure = Collapsible;
export const DisclosureGroup = Accordion;

// 3. Expandable (Text expansion with "Show more / Show less")
export type ExpandableProps = {
  text: string;
  limit?: number;
  style?: ViewStyle;
};

export const Expandable = ({ text, limit = 120, style }: ExpandableProps) => {
  const [expanded, setExpanded] = useState(false);
  const { semanticColors } = useTheme();

  const isOverLimit = text.length > limit;
  const displayed = expanded || !isOverLimit ? text : `${text.substring(0, limit)}...`;

  return (
    <VStack gap={1} style={style}>
      <Text size="sm" color={semanticColors.foreground} lineHeight="sm">
        {displayed}
      </Text>
      {isOverLimit && (
        <Pressable onPress={() => setExpanded(!expanded)}>
          <Text size="xs" weight="bold" color={semanticColors.primary}>
            {expanded ? "Show Less ↑" : "Show More ↓"}
          </Text>
        </Pressable>
      )}
    </VStack>
  );
};
Expandable.displayName = "Expandable";

// 4. Tree & TreeItem (Hierarchical folder tree)
export type TreeItemProps = {
  label: string;
  icon?: string;
  depth?: number;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
};

export const TreeItem = ({
  label,
  icon,
  depth = 0,
  defaultOpen = false,
  children,
  onPress,
  style,
}: TreeItemProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const { semanticColors } = useTheme();
  const hasChildren = Boolean(children);

  return (
    <VStack gap={0.5} style={[{ paddingLeft: depth * 18 }, style]}>
      <Pressable
        onPress={() => {
          if (hasChildren) setOpen(!open);
          onPress?.();
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          paddingVertical: 8,
          paddingHorizontal: 10,
          borderRadius: 8,
        }}
      >
        <Text size="xs" color={semanticColors.foregroundSubtle}>
          {hasChildren ? (open ? "📂" : "📁") : (icon ?? "📄")}
        </Text>
        <Text size="sm" weight={hasChildren ? "semibold" : "regular"} color={semanticColors.foreground}>
          {label}
        </Text>
        {hasChildren && (
          <Text size="xs" color={semanticColors.foregroundSubtle} style={{ fontSize: 10 }}>
            {open ? "▼" : "▶"}
          </Text>
        )}
      </Pressable>

      {hasChildren && open && <VStack gap={0.5}>{children}</VStack>}
    </VStack>
  );
};
TreeItem.displayName = "TreeItem";

export const Tree = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => {
  const { semanticColors } = useTheme();
  return (
    <Box
      style={[
        {
          padding: 12,
          borderRadius: 14,
          backgroundColor: semanticColors.surface,
          borderWidth: 1,
          borderColor: semanticColors.border,
        },
        style,
      ]}
    >
      <VStack gap={1}>{children}</VStack>
    </Box>
  );
};
Tree.displayName = "Tree";
