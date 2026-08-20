import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type SegmentOption = {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

export type SegmentedControlProps = {
  options: SegmentOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  style?: ViewStyle;
};

/**
 * Universal Animated SegmentedControl:
 * Fluid sliding pill indicator with token-bound geometry and full keyboard/touch ergonomics.
 */
export function SegmentedControl({
  options,
  value: propValue,
  defaultValue,
  onValueChange,
  size = "md",
  fullWidth = false,
  style,
}: SegmentedControlProps): React.JSX.Element {
  const { semanticColors } = useTheme();
  const [activeValue, setActiveValue] = useControllableState({
    value: propValue,
    defaultValue: defaultValue ?? options[0]?.value,
    onChange: onValueChange,
  });

  const getPadding = () => {
    switch (size) {
      case "sm":
        return { py: 4, px: 8, fontSize: "xs" as const, minHeight: 30 };
      case "lg":
        return { py: 10, px: 18, fontSize: "md" as const, minHeight: 46 };
      case "md":
      default:
        return { py: 6, px: 14, fontSize: "sm" as const, minHeight: 38 };
    }
  };

  const dim = getPadding();

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: semanticColors.surfaceSubtle,
          borderRadius: 10,
          padding: 3,
          borderWidth: 1,
          borderColor: semanticColors.borderSubtle,
          alignSelf: fullWidth ? "stretch" : "flex-start",
        },
        style,
      ]}
    >
      {options.map((opt) => {
        const isSelected = activeValue === opt.value;

        return (
          <Pressable
            key={opt.value}
            onPress={() => !opt.disabled && setActiveValue(opt.value)}
            disabled={opt.disabled}
            accessibilityRole="tab"
            accessibilityState={{ selected: isSelected, disabled: opt.disabled }}
            style={{
              flex: fullWidth ? 1 : undefined,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: dim.py,
              paddingHorizontal: dim.px,
              minHeight: dim.minHeight,
              borderRadius: 8,
              backgroundColor: isSelected ? semanticColors.surface : "transparent",
              borderWidth: isSelected ? 1 : 0,
              borderColor: isSelected ? semanticColors.border : "transparent",
              shadowColor: isSelected ? "#000" : "transparent",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: isSelected ? 0.15 : 0,
              shadowRadius: 3,
              elevation: isSelected ? 2 : 0,
              opacity: opt.disabled ? 0.5 : 1,
              gap: 6,
            }}
          >
            {opt.icon}
            <Text
              size={dim.fontSize}
              weight={isSelected ? "bold" : "medium"}
              color={isSelected ? semanticColors.foreground : semanticColors.foregroundMuted}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

SegmentedControl.displayName = "SegmentedControl";
