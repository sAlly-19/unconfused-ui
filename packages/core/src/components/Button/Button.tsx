import React from "react";
import { ActivityIndicator, View, ViewStyle } from "react-native";
import { HapticFeedbackType, useHaptics, usePressableState, useFocusRing } from "@unconfused-ui/hooks";
import { Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { getButtonRecipe } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "destructive" | "outline" | "ghost" | "glass" | "subtle";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonRadius = "sm" | "md" | "lg" | "full";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRadius;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  badge?: React.ReactNode;
  style?: ViewStyle | ((state: { pressed: boolean }) => ViewStyle);
  children?: React.ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
  asChild?: boolean;
  haptic?: HapticFeedbackType | boolean;
};

export const Button = React.forwardRef<View, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      rounded,
      disabled = false,
      loading = false,
      loadingText,
      fullWidth = false,
      leftIcon,
      rightIcon,
      badge,
      style,
      children,
      onPress,
      accessibilityLabel,
      asChild,
      haptic,
      ...rest
    },
    ref
  ) => {
    const { semanticColors } = useTheme();
    const recipe = getButtonRecipe(semanticColors);
    const { trigger: triggerHaptic } = useHaptics();
    const { isPressed, pressableProps } = usePressableState({ disabled: disabled || loading });
    const { isFocusVisible, focusProps, focusRingStyle } = useFocusRing();

    const recipeStyles = recipe({ variant, size });

    const getTextColor = () => {
      if (disabled) return semanticColors.foregroundSubtle;
      switch (variant) {
        case "primary":
          return semanticColors.primaryForeground;
        case "secondary":
          return semanticColors.foreground;
        case "destructive":
          return semanticColors.dangerForeground;
        case "outline":
        case "ghost":
        case "glass":
        case "subtle":
          return semanticColors.primary;
        default:
          return semanticColors.foreground;
      }
    };

    const getBorderRadius = () => {
      if (!rounded) return undefined;
      switch (rounded) {
        case "sm":
          return 6;
        case "md":
          return 10;
        case "lg":
          return 16;
        case "full":
          return 9999;
      }
    };

    const getTextSize = () => {
      switch (size) {
        case "xs":
          return "xs" as const;
        case "sm":
          return "xs" as const;
        case "lg":
          return "md" as const;
        case "xl":
          return "lg" as const;
        case "md":
        default:
          return "sm" as const;
      }
    };

    const handlePress = () => {
      if (haptic) {
        triggerHaptic(typeof haptic === "string" ? haptic : "light");
      }
      onPress?.();
    };

    return (
      <Pressable
        ref={ref}
        disabled={disabled || loading}
        onPress={handlePress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled: disabled || loading, busy: loading }}
        style={(state) => [
          ...recipeStyles,
          rounded && { borderRadius: getBorderRadius() },
          fullWidth && { width: "100%" },
          isPressed && { opacity: 0.85, transform: [{ scale: 0.97 }] },
          focusRingStyle,
          typeof style === "function" ? style(state) : style,
        ]}
        asChild={asChild}
        {...pressableProps}
        {...focusProps}
        {...rest}
      >
        {asChild ? (
          children
        ) : (
          <Inline align="center" justify="center" gap={2}>
            {loading ? (
              <>
                <ActivityIndicator size="small" color={getTextColor()} />
                {loadingText && (
                  <Text size={getTextSize()} weight="bold" color={getTextColor()}>
                    {loadingText}
                  </Text>
                )}
              </>
            ) : (
              <>
                {leftIcon}
                {typeof children === "string" ? (
                  <Text size={getTextSize()} weight="bold" color={getTextColor()}>
                    {children}
                  </Text>
                ) : (
                  children
                )}
                {rightIcon}
                {badge}
              </>
            )}
          </Inline>
        )}
      </Pressable>
    );
  }
);

Button.displayName = "Button";
