import React from "react";
import { Modal, ScrollView, View, ViewStyle } from "react-native";
import { Box, Inline, Pressable, Stack, Text, FocusTrap } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type SheetProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const SheetRoot = ({ open = false, onOpenChange, style, children }: SheetProps): React.JSX.Element => {
  const { semanticColors, activeColorScheme, baseTokens } = useTheme();

  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={() => onOpenChange?.(false)}>
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
          backgroundColor: withAlpha(baseTokens.colors.black, 0.75),
          justifyContent: "flex-end",
          alignItems: "center",
          zIndex: 99999,
        }}
      >
        {/* Full-screen backdrop click dismisser */}
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

        {/* Sheet Content pinned to the bottom */}
        <FocusTrap
          active={open}
          onRequestClose={() => onOpenChange?.(false)}
          style={{ width: "100%", maxWidth: 640, zIndex: 10, alignSelf: "center" }}
        >
          <View
            style={[
              {
                backgroundColor: semanticColors.surface,
                borderTopLeftRadius: 28,
                borderTopRightRadius: 28,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderWidth: 1,
                borderBottomWidth: 0,
                borderColor: semanticColors.border,
                maxHeight: "85%",
                padding: 24,
                paddingBottom: 32,
                gap: 16,
                shadowColor: withAlpha(baseTokens.colors.black, 0.8),
                shadowOffset: { width: 0, height: -12 },
                shadowOpacity: 0.5,
                shadowRadius: 36,
                elevation: 24,
                width: "100%",
              },
              style,
            ]}
          >
            {/* Drag Handle Indicator */}
            <View
              style={{
                width: 44,
                height: 5,
                borderRadius: 3,
                backgroundColor: semanticColors.borderBold,
                alignSelf: "center",
                marginBottom: 6,
              }}
            />
            {children}
          </View>
        </FocusTrap>
      </View>
    </Modal>
  );
};
SheetRoot.displayName = "Sheet";

export const SheetHeader = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }): React.JSX.Element => (
  <Stack gap={1} style={style}>
    {children}
  </Stack>
);
SheetHeader.displayName = "Sheet.Header";

export const SheetTitle = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const { semanticColors } = useTheme();
  return typeof children === "string" ? (
    <Text size="xl" weight="bold" color={semanticColors.foreground}>
      {children}
    </Text>
  ) : (
    <>{children}</>
  );
};
SheetTitle.displayName = "Sheet.Title";

export const SheetDescription = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const { semanticColors } = useTheme();
  return typeof children === "string" ? (
    <Text size="sm" color={semanticColors.foregroundMuted}>
      {children}
    </Text>
  ) : (
    <>{children}</>
  );
};
SheetDescription.displayName = "Sheet.Description";

export const SheetContent = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }): React.JSX.Element => (
  <ScrollView style={[{ flexGrow: 0 }, style]}>
    <Box>{children}</Box>
  </ScrollView>
);
SheetContent.displayName = "Sheet.Content";

export const SheetFooter = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }): React.JSX.Element => (
  <Box style={[{ paddingTop: 12, flexDirection: "row", justifyContent: "flex-end", gap: 12 }, style]}>
    {children}
  </Box>
);
SheetFooter.displayName = "Sheet.Footer";

export const Sheet = Object.assign(SheetRoot, {
  Header: SheetHeader,
  Title: SheetTitle,
  Description: SheetDescription,
  Content: SheetContent,
  Footer: SheetFooter,
});
