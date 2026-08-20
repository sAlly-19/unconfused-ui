import React from "react";
import { View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

export type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  style?: ViewStyle;
};

export const Checkbox = ({
  checked: propChecked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  label,
  style,
}: CheckboxProps) => {
  const { semanticColors } = useTheme();
  const [isChecked, setIsChecked] = useControllableState({
    value: propChecked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });

  const handlePress = () => {
    if (disabled) return;
    setIsChecked(!isChecked);
  };

  const boxStyle: ViewStyle = {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: isChecked ? semanticColors.primary : semanticColors.borderBold,
    backgroundColor: isChecked ? semanticColors.primary : "transparent",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: isChecked ? semanticColors.primary : "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: isChecked ? 2 : 0,
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: isChecked, disabled }}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          minHeight: 44, // 44pt touch target
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      <View style={boxStyle}>
        {isChecked && (
          <Text size="xs" weight="bold" color={semanticColors.primaryForeground}>
            ✓
          </Text>
        )}
      </View>
      {label && (
        <Text size="sm" weight="medium" color={semanticColors.foreground}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

Checkbox.displayName = "Checkbox";
