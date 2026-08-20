import React, { useState } from "react";
import { Modal, ScrollView, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Stack, Text, VStack, FocusTrap } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

// 1. MenuItem
export type MenuItemProps = {
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  onPress?: () => void;
  destructive?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
};

export const MenuItem = ({
  label,
  icon,
  shortcut,
  onPress,
  destructive = false,
  disabled = false,
  style,
}: MenuItemProps) => {
  const { semanticColors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || !onPress}
      accessibilityRole="menuitem"
      accessibilityState={{ disabled }}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: "transparent",
          opacity: disabled ? 0.4 : 1,
        },
        style,
      ]}
    >
      <Inline align="center" gap={3}>
        {icon}
        <Text
          size="sm"
          weight="medium"
          color={destructive ? semanticColors.danger : semanticColors.foreground}
        >
          {label}
        </Text>
      </Inline>

      {shortcut && (
        <Text size="xs" color={semanticColors.foregroundSubtle} weight="bold">
          {shortcut}
        </Text>
      )}
    </Pressable>
  );
};
MenuItem.displayName = "MenuItem";

// 2. MenuGroup
export const MenuGroup = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  const { semanticColors } = useTheme();
  return (
    <Stack gap={1}>
      {title && (
        <Text
          size="xs"
          weight="bold"
          style={{ textTransform: "uppercase", letterSpacing: 1.1, paddingHorizontal: 12, paddingVertical: 4 }}
          color={semanticColors.foregroundMuted}
        >
          {title}
        </Text>
      )}
      {children}
    </Stack>
  );
};
MenuGroup.displayName = "MenuGroup";

// 3. MenuSeparator
export const MenuSeparator = () => {
  const { semanticColors } = useTheme();
  return <Box style={{ height: 1, backgroundColor: "rgba(255, 255, 255, 0.08)", marginVertical: 4 }} />;
};
MenuSeparator.displayName = "MenuSeparator";

// 4. Menu
export const Menu = Object.assign(
  ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
    <Stack
      gap={1}
      style={[
        {
          padding: 6,
          backgroundColor: "rgba(16, 18, 30, 0.95)",
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
        },
        style,
      ]}
    >
      {children}
    </Stack>
  ),
  {
    Item: MenuItem,
    Group: MenuGroup,
    Separator: MenuSeparator,
  }
);

// 5. Dropdown
export type DropdownProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const Dropdown = ({ trigger, children }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const { semanticColors } = useTheme();

  return (
    <Box style={{ position: "relative" }}>
      <Pressable onPress={() => setOpen(!open)}>{trigger}</Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.35)", justifyContent: "center", alignItems: "center" }}
          onPress={() => setOpen(false)}
        >
          <FocusTrap active={open} onRequestClose={() => setOpen(false)}>
            <Pressable onPress={(e) => e.stopPropagation?.()} style={{ width: 240 }}>
              <Menu>{children}</Menu>
            </Pressable>
          </FocusTrap>
        </Pressable>
      </Modal>
    </Box>
  );
};
Dropdown.displayName = "Dropdown";

// 6. CommandMenu & CommandPalette (⌘K Spotlight modal search menu with Fuzzy Match)
export type CommandItem = {
  id: string;
  label: string;
  category?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  onSelect?: () => void;
};

export type CommandPaletteProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  items: CommandItem[];
  placeholder?: string;
};

/**
 * Fuzzy score calculator for spotlight command search.
 * Returns score > 0 if match found, higher is more relevant.
 */
function fuzzyScore(query: string, text: string): number {
  if (!query) return 1;
  const q = query.toLowerCase();
  const t = text.toLowerCase();

  // Exact match
  if (t === q) return 100;
  // Prefix match
  if (t.startsWith(q)) return 80;
  // Substring match
  if (t.includes(q)) return 50;

  // Fuzzy sequential character match
  let score = 0;
  let qIdx = 0;
  for (let tIdx = 0; tIdx < t.length && qIdx < q.length; tIdx++) {
    if (t[tIdx] === q[qIdx]) {
      score += 10;
      if (tIdx === 0 || t[tIdx - 1] === " " || t[tIdx - 1] === "/" || t[tIdx - 1] === "-") {
        score += 15; // Bonus for start of words
      }
      qIdx++;
    }
  }

  return qIdx === q.length ? score : 0;
}

export const CommandPalette = ({
  open = false,
  onOpenChange,
  items,
  placeholder = "Type a command or search...",
}: CommandPaletteProps) => {
  const { semanticColors } = useTheme();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scoredItems = React.useMemo(() => {
    if (!query.trim()) return items;

    return items
      .map((item) => {
        const labelScore = fuzzyScore(query, item.label);
        const categoryScore = item.category ? fuzzyScore(query, item.category) * 0.6 : 0;
        const totalScore = Math.max(labelScore, categoryScore);
        return { item, score: totalScore };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.item);
  }, [items, query]);

  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={() => onOpenChange?.(false)}>
      <Pressable
        onPress={() => onOpenChange?.(false)}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.75)",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 80,
          paddingHorizontal: 20,
        }}
      >
        <FocusTrap active={open} onRequestClose={() => onOpenChange?.(false)}>
          <Pressable
            onPress={(e) => e.stopPropagation?.()}
            style={{
              width: "100%",
              maxWidth: 540,
              backgroundColor: "rgba(16, 18, 30, 0.98)",
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.15)",
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 12 },
              shadowOpacity: 0.5,
              shadowRadius: 24,
              elevation: 16,
            }}
          >
            {/* Search Input Bar */}
            <Inline
              align="center"
              gap={3}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 14,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Text size="md">🔍</Text>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={semanticColors.foregroundSubtle}
                value={query}
                onChangeText={(text) => {
                  setQuery(text);
                  setSelectedIndex(0);
                }}
                autoFocus
                style={{
                  flex: 1,
                  fontSize: 15,
                  color: semanticColors.foreground,
                  backgroundColor: "transparent",
                  borderWidth: 0,
                  paddingVertical: 0,
                  paddingHorizontal: 0,
                  // @ts-ignore Web reset
                  outlineStyle: "none",
                  // @ts-ignore Web reset
                  outline: "none",
                }}
              />
              <Text size="xs" color={semanticColors.foregroundSubtle} weight="bold">
                ESC
              </Text>
            </Inline>

            {/* Filtered Commands Scroll */}
            <ScrollView style={{ maxHeight: 320, padding: 8 }}>
              <VStack gap={1}>
                {scoredItems.length > 0 ? (
                  scoredItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <Pressable
                        key={item.id}
                        onPress={() => {
                          onOpenChange?.(false);
                          item.onSelect?.();
                        }}
                        style={{
                          paddingHorizontal: 12,
                          paddingVertical: 10,
                          borderRadius: 8,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          backgroundColor: isSelected ? "rgba(139, 92, 246, 0.15)" : "transparent",
                        }}
                      >
                        <Inline align="center" gap={3}>
                          {item.icon}
                          <VStack gap={0}>
                            <Text
                              size="sm"
                              weight={isSelected ? "bold" : "medium"}
                              color={isSelected ? semanticColors.primary : semanticColors.foreground}
                            >
                              {item.label}
                            </Text>
                            {item.category && (
                              <Text size="xs" color={semanticColors.foregroundSubtle}>
                                {item.category}
                              </Text>
                            )}
                          </VStack>
                        </Inline>

                        {item.shortcut && (
                          <Box
                            style={{
                              paddingHorizontal: 6,
                              paddingVertical: 2,
                              borderRadius: 4,
                              backgroundColor: "rgba(255, 255, 255, 0.08)",
                            }}
                          >
                            <Text size="xs" color={semanticColors.foregroundMuted} weight="bold">
                              {item.shortcut}
                            </Text>
                          </Box>
                        )}
                      </Pressable>
                    );
                  })
                ) : (
                  <Box p={6} style={{ alignItems: "center" }}>
                    <Text size="sm" color={semanticColors.foregroundMuted}>
                      No matching commands found.
                    </Text>
                  </Box>
                )}
              </VStack>
            </ScrollView>
          </Pressable>
        </FocusTrap>
      </Pressable>
    </Modal>
  );
};
CommandPalette.displayName = "CommandPalette";

export const CommandMenu = CommandPalette;
