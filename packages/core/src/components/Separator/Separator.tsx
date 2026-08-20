import React from "react";
import { View, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";

export type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  style?: ViewStyle;
};

export const Separator = ({ orientation = "horizontal", style }: SeparatorProps) => {
  const { semanticColors } = useTheme();

  const separatorStyle: ViewStyle =
    orientation === "horizontal"
      ? { height: 1, width: "100%", backgroundColor: semanticColors.border }
      : { width: 1, height: "100%", backgroundColor: semanticColors.border };

  return <View style={[separatorStyle, style]} accessibilityRole="none" />;
};

Separator.displayName = "Separator";

export const Divider = Separator;
