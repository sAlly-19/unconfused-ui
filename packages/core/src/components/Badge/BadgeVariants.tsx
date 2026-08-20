import React from "react";
import { View, ViewStyle } from "react-native";
import { Box, Center, Inline, Pressable, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";
import { Badge, BadgeProps } from "./Badge";

export * from "./Badge";

// 1. StatusBadge (Badge with pulse dot)
export type StatusBadgeProps = Omit<BadgeProps, "children"> & {
  status?: "online" | "busy" | "away" | "offline";
  label?: string;
  children?: React.ReactNode;
};

export const StatusBadge = ({ status = "online", label, children, ...props }: StatusBadgeProps) => {
  const getVariant = () => {
    switch (status) {
      case "online":
        return "success" as const;
      case "busy":
        return "danger" as const;
      case "away":
        return "warning" as const;
      case "offline":
      default:
        return "outline" as const;
    }
  };

  return <Badge variant={getVariant()} dot {...props}>{children ?? label ?? status.toUpperCase()}</Badge>;
};
StatusBadge.displayName = "StatusBadge";

// 2. Tag (Dismissible category tag)
export type TagProps = BadgeProps & {
  onRemove?: () => void;
};

export const Tag = ({ onRemove, children, ...props }: TagProps) => {
  const { baseTokens } = useTheme();

  return (
    <Badge {...props}>
      <Inline align="center" gap={1.5}>
        <Text size="xs" weight="medium">{children}</Text>
        {onRemove && (
          <Pressable onPress={onRemove} accessibilityLabel="Remove Tag">
            <Text size="xs" color={withAlpha(baseTokens.colors.white, 0.6)}>✕</Text>
          </Pressable>
        )}
      </Inline>
    </Badge>
  );
};
Tag.displayName = "Tag";

// 3. Chip (Interactive selectable chip)
export type ChipProps = {
  label: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

export const Chip = ({ label, icon, selected = false, onPress, style }: ChipProps) => {
  const { semanticColors, baseTokens } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 20,
          backgroundColor: selected ? withAlpha(baseTokens.colors.brand[500], 0.25) : withAlpha(baseTokens.colors.white, 0.05),
          borderWidth: 1,
          borderColor: selected ? semanticColors.primary : withAlpha(baseTokens.colors.white, 0.12),
        },
        style,
      ]}
    >
      {icon}
      <Text
        size="xs"
        weight={selected ? "bold" : "medium"}
        color={selected ? semanticColors.primary : semanticColors.foreground}
      >
        {label}
      </Text>
    </Pressable>
  );
};
Chip.displayName = "Chip";

// 4. Pill (Rounded badge)
export type PillProps = BadgeProps;
export const Pill = (props: PillProps) => <Badge radius={999} {...props} />;
Pill.displayName = "Pill";

// 5. Dot & Indicator
export type DotProps = {
  color?: string;
  size?: number;
  pulse?: boolean;
  style?: ViewStyle;
};

export const Dot = ({ color, size = 8, pulse = false, style }: DotProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const activeColor = color ?? semanticColors.primary;

  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: activeColor,
          shadowColor: pulse ? withAlpha(baseTokens.colors.black, 0.8) : "transparent",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: pulse ? 1 : 0,
          shadowRadius: 6,
          elevation: pulse ? 3 : 0,
        },
        style,
      ]}
    />
  );
};
Dot.displayName = "Dot";

export const Indicator = Dot;

// 6. Counter (Count badge)
export type CounterProps = {
  count: number;
  max?: number;
  variant?: "danger" | "primary" | "neutral";
  style?: ViewStyle;
};

export const Counter = ({ count, max = 99, variant = "danger", style }: CounterProps) => {
  const { semanticColors, baseTokens } = useTheme();
  const display = count > max ? `${max}+` : count.toString();

  const bg =
    variant === "danger"
      ? semanticColors.danger
      : variant === "primary"
      ? semanticColors.primary
      : semanticColors.surfaceSubtle;

  return (
    <Center
      accessibilityRole="adjustable"
      accessibilityValue={{ min: 0, max, now: count, text: `${count}` }}
      style={[
        {
          minWidth: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: bg,
          paddingHorizontal: 6,
        },
        style,
      ]}
    >
      <Text size="xs" weight="bold" color={baseTokens.colors.white} style={{ fontSize: 10 }}>
        {display}
      </Text>
    </Center>
  );
};
Counter.displayName = "Counter";
