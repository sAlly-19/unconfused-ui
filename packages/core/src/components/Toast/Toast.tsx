import React from "react";
import { View, ViewStyle } from "react-native";
import { Stack, Text } from "@unconfused-ui/primitives";
import { useTheme } from "@unconfused-ui/theme";
import { withAlpha } from "@unconfused-ui/tokens";
import { toastStore, useToasts, type ToastMessage, type ToastOptions } from "./toastStore";

export * from "./toastStore";

export type ToastContextValue = {
  show: (options: ToastOptions) => string;
  toast: (options: ToastOptions) => string;
};

export function useToast(): ToastContextValue {
  return {
    show: toastStore.show,
    toast: toastStore.show,
  };
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { semanticColors, baseTokens, theme } = useTheme();
  const toasts = useToasts();

  const getVariantStyle = (variant?: ToastMessage["variant"]): ViewStyle => {
    switch (variant) {
      case "success":
        return {
          backgroundColor: withAlpha(baseTokens.colors.success[500], 0.15),
          borderColor: withAlpha(baseTokens.colors.success[500], 0.4),
        };
      case "danger":
      case "destructive":
        return {
          backgroundColor: withAlpha(semanticColors.danger, 0.15),
          borderColor: withAlpha(semanticColors.danger, 0.4),
        };
      case "warning":
        return {
          backgroundColor: withAlpha(baseTokens.colors.warning[500], 0.15),
          borderColor: withAlpha(baseTokens.colors.warning[500], 0.4),
        };
      case "default":
      default:
        return {
          backgroundColor: semanticColors.surface,
          borderColor: semanticColors.borderBold,
        };
    }
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      {children}

      {/* Floating Toast Notification Container (subscribes via useSyncExternalStore) */}
      {toasts.length > 0 && (
        <View
          style={{
            position: "absolute",
            top: 40,
            left: 20,
            right: 20,
            zIndex: 2000,
            gap: 10,
            alignItems: "center",
          }}
          pointerEvents="box-none"
        >
          {toasts.map((toastItem) => (
            <View
              key={toastItem.id}
              accessibilityLiveRegion={
                toastItem.variant === "danger" || toastItem.variant === "destructive" ? "assertive" : "polite"
              }
              style={[
                {
                  maxWidth: 420,
                  width: "100%",
                  borderRadius: 12,
                  borderWidth: 1,
                  padding: 14,
                  ...((theme && theme.shadows && theme.shadows.lg) || {}),
                },
                getVariantStyle(toastItem.variant),
              ]}
            >
              <Stack gap={1}>
                <Text size="sm" weight="bold" color={semanticColors.foreground}>
                  {toastItem.title}
                </Text>
                {toastItem.description && (
                  <Text size="xs" color={semanticColors.foregroundMuted}>
                    {toastItem.description}
                  </Text>
                )}
              </Stack>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

ToastProvider.displayName = "ToastProvider";
