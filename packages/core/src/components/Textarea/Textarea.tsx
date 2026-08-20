import React, { useState } from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, View, ViewStyle } from "react-native";
import { Box, Inline, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";

export type TextareaProps = Omit<RNTextInputProps, "multiline"> & {
  label?: string;
  error?: string;
  helperText?: string;
  showCount?: boolean;
  minHeight?: number;
  rows?: number;
  containerStyle?: ViewStyle;
};

export const Textarea = React.forwardRef<RNTextInput, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      showCount = false,
      minHeight = 100,
      rows,
      maxLength,
      value,
      defaultValue,
      onChangeText,
      containerStyle,
      style,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const { semanticColors } = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");

    const resolvedMinHeight = rows ? Math.max(90, rows * 22) : minHeight;
    const currentValue = value !== undefined ? value : internalValue;
    const currentLength = currentValue.length;

    const handleChangeText = (text: string) => {
      if (value === undefined) {
        setInternalValue(text);
      }
      onChangeText?.(text);
    };

    const textareaContainerStyle: ViewStyle = {
      backgroundColor: semanticColors.surfaceSubtle,
      borderWidth: 1,
      borderColor: error
        ? semanticColors.danger
        : isFocused
        ? semanticColors.primary
        : semanticColors.borderSubtle,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      minHeight: resolvedMinHeight,
      shadowColor: isFocused ? semanticColors.primary : "transparent",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: isFocused ? 0.25 : 0,
      shadowRadius: 6,
      elevation: isFocused ? 2 : 0,
    };

    return (
      <Box style={[{ gap: 6 }, containerStyle]}>
        {label && (
          <Text size="xs" weight="bold" style={{ textTransform: "uppercase", letterSpacing: 0.8, fontSize: 11, color: semanticColors.foregroundMuted }}>
            {label}
          </Text>
        )}

        <View style={textareaContainerStyle}>
          <RNTextInput
            ref={ref}
            multiline
            textAlignVertical="top"
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            onChangeText={handleChangeText}
            placeholderTextColor={semanticColors.foregroundSubtle}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            style={[
              {
                flex: 1,
                color: semanticColors.foreground,
                fontSize: 14,
                lineHeight: 20,
                paddingVertical: 0,
                paddingHorizontal: 0,
                backgroundColor: "transparent",
                borderWidth: 0,
                // @ts-ignore Web reset
                outlineStyle: "none",
                // @ts-ignore Web reset
                outline: "none",
              },
              style,
            ]}
            {...rest}
          />
        </View>

        <Inline justify="space-between" align="center">
          {error ? (
            <Text size="xs" color={semanticColors.danger} weight="medium">
              {error}
            </Text>
          ) : helperText ? (
            <Text size="xs" color={semanticColors.foregroundMuted}>
              {helperText}
            </Text>
          ) : (
            <Box />
          )}

          {showCount && maxLength !== undefined && (
            <Text size="xs" color={semanticColors.foregroundSubtle}>
              {currentLength} / {maxLength}
            </Text>
          )}
        </Inline>
      </Box>
    );
  }
);

Textarea.displayName = "Textarea";
