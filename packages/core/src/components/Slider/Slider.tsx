import React from "react";
import { View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Box, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

export type SliderProps = {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  style?: ViewStyle;
};

export const Slider = ({
  value: propValue,
  defaultValue = 50,
  onValueChange,
  min = 0,
  max = 100,
  label,
  style,
}: SliderProps) => {
  const { semanticColors } = useTheme();
  const [value, setValue] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  const percentage = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  const handleTrackPress = (e: any) => {
    // Basic step increment/decrement toggle for touch testing
    const nextValue = value >= max ? min : value + 10;
    setValue(Math.min(max, nextValue));
  };

  return (
    <Box style={[{ gap: 8 }, style]}>
      {label && (
        <Box style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 1.2, color: semanticColors.foregroundMuted }}>
            {label}
          </Text>
          <Text size="xs" weight="bold" color={semanticColors.primary}>
            {value}%
          </Text>
        </Box>
      )}

      <Pressable
        onPress={handleTrackPress}
        style={{ paddingVertical: 8 }}
        accessibilityRole="adjustable"
        accessibilityValue={{ min, max, now: value, text: `${value}` }}
        accessibilityActions={[{ name: "increment" }, { name: "decrement" }]}
        onAccessibilityAction={(event) => {
          const stepValue = 10;
          if (event.nativeEvent.actionName === 'increment') {
            setValue(Math.min(max, value + stepValue));
          } else if (event.nativeEvent.actionName === 'decrement') {
            setValue(Math.max(min, value - stepValue));
          }
        }}
      >
        <View
          style={{
            height: 8,
            width: "100%",
            borderRadius: 4,
            backgroundColor: semanticColors.surfaceSubtle,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <View
            style={{
              height: "100%",
              width: `${percentage}%`,
              backgroundColor: semanticColors.primary,
              borderRadius: 4,
            }}
          />
        </View>
      </Pressable>
    </Box>
  );
};

Slider.displayName = "Slider";
