import React from "react";
import { View, ViewStyle } from "react-native";
import { usePressableState } from "@unconfused-ui/hooks";
import { Pressable } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { getIconButtonRecipe } from "./IconButton.styles";

export type IconButtonVariant = "primary" | "secondary" | "destructive" | "outline" | "ghost" | "glass";
export type IconButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconButtonShape = "circle" | "rounded" | "square";

export type IconButtonProps = {
  icon: React.ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  shape?: IconButtonShape;
  badge?: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
  accessibilityLabel: string;
  asChild?: boolean;
};

export const IconButton = React.forwardRef<View, IconButtonProps>(
  (
    {
      icon,
      variant = "primary",
      size = "md",
      shape = "circle",
      badge,
      disabled = false,
      style,
      onPress,
      accessibilityLabel,
      asChild,
      ...rest
    },
    ref
  ) => {
    const { semanticColors } = useTheme();
    const recipe = getIconButtonRecipe(semanticColors);
    const { isPressed, pressableProps } = usePressableState({ disabled });

    const recipeStyles = recipe({ variant, size });

    const getBorderRadius = () => {
      switch (shape) {
        case "square":
          return 0;
        case "rounded":
          return size === "xs" ? 6 : size === "sm" ? 8 : 12;
        case "circle":
        default:
          return 9999;
      }
    };

    return (
      <Pressable
        ref={ref}
        disabled={disabled}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled }}
        style={[
          ...recipeStyles,
          { borderRadius: getBorderRadius(), position: "relative" },
          isPressed && { opacity: 0.85, transform: [{ scale: 0.94 }] },
          style,
        ]}
        asChild={asChild}
        {...pressableProps}
        {...rest}
      >
        {asChild ? (
          icon
        ) : (
          <>
            {icon}
            {badge && (
              <View style={{ position: "absolute", top: -4, right: -4, zIndex: 10 }}>
                {badge}
              </View>
            )}
          </>
        )}
      </Pressable>
    );
  }
);

IconButton.displayName = "IconButton";
