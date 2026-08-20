import React from "react";
import { View, ViewStyle } from "react-native";
import { Box, HStack, Inline, Pressable, Stack, Surface, SurfaceProps, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "./Card";

export * from "./Card";

export const CardBody = CardContent;

// 1. Panel (Dashboard container with title bar)
export type PanelProps = {
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  variant?: "glass" | "bordered" | "default";
  style?: ViewStyle;
  children: React.ReactNode;
};

export const Panel = ({
  title,
  subtitle,
  headerAction,
  variant = "glass",
  style,
  children,
}: PanelProps) => {
  const { semanticColors } = useTheme();

  return (
    <Card variant={variant} accentBar={false} style={style}>
      {(title || headerAction) && (
        <Card.Header>
          <Inline justify="space-between" align="center">
            <VStack gap={0.5}>
              {title && <Card.Title>{title}</Card.Title>}
              {subtitle && <Card.Description>{subtitle}</Card.Description>}
            </VStack>
            {headerAction}
          </Inline>
        </Card.Header>
      )}
      <Card.Content>{children}</Card.Content>
    </Card>
  );
};
Panel.displayName = "Panel";

// 2. Paper (Elevated sheet surface)
export type PaperProps = SurfaceProps & {
  style?: ViewStyle;
};

export const Paper = (props: PaperProps): React.JSX.Element => <Surface {...props} />;
Paper.displayName = "Paper";

// 3. Tile (Stat / modular metric tile)
export type TileProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  trend?: string;
  style?: ViewStyle;
};

export const Tile = ({ title, value, subtitle, icon, badge, trend, style }: TileProps) => {
  const { semanticColors } = useTheme();

  return (
    <Box
      style={[
        {
          padding: 16,
          borderRadius: 14,
          backgroundColor: "rgba(16, 18, 30, 0.8)",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          gap: 12,
        },
        style,
      ]}
    >
      <Inline justify="space-between" align="center">
        <Inline align="center" gap={2}>
          {icon}
          <Text size="xs" weight="bold" color={semanticColors.foregroundMuted} style={{ textTransform: "uppercase" }}>
            {title}
          </Text>
        </Inline>
        {badge}
      </Inline>

      <VStack gap={1}>
        <Text size="2xl" weight="bold" color={semanticColors.foreground}>
          {value}
        </Text>
        {(subtitle || trend) && (
          <Inline align="center" gap={2}>
            {trend && (
              <Text size="xs" weight="bold" color="#10B981">
                {trend}
              </Text>
            )}
            {subtitle && (
              <Text size="xs" color={semanticColors.foregroundSubtle}>
                {subtitle}
              </Text>
            )}
          </Inline>
        )}
      </VStack>
    </Box>
  );
};
Tile.displayName = "Tile";

export const StatTile = Tile;
export type StatTileProps = TileProps;

// 4. FeatureCard (Marketing & onboarding card)
export type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  ctaLabel?: string;
  onCtaPress?: () => void;
  style?: ViewStyle;
};

export const FeatureCard = ({
  title,
  description,
  icon,
  badge,
  ctaLabel,
  onCtaPress,
  style,
}: FeatureCardProps) => {
  const { semanticColors } = useTheme();

  return (
    <Card variant="glass" accentBar style={style}>
      <Card.Header>
        <Inline justify="space-between" align="flex-start">
          <Box
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: "rgba(124, 58, 237, 0.2)",
              borderWidth: 1,
              borderColor: "rgba(124, 58, 237, 0.4)",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            {icon}
          </Box>
          {badge}
        </Inline>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Content>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      {ctaLabel && (
        <Card.Footer>
          <Pressable onPress={onCtaPress}>
            <Text size="xs" weight="bold" color={semanticColors.primary}>
              {ctaLabel} →
            </Text>
          </Pressable>
        </Card.Footer>
      )}
    </Card>
  );
};
FeatureCard.displayName = "FeatureCard";

// 5. ActionCard (Interactive clickable card)
export type ActionCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  badge?: React.ReactNode;
  style?: ViewStyle;
};

export const ActionCard = ({
  title,
  description,
  icon,
  actionLabel = "Configure",
  onAction,
  badge,
  style,
}: ActionCardProps) => {
  const { semanticColors } = useTheme();

  return (
    <Pressable onPress={onAction} disabled={!onAction}>
      <Box
        style={[
          {
            padding: 18,
            borderRadius: 16,
            backgroundColor: "rgba(16, 18, 30, 0.8)",
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.1)",
            gap: 12,
          },
          style,
        ]}
      >
        <Inline justify="space-between" align="center">
          <Inline align="center" gap={3}>
            {icon && (
              <Box
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  backgroundColor: "rgba(124, 58, 237, 0.15)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icon}
              </Box>
            )}
            <Text size="md" weight="bold" color={semanticColors.foreground}>
              {title}
            </Text>
          </Inline>
          {badge}
        </Inline>

        <Text size="xs" color={semanticColors.foregroundMuted} lineHeight="sm">
          {description}
        </Text>

        <Inline justify="flex-end" align="center" gap={1}>
          <Text size="xs" weight="bold" color={semanticColors.primary}>
            {actionLabel}
          </Text>
          <Text size="xs" color={semanticColors.primary}>
            →
          </Text>
        </Inline>
      </Box>
    </Pressable>
  );
};
ActionCard.displayName = "ActionCard";
