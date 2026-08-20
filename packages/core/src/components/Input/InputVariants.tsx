import React, { useState } from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Input, InputProps } from "./Input";

export * from "../Textarea";

export type SearchInputProps = InputProps & {
  onSearch?: (query: string) => void;
};

export const SearchInput = ({
  placeholder = "Search anything...",
  clearable = true,
  leftIcon = <Text size="xs">🔍</Text>,
  ...rest
}: SearchInputProps) => (
  <Input
    placeholder={placeholder}
    clearable={clearable}
    leftIcon={leftIcon}
    returnKeyType="search"
    {...rest}
  />
);
SearchInput.displayName = "SearchInput";

export type PasswordInputProps = InputProps & {
  showStrengthMeter?: boolean;
};

export const PasswordInput = ({
  placeholder = "Enter secure password",
  showStrengthMeter = false,
  value = "",
  onChangeText,
  ...rest
}: PasswordInputProps) => {
  const [secure, setSecure] = useState(true);
  const { semanticColors, baseTokens } = useTheme();

  const getStrength = () => {
    if (value.length === 0) return 0;
    if (value.length < 6) return 1;
    if (value.length < 10) return 2;
    return 3;
  };

  const strength = getStrength();

  return (
    <VStack gap={2}>
      <Input
        secureTextEntry={secure}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        leftIcon={<Text size="xs">🔒</Text>}
        rightIcon={
          <Pressable onPress={() => setSecure(!secure)} accessibilityLabel="Toggle Password Visibility">
            <Text size="xs" color={semanticColors.primary} weight="bold">
              {secure ? "SHOW" : "HIDE"}
            </Text>
          </Pressable>
        }
        {...rest}
      />

      {showStrengthMeter && value.length > 0 && (
        <VStack gap={1}>
          <HStack gap={1} style={{ width: "100%", height: 3 }}>
            <Box
              flex={1}
              rounded="sm"
              bg={strength >= 1 ? semanticColors.danger : "rgba(255,255,255,0.1)"}
            />
            <Box
              flex={1}
              rounded="sm"
              bg={strength >= 2 ? baseTokens.colors.warning[500] : "rgba(255,255,255,0.1)"}
            />
            <Box
              flex={1}
              rounded="sm"
              bg={strength >= 3 ? baseTokens.colors.success[500] : "rgba(255,255,255,0.1)"}
            />
          </HStack>
          <Text size="xs" color={semanticColors.foregroundSubtle}>
            {strength === 1 ? "Weak password" : strength === 2 ? "Moderate security" : "Strong protection"}
          </Text>
        </VStack>
      )}
    </VStack>
  );
};
PasswordInput.displayName = "PasswordInput";

export type NumberInputProps = Omit<InputProps, "value" | "onChangeText"> & {
  value?: number;
  onChangeValue?: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

export const NumberInput = ({
  value = 0,
  onChangeValue,
  min = 0,
  max = 100,
  step = 1,
  ...rest
}: NumberInputProps) => {
  const { semanticColors } = useTheme();

  const handleDecrement = () => {
    const next = Math.max(min, value - step);
    onChangeValue?.(next);
  };

  const handleIncrement = () => {
    const next = Math.min(max, value + step);
    onChangeValue?.(next);
  };

  return (
    <Input
      keyboardType="numeric"
      value={String(value)}
      leftIcon={
        <Pressable
          onPress={handleDecrement}
          disabled={value <= min}
          style={{ paddingHorizontal: 6 }}
        >
          <Text size="md" weight="bold" color={value <= min ? semanticColors.foregroundSubtle : semanticColors.primary}>
            −
          </Text>
        </Pressable>
      }
      rightIcon={
        <Pressable
          onPress={handleIncrement}
          disabled={value >= max}
          style={{ paddingHorizontal: 6 }}
        >
          <Text size="md" weight="bold" color={value >= max ? semanticColors.foregroundSubtle : semanticColors.primary}>
            ＋
          </Text>
        </Pressable>
      }
      inputStyle={{ textAlign: "center", fontWeight: "bold" }}
      {...rest}
    />
  );
};
NumberInput.displayName = "NumberInput";

export type EmailInputProps = InputProps;
export const EmailInput = ({
  placeholder = "name@company.com",
  leftIcon = <Text size="xs">✉️</Text>,
  ...props
}: EmailInputProps) => (
  <Input
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    placeholder={placeholder}
    leftIcon={leftIcon}
    {...props}
  />
);
EmailInput.displayName = "EmailInput";

export type PhoneInputProps = InputProps & {
  countryPrefix?: string;
};

export const PhoneInput = ({
  countryPrefix = "+1",
  placeholder = "(555) 000-0000",
  leftIcon,
  ...props
}: PhoneInputProps) => (
  <Input
    keyboardType="phone-pad"
    placeholder={placeholder}
    prefix={countryPrefix}
    leftIcon={leftIcon ?? <Text size="xs">📞</Text>}
    {...props}
  />
);
PhoneInput.displayName = "PhoneInput";

export type OTPInputProps = {
  length?: number;
  value?: string;
  onChangeText?: (text: string) => void;
  mask?: boolean;
  style?: ViewStyle;
};

export const OTPInput = ({
  length = 6,
  value = "",
  mask = false,
  onChangeText,
  style,
}: OTPInputProps) => {
  const { semanticColors } = useTheme();
  const digits = value.padEnd(length, "").split("").slice(0, length);

  return (
    <Inline gap={2} align="center" style={style}>
      {Array.from({ length }).map((_, index) => {
        const rawChar = digits[index] || "";
        const isFilled = rawChar.length > 0;
        const isCurrent = index === Math.min(value.length, length - 1);
        const displayChar = mask && isFilled ? "●" : rawChar;

        return (
          <View
            key={index}
            style={{
              width: 44,
              height: 52,
              borderRadius: 10,
              borderWidth: isCurrent && !isFilled ? 2 : 1.5,
              borderColor: isFilled
                ? semanticColors.primary
                : isCurrent
                ? semanticColors.primary
                : semanticColors.border,
              backgroundColor: "rgba(16, 18, 30, 0.85)",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: isCurrent ? semanticColors.primary : "transparent",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: isCurrent ? 0.4 : 0,
              shadowRadius: 6,
            }}
          >
            <Text
              size="lg"
              weight="bold"
              color={isFilled ? semanticColors.foreground : semanticColors.foregroundSubtle}
            >
              {displayChar}
            </Text>
          </View>
        );
      })}
    </Inline>
  );
};
OTPInput.displayName = "OTPInput";

export const PinInput = ({ length = 4, ...props }: OTPInputProps) => (
  <OTPInput length={length} mask {...props} />
);
PinInput.displayName = "PinInput";

export const CodeInput = ({ length = 6, ...props }: OTPInputProps) => (
  <OTPInput length={length} {...props} />
);
CodeInput.displayName = "CodeInput";

export type CurrencyInputProps = InputProps & {
  currencySymbol?: string;
};

export const CurrencyInput = ({
  currencySymbol = "$",
  placeholder = "0.00",
  ...props
}: CurrencyInputProps) => (
  <Input
    keyboardType="decimal-pad"
    prefix={currencySymbol}
    placeholder={placeholder}
    inputStyle={{ fontWeight: "bold" }}
    {...props}
  />
);
CurrencyInput.displayName = "CurrencyInput";

export type MaskedInputProps = InputProps & {
  mask?: string;
};

export const MaskedInput = ({ mask, placeholder, ...props }: MaskedInputProps) => (
  <Input placeholder={placeholder ?? mask} {...props} />
);
MaskedInput.displayName = "MaskedInput";
