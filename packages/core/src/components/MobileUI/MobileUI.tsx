import React from "react";
import { Share, StatusBar as RNStatusBar, StatusBarProps as RNStatusBarProps, ViewStyle } from "react-native";
import { Box, Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Button, ButtonProps } from "../Button";

export type StatusBarProps = RNStatusBarProps;
export const StatusBar = (props: StatusBarProps) => <RNStatusBar {...props} />;
StatusBar.displayName = "StatusBar";

export type KeyboardAccessoryProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

export const KeyboardAccessory = ({ style, children }: KeyboardAccessoryProps) => {
  const { semanticColors } = useTheme();
  return (
    <Box
      style={[
        {
          padding: 8,
          backgroundColor: semanticColors.surfaceSubtle,
          borderTopWidth: 1,
          borderTopColor: semanticColors.border,
        },
        style,
      ]}
    >
      {children}
    </Box>
  );
};
KeyboardAccessory.displayName = "KeyboardAccessory";

export type BottomTabBarProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

export const BottomTabBar = ({ style, children }: BottomTabBarProps) => {
  const { semanticColors } = useTheme();
  return (
    <Inline
      justify="space-around"
      align="center"
      style={[
        {
          height: 60,
          backgroundColor: semanticColors.surface,
          borderTopWidth: 1,
          borderTopColor: semanticColors.border,
        },
        style,
      ]}
    >
      {children}
    </Inline>
  );
};
BottomTabBar.displayName = "BottomTabBar";

export type ShareButtonProps = ButtonProps & {
  shareContent?: { message: string; title?: string; url?: string };
};

export const ShareButton = ({ shareContent, onPress, children, ...rest }: ShareButtonProps) => {
  const handleShare = () => {
    if (shareContent) {
      Share.share(shareContent).catch(() => {});
    }
    onPress?.();
  };

  return (
    <Button variant="outline" onPress={handleShare} {...rest}>
      {children ?? "Share"}
    </Button>
  );
};
ShareButton.displayName = "ShareButton";

export const HapticButton = Button;
