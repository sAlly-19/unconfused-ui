import React from "react";
import { View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  style?: ViewStyle;
};

export const Switch = ({
  checked: propChecked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  label,
  style,
}: SwitchProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const [isChecked, setIsChecked] = useControllableState({
    value: propChecked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });

  const handlePress = () => {
    if (disabled) return;
    setIsChecked(!isChecked);
  };

  const trackStyle: ViewStyle = {
    width: 48,
    height: 26,
    borderRadius: 13,
    backgroundColor: isChecked ? semanticColors.primary : semanticColors.surfaceSubtle,
    borderWidth: 1,
    borderColor: isChecked ? semanticColors.primary : semanticColors.border,
    padding: 2,
    justifyContent: "center",
    shadowColor: isChecked ? withAlpha(baseTokens.colors.black, 0.15) : "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: isChecked ? 3 : 0,
  };

  const thumbStyle: ViewStyle = {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: baseTokens.colors.white,
    alignSelf: isChecked ? "flex-end" : "flex-start",
    shadowColor: withAlpha(baseTokens.colors.black, 0.2),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: isChecked, disabled }}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          minHeight: 44, // 44pt touch target
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      <View style={trackStyle}>
        <View style={thumbStyle} />
      </View>
      {label && (
        <Text size="sm" weight="medium" color={semanticColors.foreground}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

Switch.displayName = "Switch";
