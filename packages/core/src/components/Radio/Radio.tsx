import React, { createContext, useContext } from "react";
import { View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Pressable, Stack, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

type RadioGroupContextValue = {
  value: string;
  setValue: (value: string) => void;
  disabled?: boolean;
};

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export type RadioGroupProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  style?: ViewStyle;
  children: React.ReactNode;
};

export const RadioGroup = ({
  value: propValue,
  defaultValue = "",
  onValueChange,
  disabled = false,
  style,
  children,
}: RadioGroupProps) => {
  const [value, setValue] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  return (
    <RadioGroupContext.Provider value={{ value, setValue, disabled }}>
      <Stack gap={2} style={style} accessibilityRole="radiogroup">
        {children}
      </Stack>
    </RadioGroupContext.Provider>
  );
};

export type RadioProps = {
  value: string;
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
};

export const Radio = ({ value: radioValue, label, disabled: itemDisabled = false, style }: RadioProps) => {
  const context = useContext(RadioGroupContext);
  const { semanticColors } = useTheme();

  if (!context) {
    throw new Error("<Radio> must be used within a <RadioGroup>");
  }

  const isSelected = context.value === radioValue;
  const isDisabled = context.disabled || itemDisabled;

  const handlePress = () => {
    if (isDisabled) return;
    context.setValue(radioValue);
  };

  const circleStyle: ViewStyle = {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: isSelected ? semanticColors.primary : semanticColors.borderBold,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: isSelected ? semanticColors.primary : "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: isSelected ? 2 : 0,
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={isDisabled}
      accessibilityRole="radio"
      accessibilityState={{ selected: isSelected, disabled: isDisabled }}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          minHeight: 44, // 44pt touch target
          opacity: isDisabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      <View style={circleStyle}>
        {isSelected && (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: semanticColors.primary,
            }}
          />
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
