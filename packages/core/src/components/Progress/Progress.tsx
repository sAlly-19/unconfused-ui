import React from "react";
import { View, ViewStyle } from "react-native";
import { Box, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

export type ProgressProps = {
  value: number;
  max?: number;
  variant?: "primary" | "success" | "warning" | "danger";
  label?: string;
  showValue?: boolean;
  style?: ViewStyle;
};

export const Progress = ({
  value,
  max = 100,
  variant = "primary",
  label,
  showValue = false,
  style,
}: ProgressProps) => {
  const { semanticColors, baseTokens } = useTheme();

  const percentage = Math.max(0, Math.min(100, (value / max) * 100));

  const getBarColor = () => {
    switch (variant) {
      case "success":
        return baseTokens.colors.success[500];
      case "warning":
        return baseTokens.colors.warning[500];
      case "danger":
        return baseTokens.colors.danger[500];
      case "primary":
      default:
        return semanticColors.primary;
    }
  };

  return (
    <Box style={[{ gap: 6 }, style]}>
      {(label || showValue) && (
        <Box style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          {label && (
            <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 1.2, color: semanticColors.foregroundMuted }}>
              {label}
            </Text>
          )}
          {showValue && (
            <Text size="xs" weight="bold" color={getBarColor()}>
              {Math.round(percentage)}%
            </Text>
          )}
        </Box>
      )}

      <View
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max, now: value, text: `${Math.round(percentage)}%` }}
        style={{
          height: 10,
          width: "100%",
          borderRadius: 5,
          backgroundColor: semanticColors.surfaceSubtle,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            height: "100%",
            width: `${percentage}%`,
            backgroundColor: getBarColor(),
            borderRadius: 5,
          }}
        />
      </View>
    </Box>
  );
};

Progress.displayName = "Progress";
