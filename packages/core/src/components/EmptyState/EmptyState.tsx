import React from "react";
import { View, ViewStyle } from "react-native";
import { Box, Center, Inline, Pressable, Stack, Text, VStack } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";
import { Button } from "../Button";
import { Spinner } from "../Feedback/FeedbackVariants";

export type EmptyStateProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  style?: ViewStyle;
};

export const EmptyState = ({
  title = "No Items Found",
  description = "There is no data to display at the moment.",
  icon = <Text size="3xl">📭</Text>,
  actionLabel,
  onAction,
  secondaryActionLabel,
  onSecondaryAction,
  style,
}: EmptyStateProps) => {
  const { semanticColors, baseTokens } = useTheme();

  return (
    <Box
      style={[
        {
          padding: 36,
          borderRadius: 20,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.8),
          borderWidth: 1,
          borderColor: semanticColors.borderSubtle,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <VStack gap={4} align="center" style={{ maxWidth: 380 }}>
        {/* Icon Circle Glow */}
        <Center
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: withAlpha(semanticColors.primary, 0.15),
            borderWidth: 1,
            borderColor: withAlpha(semanticColors.primary, 0.3),
          }}
        >
          {icon}
        </Center>

        <VStack gap={1.5} align="center">
          <Text size="lg" weight="bold" color={semanticColors.foreground} style={{ textAlign: "center" }}>
            {title}
          </Text>
          <Text size="xs" color={semanticColors.foregroundMuted} style={{ textAlign: "center", lineHeight: 18 }}>
            {description}
          </Text>
        </VStack>

        {(actionLabel || secondaryActionLabel) && (
          <Inline gap={2} style={{ marginTop: 4 }}>
            {secondaryActionLabel && onSecondaryAction && (
              <Button size="sm" variant="ghost" onPress={onSecondaryAction}>
                {secondaryActionLabel}
              </Button>
            )}
            {actionLabel && onAction && (
              <Button size="sm" variant="primary" onPress={onAction}>
                {actionLabel}
              </Button>
            )}
          </Inline>
        )}
      </VStack>
    </Box>
  );
};
EmptyState.displayName = "EmptyState";

// 1. NoResults (Search / Filter empty state)
export const NoResults = (props: EmptyStateProps) => (
  <EmptyState
    title="No Matching Results"
    description="We couldn't find anything matching your query. Try searching with different keywords."
    icon={<Text size="2xl">🔍</Text>}
    actionLabel="Clear Search"
    {...props}
  />
);
NoResults.displayName = "NoResults";

// 2. NotFound (404 Page / Resource not found)
export const NotFound = (props: EmptyStateProps) => (
  <EmptyState
    title="404 - Node Not Found"
    description="The requested cluster instance or resource has been relocated or decommissioned."
    icon={<Text size="2xl">🪐</Text>}
    actionLabel="Back to Dashboard"
    {...props}
  />
);
NotFound.displayName = "NotFound";

// 3. ErrorState (Exception / Fault)
export const ErrorState = (props: EmptyStateProps) => (
  <EmptyState
    title="Service Unavailable"
    description="An unexpected telemetry fault occurred while communicating with the cluster."
    icon={<Text size="2xl">⚠️</Text>}
    actionLabel="Retry Operation"
    {...props}
  />
);
ErrorState.displayName = "ErrorState";

// 4. OfflineState (No Connection)
export const OfflineState = (props: EmptyStateProps) => (
  <EmptyState
    title="Connection Offline"
    description="Your client is currently disconnected from the global network mesh. Reconnecting..."
    icon={<Text size="2xl">📡</Text>}
    actionLabel="Reconnect Now"
    {...props}
  />
);
OfflineState.displayName = "OfflineState";

// 5. LoadingState (Activity container)
export const LoadingState = ({
  title = "Synchronizing Telemetry...",
  description = "Pulling latest replica metrics from distributed edge workers.",
  style,
}: EmptyStateProps) => {
  const { semanticColors, baseTokens } = useTheme();

  return (
    <Box
      style={[
        {
          padding: 36,
          borderRadius: 20,
          backgroundColor: withAlpha(baseTokens.colors.black, 0.8),
          borderWidth: 1,
          borderColor: semanticColors.borderSubtle,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <VStack gap={3} align="center" style={{ maxWidth: 360 }}>
        <Spinner size="large" />
        <VStack gap={1} align="center">
          <Text size="md" weight="bold" color={semanticColors.foreground} style={{ textAlign: "center" }}>
            {title}
          </Text>
          <Text size="xs" color={semanticColors.foregroundMuted} style={{ textAlign: "center" }}>
            {description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};
LoadingState.displayName = "LoadingState";
