import React, { createContext, useContext, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Box, Inline, Pressable, Stack, Text } from "@unconfused-ui/primitives";
import { createSlotRecipe } from "@unconfused-ui/recipes";
import { useTheme } from "@unconfused-ui/theme";

const getTabsRecipe = (semanticColors: any) =>
  createSlotRecipe({
    slots: ["root", "list", "trigger", "content"],
    base: {
      root: {
        gap: 12,
      },
      list: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        padding: 4,
        borderRadius: 10,
        backgroundColor: semanticColors.surfaceSubtle,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.06)",
      },
      trigger: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      },
      content: {
        paddingTop: 4,
      },
    },
    variants: {
      variant: {
        default: {
          list: {
            backgroundColor: semanticColors.surfaceSubtle,
          },
        },
        pills: {
          list: {
            backgroundColor: "transparent",
            borderWidth: 0,
            padding: 0,
          },
        },
      },
    },
    defaultVariants: {
      variant: "default",
    },
  });

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
  styles: Record<string, any[]>;
};

const TabsContext = createContext<TabsContextValue | null>(null);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("<Tabs> subcomponents must be used within <Tabs>");
  }
  return context;
}

export type TabsProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: "default" | "pills";
  style?: ViewStyle;
  children: React.ReactNode;
};

export const TabsRoot = ({
  value: propValue,
  defaultValue = "",
  onValueChange,
  variant = "default",
  style,
  children,
}: TabsProps) => {
  const { semanticColors } = useTheme();
  const [value, setValue] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  const recipe = getTabsRecipe(semanticColors);
  const styles = useMemo(() => recipe({ variant }), [recipe, variant]);

  return (
    <TabsContext.Provider value={{ value, setValue, styles }}>
      <Stack style={[styles.root, style]}>{children}</Stack>
    </TabsContext.Provider>
  );
};
TabsRoot.displayName = "Tabs";

export const TabsList = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => {
  const { styles } = useTabsContext();
  return (
    <Inline style={[styles.list, style]}>
      {children}
    </Inline>
  );
};
TabsList.displayName = "Tabs.List";

export type TabsTriggerProps = {
  value: string;
  label?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
};

export const TabsTrigger = ({ value: triggerValue, label, style, children }: TabsTriggerProps) => {
  const { value, setValue, styles } = useTabsContext();
  const { semanticColors } = useTheme();

  const isSelected = value === triggerValue;

  const activeTriggerStyle: ViewStyle = {
    backgroundColor: isSelected ? semanticColors.surface : "transparent",
    borderWidth: isSelected ? 1 : 0,
    borderColor: isSelected ? "rgba(255, 255, 255, 0.1)" : "transparent",
    shadowColor: isSelected ? "#000" : "transparent",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: isSelected ? 0.15 : 0,
    shadowRadius: 3,
    elevation: isSelected ? 1 : 0,
  };

  return (
    <Pressable
      onPress={() => setValue(triggerValue)}
      accessibilityRole="tab"
      accessibilityState={{ selected: isSelected }}
      accessibilityLabel={typeof label === "string" ? label : undefined}
      style={[...styles.trigger, activeTriggerStyle, style]}
    >
      {label ? (
        <Text
          size="sm"
          weight={isSelected ? "bold" : "medium"}
          color={isSelected ? semanticColors.foreground : semanticColors.foregroundMuted}
        >
          {label}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};
TabsTrigger.displayName = "Tabs.Trigger";

export type TabsContentProps = {
  value: string;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const TabsContent = ({ value: contentValue, style, children }: TabsContentProps) => {
  const { value, styles } = useTabsContext();

  if (value !== contentValue) {
    return null;
  }

  return <Box style={[styles.content, style]}>{children}</Box>;
};
TabsContent.displayName = "Tabs.Content";

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
