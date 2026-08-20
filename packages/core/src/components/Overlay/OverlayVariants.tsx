import React, { useState } from "react";
import { Modal as RNModal, ScrollView, View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Stack, Text, VStack, FocusTrap } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Button } from "../Button";
import { Dialog, DialogProps } from "../Dialog";
import { Popover } from "../Popover";
import { Sheet, SheetProps } from "../Sheet";

export * from "../Dialog";
export * from "../Sheet";
export * from "../Popover";
export * from "../Tooltip";

// 1. Modal (General Modal alias)
export const Modal = Dialog;

// 2. Drawer (Side drawer sliding from left or right)
export type DrawerProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  position?: "left" | "right";
  width?: number | `${number}%`;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Drawer = ({
  open = false,
  onOpenChange,
  position = "right",
  width = 340,
  style,
  children,
}: DrawerProps): React.JSX.Element => {
  const { semanticColors, activeColorScheme } = useTheme();

  return (
    <RNModal visible={open} transparent animationType="fade" onRequestClose={() => onOpenChange?.(false)}>
      <View
        style={{
          position: "fixed" as any,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          flexDirection: "row",
          justifyContent: position === "left" ? "flex-start" : "flex-end",
          zIndex: 99999,
        }}
      >
        {position === "right" && (
          <Pressable style={{ flex: 1, height: "100%" }} onPress={() => onOpenChange?.(false)} />
        )}

        <FocusTrap active={open} onRequestClose={() => onOpenChange?.(false)} style={{ height: "100%", zIndex: 10 }}>
          <View
            style={[
              {
                width: width as any,
                height: "100%",
                backgroundColor: activeColorScheme === "dark" || activeColorScheme === "oled" ? "#121422" : semanticColors.surface,
                borderLeftWidth: position === "right" ? 1 : 0,
                borderRightWidth: position === "left" ? 1 : 0,
                borderColor: semanticColors.border,
                padding: 24,
                gap: 16,
                shadowColor: "#000",
                shadowOffset: { width: position === "left" ? 10 : -10, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 36,
                elevation: 24,
              },
              style,
            ]}
          >
            {children}
          </View>
        </FocusTrap>

        {position === "left" && (
          <Pressable style={{ flex: 1, height: "100%" }} onPress={() => onOpenChange?.(false)} />
        )}
      </View>
    </RNModal>
  );
};
Drawer.displayName = "Drawer";

// 3. BottomSheet (Alias and extended sheet with drag handle)
export const BottomSheet = Sheet;

// 4. ActionSheet (iOS / Material action menu sheet)
export type ActionSheetItem = {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
  destructive?: boolean;
  disabled?: boolean;
};

export type ActionSheetProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  actions: ActionSheetItem[];
  cancelText?: string;
};

export const ActionSheet = ({
  open = false,
  onOpenChange,
  title,
  description,
  actions,
  cancelText = "Cancel",
}: ActionSheetProps): React.JSX.Element => {
  const { semanticColors, activeColorScheme } = useTheme();

  return (
    <RNModal visible={open} transparent animationType="slide" onRequestClose={() => onOpenChange?.(false)}>
      <View
        style={{
          position: "fixed" as any,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 16,
          paddingBottom: 24,
          zIndex: 99999,
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
          onPress={() => onOpenChange?.(false)}
        />

        <VStack gap={3} style={{ width: "100%", maxWidth: 440, alignSelf: "center", zIndex: 10 }}>
          {/* Action List Container */}
          <Box
            style={{
              backgroundColor: activeColorScheme === "dark" || activeColorScheme === "oled" ? "#161828" : semanticColors.surface,
              borderRadius: 20,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: semanticColors.border,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -8 },
              shadowOpacity: 0.4,
              shadowRadius: 24,
              elevation: 20,
            }}
          >
            {(title || description) && (
              <Box p={4} style={{ borderBottomWidth: 1, borderBottomColor: semanticColors.border, alignItems: "center" }}>
                {title && <Text size="sm" weight="bold" color={semanticColors.foreground}>{title}</Text>}
                {description && <Text size="xs" color={semanticColors.foregroundMuted} style={{ marginTop: 2, textAlign: "center" }}>{description}</Text>}
              </Box>
            )}

            {actions.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  if (item.disabled) return;
                  onOpenChange?.(false);
                  item.onPress();
                }}
                disabled={item.disabled}
                style={{
                  paddingVertical: 14,
                  paddingHorizontal: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: 8,
                  borderBottomWidth: index < actions.length - 1 ? 1 : 0,
                  borderBottomColor: semanticColors.border,
                  opacity: item.disabled ? 0.4 : 1,
                }}
              >
                {item.icon}
                <Text
                  size="sm"
                  weight="bold"
                  color={item.destructive ? semanticColors.danger : semanticColors.foreground}
                >
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </Box>

          {/* Cancel Button */}
          <Button
            size="md"
            variant="glass"
            onPress={() => onOpenChange?.(false)}
            style={{ borderRadius: 16, height: 48 }}
          >
            {cancelText}
          </Button>
        </VStack>
      </View>
    </RNModal>
  );
};
ActionSheet.displayName = "ActionSheet";

// 5. ContextMenu & DropdownMenu
export type OverlayMenuItem = {
  label: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  shortcut?: string;
  destructive?: boolean;
  divider?: boolean;
};

export type DropdownMenuProps = {
  trigger: React.ReactNode;
  items: OverlayMenuItem[];
};

export const DropdownMenu = ({ trigger, items }: DropdownMenuProps): React.JSX.Element => {
  const { semanticColors } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger>{trigger}</Popover.Trigger>
      <Popover.Content style={{ width: 200, padding: 4 }}>
        <VStack gap={1}>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <Pressable
                onPress={() => {
                  setOpen(false);
                  item.onPress?.();
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderRadius: 6,
                }}
              >
                <Inline align="center" gap={2}>
                  {item.icon}
                  <Text size="xs" color={item.destructive ? semanticColors.danger : semanticColors.foreground}>
                    {item.label}
                  </Text>
                </Inline>
                {item.shortcut && (
                  <Text size="xs" color={semanticColors.foregroundSubtle} style={{ fontFamily: "monospace", fontSize: 10 }}>
                    {item.shortcut}
                  </Text>
                )}
              </Pressable>
              {item.divider && <Box style={{ height: 1, backgroundColor: semanticColors.border, marginVertical: 2 }} />}
            </React.Fragment>
          ))}
        </VStack>
      </Popover.Content>
    </Popover>
  );
};
DropdownMenu.displayName = "DropdownMenu";

export const ContextMenu = DropdownMenu;

