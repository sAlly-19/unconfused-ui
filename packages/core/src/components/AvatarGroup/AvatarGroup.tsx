import React from "react";
import { View, ViewStyle } from "react-native";
import { Center, Inline, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

export type AvatarGroupProps = {
  max?: number;
  size?: "sm" | "md" | "lg";
  style?: ViewStyle;
  children: React.ReactNode;
};

export const AvatarGroup = ({ max = 3, size = "md", style, children }: AvatarGroupProps) => {
  const { semanticColors } = useTheme();
  const childrenArray = React.Children.toArray(children);
  const visibleChildren = childrenArray.slice(0, max);
  const excessCount = childrenArray.length - max;

  const dimension = size === "sm" ? 34 : size === "lg" ? 56 : 44;

  return (
    <Inline align="center" style={style}>
      {visibleChildren.map((child, index) => (
        <View key={index} style={{ marginLeft: index === 0 ? 0 : -12, zIndex: childrenArray.length - index }}>
          {child}
        </View>
      ))}

      {excessCount > 0 && (
        <Center
          style={{
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            backgroundColor: semanticColors.surfaceSubtle,
            borderWidth: 2,
            borderColor: semanticColors.background,
            marginLeft: -12,
            zIndex: 0,
          }}
        >
          <Text size="xs" weight="bold" color={semanticColors.primary}>
            +{excessCount}
          </Text>
        </Center>
      )}
    </Inline>
  );
};

AvatarGroup.displayName = "AvatarGroup";
