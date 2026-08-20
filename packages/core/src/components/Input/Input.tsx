import React, { useState } from "react";
import {
  ActivityIndicator,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Box, HStack, Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "glass" | "filled" | "bordered";

export type InputProps = Omit<RNTextInputProps, "size"> & {
  size?: InputSize;
  variant?: InputVariant;
  label?: string;
  helperText?: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
  loading?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
};

export const Input = React.forwardRef<RNTextInput, InputProps>(
  (
    {
      size = "md",
      variant = "default",
      label,
      helperText,
      error,
      success,
      required = false,
      disabled = false,
      clearable = false,
      onClear,
      leftIcon,
      rightIcon,
      prefix,
      suffix,
      loading = false,
      value,
      onChangeText,
      containerStyle,
      inputStyle,
      style,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const { semanticColors, baseTokens } = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    const getHeight = () => {
      switch (size) {
        case "sm":
          return 38;
        case "lg":
          return 54;
        case "md":
        default:
          return 46;
      }
    };

    const getFontSize = () => {
      switch (size) {
        case "sm":
          return 13;
        case "lg":
          return 16;
        case "md":
        default:
          return 14;
      }
    };

    const getBgColor = () => {
      if (disabled) return withAlpha(baseTokens.colors.white, 0.02);
      switch (variant) {
        case "glass":
          return withAlpha(baseTokens.colors.white, 0.03);
        case "filled":
          return withAlpha(baseTokens.colors.white, 0.05);
        case "bordered":
          return "transparent";
        case "default":
        default:
          return withAlpha(baseTokens.colors.white, 0.03);
      }
    };

    const getBorderColor = () => {
      if (disabled) return withAlpha(baseTokens.colors.white, 0.04);
      if (error) return semanticColors.danger;
      if (success) return baseTokens.colors.success[500];
      if (isFocused) return semanticColors.primary;
      return withAlpha(baseTokens.colors.white, 0.08);
    };

    const hasValue = value !== undefined && value.length > 0;

    return (
      <Box style={[{ gap: 6, opacity: disabled ? 0.6 : 1 }, containerStyle]}>
        {label && (
          <Inline align="center" gap={1}>
            <Text
              size="xs"
              weight="bold"
              color={error ? semanticColors.danger : semanticColors.foregroundMuted}
              style={{ textTransform: "uppercase", letterSpacing: 0.8, fontSize: 11 }}
            >
              {label}
            </Text>
            {required && (
              <Text size="xs" weight="bold" color={semanticColors.danger}>
                *
              </Text>
            )}
          </Inline>
        )}

        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: getBgColor(),
              borderWidth: 1,
              borderColor: getBorderColor(),
              borderRadius: size === "sm" ? 6 : size === "lg" ? 10 : 8,
              paddingHorizontal: size === "sm" ? 10 : 12,
              height: getHeight(),
              gap: 8,
              shadowColor: isFocused ? semanticColors.primary : "transparent",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: isFocused ? 0.25 : 0,
              shadowRadius: 6,
              elevation: isFocused ? 2 : 0,
            },
            style,
          ]}
        >
          {leftIcon}
          {prefix && (
            <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
              {prefix}
            </Text>
          )}

          <RNTextInput
            ref={ref}
            value={value}
            onChangeText={onChangeText}
            editable={!disabled}
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
                fontSize: getFontSize(),
                height: "100%",
                paddingVertical: 0,
                paddingHorizontal: 0,
                backgroundColor: "transparent",
                borderWidth: 0,
                // @ts-ignore Web reset
                outlineStyle: "none",
                // @ts-ignore Web reset
                outline: "none",
              },
              inputStyle,
            ]}
            {...rest}
          />

          {loading && <ActivityIndicator size="small" color={semanticColors.primary} />}

          {clearable && hasValue && !disabled && (
            <Pressable
              onPress={() => {
                onChangeText?.("");
                onClear?.();
              }}
              accessibilityLabel="Clear Input"
            >
              <Text size="xs" color={semanticColors.foregroundSubtle}>
                ✕
              </Text>
            </Pressable>
          )}

          {suffix && (
            <Text size="xs" weight="bold" color={semanticColors.foregroundMuted}>
              {suffix}
            </Text>
          )}
          {rightIcon}
        </View>

        {error ? (
          <Text size="xs" color={semanticColors.danger} weight="medium">
            {error}
          </Text>
        ) : helperText ? (
          <Text size="xs" color={semanticColors.foregroundSubtle}>
            {helperText}
          </Text>
        ) : null}
      </Box>
    );
  }
);

Input.displayName = "Input";

export const TextInput = Input;
