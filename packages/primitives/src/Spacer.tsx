import React from "react";
import { View, ViewStyle } from "react-native";
import { useTheme } from "@unconfused-ui/theme";
import { Spacing } from "@unconfused-ui/tokens";

export type SpacerProps = {
  size?: keyof Spacing | number;
  horizontal?: boolean;
  flex?: number;
  style?: ViewStyle;
};

export const Spacer = ({ size, horizontal = false, flex = 1, style }: SpacerProps): React.JSX.Element => {
  const { theme } = useTheme();

  if (size !== undefined) {
    const dimension = typeof size === "number" ? size : theme.spacing[size];
    return (
      <View
        style={[
          horizontal
            ? { width: dimension, height: 1 }
            : { height: dimension, width: 1 },
          style,
        ]}
      />
    );
  }

  return <View style={[{ flex }, style]} />;
};

Spacer.displayName = "Spacer";
