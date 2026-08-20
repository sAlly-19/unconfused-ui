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
  const { semanticColors } = useTheme();
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
              backgroundColor: "rgba(12, 14, 24, 0.95)",
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 6,
              zIndex: 1500,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 8,
              elevation: 6,
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
