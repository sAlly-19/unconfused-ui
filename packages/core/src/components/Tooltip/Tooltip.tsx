import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

export type TooltipProps = {
  content: string;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Tooltip = ({ content, style, children }: TooltipProps) => {
  const { semanticColors, theme } = useTheme();
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ position: "relative" }}>
      {visible && (
        <View
          style={[
            {
              position: "absolute",
              bottom: "100%",
              marginBottom: 8,
              alignSelf: "center",
              backgroundColor: semanticColors.surface,
              borderWidth: 1,
              borderColor: semanticColors.borderSubtle,
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 6,
              zIndex: 1500,
              ...((theme && theme.shadows && theme.shadows.lg) || {}),
            },
            style,
          ]}
        >
          <Text size="xs" weight="medium" color={semanticColors.foreground}>
            {content}
          </Text>
        </View>
      )}

      <Pressable
        onPressIn={() => setVisible(true)}
        onPressOut={() => setVisible(false)}
        onHoverIn={() => setVisible(true)}
        onHoverOut={() => setVisible(false)}
      >
        {children}
      </Pressable>
    </View>
  );
};

Tooltip.displayName = "Tooltip";
