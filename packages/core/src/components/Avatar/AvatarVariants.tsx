import React from "react";
import { Image, ImageSourcePropType, ImageStyle, View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Avatar, AvatarProps, AvatarSize, AvatarStatus } from "./Avatar";

export * from "./Avatar";

// 1. AvatarImage & AvatarFallback
export type AvatarImageProps = {
  src: string | ImageSourcePropType;
  style?: ImageStyle;
};

export const AvatarImage = ({ src, style }: AvatarImageProps) => {
  const imageSource = typeof src === "string" ? { uri: src } : src;
  return <Image source={imageSource} style={[{ width: "100%", height: "100%" }, style]} resizeMode="cover" />;
};
AvatarImage.displayName = "AvatarImage";

export type AvatarFallbackProps = {
  children: string;
  style?: ViewStyle;
};

export const AvatarFallback = ({ children, style }: AvatarFallbackProps) => (
  <Text size="sm" weight="bold" color="#A78BFA" style={style}>
    {children.substring(0, 2).toUpperCase()}
  </Text>
);
AvatarFallback.displayName = "AvatarFallback";

// 2. UserAvatar (Enhanced avatar with badge or tooltip)
export type UserAvatarProps = AvatarProps & {
  name?: string;
  email?: string;
};

export const UserAvatar = ({ name, email, fallback, ...rest }: UserAvatarProps) => (
  <Avatar fallback={fallback ?? (name ? name.substring(0, 2) : "?")} {...rest} />
);
UserAvatar.displayName = "UserAvatar";

// 3. PresenceIndicator (Glowing presence dot)
export type PresenceIndicatorProps = {
  status?: "online" | "offline" | "busy" | "away";
  size?: number;
  showGlow?: boolean;
  style?: ViewStyle;
};

export const PresenceIndicator = ({
  status = "online",
  size = 10,
  showGlow = true,
  style,
}: PresenceIndicatorProps) => {
  const { semanticColors, baseTokens } = useTheme();

  const getColor = () => {
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

  const activeColor = getColor();

  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: activeColor,
          borderWidth: 2,
          borderColor: "#080911",
          shadowColor: showGlow ? activeColor : "transparent",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.8,
          shadowRadius: 6,
          elevation: showGlow ? 3 : 0,
        },
        style,
      ]}
    />
  );
};
PresenceIndicator.displayName = "PresenceIndicator";

// 4. Profile (Structured profile banner / card)
export type ProfileProps = {
  name: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  status?: AvatarStatus;
  avatarSize?: AvatarSize;
  badge?: React.ReactNode;
  style?: ViewStyle;
};

export const Profile = ({
  name,
  role,
  email,
  avatarSrc,
  status = "online",
  avatarSize = "md",
  badge,
  style,
}: ProfileProps) => {
  const { semanticColors } = useTheme();

  return (
    <Inline align="center" justify="space-between" style={style}>
      <Inline align="center" gap={3}>
        <Avatar src={avatarSrc} fallback={name.substring(0, 2).toUpperCase()} size={avatarSize} status={status} />
        <VStack gap={0.5}>
          <Inline align="center" gap={2}>
            <Text size="sm" weight="bold" color={semanticColors.foreground}>
              {name}
            </Text>
            {badge}
          </Inline>
          {role && (
            <Text size="xs" weight="medium" color={semanticColors.primary}>
              {role}
            </Text>
          )}
          {email && (
            <Text size="xs" color={semanticColors.foregroundMuted}>
              {email}
            </Text>
          )}
        </VStack>
      </Inline>
    </Inline>
  );
};
Profile.displayName = "Profile";
