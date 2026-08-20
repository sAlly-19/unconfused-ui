import React, { useState } from "react";
import { Modal, ScrollView, View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Box, Inline, Pressable, Stack, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
};

export const Select = ({
  options,
  value: propValue,
  defaultValue = "",
  onValueChange,
  placeholder = "Select option...",
  label,
  disabled = false,
  style,
}: SelectProps) => {
  const { semanticColors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (optionValue: string) => {
    setValue(optionValue);
    setIsOpen(false);
  };

  const triggerStyle: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(16, 18, 30, 0.8)",
    borderWidth: 1.5,
    borderColor: isOpen ? semanticColors.primary : semanticColors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    opacity: disabled ? 0.5 : 1,
    shadowColor: isOpen ? semanticColors.primary : "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: isOpen ? 3 : 0,
  };

  return (
    <Box style={[{ gap: 6 }, style]}>
      {label && (
        <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 1.2, color: semanticColors.foregroundMuted }}>
          {label}
        </Text>
      )}

      <Pressable
        onPress={() => !disabled && setIsOpen(true)}
        disabled={disabled}
        accessibilityRole="combobox"
        accessibilityState={{ expanded: isOpen, disabled }}
        style={triggerStyle}
      >
        <Text size="sm" color={selectedOption ? semanticColors.foreground : semanticColors.foregroundSubtle}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Text size="xs" color={semanticColors.foregroundMuted}>
          {isOpen ? "▲" : "▼"}
        </Text>
      </Pressable>

      <Modal visible={isOpen} transparent animationType="fade" onRequestClose={() => setIsOpen(false)}>
        <Pressable
          onPress={() => setIsOpen(false)}
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
          }}
        >
          <View
            style={{
              width: "100%",
              maxWidth: 360,
              backgroundColor: semanticColors.surface,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: semanticColors.borderBold,
              maxHeight: 300,
              overflow: "hidden",
              padding: 8,
            }}
          >
            <ScrollView style={{ flex: 1 }}>
              <Stack gap={1}>
                {options.map((opt) => {
                  const isSelected = opt.value === value;
                  return (
                    <Pressable
                      key={opt.value}
                      onPress={() => handleSelect(opt.value)}
                      style={{
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                        borderRadius: 10,
                        backgroundColor: isSelected ? "rgba(124, 58, 237, 0.2)" : "transparent",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        size="sm"
                        weight={isSelected ? "bold" : "regular"}
                        color={isSelected ? semanticColors.primaryForeground : semanticColors.foreground}
                      >
                        {opt.label}
                      </Text>
                      {isSelected && (
                        <Text size="xs" color={semanticColors.primary}>
                          ✓
                        </Text>
                      )}
                    </Pressable>
                  );
                })}
              </Stack>
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </Box>
  );
};

Select.displayName = "Select";
