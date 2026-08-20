import React from "react";
import { Image, ImageSourcePropType, View, ViewStyle } from "react-native";
import { Center, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "busy" | "offline" | "away";

export type AvatarProps = {
  src?: string | ImageSourcePropType;
  fallback?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  style?: ViewStyle;
};

export const Avatar = ({ src, fallback = "?", size = "md", status, style }: AvatarProps) => {
  const { semanticColors, baseTokens } = useTheme();

  const dimension = size === "sm" ? 34 : size === "lg" ? 56 : size === "xl" ? 72 : 44;
  const fontSize = size === "sm" ? "xs" : size === "lg" ? "lg" : size === "xl" ? "2xl" : "md";
  const dotSize = size === "sm" ? 8 : size === "lg" ? 14 : size === "xl" ? 16 : 10;

  const containerStyle: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: dimension / 2,
    backgroundColor: semanticColors.surfaceSubtle,
    borderWidth: 1.5,
    borderColor: withAlpha(semanticColors.primary, 0.4), // Violet Ring Accent
    overflow: "hidden",
  };

  const getStatusColor = () => {
    switch (status) {
      case "online":
        return baseTokens.colors.success[500];
      case "busy":
        return baseTokens.colors.danger[500];
      case "away":
        return baseTokens.colors.warning[500];
      case "offline":
      default:
        return baseTokens.colors.neutral[500];
    }
  };

  const imageSource = typeof src === "string" ? { uri: src } : src;

  return (
    <View style={[{ position: "relative" }, style]}>
      <Center style={containerStyle}>
        {src ? (
          <Image
            source={imageSource!}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        ) : (
          <Text size={fontSize} weight="bold" color={baseTokens.colors.brand[400]}>
            {fallback.substring(0, 2).toUpperCase()}
          </Text>
        )}
      </Center>

      {status && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: dotSize,
            height: dotSize,
            borderRadius: dotSize / 2,
            backgroundColor: getStatusColor(),
            borderWidth: 2,
            borderColor: semanticColors.background,
          }}
        />
      )}
    </View>
  );
};

Avatar.displayName = "Avatar";
