import React, { createContext, useContext, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Box, Pressable, Stack, Text } from "@unconfused-ui/primitives";
import { createSlotRecipe } from "@unconfused-ui/recipes";
import { useTheme } from "@unconfused-ui/theme";

const getAccordionRecipe = (semanticColors: any) =>
  createSlotRecipe({
    slots: ["root", "item", "trigger", "title", "indicator", "content"],
    base: {
      root: {
        gap: 8,
      },
      item: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.08)",
        backgroundColor: semanticColors.surface,
        overflow: "hidden",
      },
      trigger: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      title: {
        fontSize: 15,
        fontWeight: "600",
        color: semanticColors.foreground,
      },
      indicator: {
        fontSize: 12,
        color: semanticColors.foregroundMuted,
      },
      content: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 4,
        borderTopWidth: 1,
        borderTopColor: "rgba(255, 255, 255, 0.05)",
      },
    },
    variants: {
      variant: {
        default: {
          item: {
            backgroundColor: semanticColors.surface,
            borderColor: "rgba(255, 255, 255, 0.08)",
          },
        },
        bordered: {
          item: {
            backgroundColor: "transparent",
            borderColor: semanticColors.border,
          },
        },
        subtle: {
          item: {
            backgroundColor: semanticColors.surfaceSubtle,
            borderColor: semanticColors.borderSubtle,
          },
        },
      },
    },
    defaultVariants: {
      variant: "default",
    },
  });

type AccordionContextValue = {
  expandedItems: string[];
  toggleItem: (itemValue: string) => void;
  styles: Record<string, any[]>;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

export type AccordionProps = {
  type?: "single" | "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  variant?: "default" | "bordered" | "subtle";
  style?: ViewStyle;
  children: React.ReactNode;
};

export const AccordionRoot = ({
  type = "single",
  value: propValue,
  defaultValue = [],
  onValueChange,
  variant = "default",
  style,
  children,
}: AccordionProps) => {
  const { semanticColors } = useTheme();
  const [expandedItems, setExpandedItems] = useControllableState<string[]>({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  const recipe = getAccordionRecipe(semanticColors);
  const styles = useMemo(() => recipe({ variant }), [recipe, variant]);

  const toggleItem = (itemValue: string) => {
    if (type === "single") {
      setExpandedItems(expandedItems.includes(itemValue) ? [] : [itemValue]);
    } else {
      setExpandedItems(
        expandedItems.includes(itemValue)
          ? expandedItems.filter((i) => i !== itemValue)
          : [...expandedItems, itemValue]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ expandedItems, toggleItem, styles }}>
      <Stack style={[styles.root, style]}>{children}</Stack>
    </AccordionContext.Provider>
  );
};
AccordionRoot.displayName = "Accordion";

type AccordionItemContextValue = {
  value: string;
  isExpanded: boolean;
};

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

export type AccordionItemProps = {
  value: string;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const AccordionItem = ({ value, style, children }: AccordionItemProps) => {
  const context = useContext(AccordionContext);
  const { semanticColors } = useTheme();

  if (!context) {
    throw new Error("<Accordion.Item> must be used within <Accordion>");
  }

  const isExpanded = context.expandedItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isExpanded }}>
      <View
        style={[
          ...context.styles.item,
          isExpanded && { borderColor: semanticColors.borderBold },
          style,
        ]}
      >
        {children}
      </View>
    </AccordionItemContext.Provider>
  );
};
AccordionItem.displayName = "Accordion.Item";

export type AccordionTriggerProps = {
  title: string;
  style?: ViewStyle;
};

export const AccordionTrigger = ({ title, style }: AccordionTriggerProps) => {
  const accContext = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);
  const { semanticColors } = useTheme();

  if (!accContext || !itemContext) {
    throw new Error("<Accordion.Trigger> must be used within <Accordion.Item>");
  }

  return (
    <Pressable
      onPress={() => accContext.toggleItem(itemContext.value)}
      accessibilityRole="button"
      accessibilityState={{ expanded: itemContext.isExpanded }}
      style={[
        ...accContext.styles.trigger,
        style,
      ]}
    >
      <Text size="md" weight="semibold" color={semanticColors.foreground} style={accContext.styles.title}>
        {title}
      </Text>
      <Text size="xs" color={semanticColors.foregroundMuted} style={accContext.styles.indicator}>
        {itemContext.isExpanded ? "▲" : "▼"}
      </Text>
    </Pressable>
  );
};
AccordionTrigger.displayName = "Accordion.Trigger";

export const AccordionContent = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => {
  const accContext = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);
  const { semanticColors } = useTheme();

  if (!accContext || !itemContext) {
    throw new Error("<Accordion.Content> must be used within <Accordion.Item>");
  }

  if (!itemContext.isExpanded) {
    return null;
  }

  return (
    <Box
      style={[
        ...accContext.styles.content,
        style,
      ]}
    >
      {typeof children === "string" ? (
        <Text size="sm" color={semanticColors.foregroundMuted} lineHeight="sm">
          {children}
        </Text>
      ) : (
        children
      )}
    </Box>
  );
};
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
