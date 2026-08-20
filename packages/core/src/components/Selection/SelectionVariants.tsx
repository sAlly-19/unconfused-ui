import React, { useState } from "react";
import { Modal, ScrollView, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { useControllableState } from "@unconfused-ui/hooks";
import { Box, HStack, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Badge } from "../Badge";
import { Checkbox } from "../Checkbox";
import { SelectOption } from "../Select";

// 1. CheckboxGroup
export type CheckboxGroupProps = {
  options: { label: string; value: string; disabled?: boolean }[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  orientation?: "horizontal" | "vertical";
  style?: ViewStyle;
};

export const CheckboxGroup = ({
  options,
  value: propValue,
  defaultValue = [],
  onValueChange,
  orientation = "vertical",
  style,
}: CheckboxGroupProps) => {
  const [selected, setSelected] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  const toggleOption = (val: string) => {
    const next = selected.includes(val) ? selected.filter((v) => v !== val) : [...selected, val];
    setSelected(next);
  };

  const Container = orientation === "horizontal" ? HStack : Stack;

  return (
    <Container gap={orientation === "horizontal" ? 4 : 2} style={style}>
      {options.map((opt) => (
        <Checkbox
          key={opt.value}
          label={opt.label}
          disabled={opt.disabled}
          checked={selected.includes(opt.value)}
          onCheckedChange={() => toggleOption(opt.value)}
        />
      ))}
    </Container>
  );
};
CheckboxGroup.displayName = "CheckboxGroup";

// 2. Toggle (Single button press toggle)
export type ToggleProps = {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Toggle = ({
  pressed: propPressed,
  defaultPressed = false,
  onPressedChange,
  disabled = false,
  size = "md",
  style,
  children,
}: ToggleProps) => {
  const { semanticColors } = useTheme();
  const [pressed, setPressed] = useControllableState({
    value: propPressed,
    defaultValue: defaultPressed,
    onChange: onPressedChange,
  });

  const height = size === "sm" ? 32 : size === "lg" ? 48 : 40;
  const padding = size === "sm" ? 8 : size === "lg" ? 16 : 12;

  return (
    <Pressable
      onPress={() => !disabled && setPressed(!pressed)}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ selected: pressed, disabled }}
      style={[
        {
          height,
          paddingHorizontal: padding,
          borderRadius: 8,
          backgroundColor: pressed ? "rgba(124, 58, 237, 0.2)" : "rgba(255, 255, 255, 0.05)",
          borderWidth: 1,
          borderColor: pressed ? semanticColors.primary : semanticColors.border,
          alignItems: "center",
          justifyContent: "center",
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      {typeof children === "string" ? (
        <Text
          size={size === "sm" ? "xs" : "sm"}
          weight={pressed ? "bold" : "medium"}
          color={pressed ? semanticColors.primary : semanticColors.foreground}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};
Toggle.displayName = "Toggle";

// 3. ToggleGroup (Single or Multi-select toolbar group)
export type ToggleGroupProps = {
  type?: "single" | "multiple";
  options: { label: string; value: string; icon?: React.ReactNode }[];
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: any) => void;
  style?: ViewStyle;
};

export const ToggleGroup = ({
  type = "single",
  options,
  value: propValue,
  defaultValue = type === "single" ? options[0]?.value ?? "" : [],
  onValueChange,
  style,
}: ToggleGroupProps) => {
  const { semanticColors } = useTheme();
  const [val, setVal] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  const handleSelect = (optionValue: string) => {
    if (type === "single") {
      setVal(optionValue);
    } else {
      const arr = Array.isArray(val) ? val : [];
      const next = arr.includes(optionValue) ? arr.filter((v) => v !== optionValue) : [...arr, optionValue];
      setVal(next);
    }
  };

  const isSelected = (optVal: string) => {
    if (type === "single") return val === optVal;
    return Array.isArray(val) && val.includes(optVal);
  };

  return (
    <Inline
      gap={1}
      style={[
        {
          backgroundColor: semanticColors.surfaceSubtle,
          padding: 3,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: semanticColors.border,
        },
        style,
      ]}
    >
      {options.map((opt) => {
        const active = isSelected(opt.value);
        return (
          <Pressable
            key={opt.value}
            onPress={() => handleSelect(opt.value)}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 7,
              borderRadius: 7,
              backgroundColor: active ? semanticColors.surface : "transparent",
              borderWidth: active ? 1 : 0,
              borderColor: active ? semanticColors.borderBold : "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Inline align="center" gap={1.5}>
              {opt.icon}
              <Text
                size="xs"
                weight={active ? "bold" : "medium"}
                color={active ? semanticColors.foreground : semanticColors.foregroundMuted}
              >
                {opt.label}
              </Text>
            </Inline>
          </Pressable>
        );
      })}
    </Inline>
  );
};
ToggleGroup.displayName = "ToggleGroup";

// 4. SegmentedControl
export type SegmentedControlProps = {
  options: { label: string; value: string }[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: "sm" | "md";
  style?: ViewStyle;
};

export const SegmentedControl = ({
  options,
  value: propValue,
  defaultValue = options[0]?.value ?? "",
  onValueChange,
  size = "md",
  style,
}: SegmentedControlProps) => {
  const { semanticColors } = useTheme();
  const [value, setValue] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  return (
    <Inline
      gap={1}
      style={[
        {
          backgroundColor: semanticColors.surfaceSubtle,
          padding: 4,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: semanticColors.border,
          width: "100%",
        },
        style,
      ]}
    >
      {options.map((opt) => {
        const isSelected = opt.value === value;
        return (
          <Pressable
            key={opt.value}
            onPress={() => setValue(opt.value)}
            style={{
              flex: 1,
              paddingVertical: size === "sm" ? 6 : 9,
              borderRadius: 8,
              backgroundColor: isSelected ? semanticColors.surface : "transparent",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: isSelected ? 1 : 0,
              borderColor: isSelected ? semanticColors.borderBold : "transparent",
              shadowColor: isSelected ? "#000" : "transparent",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: isSelected ? 0.2 : 0,
              shadowRadius: 3,
            }}
          >
            <Text
              size="xs"
              weight={isSelected ? "bold" : "medium"}
              color={isSelected ? semanticColors.foreground : semanticColors.foregroundMuted}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </Inline>
  );
};
SegmentedControl.displayName = "SegmentedControl";

// 5. MultiSelect
export type MultiSelectProps = {
  options: SelectOption[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
};

export const MultiSelect = ({
  options,
  value: propValue,
  defaultValue = [],
  onValueChange,
  placeholder = "Select multiple...",
  label,
  disabled = false,
  style,
}: MultiSelectProps) => {
  const { semanticColors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  const toggleOption = (optVal: string) => {
    const next = selected.includes(optVal)
      ? selected.filter((v) => v !== optVal)
      : [...selected, optVal];
    setSelected(next);
  };

  const selectedLabels = options.filter((o) => selected.includes(o.value));

  return (
    <Box style={[{ gap: 6 }, style]}>
      {label && (
        <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 1.1, color: semanticColors.foregroundMuted }}>
          {label}
        </Text>
      )}

      <Pressable
        onPress={() => !disabled && setIsOpen(true)}
        disabled={disabled}
        accessibilityRole="combobox"
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(16, 18, 30, 0.85)",
          borderWidth: 1.5,
          borderColor: isOpen ? semanticColors.primary : semanticColors.border,
          borderRadius: 12,
          paddingHorizontal: 12,
          minHeight: 48,
          paddingVertical: 6,
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <Box style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
          {selectedLabels.length > 0 ? (
            selectedLabels.map((item) => (
              <Badge key={item.value} variant="primary" size="sm">
                {item.label}
              </Badge>
            ))
          ) : (
            <Text size="sm" color={semanticColors.foregroundSubtle}>
              {placeholder}
            </Text>
          )}
        </Box>
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
              maxHeight: 340,
              padding: 12,
            }}
          >
            <Inline justify="space-between" align="center" style={{ marginBottom: 8, paddingHorizontal: 4 }}>
              <Text size="sm" weight="bold">Select Items ({selected.length})</Text>
              <Pressable onPress={() => setIsOpen(false)}>
                <Text size="xs" weight="bold" color={semanticColors.primary}>Done</Text>
              </Pressable>
            </Inline>
            <ScrollView style={{ flex: 1 }}>
              <Stack gap={1}>
                {options.map((opt) => {
                  const isChecked = selected.includes(opt.value);
                  return (
                    <Pressable
                      key={opt.value}
                      onPress={() => toggleOption(opt.value)}
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 10,
                        borderRadius: 8,
                        backgroundColor: isChecked ? "rgba(124, 58, 237, 0.15)" : "transparent",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text size="sm" color={semanticColors.foreground}>{opt.label}</Text>
                      {isChecked && <Text size="xs" color={semanticColors.primary}>✓</Text>}
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
MultiSelect.displayName = "MultiSelect";

// 6. Combobox / Autocomplete
export type ComboboxProps = {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  style?: ViewStyle;
};

export const Combobox = ({
  options,
  value: propValue,
  defaultValue = "",
  onValueChange,
  placeholder = "Search and pick...",
  label,
  style,
}: ComboboxProps) => {
  const { semanticColors } = useTheme();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));

  const handlePick = (opt: SelectOption) => {
    setValue(opt.value);
    setQuery(opt.label);
    setIsOpen(false);
  };

  const selectedOpt = options.find((o) => o.value === value);

  return (
    <Box style={[{ gap: 6 }, style]}>
      {label && (
        <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 1.1, color: semanticColors.foregroundMuted }}>
          {label}
        </Text>
      )}

      <Box style={{ position: "relative" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderWidth: 1,
            borderColor: isOpen ? semanticColors.primary : "rgba(255, 255, 255, 0.08)",
            borderRadius: 8,
            paddingHorizontal: 12,
            height: 42,
            gap: 8,
          }}
        >
          <Text size="xs">🔍</Text>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={semanticColors.foregroundSubtle}
            value={query.length > 0 ? query : (selectedOpt?.label ?? "")}
            onChangeText={(t) => {
              setQuery(t);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            style={{
              flex: 1,
              color: semanticColors.foreground,
              fontSize: 14,
              backgroundColor: "transparent",
              borderWidth: 0,
              paddingVertical: 0,
              paddingHorizontal: 0,
              // @ts-ignore Web reset
              outlineStyle: "none",
              // @ts-ignore Web reset
              outline: "none",
            }}
          />
        </View>

        {isOpen && filtered.length > 0 && (
          <Box
            style={{
              marginTop: 4,
              backgroundColor: semanticColors.surface,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: semanticColors.borderBold,
              maxHeight: 180,
              overflow: "hidden",
              zIndex: 100,
            }}
          >
            <ScrollView style={{ flex: 1 }}>
              {filtered.map((item) => (
                <Pressable
                  key={item.value}
                  onPress={() => handlePick(item)}
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: semanticColors.border,
                  }}
                >
                  <Text size="sm">{item.label}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </Box>
        )}
      </Box>
    </Box>
  );
};
Combobox.displayName = "Combobox";

export const Autocomplete = Combobox;
export const Picker = SegmentedControl;

// 7. RangeSlider (Dual-thumb range selector)
export type RangeSliderProps = {
  min?: number;
  max?: number;
  value?: [number, number];
  defaultValue?: [number, number];
  onValueChange?: (val: [number, number]) => void;
  label?: string;
  style?: ViewStyle;
};

export const RangeSlider = ({
  min = 0,
  max = 100,
  value: propValue,
  defaultValue = [20, 80],
  onValueChange,
  label,
  style,
}: RangeSliderProps) => {
  const { semanticColors } = useTheme();
  const [range, setRange] = useControllableState({
    value: propValue,
    defaultValue,
    onChange: onValueChange,
  });

  const minPercent = Math.max(0, Math.min(100, ((range[0] - min) / (max - min)) * 100));
  const maxPercent = Math.max(0, Math.min(100, ((range[1] - min) / (max - min)) * 100));

  const handleStep = () => {
    // Interactive cycle step for previewing state
    const nextLow = range[0] >= 40 ? 10 : range[0] + 10;
    const nextHigh = range[1] <= 60 ? 90 : range[1] - 10;
    setRange([nextLow, nextHigh]);
  };

  return (
    <Box style={[{ gap: 8 }, style]}>
      {label && (
        <Inline justify="space-between" align="center">
          <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 1.1, color: semanticColors.foregroundMuted }}>
            {label}
          </Text>
          <Text size="xs" weight="bold" color={semanticColors.primary}>
            {range[0]} - {range[1]}
          </Text>
        </Inline>
      )}

      <Pressable onPress={handleStep} style={{ paddingVertical: 8 }}>
        <View
          style={{
            height: 8,
            width: "100%",
            borderRadius: 4,
            backgroundColor: semanticColors.surfaceSubtle,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
              height: "100%",
              backgroundColor: semanticColors.primary,
              borderRadius: 4,
            }}
          />
        </View>
      </Pressable>
    </Box>
  );
};
RangeSlider.displayName = "RangeSlider";
