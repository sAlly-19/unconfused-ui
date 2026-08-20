import React from "react";
import { View, ViewStyle } from "react-native";
import { Inline, Text, Slot } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { getBadgeRecipe } from "./Badge.styles";

export type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "outline";
export type BadgeSize = "sm" | "md";

export type BadgeProps = {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  radius?: number;
  style?: ViewStyle;
  children: React.ReactNode;
  asChild?: boolean;
};

export const Badge = ({
  variant = "primary",
  size = "md",
  dot = false,
  radius,
  style,
  children,
  asChild,
}: BadgeProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const recipe = getBadgeRecipe(semanticColors);
  const recipeStyles = recipe({ variant, size });

  const getDotColor = () => {
    switch (variant) {
      case "success":
        return baseTokens.colors.success[500];
      case "warning":
        return baseTokens.colors.warning[500];
      case "danger":
        return baseTokens.colors.danger[500];
      case "primary":
      default:
        return semanticColors.primary;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "primary":
        return semanticColors.primaryForeground;
      case "outline":
        return semanticColors.foreground;
      default:
        return semanticColors.foreground;
    }
  };

  const Component = asChild ? Slot : View;

  return (
    <Component style={[...recipeStyles, radius !== undefined && { borderRadius: radius }, style] as any}>
      {asChild ? (
        children
      ) : (
        <Inline align="center" gap={1.5}>
          {dot && (
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: getDotColor(),
              }}
            />
          )}
          {typeof children === "string" ? (
            <Text size={size === "sm" ? "xs" : "sm"} weight="bold" color={getTextColor()}>
              {children}
            </Text>
          ) : (
            children
          )}
        </Inline>
      )}
    </Component>
  );
};

Badge.displayName = "Badge";
