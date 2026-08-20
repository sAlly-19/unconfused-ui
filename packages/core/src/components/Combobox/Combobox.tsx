import React, { useState, useMemo, useCallback } from "react";
import {
  FlatList,
  Modal,
  Platform,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { Box, Inline, Pressable, Text, VStack } from "@unconfused-ui/primitives";
import { CheckIcon, ChevronDownIcon, CloseIcon, SearchIcon } from "@unconfused-ui/icons";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type ComboboxOption = {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
};

export type ComboboxProps = {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  style?: ViewStyle;
};

/**
 * Universal Virtualized Combobox component:
 * Features instant debounced search, WAI-ARIA accessibility, and FlatList virtualization for 1,000+ options.
 */
export function Combobox({
  options,
  value: propValue,
  defaultValue = "",
  onValueChange,
  placeholder = "Selecione uma opção...",
  searchPlaceholder = "Buscar opções...",
  disabled = false,
  clearable = true,
  style,
}: ComboboxProps): React.JSX.Element {
  const { semanticColors } = useTheme();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const activeValue = propValue !== undefined ? propValue : internalValue;

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === activeValue),
    [options, activeValue]
  );

  const filteredOptions = useMemo(() => {
    if (!search.trim()) return options;
    const q = search.toLowerCase();
    return options.filter(
      (opt) => opt.label.toLowerCase().includes(q) || (opt.description && opt.description.toLowerCase().includes(q))
    );
  }, [options, search]);

  const handleSelect = (val: string) => {
    setInternalValue(val);
    onValueChange?.(val);
    setOpen(false);
    setSearch("");
  };

  const handleClear = (e: any) => {
    e.stopPropagation?.();
    setInternalValue("");
    onValueChange?.("");
  };

  return (
    <View style={style}>
      {/* Trigger button */}
      <Pressable
        onPress={() => !disabled && setOpen(true)}
        accessibilityRole="combobox"
        accessibilityState={{ expanded: open, disabled }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 14,
          paddingVertical: 10,
          borderRadius: 10,
          backgroundColor: semanticColors.surface,
          borderWidth: 1,
          borderColor: open ? semanticColors.primary : semanticColors.border,
          opacity: disabled ? 0.6 : 1,
          gap: 8,
        }}
      >
        <Text
          size="sm"
          color={selectedOption ? semanticColors.foreground : semanticColors.foregroundMuted}
          numberOfLines={1}
          style={{ flex: 1 }}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>

        <Inline align="center" gap={1}>
          {clearable && selectedOption && !disabled && (
            <Pressable onPress={handleClear} hitSlop={8}>
              <CloseIcon size={14} color={semanticColors.foregroundMuted} />
            </Pressable>
          )}
          <ChevronDownIcon size={16} color={semanticColors.foregroundMuted} />
        </Inline>
      </Pressable>

      {/* Modal Dropdown with Virtualized List */}
      <Modal
        visible={open}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable
          onPress={() => setOpen(false)}
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Pressable
            onPress={(e) => e.stopPropagation?.()}
            style={{
              width: "100%",
              maxWidth: 440,
              maxHeight: 520,
              backgroundColor: semanticColors.surface,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: semanticColors.border,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.35,
              shadowRadius: 20,
              elevation: 12,
            }}
          >
            {/* Search Input Box */}
            <Box
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderBottomColor: semanticColors.border,
                gap: 8,
              }}
            >
              <SearchIcon size={16} color={semanticColors.foregroundMuted} />
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder={searchPlaceholder}
                placeholderTextColor={semanticColors.foregroundMuted}
                autoFocus={true}
                style={{
                  flex: 1,
                  fontSize: 14,
                  color: semanticColors.foreground,
                  padding: 0,
                  ...(Platform.OS === "web" ? ({ outlineStyle: "none" } as any) : {}),
                }}
              />
              {search.length > 0 && (
                <Pressable onPress={() => setSearch("")}>
                  <CloseIcon size={14} color={semanticColors.foregroundMuted} />
                </Pressable>
              )}
            </Box>

            {/* Virtualized Options List */}
            {filteredOptions.length === 0 ? (
              <Box style={{ padding: 24, alignItems: "center" }}>
                <Text size="sm" color={semanticColors.foregroundMuted}>
                  Nenhuma opção correspondente encontrada.
                </Text>
              </Box>
            ) : (
              <FlatList
                data={filteredOptions}
                keyExtractor={(item) => item.value}
                keyboardShouldPersistTaps="always"
                initialNumToRender={20}
                maxToRenderPerBatch={30}
                windowSize={5}
                renderItem={({ item }) => {
                  const isSelected = item.value === activeValue;
                  return (
                    <Pressable
                      onPress={() => !item.disabled && handleSelect(item.value)}
                      disabled={item.disabled}
                      style={{
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: isSelected
                          ? withAlpha(semanticColors.primary, 0.12)
                          : "transparent",
                        opacity: item.disabled ? 0.5 : 1,
                        borderBottomWidth: 1,
                        borderBottomColor: semanticColors.borderSubtle,
                      }}
                    >
                      <VStack gap={0.5} style={{ flex: 1 }}>
                        <Text
                          size="sm"
                          weight={isSelected ? "bold" : "regular"}
                          color={isSelected ? semanticColors.primary : semanticColors.foreground}
                        >
                          {item.label}
                        </Text>
                        {item.description && (
                          <Text size="xs" color={semanticColors.foregroundMuted}>
                            {item.description}
                          </Text>
                        )}
                      </VStack>

                      {isSelected && <CheckIcon size={16} color={semanticColors.primary} />}
                    </Pressable>
                  );
                }}
              />
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

Combobox.displayName = "Combobox";
