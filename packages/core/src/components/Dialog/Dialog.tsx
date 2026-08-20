import React from "react";
import { Modal, View, ViewStyle } from "react-native";
import { Box, Inline, Pressable, Stack, Text, FocusTrap } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type DialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const DialogRoot = ({ open = false, onOpenChange, style, children }: DialogProps): React.JSX.Element => {
  const { semanticColors, baseTokens, theme } = useTheme();

  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={() => onOpenChange?.(false)}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          flex: 1,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.75),
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          zIndex: 99999,
        }}
      >
        {/* Backdrop click dismisser */}
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

        <FocusTrap active={open} onRequestClose={() => onOpenChange?.(false)} style={{ width: "100%", maxWidth: 480, zIndex: 10 }}>
          <Stack
            gap={4}
            style={[
              {
                width: "100%",
                backgroundColor: semanticColors.surface,
                borderRadius: 22,
                borderWidth: 1,
                borderColor: semanticColors.border,
                padding: 24,
                ...(theme.shadows ? theme.shadows.lg : {}),
              },
              style,
            ]}
          >
            {children}
          </Stack>
        </FocusTrap>
      </View>
    </Modal>
  );
};
DialogRoot.displayName = "Dialog";

export const DialogHeader = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }): React.JSX.Element => (
  <Stack gap={1} style={style}>
    {children}
  </Stack>
);
DialogHeader.displayName = "Dialog.Header";

export const DialogTitle = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const { semanticColors } = useTheme();
  return typeof children === "string" ? (
    <Text size="xl" weight="bold" color={semanticColors.foreground}>
      {children}
    </Text>
  ) : (
    <>{children}</>
  );
};
DialogTitle.displayName = "Dialog.Title";

export const DialogDescription = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const { semanticColors } = useTheme();
  return typeof children === "string" ? (
    <Text size="sm" color={semanticColors.foregroundMuted}>
      {children}
    </Text>
  ) : (
    <>{children}</>
  );
};
DialogDescription.displayName = "Dialog.Description";

export const DialogContent = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }): React.JSX.Element => (
  <Box style={style}>{children}</Box>
);
DialogContent.displayName = "Dialog.Content";

export const DialogFooter = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }): React.JSX.Element => (
  <Box style={[{ paddingTop: 12, flexDirection: "row", justifyContent: "flex-end", gap: 12 }, style]}>
    {children}
  </Box>
);
DialogFooter.displayName = "Dialog.Footer";

export const Dialog = Object.assign(DialogRoot, {
  Header: DialogHeader,
  Title: DialogTitle,
  Description: DialogDescription,
  Content: DialogContent,
  Footer: DialogFooter,
});
